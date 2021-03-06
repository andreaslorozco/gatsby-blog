---
path: "/blog/render-condicional-react"
layout: post
title:  "Corto-Circuito en rendereos condicionales de React"
date:   2020-03-14T19:08:29.962Z
author: Andreas
categories: javascript, react
excerpt: "Aprendiendo a las malas sobre el rendereo condicional en React..."
published: true
---

# Corto-Circuito en rendereos condicionales de React

Hace poco me topé con un problema en el trabajo mientras estaba trabajando en el renderizado de una lista de elementos, utilizando React. Normalmente, si el renderizado de un elemento dependía de alguna condición, yo escribía el código de esta forma:

```javascript{numberLines: true}

class MiComponente extends React.Component {
render() {
  return(
    <div>
      { condicion ?
        <OtroComponente miProp={this.state.arreglo} /> :
        null
      }
    </div>
	)
}

``` 

Como se puede ver, lo que yo utilizaba era un operador condicional **if/else inline** (en una sola linea). Si la condición era un valor *truthy*, **OtroComponente** es renderizado en el navegador. De lo contrario, no se renderea nada.

Hasta donde entiendo, esta implementación es válida. Sin embargo, había visto a otros desarrolladores más expertos utilizar esta sintáxis también:

```javascript{numberLines: true}

class MiComponente extends React.Component {
  render() {
    return(
      <div>
        { condicion &&
          <OtroComponente miProp={this.state.arreglo}/>
        }
      </div>
    )
  }
}
```

Esta sintáxis me parecía super interesante. No sólo me permite ahorrarme cerca de 4 caracteres (**WOW!**), sino que puedo aparentar ser cool como esos otros desarrolladores (*ummm, sin comentarios*). Sin hacer muchos spoilers, les cuento que a esta sintáxis se le conoce como corto-circuito (short-circuit) en React.

Decidí un día intentar utilizarla sin investigar mucho su funcionalidad. Aprovechando que estaba trabajando en unos bugfixes, decidí refactorizar esos operadores condicionales **if/else** y cambiarlos por la nueva sintaxis. Mi **OtroComponente** recibe como props un arreglo y se encarga de renderizar la información de ese arreglo en una lista. Por lo tanto, me pareció que lo mejor sería utilizar la longitud de ese arreglo (*array.length*) como el condicional. Esto fue lo que hice:

```javascript{numberLines: true}
class MiComponente extends React.Component {
  render() {
    return(
      <div>
        { this.state.arreglo.length &&
          <OtroComponente
            miProp={this.state.arreglo}
          />
        }
      </div>
    )
  }
}
```

Todo funcionaba bien cuando la longitud del arreglo era mayor a 0. Lo que casi se escapa de mi vista era que, cuando la longitud del arreglo sí era cero, en vez de no renderizar nada, React renderizaba el valor **0** en la aplicación. ¿Por qué si cero es un valor *falsy*, se está rendereando el valor de cero?

## Vamos por partes

Primero, nuestra condición es definitivamente falsy, por lo que **no** se va a devolver nuestro segundo argumento (<OtroComponente />), sino que va a devolver el primer argumento.

Segundo, React renderiza todo lo que sea `typeof string` o `typeof int`, e ignora el renderizado de todo `typeof boolean` o `typeof undefined`.

Por lo tanto, ya que la longitud del arreglo es un número y ese valor es el que se está devolviendo en la evaluación de nuestra condición, se renderiza el número 0 en nuestro HTML.

## ¿Cómo lo arreglamos?

Ya teniendo conocimiento de lo que está pasando, el fix es relativamente sencillo. En vez de evaluar la longitud del arreglo por sí sola, podemos evaluar si la longitud del arreglo es mayor a 0 (también podemos evaluar si es distinto a cero, etc...) para que la expresión nos devuelva *true* o *false*:

```javascript{numberLines: true}
class MiComponente extends React.Component {
  render() {
    return(
      <div>
        { this.state.arreglo.length > 0 &&
          <OtroComponente
            miProp={this.state.arreglo}
          />
        }
      </div>
    )
  }
}
```

## Aprendizaje

Al final de cuentas, no me ahorré tantos caracteres como tenía pensado. Sin embargo, conocer cómo funcionan este tipo de trucos en React es el mayor aprendizaje. No solo me permite de verdad entender el código que estoy escribiendo, sino también mayor capacidad de entender el código que otras personas han escrito.

##  Enlaces

Te dejo por acá diferentes enlaces que fueron útiles para entender mi error:

*  [Renderizado condicional en React DOCs](https://es.reactjs.org/docs/conditional-rendering.html)

*  [CONDITIONAL RENDERING IN REACT: && (en inglés)](https://www.robinwieruch.de/conditional-rendering-react#conditional-rendering-in-react-)

*  [Consulta relacionada en StackOverflow (en inglés)](https://stackoverflow.com/questions/53048037/react-showing-0-instead-of-nothing-with-short-circuit-conditional-component)
