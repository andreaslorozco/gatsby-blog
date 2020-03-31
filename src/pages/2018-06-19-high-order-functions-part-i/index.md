---
path: "/blog/funciones-orden-superior-parte-i"
layout: post
title:  "Funciones de orden superior - Parte I"
date:   2018-06-19T19:08:29.962Z
author: Andreas
categories: javascript
excerpt: "Las funciones flecha de Javascript son expresiones que ahora fomran parte de ES6. Mientras que existen diferencias en apariencia intimidantes entre una expresión de función 'normal' y una expresión de función flecha, estas diferencias son fáciles de superar."
published: true
---

# Funciones de Orden Superior - Parte I

Escrito por Andreas el 19 de junio, 2018

## Revisión de Conocimiento

Una 'Función de Alto Orden' no es un concepto exclusivo de Javascript. Aún así, para definir qué es una función de orden superior, vale la pena utilizar un par de minutos para repasar algunos conceptos para que su conceptop nos haga *click*.

### Concepto #1 y #2: Argumentos y Parámentros 

Estoy seguro que muchos de nosotros hemos utilizado estos términos de forma intercambiable. Pues... **¡en realidad no lo son!**.

Según el [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Glossary/Parameter), un **parámetro** es una *variable nombrada* que es pasada a una función. Por otra parte, un **argumento** es importado a una función a través de esa variable. 

OK... creo que lo puedo explicar. Vamos a crear una función muy simple que toma un *parámetro* y nos devuelve a la consola el tipo de *argumento* enviado. Voy a usar la sintáxis de funciones flecha así que si no la conoces, te recomiendo entrar a mi post anterior donde [intento explicar qué son funciones flecha](http://www.andreaslorozco.com/blog/funciones-flecha).

```javascript{numberLines: true}

const typeOfParam = (param) => typeof param;

const example = 'I am an example';
console.log(typeOfParam(example));

## string

```

Según nuestra definición de arriba:

* Pasamos la variable llamada `example` a la función typeOfParam. En este caso, `example` es el **parámetro**.
* La hilera de caractéres `'I am an example'` fue importada a través del parámetro. Entonces, `'I am an example'` es el **argumento**.
* Notemos que `typeOfParam` también es una variable *nombrada*, y está describiendo la función. Esto será importante más adelante.

### Concepto #2: La sentencia *return*

Este concepto es más sencillo de explicar y entender, y de nuevo usaremos [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return) para definirlo. Una sentencia de *return* **finaliza la ejecución** de una función, y **especifica qué valor necesita ser devuelto** a quien llama la función. Cambiemos nuestro ejemplo anterior un poco:

```javascript{numberLines: true}

const typeOfParam = (param) => {
    return typeof param;
    console.log('This will not run');
}

const example = 2;
console.log(typeOfParam(example)); // "number"

```

Cambiamos la definición de nuestra función a multi-línea porque quiero que quede claro cómo funciona la sentencia de return. En este ejemplo, notemos que `"number"` fue logeado en la consola, lo que lo convierte en el *valor que necesita ser devuelto* por `console.log()`, quien llama la función. También notemos cómo la sentencia `console.log('This will not run')` nunca corrió; la sentencia de return *terminó la ejecución de la función* antes que la función llegara a esa línea. 

## ¿Qué son funciones de orden superior?

Con lo anterior ya entendido, estoy seguro que podemos comprender la definición de funciones de orden superior más facil. 

With that out of the way, I'm sure we'll be able to understand the definition of a Higher-Order function way easier. [**Marijn Haverbeke**](https://twitter.com/marijnjh), en su libro de [Eloquent Javascript](https://eloquentjavascript.net/05_higher_order.html), explica que las funciones de orden superor son funciones que ***"...operan en otras funciones, ya sea tomando una función como argumento o retornando una función......"***.

Son útiles porque hacen nuestro código mas fácil de comprender, y más fácil de mantener. Actualmente en Javascript, podemos ver funciones de orden superior como `.filter()`, `.map()` y `.reduce()`. Estas son funciones que nos permiten *filtrar* ciertos valores de un arreglo, *correr una función* en cada valor de un arreglo, o *reducir un arreglo* a un solo valor. Si consideramos cuántas veces realizamos este tipo de operaciones en arreglos, rápidamente podemos apreciar que tan útiles pueden ser una vez que entendemos su sintáxis. Vamos a dejar esto para la Parte 2.

### Enlaces

* [Eloquent JavaScript, 3rd edition](https://eloquentjavascript.net/)
* [Parameters in MDN](https://developer.mozilla.org/en-US/docs/Glossary/Parameter)
* [Return statement in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return)