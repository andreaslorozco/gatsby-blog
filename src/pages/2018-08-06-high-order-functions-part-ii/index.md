---
path: "/blog/funciones-orden-superior-parte-ii"
layout: post
title:  "Funciones de orden superior - Parte II: .filter(), .map() y reduce()"
date:   2018-08-06T19:08:29.962Z
author: Andreas
categories: javascript
excerpt: "Ya que superamos la teoría en el post anterior, ahora pongamos en práctica lo aprendido con un poco de código."
published: true
---

# Funciones de orden superior - Parte II: .filter(), .map() y reduce()

[Funciones de Orden Superior](http://www.andreaslorozco.com/Funciones de orden superior - Parte II: .filter(), .map() y reduce())

##  ¡Escribamos algo de código!

###  .filter()

Cuando corremos la función de `filter()` en un arreglo, la función ** devolverá un arreglo nuevo ** con los elementos que logren pasar un "*test*" dado por otra función. Si tenemos un arreglo de números y queremos obtener todos los número mayores a 100, usaríamos `filter()` y pasaríamos una función que retorne `true` si el valor es mayor a 100.

```javascript{numberLines: true}

 const numbersArr = [10, 25, 55, 80, 110, 135, 300] ;
 const newArr = numbersArr.filter((number) => {
	  if (number > 100) {
		  return true;
	  } else {
		  return false;
	  }
 });
console.log(newArr);

## [110, 135, 300]

```  

Notemos que estamos pasando una función como argumento a `.filter()`. Esta función es ejecutada por aca valor en el arreglo como `number`. Si el valor que estamos evaluando como `number` es mayor a 100, la función devuelve `true` y el valir que estamos evualuando se agrega a `newArr`.

Podemos refactorizar la función de acuerdo a lo que aprendimos en [¡Funciones flecha para novatos!](http://www.andreaslorozco.com/blog/funciones-flecha)

```javascript{numberLines: true}

 const numbersArr = [10, 25, 55, 80, 110, 135, 300] ;
 const newArr = numbersArr.filter(number => number > 100);
 
console.log(newArr);

## [110, 135, 300]

```

Recordemos que la función `filter()` devuelve un nuevo arreglo. El arreglo anterior no es modificado.

```javascript{numberLines: true}

 const numbersArr = [10, 25, 55, 80, 110, 135, 300] ;
 const newArr = numbersArr.filter(number => number > 100);
 
console.log(numbersArr);

## [10, 25, 55, 80, 110, 135, 300]

```

###  .map()

Cuando corremos la función `map()` de un arreglo, la función va a **retornar un nuevo arreglo** con elementos que resultan de otra función dada. Si tenemos un arreglo de números y queremos obtener un nuevo arreglo con el el doble de esos valores, usaríamos `map()` y pasaríamos una función que retorne cada valor multiplicado por 2.

```javascript{numberLines: true}

 const numbersArr = [10, 20, 30, 40, 50, 60] ;
 const newArr = numbersArr.map(number => number *2 );
console.log(newArr);

## [20, 40, 60, 80, 100, 120]

```

###  .reduce()

El método `reduce()` de un arreglo es ligeramente más difícil de entender, pero no imposible. Probablemente ocupemos utilizar `reduce` cuando ocupemos "*reducir*" todos los valores de un arreglo a un **valor único**. Al igual que los casos anteriores, la función se aplica a cada uno de los valores del arreglo. Sin embargo, esta función también va a ser aplicada contra un **acumulador**, que será el valor que será retornado al final.

```javascript{numberLines: true}

const  numbersArr  =  [10,  20,  30,  40,  50,  60]  ;
const  sum  =  numbersArr.reduce( (total,  number)  =>  total  +  number,  0);
console.log(sum);

## 210

```

En el ejemplo anterior, queremos retornar la suma de todos los valores de un arreglo. Notemos que la función `.reduce()` está tomando dos argumentos: una **función** encargada de reducir el arreglo, y el número **0** que es el valor inicial de nuestro acumulador.

La función enviada como argumento está a su vez tomando otros dos argumentos: **total** es el valor que está siendo acumulado y **number** corresponde a cada valor del arreglo.

## Siguientes pasos

Esta fue la teoría básica de las funciones de orden superior`.filter()`, `.map()` y `.reduce()`. Estas funciones son capaces de recibir más argumentos de los que describimos antes. Por ejemplo, mediante otro argumento podemos tener acceso al índice de cada uno de los valores que está siendo evaluado, y otro argumento nos permite tener acceso al arreglo original. Te recomiendo revisar los recursos de MDN o W3Schools que encontrarás más abajo.

Es importante no solo leer los conceptos básicos pero también aplicarlos y ejercitarlos constantemente. Una plataforma excelente para practicar estas funciones son los [Code Katas de Codewards](https://www.codewars.com/kata/latest/my-languages) donde podrás encontrar múltiples ejercicios para practicar estas habilidades.
  

###  Enlaces

  

*  [.map() en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

*  [.filter() en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

*  [.reduce() en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

*  [.map() en W3Schools](https://www.w3schools.com/jsref/jsref_map.asp)

*  [.filter() en W3Schools](https://www.w3schools.com/jsref/jsref_filter.asp)
 
*  [.reduce() en W3Schools](https://www.w3schools.com/jsref/jsref_reduce.asp)
