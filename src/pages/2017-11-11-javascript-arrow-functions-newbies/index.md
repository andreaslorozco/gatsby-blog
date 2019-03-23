---
path: "/blog/hello-world"
layout: post
title:  "Arrow Functions for Newbies!"
date:   2017-11-11T19:08:29.962Z
author: Andreas
categories: javascript
excerpt: "Javascript arrow functions are now expressions part of ES6. While there are differences between a *normal* function expression and an arrow function expression and they can be seen as a little intimidating, those differences are easy to overcome."
---

# What are Javascript's Arrow Functions?

Javascript arrow functions are now expressions part of ES6. While there are differences between a *normal* function expression and an arrow function expression and they can be seen as a little intimidating, those differences are easy to overcome.

## How did *normal* function expressions used to look like?

If you have already used Javascript in the past, you might be used to write your functions like this code below. I was even writing my functions like this just like two months ago!

{% highlight javascript %}

let sum = function(a, b) {
  return a+b;
}

console.log(sum(1, 2));

## 3

{% endhighlight %}

```javascript{numberLines: true}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```

## So, how do you right arrow functions now?

It's pretty fucking easy... First, let's get rid of the *function* keyword. Then, let's add a *fat arrow* (=>) after the function's arguments:

{% highlight javascript %}

let sum = (a, b) => {
  return a+b;
}

console.log(sum(1, 2));

## 3

{% endhighlight %}

## What's different?

Based only on the code we see above, it seems unnecessary to create a new syntax just to have a new and cool way to express Javascript functions. However, arrow functions allow is to also simplify the way we write functions, depending on certain conditions.

### Let's remove the *return* statement.

Instead of explicitly writing the return statement on the sum function above, we can remove the curly brackets and the *return* keyword. Javascript will understand that we're implicitly asking to return the `a + b` operation. As you can see, our function still works as before:

{% highlight javascript %}

let sum = (a, b) => a + b;

console.log(sum(1, 2));

## 3

{% endhighlight %}

I know our code has only been reduced by one line, but we can agree that this as basic as they come. Think about the amount of lines we can reduce from our code if it's hundreds or thousands lines long!

### We can also remove the parenthesis from the function's arguments.

As I said before, we can simplify the expression of our functions under certain conditions. In order to remove the parenthesis from our arguments, one condition must be met: Our function can only receive one argument. In the example below, we'll remove the parenthesis from our arguments, and keep our return keyword removed. This is called *implicit returns*.

{% highlight javascript %}

let double = number => number * 2;

console.log(double(2));

## 4

console.log(double(8));

## 16

{% endhighlight %}

## The 'this' keyword.

The `this` keyword has always been a complicated subject in Javascript. ES5 previously introduce the bind method to set the value of a function's `this` regardless of how it is called. ES6 on the other hand introduced arrow functions which retains the `this` value of the enclosing lexical context.

## Summary

The use of arrow functions allow developers to use a more concise syntax and eliminates the need to bind the `this` keywords explicitely. Many modern Javascript libraries and frameworks are adopting the use of arrow functions, and most new tutorials out there are using them as well. If we as developers want to remain relevant in cutting edge technology, we'll definetely need to adopt the usage of arrow functions, understand when to use them and how to use them as well.