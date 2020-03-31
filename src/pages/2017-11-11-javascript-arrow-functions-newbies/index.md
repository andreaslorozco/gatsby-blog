---
path: "/blog/funciones-flecha"
layout: post
title:  "¡Funciones flecha para novatos!"
date:   2017-11-11T19:08:29.962Z
author: Andreas
categories: javascript
excerpt: "Las funciones flecha de Javascript son expresiones que ahora forman parte de ES6. Mientras que existen diferencias en apariencia intimidantes entre una expresión de función *normal* y una expresión de función flecha, estas diferencias son fáciles de superar."
published: true
---

# ¿Qué son las funciones flecha en Javascript?

Escrito por Andreas el 11 de Noviembre, 2017

Las funciones flecha de Javascript son expresiones que ahora fomran parte de ES6. Mientras que existen diferencias en apariencia intimidantes entre una expresión de función *normal* y una expresión de función flecha, estas diferencias son fáciles de superar.

## ¿Cómo luce una expresión de función *normal*?

Si ya has usado Javascript en el pasado, puede que hayas escrito tus funciones como el código ejemplificado aquí abajo.

```javascript{numberLines: true}
let sum = function(a, b) {
  return a+b;
};

console.log(sum(1, 2));
// 3
```

## Entonces... ¿cuál es la sintaxis de una función flecha?

Su sintaxis es súper fácil de entender. Primero, eliminemos la palabra clave *function*. Luego, añadamos una *flecha gorda* (=>) después de los argumentos de la función:


```javascript{numberLines: true}
let sum = (a, b) => {
  return a+b;
}
console.log(sum(1, 2));
// 3
```

## ¿Por qué la diferencia?

Únicamente basado en el código anterior, parece innecesario crear una nueva sintaxis sólo para tener una nueva manera cool de expresar funciones en Javascript. Sin embargo, las funciones flecha son útiles para simplificar la manera en que escribimos funciones, dependiendo de la situación.

### Removamos la sentencia de *return*.

En vez de explícitamente escribir la sentencia de return en la suma de la función anterior, podemos remover las llaves y la palabra clave *return*. Javascript entenderá que estamos solicitando el retorno implícito de la operación `a + b`. Como podemos ver, nuestra función sifue funcionando igual que siempre:

```javascript{numberLines: true}

let sum = (a, b) => a + b;

console.log(sum(1, 2));

## 3

```

Nuestro código sólo se ha reducido una linea, pero podríamos también estar de acuerdo que esta forma de escribir funciones es básica. Imaginemos la cantidad de lineas de codigo que podríamos eliminar si nuestro código tiene cientos de líneas de longitud.

### también podemos eliminar los paréntesis de los argumentos.

Como dijimos anteriormente, podemos simplificar la expresión de nuestras funciones bajo ciertas condiciones. Para remover los paréntesis de los argumentos de la función, la condición que se debe cumplir es que nuestra función sólo esté recibiendo un argumento. En el ejemplo de abajo, removemos los paréntesis de nuestro argumento, y mantenemos la palabra clave return eliminada. Esto se llama *retorno implícito*.

```javascript{numberLines: true}

let double = number => number * 2;

console.log(double(2));

## 4

console.log(double(8));

## 16

```

## La palabra clave 'this'.

La palabra clave `this` siempre ha sido un tema complicado en Javascript. ES5 previamente introdujo el método **bind** para establecer el valor de `this` de una función sin importar cómo sea llamada. ES6 por otra parte introduce las funciones flecha, que retienen el valor de `this` de contexto léxico.

## Resumen

El uso de las funciones flecha en Javascript le permite a los desarrolladores utilizar una sintaxis más concisa y eleminnar la necesidad de hacer **bind** explícito de la palabra clave `this`. Si nosotros, como desarrolladores, queremos mantenernos relevantes en tecnología de punta, definitivamente necesitamos adoptar el uso de las funciones flecha en los contextos y usos correctos.