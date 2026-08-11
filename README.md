# Top JavaScript Interview Questions (Updated for 2026)

**Updated for 2026!** This repository contains a few hundred curated JavaScript interview questions with high quality answers for acing your Front End Engineer interviews, brought to you by [GreatFrontEnd](https://www.greatfrontend.com/?utm_source=github&utm_medium=referral&utm_campaign=top-reactjs-qns&gnrs=yangshun).

Looking for more? Read our blog post [50+ must-know JavaScript interview questions and answers](https://www.greatfrontend.com/blog/50-must-know-javascript-interview-questions-by-ex-interviewers?utm_source=github&utm_medium=referral&utm_campaign=top-javascript-qns) compiled from ex-FAANG interviewers.

The questions are divided into three sections:

1. [**Top questions**](#table-of-contents-top-questions): List of the most important JavaScript interview questions that are commonly-asked during Front End Developer interviews. This README displays the concise version of the answers and links are provided to the full version of answers for further learning. If you are are short on time, start with this section.
2. [**All questions**](#table-of-contents-all-questions): Comprehensive and elaborate list of JavaScript interview questions that ranges from basic to advanced topics. The answers in this section are more concise. This section is useful if you rusty with JavaScript concepts and need a refresher.
3. [**Questions by difficulty**](#questions-by-difficulty): Questions categorized by difficulty – basic, intermediate, advanced.

---

<div>
  <p align="center">
    <a href="https://www.greatfrontend.com/questions/javascript-interview-questions?utm_source=github&utm_medium=referral&utm_campaign=top-js-qns&gnrs=yangshun">
      <img src="./images/greatfrontend-js-banner4x.png" alt="GreatFrontEnd JavaScript Interview Questions" width="100%">
    </a>
  </p>
</div>

> Black Friday 2025 sale going on now, enjoy the largest discount of the year! [Get 30% off GreatFrontEnd Premium →](https://www.greatfrontend.com/questions/javascript-interview-questions?utm_source=github&utm_medium=referral&utm_campaign=top-js-qns&gnrs=yangshun) 💡

---

## Table of Contents (Top Questions)

This list contains the top essential questions that are frequently-asked during Front End Engineer interviews. Concise versions of the answers are presented here with links to elaborate versions for further reading. This section is great if you need a quick refresher of the most important concepts.

<!-- TABLE_OF_CONTENTS:TOP:START -->

| No. | Questions | Level |
| --- | :-- | :-- |
| 1 | [Explain the concept of "hoisting" in JavaScript](#explain-the-concept-of-hoisting-in-javascript) | Basic |
| 2 | [What are the differences between JavaScript variables created using `let`, `var` or `const`?](#what-are-the-differences-between-javascript-variables-created-using-let-var-or-const) | Basic |
| 3 | [What is the difference between `==` and `===` in JavaScript?](#what-is-the-difference-between--and--in-javascript) | Basic |
| 4 | [What is the event loop in JavaScript runtimes?](#what-is-the-event-loop-in-javascript-runtimes) | Basic |
| 5 | [Explain event delegation in JavaScript](#explain-event-delegation-in-javascript) | Basic |
| 6 | [Explain how `this` works in JavaScript](#explain-how-this-works-in-javascript) | Basic |
| 7 | [Describe the difference between a cookie, `sessionStorage` and `localStorage` in browsers](#describe-the-difference-between-a-cookie-sessionstorage-and-localstorage-in-browsers) | Basic |
| 8 | [Describe the difference between `<script>`, `<script async>` and `<script defer>`](#describe-the-difference-between-script-script-async-and-script-defer) | Basic |
| 9 | [What's the difference between a JavaScript variable that is: `null`, `undefined` or undeclared?](#whats-the-difference-between-a-javascript-variable-that-is-null-undefined-or-undeclared) | Basic |
| 10 | [What's the difference between `.call` and `.apply` in JavaScript?](#whats-the-difference-between-call-and-apply-in-javascript) | Basic |
| 11 | [Explain `Function.prototype.bind` in JavaScript](#explain-functionprototypebind-in-javascript) | Basic |
| 12 | [What advantage is there for using the JavaScript arrow syntax for a method in a constructor?](#what-advantage-is-there-for-using-the-javascript-arrow-syntax-for-a-method-in-a-constructor) | Basic |
| 13 | [Explain how prototypal inheritance works in JavaScript](#explain-how-prototypal-inheritance-works-in-javascript) | Basic |
| 14 | [Difference between: `function Person(){}`, `const person = Person()`, and `const person = new Person()` in JavaScript?](#difference-between-function-person-const-person--person-and-const-person--new-person-in-javascript) | Basic |
| 15 | [Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}` in JavaScript](#explain-the-differences-on-the-usage-of-foo-between-function-foo--and-var-foo--function--in-javascript) | Basic |
| 16 | [What's a typical use case for anonymous functions in JavaScript?](#whats-a-typical-use-case-for-anonymous-functions-in-javascript) | Intermediate |
| 17 | [What are the various ways to create objects in JavaScript?](#what-are-the-various-ways-to-create-objects-in-javascript) | Basic |
| 18 | [What is a closure in JavaScript, and how/why would you use one?](#what-is-a-closure-in-javascript-and-howwhy-would-you-use-one) | Intermediate |
| 19 | [What is the definition of a higher-order function in JavaScript?](#what-is-the-definition-of-a-higher-order-function-in-javascript) | Basic |
| 20 | [What are the differences between JavaScript ES2015 classes and ES5 function constructors?](#what-are-the-differences-between-javascript-es2015-classes-and-es5-function-constructors) | Basic |
| 21 | [Describe event bubbling in JavaScript and browsers](#describe-event-bubbling-in-javascript-and-browsers) | Basic |
| 22 | [Describe event capturing in JavaScript and browsers](#describe-event-capturing-in-javascript-and-browsers) | Basic |
| 23 | [What is the difference between `mouseenter` and `mouseover` event in JavaScript and browsers?](#what-is-the-difference-between-mouseenter-and-mouseover-event-in-javascript-and-browsers) | Basic |
| 24 | [What is `'use strict';` (strict mode) in JavaScript for?](#what-is-use-strict-strict-mode-in-javascript-for) | Advanced |
| 25 | [Explain the difference between synchronous and asynchronous functions in JavaScript](#explain-the-difference-between-synchronous-and-asynchronous-functions-in-javascript) | Basic |
| 26 | [What are the pros and cons of using Promises instead of callbacks in JavaScript?](#what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks-in-javascript) | Intermediate |
| 27 | [Explain AJAX in as much detail as possible](#explain-ajax-in-as-much-detail-as-possible) | Basic |
| 28 | [What are the advantages and disadvantages of using AJAX?](#what-are-the-advantages-and-disadvantages-of-using-ajax) | Basic |
| 29 | [What are the differences between `XMLHttpRequest` and `fetch()` in JavaScript and browsers?](#what-are-the-differences-between-xmlhttprequest-and-fetch-in-javascript-and-browsers) | Basic |
| 30 | [How do you abort a web request using `AbortController` in JavaScript?](#how-do-you-abort-a-web-request-using-abortcontroller-in-javascript) | Intermediate |
| 31 | [What are JavaScript polyfills for?](#what-are-javascript-polyfills-for) | Advanced |
| 32 | [Why is extending built-in JavaScript objects not a good idea?](#why-is-extending-built-in-javascript-objects-not-a-good-idea) | Intermediate |
| 33 | [Why is it, in general, a good idea to leave the global JavaScript scope of a website as-is and never touch it?](#why-is-it-in-general-a-good-idea-to-leave-the-global-javascript-scope-of-a-website-as-is-and-never-touch-it) | Intermediate |
| 34 | [Explain the differences between CommonJS modules and ES modules in JavaScript](#explain-the-differences-between-commonjs-modules-and-es-modules-in-javascript) | Intermediate |
| 35 | [What are the various data types in JavaScript?](#what-are-the-various-data-types-in-javascript) | Basic |
| 36 | [What language constructs do you use for iterating over object properties and array items in JavaScript?](#what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items-in-javascript) | Basic |
| 37 | [What are the benefits of using spread syntax in JavaScript and how is it different from rest syntax?](#what-are-the-benefits-of-using-spread-syntax-in-javascript-and-how-is-it-different-from-rest-syntax) | Basic |
| 38 | [What are iterators and generators in JavaScript and what are they used for?](#what-are-iterators-and-generators-in-javascript-and-what-are-they-used-for) | Advanced |
| 39 | [Explain the difference between mutable and immutable objects in JavaScript](#explain-the-difference-between-mutable-and-immutable-objects-in-javascript) | Intermediate |
| 40 | [What is the difference between a `Map` object and a plain object in JavaScript?](#what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript) | Basic |
| 41 | [What are the differences between `Map`/`Set` and `WeakMap`/`WeakSet` in JavaScript?](#what-are-the-differences-between-mapset-and-weakmapweakset-in-javascript) | Basic |
| 42 | [Why might you want to create static class members in JavaScript?](#why-might-you-want-to-create-static-class-members-in-javascript) | Intermediate |
| 43 | [What are `Symbol`s used for in JavaScript?](#what-are-symbols-used-for-in-javascript) | Intermediate |
| 44 | [What are server-sent events?](#what-are-server-sent-events) | Advanced |
| 45 | [What are JavaScript object property flags and descriptors?](#what-are-javascript-object-property-flags-and-descriptors) | Advanced |
| 46 | [What are JavaScript object getters and setters for?](#what-are-javascript-object-getters-and-setters-for) | Intermediate |
| 47 | [What are proxies in JavaScript used for?](#what-are-proxies-in-javascript-used-for) | Advanced |
| 48 | [What tools and techniques do you use for debugging JavaScript code?](#what-tools-and-techniques-do-you-use-for-debugging-javascript-code) | Intermediate |
| 49 | [What are workers in JavaScript used for?](#what-are-workers-in-javascript-used-for) | Advanced |
| 50 | [How does JavaScript garbage collection work?](#how-does-javascript-garbage-collection-work) | Advanced |

<!-- TABLE_OF_CONTENTS:TOP:END -->

## Table of Contents (All Questions)

This list contains a longer list of important JavaScript questions. Not all of them will be asked during Front End Engineer interviews but they provide a well-rounded review of JavaScript concepts ranging from beginner to advanced topics.

<!-- TABLE_OF_CONTENTS:ALL:START -->

| No. | Questions | Level |
| --- | :-- | :-- |
| 1 | [What are the various data types in JavaScript?](#what-are-the-various-data-types-in-javascript) | Basic |
| 2 | [How do you check the data type of a variable?](#how-do-you-check-the-data-type-of-a-variable) | Basic |
| 3 | [What's the difference between a JavaScript variable that is: `null`, `undefined` or undeclared?](#whats-the-difference-between-a-javascript-variable-that-is-null-undefined-or-undeclared) | Basic |
| 4 | [What are the differences between JavaScript variables created using `let`, `var` or `const`?](#what-are-the-differences-between-javascript-variables-created-using-let-var-or-const) | Basic |
| 5 | [Why is it, in general, a good idea to leave the global JavaScript scope of a website as-is and never touch it?](#why-is-it-in-general-a-good-idea-to-leave-the-global-javascript-scope-of-a-website-as-is-and-never-touch-it) | Intermediate |
| 6 | [How do you convert a string to a number in JavaScript?](#how-do-you-convert-a-string-to-a-number-in-javascript) | Basic |
| 7 | [What are template literals and how are they used?](#what-are-template-literals-and-how-are-they-used) | Basic |
| 8 | [Explain the concept of tagged templates](#explain-the-concept-of-tagged-templates) | Intermediate |
| 9 | [What is the spread operator and how is it used?](#what-is-the-spread-operator-and-how-is-it-used) | Basic |
| 10 | [What are `Symbol`s used for in JavaScript?](#what-are-symbols-used-for-in-javascript) | Intermediate |
| 11 | [What are proxies in JavaScript used for?](#what-are-proxies-in-javascript-used-for) | Advanced |
| 12 | [Explain the concept of "hoisting" in JavaScript](#explain-the-concept-of-hoisting-in-javascript) | Basic |
| 13 | [Explain the difference in hoisting between `var`, `let`, and `const`](#explain-the-difference-in-hoisting-between-var-let-and-const) | Basic |
| 14 | [How does hoisting affect function declarations and expressions?](#how-does-hoisting-affect-function-declarations-and-expressions) | Advanced |
| 15 | [What are the potential issues caused by hoisting?](#what-are-the-potential-issues-caused-by-hoisting) | Intermediate |
| 16 | [How can you avoid problems related to hoisting?](#how-can-you-avoid-problems-related-to-hoisting) | Basic |
| 17 | [What is the difference between `==` and `===` in JavaScript?](#what-is-the-difference-between--and--in-javascript) | Basic |
| 18 | [What language constructs do you use for iterating over object properties and array items in JavaScript?](#what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items-in-javascript) | Basic |
| 19 | [What is the purpose of the `break` and `continue` statements?](#what-is-the-purpose-of-the-break-and-continue-statements) | Basic |
| 20 | [What is the ternary operator and how is it used?](#what-is-the-ternary-operator-and-how-is-it-used) | Basic |
| 21 | [How do you access the index of an element in an array during iteration?](#how-do-you-access-the-index-of-an-element-in-an-array-during-iteration) | Basic |
| 22 | [What is the purpose of the `switch` statement?](#what-is-the-purpose-of-the-switch-statement) | Basic |
| 23 | [What are rest parameters and how are they used?](#what-are-rest-parameters-and-how-are-they-used) | Basic |
| 24 | [Explain the concept of the spread operator and its uses](#explain-the-concept-of-the-spread-operator-and-its-uses) | Basic |
| 25 | [What are the benefits of using spread syntax in JavaScript and how is it different from rest syntax?](#what-are-the-benefits-of-using-spread-syntax-in-javascript-and-how-is-it-different-from-rest-syntax) | Basic |
| 26 | [What are iterators and generators in JavaScript and what are they used for?](#what-are-iterators-and-generators-in-javascript-and-what-are-they-used-for) | Advanced |
| 27 | [Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}` in JavaScript](#explain-the-differences-on-the-usage-of-foo-between-function-foo--and-var-foo--function--in-javascript) | Basic |
| 28 | [What is the difference between a parameter and an argument?](#what-is-the-difference-between-a-parameter-and-an-argument) | Basic |
| 29 | [Explain the concept of hoisting with regards to functions](#explain-the-concept-of-hoisting-with-regards-to-functions) | Basic |
| 30 | [What's the difference between `.call` and `.apply` in JavaScript?](#whats-the-difference-between-call-and-apply-in-javascript) | Basic |
| 31 | [Can you offer a use case for the new arrow => function syntax?](#can-you-offer-a-use-case-for-the-new-arrow--function-syntax) | Basic |
| 32 | [Difference between: `function Person(){}`, `const person = Person()`, and `const person = new Person()` in JavaScript?](#difference-between-function-person-const-person--person-and-const-person--new-person-in-javascript) | Basic |
| 33 | [What is the definition of a higher-order function in JavaScript?](#what-is-the-definition-of-a-higher-order-function-in-javascript) | Basic |
| 34 | [What are callback functions and how are they used?](#what-are-callback-functions-and-how-are-they-used) | Basic |
| 35 | [What's a typical use case for anonymous functions in JavaScript?](#whats-a-typical-use-case-for-anonymous-functions-in-javascript) | Intermediate |
| 36 | [What is recursion and how is it used in JavaScript?](#what-is-recursion-and-how-is-it-used-in-javascript) | Basic |
| 37 | [What are default parameters and how are they used?](#what-are-default-parameters-and-how-are-they-used) | Basic |
| 38 | [Explain why the following doesn't work as an IIFE: `function foo(){}();`. What needs to be changed to properly make it an IIFE?](#explain-why-the-following-doesnt-work-as-an-iife-function-foo-what-needs-to-be-changed-to-properly-make-it-an-iife) | Advanced |
| 39 | [What are the various ways to create objects in JavaScript?](#what-are-the-various-ways-to-create-objects-in-javascript) | Basic |
| 40 | [Explain the difference between dot notation and bracket notation for accessing object properties](#explain-the-difference-between-dot-notation-and-bracket-notation-for-accessing-object-properties) | Basic |
| 41 | [What are the different methods for iterating over an array?](#what-are-the-different-methods-for-iterating-over-an-array) | Basic |
| 42 | [How do you add, remove, and update elements in an array?](#how-do-you-add-remove-and-update-elements-in-an-array) | Basic |
| 43 | [What are the different ways to copy an object or an array?](#what-are-the-different-ways-to-copy-an-object-or-an-array) | Basic |
| 44 | [Explain the difference between shallow copy and deep copy](#explain-the-difference-between-shallow-copy-and-deep-copy) | Basic |
| 45 | [What are the advantages of using the spread operator with arrays and objects?](#what-are-the-advantages-of-using-the-spread-operator-with-arrays-and-objects) | Basic |
| 46 | [How do you check if an object has a specific property?](#how-do-you-check-if-an-object-has-a-specific-property) | Basic |
| 47 | [Explain the difference between mutable and immutable objects in JavaScript](#explain-the-difference-between-mutable-and-immutable-objects-in-javascript) | Intermediate |
| 48 | [Explain the concept of destructuring assignment for objects and arrays](#explain-the-concept-of-destructuring-assignment-for-objects-and-arrays) | Basic |
| 49 | [What is `Object.freeze()` for?](#what-is-objectfreeze-for) | Intermediate |
| 50 | [What is `Object.seal()` for?](#what-is-objectseal-for) | Intermediate |
| 51 | [What is `Object.preventExtensions()` for?](#what-is-objectpreventextensions-for) | Intermediate |
| 52 | [What are JavaScript object getters and setters for?](#what-are-javascript-object-getters-and-setters-for) | Intermediate |
| 53 | [What are JavaScript object property flags and descriptors?](#what-are-javascript-object-property-flags-and-descriptors) | Advanced |
| 54 | [How do you reliably determine whether an object is empty?](#how-do-you-reliably-determine-whether-an-object-is-empty) | Basic |
| 55 | [What is the event loop in JavaScript runtimes?](#what-is-the-event-loop-in-javascript-runtimes) | Basic |
| 56 | [Explain the difference between synchronous and asynchronous functions in JavaScript](#explain-the-difference-between-synchronous-and-asynchronous-functions-in-javascript) | Basic |
| 57 | [Explain the concept of a callback function in asynchronous operations](#explain-the-concept-of-a-callback-function-in-asynchronous-operations) | Basic |
| 58 | [What are Promises and how do they work?](#what-are-promises-and-how-do-they-work) | Basic |
| 59 | [Explain the different states of a Promise](#explain-the-different-states-of-a-promise) | Intermediate |
| 60 | [What are the pros and cons of using Promises instead of callbacks in JavaScript?](#what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks-in-javascript) | Intermediate |
| 61 | [What is the use of `Promise.all()`](#what-is-the-use-of-promiseall) | Basic |
| 62 | [How is `Promise.all()` different from `Promise.allSettled()`?](#how-is-promiseall-different-from-promiseallsettled) | Intermediate |
| 63 | [What is async/await and how does it simplify asynchronous code?](#what-is-asyncawait-and-how-does-it-simplify-asynchronous-code) | Intermediate |
| 64 | [How do you handle errors in asynchronous operations?](#how-do-you-handle-errors-in-asynchronous-operations) | Basic |
| 65 | [Explain the concept of a microtask queue](#explain-the-concept-of-a-microtask-queue) | Intermediate |
| 66 | [What is the difference between `setTimeout()`, `setImmediate()`, and `process.nextTick()`?](#what-is-the-difference-between-settimeout-setimmediate-and-processnexttick) | Intermediate |
| 67 | [Explain how prototypal inheritance works in JavaScript](#explain-how-prototypal-inheritance-works-in-javascript) | Basic |
| 68 | [What is the prototype chain and how does it work?](#what-is-the-prototype-chain-and-how-does-it-work) | Intermediate |
| 69 | [Explain the difference between classical inheritance and prototypal inheritance](#explain-the-difference-between-classical-inheritance-and-prototypal-inheritance) | Basic |
| 70 | [Explain the concept of inheritance in ES2015 classes](#explain-the-concept-of-inheritance-in-es2015-classes) | Basic |
| 71 | [What is the purpose of the `new` keyword?](#what-is-the-purpose-of-the-new-keyword) | Basic |
| 72 | [How do you create a constructor function?](#how-do-you-create-a-constructor-function) | Basic |
| 73 | [What are the differences between JavaScript ES2015 classes and ES5 function constructors?](#what-are-the-differences-between-javascript-es2015-classes-and-es5-function-constructors) | Basic |
| 74 | [What advantage is there for using the JavaScript arrow syntax for a method in a constructor?](#what-advantage-is-there-for-using-the-javascript-arrow-syntax-for-a-method-in-a-constructor) | Basic |
| 75 | [Why might you want to create static class members in JavaScript?](#why-might-you-want-to-create-static-class-members-in-javascript) | Intermediate |
| 76 | [What is a closure in JavaScript, and how/why would you use one?](#what-is-a-closure-in-javascript-and-howwhy-would-you-use-one) | Intermediate |
| 77 | [Explain the concept of lexical scoping](#explain-the-concept-of-lexical-scoping) | Basic |
| 78 | [Explain the concept of scope in JavaScript](#explain-the-concept-of-scope-in-javascript) | Basic |
| 79 | [How can closures be used to create private variables?](#how-can-closures-be-used-to-create-private-variables) | Basic |
| 80 | [What are the potential pitfalls of using closures?](#what-are-the-potential-pitfalls-of-using-closures) | Intermediate |
| 81 | [Explain the difference between global scope, function scope, and block scope](#explain-the-difference-between-global-scope-function-scope-and-block-scope) | Basic |
| 82 | [Explain how `this` works in JavaScript](#explain-how-this-works-in-javascript) | Basic |
| 83 | [Explain `Function.prototype.bind` in JavaScript](#explain-functionprototypebind-in-javascript) | Basic |
| 84 | [Explain the different ways the `this` keyword can be bound](#explain-the-different-ways-the-this-keyword-can-be-bound) | Intermediate |
| 85 | [What are the common pitfalls of using the `this` keyword?](#what-are-the-common-pitfalls-of-using-the-this-keyword) | Basic |
| 86 | [Explain the concept of `this` binding in event handlers](#explain-the-concept-of-this-binding-in-event-handlers) | Basic |
| 87 | [What is the DOM and how is it structured?](#what-is-the-dom-and-how-is-it-structured) | Basic |
| 88 | [What's the difference between an "attribute" and a "property" in the DOM?](#whats-the-difference-between-an-attribute-and-a-property-in-the-dom) | Intermediate |
| 89 | [Explain the difference between `document.querySelector()` and `document.getElementById()`](#explain-the-difference-between-documentqueryselector-and-documentgetelementbyid) | Basic |
| 90 | [How do you add, remove, and modify HTML elements using JavaScript?](#how-do-you-add-remove-and-modify-html-elements-using-javascript) | Basic |
| 91 | [What are event listeners and how are they used?](#what-are-event-listeners-and-how-are-they-used) | Basic |
| 92 | [Explain the event phases in a browser](#explain-the-event-phases-in-a-browser) | Intermediate |
| 93 | [Describe event bubbling in JavaScript and browsers](#describe-event-bubbling-in-javascript-and-browsers) | Basic |
| 94 | [Describe event capturing in JavaScript and browsers](#describe-event-capturing-in-javascript-and-browsers) | Basic |
| 95 | [Explain event delegation in JavaScript](#explain-event-delegation-in-javascript) | Basic |
| 96 | [How do you prevent the default behavior of an event?](#how-do-you-prevent-the-default-behavior-of-an-event) | Basic |
| 97 | [What is the difference between `event.preventDefault()` and `event.stopPropagation()`?](#what-is-the-difference-between-eventpreventdefault-and-eventstoppropagation) | Intermediate |
| 98 | [What is the difference between `mouseenter` and `mouseover` event in JavaScript and browsers?](#what-is-the-difference-between-mouseenter-and-mouseover-event-in-javascript-and-browsers) | Basic |
| 99 | [What is the difference between `innerHTML` and `textContent`?](#what-is-the-difference-between-innerhtml-and-textcontent) | Intermediate |
| 100 | [How do you manipulate CSS styles using JavaScript?](#how-do-you-manipulate-css-styles-using-javascript) | Basic |
| 101 | [Describe the difference between `<script>`, `<script async>` and `<script defer>`](#describe-the-difference-between-script-script-async-and-script-defer) | Basic |
| 102 | [What is the difference between the Window object and the Document object?](#what-is-the-difference-between-the-window-object-and-the-document-object) | Intermediate |
| 103 | [Describe the difference between a cookie, `sessionStorage` and `localStorage` in browsers](#describe-the-difference-between-a-cookie-sessionstorage-and-localstorage-in-browsers) | Basic |
| 104 | [How do you make an HTTP request using the Fetch API?](#how-do-you-make-an-http-request-using-the-fetch-api) | Basic |
| 105 | [What are the different ways to make an API call in JavaScript?](#what-are-the-different-ways-to-make-an-api-call-in-javascript) | Basic |
| 106 | [Explain AJAX in as much detail as possible](#explain-ajax-in-as-much-detail-as-possible) | Basic |
| 107 | [What are the advantages and disadvantages of using AJAX?](#what-are-the-advantages-and-disadvantages-of-using-ajax) | Basic |
| 108 | [What are the differences between `XMLHttpRequest` and `fetch()` in JavaScript and browsers?](#what-are-the-differences-between-xmlhttprequest-and-fetch-in-javascript-and-browsers) | Basic |
| 109 | [How do you abort a web request using `AbortController` in JavaScript?](#how-do-you-abort-a-web-request-using-abortcontroller-in-javascript) | Intermediate |
| 110 | [Explain how JSONP works (and how it's not really Ajax)](#explain-how-jsonp-works-and-how-its-not-really-ajax) | Intermediate |
| 111 | [What are workers in JavaScript used for?](#what-are-workers-in-javascript-used-for) | Advanced |
| 112 | [Explain the concept of the Web Socket API](#explain-the-concept-of-the-web-socket-api) | Intermediate |
| 113 | [What are JavaScript polyfills for?](#what-are-javascript-polyfills-for) | Advanced |
| 114 | [How do you detect if JavaScript is disabled on a page?](#how-do-you-detect-if-javascript-is-disabled-on-a-page) | Intermediate |
| 115 | [What is the `Intl` namespace object for?](#what-is-the-intl-namespace-object-for) | Intermediate |
| 116 | [How do you validate form elements using the Constraint Validation API?](#how-do-you-validate-form-elements-using-the-constraint-validation-api) | Advanced |
| 117 | [How do you use `window.history` API?](#how-do-you-use-windowhistory-api) | Basic |
| 118 | [How do `<iframe>` on a page communicate?](#how-do-iframe-on-a-page-communicate) | Intermediate |
| 119 | [Difference between document `load` event and document `DOMContentLoaded` event?](#difference-between-document-load-event-and-document-domcontentloaded-event) | Intermediate |
| 120 | [How do you redirect to a new page in JavaScript?](#how-do-you-redirect-to-a-new-page-in-javascript) | Basic |
| 121 | [How do you get the query string values of the current page in JavaScript?](#how-do-you-get-the-query-string-values-of-the-current-page-in-javascript) | Basic |
| 122 | [What are server-sent events?](#what-are-server-sent-events) | Advanced |
| 123 | [What are Progressive Web Applications (PWAs)?](#what-are-progressive-web-applications-pwas) | Intermediate |
| 124 | [What are modules and why are they useful?](#what-are-modules-and-why-are-they-useful) | Basic |
| 125 | [Explain the differences between CommonJS modules and ES modules in JavaScript](#explain-the-differences-between-commonjs-modules-and-es-modules-in-javascript) | Intermediate |
| 126 | [How do you import and export modules in JavaScript?](#how-do-you-import-and-export-modules-in-javascript) | Basic |
| 127 | [What are the benefits of using a module bundler?](#what-are-the-benefits-of-using-a-module-bundler) | Intermediate |
| 128 | [Explain the concept of tree shaking in module bundling](#explain-the-concept-of-tree-shaking-in-module-bundling) | Intermediate |
| 129 | [What are the metadata fields of a module?](#what-are-the-metadata-fields-of-a-module) | Intermediate |
| 130 | [What do you think of CommonJS vs ESM?](#what-do-you-think-of-commonjs-vs-esm) | Basic |
| 131 | [What are the different types of errors in JavaScript?](#what-are-the-different-types-of-errors-in-javascript) | Intermediate |
| 132 | [How do you handle errors using `try...catch` blocks?](#how-do-you-handle-errors-using-trycatch-blocks) | Basic |
| 133 | [What is the purpose of the `finally` block?](#what-is-the-purpose-of-the-finally-block) | Basic |
| 134 | [How can you create custom error objects?](#how-can-you-create-custom-error-objects) | Intermediate |
| 135 | [Explain the concept of error propagation in JavaScript](#explain-the-concept-of-error-propagation-in-javascript) | Intermediate |
| 136 | [What is currying and how does it work?](#what-is-currying-and-how-does-it-work) | Intermediate |
| 137 | [Explain the concept of partial application](#explain-the-concept-of-partial-application) | Intermediate |
| 138 | [What are the benefits of using currying and partial application?](#what-are-the-benefits-of-using-currying-and-partial-application) | Intermediate |
| 139 | [Provide some examples of how currying and partial application can be used](#provide-some-examples-of-how-currying-and-partial-application-can-be-used) | Basic |
| 140 | [How do currying and partial application differ from each other?](#how-do-currying-and-partial-application-differ-from-each-other) | Intermediate |
| 141 | [What are `Set`s and `Map`s and how are they used?](#what-are-sets-and-maps-and-how-are-they-used) | Basic |
| 142 | [What are the differences between `Map`/`Set` and `WeakMap`/`WeakSet` in JavaScript?](#what-are-the-differences-between-mapset-and-weakmapweakset-in-javascript) | Basic |
| 143 | [How do you convert a `Set` to an array in JavaScript?](#how-do-you-convert-a-set-to-an-array-in-javascript) | Basic |
| 144 | [What is the difference between a `Map` object and a plain object in JavaScript?](#what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript) | Basic |
| 145 | [How do `Set`s and `Map`s handle equality checks for objects?](#how-do-sets-and-maps-handle-equality-checks-for-objects) | Basic |
| 146 | [What are some common performance bottlenecks in JavaScript applications?](#what-are-some-common-performance-bottlenecks-in-javascript-applications) | Intermediate |
| 147 | [Explain the concept of debouncing and throttling](#explain-the-concept-of-debouncing-and-throttling) | Basic |
| 148 | [How can you optimize DOM manipulation for better performance?](#how-can-you-optimize-dom-manipulation-for-better-performance) | Advanced |
| 149 | [What are some techniques for reducing reflows and repaints?](#what-are-some-techniques-for-reducing-reflows-and-repaints) | Advanced |
| 150 | [Explain the concept of lazy loading and how it can improve performance](#explain-the-concept-of-lazy-loading-and-how-it-can-improve-performance) | Basic |
| 151 | [What are Web Workers and how can they be used to improve performance?](#what-are-web-workers-and-how-can-they-be-used-to-improve-performance) | Advanced |
| 152 | [Explain the concept of caching and how it can be used to improve performance](#explain-the-concept-of-caching-and-how-it-can-be-used-to-improve-performance) | Basic |
| 153 | [What are some tools that can be used to measure and analyze JavaScript performance?](#what-are-some-tools-that-can-be-used-to-measure-and-analyze-javascript-performance) | Advanced |
| 154 | [How can you optimize network requests for better performance?](#how-can-you-optimize-network-requests-for-better-performance) | Advanced |
| 155 | [What are the different types of testing in software development?](#what-are-the-different-types-of-testing-in-software-development) | Intermediate |
| 156 | [Explain the difference between unit testing, integration testing, and end-to-end testing](#explain-the-difference-between-unit-testing-integration-testing-and-end-to-end-testing) | Intermediate |
| 157 | [What are some popular JavaScript testing frameworks?](#what-are-some-popular-javascript-testing-frameworks) | Basic |
| 158 | [How do you write unit tests for JavaScript code?](#how-do-you-write-unit-tests-for-javascript-code) | Intermediate |
| 159 | [Explain the concept of test-driven development (TDD)](#explain-the-concept-of-test-driven-development-tdd) | Intermediate |
| 160 | [What are mocks and stubs and how are they used in testing?](#what-are-mocks-and-stubs-and-how-are-they-used-in-testing) | Advanced |
| 161 | [How can you test asynchronous code in JavaScript?](#how-can-you-test-asynchronous-code-in-javascript) | Intermediate |
| 162 | [What are some best practices for writing maintainable and effective tests in JavaScript?](#what-are-some-best-practices-for-writing-maintainable-and-effective-tests-in-javascript) | Intermediate |
| 163 | [Explain the concept of code coverage and how it can be used to assess test quality](#explain-the-concept-of-code-coverage-and-how-it-can-be-used-to-assess-test-quality) | Intermediate |
| 164 | [What are some tools that can be used for JavaScript testing?](#what-are-some-tools-that-can-be-used-for-javascript-testing) | Basic |
| 165 | [What are design patterns and why are they useful?](#what-are-design-patterns-and-why-are-they-useful) | Basic |
| 166 | [Explain the concept of the Singleton pattern](#explain-the-concept-of-the-singleton-pattern) | Basic |
| 167 | [What is the Factory pattern and how is it used?](#what-is-the-factory-pattern-and-how-is-it-used) | Intermediate |
| 168 | [Explain the Observer pattern and its use cases](#explain-the-observer-pattern-and-its-use-cases) | Intermediate |
| 169 | [What is the Module pattern and how does it help with encapsulation?](#what-is-the-module-pattern-and-how-does-it-help-with-encapsulation) | Intermediate |
| 170 | [Explain the concept of the Prototype pattern](#explain-the-concept-of-the-prototype-pattern) | Basic |
| 171 | [What is the Decorator pattern and how is it used?](#what-is-the-decorator-pattern-and-how-is-it-used) | Intermediate |
| 172 | [Explain the concept of the Strategy pattern](#explain-the-concept-of-the-strategy-pattern) | Intermediate |
| 173 | [What is the Command pattern and how is it used?](#what-is-the-command-pattern-and-how-is-it-used) | Intermediate |
| 174 | [Why is extending built-in JavaScript objects not a good idea?](#why-is-extending-built-in-javascript-objects-not-a-good-idea) | Intermediate |
| 175 | [What is Cross-Site Scripting (XSS) and how can you prevent it?](#what-is-cross-site-scripting-xss-and-how-can-you-prevent-it) | Intermediate |
| 176 | [Explain the concept of Cross-Site Request Forgery (CSRF) and its mitigation techniques](#explain-the-concept-of-cross-site-request-forgery-csrf-and-its-mitigation-techniques) | Intermediate |
| 177 | [How can you prevent SQL injection vulnerabilities in JavaScript applications?](#how-can-you-prevent-sql-injection-vulnerabilities-in-javascript-applications) | Intermediate |
| 178 | [What are some best practices for handling sensitive data in JavaScript?](#what-are-some-best-practices-for-handling-sensitive-data-in-javascript) | Intermediate |
| 179 | [Explain the concept of Content Security Policy (CSP) and how it enhances security](#explain-the-concept-of-content-security-policy-csp-and-how-it-enhances-security) | Intermediate |
| 180 | [What are some common security headers and their purpose?](#what-are-some-common-security-headers-and-their-purpose) | Intermediate |
| 181 | [How can you prevent clickjacking attacks?](#how-can-you-prevent-clickjacking-attacks) | Advanced |
| 182 | [Explain the concept of input validation and its importance in security](#explain-the-concept-of-input-validation-and-its-importance-in-security) | Intermediate |
| 183 | [What are some tools and techniques for identifying security vulnerabilities in JavaScript code?](#what-are-some-tools-and-techniques-for-identifying-security-vulnerabilities-in-javascript-code) | Intermediate |
| 184 | [How can you implement secure authentication and authorization in JavaScript applications?](#how-can-you-implement-secure-authentication-and-authorization-in-javascript-applications) | Advanced |
| 185 | [Explain the same-origin policy with regards to JavaScript](#explain-the-same-origin-policy-with-regards-to-javascript) | Intermediate |
| 186 | [What is `'use strict';` (strict mode) in JavaScript for?](#what-is-use-strict-strict-mode-in-javascript-for) | Advanced |
| 187 | [What tools and techniques do you use for debugging JavaScript code?](#what-tools-and-techniques-do-you-use-for-debugging-javascript-code) | Intermediate |
| 188 | [How does JavaScript garbage collection work?](#how-does-javascript-garbage-collection-work) | Advanced |
| 189 | [Explain what a single page app is and how to make one SEO-friendly](#explain-what-a-single-page-app-is-and-how-to-make-one-seo-friendly) | Intermediate |
| 190 | [How can you share code between JavaScript files?](#how-can-you-share-code-between-javascript-files) | Basic |
| 191 | [How do you organize your code?](#how-do-you-organize-your-code) | Intermediate |
| 192 | [What are some of the advantages and disadvantages of using TypeScript and compile-to-JavaScript languages](#what-are-some-of-the-advantages-and-disadvantages-of-using-typescript-and-compile-to-javascript-languages) | Advanced |
| 193 | [When would you use `document.write()`?](#when-would-you-use-documentwrite) | Advanced |

<!-- TABLE_OF_CONTENTS:ALL:END -->

## Top Questions with Answers

<!-- QUESTIONS:TOP:START -->

### Explain the concept of "hoisting" in JavaScript

<!-- Update here: /questions/explain-hoisting/en-US.mdx -->

"Hoisting" is informal shorthand for how JavaScript creates and initializes bindings while it instantiates a scope, before evaluating that scope's statements. The engine does not move source text.

- **Variable declarations (`var`)**: The binding is created and initialized to `undefined` before statements run. Its assignment still happens at the declaration's source location.
- **Variable declarations (`let` and `const`)**: The binding is created but remains uninitialized in the temporal dead zone (TDZ) until evaluation reaches the declaration. Accessing it earlier throws `ReferenceError`.
- **Function expressions (`var`)**: The `var` binding initially contains `undefined`; the function is created only when the expression is evaluated.
- **Function declarations (`function`)**: The binding is initialized with the function during scope setup, so it can be called before its declaration appears in source order.
- **Class declarations (`class`)**: The binding exists during scope setup but remains in the TDZ until the class declaration is evaluated.
- **Import declarations (`import`)**: Imported bindings are linked before module evaluation. Dependencies normally evaluate before the importing module's body, although cycles can expose an uninitialized binding.

The following behavior summarizes the result of accessing the variables before they are declared.

| Declaration                    | Accessing before declaration |
| ------------------------------ | ---------------------------- |
| `var foo`                      | `undefined`                  |
| `let foo`                      | `ReferenceError`             |
| `const foo`                    | `ReferenceError`             |
| `class Foo`                    | `ReferenceError`             |
| `var foo = function() { ... }` | `undefined`                  |
| `function foo() { ... }`       | Normal                       |
| `import`                       | Normal, except some cycles   |

<!-- Update here: /questions/explain-hoisting/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-hoisting?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-hoisting/en-US.mdx)

<br>

### What are the differences between JavaScript variables created using `let`, `var` or `const`?

<!-- Update here: /questions/what-are-the-differences-between-variables-created-using-let-var-or-const/en-US.mdx -->

In JavaScript, `let`, `var`, and `const` are all keywords used to declare variables, but they differ significantly in terms of scope, initialization rules, whether they can be redeclared or reassigned, and the behavior when they are accessed before declaration:

| Behavior | `var` | `let` | `const` |
| --- | --- | --- | --- |
| Scope | Function or Global | Block | Block |
| Initialization | Optional | Optional | Required |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |
| Accessing before declaration | `undefined` | `ReferenceError` | `ReferenceError` |

<!-- Update here: /questions/what-are-the-differences-between-variables-created-using-let-var-or-const/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-variables-created-using-let-var-or-const?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-differences-between-variables-created-using-let-var-or-const/en-US.mdx)

<br>

### What is the difference between `==` and `===` in JavaScript?

<!-- Update here: /questions/what-is-the-difference-between-double-equal-and-triple-equal/en-US.mdx -->

`==` is the abstract equality operator while `===` is the strict equality operator. `==` performs type coercion before comparing, following the Abstract Equality Comparison algorithm defined in the ECMAScript specification. `===` does not perform coercion and returns `false` whenever the operand types differ. `===` is generally preferred in application code because it eliminates a class of bugs caused by unexpected coercion. The most common exception is `x == null`, which checks for both `null` and `undefined` in a single comparison.

| Operator | `==` | `===` |
| --- | --- | --- |
| Name | Loose (abstract) equality operator | Strict equality operator |
| Type coercion | Yes — per the Abstract Equality Comparison algorithm | No |
| Comparison behavior | Types may be coerced before the value comparison | Types are compared first |

> **Don't confuse `=` with `==` and `===`.** `=` is the [assignment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment) — it sets a variable's value (`x = 5`) and does not compare anything.

<!-- Update here: /questions/what-is-the-difference-between-double-equal-and-triple-equal/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-double-equal-and-triple-equal?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-difference-between-double-equal-and-triple-equal/en-US.mdx)

<br>

### What is the event loop in JavaScript runtimes?

<!-- Update here: /questions/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue/en-US.mdx -->

The event loop is the host runtime's scheduling mechanism for coordinating JavaScript jobs, asynchronous operations, and—in browsers—rendering. A simplified browser turn works like this:

1. The host runs one task, such as initial script evaluation, a timer callback, or an input-event callback. Function calls made by that task use the JavaScript agent's call stack.
2. Timers, networking, and other host APIs continue outside the currently executing JavaScript stack. When work becomes ready, the host queues a task or settles a promise, which queues its reactions as microtasks.
3. After the current task finishes and its stack is empty, the runtime performs a microtask checkpoint. It drains promise reactions, `queueMicrotask()` callbacks, and other microtasks, including microtasks added while the checkpoint is running.
4. The browser may update rendering, then the host selects one eligible task and runs it. After that task, it performs another microtask checkpoint; it does not drain every task queue in one pass.
5. These turns continue for the lifetime of the event loop. An unbounded microtask chain can delay later tasks and rendering.

<!-- Update here: /questions/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue/en-US.mdx)

<br>

### Explain event delegation in JavaScript

<!-- Update here: /questions/explain-event-delegation/en-US.mdx -->

Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of attaching event listeners to multiple child elements. When an event occurs on a child element, the event bubbles up the DOM tree, and the parent element's event listener handles the event based on the target element.

Event delegation provides the following benefits:

- **Fewer listeners**: A single listener can reduce listener bookkeeping and per-item closures for very large collections. Whether that produces a measurable performance improvement depends on the page and should be profiled.
- **Simplified event handling**: With event delegation, you only need to write the event handling logic once in the parent element's event listener. This makes the code more maintainable and easier to update.
- **Dynamic element support**: Event delegation automatically handles events for dynamically added or removed elements within the parent element. There's no need to manually attach or remove event listeners when the DOM structure changes.

However, do note that:

- It is important to identify the target element that triggered the event.
- Not every event bubbles. For example, `focus`/`blur` and `mouseenter`/`mouseleave` need capture-phase handling or bubbling alternatives such as `focusin`/`focusout` and `mouseover`/`mouseout`. Element `scroll` and `resize` generally need direct listeners.

<!-- Update here: /questions/explain-event-delegation/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-event-delegation?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-event-delegation/en-US.mdx)

<br>

### Explain how `this` works in JavaScript

<!-- Update here: /questions/explain-how-this-works-in-javascript/en-US.mdx -->

There's no simple explanation for `this`; it is one of the most confusing concepts in JavaScript because its behavior differs from many other programming languages. The one-liner explanation of the `this` keyword is that it is a dynamic reference to the context in which a function is executed.

A longer explanation is that `this` follows these rules:

1. If the `new` keyword is used when calling the function, meaning the function was used as a function constructor, the `this` inside the function is the newly-created object instance.
2. If `this` is used in a `class` `constructor`, the `this` inside the `constructor` is the newly-created object instance.
3. If `apply()`, `call()`, or `bind()` is used to call/create a function, `this` inside the function is the object that is passed in as the argument.
4. If a function is called as a method (e.g. `obj.method()`) — `this` is the object that the function is a property of.
5. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, `this` is the global object. In the browser, the global object is the `window` object. If in strict mode (`'use strict';`), `this` will be `undefined` instead of the global object.
6. If multiple of the above rules apply, the rule that is higher wins and will set the `this` value.
7. If the function is an ES2015 arrow function, it ignores all the rules above and receives the `this` value of its surrounding scope at the time it is created.

For an in-depth explanation, do check out [Arnav Aggrawal's article on Medium](https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3).

<!-- Update here: /questions/explain-how-this-works-in-javascript/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-how-this-works-in-javascript?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-how-this-works-in-javascript/en-US.mdx)

<br>

### Describe the difference between a cookie, `sessionStorage` and `localStorage` in browsers

<!-- Update here: /questions/describe-the-difference-between-a-cookie-sessionstorage-and-localstorage/en-US.mdx -->

Cookies, `localStorage`, and `sessionStorage` all store data in the browser, but they differ in lifetime, scope, server interaction, and security controls. `localStorage` and `sessionStorage` implement the [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).

- **Cookies**: Small values that the browser sends with matching HTTP requests. They can be session or persistent cookies and support controls such as `HttpOnly`, `Secure`, and `SameSite`.
- **`localStorage`**: Origin-scoped string storage that persists until it is cleared and is shared by same-origin tabs and windows.
- **`sessionStorage`**: Origin- and tab-scoped string storage for a page session. It survives reloads but is normally cleared when the tab or window closes.

Here's a table summarizing the 3 client storage mechanisms.

| Property | Cookie | `localStorage` | `sessionStorage` |
| --- | --- | --- | --- |
| Initiator | Client or server. Server can use `Set-Cookie` header | Client | Client |
| Lifespan | As specified | Until deleted | Until tab is closed |
| Persistent across browser sessions | If a future expiry date is set | Yes | No |
| Sent to server with matching HTTP requests | Yes, via the `Cookie` header | No | No |
| Typical storage limit | About 4 KB per cookie | Browser-dependent quota, commonly several MiB per origin | Browser-dependent quota, commonly several MiB per origin |
| Access | Across windows/tabs | Across windows/tabs | Same tab |
| Security | JavaScript cannot access `HttpOnly` cookies | None | None |

<!-- Update here: /questions/describe-the-difference-between-a-cookie-sessionstorage-and-localstorage/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/describe-the-difference-between-a-cookie-sessionstorage-and-localstorage?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/describe-the-difference-between-a-cookie-sessionstorage-and-localstorage/en-US.mdx)

<br>

### Describe the difference between `<script>`, `<script async>` and `<script defer>`

<!-- Update here: /questions/describe-the-difference-between-script-async-and-script-defer/en-US.mdx -->

All of these ways (`<script>`, `<script async>`, and `<script defer>`) are used to load and execute JavaScript files in an HTML document, but they differ in how the browser handles loading and execution of the script:

- `<script>` is the default way of including JavaScript. The browser blocks HTML parsing while the script is being downloaded and executed. The browser will not continue rendering the page until the script has finished executing.
- `<script async>` downloads the script asynchronously, in parallel with parsing the HTML. Executes the script as soon as it is available, potentially interrupting the HTML parsing. Multiple `<script async>` tags do not wait for each other and execute in no particular order.
- `<script defer>` downloads the script asynchronously, in parallel with parsing the HTML. However, the execution of the script is deferred until HTML parsing is complete, in the order they appear in the HTML.

Here's a table summarizing the 4 ways of loading `<script>`s in an HTML document. Modern apps almost always use modules, which deserve their own row.

| Feature | `<script>` | `<script async>` | `<script defer>` | `<script type="module">` |
| --- | --- | --- | --- | --- |
| Parsing behavior | Blocks HTML parsing | Downloads in parallel; execution still blocks parsing | Downloads in parallel; execution deferred until after parsing | Downloads in parallel; execution deferred until after parsing |
| Execution order | In order of appearance | Not guaranteed | In order of appearance | In order of appearance, with each script's `import` dependencies resolved first |
| DOM state at execution | Only earlier markup is parsed | Depends on download timing | Document parsing is complete | Document parsing is complete |

<!-- Update here: /questions/describe-the-difference-between-script-async-and-script-defer/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/describe-the-difference-between-script-async-and-script-defer?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/describe-the-difference-between-script-async-and-script-defer/en-US.mdx)

<br>

### What's the difference between a JavaScript variable that is: `null`, `undefined` or undeclared?

<!-- Update here: /questions/whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states/en-US.mdx -->

| Trait | `null` | `undefined` | Undeclared |
| --- | --- | --- | --- |
| Meaning | Explicitly set by the developer to indicate that a variable has no value | Variable has been declared but not assigned a value | Variable has not been declared at all |
| Type (via `typeof` operator) | `'object'` | `'undefined'` | `'undefined'` |
| Direct access/comparison | Can compare with `value === null` | Can compare with `value === undefined` | Direct access throws `ReferenceError`; `typeof undeclaredName` returns `'undefined'` |

<!-- Update here: /questions/whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states/en-US.mdx)

<br>

### What's the difference between `.call` and `.apply` in JavaScript?

<!-- Update here: /questions/whats-the-difference-between-call-and-apply/en-US.mdx -->

`.call` and `.apply` are both used to invoke functions with a specific `this` context and arguments. The primary difference lies in how they accept arguments:

- `.call(thisArg, arg1, arg2, ...)`: Takes arguments individually.
- `.apply(thisArg, [argsArray])`: Takes arguments as an array.

Assuming we have a function `add`, the function can be invoked using `.call` and `.apply` in the following manner:

```js live
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
```

<!-- Update here: /questions/whats-the-difference-between-call-and-apply/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/whats-the-difference-between-call-and-apply?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/whats-the-difference-between-call-and-apply/en-US.mdx)

<br>

### Explain `Function.prototype.bind` in JavaScript

<!-- Update here: /questions/explain-function-prototype-bind/en-US.mdx -->

`Function.prototype.bind` is a method in JavaScript that allows you to create a new function with a specific `this` value and optional initial arguments. Its primary purpose is to:

- **Binding `this` value to preserve context**: The primary purpose of `bind` is to bind the `this` value of a function to a specific object. When you call `func.bind(thisArg)`, it creates a new function with the same body as `func`, but with `this` permanently bound to `thisArg`.
- **Partial application of arguments**: `bind` also allows you to pre-specify arguments for the new function. Any arguments passed to `bind` after `thisArg` will be prepended to the arguments list when the new function is called.
- **Method borrowing**: `bind` allows you to borrow methods from one object and apply them to another object, even if they were not originally designed to work with that object.

The `bind` method is particularly useful in scenarios where you need to ensure that a function is called with a specific `this` context, such as in event handlers, callbacks, or method borrowing.

<!-- Update here: /questions/explain-function-prototype-bind/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-function-prototype-bind?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-function-prototype-bind/en-US.mdx)

<br>

### What advantage is there for using the JavaScript arrow syntax for a method in a constructor?

<!-- Update here: /questions/what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor/en-US.mdx -->

The main advantage of using an arrow function as a method inside a constructor is that the value of `this` gets set at the time of the function creation and can't change after that. When the constructor is used to create a new object, `this` will always refer to that object.

For example, let's say we have a `Person` constructor that takes a first name as an argument and has two methods to `console.log()` that name, one as a regular function and one as an arrow function:

```js live
const Person = function (name) {
  this.firstName = name;
  this.sayName1 = function () {
    console.log(this.firstName);
  };
  this.sayName2 = () => {
    console.log(this.firstName);
  };
};

const john = new Person('John');
const dave = new Person('Dave');

john.sayName1(); // John
john.sayName2(); // John

// The regular function can have its `this` value changed, but the arrow function cannot
john.sayName1.call(dave); // Dave (because `this` is now the dave object)
john.sayName2.call(dave); // John

john.sayName1.apply(dave); // Dave (because `this` is now the dave object)
john.sayName2.apply(dave); // John

john.sayName1.bind(dave)(); // Dave (because `this` is now the dave object)
john.sayName2.bind(dave)(); // John

const detachedRegularMethod = john.sayName1;
try {
  detachedRegularMethod();
} catch (error) {
  console.log(error.name); // TypeError in strict mode because `this` is undefined
}

const detachedArrowMethod = john.sayName2;
detachedArrowMethod(); // John
```

The main takeaway is that a regular function receives `this` from its call site, while an arrow captures it from the constructor call. The tradeoff is that this arrow function is created separately for every instance instead of being shared through the prototype, and callers cannot deliberately rebind it.

<!-- Update here: /questions/what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor/en-US.mdx)

<br>

### Explain how prototypal inheritance works in JavaScript

<!-- Update here: /questions/explain-how-prototypal-inheritance-works/en-US.mdx -->

Prototypal inheritance is property lookup by delegation. An object's internal `[[Prototype]]` is another object or `null`; when an own property is missing, lookup continues along that chain. Inspect it with `Object.getPrototypeOf()` and create a deliberate link with `Object.create()` or `class` / `extends`. Avoid the legacy `__proto__` accessor in application code, and avoid changing prototypes of existing objects in hot code because it can invalidate engine optimizations.

When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's `__proto__`, and the `__proto__`'s `__proto__` and so on, until it finds the property defined on one of the `__proto__`s or until it reaches the end of the prototype chain.

This behavior simulates classical inheritance, but it is really more of [delegation than inheritance](https://davidwalsh.name/javascript-objects).

Here's an example of prototypal inheritance:

```js live
// Parent object constructor.
function Animal(name) {
  this.name = name;
}

// Add a method to the parent object's prototype.
Animal.prototype.makeSound = function () {
  console.log('The ' + this.constructor.name + ' makes a sound.');
};

// Child object constructor.
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor.
}

// Set the child object's prototype to be the parent's prototype.
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Add a method to the child object's prototype.
Dog.prototype.bark = function () {
  console.log('Woof!');
};

// Create a new instance of Dog.
const bolt = new Dog('Bolt');

// Call methods on the child object.
console.log(bolt.name); // "Bolt"
bolt.makeSound(); // "The Dog makes a sound."
bolt.bark(); // "Woof!"
```

Things to note are:

- `.makeSound` is not defined on `Dog`, so the JavaScript engine goes up the prototype chain and finds `.makeSound` on the inherited `Animal`.
- In modern code, `class` and `extends` are the preferred way to set up inheritance; they are syntactic sugar over this prototype mechanism.

<!-- Update here: /questions/explain-how-prototypal-inheritance-works/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-how-prototypal-inheritance-works?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-how-prototypal-inheritance-works/en-US.mdx)

<br>

### Difference between: `function Person(){}`, `const person = Person()`, and `const person = new Person()` in JavaScript?

<!-- Update here: /questions/difference-between-function-person-var-person-person-and-var-person-new-person/en-US.mdx -->

- `function Person(){}`: A function declaration in JavaScript. It can be used as a regular function or as a constructor.
- `const person = Person()`: Calls `Person` as a regular function, not a constructor. If `Person` is intended to be a constructor, this will lead to unexpected behavior.
- `const person = new Person()`: Creates a new instance of `Person`, correctly using the constructor function to initialize the new object.

| Aspect | `function Person(){}` | `const person = Person()` | `const person = new Person()` |
| --- | --- | --- | --- |
| Type | Function declaration | Function call | Constructor call |
| Usage | Defines a function | Invokes `Person` as a regular function | Creates a new instance of `Person` |
| Instance Creation | No instance created | No instance created | New instance created |
| Common Mistake | N/A | Misusing as constructor leading to `undefined` | None (when used correctly) |

<!-- Update here: /questions/difference-between-function-person-var-person-person-and-var-person-new-person/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/difference-between-function-person-var-person-person-and-var-person-new-person?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/difference-between-function-person-var-person-person-and-var-person-new-person/en-US.mdx)

<br>

### Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}` in JavaScript

<!-- Update here: /questions/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function/en-US.mdx -->

`function foo() {}` is a function declaration while `var foo = function() {}` is a function expression. The key difference is that function declarations have their bodies hoisted but the bodies of function expressions are not (they have the same hoisting behavior as `var`-declared variables).

If you try to invoke a function expression before it is declared, you will get an `Uncaught TypeError: XXX is not a function` error.

Function declarations can be called in the enclosing scope even before they are declared.

```js live
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
```

Function expressions if called before they are declared will result in an error.

```js live
foo(); // Uncaught TypeError: foo is not a function
var foo = function () {
  console.log('FOOOOO');
};
```

Another key difference is in the scope of the function name. Function expressions can be named by defining a name after the `function` keyword and before the parentheses. However, when using named function expressions, the function name is only accessible within the function itself. Trying to access it outside will result in a `ReferenceError`.

```js live
const myFunc = function namedFunc() {
  console.log(namedFunc); // Works
};

myFunc(); // Runs the function and logs the function reference
console.log(namedFunc); // ReferenceError: namedFunc is not defined
```

**Note**: The examples use `var` due to legacy reasons. Function expressions can be defined using `let` and `const`, and the key difference is in the hoisting behavior of those keywords.

<!-- Update here: /questions/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function/en-US.mdx)

<br>

### What's a typical use case for anonymous functions in JavaScript?

<!-- Update here: /questions/whats-a-typical-use-case-for-anonymous-functions/en-US.mdx -->

An anonymous function in JavaScript is a function that does not have any name associated with it. They are typically used as arguments to other functions or assigned to variables.

```js live
const arr = [-1, 0, 5, 6];

// The filter method is passed an anonymous function.
arr.filter((x) => x > 1); // [5, 6]
```

They are often used as arguments to other functions, known as higher-order functions, which can take functions as input and return a function as output. Anonymous functions can access variables from the outer scope, a concept known as closures, allowing them to "close over" and remember the environment in which they were created.

```js live
// Encapsulating Code
(function () {
  // Some code here.
})();

// Callbacks
setTimeout(function () {
  console.log('Hello world!');
}, 1000);

// Functional programming constructs
const arr = [1, 2, 3];
const double = arr.map(function (el) {
  return el * 2;
});
console.log(double); // [2, 4, 6]
```

<!-- Update here: /questions/whats-a-typical-use-case-for-anonymous-functions/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/whats-a-typical-use-case-for-anonymous-functions?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/whats-a-typical-use-case-for-anonymous-functions/en-US.mdx)

<br>

### What are the various ways to create objects in JavaScript?

<!-- Update here: /questions/what-are-the-various-ways-to-create-objects-in-javascript/en-US.mdx -->

Creating objects in JavaScript offers several methods:

- **Object literals (`{}`)**: Simplest and most popular approach. Define key-value pairs within curly braces.
- **`Object()` constructor**: Use `new Object()` with dot notation to add properties.
- **`Object.create()`**: Create new objects using existing objects as prototypes, inheriting properties and methods.
- **Constructor functions**: Define blueprints for objects using functions, creating instances with `new`.
- **ES2015 classes**: Structured syntax similar to other languages, using `class` and `constructor` keywords.

<!-- Update here: /questions/what-are-the-various-ways-to-create-objects-in-javascript/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-various-ways-to-create-objects-in-javascript?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-various-ways-to-create-objects-in-javascript/en-US.mdx)

<br>

### What is a closure in JavaScript, and how/why would you use one?

<!-- Update here: /questions/what-is-a-closure-and-how-why-would-you-use-one/en-US.mdx -->

In the book ["You Don't Know JS"](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures) (YDKJS) by Kyle Simpson, a closure is defined as follows:

> Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope

In simple terms, functions have access to variables that were in their scope at the time of their creation. This is what we call the function's lexical scope. A closure is a function that retains access to these variables even after the outer function has finished executing. It is as if the function has a memory of its original environment.

```js live
function outerFunction() {
  const outerVar = 'I am outside of innerFunction';

  function innerFunction() {
    console.log(outerVar); // `innerFunction` can still access `outerVar`.
  }

  return innerFunction;
}

const inner = outerFunction(); // `inner` now holds a reference to `innerFunction`.

inner(); // "I am outside of innerFunction"
// Even though `outerFunction` has completed execution, `inner` still has access to variables defined inside `outerFunction`.
```

Key points to remember:

- Closure occurs when an inner function has access to variables in its outer (lexical) scope, even when the outer function has finished executing.
- Closure allows a function to **remember** the environment in which it was created. The needed lexical environment remains reachable for as long as the closure needs it.
- Closures are used extensively in JavaScript, such as in callbacks, event handlers, and asynchronous functions.

<!-- Update here: /questions/what-is-a-closure-and-how-why-would-you-use-one/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-a-closure-and-how-why-would-you-use-one?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-a-closure-and-how-why-would-you-use-one/en-US.mdx)

<br>

### What is the definition of a higher-order function in JavaScript?

<!-- Update here: /questions/what-is-the-definition-of-a-higher-order-function/en-US.mdx -->

A higher-order function is any function that takes one or more functions as arguments, which it uses to operate on some data, and/or returns a function as a result.

Higher-order functions are meant to abstract some operation that is performed repeatedly. The classic example of this is `Array.prototype.map()`, which takes an array and a function as arguments. `Array.prototype.map()` then uses this function to transform each item in the array, returning a new array with the transformed data. Other popular examples in JavaScript are `Array.prototype.forEach()`, `Array.prototype.filter()`, and `Array.prototype.reduce()`. A higher-order function doesn't just need to be manipulating arrays as there are many use cases for returning a function from another function. `Function.prototype.bind()` is an example that returns another function.

Imagine a scenario where we have an array of names that we need to transform to uppercase. The imperative way will be as such:

```js live
const names = ['irish', 'daisy', 'anna'];

function transformNamesToUppercase(names) {
  const results = [];
  for (let i = 0; i < names.length; i++) {
    results.push(names[i].toUpperCase());
  }
  return results;
}

console.log(transformNamesToUppercase(names)); // ['IRISH', 'DAISY', 'ANNA']
```

Using `Array.prototype.map(transformerFn)` makes the code shorter and more declarative.

```js live
const names = ['irish', 'daisy', 'anna'];

function transformNamesToUppercase(names) {
  return names.map((name) => name.toUpperCase());
}

console.log(transformNamesToUppercase(names)); // ['IRISH', 'DAISY', 'ANNA']
```

<!-- Update here: /questions/what-is-the-definition-of-a-higher-order-function/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-definition-of-a-higher-order-function?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-definition-of-a-higher-order-function/en-US.mdx)

<br>

### What are the differences between JavaScript ES2015 classes and ES5 function constructors?

<!-- Update here: /questions/what-are-the-differences-between-es6-class-and-es5-function-constructors/en-US.mdx -->

ES2015 introduces a new way of creating classes, which provides a more intuitive and concise way to define and work with objects and inheritance compared to the ES5 function constructor syntax. Here's an example of each:

```js
// ES5 function constructor
function Person(name) {
  this.name = name;
}

// ES2015 Class
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

For simple constructors, they look pretty similar. The main difference in the constructor comes when using inheritance. If we want to create a `Student` class that subclasses `Person` and adds a `studentId` field, this is what we have to do.

```js live
// ES5 inheritance
// Superclass
function Person1(name) {
  this.name = name;
}

// Subclass
function Student1(name, studentId) {
  // Call constructor of superclass to initialize superclass-derived members.
  Person1.call(this, name);

  // Initialize subclass's own members.
  this.studentId = studentId;
}
Student1.prototype = Object.create(Person1.prototype);
Student1.prototype.constructor = Student1;

const student1 = new Student1('John', 1234);
console.log(student1.name, student1.studentId); // "John" 1234

// ES2015 inheritance
// Superclass
class Person2 {
  constructor(name) {
    this.name = name;
  }
}

// Subclass
class Student2 extends Person2 {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}

const student2 = new Student2('Alice', 5678);
console.log(student2.name, student2.studentId); // "Alice" 5678
```

It's much more verbose to use inheritance in ES5, and the ES2015 version is easier to understand and remember.

**Comparison of ES5 function constructors vs ES2015 classes**

| Feature | ES5 Function Constructor | ES2015 Class |
| --- | --- | --- |
| Syntax | Uses function constructors and prototypes | Uses `class` keyword |
| Constructor | Function with properties assigned using `this` | `constructor` method inside the class |
| Method Definition | Defined on the prototype | Defined inside the class body |
| Static Methods | Added directly to the constructor function | Defined using the `static` keyword |
| Inheritance | Uses `Object.create()` and manually sets prototype chain | Uses `extends` keyword and `super` |
| Readability | Less intuitive and more verbose | More concise and intuitive |

<!-- Update here: /questions/what-are-the-differences-between-es6-class-and-es5-function-constructors/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-es6-class-and-es5-function-constructors?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-differences-between-es6-class-and-es5-function-constructors/en-US.mdx)

<br>

### Describe event bubbling in JavaScript and browsers

<!-- Update here: /questions/describe-event-bubbling/en-US.mdx -->

Event bubbling is a DOM event propagation mechanism where an event (e.g. a click) starts at the target element and bubbles up to the root of the document. This allows ancestor elements to also respond to the event.

Event bubbling is essential for event delegation, where a single event handler manages events for multiple child elements, enhancing performance and code simplicity. While convenient, failing to manage event propagation properly can lead to unintended behavior, such as multiple handlers firing for a single event.

<!-- Update here: /questions/describe-event-bubbling/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/describe-event-bubbling?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/describe-event-bubbling/en-US.mdx)

<br>

### Describe event capturing in JavaScript and browsers

<!-- Update here: /questions/describe-event-capturing/en-US.mdx -->

Event capturing is a lesser-used counterpart to [event bubbling](https://www.greatfrontend.com/questions/quiz/describe-event-bubbling) in the DOM event propagation mechanism. During capture, the event travels along its event path from ancestors toward the target, and capture listeners run in that order.

Event capturing is used less often than event bubbling, but it is useful when an ancestor needs to observe an event before it reaches the target. DOM events still travel through the capture phase; what defaults to `false` is the `capture` option when registering a listener with `addEventListener()`.

<!-- Update here: /questions/describe-event-capturing/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/describe-event-capturing?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/describe-event-capturing/en-US.mdx)

<br>

### What is the difference between `mouseenter` and `mouseover` event in JavaScript and browsers?

<!-- Update here: /questions/what-is-the-difference-between-mouseenter-and-mouseover-event/en-US.mdx -->

The main difference lies in the bubbling behavior of `mouseenter` and `mouseover` events. `mouseenter` does not bubble while `mouseover` bubbles.

`mouseenter` events do not bubble. The `mouseenter` event is triggered only when the mouse pointer enters the element itself, not its descendants. If a parent element has child elements, and the mouse pointer enters child elements, the `mouseenter` event will not be triggered on the parent element again; it is only triggered once upon entry of the parent element, without regard for its contents. If both parent and child have `mouseenter` listeners attached and the mouse pointer moves from the parent element to the child element, `mouseenter` will only fire for the child.

`mouseover` events bubble up the DOM tree. The `mouseover` event is triggered when the mouse pointer enters the element or one of its descendants. If a parent element has child elements, and the mouse pointer enters child elements, the `mouseover` event will be triggered on the parent element again as well. If the parent element has multiple child elements, this can result in multiple event callbacks fired. If there are child elements, and the mouse pointer moves from the parent element to the child element, `mouseover` will fire for both the parent and the child.

| Property | `mouseenter` | `mouseover` |
| --- | --- | --- |
| Bubbling | No | Yes |
| Trigger | Only when entering itself | When entering itself and when entering descendants |

<!-- Update here: /questions/what-is-the-difference-between-mouseenter-and-mouseover-event/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-mouseenter-and-mouseover-event?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-difference-between-mouseenter-and-mouseover-event/en-US.mdx)

<br>

### What is `'use strict';` (strict mode) in JavaScript for?

<!-- Update here: /questions/what-is-use-strict-what-are-the-advantages-and-disadvantages-to-using-it/en-US.mdx -->

`'use strict'` is a statement used to enable strict mode to entire scripts or individual functions. Strict mode is a way to opt into a restricted variant of JavaScript.

**Advantages**

- Makes it impossible to accidentally create global variables.
- Makes assignments which would otherwise silently fail to throw an exception.
- Makes attempts to delete undeletable properties throw an exception (where before the attempt would simply have no effect).
- Requires that function parameter names be unique.
- A plain function call receives `this === undefined` instead of coercing it to the global object.
- It catches some common coding bloopers, throwing exceptions.
- It disables features that are confusing or poorly thought out.

**Disadvantages**

- Some legacy syntax and reflective features such as `with`, `arguments.callee`, and access to `function.caller` are unavailable.
- Code that depended on silent failures or implicit globals will throw and may need migration work.
- A strict-mode directive cannot be placed in a function with non-simple parameters, such as default, rest, or destructured parameters.

ES modules and class bodies are already strict. Use the directive for legacy scripts or functions that are otherwise in sloppy mode; do not add a redundant directive merely to code that is already an ES module.

<!-- Update here: /questions/what-is-use-strict-what-are-the-advantages-and-disadvantages-to-using-it/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-use-strict-what-are-the-advantages-and-disadvantages-to-using-it?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-use-strict-what-are-the-advantages-and-disadvantages-to-using-it/en-US.mdx)

<br>

### Explain the difference between synchronous and asynchronous functions in JavaScript

<!-- Update here: /questions/explain-the-difference-between-synchronous-and-asynchronous-functions/en-US.mdx -->

Synchronous code runs to completion on the current call stack before later statements can run. Asynchronous APIs arrange for a result to be handled later through a callback, promise, or event, allowing the current stack to finish while the host waits for I/O or a timer. Asynchronous does not mean “runs on another thread”: an `async` function runs synchronously until its first suspension point, and CPU-heavy JavaScript still blocks its thread.

```js live
function sum(a, b) {
  console.log('Inside sum function');
  return a + b;
}

const result = sum(2, 3); // The program waits for sum() to complete before assigning the result
console.log('Result: ', result); // Output: 5
```

Asynchronous APIs commonly expose callbacks, promises, or events. Once the operation can make progress, its continuation is scheduled according to the host's event loop. This works especially well for I/O such as network and database requests; CPU-intensive work must instead be split up or moved to a worker to keep a browser UI responsive.

```js live
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data); // Calling the callback function with data
  }, 2000); // Simulating a 2-second delay
}

console.log('Fetching data...');

fetchData((data) => {
  console.log(data); // Output: { name: 'John', age: 30 } (after 2 seconds)
});

console.log('Call made to fetch data'); // This will print before the data is fetched
```

<!-- Update here: /questions/explain-the-difference-between-synchronous-and-asynchronous-functions/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-the-difference-between-synchronous-and-asynchronous-functions?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-difference-between-synchronous-and-asynchronous-functions/en-US.mdx)

<br>

### What are the pros and cons of using Promises instead of callbacks in JavaScript?

<!-- Update here: /questions/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks/en-US.mdx -->

Promises standardize one eventual outcome and make sequential, parallel, and error flows composable with `.then()`, `async`/`await`, and combinators such as `Promise.all()`. They avoid many callback-contract ambiguities, but they do not cancel work, represent repeated events, or guarantee settlement. A Promise chain can still become unreadable or leak an unhandled rejection when callers forget to return or await it.

<!-- Update here: /questions/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks/en-US.mdx)

<br>

### Explain AJAX in as much detail as possible

<!-- Update here: /questions/explain-ajax-in-as-much-detail-as-possible/en-US.mdx -->

AJAX (Asynchronous JavaScript and XML) facilitates asynchronous communication between the client and server, enabling dynamic updates to web pages without reloading. It uses techniques like `XMLHttpRequest` or the `fetch()` API to send and receive data in the background. In modern web applications, the `fetch()` API is more commonly used to implement AJAX.

**Using `XMLHttpRequest`**

```js live
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error('Request failed: ' + xhr.status);
    }
  }
};
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.send();
```

**Using `fetch()`**

```js live
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Fetch error:', error));
```

<!-- Update here: /questions/explain-ajax-in-as-much-detail-as-possible/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-ajax-in-as-much-detail-as-possible?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-ajax-in-as-much-detail-as-possible/en-US.mdx)

<br>

### What are the advantages and disadvantages of using AJAX?

<!-- Update here: /questions/what-are-the-advantages-and-disadvantages-of-using-ajax/en-US.mdx -->

AJAX (Asynchronous JavaScript and XML) is a technique in JavaScript that allows web pages to send and retrieve data asynchronously from servers without refreshing or reloading the entire page.

**Advantages**

- **Partial updates**: The page can update selected regions without a full navigation, which can make interactions feel faster.
- **Potentially smaller transfers**: An endpoint can return only the data needed for an update instead of another complete document.
- **Preserved in-page state**: Inputs, scroll position, and other client state remain in place because the document is not replaced.

**Disadvantages**

- **Asynchronous complexity**: Applications must handle cancellation, errors, retries, race conditions, stale responses, and loading states.
- **State and navigation design**: URLs, browser history, caching, and indexability do not follow automatically from an in-page request.
- **Client-side cost**: Extra JavaScript, rendering, and state management can offset savings from smaller responses.
- **Security risks**: Untrusted response data must be handled safely; inserting returned HTML can introduce XSS.

<!-- Update here: /questions/what-are-the-advantages-and-disadvantages-of-using-ajax/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-advantages-and-disadvantages-of-using-ajax?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-advantages-and-disadvantages-of-using-ajax/en-US.mdx)

<br>

### What are the differences between `XMLHttpRequest` and `fetch()` in JavaScript and browsers?

<!-- Update here: /questions/what-are-the-differences-between-xmlhttprequest-and-fetch/en-US.mdx -->

`XMLHttpRequest` (XHR) and `fetch()` API are both used for asynchronous HTTP requests in JavaScript (AJAX). `fetch()` offers a cleaner syntax, promise-based approach, and more modern feature set compared to XHR. However, there are some differences:

- `XMLHttpRequest` uses event callbacks, while `fetch()` utilizes promise chaining.
- Both APIs support request headers and common body types; Fetch exposes `Headers`, `Request`, and `Response` abstractions and integrates with streams.
- A Fetch promise rejects for network, CORS, and abort failures but fulfills for HTTP error statuses, so callers must check `response.ok` or `response.status`.
- Both APIs use the browser's HTTP cache. Fetch additionally exposes a `cache` request option.
- `fetch()` requires an `AbortController` for cancelation, while `XMLHttpRequest` provides an `abort()` method.
- XHR exposes convenient upload and download progress events. Fetch response bodies are streams, so download progress can be measured manually, but browsers still lack an equally convenient standard Fetch upload-progress API.
- XHR is a browser API. Fetch is a web standard also implemented by current Node.js and several other runtimes; check the target runtime rather than assuming universal support.

These days `fetch()` is preferred for its cleaner syntax and modern features.

<!-- Update here: /questions/what-are-the-differences-between-xmlhttprequest-and-fetch/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-xmlhttprequest-and-fetch?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-differences-between-xmlhttprequest-and-fetch/en-US.mdx)

<br>

### How do you abort a web request using `AbortController` in JavaScript?

<!-- Update here: /questions/how-do-you-abort-a-web-request-using-abortcontrollers/en-US.mdx -->

Create an `AbortController`, pass its `signal` to `fetch()`, and call `controller.abort()` when the result is no longer needed. `fetch()` and response-body consumption reject when aborted. Treat cancellation as an expected control-flow outcome, clean up any related timers or listeners, and create a new controller for the next operation because an aborted signal stays aborted.

Aborting releases the client from waiting and may cancel network activity, but it does not guarantee that the server stops or rolls back work already started. Make important writes idempotent or provide an application-level cancellation protocol.

<!-- Update here: /questions/how-do-you-abort-a-web-request-using-abortcontrollers/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-do-you-abort-a-web-request-using-abortcontrollers?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-abort-a-web-request-using-abortcontrollers/en-US.mdx)

<br>

### What are JavaScript polyfills for?

<!-- Update here: /questions/what-are-javascript-polyfills-for/en-US.mdx -->

Polyfills implement a missing JavaScript or Web API in environments that do not provide it. Choose them from an explicit support matrix and feature tests, load only the required modules, and prefer maintained implementations because matching specification edge cases is difficult. A transpiler rewrites syntax; it does not by itself add runtime objects such as `Promise`, `URL`, or new array methods.

They can be implemented manually or included through libraries and are often used in conjunction with feature detection.

Common use cases include:

- **New JavaScript Methods**: For example, `Array.prototype.includes()`, `Object.assign()`, etc.
- **New APIs**: Such as `fetch()`, `Promise`, `IntersectionObserver`, etc. Modern browsers support these now, but for a long time they had to be polyfilled.

A commonly used polyfill library is:

- **`core-js`**: A modular standard library for JavaScript which includes polyfills for a wide range of ECMAScript features.

  ```js
  import 'core-js/actual/array/flat-map'; // With this, Array.prototype.flatMap is available to be used.

  [1, 2].flatMap((it) => [it, it]); // => [1, 1, 2, 2]
  ```

Prefer installing maintained polyfills as project dependencies and bundling them with your application instead of loading executable code from a third-party polyfill service at runtime.

<!-- Update here: /questions/what-are-javascript-polyfills-for/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-javascript-polyfills-for?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-javascript-polyfills-for/en-US.mdx)

<br>

### Why is extending built-in JavaScript objects not a good idea?

<!-- Update here: /questions/why-is-extending-built-in-javascript-objects-not-a-good-idea/en-US.mdx -->

Extending a built-in/native JavaScript object means adding properties/functions to its `prototype`. While this may seem like a good idea at first, it is dangerous in practice. Imagine your code uses two libraries that both extend the `Array.prototype` by adding the same `contains` method; the implementations will overwrite each other and your code will have unpredictable behavior if these two methods do not work the same way.

The only time you may want to extend a native object is when you want to create a polyfill, providing your own implementation for a method that is part of the JavaScript specification but might not exist in the user's browser due to it being an older browser.

<!-- Update here: /questions/why-is-extending-built-in-javascript-objects-not-a-good-idea/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/why-is-extending-built-in-javascript-objects-not-a-good-idea?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/why-is-extending-built-in-javascript-objects-not-a-good-idea/en-US.mdx)

<br>

### Why is it, in general, a good idea to leave the global JavaScript scope of a website as-is and never touch it?

<!-- Update here: /questions/why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it/en-US.mdx -->

JavaScript that is executed in the browser has access to the global scope (the `window` object). In general it's a good software engineering practice to not pollute the global namespace unless you are working on a feature that truly needs to be global – it is needed by the entire page. Several reasons to avoid touching the global scope:

- **Naming conflicts**: Sharing the global scope across scripts can cause conflicts and bugs when new global variables or changes are introduced.
- **Cluttered global namespace**: Keeping the global namespace minimal avoids making the codebase hard to manage and maintain.
- **Scope leaks**: Unintentional references to global variables in closures or event handlers can cause memory leaks and performance issues.
- **Modularity and encapsulation**: Good design promotes keeping variables and functions within their specific scopes, enhancing organization, reusability, and maintainability.
- **Security concerns**: Global variables are accessible by all scripts, including potentially malicious ones, posing security risks, especially if sensitive data is stored there.
- **Compatibility and portability**: Heavy reliance on global variables reduces code portability and integration ease with other libraries or frameworks.

Follow these best practices to avoid global scope pollution:

- **Use local variables**: Declare variables within functions or blocks using `var`, `let`, or `const` to limit their scope.
- **Pass variables as function parameters**: Maintain encapsulation by passing variables as parameters instead of accessing them globally.
- **Use immediately invoked function expressions (IIFE)**: Create new scopes with IIFEs to prevent adding variables to the global scope.
- **Use modules**: Encapsulate code with module systems to maintain separate scopes and manageability.

<!-- Update here: /questions/why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it/en-US.mdx)

<br>

### Explain the differences between CommonJS modules and ES modules in JavaScript

<!-- Update here: /questions/explain-the-differences-between-commonjs-modules-and-es-modules/en-US.mdx -->

In JavaScript, modules are reusable pieces of code that encapsulate functionality, making it easier to manage, maintain, and structure your applications. Modules allow you to break down your code into smaller, manageable parts, each with its own scope.

**CommonJS** is an older module system that was initially designed for server-side JavaScript development with Node.js. It uses the `require()` function to load modules and the `module.exports` or `exports` object to define the exports of a module.

```js
// my-module.js
const value = 42;
module.exports = { value };

// main.js
const myModule = require('./my-module.js');
console.log(myModule.value); // 42
```

**ES Modules** (ECMAScript Modules) are the standardized module system introduced in ES6 (ECMAScript 2015). They use the `import` and `export` statements to handle module dependencies.

```js
// my-module.js
export const value = 42;

// main.js
import { value } from './my-module.js';
console.log(value); // 42
```

**CommonJS vs ES modules**

| Feature | CommonJS | ES modules |
| --- | --- | --- |
| Module Syntax | `require()` for importing `module.exports` for exporting | `import` for importing `export` for exporting |
| Environment | Primarily used in Node.js for server-side development | Designed for both browser and server-side JavaScript (Node.js) |
| Loading and linking | `require()` is synchronous | Static imports are linked before evaluation; `import()` returns a promise, and top-level `await` can make evaluation asynchronous |
| Structure | `require()` calls can be conditional | Static `import`/`export` declarations are top-level; dynamic loading uses `import()` |
| File extensions | `.js` (default) | `.mjs` or `.js` (with `type: "module"` in `package.json`) |
| Browser support | Not natively supported in browsers | Natively supported in modern browsers |
| Optimization | Limited optimization due to dynamic nature | Allows for optimizations like tree-shaking due to static structure |
| Compatibility | Widely used in existing Node.js codebases and libraries | JavaScript standard supported by browsers and modern server runtimes |

<!-- Update here: /questions/explain-the-differences-between-commonjs-modules-and-es-modules/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-the-differences-between-commonjs-modules-and-es-modules?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-differences-between-commonjs-modules-and-es-modules/en-US.mdx)

<br>

### What are the various data types in JavaScript?

<!-- Update here: /questions/what-are-the-various-data-types-in-javascript/en-US.mdx -->

In JavaScript, data types can be categorized into `primitive` and `non-primitive` types:

**Primitive data types**

- **Number**: Represents both integers and floating-point numbers.
- **String**: Represents sequences of characters.
- **Boolean**: Represents `true` or `false` values.
- **Undefined**: A variable that has been declared but not assigned a value.
- **Null**: Represents the intentional absence of any object value.
- **Symbol**: A unique and immutable value used as object property keys. Read more in our [deep dive on `Symbol`s](https://www.greatfrontend.com/questions/quiz/what-are-symbols-used-for).
- **BigInt**: Represents integers with arbitrary precision.

The remaining ECMAScript language type is **Object**. Arrays, functions, dates, regular expressions, maps, and sets are all kinds of objects rather than additional language types. Functions are callable objects and receive the special `typeof` result `"function"`.

<!-- Update here: /questions/what-are-the-various-data-types-in-javascript/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-various-data-types-in-javascript?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-various-data-types-in-javascript/en-US.mdx)

<br>

### What language constructs do you use for iterating over object properties and array items in JavaScript?

<!-- Update here: /questions/what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items/en-US.mdx -->

There are multiple ways to iterate over object properties as well as arrays in JavaScript:

**`for...in` loop**

The `for...in` loop iterates over all enumerable properties of an object, including inherited enumerable properties. So it is important to have a check if you only want to iterate over the object's own properties.

```js live
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  // To avoid iterating over inherited properties
  if (Object.hasOwn(obj, key)) {
    console.log(`${key}: ${obj[key]}`);
  }
}
```

**`Object.keys()`**

`Object.keys()` returns an array of the object's own enumerable property names. You can then use a `for...of` loop or `forEach` to iterate over this array.

```js live
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

Object.keys(obj).forEach((key) => {
  console.log(`${key}: ${obj[key]}`);
});
```

The most common ways to iterate over an array are using a `for` loop and the `Array.prototype.forEach` method.

**Using `for` loop**

```js live
let array = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}
```

**Using `Array.prototype.forEach` method**

```js live
let array = [1, 2, 3, 4, 5, 6];
array.forEach((number, index) => {
  console.log(`${number} at index ${index}`);
});
```

**Using `for...of`**

This method is the newest and most convenient way to iterate over arrays. It automatically iterates over each element without requiring you to manage the index.

```js live
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}
```

There are also other built-in methods available which are suitable for specific scenarios, for example:

- `Array.prototype.filter`: You can use the `filter` method to create a new array containing only the elements that satisfy a certain condition.
- `Array.prototype.map`: You can use the `map` method to create a new array based on the existing one, transforming each element with a provided function.
- `Array.prototype.reduce`: You can use the `reduce` method to combine all elements into a single value by repeatedly calling a function that takes two arguments: the accumulated value and the current element.

<!-- Update here: /questions/what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items/en-US.mdx)

<br>

### What are the benefits of using spread syntax in JavaScript and how is it different from rest syntax?

<!-- Update here: /questions/what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax/en-US.mdx -->

**Spread syntax** (`...`) allows an iterable (like an array or string) to be expanded into individual elements. This is often used as a convenient and modern way to create new arrays or objects by combining existing ones.

| Operation      | Traditional                     | Spread                 |
| -------------- | ------------------------------- | ---------------------- |
| Array cloning  | `arr.slice()`                   | `[...arr]`             |
| Array merging  | `arr1.concat(arr2)`             | `[...arr1, ...arr2]`   |
| Object cloning | `Object.assign({}, obj)`        | `{ ...obj }`           |
| Object merging | `Object.assign({}, obj1, obj2)` | `{ ...obj1, ...obj2 }` |

**Rest syntax** is the opposite of what spread syntax does. It collects a variable number of arguments into an array. This is often used in function parameters to handle a dynamic number of arguments.

```js live
// Using rest syntax in a function
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
```

<!-- Update here: /questions/what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax/en-US.mdx)

<br>

### What are iterators and generators in JavaScript and what are they used for?

<!-- Update here: /questions/what-are-iterators-and-generators-and-what-are-they-used-for/en-US.mdx -->

In JavaScript, iterators and generators are tools for managing sequences of data and controlling the flow of execution in a more flexible way.

**Iterators** are objects that define a sequence and potentially a return value upon its termination. They adhere to a specific interface:

- An iterator object must implement a `next()` method.
- The `next()` method returns an object with two properties:
  - `value`: The next value in the sequence.
  - `done`: A boolean that is `true` if the iterator has finished its sequence, otherwise `false`.

Here's an example of an object implementing the iterator interface.

```js live
const iterator = {
  current: 0,
  last: 5,
  next() {
    if (this.current <= this.last) {
      return { value: this.current++, done: false };
    } else {
      return { value: undefined, done: true };
    }
  },
};

let result = iterator.next();
while (!result.done) {
  console.log(result.value); // Logs 0, 1, 2, 3, 4, 5
  result = iterator.next();
}
```

**Generators** are special functions that **can pause execution and resume at a later point**. They use the `function*` syntax and the `yield` keyword to control the flow of execution. When you call a generator function, it doesn't execute completely like a regular function. Instead, it returns an iterator object. Calling the `next()` method on the returned iterator advances the generator to the next `yield` statement, and the value after `yield` becomes the return value of `next()`.

```js live
function* numberGenerator() {
  let num = 0;
  while (num <= 5) {
    yield num++;
  }
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

Generators are useful for creating iterators on demand, especially for infinite sequences or complex iteration logic. They can be used for:

- Lazy evaluation – processing elements only when needed, improving memory efficiency for large datasets.
- Implementing iterators for custom data structures.
- Creating asynchronous iterators for handling data streams.

<!-- Update here: /questions/what-are-iterators-and-generators-and-what-are-they-used-for/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-iterators-and-generators-and-what-are-they-used-for?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-iterators-and-generators-and-what-are-they-used-for/en-US.mdx)

<br>

### Explain the difference between mutable and immutable objects in JavaScript

<!-- Update here: /questions/explain-the-difference-between-mutable-and-immutable-objects/en-US.mdx -->

**Mutable objects** allow for modification of properties and values after creation, which is the default behavior for most objects.

```js live
const mutableObject = {
  name: 'John',
  age: 30,
};

// Modify the object
mutableObject.name = 'Jane';

// The object has been modified
console.log(mutableObject); // Output: { name: 'Jane', age: 30 }
```

**Immutable values** cannot be changed after creation. JavaScript objects and arrays are mutable by default; an application can enforce shallow immutability with `Object.freeze()` or follow an immutable-update convention that creates a new object instead of mutating the existing one.

```js live
const immutableObject = Object.freeze({
  name: 'John',
  age: 30,
});

// Attempt to modify the object
immutableObject.name = 'Jane';

// The object remains unchanged
console.log(immutableObject); // Output: { name: 'John', age: 30 }
```

`Object.freeze()` is shallow, so nested objects remain mutable unless they are frozen separately. Failed writes throw in strict mode and otherwise usually fail silently.

<!-- Update here: /questions/explain-the-difference-between-mutable-and-immutable-objects/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/explain-the-difference-between-mutable-and-immutable-objects?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-difference-between-mutable-and-immutable-objects/en-US.mdx)

<br>

### What is the difference between a `Map` object and a plain object in JavaScript?

<!-- Update here: /questions/what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript/en-US.mdx -->

Both `Map` objects and plain objects in JavaScript can store key-value pairs, but they have several key differences:

| Feature | `Map` | Plain object |
| --- | --- | --- |
| Key type | Any data type | String (or Symbol) |
| Key order | Insertion order | Defined own-key order; integer-index keys come first, then other strings by insertion order, then symbols |
| Size property | Yes (`size`) | None |
| Iteration | `forEach`, `keys()`, `values()`, `entries()` | `for...in`, `Object.keys()`, etc. |
| Prototype interaction | User keys do not collide with `Map.prototype` methods | Object literals inherit from `Object.prototype` unless created with a null prototype |
| Performance | Designed for frequent keyed additions/removals; measure for the actual workload | Often convenient for fixed records; measure for the actual workload |
| JSON | Entries need an explicit conversion or replacer | Own enumerable string-keyed data is handled by `JSON.stringify()`, subject to JSON's normal limitations |

<!-- Update here: /questions/what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript/en-US.mdx)

<br>

### What are the differences between `Map`/`Set` and `WeakMap`/`WeakSet` in JavaScript?

<!-- Update here: /questions/what-are-the-differences-between-map-set-and-weakmap-weakset/en-US.mdx -->

The primary difference between `Map`/`Set` and `WeakMap`/`WeakSet` in JavaScript lies in how they handle keys. Here's a breakdown:

**`Map` vs. `WeakMap`**

`Map`s allow any JavaScript value as a key and hold their keys and values strongly while the `Map` remains reachable. They are suitable for general-purpose key-value storage and are iterable in insertion order.

`WeakMap`s allow objects and non-registered symbols as keys. These keys are held weakly: an entry does not by itself keep its key reachable. `WeakMap`s are useful for associating metadata with a key without controlling that key's lifetime. Garbage collection timing is not observable or guaranteed.

- Caching data based on objects without preventing garbage collection of the objects themselves.
- Storing private data associated with DOM nodes without affecting their lifecycle.

**`Set` vs. `WeakSet`**

Similar to `Map`, `Set`s allow any data type as elements. The elements within a `Set` must be unique. `Set`s are useful for storing unique values and checking for membership efficiently. Common use cases include removing duplicates from arrays or keeping track of completed tasks.

`WeakSet` allows objects and non-registered symbols as elements. Like `WeakMap` keys, they are held weakly. `WeakSet`s are useful when membership should not keep an object alive.

- Tracking DOM nodes that have been interacted with without affecting their memory management.
- Implementing custom object weak references for specific use cases.

**Here's a table summarizing the key differences:**

| Feature | Map | WeakMap | Set | WeakSet |
| --- | --- | --- | --- | --- |
| Key Types | Any JavaScript value | Objects and non-registered symbols | Any JavaScript value (unique) | Objects and non-registered symbols (unique) |
| References | Strong keys and values | Weak keys; values are associated with the key's lifetime | Strong elements | Weak elements |
| Use Cases | General-purpose key-value storage | Caching, private DOM node data | Removing duplicates, membership checks | Object weak references, custom use cases |

**Choosing between them**

- Use `Map` and `Set` for most scenarios where you need to store key-value pairs or unique elements and want to maintain references to both the keys/elements and the values.
- Use `WeakMap` and `WeakSet` when membership should not keep an object or non-registered symbol alive. They are intentionally non-iterable, so use `Map` or `Set` if entries must be listed or counted.

<!-- Update here: /questions/what-are-the-differences-between-map-set-and-weakmap-weakset/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-the-differences-between-map-set-and-weakmap-weakset?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-differences-between-map-set-and-weakmap-weakset/en-US.mdx)

<br>

### Why might you want to create static class members in JavaScript?

<!-- Update here: /questions/why-you-might-want-to-create-static-class-members/en-US.mdx -->

Static fields and methods belong to the class constructor rather than to each instance. Use them for behavior or data conceptually associated with the type as a whole: named factories, validation helpers, registries, constants, or counters. Access them as `ClassName.member` (or through `this` inside a static method), not through an instance.

Do not use static mutable state for request/user data or browser secrets. It is shared within that constructor's runtime scope, complicates isolation and concurrency, and is duplicated across processes, workers, realms, or separate module copies. A module-level function or dependency-injected object is often simpler when no class abstraction is needed.

<!-- Update here: /questions/why-you-might-want-to-create-static-class-members/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/why-you-might-want-to-create-static-class-members?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/why-you-might-want-to-create-static-class-members/en-US.mdx)

<br>

### What are `Symbol`s used for in JavaScript?

<!-- Update here: /questions/what-are-symbols-used-for/en-US.mdx -->

`Symbol`s are primitive values commonly used as collision-resistant object property keys and protocol hooks such as `Symbol.iterator`. Each call to `Symbol(description)` creates a distinct value, while `Symbol.for(key)` uses a shared registry. Symbol-keyed properties are skipped by `for...in`, `Object.keys()`, and JSON serialization, but they are not private: code can retrieve them with `Object.getOwnPropertySymbols()` or `Reflect.ownKeys()`.

```js live
let sym1 = Symbol();
let sym2 = Symbol('myKey');

console.log(typeof sym1); // "symbol"
console.log(sym1 === sym2); // false, because each symbol is unique

let obj = {};
let sym = Symbol('uniqueKey');

obj[sym] = 'value';
console.log(obj[sym]); // "value"
```

**Note**: The `Symbol()` function must be called without the `new` keyword. It is not exactly a constructor because it can only be called as a function instead of with `new Symbol()`.

<!-- Update here: /questions/what-are-symbols-used-for/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-symbols-used-for?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-symbols-used-for/en-US.mdx)

<br>

### What are server-sent events?

<!-- Update here: /questions/what-are-server-sent-events/en-US.mdx -->

[Server-sent events (SSE)](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events) is the `text/event-stream` format for a server-to-client stream over HTTP. Browsers expose the `EventSource` API for a long-lived GET connection with built-in reconnection and last-event-ID support. A Fetch response body can also consume an SSE-formatted stream when an application needs a different HTTP method, request body, or custom headers, but reconnection and parsing then become application responsibilities.

| Property | `WebSocket` | `EventSource` |
| --- | --- | --- |
| Direction | Bi-directional – both client and server can exchange messages | Unidirectional – only server sends data |
| Data type | Binary and text data | Only text |
| Protocol | WebSocket protocol (`ws://`) | Regular HTTP (`http://`) |
| Browser API request shape | Custom handshake | `EventSource` issues GET; no request body and limited request-header control |

**Creating an event source**

```js
const eventSource = new EventSource('/sse-stream');
```

**Listening for events**

```js
// Fired when the connection is established.
eventSource.addEventListener('open', () => {
  console.log('Connection opened');
});

// Fired when a message is received from the server.
eventSource.addEventListener('message', (event) => {
  console.log('Received message:', event.data);
});

// Fired when an error occurs.
eventSource.addEventListener('error', (error) => {
  console.error('Error occurred:', error);
});
```

**Sending events from server**

```js
const express = require('express');
const app = express();

app.get('/sse-stream', (req, res) => {
  // `Content-Type` need to be set to `text/event-stream`.
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Each message should be prefixed with data.
  const sendEvent = (data) => res.write(`data: ${data}\n\n`);

  sendEvent('Hello from server');

  const intervalId = setInterval(() => sendEvent(new Date().toString()), 1000);

  res.on('close', () => {
    console.log('Client closed connection');
    clearInterval(intervalId);
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
```

In this example, the server sends a "Hello from server" message initially, and then sends the current date every second. The connection is kept alive until the client closes it.

<!-- Update here: /questions/what-are-server-sent-events/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-server-sent-events?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-server-sent-events/en-US.mdx)

<br>

### What are JavaScript object property flags and descriptors?

<!-- Update here: /questions/what-are-javascript-object-property-flags-and-descriptors/en-US.mdx -->

In JavaScript, property flags and descriptors manage the behavior and attributes of object properties.

**Property flags**

Property flags are used to specify the behavior of a property on an object. Here are the available flags:

- `writable`: Specifies whether the property can be written to.
- `enumerable`: Specifies whether the property is enumerable.
- `configurable`: Controls whether the property can be deleted and whether most parts of its descriptor can be reconfigured.

**Property descriptors**

These provide detailed information about an object's property, including its value and flags. They are retrieved using `Object.getOwnPropertyDescriptor()` and set using `Object.defineProperty()`.

The use cases of property descriptors are as follows:

- Making a property non-writable by setting `writable: false` to ensure data consistency.
- Hiding a property from enumeration by setting `enumerable: false`.
- Preventing property deletion and most descriptor changes by setting `configurable: false`. A writable data property's value can still change, and `writable` can still change from `true` to `false`.
- Applying descriptor restrictions to every existing own property with `Object.seal()` or `Object.freeze()`. Both are shallow, and sealing still permits writes to writable data properties.

<!-- Update here: /questions/what-are-javascript-object-property-flags-and-descriptors/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-javascript-object-property-flags-and-descriptors?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-javascript-object-property-flags-and-descriptors/en-US.mdx)

<br>

### What are JavaScript object getters and setters for?

<!-- Update here: /questions/what-are-javascript-object-getters-and-setters-for/en-US.mdx -->

JavaScript object getters and setters are used to control access to an object's properties. They provide a way to encapsulate the implementation details of a property and define custom behavior when getting or setting its value.

Getters and setters are defined using the `get` and `set` keywords, respectively, followed by a function that is executed when the property is accessed or assigned a new value.

Here's a code example demonstrating the use of getters and setters:

```js live
const person = {
  _name: 'John Doe', // Underscore is a naming convention, not privacy

  get name() {
    // Getter
    return this._name;
  },
  set name(newName) {
    // Setter
    if (newName.trim().length > 0) {
      this._name = newName;
    } else {
      console.log('Invalid name');
    }
  },
};

// Accessing the name property using the getter
console.log(person.name); // Output: 'John Doe'

// Setting the name property using the setter
person.name = 'Jane Smith'; // Setter is called
console.log(person.name); // Output: 'Jane Smith'

person.name = ''; // Setter is called, but the value is not set due to validation
console.log(person.name); // Output: 'Jane Smith'
```

<!-- Update here: /questions/what-are-javascript-object-getters-and-setters-for/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-javascript-object-getters-and-setters-for?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-javascript-object-getters-and-setters-for/en-US.mdx)

<br>

### What are proxies in JavaScript used for?

<!-- Update here: /questions/what-are-proxies-in-javascript-used-for/en-US.mdx -->

In JavaScript, a proxy is an object that acts as an intermediary between an object and the code. Proxies are used to intercept and customize the fundamental operations of JavaScript objects, such as property access, assignment, function invocation, and more.

Here's a basic example of using a `Proxy` to log every property access:

```js live
const myObject = {
  name: 'John',
  age: 42,
};

const handler = {
  get: function (target, prop, receiver) {
    console.log(`Someone accessed property "${prop}"`);
    return Reflect.get(target, prop, receiver);
  },
};

const proxiedObject = new Proxy(myObject, handler);

console.log(proxiedObject.name);
// Someone accessed property "name"
// 'John'

console.log(proxiedObject.age);
// Someone accessed property "age"
// 42
```

Use cases include:

- **Property access interception**: Intercept and customize property access on an object.
- **Property assignment validation**: Validate property values before they are set on the target object.
- **Logging and debugging**: Create wrappers for logging and debugging interactions with an object.
- **Creating reactive systems**: Trigger updates in other parts of your application when object properties change (data binding).
- **Data transformation**: Transform data being set or retrieved from an object.
- **Mocking and stubbing in tests**: Create mock or stub objects for testing purposes, allowing you to isolate dependencies and focus on the unit under test.
- **Function invocation interception**: Used to cache and return the result of frequently accessed methods if they involve network calls or computationally intensive logic, improving performance.
- **Dynamic property creation**: Useful for defining properties on the fly with default values and avoiding storing redundant data in objects.

<!-- Update here: /questions/what-are-proxies-in-javascript-used-for/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-proxies-in-javascript-used-for?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-proxies-in-javascript-used-for/en-US.mdx)

<br>

### What tools and techniques do you use for debugging JavaScript code?

<!-- Update here: /questions/what-tools-and-techniques-do-you-use-for-debugging-javascript-code/en-US.mdx -->

Reproduce the failure reliably, reduce it to the smallest useful scenario, form a specific hypothesis, and inspect the program at the boundary where expected and actual behavior diverge. Use breakpoints and the call stack for control flow, the Network panel for request failures, source maps for transformed code, the Performance and Memory panels for measured performance problems, and framework-specific tools only when the failure is inside that framework's state or render model.

Prefer a debugger, conditional breakpoint, or logpoint over scattering permanent `console.log()` calls. Preserve the failing input and add a regression test after finding the cause.

<!-- Update here: /questions/what-tools-and-techniques-do-you-use-for-debugging-javascript-code/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-tools-and-techniques-do-you-use-for-debugging-javascript-code?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-tools-and-techniques-do-you-use-for-debugging-javascript-code/en-US.mdx)

<br>

### What are workers in JavaScript used for?

<!-- Update here: /questions/what-are-workers-in-javascript-used-for/en-US.mdx -->

Workers in JavaScript are background threads that allow you to run scripts in parallel with the main execution thread, without blocking or interfering with the user interface. Their key features include:

- **Parallel processing**: Workers run in a separate thread from the main thread, allowing your web page to remain responsive to user interactions while the worker performs its tasks. It's useful for moving CPU-intensive work off the main thread and freeing you from JavaScript's single-threaded nature.
- **Communication**: Uses `postMessage()` and `onmessage`/`'message'` event for messaging.
- **Access to selected web APIs**: Depending on the worker type, workers can use APIs such as `fetch()`, IndexedDB, Cache, Web Crypto, and timers. They do not expose the Window-only `localStorage` or `sessionStorage` APIs.
- **No DOM access**: Workers cannot directly manipulate the DOM, thus cannot interact with the UI, ensuring they don't accidentally interfere with the main thread's operation.

There are three main types of workers in JavaScript:

- **Web workers / Dedicated workers**
  - Run scripts in background threads, separate from the main UI thread.
  - Useful for CPU-intensive tasks like data processing, calculations, etc.
  - Cannot directly access or manipulate the DOM.
- **Service workers**
  - Act as network proxies, handling requests between the app and network.
  - Enable offline functionality, caching, and push notifications.
  - Are event-driven and can be started by the browser for supported events even when no controlled page is open; they are not continuously running background processes.
- **Shared workers**
  - Can be shared by compatible same-origin documents in different windows or frames.
  - Scripts communicate with the shared worker by sending and receiving messages.
  - Useful for coordinating tasks across different parts of a web page.

<!-- Update here: /questions/what-are-workers-in-javascript-used-for/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/what-are-workers-in-javascript-used-for?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-workers-in-javascript-used-for/en-US.mdx)

<br>

### How does JavaScript garbage collection work?

<!-- Update here: /questions/how-does-javascript-garbage-collection-work/en-US.mdx -->

JavaScript engines automatically reclaim objects that are no longer reachable from roots such as the current call stack, global objects, and live host objects. Modern engines combine tracing collectors with optimizations such as generations, incremental work, and compaction; the exact strategy is an engine implementation detail.

**Mark-and-sweep**

The most common garbage collection algorithm used in JavaScript is the Mark-and-sweep algorithm. It operates in two phases:

- **Marking phase**: The garbage collector traverses the object graph, starting from the root objects (global variables, currently executing functions, etc.), and marks all reachable objects as "in-use".
- **Sweeping phase**: The garbage collector sweeps through memory, removing all unmarked objects, as they are considered unreachable and no longer needed.

This algorithm effectively identifies and removes objects that have become unreachable, freeing up memory for new allocations.

**Generational garbage collection**

Used by modern JavaScript engines, objects are divided into different generations based on their age. Objects start in the young generation, and those that survive several collections are promoted to the old generation. This optimization reduces the overhead of garbage collection by focusing on the younger generation, where most objects are short-lived.

Garbage collection does not prevent memory leaks: a listener, timer, closure, DOM reference, or unbounded cache can keep data reachable even when the application no longer needs it. Diagnose a suspected leak by repeating the problematic action, comparing heap snapshots, and following retaining paths. Do not try to force garbage collection in normal application code.

<!-- Update here: /questions/how-does-javascript-garbage-collection-work/en-US.mdx -->

<br>
    
> Read the [detailed answer](https://www.greatfrontend.com/questions/quiz/how-does-javascript-garbage-collection-work?language=js&tab=quiz) on [GreatFrontEnd](https://www.greatfrontend.com?gnrs=github) which allows progress tracking, contains more code samples, and useful resources.

[Back to top ↑](#table-of-contents-top-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-does-javascript-garbage-collection-work/en-US.mdx)

<br>


<!-- QUESTIONS:TOP:END -->

## All Questions with Answers

<!-- QUESTIONS:ALL:START -->

### What are the various data types in JavaScript?

<!-- Update here: /questions/what-are-the-various-data-types-in-javascript/en-US.mdx -->

In JavaScript, data types can be categorized into `primitive` and `non-primitive` types:

**Primitive data types**

- **Number**: Represents both integers and floating-point numbers.
- **String**: Represents sequences of characters.
- **Boolean**: Represents `true` or `false` values.
- **Undefined**: A variable that has been declared but not assigned a value.
- **Null**: Represents the intentional absence of any object value.
- **Symbol**: A unique and immutable value used as object property keys. Read more in our [deep dive on `Symbol`s](https://www.greatfrontend.com/questions/quiz/what-are-symbols-used-for).
- **BigInt**: Represents integers with arbitrary precision.

The remaining ECMAScript language type is **Object**. Arrays, functions, dates, regular expressions, maps, and sets are all kinds of objects rather than additional language types. Functions are callable objects and receive the special `typeof` result `"function"`.

<!-- Update here: /questions/what-are-the-various-data-types-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-various-data-types-in-javascript/en-US.mdx)

<br>

### How do you check the data type of a variable?

<!-- Update here: /questions/how-do-you-check-the-data-type-of-a-variable/en-US.mdx -->

Use `typeof` for primitive categories and functions. Its possible results include `"undefined"`, `"boolean"`, `"number"`, `"bigint"`, `"string"`, `"symbol"`, `"function"`, and `"object"`. Because `typeof null` is historically `"object"` and arrays are objects, check those with `value === null` and `Array.isArray(value)`. For specific object kinds, prefer purpose-built checks and be careful with `instanceof` across realms.

<!-- Update here: /questions/how-do-you-check-the-data-type-of-a-variable/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-check-the-data-type-of-a-variable/en-US.mdx)

<br>

### What's the difference between a JavaScript variable that is: `null`, `undefined` or undeclared?

<!-- Update here: /questions/whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states/en-US.mdx -->

| Trait | `null` | `undefined` | Undeclared |
| --- | --- | --- | --- |
| Meaning | Explicitly set by the developer to indicate that a variable has no value | Variable has been declared but not assigned a value | Variable has not been declared at all |
| Type (via `typeof` operator) | `'object'` | `'undefined'` | `'undefined'` |
| Direct access/comparison | Can compare with `value === null` | Can compare with `value === undefined` | Direct access throws `ReferenceError`; `typeof undeclaredName` returns `'undefined'` |

<!-- Update here: /questions/whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared-how-would-you-go-about-checking-for-any-of-these-states/en-US.mdx)

<br>

### What are the differences between JavaScript variables created using `let`, `var` or `const`?

<!-- Update here: /questions/what-are-the-differences-between-variables-created-using-let-var-or-const/en-US.mdx -->

In JavaScript, `let`, `var`, and `const` are all keywords used to declare variables, but they differ significantly in terms of scope, initialization rules, whether they can be redeclared or reassigned, and the behavior when they are accessed before declaration:

| Behavior | `var` | `let` | `const` |
| --- | --- | --- | --- |
| Scope | Function or Global | Block | Block |
| Initialization | Optional | Optional | Required |
| Redeclaration | Yes | No | No |
| Reassignment | Yes | Yes | No |
| Accessing before declaration | `undefined` | `ReferenceError` | `ReferenceError` |

<!-- Update here: /questions/what-are-the-differences-between-variables-created-using-let-var-or-const/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-differences-between-variables-created-using-let-var-or-const/en-US.mdx)

<br>

### Why is it, in general, a good idea to leave the global JavaScript scope of a website as-is and never touch it?

<!-- Update here: /questions/why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it/en-US.mdx -->

JavaScript that is executed in the browser has access to the global scope (the `window` object). In general it's a good software engineering practice to not pollute the global namespace unless you are working on a feature that truly needs to be global – it is needed by the entire page. Several reasons to avoid touching the global scope:

- **Naming conflicts**: Sharing the global scope across scripts can cause conflicts and bugs when new global variables or changes are introduced.
- **Cluttered global namespace**: Keeping the global namespace minimal avoids making the codebase hard to manage and maintain.
- **Scope leaks**: Unintentional references to global variables in closures or event handlers can cause memory leaks and performance issues.
- **Modularity and encapsulation**: Good design promotes keeping variables and functions within their specific scopes, enhancing organization, reusability, and maintainability.
- **Security concerns**: Global variables are accessible by all scripts, including potentially malicious ones, posing security risks, especially if sensitive data is stored there.
- **Compatibility and portability**: Heavy reliance on global variables reduces code portability and integration ease with other libraries or frameworks.

Follow these best practices to avoid global scope pollution:

- **Use local variables**: Declare variables within functions or blocks using `var`, `let`, or `const` to limit their scope.
- **Pass variables as function parameters**: Maintain encapsulation by passing variables as parameters instead of accessing them globally.
- **Use immediately invoked function expressions (IIFE)**: Create new scopes with IIFEs to prevent adding variables to the global scope.
- **Use modules**: Encapsulate code with module systems to maintain separate scopes and manageability.

<!-- Update here: /questions/why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/why-is-it-in-general-a-good-idea-to-leave-the-global-scope-of-a-website-as-is-and-never-touch-it/en-US.mdx)

<br>

### How do you convert a string to a number in JavaScript?

<!-- Update here: /questions/how-do-you-convert-a-string-to-a-number-in-javascript/en-US.mdx -->

Use `Number(value)` when the whole string must represent a number. Use `parseInt(value, radix)` or `parseFloat(value)` when intentionally accepting a numeric prefix such as `'12px'`; they stop at the first invalid character. Check the result with `Number.isNaN()` or, for finite application values, `Number.isFinite()`. Remember that `Number('')` and `Number('   ')` are `0`, so validate required input before conversion.

<!-- Update here: /questions/how-do-you-convert-a-string-to-a-number-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-convert-a-string-to-a-number-in-javascript/en-US.mdx)

<br>

### What are template literals and how are they used?

<!-- Update here: /questions/what-are-template-literals-and-how-are-they-used/en-US.mdx -->

Template literals are a feature in JavaScript that allow for easier string interpolation and multi-line strings. They are enclosed by backticks (`` ` ``) instead of single or double quotes. You can embed expressions within template literals using `${expression}` syntax.

Example:

```js live
const myName = 'John';
const greeting = `Hello, ${myName}!`;
console.log(greeting); // Output: Hello, John!
```

<!-- Update here: /questions/what-are-template-literals-and-how-are-they-used/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-template-literals-and-how-are-they-used/en-US.mdx)

<br>

### Explain the concept of tagged templates

<!-- Update here: /questions/explain-the-concept-of-tagged-templates/en-US.mdx -->

Tagged templates in JavaScript allow you to parse template literals with a function. The function receives the literal strings and the values as arguments, enabling custom processing of the template. For example:

```js live
function tag(strings, ...values) {
  return strings[0] + values[0] + strings[1] + values[1] + strings[2];
}

const result = tag`Hello ${'world'}! How are ${'you'}?`;
console.log(result); // "Hello world! How are you?"
```

<!-- Update here: /questions/explain-the-concept-of-tagged-templates/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-tagged-templates/en-US.mdx)

<br>

### What is the spread operator and how is it used?

<!-- Update here: /questions/what-is-the-spread-operator-and-how-is-it-used/en-US.mdx -->

The spread operator, represented by three dots (`...`), is used in JavaScript to expand iterable objects like arrays or strings into individual elements. It can also be used to spread object properties. For example, you can use it to combine arrays, copy arrays, or pass array elements as arguments to a function.

```js live
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj); // { a: 1, b: 2, c: 3, d: 4 }
```

<!-- Update here: /questions/what-is-the-spread-operator-and-how-is-it-used/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-spread-operator-and-how-is-it-used/en-US.mdx)

<br>

### What are `Symbol`s used for in JavaScript?

<!-- Update here: /questions/what-are-symbols-used-for/en-US.mdx -->

`Symbol`s are primitive values commonly used as collision-resistant object property keys and protocol hooks such as `Symbol.iterator`. Each call to `Symbol(description)` creates a distinct value, while `Symbol.for(key)` uses a shared registry. Symbol-keyed properties are skipped by `for...in`, `Object.keys()`, and JSON serialization, but they are not private: code can retrieve them with `Object.getOwnPropertySymbols()` or `Reflect.ownKeys()`.

```js live
let sym1 = Symbol();
let sym2 = Symbol('myKey');

console.log(typeof sym1); // "symbol"
console.log(sym1 === sym2); // false, because each symbol is unique

let obj = {};
let sym = Symbol('uniqueKey');

obj[sym] = 'value';
console.log(obj[sym]); // "value"
```

**Note**: The `Symbol()` function must be called without the `new` keyword. It is not exactly a constructor because it can only be called as a function instead of with `new Symbol()`.

<!-- Update here: /questions/what-are-symbols-used-for/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-symbols-used-for/en-US.mdx)

<br>

### What are proxies in JavaScript used for?

<!-- Update here: /questions/what-are-proxies-in-javascript-used-for/en-US.mdx -->

In JavaScript, a proxy is an object that acts as an intermediary between an object and the code. Proxies are used to intercept and customize the fundamental operations of JavaScript objects, such as property access, assignment, function invocation, and more.

Here's a basic example of using a `Proxy` to log every property access:

```js live
const myObject = {
  name: 'John',
  age: 42,
};

const handler = {
  get: function (target, prop, receiver) {
    console.log(`Someone accessed property "${prop}"`);
    return Reflect.get(target, prop, receiver);
  },
};

const proxiedObject = new Proxy(myObject, handler);

console.log(proxiedObject.name);
// Someone accessed property "name"
// 'John'

console.log(proxiedObject.age);
// Someone accessed property "age"
// 42
```

Use cases include:

- **Property access interception**: Intercept and customize property access on an object.
- **Property assignment validation**: Validate property values before they are set on the target object.
- **Logging and debugging**: Create wrappers for logging and debugging interactions with an object.
- **Creating reactive systems**: Trigger updates in other parts of your application when object properties change (data binding).
- **Data transformation**: Transform data being set or retrieved from an object.
- **Mocking and stubbing in tests**: Create mock or stub objects for testing purposes, allowing you to isolate dependencies and focus on the unit under test.
- **Function invocation interception**: Used to cache and return the result of frequently accessed methods if they involve network calls or computationally intensive logic, improving performance.
- **Dynamic property creation**: Useful for defining properties on the fly with default values and avoiding storing redundant data in objects.

<!-- Update here: /questions/what-are-proxies-in-javascript-used-for/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-proxies-in-javascript-used-for/en-US.mdx)

<br>

### Explain the concept of "hoisting" in JavaScript

<!-- Update here: /questions/explain-hoisting/en-US.mdx -->

"Hoisting" is informal shorthand for how JavaScript creates and initializes bindings while it instantiates a scope, before evaluating that scope's statements. The engine does not move source text.

- **Variable declarations (`var`)**: The binding is created and initialized to `undefined` before statements run. Its assignment still happens at the declaration's source location.
- **Variable declarations (`let` and `const`)**: The binding is created but remains uninitialized in the temporal dead zone (TDZ) until evaluation reaches the declaration. Accessing it earlier throws `ReferenceError`.
- **Function expressions (`var`)**: The `var` binding initially contains `undefined`; the function is created only when the expression is evaluated.
- **Function declarations (`function`)**: The binding is initialized with the function during scope setup, so it can be called before its declaration appears in source order.
- **Class declarations (`class`)**: The binding exists during scope setup but remains in the TDZ until the class declaration is evaluated.
- **Import declarations (`import`)**: Imported bindings are linked before module evaluation. Dependencies normally evaluate before the importing module's body, although cycles can expose an uninitialized binding.

The following behavior summarizes the result of accessing the variables before they are declared.

| Declaration                    | Accessing before declaration |
| ------------------------------ | ---------------------------- |
| `var foo`                      | `undefined`                  |
| `let foo`                      | `ReferenceError`             |
| `const foo`                    | `ReferenceError`             |
| `class Foo`                    | `ReferenceError`             |
| `var foo = function() { ... }` | `undefined`                  |
| `function foo() { ... }`       | Normal                       |
| `import`                       | Normal, except some cycles   |

<!-- Update here: /questions/explain-hoisting/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-hoisting/en-US.mdx)

<br>

### Explain the difference in hoisting between `var`, `let`, and `const`

<!-- Update here: /questions/explain-the-difference-in-hoisting-between-var-let-and-const/en-US.mdx -->

Before a scope's statements run, JavaScript creates its `var`, `let`, and `const` bindings; it does not move source text. A `var` binding is initialized to `undefined`, so it can be read before its declaration appears. A `let` or `const` binding remains uninitialized in the temporal dead zone (TDZ), so reading it before evaluation reaches the declaration throws `ReferenceError`. `const` also requires an initializer and cannot be reassigned.

<!-- Update here: /questions/explain-the-difference-in-hoisting-between-var-let-and-const/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-difference-in-hoisting-between-var-let-and-const/en-US.mdx)

<br>

### How does hoisting affect function declarations and expressions?

<!-- Update here: /questions/how-does-hoisting-affect-function-declarations-and-expressions/en-US.mdx -->

Function declarations are initialized when JavaScript instantiates their scope, so they can be called before their source declaration. Function expressions are created only when evaluation reaches the expression. Before then, a `var` binding contains `undefined` and calling it throws `TypeError`; a `let` or `const` binding is in the temporal dead zone and accessing it throws `ReferenceError`. "Hoisting" describes these binding rules; the engine does not move source text.

```js live
// Function declaration
console.log(foo()); // Works fine
function foo() {
  return 'Hello';
}

// Function expression
console.log(bar()); // Throws TypeError: bar is not a function
var bar = function () {
  return 'Hello';
};
```

<!-- Update here: /questions/how-does-hoisting-affect-function-declarations-and-expressions/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-does-hoisting-affect-function-declarations-and-expressions/en-US.mdx)

<br>

### What are the potential issues caused by hoisting?

<!-- Update here: /questions/what-are-the-potential-issues-caused-by-hoisting/en-US.mdx -->

JavaScript creates bindings before executing a scope's statements, but initializes different declaration forms differently. An early read of `var` produces `undefined`; an early read of `let`, `const`, or `class` throws because the binding is in the temporal dead zone; and function declarations are already callable. These differences—not literal source-code movement—can produce confusing bugs.

```js live
console.log(a); // undefined
var a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

<!-- Update here: /questions/what-are-the-potential-issues-caused-by-hoisting/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-potential-issues-caused-by-hoisting/en-US.mdx)

<br>

### How can you avoid problems related to hoisting?

<!-- Update here: /questions/how-can-you-avoid-problems-related-to-hoisting/en-US.mdx -->

Use `const` by default and `let` when reassignment is required, keep declarations close to their first use, and never read a binding before it is initialized. `let` and `const` are still hoisted—their bindings exist from the start of the block—but they remain in the temporal dead zone until evaluation reaches the declaration. Static-analysis rules such as `no-use-before-define` and `no-undef` catch the risky patterns.

```js live
// Use let or const
let x = 10;
const y = 20;
console.log(x, y); // Output: 10 20

// Declare functions before calling them
function myFunction() {
  console.log('Hello, world!');
}
myFunction(); // Output: 'Hello, world!'
```

<!-- Update here: /questions/how-can-you-avoid-problems-related-to-hoisting/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-can-you-avoid-problems-related-to-hoisting/en-US.mdx)

<br>

### What is the difference between `==` and `===` in JavaScript?

<!-- Update here: /questions/what-is-the-difference-between-double-equal-and-triple-equal/en-US.mdx -->

`==` is the abstract equality operator while `===` is the strict equality operator. `==` performs type coercion before comparing, following the Abstract Equality Comparison algorithm defined in the ECMAScript specification. `===` does not perform coercion and returns `false` whenever the operand types differ. `===` is generally preferred in application code because it eliminates a class of bugs caused by unexpected coercion. The most common exception is `x == null`, which checks for both `null` and `undefined` in a single comparison.

| Operator | `==` | `===` |
| --- | --- | --- |
| Name | Loose (abstract) equality operator | Strict equality operator |
| Type coercion | Yes — per the Abstract Equality Comparison algorithm | No |
| Comparison behavior | Types may be coerced before the value comparison | Types are compared first |

> **Don't confuse `=` with `==` and `===`.** `=` is the [assignment operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment) — it sets a variable's value (`x = 5`) and does not compare anything.

<!-- Update here: /questions/what-is-the-difference-between-double-equal-and-triple-equal/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-difference-between-double-equal-and-triple-equal/en-US.mdx)

<br>

### What language constructs do you use for iterating over object properties and array items in JavaScript?

<!-- Update here: /questions/what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items/en-US.mdx -->

There are multiple ways to iterate over object properties as well as arrays in JavaScript:

**`for...in` loop**

The `for...in` loop iterates over all enumerable properties of an object, including inherited enumerable properties. So it is important to have a check if you only want to iterate over the object's own properties.

```js live
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (const key in obj) {
  // To avoid iterating over inherited properties
  if (Object.hasOwn(obj, key)) {
    console.log(`${key}: ${obj[key]}`);
  }
}
```

**`Object.keys()`**

`Object.keys()` returns an array of the object's own enumerable property names. You can then use a `for...of` loop or `forEach` to iterate over this array.

```js live
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

Object.keys(obj).forEach((key) => {
  console.log(`${key}: ${obj[key]}`);
});
```

The most common ways to iterate over an array are using a `for` loop and the `Array.prototype.forEach` method.

**Using `for` loop**

```js live
let array = [1, 2, 3, 4, 5, 6];
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}
```

**Using `Array.prototype.forEach` method**

```js live
let array = [1, 2, 3, 4, 5, 6];
array.forEach((number, index) => {
  console.log(`${number} at index ${index}`);
});
```

**Using `for...of`**

This method is the newest and most convenient way to iterate over arrays. It automatically iterates over each element without requiring you to manage the index.

```js live
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
  console.log(number);
}
```

There are also other built-in methods available which are suitable for specific scenarios, for example:

- `Array.prototype.filter`: You can use the `filter` method to create a new array containing only the elements that satisfy a certain condition.
- `Array.prototype.map`: You can use the `map` method to create a new array based on the existing one, transforming each element with a provided function.
- `Array.prototype.reduce`: You can use the `reduce` method to combine all elements into a single value by repeatedly calling a function that takes two arguments: the accumulated value and the current element.

<!-- Update here: /questions/what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items/en-US.mdx)

<br>

### What is the purpose of the `break` and `continue` statements?

<!-- Update here: /questions/what-is-the-purpose-of-the-break-and-continue-statements/en-US.mdx -->

The `break` statement is used to exit a loop or switch statement prematurely, while the `continue` statement skips the current iteration of a loop and proceeds to the next iteration. For example, in a `for` loop, `break` will stop the loop entirely, and `continue` will skip to the next iteration.

```js live
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // exits the loop when i is 5
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i === 5) continue; // skips the iteration when i is 5
  console.log(i);
}
```

<!-- Update here: /questions/what-is-the-purpose-of-the-break-and-continue-statements/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-purpose-of-the-break-and-continue-statements/en-US.mdx)

<br>

### What is the ternary operator and how is it used?

<!-- Update here: /questions/what-is-the-ternary-operator-and-how-is-it-used/en-US.mdx -->

The ternary operator is a shorthand for an `if-else` statement in JavaScript. It takes three operands: a condition, a result for true, and a result for false. The syntax is `condition ? expr1 : expr2`. For example, `let result = (a > b) ? 'a is greater' : 'b is greater';` assigns `'a is greater'` to `result` if `a` is greater than `b`, otherwise it assigns `'b is greater'`.

<!-- Update here: /questions/what-is-the-ternary-operator-and-how-is-it-used/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-ternary-operator-and-how-is-it-used/en-US.mdx)

<br>

### How do you access the index of an element in an array during iteration?

<!-- Update here: /questions/how-do-you-access-the-index-of-an-element-in-an-array-during-iteration/en-US.mdx -->

To access the index of an element in an array during iteration, you can use methods like `forEach`, `map`, `for...of` with `entries`, or a traditional `for` loop. For example, using `forEach`:

```js live
const array = ['a', 'b', 'c'];
array.forEach((element, index) => {
  console.log(index, element);
});
```

<!-- Update here: /questions/how-do-you-access-the-index-of-an-element-in-an-array-during-iteration/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-access-the-index-of-an-element-in-an-array-during-iteration/en-US.mdx)

<br>

### What is the purpose of the `switch` statement?

<!-- Update here: /questions/what-is-the-purpose-of-the-switch-statement/en-US.mdx -->

The `switch` statement is used to execute one block of code among many based on the value of an expression. It is an alternative to using multiple `if...else if` statements. The `switch` statement evaluates an expression, matches the expression's value to a `case` label, and executes the associated block of code. If no `case` matches, the `default` block is executed.

```js
switch (expression) {
  case value1:
    // code to be executed if expression === value1
    break;
  case value2:
    // code to be executed if expression === value2
    break;
  default:
  // code to be executed if no case matches
}
```

<!-- Update here: /questions/what-is-the-purpose-of-the-switch-statement/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-purpose-of-the-switch-statement/en-US.mdx)

<br>

### What are rest parameters and how are they used?

<!-- Update here: /questions/what-are-rest-parameters-and-how-are-they-used/en-US.mdx -->

Rest parameters in JavaScript allow a function to accept an indefinite number of arguments as an array. They are denoted by three dots (`...`) followed by the name of the array. This feature is useful for functions that need to handle multiple arguments without knowing the exact number in advance.

```js live
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10
```

<!-- Update here: /questions/what-are-rest-parameters-and-how-are-they-used/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-rest-parameters-and-how-are-they-used/en-US.mdx)

<br>

### Explain the concept of the spread operator and its uses

<!-- Update here: /questions/explain-the-concept-of-the-spread-operator-and-its-uses/en-US.mdx -->

The spread operator (`...`) in JavaScript expands the elements of an iterable (like an array) into individual elements, and copies the own enumerable properties of an object into a new object. It is commonly used for copying arrays or objects, merging arrays or objects, and passing elements of an array as arguments to a function.

```js live
// Copying an array
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log(arr2); // Output: [1, 2, 3]

// Merging arrays
const arr3 = [4, 5, 6];
const mergedArray = [...arr1, ...arr3];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]

// Copying an object
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };
console.log(obj2); // Output: { a: 1, b: 2 }

// Merging objects
const obj3 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj3 };
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }

// Passing array elements as function arguments
const sum = (x, y, z) => x + y + z;
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Output: 6
```

<!-- Update here: /questions/explain-the-concept-of-the-spread-operator-and-its-uses/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-the-spread-operator-and-its-uses/en-US.mdx)

<br>

### What are the benefits of using spread syntax in JavaScript and how is it different from rest syntax?

<!-- Update here: /questions/what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax/en-US.mdx -->

**Spread syntax** (`...`) allows an iterable (like an array or string) to be expanded into individual elements. This is often used as a convenient and modern way to create new arrays or objects by combining existing ones.

| Operation      | Traditional                     | Spread                 |
| -------------- | ------------------------------- | ---------------------- |
| Array cloning  | `arr.slice()`                   | `[...arr]`             |
| Array merging  | `arr1.concat(arr2)`             | `[...arr1, ...arr2]`   |
| Object cloning | `Object.assign({}, obj)`        | `{ ...obj }`           |
| Object merging | `Object.assign({}, obj1, obj2)` | `{ ...obj1, ...obj2 }` |

**Rest syntax** is the opposite of what spread syntax does. It collects a variable number of arguments into an array. This is often used in function parameters to handle a dynamic number of arguments.

```js live
// Using rest syntax in a function
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
```

<!-- Update here: /questions/what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax/en-US.mdx)

<br>

### What are iterators and generators in JavaScript and what are they used for?

<!-- Update here: /questions/what-are-iterators-and-generators-and-what-are-they-used-for/en-US.mdx -->

In JavaScript, iterators and generators are tools for managing sequences of data and controlling the flow of execution in a more flexible way.

**Iterators** are objects that define a sequence and potentially a return value upon its termination. They adhere to a specific interface:

- An iterator object must implement a `next()` method.
- The `next()` method returns an object with two properties:
  - `value`: The next value in the sequence.
  - `done`: A boolean that is `true` if the iterator has finished its sequence, otherwise `false`.

Here's an example of an object implementing the iterator interface.

```js live
const iterator = {
  current: 0,
  last: 5,
  next() {
    if (this.current <= this.last) {
      return { value: this.current++, done: false };
    } else {
      return { value: undefined, done: true };
    }
  },
};

let result = iterator.next();
while (!result.done) {
  console.log(result.value); // Logs 0, 1, 2, 3, 4, 5
  result = iterator.next();
}
```

**Generators** are special functions that **can pause execution and resume at a later point**. They use the `function*` syntax and the `yield` keyword to control the flow of execution. When you call a generator function, it doesn't execute completely like a regular function. Instead, it returns an iterator object. Calling the `next()` method on the returned iterator advances the generator to the next `yield` statement, and the value after `yield` becomes the return value of `next()`.

```js live
function* numberGenerator() {
  let num = 0;
  while (num <= 5) {
    yield num++;
  }
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

Generators are useful for creating iterators on demand, especially for infinite sequences or complex iteration logic. They can be used for:

- Lazy evaluation – processing elements only when needed, improving memory efficiency for large datasets.
- Implementing iterators for custom data structures.
- Creating asynchronous iterators for handling data streams.

<!-- Update here: /questions/what-are-iterators-and-generators-and-what-are-they-used-for/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-iterators-and-generators-and-what-are-they-used-for/en-US.mdx)

<br>

### Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}` in JavaScript

<!-- Update here: /questions/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function/en-US.mdx -->

`function foo() {}` is a function declaration while `var foo = function() {}` is a function expression. The key difference is that function declarations have their bodies hoisted but the bodies of function expressions are not (they have the same hoisting behavior as `var`-declared variables).

If you try to invoke a function expression before it is declared, you will get an `Uncaught TypeError: XXX is not a function` error.

Function declarations can be called in the enclosing scope even before they are declared.

```js live
foo(); // 'FOOOOO'
function foo() {
  console.log('FOOOOO');
}
```

Function expressions if called before they are declared will result in an error.

```js live
foo(); // Uncaught TypeError: foo is not a function
var foo = function () {
  console.log('FOOOOO');
};
```

Another key difference is in the scope of the function name. Function expressions can be named by defining a name after the `function` keyword and before the parentheses. However, when using named function expressions, the function name is only accessible within the function itself. Trying to access it outside will result in a `ReferenceError`.

```js live
const myFunc = function namedFunc() {
  console.log(namedFunc); // Works
};

myFunc(); // Runs the function and logs the function reference
console.log(namedFunc); // ReferenceError: namedFunc is not defined
```

**Note**: The examples use `var` due to legacy reasons. Function expressions can be defined using `let` and `const`, and the key difference is in the hoisting behavior of those keywords.

<!-- Update here: /questions/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-differences-on-the-usage-of-foo-between-function-foo-and-var-foo-function/en-US.mdx)

<br>

### What is the difference between a parameter and an argument?

<!-- Update here: /questions/what-is-the-difference-between-a-parameter-and-an-argument/en-US.mdx -->

A parameter is a variable in the declaration of a function, while an argument is the actual value passed to the function when it is called. For example, in the function `function add(a, b) { return a + b; }`, `a` and `b` are parameters. When you call `add(2, 3)`, `2` and `3` are arguments.

<!-- Update here: /questions/what-is-the-difference-between-a-parameter-and-an-argument/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-difference-between-a-parameter-and-an-argument/en-US.mdx)

<br>

### Explain the concept of hoisting with regards to functions

<!-- Update here: /questions/explain-the-concept-of-hoisting-with-regards-to-functions/en-US.mdx -->

"Hoisting" describes the observable result of declarations being instantiated before a scope's statements execute; the engine does not move source text. A function declaration's binding is initialized with the function during scope setup, so it can be called earlier in that scope. A function or arrow expression is created only when evaluation reaches the expression. Its variable binding follows the rules for `var`, `let`, or `const`.

```js live
// Function declaration
hoistedFunction(); // Works fine
function hoistedFunction() {
  console.log('This function is hoisted');
}

// Function expression
nonHoistedFunction(); // Throws an error
var nonHoistedFunction = function () {
  console.log('This function is not hoisted');
};
```

<!-- Update here: /questions/explain-the-concept-of-hoisting-with-regards-to-functions/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-hoisting-with-regards-to-functions/en-US.mdx)

<br>

### What's the difference between `.call` and `.apply` in JavaScript?

<!-- Update here: /questions/whats-the-difference-between-call-and-apply/en-US.mdx -->

`.call` and `.apply` are both used to invoke functions with a specific `this` context and arguments. The primary difference lies in how they accept arguments:

- `.call(thisArg, arg1, arg2, ...)`: Takes arguments individually.
- `.apply(thisArg, [argsArray])`: Takes arguments as an array.

Assuming we have a function `add`, the function can be invoked using `.call` and `.apply` in the following manner:

```js live
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 1, 2)); // 3
console.log(add.apply(null, [1, 2])); // 3
```

<!-- Update here: /questions/whats-the-difference-between-call-and-apply/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/whats-the-difference-between-call-and-apply/en-US.mdx)

<br>

### Can you offer a use case for the new arrow => function syntax?

<!-- Update here: /questions/can-you-offer-a-use-case-for-the-new-arrow-function-syntax-how-does-this-new-syntax-differ-from-other-functions/en-US.mdx -->

Arrow functions provide concise syntax and capture `this` and `arguments` from their surrounding scope. They work well for array transformations and for callbacks created inside a method or constructor that need the surrounding receiver. An arrow used directly as an object method does **not** receive the object as `this`; use a regular method when the caller's receiver should determine `this`. Arrow functions also cannot be called with `new`, do not have a `prototype`, and cannot be generators.

```js live
const numbers = [1, 2, 3];
const doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6]
```

<!-- Update here: /questions/can-you-offer-a-use-case-for-the-new-arrow-function-syntax-how-does-this-new-syntax-differ-from-other-functions/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/can-you-offer-a-use-case-for-the-new-arrow-function-syntax-how-does-this-new-syntax-differ-from-other-functions/en-US.mdx)

<br>

### Difference between: `function Person(){}`, `const person = Person()`, and `const person = new Person()` in JavaScript?

<!-- Update here: /questions/difference-between-function-person-var-person-person-and-var-person-new-person/en-US.mdx -->

- `function Person(){}`: A function declaration in JavaScript. It can be used as a regular function or as a constructor.
- `const person = Person()`: Calls `Person` as a regular function, not a constructor. If `Person` is intended to be a constructor, this will lead to unexpected behavior.
- `const person = new Person()`: Creates a new instance of `Person`, correctly using the constructor function to initialize the new object.

| Aspect | `function Person(){}` | `const person = Person()` | `const person = new Person()` |
| --- | --- | --- | --- |
| Type | Function declaration | Function call | Constructor call |
| Usage | Defines a function | Invokes `Person` as a regular function | Creates a new instance of `Person` |
| Instance Creation | No instance created | No instance created | New instance created |
| Common Mistake | N/A | Misusing as constructor leading to `undefined` | None (when used correctly) |

<!-- Update here: /questions/difference-between-function-person-var-person-person-and-var-person-new-person/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/difference-between-function-person-var-person-person-and-var-person-new-person/en-US.mdx)

<br>

### What is the definition of a higher-order function in JavaScript?

<!-- Update here: /questions/what-is-the-definition-of-a-higher-order-function/en-US.mdx -->

A higher-order function is any function that takes one or more functions as arguments, which it uses to operate on some data, and/or returns a function as a result.

Higher-order functions are meant to abstract some operation that is performed repeatedly. The classic example of this is `Array.prototype.map()`, which takes an array and a function as arguments. `Array.prototype.map()` then uses this function to transform each item in the array, returning a new array with the transformed data. Other popular examples in JavaScript are `Array.prototype.forEach()`, `Array.prototype.filter()`, and `Array.prototype.reduce()`. A higher-order function doesn't just need to be manipulating arrays as there are many use cases for returning a function from another function. `Function.prototype.bind()` is an example that returns another function.

Imagine a scenario where we have an array of names that we need to transform to uppercase. The imperative way will be as such:

```js live
const names = ['irish', 'daisy', 'anna'];

function transformNamesToUppercase(names) {
  const results = [];
  for (let i = 0; i < names.length; i++) {
    results.push(names[i].toUpperCase());
  }
  return results;
}

console.log(transformNamesToUppercase(names)); // ['IRISH', 'DAISY', 'ANNA']
```

Using `Array.prototype.map(transformerFn)` makes the code shorter and more declarative.

```js live
const names = ['irish', 'daisy', 'anna'];

function transformNamesToUppercase(names) {
  return names.map((name) => name.toUpperCase());
}

console.log(transformNamesToUppercase(names)); // ['IRISH', 'DAISY', 'ANNA']
```

<!-- Update here: /questions/what-is-the-definition-of-a-higher-order-function/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-definition-of-a-higher-order-function/en-US.mdx)

<br>

### What are callback functions and how are they used?

<!-- Update here: /questions/what-are-callback-functions-and-how-are-they-used/en-US.mdx -->

A callback is a function supplied to other code to be invoked according to that API's contract. Some callbacks run synchronously, such as an `Array.prototype.map()` callback; others run later, such as timer, event, or I/O callbacks. Passing a callback does not by itself make an operation asynchronous.

```js live
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John Doe' };
    callback(null, data);
  }, 0);
}

function handleData(error, data) {
  if (error) throw error;
  console.log(data);
}

fetchData(handleData);
```

<!-- Update here: /questions/what-are-callback-functions-and-how-are-they-used/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-callback-functions-and-how-are-they-used/en-US.mdx)

<br>

### What's a typical use case for anonymous functions in JavaScript?

<!-- Update here: /questions/whats-a-typical-use-case-for-anonymous-functions/en-US.mdx -->

An anonymous function in JavaScript is a function that does not have any name associated with it. They are typically used as arguments to other functions or assigned to variables.

```js live
const arr = [-1, 0, 5, 6];

// The filter method is passed an anonymous function.
arr.filter((x) => x > 1); // [5, 6]
```

They are often used as arguments to other functions, known as higher-order functions, which can take functions as input and return a function as output. Anonymous functions can access variables from the outer scope, a concept known as closures, allowing them to "close over" and remember the environment in which they were created.

```js live
// Encapsulating Code
(function () {
  // Some code here.
})();

// Callbacks
setTimeout(function () {
  console.log('Hello world!');
}, 1000);

// Functional programming constructs
const arr = [1, 2, 3];
const double = arr.map(function (el) {
  return el * 2;
});
console.log(double); // [2, 4, 6]
```

<!-- Update here: /questions/whats-a-typical-use-case-for-anonymous-functions/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/whats-a-typical-use-case-for-anonymous-functions/en-US.mdx)

<br>

### What is recursion and how is it used in JavaScript?

<!-- Update here: /questions/what-is-recursion-and-how-is-it-used-in-javascript/en-US.mdx -->

Recursion solves a problem by calling the same function on smaller inputs until a base case is reached. It naturally fits recursive structures such as trees and divide-and-conquer algorithms, but each ordinary call consumes stack space. Validate that the input moves toward the base case, and use an explicit stack or loop when depth can be large or user-controlled.

```js live
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    throw new RangeError('n must be a non-negative integer');
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(4)); // Output: 24
```

<!-- Update here: /questions/what-is-recursion-and-how-is-it-used-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-recursion-and-how-is-it-used-in-javascript/en-US.mdx)

<br>

### What are default parameters and how are they used?

<!-- Update here: /questions/what-are-default-parameters-and-how-are-they-used/en-US.mdx -->

Default parameters supply a value when an argument is omitted or explicitly `undefined`; they do not apply to `null`, `0`, `false`, or `''`. The expression is evaluated at call time, so it can use earlier parameters and create a fresh object per call. Use defaults for genuine optional arguments, but validate values separately when `null` or another sentinel is invalid.

```js live
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet('Alice'); // Output: Hello, Alice!
```

<!-- Update here: /questions/what-are-default-parameters-and-how-are-they-used/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-default-parameters-and-how-are-they-used/en-US.mdx)

<br>

### Explain why the following doesn't work as an IIFE: `function foo(){}();`. What needs to be changed to properly make it an IIFE?

<!-- Update here: /questions/explain-why-the-following-doesnt-work-as-an-iife-function-foo--what-needs-to-be-changed-to-properly-make-it-an-iife/en-US.mdx -->

The code `function foo(){}();` doesn't work as an Immediately Invoked Function Expression (IIFE) because the JavaScript parser treats `function foo(){}` as a function declaration, not an expression. To make it an IIFE, you need to wrap the function in parentheses to turn it into a function expression: `(function foo(){})();`.

<!-- Update here: /questions/explain-why-the-following-doesnt-work-as-an-iife-function-foo--what-needs-to-be-changed-to-properly-make-it-an-iife/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-why-the-following-doesnt-work-as-an-iife-function-foo--what-needs-to-be-changed-to-properly-make-it-an-iife/en-US.mdx)

<br>

### What are the various ways to create objects in JavaScript?

<!-- Update here: /questions/what-are-the-various-ways-to-create-objects-in-javascript/en-US.mdx -->

Creating objects in JavaScript offers several methods:

- **Object literals (`{}`)**: Simplest and most popular approach. Define key-value pairs within curly braces.
- **`Object()` constructor**: Use `new Object()` with dot notation to add properties.
- **`Object.create()`**: Create new objects using existing objects as prototypes, inheriting properties and methods.
- **Constructor functions**: Define blueprints for objects using functions, creating instances with `new`.
- **ES2015 classes**: Structured syntax similar to other languages, using `class` and `constructor` keywords.

<!-- Update here: /questions/what-are-the-various-ways-to-create-objects-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-various-ways-to-create-objects-in-javascript/en-US.mdx)

<br>

### Explain the difference between dot notation and bracket notation for accessing object properties

<!-- Update here: /questions/explain-the-difference-between-dot-notation-and-bracket-notation-for-accessing-object-properties/en-US.mdx -->

Dot notation and bracket notation are two ways to access properties of an object in JavaScript. Dot notation is more concise and readable but can only be used with valid JavaScript identifiers. Bracket notation is more flexible and can be used with property names that are not valid identifiers, such as those containing spaces or special characters.

```js live
const obj = { name: 'Alice', 'favorite color': 'blue' };

// Dot notation
console.log(obj.name); // Alice

// Bracket notation
console.log(obj['favorite color']); // blue
```

<!-- Update here: /questions/explain-the-difference-between-dot-notation-and-bracket-notation-for-accessing-object-properties/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-difference-between-dot-notation-and-bracket-notation-for-accessing-object-properties/en-US.mdx)

<br>

### What are the different methods for iterating over an array?

<!-- Update here: /questions/what-are-the-different-methods-for-iterating-over-an-array/en-US.mdx -->

Choose an iteration construct by the result and control flow you need: `map()` transforms into a new array, `filter()` selects, `reduce()` combines, `some()` / `every()` answer conditions, and `find()` locates one item. Use `for...of` or an indexed `for` loop when you need `break`, `continue`, sequential `await`, or precise index control. Use `forEach()` for synchronous side effects only; it ignores returned Promises and cannot be stopped early.

<!-- Update here: /questions/what-are-the-different-methods-for-iterating-over-an-array/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-different-methods-for-iterating-over-an-array/en-US.mdx)

<br>

### How do you add, remove, and update elements in an array?

<!-- Update here: /questions/how-do-you-add-remove-and-update-elements-in-an-array/en-US.mdx -->

For in-place changes, use `push()` / `unshift()` to add, `pop()` / `shift()` to remove at the ends, `splice()` for arbitrary ranges, and index assignment to update. These mutate the original array. When callers rely on immutable updates, create a new array with spread, `slice()`, `filter()`, `map()`, `toSpliced()`, or `with()` instead. Choose based on ownership, not a universal performance rule.

```js live
let arr = [1, 2, 3];

// Add elements
arr.push(4); // [1, 2, 3, 4]
arr.unshift(0); // [0, 1, 2, 3, 4]
arr.splice(2, 0, 1.5); // [0, 1, 1.5, 2, 3, 4]

// Remove elements
arr.pop(); // [0, 1, 1.5, 2, 3]
arr.shift(); // [1, 1.5, 2, 3]
arr.splice(1, 1); // [1, 2, 3]

// Update elements
arr[1] = 5; // [1, 5, 3]
console.log(arr); // Final state: [1, 5, 3]
```

**Note**: If you try to `console.log(arr)` after each operation in some environments (like Chrome DevTools), you may only see the final state of `arr`. This happens because the console sometimes keeps a live reference to the array instead of logging its state at the exact moment. To see intermediate states properly, store snapshots using `console.log([...arr])` or print values immediately after each operation.

<!-- Update here: /questions/how-do-you-add-remove-and-update-elements-in-an-array/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-add-remove-and-update-elements-in-an-array/en-US.mdx)

<br>

### What are the different ways to copy an object or an array?

<!-- Update here: /questions/what-are-the-different-ways-to-copy-an-object-or-an-array/en-US.mdx -->

Use spread syntax or `Object.assign()` for a shallow copy. Use `structuredClone()` for values supported by the structured clone algorithm, including nested arrays and objects, cycles, `Map`, `Set`, and many built-in types. A JSON stringify/parse round trip is only a lossy conversion for JSON-shaped data, not a general deep-clone algorithm. A library or domain-specific copy routine may be needed for custom classes and semantics.

```js live
// Shallow copy of an array
const originalArray = [1, 2, 3];
const shallowCopyArray = [...originalArray];
console.log(shallowCopyArray); // [1, 2, 3]

// Shallow copy of an object
const originalObject = { a: 1, b: 2 };
const shallowCopyObject = { ...originalObject };
console.log(shallowCopyObject); // { a: 1, b: 2 }

// Deep copy using JSON methods
const deepCopyObject = JSON.parse(JSON.stringify(originalObject));
console.log(deepCopyObject); // { a: 1, b: 2 }
```

<!-- Update here: /questions/what-are-the-different-ways-to-copy-an-object-or-an-array/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-different-ways-to-copy-an-object-or-an-array/en-US.mdx)

<br>

### Explain the difference between shallow copy and deep copy

<!-- Update here: /questions/explain-the-difference-between-shallow-copy-and-deep-copy/en-US.mdx -->

A shallow copy duplicates the top-level properties of an object, but nested objects are still referenced. A deep copy duplicates all levels of an object, creating entirely new instances of nested objects. `Object.assign()` and the spread operator (`...`) create shallow copies. `structuredClone()` is the modern built-in for deep copies. `JSON.parse(JSON.stringify())` and Lodash's `_.cloneDeep` are other common approaches, each with different tradeoffs around which values they can faithfully clone.

```js live
// Shallow copy — nested object is shared
let obj1 = { a: 1, b: { c: 2 } };
let shallowCopy = { ...obj1 };
shallowCopy.b.c = 3;
console.log(obj1.b.c); // 3 — original mutated too

// Deep copy — fully independent
let obj2 = { a: 1, b: { c: 2 } };
let deepCopy = structuredClone(obj2);
deepCopy.b.c = 4;
console.log(obj2.b.c); // 2 — original unchanged
```

<!-- Update here: /questions/explain-the-difference-between-shallow-copy-and-deep-copy/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-difference-between-shallow-copy-and-deep-copy/en-US.mdx)

<br>

### What are the advantages of using the spread operator with arrays and objects?

<!-- Update here: /questions/what-are-the-advantages-of-using-the-spread-operator-with-arrays-and-objects/en-US.mdx -->

The spread operator (`...`) in JavaScript allows you to easily copy arrays and objects, merge them, and add new elements or properties. It simplifies syntax and improves readability. For arrays, it can be used to concatenate or clone arrays. For objects, it can be used to merge objects or add new properties.

```js live
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

// Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // { a: 1, b: 2, c: 3 }
```

<!-- Update here: /questions/what-are-the-advantages-of-using-the-spread-operator-with-arrays-and-objects/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-advantages-of-using-the-spread-operator-with-arrays-and-objects/en-US.mdx)

<br>

### How do you check if an object has a specific property?

<!-- Update here: /questions/how-do-you-check-if-an-object-has-a-specific-property/en-US.mdx -->

Use the `in` operator when inherited properties should count, and `Object.hasOwn()` when only the object's own properties should count. Avoid calling `obj.hasOwnProperty()` directly because the object can shadow that method or have a null prototype.

```js live
const obj = { key: 'value' };

// Using the `in` operator
if ('key' in obj) {
  console.log('Property exists');
}

// Checking only own properties
if (Object.hasOwn(obj, 'key')) {
  console.log('Property exists');
}
```

<!-- Update here: /questions/how-do-you-check-if-an-object-has-a-specific-property/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-check-if-an-object-has-a-specific-property/en-US.mdx)

<br>

### Explain the difference between mutable and immutable objects in JavaScript

<!-- Update here: /questions/explain-the-difference-between-mutable-and-immutable-objects/en-US.mdx -->

**Mutable objects** allow for modification of properties and values after creation, which is the default behavior for most objects.

```js live
const mutableObject = {
  name: 'John',
  age: 30,
};

// Modify the object
mutableObject.name = 'Jane';

// The object has been modified
console.log(mutableObject); // Output: { name: 'Jane', age: 30 }
```

**Immutable values** cannot be changed after creation. JavaScript objects and arrays are mutable by default; an application can enforce shallow immutability with `Object.freeze()` or follow an immutable-update convention that creates a new object instead of mutating the existing one.

```js live
const immutableObject = Object.freeze({
  name: 'John',
  age: 30,
});

// Attempt to modify the object
immutableObject.name = 'Jane';

// The object remains unchanged
console.log(immutableObject); // Output: { name: 'John', age: 30 }
```

`Object.freeze()` is shallow, so nested objects remain mutable unless they are frozen separately. Failed writes throw in strict mode and otherwise usually fail silently.

<!-- Update here: /questions/explain-the-difference-between-mutable-and-immutable-objects/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-difference-between-mutable-and-immutable-objects/en-US.mdx)

<br>

### Explain the concept of destructuring assignment for objects and arrays

<!-- Update here: /questions/explain-the-concept-of-destructuring-assignment-for-objects-and-arrays/en-US.mdx -->

Destructuring assignment is a syntax in JavaScript that allows you to unpack values from arrays or properties from objects into distinct variables. For arrays, you use square brackets, and for objects, you use curly braces. For example:

```js live
// Array destructuring
const [a, b] = [1, 2];

// Object destructuring
const { name, age } = { name: 'John', age: 30 };
```

<!-- Update here: /questions/explain-the-concept-of-destructuring-assignment-for-objects-and-arrays/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-destructuring-assignment-for-objects-and-arrays/en-US.mdx)

<br>

### What is `Object.freeze()` for?

<!-- Update here: /questions/what-is-objectfreeze-for/en-US.mdx -->

`Object.freeze()` makes an object non-extensible and changes its own properties so they cannot be removed or reconfigured; data properties also become non-writable. This is a shallow operation: nested objects and internal state such as a `Map`'s entries can still change. Invalid writes throw in strict mode and otherwise usually fail silently.

```js live
const obj = { name: 'John' };
Object.freeze(obj);
obj.name = 'Doe'; // This will not change the name property

console.log(obj); // { name: 'John' }
```

<!-- Update here: /questions/what-is-objectfreeze-for/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-objectfreeze-for/en-US.mdx)

<br>

### What is `Object.seal()` for?

<!-- Update here: /questions/what-is-objectseal-for/en-US.mdx -->

`Object.seal()` prevents extensions and makes every existing own property non-configurable. Existing data-property values can still change when their descriptors are writable. The operation is shallow: nested objects are unaffected. Invalid additions and deletions throw in strict mode and may fail silently otherwise. Sealing is useful for catching accidental shape changes, not for enforcing authorization or protecting secrets.

```js live
// 'use strict'

const obj = { name: 'John' };
Object.seal(obj);

obj.name = 'Jane'; // Allowed
obj.age = 30; // Not allowed, throws an error in strict mode
delete obj.name; // Not allowed, throws an error in strict mode

console.log(obj); // { name: 'Jane' } (age was not added, name was not deleted)
```

<!-- Update here: /questions/what-is-objectseal-for/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-objectseal-for/en-US.mdx)

<br>

### What is `Object.preventExtensions()` for?

<!-- Update here: /questions/what-is-objectpreventextensions-for/en-US.mdx -->

`Object.preventExtensions(object)` makes that object non-extensible: new own properties cannot be added and its prototype cannot be changed, while existing properties may still be changed or deleted according to their descriptors. The operation is shallow and irreversible for that object. In strict mode, invalid additions throw; otherwise ordinary assignment may fail silently.

```js live
const obj = { name: 'John' };
Object.preventExtensions(obj);

obj.age = 30; // This will not work, as the object is not extensible
console.log(obj.age); // undefined
```

<!-- Update here: /questions/what-is-objectpreventextensions-for/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-objectpreventextensions-for/en-US.mdx)

<br>

### What are JavaScript object getters and setters for?

<!-- Update here: /questions/what-are-javascript-object-getters-and-setters-for/en-US.mdx -->

JavaScript object getters and setters are used to control access to an object's properties. They provide a way to encapsulate the implementation details of a property and define custom behavior when getting or setting its value.

Getters and setters are defined using the `get` and `set` keywords, respectively, followed by a function that is executed when the property is accessed or assigned a new value.

Here's a code example demonstrating the use of getters and setters:

```js live
const person = {
  _name: 'John Doe', // Underscore is a naming convention, not privacy

  get name() {
    // Getter
    return this._name;
  },
  set name(newName) {
    // Setter
    if (newName.trim().length > 0) {
      this._name = newName;
    } else {
      console.log('Invalid name');
    }
  },
};

// Accessing the name property using the getter
console.log(person.name); // Output: 'John Doe'

// Setting the name property using the setter
person.name = 'Jane Smith'; // Setter is called
console.log(person.name); // Output: 'Jane Smith'

person.name = ''; // Setter is called, but the value is not set due to validation
console.log(person.name); // Output: 'Jane Smith'
```

<!-- Update here: /questions/what-are-javascript-object-getters-and-setters-for/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-javascript-object-getters-and-setters-for/en-US.mdx)

<br>

### What are JavaScript object property flags and descriptors?

<!-- Update here: /questions/what-are-javascript-object-property-flags-and-descriptors/en-US.mdx -->

In JavaScript, property flags and descriptors manage the behavior and attributes of object properties.

**Property flags**

Property flags are used to specify the behavior of a property on an object. Here are the available flags:

- `writable`: Specifies whether the property can be written to.
- `enumerable`: Specifies whether the property is enumerable.
- `configurable`: Controls whether the property can be deleted and whether most parts of its descriptor can be reconfigured.

**Property descriptors**

These provide detailed information about an object's property, including its value and flags. They are retrieved using `Object.getOwnPropertyDescriptor()` and set using `Object.defineProperty()`.

The use cases of property descriptors are as follows:

- Making a property non-writable by setting `writable: false` to ensure data consistency.
- Hiding a property from enumeration by setting `enumerable: false`.
- Preventing property deletion and most descriptor changes by setting `configurable: false`. A writable data property's value can still change, and `writable` can still change from `true` to `false`.
- Applying descriptor restrictions to every existing own property with `Object.seal()` or `Object.freeze()`. Both are shallow, and sealing still permits writes to writable data properties.

<!-- Update here: /questions/what-are-javascript-object-property-flags-and-descriptors/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-javascript-object-property-flags-and-descriptors/en-US.mdx)

<br>

### How do you reliably determine whether an object is empty?

<!-- Update here: /questions/how-do-you-reliably-determine-whether-an-object-is-empty/en-US.mdx -->

First define what “empty” means. For the common case “no own enumerable string-keyed properties,” use `Object.keys(obj).length === 0`. If symbol or non-enumerable own keys should count, use `Reflect.ownKeys(obj).length === 0`. Validate the input separately if `null`, primitives, arrays, maps, or sets are not valid inputs.

```js live
const isEmpty = (obj) => Object.keys(obj).length === 0;

const obj = {};
console.log(isEmpty(obj)); // true
```

<!-- Update here: /questions/how-do-you-reliably-determine-whether-an-object-is-empty/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-reliably-determine-whether-an-object-is-empty/en-US.mdx)

<br>

### What is the event loop in JavaScript runtimes?

<!-- Update here: /questions/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue/en-US.mdx -->

The event loop is the host runtime's scheduling mechanism for coordinating JavaScript jobs, asynchronous operations, and—in browsers—rendering. A simplified browser turn works like this:

1. The host runs one task, such as initial script evaluation, a timer callback, or an input-event callback. Function calls made by that task use the JavaScript agent's call stack.
2. Timers, networking, and other host APIs continue outside the currently executing JavaScript stack. When work becomes ready, the host queues a task or settles a promise, which queues its reactions as microtasks.
3. After the current task finishes and its stack is empty, the runtime performs a microtask checkpoint. It drains promise reactions, `queueMicrotask()` callbacks, and other microtasks, including microtasks added while the checkpoint is running.
4. The browser may update rendering, then the host selects one eligible task and runs it. After that task, it performs another microtask checkpoint; it does not drain every task queue in one pass.
5. These turns continue for the lifetime of the event loop. An unbounded microtask chain can delay later tasks and rendering.

<!-- Update here: /questions/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-event-loop-what-is-the-difference-between-call-stack-and-task-queue/en-US.mdx)

<br>

### Explain the difference between synchronous and asynchronous functions in JavaScript

<!-- Update here: /questions/explain-the-difference-between-synchronous-and-asynchronous-functions/en-US.mdx -->

Synchronous code runs to completion on the current call stack before later statements can run. Asynchronous APIs arrange for a result to be handled later through a callback, promise, or event, allowing the current stack to finish while the host waits for I/O or a timer. Asynchronous does not mean “runs on another thread”: an `async` function runs synchronously until its first suspension point, and CPU-heavy JavaScript still blocks its thread.

```js live
function sum(a, b) {
  console.log('Inside sum function');
  return a + b;
}

const result = sum(2, 3); // The program waits for sum() to complete before assigning the result
console.log('Result: ', result); // Output: 5
```

Asynchronous APIs commonly expose callbacks, promises, or events. Once the operation can make progress, its continuation is scheduled according to the host's event loop. This works especially well for I/O such as network and database requests; CPU-intensive work must instead be split up or moved to a worker to keep a browser UI responsive.

```js live
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data); // Calling the callback function with data
  }, 2000); // Simulating a 2-second delay
}

console.log('Fetching data...');

fetchData((data) => {
  console.log(data); // Output: { name: 'John', age: 30 } (after 2 seconds)
});

console.log('Call made to fetch data'); // This will print before the data is fetched
```

<!-- Update here: /questions/explain-the-difference-between-synchronous-and-asynchronous-functions/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-difference-between-synchronous-and-asynchronous-functions/en-US.mdx)

<br>

### Explain the concept of a callback function in asynchronous operations

<!-- Update here: /questions/explain-the-concept-of-a-callback-function-in-asynchronous-operations/en-US.mdx -->

A callback is a function passed to another API to invoke later or during its operation. In asynchronous APIs, the contract must define when and how often it runs, how errors are reported, and how to cancel or unsubscribe. Scheduling a callback lets the current stack continue, but the callback's own JavaScript still occupies the thread when it eventually runs.

```js live
function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

<!-- Update here: /questions/explain-the-concept-of-a-callback-function-in-asynchronous-operations/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-a-callback-function-in-asynchronous-operations/en-US.mdx)

<br>

### What are Promises and how do they work?

<!-- Update here: /questions/what-are-promises-and-how-do-they-work/en-US.mdx -->

Promises represent the eventual outcome of an asynchronous operation. They start pending and settle once as fulfilled with a value or rejected with a reason. `.then()`, `.catch()`, and `.finally()` return new Promises, so returned values and thrown errors flow through a chain. Reactions run as microtasks even when the original Promise is already settled.

A Promise coordinates an outcome; it does not automatically start work on another thread or cancel the underlying operation. Expose an `AbortSignal` or another explicit cancellation mechanism when work can be stopped.

```js live
let promise = new Promise((resolve, reject) => {
  // asynchronous operation
  const success = true;
  if (success) {
    resolve('Success!');
  } else {
    reject(new Error('Operation failed'));
  }
});

promise
  .then((result) => {
    console.log(result); // 'Success!' (this will print)
  })
  .catch((error) => {
    console.error(error); // 'Error!'
  });
```

<!-- Update here: /questions/what-are-promises-and-how-do-they-work/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-promises-and-how-do-they-work/en-US.mdx)

<br>

### Explain the different states of a Promise

<!-- Update here: /questions/explain-the-different-states-of-a-promise/en-US.mdx -->

A Promise has three mutually exclusive states:

- **Pending**: It has not fulfilled or rejected yet.
- **Fulfilled**: It completed with a value.
- **Rejected**: It completed with a reason, conventionally an `Error`.

Fulfilled and rejected Promises are **settled**. Once settled, a Promise cannot change state; later attempts to fulfill or reject it are ignored. “Resolved” is not always synonymous with “fulfilled”: a Promise can be resolved to another still-pending Promise and adopt its eventual state.

<!-- Update here: /questions/explain-the-different-states-of-a-promise/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-different-states-of-a-promise/en-US.mdx)

<br>

### What are the pros and cons of using Promises instead of callbacks in JavaScript?

<!-- Update here: /questions/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks/en-US.mdx -->

Promises standardize one eventual outcome and make sequential, parallel, and error flows composable with `.then()`, `async`/`await`, and combinators such as `Promise.all()`. They avoid many callback-contract ambiguities, but they do not cancel work, represent repeated events, or guarantee settlement. A Promise chain can still become unreadable or leak an unhandled rejection when callers forget to return or await it.

<!-- Update here: /questions/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks/en-US.mdx)

<br>

### What is the use of `Promise.all()`

<!-- Update here: /questions/what-is-the-use-of-promiseall/en-US.mdx -->

`Promise.all()` accepts an iterable of promises or values and returns a promise fulfilled with results in input order once every input fulfills. It rejects as soon as an input rejects. It does not start the operations or cancel the remaining work; create the promises first, and use `AbortController` or an operation-specific mechanism when cancellation is required.

```js live
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, 'foo']
});
```

<!-- Update here: /questions/what-is-the-use-of-promiseall/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-use-of-promiseall/en-US.mdx)

<br>

### How is `Promise.all()` different from `Promise.allSettled()`?

<!-- Update here: /questions/how-is-promiseall-different-from-promiseallsettled/en-US.mdx -->

`Promise.all()` and `Promise.allSettled()` are both methods for handling multiple promises in JavaScript, but they behave differently. `Promise.all()` waits for all promises to resolve and fails fast if any promise rejects, returning a single rejected promise. `Promise.allSettled()`, on the other hand, waits for all promises to settle (either resolve or reject) and returns an array of objects describing the outcome of each promise.

<!-- Update here: /questions/how-is-promiseall-different-from-promiseallsettled/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-is-promiseall-different-from-promiseallsettled/en-US.mdx)

<br>

### What is async/await and how does it simplify asynchronous code?

<!-- Update here: /questions/what-is-asyncawait-and-how-does-it-simplify-asynchronous-code/en-US.mdx -->

`async/await` is a modern syntax in JavaScript that simplifies working with promises. By using the `async` keyword before a function, you can use the `await` keyword inside that function to pause execution until a promise is resolved. This makes asynchronous code look and behave more like synchronous code, making it easier to read and maintain.

```js live
async function fetchData() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
fetchData();
```

<!-- Update here: /questions/what-is-asyncawait-and-how-does-it-simplify-asynchronous-code/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-asyncawait-and-how-does-it-simplify-asynchronous-code/en-US.mdx)

<br>

### How do you handle errors in asynchronous operations?

<!-- Update here: /questions/how-do-you-handle-errors-in-asynchronous-operations/en-US.mdx -->

Handle promise rejections with `try...catch` around `await` or with `.catch()` on a promise chain. Remember that Fetch fulfills its promise for HTTP errors such as 404 and 500, so check `response.ok` and throw an application error yourself.

```js live
async function fetchData() {
  try {
    // This request will fail (example domain)
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData(); // Error fetching data: ....
```

With Promises, you can use the `.catch()` method:

```js live
fetch('https://api.example.com/data') // This request will fail (example domain)
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Error fetching data:', error));
```

<!-- Update here: /questions/how-do-you-handle-errors-in-asynchronous-operations/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-handle-errors-in-asynchronous-operations/en-US.mdx)

<br>

### Explain the concept of a microtask queue

<!-- Update here: /questions/explain-the-concept-of-a-microtask-queue/en-US.mdx -->

The microtask queue holds callbacks such as promise reactions, `queueMicrotask()` callbacks, and `MutationObserver` notifications. At a microtask checkpoint—normally after the current task or callback finishes and the JavaScript stack is empty—the runtime drains the queue before it may render and select another task. Microtasks queued by other microtasks are drained in the same checkpoint, so recursively adding them can starve rendering and other work.

<!-- Update here: /questions/explain-the-concept-of-a-microtask-queue/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-a-microtask-queue/en-US.mdx)

<br>

### What is the difference between `setTimeout()`, `setImmediate()`, and `process.nextTick()`?

<!-- Update here: /questions/what-is-the-difference-between-settimeout-setimmediate-and-processnexttick/en-US.mdx -->

In Node.js, `setTimeout()` schedules a timer callback after a minimum delay, `setImmediate()` schedules a callback for the event loop's check phase after I/O callbacks, and `process.nextTick()` queues work to be drained after the current JavaScript operation before the event loop continues. Node now marks `process.nextTick()` as legacy and recommends `queueMicrotask()` for most userland deferral.

```js
setTimeout(() => console.log('setTimeout'), 0);
setImmediate(() => console.log('setImmediate'));
process.nextTick(() => console.log('nextTick'));
```

In this example, `process.nextTick()` will execute first, followed by either `setTimeout()` or `setImmediate()` depending on the environment.

<!-- Update here: /questions/what-is-the-difference-between-settimeout-setimmediate-and-processnexttick/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-difference-between-settimeout-setimmediate-and-processnexttick/en-US.mdx)

<br>

### Explain how prototypal inheritance works in JavaScript

<!-- Update here: /questions/explain-how-prototypal-inheritance-works/en-US.mdx -->

Prototypal inheritance is property lookup by delegation. An object's internal `[[Prototype]]` is another object or `null`; when an own property is missing, lookup continues along that chain. Inspect it with `Object.getPrototypeOf()` and create a deliberate link with `Object.create()` or `class` / `extends`. Avoid the legacy `__proto__` accessor in application code, and avoid changing prototypes of existing objects in hot code because it can invalidate engine optimizations.

When a property is accessed on an object and if the property is not found on that object, the JavaScript engine looks at the object's `__proto__`, and the `__proto__`'s `__proto__` and so on, until it finds the property defined on one of the `__proto__`s or until it reaches the end of the prototype chain.

This behavior simulates classical inheritance, but it is really more of [delegation than inheritance](https://davidwalsh.name/javascript-objects).

Here's an example of prototypal inheritance:

```js live
// Parent object constructor.
function Animal(name) {
  this.name = name;
}

// Add a method to the parent object's prototype.
Animal.prototype.makeSound = function () {
  console.log('The ' + this.constructor.name + ' makes a sound.');
};

// Child object constructor.
function Dog(name) {
  Animal.call(this, name); // Call the parent constructor.
}

// Set the child object's prototype to be the parent's prototype.
Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Add a method to the child object's prototype.
Dog.prototype.bark = function () {
  console.log('Woof!');
};

// Create a new instance of Dog.
const bolt = new Dog('Bolt');

// Call methods on the child object.
console.log(bolt.name); // "Bolt"
bolt.makeSound(); // "The Dog makes a sound."
bolt.bark(); // "Woof!"
```

Things to note are:

- `.makeSound` is not defined on `Dog`, so the JavaScript engine goes up the prototype chain and finds `.makeSound` on the inherited `Animal`.
- In modern code, `class` and `extends` are the preferred way to set up inheritance; they are syntactic sugar over this prototype mechanism.

<!-- Update here: /questions/explain-how-prototypal-inheritance-works/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-how-prototypal-inheritance-works/en-US.mdx)

<br>

### What is the prototype chain and how does it work?

<!-- Update here: /questions/what-is-the-prototype-chain-and-how-does-it-work/en-US.mdx -->

The prototype chain is a mechanism in JavaScript that allows objects to inherit properties and methods from other objects. When you try to access a property on an object, JavaScript will first look for the property on the object itself. If it doesn't find it, it will look at the object's prototype, and then the prototype's prototype, and so on, until it either finds the property or reaches the end of the chain, which is `null`.

```js live
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const alice = new Person('Alice');
alice.greet(); // "Hello, my name is Alice"
```

In this example, `alice` inherits the `greet` method from `Person.prototype`.

<!-- Update here: /questions/what-is-the-prototype-chain-and-how-does-it-work/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-prototype-chain-and-how-does-it-work/en-US.mdx)

<br>

### Explain the difference between classical inheritance and prototypal inheritance

<!-- Update here: /questions/explain-the-difference-between-classical-inheritance-and-prototypal-inheritance/en-US.mdx -->

Classical inheritance is a model where classes inherit from other classes, typically seen in languages like Java and C++. Prototypal inheritance, used in JavaScript, involves objects inheriting directly from other objects. In classical inheritance, you define a class and create instances from it. In prototypal inheritance, you create an object and use it as a prototype for other objects.

<!-- Update here: /questions/explain-the-difference-between-classical-inheritance-and-prototypal-inheritance/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-difference-between-classical-inheritance-and-prototypal-inheritance/en-US.mdx)

<br>

### Explain the concept of inheritance in ES2015 classes

<!-- Update here: /questions/explain-the-concept-of-inheritance-in-es2015-classes/en-US.mdx -->

JavaScript `class` inheritance uses `extends` to link constructor and prototype chains. A derived constructor must call `super()` before accessing `this`, and `super.method()` invokes parent behavior. Use inheritance when the child is genuinely substitutable for the parent and the contract is stable. Prefer composition for optional capabilities or when subclasses would need to override many unrelated methods.

```js live
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Rex barks.
```

<!-- Update here: /questions/explain-the-concept-of-inheritance-in-es2015-classes/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-inheritance-in-es2015-classes/en-US.mdx)

<br>

### What is the purpose of the `new` keyword?

<!-- Update here: /questions/what-is-the-purpose-of-the-new-keyword/en-US.mdx -->

Calling a constructable function with `new` creates a fresh object, links its prototype to the constructor's `prototype`, calls the constructor with `this` set to that object, and normally returns the object. If the constructor explicitly returns another non-primitive object, that returned object wins; an explicit primitive return is ignored. Arrow functions and some other callables are not constructable.

```js live
function Person(name) {
  this.name = name;
}

const person1 = new Person('Alice');
console.log(person1.name); // Alice
```

<!-- Update here: /questions/what-is-the-purpose-of-the-new-keyword/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-purpose-of-the-new-keyword/en-US.mdx)

<br>

### How do you create a constructor function?

<!-- Update here: /questions/how-do-you-create-a-constructor-function/en-US.mdx -->

To create a constructor function in JavaScript, define a regular function with a capitalized name to indicate it's a constructor. Use the `this` keyword to set properties and methods. When creating an instance, use the `new` keyword.

```js live
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person('John', 30);
console.log(john.age); // 30
```

<!-- Update here: /questions/how-do-you-create-a-constructor-function/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-create-a-constructor-function/en-US.mdx)

<br>

### What are the differences between JavaScript ES2015 classes and ES5 function constructors?

<!-- Update here: /questions/what-are-the-differences-between-es6-class-and-es5-function-constructors/en-US.mdx -->

ES2015 introduces a new way of creating classes, which provides a more intuitive and concise way to define and work with objects and inheritance compared to the ES5 function constructor syntax. Here's an example of each:

```js
// ES5 function constructor
function Person(name) {
  this.name = name;
}

// ES2015 Class
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

For simple constructors, they look pretty similar. The main difference in the constructor comes when using inheritance. If we want to create a `Student` class that subclasses `Person` and adds a `studentId` field, this is what we have to do.

```js live
// ES5 inheritance
// Superclass
function Person1(name) {
  this.name = name;
}

// Subclass
function Student1(name, studentId) {
  // Call constructor of superclass to initialize superclass-derived members.
  Person1.call(this, name);

  // Initialize subclass's own members.
  this.studentId = studentId;
}
Student1.prototype = Object.create(Person1.prototype);
Student1.prototype.constructor = Student1;

const student1 = new Student1('John', 1234);
console.log(student1.name, student1.studentId); // "John" 1234

// ES2015 inheritance
// Superclass
class Person2 {
  constructor(name) {
    this.name = name;
  }
}

// Subclass
class Student2 extends Person2 {
  constructor(name, studentId) {
    super(name);
    this.studentId = studentId;
  }
}

const student2 = new Student2('Alice', 5678);
console.log(student2.name, student2.studentId); // "Alice" 5678
```

It's much more verbose to use inheritance in ES5, and the ES2015 version is easier to understand and remember.

**Comparison of ES5 function constructors vs ES2015 classes**

| Feature | ES5 Function Constructor | ES2015 Class |
| --- | --- | --- |
| Syntax | Uses function constructors and prototypes | Uses `class` keyword |
| Constructor | Function with properties assigned using `this` | `constructor` method inside the class |
| Method Definition | Defined on the prototype | Defined inside the class body |
| Static Methods | Added directly to the constructor function | Defined using the `static` keyword |
| Inheritance | Uses `Object.create()` and manually sets prototype chain | Uses `extends` keyword and `super` |
| Readability | Less intuitive and more verbose | More concise and intuitive |

<!-- Update here: /questions/what-are-the-differences-between-es6-class-and-es5-function-constructors/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-differences-between-es6-class-and-es5-function-constructors/en-US.mdx)

<br>

### What advantage is there for using the JavaScript arrow syntax for a method in a constructor?

<!-- Update here: /questions/what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor/en-US.mdx -->

The main advantage of using an arrow function as a method inside a constructor is that the value of `this` gets set at the time of the function creation and can't change after that. When the constructor is used to create a new object, `this` will always refer to that object.

For example, let's say we have a `Person` constructor that takes a first name as an argument and has two methods to `console.log()` that name, one as a regular function and one as an arrow function:

```js live
const Person = function (name) {
  this.firstName = name;
  this.sayName1 = function () {
    console.log(this.firstName);
  };
  this.sayName2 = () => {
    console.log(this.firstName);
  };
};

const john = new Person('John');
const dave = new Person('Dave');

john.sayName1(); // John
john.sayName2(); // John

// The regular function can have its `this` value changed, but the arrow function cannot
john.sayName1.call(dave); // Dave (because `this` is now the dave object)
john.sayName2.call(dave); // John

john.sayName1.apply(dave); // Dave (because `this` is now the dave object)
john.sayName2.apply(dave); // John

john.sayName1.bind(dave)(); // Dave (because `this` is now the dave object)
john.sayName2.bind(dave)(); // John

const detachedRegularMethod = john.sayName1;
try {
  detachedRegularMethod();
} catch (error) {
  console.log(error.name); // TypeError in strict mode because `this` is undefined
}

const detachedArrowMethod = john.sayName2;
detachedArrowMethod(); // John
```

The main takeaway is that a regular function receives `this` from its call site, while an arrow captures it from the constructor call. The tradeoff is that this arrow function is created separately for every instance instead of being shared through the prototype, and callers cannot deliberately rebind it.

<!-- Update here: /questions/what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor/en-US.mdx)

<br>

### Why might you want to create static class members in JavaScript?

<!-- Update here: /questions/why-you-might-want-to-create-static-class-members/en-US.mdx -->

Static fields and methods belong to the class constructor rather than to each instance. Use them for behavior or data conceptually associated with the type as a whole: named factories, validation helpers, registries, constants, or counters. Access them as `ClassName.member` (or through `this` inside a static method), not through an instance.

Do not use static mutable state for request/user data or browser secrets. It is shared within that constructor's runtime scope, complicates isolation and concurrency, and is duplicated across processes, workers, realms, or separate module copies. A module-level function or dependency-injected object is often simpler when no class abstraction is needed.

<!-- Update here: /questions/why-you-might-want-to-create-static-class-members/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/why-you-might-want-to-create-static-class-members/en-US.mdx)

<br>

### What is a closure in JavaScript, and how/why would you use one?

<!-- Update here: /questions/what-is-a-closure-and-how-why-would-you-use-one/en-US.mdx -->

In the book ["You Don't Know JS"](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/scope-closures) (YDKJS) by Kyle Simpson, a closure is defined as follows:

> Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope

In simple terms, functions have access to variables that were in their scope at the time of their creation. This is what we call the function's lexical scope. A closure is a function that retains access to these variables even after the outer function has finished executing. It is as if the function has a memory of its original environment.

```js live
function outerFunction() {
  const outerVar = 'I am outside of innerFunction';

  function innerFunction() {
    console.log(outerVar); // `innerFunction` can still access `outerVar`.
  }

  return innerFunction;
}

const inner = outerFunction(); // `inner` now holds a reference to `innerFunction`.

inner(); // "I am outside of innerFunction"
// Even though `outerFunction` has completed execution, `inner` still has access to variables defined inside `outerFunction`.
```

Key points to remember:

- Closure occurs when an inner function has access to variables in its outer (lexical) scope, even when the outer function has finished executing.
- Closure allows a function to **remember** the environment in which it was created. The needed lexical environment remains reachable for as long as the closure needs it.
- Closures are used extensively in JavaScript, such as in callbacks, event handlers, and asynchronous functions.

<!-- Update here: /questions/what-is-a-closure-and-how-why-would-you-use-one/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-a-closure-and-how-why-would-you-use-one/en-US.mdx)

<br>

### Explain the concept of lexical scoping

<!-- Update here: /questions/explain-the-concept-of-lexical-scoping/en-US.mdx -->

Lexical scoping means that the scope of a variable is determined by its location within the source code, and nested functions have access to variables declared in their outer scope. For example:

```js live
function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
    console.log(outerVariable); // 'I am outside!'
  }

  innerFunction();
}

outerFunction();
```

In this example, `innerFunction` can access `outerVariable` because of lexical scoping.

<!-- Update here: /questions/explain-the-concept-of-lexical-scoping/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-lexical-scoping/en-US.mdx)

<br>

### Explain the concept of scope in JavaScript

<!-- Update here: /questions/explain-the-concept-of-scope-in-javascript/en-US.mdx -->

In JavaScript, scope determines the accessibility of variables and functions at different parts of the code. There are three main types of scope: global scope, function scope, and block scope. Global scope means the variable is accessible everywhere in the code. Function scope means the variable is accessible only within the function it is declared. Block scope, introduced with ES6, means the variable is accessible only within the block (e.g., within curly braces `{}`) it is declared.

```js live
var globalVar = 'I am a global var';

function myFunction() {
  var functionVar = 'I am a function-scoped var';

  if (true) {
    let blockVar = 'I am a block-scoped var';

    console.log('Inside block:');
    console.log(globalVar); // Accessible
    console.log(functionVar); // Accessible
    console.log(blockVar); // Accessible
  }

  console.log('Inside function:');
  console.log(globalVar); // Accessible
  console.log(functionVar); // Accessible
  // console.log(blockVar); // Uncaught ReferenceError
}

myFunction();

console.log('In global scope:');
console.log(globalVar); // Accessible
// console.log(functionVar); // Uncaught ReferenceError
// console.log(blockVar); // Uncaught ReferenceError
```

<!-- Update here: /questions/explain-the-concept-of-scope-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-scope-in-javascript/en-US.mdx)

<br>

### How can closures be used to create private variables?

<!-- Update here: /questions/how-can-closures-be-used-to-create-private-variables/en-US.mdx -->

Closures in JavaScript can be used to create private variables by defining a function within another function. The inner function has access to the outer function's variables, but those variables are not accessible from outside the outer function. This allows you to encapsulate and protect the variables from being accessed or modified directly.

```js live
function createCounter() {
  let count = 0; // private variable

  return {
    increment: function () {
      count++;
      return count;
    },
    decrement: function () {
      count--;
      return count;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount()); // 1
console.log(counter.count); // undefined
```

<!-- Update here: /questions/how-can-closures-be-used-to-create-private-variables/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-can-closures-be-used-to-create-private-variables/en-US.mdx)

<br>

### What are the potential pitfalls of using closures?

<!-- Update here: /questions/what-are-the-potential-pitfalls-of-using-closures/en-US.mdx -->

Closures are not inherently leaks or performance problems. The main risk is accidentally keeping a closure reachable through a long-lived listener, timer, cache, or callback when its captured state includes a large object graph. Closures can also make state flow harder to follow, and loop closures created with `var` can unintentionally share one binding. Release long-lived registrations when they are no longer needed and use block-scoped bindings for per-iteration state.

<!-- Update here: /questions/what-are-the-potential-pitfalls-of-using-closures/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-potential-pitfalls-of-using-closures/en-US.mdx)

<br>

### Explain the difference between global scope, function scope, and block scope

<!-- Update here: /questions/explain-the-difference-between-global-scope-function-scope-and-block-scope/en-US.mdx -->

Global scope means variables are accessible from anywhere in the code. Function scope means variables are accessible only within the function they are declared in. Block scope means variables are accessible only within the block (e.g., within `{}`) they are declared in.

```js live
var globalVar = "I'm global"; // Global scope

function myFunction() {
  var functionVar = "I'm in a function"; // Function scope
  if (true) {
    let blockVar = "I'm in a block"; // Block scope
    console.log(blockVar); // Accessible here
  }
  // console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
}
// console.log(functionVar); // Uncaught ReferenceError: functionVar is not defined
myFunction();
```

<!-- Update here: /questions/explain-the-difference-between-global-scope-function-scope-and-block-scope/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-difference-between-global-scope-function-scope-and-block-scope/en-US.mdx)

<br>

### Explain how `this` works in JavaScript

<!-- Update here: /questions/explain-how-this-works-in-javascript/en-US.mdx -->

There's no simple explanation for `this`; it is one of the most confusing concepts in JavaScript because its behavior differs from many other programming languages. The one-liner explanation of the `this` keyword is that it is a dynamic reference to the context in which a function is executed.

A longer explanation is that `this` follows these rules:

1. If the `new` keyword is used when calling the function, meaning the function was used as a function constructor, the `this` inside the function is the newly-created object instance.
2. If `this` is used in a `class` `constructor`, the `this` inside the `constructor` is the newly-created object instance.
3. If `apply()`, `call()`, or `bind()` is used to call/create a function, `this` inside the function is the object that is passed in as the argument.
4. If a function is called as a method (e.g. `obj.method()`) — `this` is the object that the function is a property of.
5. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, `this` is the global object. In the browser, the global object is the `window` object. If in strict mode (`'use strict';`), `this` will be `undefined` instead of the global object.
6. If multiple of the above rules apply, the rule that is higher wins and will set the `this` value.
7. If the function is an ES2015 arrow function, it ignores all the rules above and receives the `this` value of its surrounding scope at the time it is created.

For an in-depth explanation, do check out [Arnav Aggrawal's article on Medium](https://codeburst.io/the-simple-rules-to-this-in-javascript-35d97f31bde3).

<!-- Update here: /questions/explain-how-this-works-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-how-this-works-in-javascript/en-US.mdx)

<br>

### Explain `Function.prototype.bind` in JavaScript

<!-- Update here: /questions/explain-function-prototype-bind/en-US.mdx -->

`Function.prototype.bind` is a method in JavaScript that allows you to create a new function with a specific `this` value and optional initial arguments. Its primary purpose is to:

- **Binding `this` value to preserve context**: The primary purpose of `bind` is to bind the `this` value of a function to a specific object. When you call `func.bind(thisArg)`, it creates a new function with the same body as `func`, but with `this` permanently bound to `thisArg`.
- **Partial application of arguments**: `bind` also allows you to pre-specify arguments for the new function. Any arguments passed to `bind` after `thisArg` will be prepended to the arguments list when the new function is called.
- **Method borrowing**: `bind` allows you to borrow methods from one object and apply them to another object, even if they were not originally designed to work with that object.

The `bind` method is particularly useful in scenarios where you need to ensure that a function is called with a specific `this` context, such as in event handlers, callbacks, or method borrowing.

<!-- Update here: /questions/explain-function-prototype-bind/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-function-prototype-bind/en-US.mdx)

<br>

### Explain the different ways the `this` keyword can be bound

<!-- Update here: /questions/explain-the-different-ways-the-this-keyword-can-be-bound/en-US.mdx -->

The `this` keyword in JavaScript can be bound in several ways:

- Default binding: In non-strict mode, `this` refers to the global object (`window` in browsers). In strict mode, `this` is `undefined`.
- Implicit binding: When a function is called as a method of an object, `this` refers to the object.
- Explicit binding: Using `call`, `apply`, or `bind` methods to explicitly set `this`.
- New binding: When a function is used as a constructor with the `new` keyword, `this` refers to the newly created object.
- Arrow functions: Arrow functions do not have their own `this` and inherit `this` from the surrounding lexical context.

<!-- Update here: /questions/explain-the-different-ways-the-this-keyword-can-be-bound/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-different-ways-the-this-keyword-can-be-bound/en-US.mdx)

<br>

### What are the common pitfalls of using the `this` keyword?

<!-- Update here: /questions/what-are-the-common-pitfalls-of-using-the-this-keyword/en-US.mdx -->

The `this` keyword in JavaScript can be tricky because its value depends on how a function is called. Common pitfalls include losing the context of `this` when passing methods as callbacks, using `this` in nested functions, and misunderstanding `this` in arrow functions. To avoid these issues, you can use `.bind()`, arrow functions, or store the context in a variable.

<!-- Update here: /questions/what-are-the-common-pitfalls-of-using-the-this-keyword/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-common-pitfalls-of-using-the-this-keyword/en-US.mdx)

<br>

### Explain the concept of `this` binding in event handlers

<!-- Update here: /questions/explain-the-concept-of-this-binding-in-event-handlers/en-US.mdx -->

For a non-arrow function registered with `addEventListener()`, the browser calls the listener with `this` set to the element on which the listener is registered. This is the same value as `event.currentTarget`, and it may differ from `event.target`, the descendant where the event originated. Arrow functions instead capture `this` lexically, and `bind()` can explicitly fix a regular function's `this` value.

<!-- Update here: /questions/explain-the-concept-of-this-binding-in-event-handlers/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-this-binding-in-event-handlers/en-US.mdx)

<br>

### What is the DOM and how is it structured?

<!-- Update here: /questions/what-is-the-dom-and-how-is-it-structured/en-US.mdx -->

The DOM, or Document Object Model, is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM is structured as a tree of objects, where each node represents part of the document, such as elements, attributes, and text.

<!-- Update here: /questions/what-is-the-dom-and-how-is-it-structured/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-dom-and-how-is-it-structured/en-US.mdx)

<br>

### What's the difference between an "attribute" and a "property" in the DOM?

<!-- Update here: /questions/whats-the-difference-between-an-attribute-and-a-property/en-US.mdx -->

Attributes are defined in the HTML and provide initial values for properties. Properties are part of the DOM and represent the current state of an element. For example, the `value` attribute of an `<input>` element sets its initial value, while the `value` property reflects the current value as the user interacts with it.

<!-- Update here: /questions/whats-the-difference-between-an-attribute-and-a-property/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/whats-the-difference-between-an-attribute-and-a-property/en-US.mdx)

<br>

### Explain the difference between `document.querySelector()` and `document.getElementById()`

<!-- Update here: /questions/explain-the-difference-between-documentqueryselector-and-documentgetelementbyid/en-US.mdx -->

`document.querySelector()` and `document.getElementById()` are both methods used to select elements from the DOM, but they have key differences. `document.querySelector()` can select any element using a CSS selector and returns the first match, while `document.getElementById()` selects an element by its ID and returns the element with that specific ID.

```js
// Using document.querySelector()
const element = document.querySelector('.my-class');

// Using document.getElementById()
const elementById = document.getElementById('my-id');
```

<!-- Update here: /questions/explain-the-difference-between-documentqueryselector-and-documentgetelementbyid/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-difference-between-documentqueryselector-and-documentgetelementbyid/en-US.mdx)

<br>

### How do you add, remove, and modify HTML elements using JavaScript?

<!-- Update here: /questions/how-do-you-add-remove-and-modify-html-elements-using-javascript/en-US.mdx -->

Create elements with `document.createElement()`, set text with `textContent`, and insert them with `append()`, `prepend()`, `before()`, `after()`, or `replaceWith()`. Remove an element with `remove()`. Use `classList`, properties, and attributes for targeted updates. Avoid assigning untrusted strings to `innerHTML`; use text and DOM construction, or an appropriate HTML sanitizer when the product intentionally accepts HTML.

```js
// Adding an element
const newElement = document.createElement('div');
newElement.textContent = 'Hello, World!';
document.body.appendChild(newElement);

// Removing an element
const elementToRemove = document.getElementById('elementId');
elementToRemove?.remove();

// Modifying an element
const elementToModify = document.getElementById('elementId');
if (elementToModify) elementToModify.textContent = 'New content';
```

<!-- Update here: /questions/how-do-you-add-remove-and-modify-html-elements-using-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-add-remove-and-modify-html-elements-using-javascript/en-US.mdx)

<br>

### What are event listeners and how are they used?

<!-- Update here: /questions/what-are-event-listeners-and-how-are-they-used/en-US.mdx -->

Event listeners register callbacks on an `EventTarget` for events such as clicks, input, network state, or custom notifications. `addEventListener()` supports options for capture, one-time delivery, passive scrolling behavior, and cleanup through an `AbortSignal`. Keep ownership explicit: remove long-lived listeners when their feature is disposed, and use event delegation when many dynamic descendants share behavior.

```js
document.getElementById('myButton').addEventListener('click', function () {
  alert('Button was clicked!');
});
```

<!-- Update here: /questions/what-are-event-listeners-and-how-are-they-used/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-event-listeners-and-how-are-they-used/en-US.mdx)

<br>

### Explain the event phases in a browser

<!-- Update here: /questions/explain-the-event-phases-in-a-browser/en-US.mdx -->

In a browser, events go through three phases: capturing, target, and bubbling. During the capturing phase, the event travels from the root to the target element. In the target phase, the event reaches the target element. Finally, in the bubbling phase, the event travels back up from the target element to the root. You can control event handling using `addEventListener` with the `capture` option.

<!-- Update here: /questions/explain-the-event-phases-in-a-browser/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-event-phases-in-a-browser/en-US.mdx)

<br>

### Describe event bubbling in JavaScript and browsers

<!-- Update here: /questions/describe-event-bubbling/en-US.mdx -->

Event bubbling is a DOM event propagation mechanism where an event (e.g. a click) starts at the target element and bubbles up to the root of the document. This allows ancestor elements to also respond to the event.

Event bubbling is essential for event delegation, where a single event handler manages events for multiple child elements, enhancing performance and code simplicity. While convenient, failing to manage event propagation properly can lead to unintended behavior, such as multiple handlers firing for a single event.

<!-- Update here: /questions/describe-event-bubbling/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/describe-event-bubbling/en-US.mdx)

<br>

### Describe event capturing in JavaScript and browsers

<!-- Update here: /questions/describe-event-capturing/en-US.mdx -->

Event capturing is a lesser-used counterpart to [event bubbling](https://www.greatfrontend.com/questions/quiz/describe-event-bubbling) in the DOM event propagation mechanism. During capture, the event travels along its event path from ancestors toward the target, and capture listeners run in that order.

Event capturing is used less often than event bubbling, but it is useful when an ancestor needs to observe an event before it reaches the target. DOM events still travel through the capture phase; what defaults to `false` is the `capture` option when registering a listener with `addEventListener()`.

<!-- Update here: /questions/describe-event-capturing/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/describe-event-capturing/en-US.mdx)

<br>

### Explain event delegation in JavaScript

<!-- Update here: /questions/explain-event-delegation/en-US.mdx -->

Event delegation is a technique in JavaScript where a single event listener is attached to a parent element instead of attaching event listeners to multiple child elements. When an event occurs on a child element, the event bubbles up the DOM tree, and the parent element's event listener handles the event based on the target element.

Event delegation provides the following benefits:

- **Fewer listeners**: A single listener can reduce listener bookkeeping and per-item closures for very large collections. Whether that produces a measurable performance improvement depends on the page and should be profiled.
- **Simplified event handling**: With event delegation, you only need to write the event handling logic once in the parent element's event listener. This makes the code more maintainable and easier to update.
- **Dynamic element support**: Event delegation automatically handles events for dynamically added or removed elements within the parent element. There's no need to manually attach or remove event listeners when the DOM structure changes.

However, do note that:

- It is important to identify the target element that triggered the event.
- Not every event bubbles. For example, `focus`/`blur` and `mouseenter`/`mouseleave` need capture-phase handling or bubbling alternatives such as `focusin`/`focusout` and `mouseover`/`mouseout`. Element `scroll` and `resize` generally need direct listeners.

<!-- Update here: /questions/explain-event-delegation/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-event-delegation/en-US.mdx)

<br>

### How do you prevent the default behavior of an event?

<!-- Update here: /questions/how-do-you-prevent-the-default-behavior-of-an-event/en-US.mdx -->

To prevent the default behavior of an event in JavaScript, you can use the `preventDefault` method on the event object. For example, if you want to prevent a form from submitting, you can do the following:

```js
document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
});
```

This method stops the default action associated with the event from occurring.

<!-- Update here: /questions/how-do-you-prevent-the-default-behavior-of-an-event/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-prevent-the-default-behavior-of-an-event/en-US.mdx)

<br>

### What is the difference between `event.preventDefault()` and `event.stopPropagation()`?

<!-- Update here: /questions/what-is-the-difference-between-eventpreventdefault-and-eventstoppropagation/en-US.mdx -->

`event.preventDefault()` cancels an event's default browser action when the event is cancelable, such as link navigation or form submission. `event.stopPropagation()` stops the event from continuing through the remaining capture and bubble path. It does not cancel the default action or stop other listeners on the same element; use `stopImmediatePropagation()` for the latter.

<!-- Update here: /questions/what-is-the-difference-between-eventpreventdefault-and-eventstoppropagation/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-difference-between-eventpreventdefault-and-eventstoppropagation/en-US.mdx)

<br>

### What is the difference between `mouseenter` and `mouseover` event in JavaScript and browsers?

<!-- Update here: /questions/what-is-the-difference-between-mouseenter-and-mouseover-event/en-US.mdx -->

The main difference lies in the bubbling behavior of `mouseenter` and `mouseover` events. `mouseenter` does not bubble while `mouseover` bubbles.

`mouseenter` events do not bubble. The `mouseenter` event is triggered only when the mouse pointer enters the element itself, not its descendants. If a parent element has child elements, and the mouse pointer enters child elements, the `mouseenter` event will not be triggered on the parent element again; it is only triggered once upon entry of the parent element, without regard for its contents. If both parent and child have `mouseenter` listeners attached and the mouse pointer moves from the parent element to the child element, `mouseenter` will only fire for the child.

`mouseover` events bubble up the DOM tree. The `mouseover` event is triggered when the mouse pointer enters the element or one of its descendants. If a parent element has child elements, and the mouse pointer enters child elements, the `mouseover` event will be triggered on the parent element again as well. If the parent element has multiple child elements, this can result in multiple event callbacks fired. If there are child elements, and the mouse pointer moves from the parent element to the child element, `mouseover` will fire for both the parent and the child.

| Property | `mouseenter` | `mouseover` |
| --- | --- | --- |
| Bubbling | No | Yes |
| Trigger | Only when entering itself | When entering itself and when entering descendants |

<!-- Update here: /questions/what-is-the-difference-between-mouseenter-and-mouseover-event/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-difference-between-mouseenter-and-mouseover-event/en-US.mdx)

<br>

### What is the difference between `innerHTML` and `textContent`?

<!-- Update here: /questions/what-is-the-difference-between-innerhtml-and-textcontent/en-US.mdx -->

`innerHTML` gets or replaces serialized HTML markup, so assigning to it invokes the HTML parser and creates elements. `textContent` gets or replaces text and treats `<` and `>` as characters. Use `textContent` for untrusted plain text. Use `innerHTML` only when HTML is intentionally required and the value is trusted or processed by an appropriate HTML sanitizer; assigning arbitrary user input creates an XSS sink.

```js
// Example of innerHTML
element.innerHTML = '<strong>Bold Text</strong>'; // Renders as bold text

// Example of textContent
element.textContent = '<strong>Bold Text</strong>'; // Renders as plain text: <strong>Bold Text</strong>
```

<!-- Update here: /questions/what-is-the-difference-between-innerhtml-and-textcontent/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-difference-between-innerhtml-and-textcontent/en-US.mdx)

<br>

### How do you manipulate CSS styles using JavaScript?

<!-- Update here: /questions/how-do-you-manipulate-css-styles-using-javascript/en-US.mdx -->

You can manipulate CSS styles using JavaScript by accessing the `style` property of an HTML element. For example, to change the background color of a `div` element with the id `myDiv`, you can use:

```js
document.getElementById('myDiv').style.backgroundColor = 'blue';
```

You can also add, remove, or toggle CSS classes using the `classList` property:

```js
document.getElementById('myDiv').classList.add('newClass');
document.getElementById('myDiv').classList.remove('oldClass');
document.getElementById('myDiv').classList.toggle('toggleClass');
```

<!-- Update here: /questions/how-do-you-manipulate-css-styles-using-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-manipulate-css-styles-using-javascript/en-US.mdx)

<br>

### Describe the difference between `<script>`, `<script async>` and `<script defer>`

<!-- Update here: /questions/describe-the-difference-between-script-async-and-script-defer/en-US.mdx -->

All of these ways (`<script>`, `<script async>`, and `<script defer>`) are used to load and execute JavaScript files in an HTML document, but they differ in how the browser handles loading and execution of the script:

- `<script>` is the default way of including JavaScript. The browser blocks HTML parsing while the script is being downloaded and executed. The browser will not continue rendering the page until the script has finished executing.
- `<script async>` downloads the script asynchronously, in parallel with parsing the HTML. Executes the script as soon as it is available, potentially interrupting the HTML parsing. Multiple `<script async>` tags do not wait for each other and execute in no particular order.
- `<script defer>` downloads the script asynchronously, in parallel with parsing the HTML. However, the execution of the script is deferred until HTML parsing is complete, in the order they appear in the HTML.

Here's a table summarizing the 4 ways of loading `<script>`s in an HTML document. Modern apps almost always use modules, which deserve their own row.

| Feature | `<script>` | `<script async>` | `<script defer>` | `<script type="module">` |
| --- | --- | --- | --- | --- |
| Parsing behavior | Blocks HTML parsing | Downloads in parallel; execution still blocks parsing | Downloads in parallel; execution deferred until after parsing | Downloads in parallel; execution deferred until after parsing |
| Execution order | In order of appearance | Not guaranteed | In order of appearance | In order of appearance, with each script's `import` dependencies resolved first |
| DOM state at execution | Only earlier markup is parsed | Depends on download timing | Document parsing is complete | Document parsing is complete |

<!-- Update here: /questions/describe-the-difference-between-script-async-and-script-defer/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/describe-the-difference-between-script-async-and-script-defer/en-US.mdx)

<br>

### What is the difference between the Window object and the Document object?

<!-- Update here: /questions/what-is-the-difference-between-the-window-object-and-the-document-object/en-US.mdx -->

The `Window` object represents the browser window and provides methods to control it, such as opening new windows or accessing the browser history. The `Document` object represents the content of the web page loaded in the window and provides methods to manipulate the DOM, such as selecting elements or modifying their content.

<!-- Update here: /questions/what-is-the-difference-between-the-window-object-and-the-document-object/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-difference-between-the-window-object-and-the-document-object/en-US.mdx)

<br>

### Describe the difference between a cookie, `sessionStorage` and `localStorage` in browsers

<!-- Update here: /questions/describe-the-difference-between-a-cookie-sessionstorage-and-localstorage/en-US.mdx -->

Cookies, `localStorage`, and `sessionStorage` all store data in the browser, but they differ in lifetime, scope, server interaction, and security controls. `localStorage` and `sessionStorage` implement the [Web Storage API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).

- **Cookies**: Small values that the browser sends with matching HTTP requests. They can be session or persistent cookies and support controls such as `HttpOnly`, `Secure`, and `SameSite`.
- **`localStorage`**: Origin-scoped string storage that persists until it is cleared and is shared by same-origin tabs and windows.
- **`sessionStorage`**: Origin- and tab-scoped string storage for a page session. It survives reloads but is normally cleared when the tab or window closes.

Here's a table summarizing the 3 client storage mechanisms.

| Property | Cookie | `localStorage` | `sessionStorage` |
| --- | --- | --- | --- |
| Initiator | Client or server. Server can use `Set-Cookie` header | Client | Client |
| Lifespan | As specified | Until deleted | Until tab is closed |
| Persistent across browser sessions | If a future expiry date is set | Yes | No |
| Sent to server with matching HTTP requests | Yes, via the `Cookie` header | No | No |
| Typical storage limit | About 4 KB per cookie | Browser-dependent quota, commonly several MiB per origin | Browser-dependent quota, commonly several MiB per origin |
| Access | Across windows/tabs | Across windows/tabs | Same tab |
| Security | JavaScript cannot access `HttpOnly` cookies | None | None |

<!-- Update here: /questions/describe-the-difference-between-a-cookie-sessionstorage-and-localstorage/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/describe-the-difference-between-a-cookie-sessionstorage-and-localstorage/en-US.mdx)

<br>

### How do you make an HTTP request using the Fetch API?

<!-- Update here: /questions/how-do-you-make-an-http-request-using-the-fetch-api/en-US.mdx -->

To make an HTTP request, call `fetch()`, which returns a promise for a `Response`. Fetch rejects for failures such as malformed URLs, network errors, CORS failures, and aborts—not for HTTP statuses such as 404 or 500—so check `response.ok` (or `response.status`) before reading the body.

```js live
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

For a POST request, you can pass an options object as the second argument to `fetch`:

```js live
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => {
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Error:', error));
```

<!-- Update here: /questions/how-do-you-make-an-http-request-using-the-fetch-api/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-make-an-http-request-using-the-fetch-api/en-US.mdx)

<br>

### What are the different ways to make an API call in JavaScript?

<!-- Update here: /questions/what-are-the-different-ways-to-make-an-api-call-in-javascript/en-US.mdx -->

Use the built-in `fetch()` API for most new browser and modern Node.js code. It supports promises, streaming response bodies, and cancellation with `AbortController`, but rejects only for request failures—not for HTTP error statuses—so check `response.ok`. Use `XMLHttpRequest` when maintaining legacy browser code or when its upload-progress events are specifically required. Libraries such as Axios can add a shared client policy, interceptors, and conveniences; jQuery AJAX mainly remains relevant in existing jQuery applications.

These are request clients. Server-Sent Events and WebSockets solve long-lived server push or two-way messaging and are not drop-in replacements for ordinary request-response calls.

<!-- Update here: /questions/what-are-the-different-ways-to-make-an-api-call-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-different-ways-to-make-an-api-call-in-javascript/en-US.mdx)

<br>

### Explain AJAX in as much detail as possible

<!-- Update here: /questions/explain-ajax-in-as-much-detail-as-possible/en-US.mdx -->

AJAX (Asynchronous JavaScript and XML) facilitates asynchronous communication between the client and server, enabling dynamic updates to web pages without reloading. It uses techniques like `XMLHttpRequest` or the `fetch()` API to send and receive data in the background. In modern web applications, the `fetch()` API is more commonly used to implement AJAX.

**Using `XMLHttpRequest`**

```js live
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error('Request failed: ' + xhr.status);
    }
  }
};
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.send();
```

**Using `fetch()`**

```js live
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error('Fetch error:', error));
```

<!-- Update here: /questions/explain-ajax-in-as-much-detail-as-possible/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-ajax-in-as-much-detail-as-possible/en-US.mdx)

<br>

### What are the advantages and disadvantages of using AJAX?

<!-- Update here: /questions/what-are-the-advantages-and-disadvantages-of-using-ajax/en-US.mdx -->

AJAX (Asynchronous JavaScript and XML) is a technique in JavaScript that allows web pages to send and retrieve data asynchronously from servers without refreshing or reloading the entire page.

**Advantages**

- **Partial updates**: The page can update selected regions without a full navigation, which can make interactions feel faster.
- **Potentially smaller transfers**: An endpoint can return only the data needed for an update instead of another complete document.
- **Preserved in-page state**: Inputs, scroll position, and other client state remain in place because the document is not replaced.

**Disadvantages**

- **Asynchronous complexity**: Applications must handle cancellation, errors, retries, race conditions, stale responses, and loading states.
- **State and navigation design**: URLs, browser history, caching, and indexability do not follow automatically from an in-page request.
- **Client-side cost**: Extra JavaScript, rendering, and state management can offset savings from smaller responses.
- **Security risks**: Untrusted response data must be handled safely; inserting returned HTML can introduce XSS.

<!-- Update here: /questions/what-are-the-advantages-and-disadvantages-of-using-ajax/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-advantages-and-disadvantages-of-using-ajax/en-US.mdx)

<br>

### What are the differences between `XMLHttpRequest` and `fetch()` in JavaScript and browsers?

<!-- Update here: /questions/what-are-the-differences-between-xmlhttprequest-and-fetch/en-US.mdx -->

`XMLHttpRequest` (XHR) and `fetch()` API are both used for asynchronous HTTP requests in JavaScript (AJAX). `fetch()` offers a cleaner syntax, promise-based approach, and more modern feature set compared to XHR. However, there are some differences:

- `XMLHttpRequest` uses event callbacks, while `fetch()` utilizes promise chaining.
- Both APIs support request headers and common body types; Fetch exposes `Headers`, `Request`, and `Response` abstractions and integrates with streams.
- A Fetch promise rejects for network, CORS, and abort failures but fulfills for HTTP error statuses, so callers must check `response.ok` or `response.status`.
- Both APIs use the browser's HTTP cache. Fetch additionally exposes a `cache` request option.
- `fetch()` requires an `AbortController` for cancelation, while `XMLHttpRequest` provides an `abort()` method.
- XHR exposes convenient upload and download progress events. Fetch response bodies are streams, so download progress can be measured manually, but browsers still lack an equally convenient standard Fetch upload-progress API.
- XHR is a browser API. Fetch is a web standard also implemented by current Node.js and several other runtimes; check the target runtime rather than assuming universal support.

These days `fetch()` is preferred for its cleaner syntax and modern features.

<!-- Update here: /questions/what-are-the-differences-between-xmlhttprequest-and-fetch/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-differences-between-xmlhttprequest-and-fetch/en-US.mdx)

<br>

### How do you abort a web request using `AbortController` in JavaScript?

<!-- Update here: /questions/how-do-you-abort-a-web-request-using-abortcontrollers/en-US.mdx -->

Create an `AbortController`, pass its `signal` to `fetch()`, and call `controller.abort()` when the result is no longer needed. `fetch()` and response-body consumption reject when aborted. Treat cancellation as an expected control-flow outcome, clean up any related timers or listeners, and create a new controller for the next operation because an aborted signal stays aborted.

Aborting releases the client from waiting and may cancel network activity, but it does not guarantee that the server stops or rolls back work already started. Make important writes idempotent or provide an application-level cancellation protocol.

<!-- Update here: /questions/how-do-you-abort-a-web-request-using-abortcontrollers/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-abort-a-web-request-using-abortcontrollers/en-US.mdx)

<br>

### Explain how JSONP works (and how it's not really Ajax)

<!-- Update here: /questions/explain-how-jsonp-works-and-how-its-not-really-ajax/en-US.mdx -->

JSONP (JSON with Padding) is a legacy technique for reading cross-origin data by loading it as a classic `<script>`, a resource type the same-origin policy permits pages to embed. The server returns executable JavaScript that calls a predefined callback with the data. Unlike `XMLHttpRequest` or `fetch()`, JSONP only performs script-style GET requests and requires complete trust in the responding server. CORS is the modern alternative.

<!-- Update here: /questions/explain-how-jsonp-works-and-how-its-not-really-ajax/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-how-jsonp-works-and-how-its-not-really-ajax/en-US.mdx)

<br>

### What are workers in JavaScript used for?

<!-- Update here: /questions/what-are-workers-in-javascript-used-for/en-US.mdx -->

Workers in JavaScript are background threads that allow you to run scripts in parallel with the main execution thread, without blocking or interfering with the user interface. Their key features include:

- **Parallel processing**: Workers run in a separate thread from the main thread, allowing your web page to remain responsive to user interactions while the worker performs its tasks. It's useful for moving CPU-intensive work off the main thread and freeing you from JavaScript's single-threaded nature.
- **Communication**: Uses `postMessage()` and `onmessage`/`'message'` event for messaging.
- **Access to selected web APIs**: Depending on the worker type, workers can use APIs such as `fetch()`, IndexedDB, Cache, Web Crypto, and timers. They do not expose the Window-only `localStorage` or `sessionStorage` APIs.
- **No DOM access**: Workers cannot directly manipulate the DOM, thus cannot interact with the UI, ensuring they don't accidentally interfere with the main thread's operation.

There are three main types of workers in JavaScript:

- **Web workers / Dedicated workers**
  - Run scripts in background threads, separate from the main UI thread.
  - Useful for CPU-intensive tasks like data processing, calculations, etc.
  - Cannot directly access or manipulate the DOM.
- **Service workers**
  - Act as network proxies, handling requests between the app and network.
  - Enable offline functionality, caching, and push notifications.
  - Are event-driven and can be started by the browser for supported events even when no controlled page is open; they are not continuously running background processes.
- **Shared workers**
  - Can be shared by compatible same-origin documents in different windows or frames.
  - Scripts communicate with the shared worker by sending and receiving messages.
  - Useful for coordinating tasks across different parts of a web page.

<!-- Update here: /questions/what-are-workers-in-javascript-used-for/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-workers-in-javascript-used-for/en-US.mdx)

<br>

### Explain the concept of the Web Socket API

<!-- Update here: /questions/explain-the-concept-of-the-web-socket-api/en-US.mdx -->

The WebSocket API provides a way to open a persistent connection between a client and a server, allowing for real-time, two-way communication. Unlike HTTP, which is request-response based, WebSocket enables full-duplex communication, meaning both the client and server can send and receive messages independently. This is particularly useful for applications like chat apps, live updates, and online gaming.

The following non-live example uses a placeholder URL; replace it with a WebSocket endpoint you control.

```js
const socket = new WebSocket('wss://example.com/socket');

// Event listener for when the connection is open
socket.addEventListener('open', function (event) {
  socket.send('Hello Server!'); // Sends the message to the Postman WebSocket server
});

// Event listener for when a message is received from the server
socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);
  socket.close(1000, 'Example complete');
});
```

<!-- Update here: /questions/explain-the-concept-of-the-web-socket-api/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-the-web-socket-api/en-US.mdx)

<br>

### What are JavaScript polyfills for?

<!-- Update here: /questions/what-are-javascript-polyfills-for/en-US.mdx -->

Polyfills implement a missing JavaScript or Web API in environments that do not provide it. Choose them from an explicit support matrix and feature tests, load only the required modules, and prefer maintained implementations because matching specification edge cases is difficult. A transpiler rewrites syntax; it does not by itself add runtime objects such as `Promise`, `URL`, or new array methods.

They can be implemented manually or included through libraries and are often used in conjunction with feature detection.

Common use cases include:

- **New JavaScript Methods**: For example, `Array.prototype.includes()`, `Object.assign()`, etc.
- **New APIs**: Such as `fetch()`, `Promise`, `IntersectionObserver`, etc. Modern browsers support these now, but for a long time they had to be polyfilled.

A commonly used polyfill library is:

- **`core-js`**: A modular standard library for JavaScript which includes polyfills for a wide range of ECMAScript features.

  ```js
  import 'core-js/actual/array/flat-map'; // With this, Array.prototype.flatMap is available to be used.

  [1, 2].flatMap((it) => [it, it]); // => [1, 1, 2, 2]
  ```

Prefer installing maintained polyfills as project dependencies and bundling them with your application instead of loading executable code from a third-party polyfill service at runtime.

<!-- Update here: /questions/what-are-javascript-polyfills-for/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-javascript-polyfills-for/en-US.mdx)

<br>

### How do you detect if JavaScript is disabled on a page?

<!-- Update here: /questions/how-do-you-detect-if-javascript-is-disabled-on-a-page/en-US.mdx -->

To detect if JavaScript is disabled on a page, you can use the `<noscript>` HTML tag. This tag allows you to display content or messages to users who have JavaScript disabled in their browsers. For example, you can include a message within the `<noscript>` tag to inform users that JavaScript is required for the full functionality of the page.

```html
<noscript>
  <p>
    JavaScript is disabled in your browser. Please enable JavaScript for the
    best experience.
  </p>
</noscript>
```

<!-- Update here: /questions/how-do-you-detect-if-javascript-is-disabled-on-a-page/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-detect-if-javascript-is-disabled-on-a-page/en-US.mdx)

<br>

### What is the `Intl` namespace object for?

<!-- Update here: /questions/what-is-the-intl-namespace-object-for/en-US.mdx -->

`Intl` provides locale-aware formatting and comparison for numbers, currencies, dates, times, lists, relative time, plural categories, segments, and more. Pass the locale and domain options explicitly rather than hand-building localized strings. For dates, specify the intended time zone; for money, store the currency separately from the numeric amount. Exact output can vary with locale data, so test semantic parts rather than brittle punctuation where possible.

```js live
const date = new Date('2026-08-11T04:00:00Z');
const formatter = new Intl.DateTimeFormat('en-US');
console.log(formatter.format(date)); // Locale-formatted calendar date
```

<!-- Update here: /questions/what-is-the-intl-namespace-object-for/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-intl-namespace-object-for/en-US.mdx)

<br>

### How do you validate form elements using the Constraint Validation API?

<!-- Update here: /questions/how-do-you-validate-form-elements-using-the-constraint-validation-api/en-US.mdx -->

Put basic rules in HTML (`required`, `type`, `min`, `max`, `minlength`, `maxlength`, and `pattern`), then use the Constraint Validation API for custom relationships and feedback. `checkValidity()` returns a boolean and fires `invalid` on invalid controls; `reportValidity()` also asks the browser to show its validation UI. A nonempty `setCustomValidity()` message keeps a control invalid, so clear it with `setCustomValidity('')` as soon as the value becomes valid.

Browser validation improves user experience, not security. Repeat all validation on the server because requests can bypass the form.

<!-- Update here: /questions/how-do-you-validate-form-elements-using-the-constraint-validation-api/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-validate-form-elements-using-the-constraint-validation-api/en-US.mdx)

<br>

### How do you use `window.history` API?

<!-- Update here: /questions/how-do-you-use-windowhistory-api/en-US.mdx -->

The History API lets an application add or replace same-origin session-history entries without reloading the document. `pushState()` adds an entry, `replaceState()` updates the current entry, and `back()`, `forward()`, and `go()` traverse history. Changing history does not fetch or render content for you: update the UI and listen for `popstate` so the browser Back and Forward buttons restore the correct view.

<!-- Update here: /questions/how-do-you-use-windowhistory-api/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-use-windowhistory-api/en-US.mdx)

<br>

### How do `<iframe>` on a page communicate?

<!-- Update here: /questions/how-do-iframe-on-a-page-communicate/en-US.mdx -->

Parent pages and iframes can communicate across origins with `postMessage()`. It is secure only when the sender uses the exact target origin and the receiver validates `event.origin`, usually `event.source`, and the shape of `event.data`.

```js
// In the parent page
const iframe = document.querySelector('iframe');
iframe.contentWindow.postMessage('Hello from parent', 'https://widget.example');

// In the iframe
window.addEventListener('message', (event) => {
  if (event.origin !== 'https://parent.example') return;
  if (event.source !== window.parent) return;
  console.log(event.data); // 'Hello from parent'
});
```

<!-- Update here: /questions/how-do-iframe-on-a-page-communicate/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-iframe-on-a-page-communicate/en-US.mdx)

<br>

### Difference between document `load` event and document `DOMContentLoaded` event?

<!-- Update here: /questions/difference-between-document-load-event-and-document-domcontentloaded-event/en-US.mdx -->

`DOMContentLoaded` fires after the HTML has been parsed and deferred and module scripts have executed. It does not directly wait for images, subframes, or stylesheets, although a blocking stylesheet can delay a script and therefore indirectly delay `DOMContentLoaded`. The window `load` event waits for the document and its dependent resources, apart from resources loaded lazily.

```js
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
});

window.addEventListener('load', function () {
  console.log('Page fully loaded');
});
```

<!-- Update here: /questions/difference-between-document-load-event-and-document-domcontentloaded-event/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/difference-between-document-load-event-and-document-domcontentloaded-event/en-US.mdx)

<br>

### How do you redirect to a new page in JavaScript?

<!-- Update here: /questions/how-do-you-redirect-to-a-new-page-in-javascript/en-US.mdx -->

For a browser navigation, use `location.assign(url)` (or assign `location.href`) when Back should return to the current page, and `location.replace(url)` when the current entry should be replaced, such as after completing a one-time login step. Prefer an HTTP redirect when the server already knows the destination; it works without JavaScript and avoids loading a page only to navigate away.

Validate destinations derived from query parameters against trusted same-origin paths or an explicit origin allowlist to prevent open redirects.

```js
// Using window.location.href
window.location.href = 'https://www.example.com';

// Using window.location.replace()
window.location.replace('https://www.example.com');
```

<!-- Update here: /questions/how-do-you-redirect-to-a-new-page-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-redirect-to-a-new-page-in-javascript/en-US.mdx)

<br>

### How do you get the query string values of the current page in JavaScript?

<!-- Update here: /questions/how-do-you-get-the-query-string-values-of-the-current-page-in-javascript/en-US.mdx -->

To get the query string values of the current page in JavaScript, you can use the `URLSearchParams` object. First, create a `URLSearchParams` instance with `window.location.search`, then use the `get` method to retrieve specific query parameters. For example:

```js
const params = new URLSearchParams(window.location.search);
const value = params.get('language');
console.log(value);
```

<!-- Update here: /questions/how-do-you-get-the-query-string-values-of-the-current-page-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-get-the-query-string-values-of-the-current-page-in-javascript/en-US.mdx)

<br>

### What are server-sent events?

<!-- Update here: /questions/what-are-server-sent-events/en-US.mdx -->

[Server-sent events (SSE)](https://html.spec.whatwg.org/multipage/server-sent-events.html#server-sent-events) is the `text/event-stream` format for a server-to-client stream over HTTP. Browsers expose the `EventSource` API for a long-lived GET connection with built-in reconnection and last-event-ID support. A Fetch response body can also consume an SSE-formatted stream when an application needs a different HTTP method, request body, or custom headers, but reconnection and parsing then become application responsibilities.

| Property | `WebSocket` | `EventSource` |
| --- | --- | --- |
| Direction | Bi-directional – both client and server can exchange messages | Unidirectional – only server sends data |
| Data type | Binary and text data | Only text |
| Protocol | WebSocket protocol (`ws://`) | Regular HTTP (`http://`) |
| Browser API request shape | Custom handshake | `EventSource` issues GET; no request body and limited request-header control |

**Creating an event source**

```js
const eventSource = new EventSource('/sse-stream');
```

**Listening for events**

```js
// Fired when the connection is established.
eventSource.addEventListener('open', () => {
  console.log('Connection opened');
});

// Fired when a message is received from the server.
eventSource.addEventListener('message', (event) => {
  console.log('Received message:', event.data);
});

// Fired when an error occurs.
eventSource.addEventListener('error', (error) => {
  console.error('Error occurred:', error);
});
```

**Sending events from server**

```js
const express = require('express');
const app = express();

app.get('/sse-stream', (req, res) => {
  // `Content-Type` need to be set to `text/event-stream`.
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  // Each message should be prefixed with data.
  const sendEvent = (data) => res.write(`data: ${data}\n\n`);

  sendEvent('Hello from server');

  const intervalId = setInterval(() => sendEvent(new Date().toString()), 1000);

  res.on('close', () => {
    console.log('Client closed connection');
    clearInterval(intervalId);
  });
});

app.listen(3000, () => console.log('Server started on port 3000'));
```

In this example, the server sends a "Hello from server" message initially, and then sends the current date every second. The connection is kept alive until the client closes it.

<!-- Update here: /questions/what-are-server-sent-events/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-server-sent-events/en-US.mdx)

<br>

### What are Progressive Web Applications (PWAs)?

<!-- Update here: /questions/what-are-progressive-web-applications-pwas/en-US.mdx -->

Progressive Web Applications (PWAs) are web applications enhanced with capabilities such as installation, offline behavior, background work, and notifications. Which capabilities are available—and the exact installation criteria—vary by browser and operating system. A web app manifest supplies installation metadata, service workers commonly provide offline and push behavior, and powerful features require a secure context.

<!-- Update here: /questions/what-are-progressive-web-applications-pwas/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-progressive-web-applications-pwas/en-US.mdx)

<br>

### What are modules and why are they useful?

<!-- Update here: /questions/what-are-modules-and-why-are-they-useful/en-US.mdx -->

Modules are reusable pieces of code that can be imported and exported between different files in a project. They help in organizing code, making it more maintainable and scalable. By using modules, you can avoid global namespace pollution and manage dependencies more effectively. In JavaScript, you can use `import` and `export` statements to work with modules.

```js
// myModule.js
export const myFunction = () => {
  console.log('Hello, World!');
};

// main.js
import { myFunction } from './myModule.js';
myFunction(); // Outputs: Hello, World!
```

<!-- Update here: /questions/what-are-modules-and-why-are-they-useful/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-modules-and-why-are-they-useful/en-US.mdx)

<br>

### Explain the differences between CommonJS modules and ES modules in JavaScript

<!-- Update here: /questions/explain-the-differences-between-commonjs-modules-and-es-modules/en-US.mdx -->

In JavaScript, modules are reusable pieces of code that encapsulate functionality, making it easier to manage, maintain, and structure your applications. Modules allow you to break down your code into smaller, manageable parts, each with its own scope.

**CommonJS** is an older module system that was initially designed for server-side JavaScript development with Node.js. It uses the `require()` function to load modules and the `module.exports` or `exports` object to define the exports of a module.

```js
// my-module.js
const value = 42;
module.exports = { value };

// main.js
const myModule = require('./my-module.js');
console.log(myModule.value); // 42
```

**ES Modules** (ECMAScript Modules) are the standardized module system introduced in ES6 (ECMAScript 2015). They use the `import` and `export` statements to handle module dependencies.

```js
// my-module.js
export const value = 42;

// main.js
import { value } from './my-module.js';
console.log(value); // 42
```

**CommonJS vs ES modules**

| Feature | CommonJS | ES modules |
| --- | --- | --- |
| Module Syntax | `require()` for importing `module.exports` for exporting | `import` for importing `export` for exporting |
| Environment | Primarily used in Node.js for server-side development | Designed for both browser and server-side JavaScript (Node.js) |
| Loading and linking | `require()` is synchronous | Static imports are linked before evaluation; `import()` returns a promise, and top-level `await` can make evaluation asynchronous |
| Structure | `require()` calls can be conditional | Static `import`/`export` declarations are top-level; dynamic loading uses `import()` |
| File extensions | `.js` (default) | `.mjs` or `.js` (with `type: "module"` in `package.json`) |
| Browser support | Not natively supported in browsers | Natively supported in modern browsers |
| Optimization | Limited optimization due to dynamic nature | Allows for optimizations like tree-shaking due to static structure |
| Compatibility | Widely used in existing Node.js codebases and libraries | JavaScript standard supported by browsers and modern server runtimes |

<!-- Update here: /questions/explain-the-differences-between-commonjs-modules-and-es-modules/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-differences-between-commonjs-modules-and-es-modules/en-US.mdx)

<br>

### How do you import and export modules in JavaScript?

<!-- Update here: /questions/how-do-you-import-and-export-modules-in-javascript/en-US.mdx -->

ECMAScript modules use `export` to define a module's public bindings and `import` to consume them. Named imports must match exported names; a module can also have one default export whose importer chooses the local name. Static imports are resolved before the module executes and are best for normal dependencies. Use `import()` when a dependency is genuinely conditional or should be loaded on demand.

Resolution depends on the host. Browsers need module scripts and URL-like specifiers (unless an import map is used); Node.js uses its ESM and package-resolution rules; bundlers may support additional aliases. An import working in one environment does not guarantee it resolves in another.

```js
// my-module.js
export const myFunction = () => {
  /* ... */
};
export default myFunction;
```

```js
// app.js
import defaultFunction, { myFunction } from './my-module.js';

myFunction();
defaultFunction();
```

<!-- Update here: /questions/how-do-you-import-and-export-modules-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-import-and-export-modules-in-javascript/en-US.mdx)

<br>

### What are the benefits of using a module bundler?

<!-- Update here: /questions/what-are-the-benefits-of-using-a-module-bundler/en-US.mdx -->

A module bundler builds a dependency graph and transforms application modules into deployable assets. Depending on the tool and configuration, it can transpile syntax, process CSS and images, split code by route or feature, remove code proven unused, hash assets for caching, and support development features such as hot module replacement. Combining files is a tradeoff rather than an automatic speedup: modern HTTP supports efficient parallel requests, while overly large bundles delay download and execution.

<!-- Update here: /questions/what-are-the-benefits-of-using-a-module-bundler/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-benefits-of-using-a-module-bundler/en-US.mdx)

<br>

### Explain the concept of tree shaking in module bundling

<!-- Update here: /questions/explain-the-concept-of-tree-shaking-in-module-bundling/en-US.mdx -->

Tree shaking is a bundler optimization that uses static module structure plus side-effect analysis to omit code proven unreachable from the bundle's entry points. ES module `import`/`export` syntax makes this analysis possible, but it does not guarantee removal: top-level side effects, dynamic access, package metadata, transpilation, and bundler configuration all affect the result. Verify the production bundle rather than assuming every unused export disappears.

<!-- Update here: /questions/explain-the-concept-of-tree-shaking-in-module-bundling/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-tree-shaking-in-module-bundling/en-US.mdx)

<br>

### What are the metadata fields of a module?

<!-- Update here: /questions/what-are-the-metadata-fields-of-a-module/en-US.mdx -->

For an npm package, `package.json` metadata describes identity (`name`, `version`), discovery and ownership (`description`, `keywords`, `repository`, `bugs`, `license`, `author`), runtime contract (`type`, `main`, `exports`, `imports`, `types`, `files`, `bin`, `engines`), dependencies, and scripts. Not every field is standardized by JavaScript itself, and package managers, Node.js, TypeScript, and bundlers consume different fields.

The most consequential fields are often `exports`, `type`, dependency categories, and `files`: mistakes there can break consumers or publish unintended files. Validate the packed artifact in both ESM/CommonJS environments that the package claims to support.

<!-- Update here: /questions/what-are-the-metadata-fields-of-a-module/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-metadata-fields-of-a-module/en-US.mdx)

<br>

### What do you think of CommonJS vs ESM?

<!-- Update here: /questions/what-do-you-think-of-amd-vs-commonjs/en-US.mdx -->

ECMAScript modules (ESM) are the JavaScript standard and the best default for new code intended for browsers, Node.js, or bundlers. Their static `import` / `export` structure provides live bindings and enables ahead-of-time dependency analysis; dynamic `import()` and top-level `await` cover asynchronous loading needs. CommonJS (CJS) is Node.js's older `require()` / `module.exports` system and remains important in existing packages and applications.

Interop is runtime- and version-specific. In current Node.js, ESM can import CommonJS, while `require()` can load only eligible synchronous ESM graphs without top-level `await`. Define the package format explicitly with file extensions, `package.json` `type`, and `exports`, then test the packed artifact. AMD is now mainly historical or a legacy-maintenance concern.

<!-- Update here: /questions/what-do-you-think-of-amd-vs-commonjs/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-do-you-think-of-amd-vs-commonjs/en-US.mdx)

<br>

### What are the different types of errors in JavaScript?

<!-- Update here: /questions/what-are-the-different-types-of-errors-in-javascript/en-US.mdx -->

Errors can be classified by when they appear—parse-time syntax errors, runtime exceptions, and logical errors that produce the wrong result. JavaScript also provides built-in exception classes such as `SyntaxError`, `ReferenceError`, `TypeError`, `RangeError`, `URIError`, and `AggregateError`. The class describes the failure category; application code can define domain-specific subclasses.

Handle only errors you can recover from or translate at that boundary. Preserve unexpected errors and their causes, and use tests and debugging tools for logical errors that do not throw.

<!-- Update here: /questions/what-are-the-different-types-of-errors-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-different-types-of-errors-in-javascript/en-US.mdx)

<br>

### How do you handle errors using `try...catch` blocks?

<!-- Update here: /questions/how-do-you-handle-errors-using-trycatch-blocks/en-US.mdx -->

To handle errors using `try...catch` blocks, you wrap the code that might throw an error inside a `try` block. If an error occurs, the control is transferred to the `catch` block where you can handle the error. Optionally, you can use a `finally` block to execute code regardless of whether an error occurred or not.

```js
try {
  // Code that may throw an error
} catch (error) {
  // Handle the error
} finally {
  // Code that will run regardless of an error
}
```

<!-- Update here: /questions/how-do-you-handle-errors-using-trycatch-blocks/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-handle-errors-using-trycatch-blocks/en-US.mdx)

<br>

### What is the purpose of the `finally` block?

<!-- Update here: /questions/what-is-the-purpose-of-the-finally-block/en-US.mdx -->

A `finally` block runs as control leaves its associated `try`/`catch`, whether that happens normally or through `return`, `throw`, `break`, or `continue`, making it useful for deterministic cleanup. Avoid returning or throwing from `finally`, because its completion overrides an earlier return value or error.

```js
try {
  // Code that may throw an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code that will always run
}
```

<!-- Update here: /questions/what-is-the-purpose-of-the-finally-block/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-purpose-of-the-finally-block/en-US.mdx)

<br>

### How can you create custom error objects?

<!-- Update here: /questions/how-can-you-create-custom-error-objects/en-US.mdx -->

Extend `Error` when callers need to distinguish a domain failure from other exceptions or inspect structured context. Call `super(message, options)`, give the class a useful `name`, and add stable properties such as a machine-readable `code`. Preserve an underlying error with the standard `cause` option instead of replacing its diagnostic context.

```js live
class ValidationError extends Error {
  constructor(message, { field, cause } = {}) {
    super(message, { cause });
    this.name = 'ValidationError';
    this.code = 'INVALID_INPUT';
    this.field = field;
  }
}

try {
  throw new ValidationError('Email is invalid', { field: 'email' });
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(error.field); // email
  } else {
    throw error;
  }
}
```

<!-- Update here: /questions/how-can-you-create-custom-error-objects/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-can-you-create-custom-error-objects/en-US.mdx)

<br>

### Explain the concept of error propagation in JavaScript

<!-- Update here: /questions/explain-the-concept-of-error-propagation-in-javascript/en-US.mdx -->

Synchronous exceptions propagate up the current call stack until a matching `catch` handles them. Promise rejections propagate through the returned Promise chain until a rejection handler handles them. A `try...catch` around code that merely schedules a timer or callback cannot catch an exception thrown later on a different stack; the asynchronous API must report the failure through a Promise, error-first callback, or its own error event.

```js live
function a() {
  throw new Error('An error occurred');
}

function b() {
  a();
}

try {
  b();
} catch (e) {
  console.error(e.message); // Outputs: An error occurred
}
```

<!-- Update here: /questions/explain-the-concept-of-error-propagation-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-error-propagation-in-javascript/en-US.mdx)

<br>

### What is currying and how does it work?

<!-- Update here: /questions/what-is-currying-and-how-does-it-work/en-US.mdx -->

Currying is a technique in functional programming where a function that takes multiple arguments is transformed into a series of functions that each take a single argument. This allows for partial application of functions. For example, a function `f(a, b, c)` can be curried into `f(a)(b)(c)`. Here's a simple example in JavaScript:

```js live
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

const addOne = add(1);
console.log(addOne); // function object

const addOneAndTwo = addOne(2);
console.log(addOneAndTwo); // function object

const result = addOneAndTwo(3);
console.log(result); // Output: 6
```

<!-- Update here: /questions/what-is-currying-and-how-does-it-work/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-currying-and-how-does-it-work/en-US.mdx)

<br>

### Explain the concept of partial application

<!-- Update here: /questions/explain-the-concept-of-partial-application/en-US.mdx -->

Partial application is a technique in functional programming where a function is applied to some of its arguments, producing a new function that takes the remaining arguments. This allows you to create more specific functions from general ones. For example, if you have a function `add(a, b)`, you can partially apply it to create a new function `add5` that always adds 5 to its argument.

```js live
function add(a, b) {
  return a + b;
}

const add5 = add.bind(null, 5);
console.log(add5(10)); // Outputs 15
```

<!-- Update here: /questions/explain-the-concept-of-partial-application/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-partial-application/en-US.mdx)

<br>

### What are the benefits of using currying and partial application?

<!-- Update here: /questions/what-are-the-benefits-of-using-currying-and-partial-application/en-US.mdx -->

Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument. This allows for more flexible and reusable code. Partial application, on the other hand, allows you to fix a few arguments of a function and generate a new function. Both techniques help in creating more modular and maintainable code.

<!-- Update here: /questions/what-are-the-benefits-of-using-currying-and-partial-application/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-benefits-of-using-currying-and-partial-application/en-US.mdx)

<br>

### Provide some examples of how currying and partial application can be used

<!-- Update here: /questions/provide-some-examples-of-how-currying-and-partial-application-can-be-used/en-US.mdx -->

Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument. Partial application fixes a few arguments of a function, producing another function with a smaller number of arguments. For example, currying a function `add(a, b)` would look like `add(a)(b)`, while partial application of `add(2, b)` would fix the first argument to 2, resulting in a function that only needs the second argument.

Currying example:

```js live
const add = (a) => (b) => a + b;
const addTwo = add(2);
console.log(addTwo(3)); // 5
```

Partial application example:

```js live
const add = (a, b) => a + b;
const addTwo = add.bind(null, 2);
console.log(addTwo(3)); // 5
```

<!-- Update here: /questions/provide-some-examples-of-how-currying-and-partial-application-can-be-used/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/provide-some-examples-of-how-currying-and-partial-application-can-be-used/en-US.mdx)

<br>

### How do currying and partial application differ from each other?

<!-- Update here: /questions/how-do-currying-and-partial-application-differ-from-each-other/en-US.mdx -->

Currying transforms a function with multiple arguments into a sequence of functions, each taking a single argument. For example, a function `f(a, b, c)` becomes `f(a)(b)(c)`. Partial application, on the other hand, fixes a few arguments of a function and produces another function with a smaller number of arguments. For example, if you partially apply `f(a, b, c)` with `a`, you get a new function `f'(b, c)`.

<!-- Update here: /questions/how-do-currying-and-partial-application-differ-from-each-other/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-currying-and-partial-application-differ-from-each-other/en-US.mdx)

<br>

### What are `Set`s and `Map`s and how are they used?

<!-- Update here: /questions/what-are-sets-and-maps-and-how-are-they-used/en-US.mdx -->

`Set`s and `Map`s are built-in JavaScript objects that help manage collections of data. A `Set` is a collection of unique values, while a `Map` is a collection of key-value pairs where keys can be of any type. `Set`s are useful for storing unique items, and `Map`s are useful for associating values with keys.

```js live
// Set example
let mySet = new Set([1, 2, 3, 3]); // Set(3) {1, 2, 3} (duplicate values are not added)
mySet.add(4);
console.log(mySet); // Set(4) {1, 2, 3, 4}

// Map example
let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');
console.log(myMap.get('key1')); // 'value1'
```

<!-- Update here: /questions/what-are-sets-and-maps-and-how-are-they-used/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-sets-and-maps-and-how-are-they-used/en-US.mdx)

<br>

### What are the differences between `Map`/`Set` and `WeakMap`/`WeakSet` in JavaScript?

<!-- Update here: /questions/what-are-the-differences-between-map-set-and-weakmap-weakset/en-US.mdx -->

The primary difference between `Map`/`Set` and `WeakMap`/`WeakSet` in JavaScript lies in how they handle keys. Here's a breakdown:

**`Map` vs. `WeakMap`**

`Map`s allow any JavaScript value as a key and hold their keys and values strongly while the `Map` remains reachable. They are suitable for general-purpose key-value storage and are iterable in insertion order.

`WeakMap`s allow objects and non-registered symbols as keys. These keys are held weakly: an entry does not by itself keep its key reachable. `WeakMap`s are useful for associating metadata with a key without controlling that key's lifetime. Garbage collection timing is not observable or guaranteed.

- Caching data based on objects without preventing garbage collection of the objects themselves.
- Storing private data associated with DOM nodes without affecting their lifecycle.

**`Set` vs. `WeakSet`**

Similar to `Map`, `Set`s allow any data type as elements. The elements within a `Set` must be unique. `Set`s are useful for storing unique values and checking for membership efficiently. Common use cases include removing duplicates from arrays or keeping track of completed tasks.

`WeakSet` allows objects and non-registered symbols as elements. Like `WeakMap` keys, they are held weakly. `WeakSet`s are useful when membership should not keep an object alive.

- Tracking DOM nodes that have been interacted with without affecting their memory management.
- Implementing custom object weak references for specific use cases.

**Here's a table summarizing the key differences:**

| Feature | Map | WeakMap | Set | WeakSet |
| --- | --- | --- | --- | --- |
| Key Types | Any JavaScript value | Objects and non-registered symbols | Any JavaScript value (unique) | Objects and non-registered symbols (unique) |
| References | Strong keys and values | Weak keys; values are associated with the key's lifetime | Strong elements | Weak elements |
| Use Cases | General-purpose key-value storage | Caching, private DOM node data | Removing duplicates, membership checks | Object weak references, custom use cases |

**Choosing between them**

- Use `Map` and `Set` for most scenarios where you need to store key-value pairs or unique elements and want to maintain references to both the keys/elements and the values.
- Use `WeakMap` and `WeakSet` when membership should not keep an object or non-registered symbol alive. They are intentionally non-iterable, so use `Map` or `Set` if entries must be listed or counted.

<!-- Update here: /questions/what-are-the-differences-between-map-set-and-weakmap-weakset/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-differences-between-map-set-and-weakmap-weakset/en-US.mdx)

<br>

### How do you convert a `Set` to an array in JavaScript?

<!-- Update here: /questions/how-do-you-convert-a-set-to-an-array-in-javascript/en-US.mdx -->

To convert a `Set` to an array in JavaScript, you can use the `Array.from()` method or the spread operator. For example:

```js live
const mySet = new Set([1, 2, 3]);
const myArray = Array.from(mySet);
// OR const myArray = [...mySet];

console.log(myArray); // Output: [1, 2, 3]
```

<!-- Update here: /questions/how-do-you-convert-a-set-to-an-array-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-convert-a-set-to-an-array-in-javascript/en-US.mdx)

<br>

### What is the difference between a `Map` object and a plain object in JavaScript?

<!-- Update here: /questions/what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript/en-US.mdx -->

Both `Map` objects and plain objects in JavaScript can store key-value pairs, but they have several key differences:

| Feature | `Map` | Plain object |
| --- | --- | --- |
| Key type | Any data type | String (or Symbol) |
| Key order | Insertion order | Defined own-key order; integer-index keys come first, then other strings by insertion order, then symbols |
| Size property | Yes (`size`) | None |
| Iteration | `forEach`, `keys()`, `values()`, `entries()` | `for...in`, `Object.keys()`, etc. |
| Prototype interaction | User keys do not collide with `Map.prototype` methods | Object literals inherit from `Object.prototype` unless created with a null prototype |
| Performance | Designed for frequent keyed additions/removals; measure for the actual workload | Often convenient for fixed records; measure for the actual workload |
| JSON | Entries need an explicit conversion or replacer | Own enumerable string-keyed data is handled by `JSON.stringify()`, subject to JSON's normal limitations |

<!-- Update here: /questions/what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript/en-US.mdx)

<br>

### How do `Set`s and `Map`s handle equality checks for objects?

<!-- Update here: /questions/how-do-sets-and-maps-handle-equality-checks-for-objects/en-US.mdx -->

`Set`s and `Map`s in JavaScript handle equality checks for objects based on identity, not deep equality. Two object values are considered equal only when they refer to the same object. For example, if you add two different object literals with the same properties to a `Set`, they will be treated as distinct entries.

```js live
const set = new Set();
const obj1 = { a: 1 };
const obj2 = { a: 1 };

set.add(obj1);
set.add(obj2);

console.log(set.size); // Output: 2
```

<!-- Update here: /questions/how-do-sets-and-maps-handle-equality-checks-for-objects/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-sets-and-maps-handle-equality-checks-for-objects/en-US.mdx)

<br>

### What are some common performance bottlenecks in JavaScript applications?

<!-- Update here: /questions/what-are-some-common-performance-bottlenecks-in-javascript-applications/en-US.mdx -->

Common bottlenecks include too much JavaScript during startup, long main-thread tasks, repeated layout work, excessive rendering, slow or duplicated network requests, and memory retained by long-lived references. Do not optimize from a checklist: reproduce the slow user action, record it with browser or Node.js profiling tools, fix the dominant cost, and measure again under the same conditions.

<!-- Update here: /questions/what-are-some-common-performance-bottlenecks-in-javascript-applications/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-some-common-performance-bottlenecks-in-javascript-applications/en-US.mdx)

<br>

### Explain the concept of debouncing and throttling

<!-- Update here: /questions/explain-the-concept-of-debouncing-and-throttling/en-US.mdx -->

Debouncing and throttling are techniques used to control the rate at which a function is executed. Debouncing ensures that a function is only called after a specified delay has passed since the last time it was invoked. Throttling ensures that a function is called at most once in a specified time interval.

Debouncing delays the execution of a function until a certain amount of time has passed since it was last called. This is useful for scenarios like search input fields where you want to wait until the user has stopped typing before making an API call.

```js live
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

const debouncedHello = debounce(() => console.log('Hello world!'), 2000);
debouncedHello(); // Prints 'Hello world!' after 2 seconds
```

Throttling ensures that a function is called at most once in a specified time interval. This is useful for scenarios like window resizing or scrolling where you want to limit the number of times a function is called.

```js live
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

const handleResize = throttle(() => {
  // Update element positions
  console.log('Window resized at', new Date().toLocaleTimeString());
}, 2000);

// Simulate rapid calls to handleResize every 100ms
let callCount = 0;
const intervalId = setInterval(() => {
  handleResize();
  if (++callCount >= 30) clearInterval(intervalId);
}, 100);
// 'Window resized' is logged only every 2 seconds due to throttling
```

<!-- Update here: /questions/explain-the-concept-of-debouncing-and-throttling/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-debouncing-and-throttling/en-US.mdx)

<br>

### How can you optimize DOM manipulation for better performance?

<!-- Update here: /questions/how-can-you-optimize-dom-manipulation-for-better-performance/en-US.mdx -->

Measure with browser performance tools, then reduce unnecessary DOM work, batch related mutations, keep DOM trees manageable, and avoid forced synchronous layout by grouping reads before writes. Build detached subtrees before inserting them, and use `requestAnimationFrame()` for visual updates. A framework or virtual DOM changes the programming model and may batch work, but it is not an automatic performance optimization.

<!-- Update here: /questions/how-can-you-optimize-dom-manipulation-for-better-performance/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-can-you-optimize-dom-manipulation-for-better-performance/en-US.mdx)

<br>

### What are some techniques for reducing reflows and repaints?

<!-- Update here: /questions/what-are-some-techniques-for-reducing-reflows-and-repaints/en-US.mdx -->

Measure rendering work first. Keep the DOM and affected layout area small, batch related mutations, group layout reads before writes, and schedule visual changes with `requestAnimationFrame()`. Prefer animating `transform` and `opacity` when appropriate. Use `will-change` only shortly before a known expensive change and remove it afterward; leaving it broadly enabled can waste memory and make performance worse.

<!-- Update here: /questions/what-are-some-techniques-for-reducing-reflows-and-repaints/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-some-techniques-for-reducing-reflows-and-repaints/en-US.mdx)

<br>

### Explain the concept of lazy loading and how it can improve performance

<!-- Update here: /questions/explain-the-concept-of-lazy-loading-and-how-it-can-improve-performance/en-US.mdx -->

Lazy loading defers non-critical resources until they are likely to be needed, reducing initial network and processing work. Use native `loading="lazy"` for below-the-fold images and iframes, dynamic `import()` for optional JavaScript, and `IntersectionObserver` when custom preloading behavior is required. Do not lazy-load a page's hero or other likely Largest Contentful Paint image; deferring critical content can make performance worse.

```html
<img
  src="product-800.jpg"
  width="800"
  height="600"
  loading="lazy"
  alt="Blue trail-running shoe" />
```

<!-- Update here: /questions/explain-the-concept-of-lazy-loading-and-how-it-can-improve-performance/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-lazy-loading-and-how-it-can-improve-performance/en-US.mdx)

<br>

### What are Web Workers and how can they be used to improve performance?

<!-- Update here: /questions/what-are-web-workers-and-how-can-they-be-used-to-improve-performance/en-US.mdx -->

Web Workers run JavaScript in a background thread so CPU-heavy work does not block browser input and rendering. Create a worker, exchange messages with `postMessage()`, handle message and error events, and call `terminate()` when its owning feature is disposed. Workers cannot access the DOM, and messages normally use structured cloning; transfer large `ArrayBuffer`s when ownership can move instead of copying them.

A worker improves responsiveness, not automatically total execution time. Startup, serialization, copying, and coordination have costs, so profile the real task. Use asynchronous APIs or task chunking instead when the work is mostly waiting for I/O or is too small to justify a worker.

```js
// main.js
const worker = new Worker('worker.js');
worker.postMessage('Hello, worker!');

worker.onmessage = function (event) {
  console.log('Message from worker:', event.data);
};

worker.onerror = function (event) {
  console.error('Worker failed:', event.message);
};

// Call when the feature no longer needs the worker.
function cleanup() {
  worker.terminate();
}

// worker.js
onmessage = function (event) {
  console.log('Message from main script:', event.data);
  postMessage('Hello, main script!');
};
```

<!-- Update here: /questions/what-are-web-workers-and-how-can-they-be-used-to-improve-performance/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-web-workers-and-how-can-they-be-used-to-improve-performance/en-US.mdx)

<br>

### Explain the concept of caching and how it can be used to improve performance

<!-- Update here: /questions/explain-the-concept-of-caching-and-how-it-can-be-used-to-improve-performance/en-US.mdx -->

Caching reuses a previously computed or fetched result to reduce latency, bandwidth, and server work. A cache is correct only when its key, freshness policy, and invalidation behavior match the data. For versioned static assets, long-lived HTTP caching is effective; personalized or frequently changing API data usually needs revalidation or a shorter lifetime. Service workers add offline and custom routing capabilities, but also add another cache that must be updated deliberately.

<!-- Update here: /questions/explain-the-concept-of-caching-and-how-it-can-be-used-to-improve-performance/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-caching-and-how-it-can-be-used-to-improve-performance/en-US.mdx)

<br>

### What are some tools that can be used to measure and analyze JavaScript performance?

<!-- Update here: /questions/what-are-some-tools-that-can-be-used-to-measure-and-analyze-javascript-performance/en-US.mdx -->

Start with a reproducible user-visible problem, then choose the tool that measures that layer:

- **Slow or janky interaction**: Record the interaction in the browser's Performance panel and inspect long tasks, rendering work, and call stacks.
- **Slow page load**: Use the Network panel, Lighthouse, or WebPageTest. Compare lab results with real-user data when available.
- **Growing memory use**: Use heap snapshots and allocation profiles in the Memory panel.
- **Slow Node.js code**: Capture a CPU or heap profile with the Node.js inspector.
- **One suspected hot function**: Add `performance.mark()` / `performance.measure()` instrumentation or run a carefully designed benchmark.

Measure before and after the same scenario. A microbenchmark can compare isolated snippets, but it cannot tell you whether that snippet matters to users.

<!-- Update here: /questions/what-are-some-tools-that-can-be-used-to-measure-and-analyze-javascript-performance/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-some-tools-that-can-be-used-to-measure-and-analyze-javascript-performance/en-US.mdx)

<br>

### How can you optimize network requests for better performance?

<!-- Update here: /questions/how-can-you-optimize-network-requests-for-better-performance/en-US.mdx -->

Measure real traffic, then reduce transferred bytes, avoid unnecessary or duplicate requests, cache immutable assets and revalidate changing data, compress text with Brotli or Gzip, and prioritize critical resources. Under HTTP/2 and HTTP/3, blindly merging every file can hurt caching and code splitting; bundle boundaries should balance request overhead, compression, and independent cacheability.

<!-- Update here: /questions/how-can-you-optimize-network-requests-for-better-performance/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-can-you-optimize-network-requests-for-better-performance/en-US.mdx)

<br>

### What are the different types of testing in software development?

<!-- Update here: /questions/what-are-the-different-types-of-testing-in-software-development/en-US.mdx -->

Testing can be classified by scope, purpose, and execution style; the categories overlap. Common scopes are unit, component, integration, system/end-to-end, and acceptance testing. Common purposes include regression, smoke, contract, accessibility, performance, security, and usability testing. Tests may be automated or exploratory and can run against static code, an isolated process, or a production-like system.

Choose types from the product's risks rather than trying to satisfy a universal pyramid. For an online checkout, test price rules at unit level, API/database contracts at integration level, critical purchase journeys end to end, and separately test accessibility, load behavior, and authorization.

<!-- Update here: /questions/what-are-the-different-types-of-testing-in-software-development/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-the-different-types-of-testing-in-software-development/en-US.mdx)

<br>

### Explain the difference between unit testing, integration testing, and end-to-end testing

<!-- Update here: /questions/explain-the-difference-between-unit-testing-integration-testing-and-end-to-end-testing/en-US.mdx -->

- **Unit test**: Exercises a small behavior with controlled dependencies. Fast and precise, but cannot prove that modules are wired correctly.
- **Integration test**: Exercises collaborating modules or a real boundary such as an HTTP handler plus database adapter. Catches contract and wiring defects at moderate cost.
- **End-to-end (E2E) test**: Drives a deployed or production-like system through its public UI or API. Gives confidence in critical user journeys, but is slower and more expensive to diagnose and maintain.

Use a mix based on risk. A checkout calculation deserves many unit cases, the order endpoint deserves integration coverage, and a few Playwright flows should prove that a user can complete checkout in a real browser.

<!-- Update here: /questions/explain-the-difference-between-unit-testing-integration-testing-and-end-to-end-testing/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-difference-between-unit-testing-integration-testing-and-end-to-end-testing/en-US.mdx)

<br>

### What are some popular JavaScript testing frameworks?

<!-- Update here: /questions/what-are-some-popular-javascript-testing-frameworks/en-US.mdx -->

Choose by test layer and runtime rather than popularity alone. Jest and Vitest are batteries-included choices for unit and integration tests; Mocha is a configurable runner often paired with separate assertion and mocking libraries; Jasmine is an all-in-one BDD framework. Playwright and Cypress automate real browsers for end-to-end and component tests. Node.js also ships a built-in `node:test` runner. DOM-testing libraries such as Testing Library complement a runner rather than replacing it.

<!-- Update here: /questions/what-are-some-popular-javascript-testing-frameworks/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-some-popular-javascript-testing-frameworks/en-US.mdx)

<br>

### How do you write unit tests for JavaScript code?

<!-- Update here: /questions/how-do-you-write-unit-tests-for-javascript-code/en-US.mdx -->

Choose a small behavioral unit, provide controlled inputs and dependencies, execute it, and assert its observable result or side effect. Cover representative success, boundary, and failure cases. Keep tests deterministic and independent, but do not mock every collaborator merely to make a test “unit sized”—an integration test may give more confidence when several modules form one behavior.

Vitest, Jest, Mocha with an assertion library, and Node.js's built-in test runner are current options. The runner matters less than tests that explain the contract and fail for meaningful regressions.

<!-- Update here: /questions/how-do-you-write-unit-tests-for-javascript-code/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-write-unit-tests-for-javascript-code/en-US.mdx)

<br>

### Explain the concept of test-driven development (TDD)

<!-- Update here: /questions/explain-the-concept-of-test-driven-development-tdd/en-US.mdx -->

Test-driven development (TDD) is a short feedback cycle: write one failing test for the next behavior (**red**), write the smallest implementation that passes (**green**), then improve the design while keeping the suite passing (**refactor**). It can clarify APIs and preserve regressions, but it does not guarantee correct requirements or high-quality tests. It is most useful for behavior that can be specified with fast feedback; exploratory UI, integration, performance, and operational risks may need other techniques alongside it.

<!-- Update here: /questions/explain-the-concept-of-test-driven-development-tdd/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-test-driven-development-tdd/en-US.mdx)

<br>

### What are mocks and stubs and how are they used in testing?

<!-- Update here: /questions/what-are-mocks-and-stubs-and-how-are-they-used-in-testing/en-US.mdx -->

A **stub** supplies controlled behavior, such as making a payment client return an approved response. A **spy** records calls. A **mock** often combines configured behavior with interaction expectations, although libraries use these terms differently. Use them at slow, nondeterministic, destructive, or unavailable boundaries—not to duplicate every implementation detail. Over-mocking can produce tests that pass while the real modules no longer work together.

<!-- Update here: /questions/what-are-mocks-and-stubs-and-how-are-they-used-in-testing/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-mocks-and-stubs-and-how-are-they-used-in-testing/en-US.mdx)

<br>

### How can you test asynchronous code in JavaScript?

<!-- Update here: /questions/how-can-you-test-asynchronous-code-in-javascript/en-US.mdx -->

Return or `await` the asynchronous work so the test runner knows when the test finishes. Test fulfilled and rejected paths with controlled dependencies, use fake timers for timer-driven code, and avoid real networks and arbitrary sleeps in unit tests. Restore timers, mocks, listeners, servers, and other global state after each test.

Vitest, Jest, and Mocha all support Promise-returning and `async` tests. Callback-style tests can use a `done` callback when maintaining callback APIs, but Promise-based tests are usually easier to compose and fail correctly.

<!-- Update here: /questions/how-can-you-test-asynchronous-code-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-can-you-test-asynchronous-code-in-javascript/en-US.mdx)

<br>

### What are some best practices for writing maintainable and effective tests in JavaScript?

<!-- Update here: /questions/what-are-some-best-practices-for-writing-maintainable-and-effective-tests/en-US.mdx -->

Write tests around observable behavior and important risks. Give each test a name that describes the scenario and outcome, make failures easy to diagnose, control nondeterministic boundaries, and clean up all mutated state. Use real collaborators when they are fast and deterministic; mock only boundaries where control or isolation adds value. Explicit expected values are useful documentation—avoid duplicating production logic to calculate the expected result.

<!-- Update here: /questions/what-are-some-best-practices-for-writing-maintainable-and-effective-tests/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-some-best-practices-for-writing-maintainable-and-effective-tests/en-US.mdx)

<br>

### Explain the concept of code coverage and how it can be used to assess test quality

<!-- Update here: /questions/explain-the-concept-of-code-coverage-and-how-it-can-be-used-to-assess-test-quality/en-US.mdx -->

Code coverage reports which statements, branches, functions, or lines executed during a test run. Use it as a map for finding important behavior the suite never exercised, not as a score that proves test quality. A test can execute a line without asserting the result, while a low-value file can raise the percentage without reducing product risk. Vitest, Jest, and Istanbul-based tooling can collect JavaScript coverage.

<!-- Update here: /questions/explain-the-concept-of-code-coverage-and-how-it-can-be-used-to-assess-test-quality/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-code-coverage-and-how-it-can-be-used-to-assess-test-quality/en-US.mdx)

<br>

### What are some tools that can be used for JavaScript testing?

<!-- Update here: /questions/what-are-some-tools-that-can-be-used-for-javascript-testing/en-US.mdx -->

Common choices include Jest, Vitest, Mocha, Jasmine, and Node's built-in test runner for unit or integration tests, plus Playwright and Cypress for browser and end-to-end tests. Testing Library provides user-focused query helpers on top of a runner. The right stack depends on runtime, browser coverage, framework integration, isolation needs, and CI constraints.

<!-- Update here: /questions/what-are-some-tools-that-can-be-used-for-javascript-testing/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-some-tools-that-can-be-used-for-javascript-testing/en-US.mdx)

<br>

### What are design patterns and why are they useful?

<!-- Update here: /questions/what-are-design-patterns-and-why-are-they-useful/en-US.mdx -->

Design patterns are named, reusable design approaches to recurring problems and tradeoffs. They are communication tools and starting points, not code templates or guarantees of maintainability, performance, or scale. Apply one when the problem and forces are actually present; a direct function, object, or module is often clearer than introducing pattern-shaped abstractions preemptively.

<!-- Update here: /questions/what-are-design-patterns-and-why-are-they-useful/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-design-patterns-and-why-are-they-useful/en-US.mdx)

<br>

### Explain the concept of the Singleton pattern

<!-- Update here: /questions/explain-the-concept-of-the-singleton-pattern/en-US.mdx -->

The Singleton pattern provides one shared instance within a defined scope and one access point to it. In JavaScript, an ES module export often provides this naturally because a module is evaluated once per module graph and realm. That is not “one instance for the whole system”: workers, iframes, server processes, duplicate package copies, and separately loaded bundles can each have an instance.

Use a shared instance for genuinely process- or application-scoped infrastructure such as a metrics registry or client connection pool. Avoid it for request/user state and when hidden global dependencies make tests, cleanup, or configuration harder; dependency injection is often clearer.

<!-- Update here: /questions/explain-the-concept-of-the-singleton-pattern/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-the-singleton-pattern/en-US.mdx)

<br>

### What is the Factory pattern and how is it used?

<!-- Update here: /questions/what-is-the-factory-pattern-and-how-is-it-used/en-US.mdx -->

The Factory pattern is a design pattern used to create objects without specifying the exact class of the object that will be created. It provides a way to encapsulate the instantiation logic and can be particularly useful when the creation process is complex or when the type of object to be created is determined at runtime.

For example, in JavaScript, you can use a factory function to create different types of objects:

```js live
function createAnimal(type) {
  if (type === 'dog') {
    return { sound: 'woof' };
  } else if (type === 'cat') {
    return { sound: 'meow' };
  }
}

const dog = createAnimal('dog');
const cat = createAnimal('cat');
```

<!-- Update here: /questions/what-is-the-factory-pattern-and-how-is-it-used/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-factory-pattern-and-how-is-it-used/en-US.mdx)

<br>

### Explain the Observer pattern and its use cases

<!-- Update here: /questions/explain-the-observer-pattern-and-its-use-cases/en-US.mdx -->

The Observer pattern lets a subject publish changes to subscribed observers without knowing their concrete implementations. It fits UI events, state stores, and in-process notifications where multiple consumers react to one source. A practical subscription API should return an unsubscribe function and define whether delivery is synchronous, how listener errors are handled, and what happens when listeners subscribe or unsubscribe during notification.

Use it when one-to-many notifications reduce coupling. Prefer a direct function call when there is only one known consumer or when the operation needs an immediate result; hidden event chains can make ordering and failures difficult to trace.

<!-- Update here: /questions/explain-the-observer-pattern-and-its-use-cases/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-observer-pattern-and-its-use-cases/en-US.mdx)

<br>

### What is the Module pattern and how does it help with encapsulation?

<!-- Update here: /questions/what-is-the-module-pattern-and-how-does-it-help-with-encapsulation/en-US.mdx -->

The classic Module pattern uses an IIFE and closure to expose a small public object while keeping other bindings private. It was especially useful before standardized modules. For new code, ES modules are usually the clearer default: each file has module scope and explicitly imports and exports dependencies. Closures and private class fields remain useful when you need per-instance private state rather than one module-scoped value.

```js live
var myModule = (function () {
  var privateVar = 'I am private';

  function privateMethod() {
    console.log(privateVar);
  }

  return {
    publicMethod: function () {
      privateMethod();
    },
  };
})();

myModule.publicMethod(); // Logs: I am private
```

<!-- Update here: /questions/what-is-the-module-pattern-and-how-does-it-help-with-encapsulation/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-module-pattern-and-how-does-it-help-with-encapsulation/en-US.mdx)

<br>

### Explain the concept of the Prototype pattern

<!-- Update here: /questions/explain-the-concept-of-the-prototype-pattern/en-US.mdx -->

The Prototype pattern creates an object from an existing prototype or template when construction should be configured by existing state. In JavaScript, distinguish two ideas that are often conflated:

- `Object.create(prototype)` creates an empty object whose `[[Prototype]]` delegates property lookup to `prototype`; it does **not** copy the prototype's properties.
- Cloning copies state into another object. The code must define whether nested state is shared, shallow-copied, or deep-cloned and how class invariants and external resources are handled.

Use prototype delegation to share behavior among many objects. Use cloning only when copying a configured instance is clearer and safer than calling a normal factory or constructor.

<!-- Update here: /questions/explain-the-concept-of-the-prototype-pattern/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-the-prototype-pattern/en-US.mdx)

<br>

### What is the Decorator pattern and how is it used?

<!-- Update here: /questions/what-is-the-decorator-pattern-and-how-is-it-used/en-US.mdx -->

The Decorator pattern is a structural design pattern that allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects from the same class. It is used to extend the functionalities of objects by wrapping them with additional behavior. In JavaScript, this can be achieved using higher-order functions or classes.

For example, if you have a `Car` class and you want to add features like `GPS` or `Sunroof` without modifying the `Car` class itself, you can create decorators for these features.

```js live
class Car {
  drive() {
    return 'Driving';
  }
}

class CarDecorator {
  constructor(car) {
    this.car = car;
  }

  drive() {
    return this.car.drive();
  }
}

class GPSDecorator extends CarDecorator {
  drive() {
    return `${super.drive()} with GPS`;
  }
}

const myCar = new Car();
const myCarWithGPS = new GPSDecorator(myCar);
console.log(myCarWithGPS.drive()); // "Driving with GPS"
```

<!-- Update here: /questions/what-is-the-decorator-pattern-and-how-is-it-used/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-decorator-pattern-and-how-is-it-used/en-US.mdx)

<br>

### Explain the concept of the Strategy pattern

<!-- Update here: /questions/explain-the-concept-of-the-strategy-pattern/en-US.mdx -->

The Strategy pattern defines interchangeable implementations behind the same contract, letting the caller select behavior without accumulating a large conditional. JavaScript strategies can be plain functions or objects; separate classes are not required. It is useful when multiple algorithms are real extension points, such as pricing or retry policies. Prefer a simple `if` or `switch` when there are only a few stable branches—the pattern otherwise adds indirection without useful flexibility.

```js live
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  executeStrategy(data) {
    return this.strategy.doAlgorithm(data);
  }
}

class ConcreteStrategyA {
  doAlgorithm(data) {
    // Implementation of algorithm A
    return 'Algorithm A was run on ' + data;
  }
}

class ConcreteStrategyB {
  doAlgorithm(data) {
    // Implementation of algorithm B
    return 'Algorithm B was run on ' + data;
  }
}

// Usage
const context = new Context(new ConcreteStrategyA());
context.executeStrategy('someData'); // Output: Algorithm A was run on someData
```

<!-- Update here: /questions/explain-the-concept-of-the-strategy-pattern/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-the-strategy-pattern/en-US.mdx)

<br>

### What is the Command pattern and how is it used?

<!-- Update here: /questions/what-is-the-command-pattern-and-how-is-it-used/en-US.mdx -->

The Command pattern is a behavioral design pattern that turns a request into a stand-alone object containing all information about the request. This transformation allows for parameterization of methods with different requests, queuing of requests, and logging of requests. It also supports undoable operations. In JavaScript, it can be implemented by creating command objects with `execute` and `undo` methods.

```js live
class Command {
  execute() {}
  undo() {}
}

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }
  execute() {
    this.light.on();
  }
  undo() {
    this.light.off();
  }
}

class Light {
  on() {
    console.log('Light is on');
  }
  off() {
    console.log('Light is off');
  }
}

const light = new Light();
const lightOnCommand = new LightOnCommand(light);
lightOnCommand.execute(); // Light is on
lightOnCommand.undo(); // Light is off
```

<!-- Update here: /questions/what-is-the-command-pattern-and-how-is-it-used/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-the-command-pattern-and-how-is-it-used/en-US.mdx)

<br>

### Why is extending built-in JavaScript objects not a good idea?

<!-- Update here: /questions/why-is-extending-built-in-javascript-objects-not-a-good-idea/en-US.mdx -->

Extending a built-in/native JavaScript object means adding properties/functions to its `prototype`. While this may seem like a good idea at first, it is dangerous in practice. Imagine your code uses two libraries that both extend the `Array.prototype` by adding the same `contains` method; the implementations will overwrite each other and your code will have unpredictable behavior if these two methods do not work the same way.

The only time you may want to extend a native object is when you want to create a polyfill, providing your own implementation for a method that is part of the JavaScript specification but might not exist in the user's browser due to it being an older browser.

<!-- Update here: /questions/why-is-extending-built-in-javascript-objects-not-a-good-idea/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/why-is-extending-built-in-javascript-objects-not-a-good-idea/en-US.mdx)

<br>

### What is Cross-Site Scripting (XSS) and how can you prevent it?

<!-- Update here: /questions/what-is-cross-site-scripting-xss-and-how-can-you-prevent-it/en-US.mdx -->

Cross-Site Scripting (XSS) occurs when untrusted data reaches an executable browser context and runs with a trusted site's origin. Prevent it primarily with context-aware output encoding and safe APIs such as `textContent`, framework text interpolation, and parameterized URL/attribute handling. Sanitize only when the product intentionally accepts HTML, using a maintained HTML sanitizer. Add a nonce- or hash-based Content Security Policy and Trusted Types where applicable as defense in depth; input validation alone is not an XSS defense.

<!-- Update here: /questions/what-is-cross-site-scripting-xss-and-how-can-you-prevent-it/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-cross-site-scripting-xss-and-how-can-you-prevent-it/en-US.mdx)

<br>

### Explain the concept of Cross-Site Request Forgery (CSRF) and its mitigation techniques

<!-- Update here: /questions/explain-the-concept-of-cross-site-request-forgery-csrf-and-its-mitigation-techniques/en-US.mdx -->

Cross-Site Request Forgery (CSRF) tricks a browser into sending an unwanted state-changing request with ambient credentials such as cookies. Defend with `SameSite` cookies, an unpredictable CSRF token or custom-header pattern for relevant requests, and server-side `Origin`/`Referer` or Fetch Metadata checks as additional layers. CORS alone is not a CSRF defense because simple cross-origin requests and HTML forms can still be sent.

<!-- Update here: /questions/explain-the-concept-of-cross-site-request-forgery-csrf-and-its-mitigation-techniques/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-cross-site-request-forgery-csrf-and-its-mitigation-techniques/en-US.mdx)

<br>

### How can you prevent SQL injection vulnerabilities in JavaScript applications?

<!-- Update here: /questions/how-can-you-prevent-sql-injection-vulnerabilities-in-javascript-applications/en-US.mdx -->

Keep untrusted values separate from SQL syntax by using parameterized queries or prepared statements on the server. Never build a query by concatenating request data. Validate input for business rules, but do not treat validation, escaping, an ORM, or a stored procedure as an automatic substitute for parameter binding. For SQL identifiers that cannot be parameterized, such as a requested sort column, map the request to a fixed allowlist.

```js
// Unsafe: input becomes part of the SQL program.
const sql = `SELECT * FROM users WHERE email = '${request.body.email}'`;

// Safe shape: the driver sends the value separately from the SQL text.
const result = await database.query('SELECT * FROM users WHERE email = $1', [
  request.body.email,
]);
```

<!-- Update here: /questions/how-can-you-prevent-sql-injection-vulnerabilities-in-javascript-applications/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-can-you-prevent-sql-injection-vulnerabilities-in-javascript-applications/en-US.mdx)

<br>

### What are some best practices for handling sensitive data in JavaScript?

<!-- Update here: /questions/what-are-some-best-practices-for-handling-sensitive-data-in-javascript/en-US.mdx -->

Keep secrets and unnecessary sensitive data out of browser code and Web Storage, minimize how long sensitive values remain in memory, and use HTTPS in transit. Validate input for the application's data rules, then use the defense appropriate to each sink: parameterized queries for SQL, contextual output encoding or safe DOM APIs for HTML, and allow-listed commands or APIs elsewhere. Store server-side secrets in a managed secret store or protected environment variables, and remember that any variable bundled into client JavaScript is public.

<!-- Update here: /questions/what-are-some-best-practices-for-handling-sensitive-data-in-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-some-best-practices-for-handling-sensitive-data-in-javascript/en-US.mdx)

<br>

### Explain the concept of Content Security Policy (CSP) and how it enhances security

<!-- Update here: /questions/explain-the-concept-of-content-security-policy-csp-and-how-it-enhances-security/en-US.mdx -->

Content Security Policy (CSP) is a browser-enforced defense-in-depth policy for controlling script execution, resource loading, framing, and other capabilities. A modern XSS-resistant policy typically authorizes scripts with a fresh per-response nonce or hashes rather than trusting every script at an origin. Prefer an HTTP response header; a `<meta>` policy supports only a subset of CSP and cannot provide directives such as `frame-ancestors`.

```http
Content-Security-Policy: default-src 'self'; script-src 'nonce-r4nd0m'; object-src 'none'; base-uri 'none'
```

<!-- Update here: /questions/explain-the-concept-of-content-security-policy-csp-and-how-it-enhances-security/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-content-security-policy-csp-and-how-it-enhances-security/en-US.mdx)

<br>

### What are some common security headers and their purpose?

<!-- Update here: /questions/what-are-some-common-security-headers-and-their-purpose/en-US.mdx -->

Security headers are HTTP response headers that help protect web applications from various attacks. Some common security headers include:

- `Content-Security-Policy (CSP)`: Helps mitigate cross-site scripting (XSS) and other code injection attacks by restricting allowed content sources. It is a defense-in-depth control, not a replacement for safe output handling.
- `X-Content-Type-Options`: Prevents MIME type sniffing by instructing the browser to follow the declared `Content-Type`.
- `Strict-Transport-Security (HSTS)`: Enforces secure (HTTPS) connections to the server.
- `Content-Security-Policy: frame-ancestors ...`: Controls which sites may embed the page, helping prevent clickjacking. `X-Frame-Options` is a narrower legacy fallback.
- `Referrer-Policy`: Controls how much referrer information is included with requests.
- `Permissions-Policy`: Enables or disables selected browser capabilities for the page and embedded frames.

<!-- Update here: /questions/what-are-some-common-security-headers-and-their-purpose/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-some-common-security-headers-and-their-purpose/en-US.mdx)

<br>

### How can you prevent clickjacking attacks?

<!-- Update here: /questions/how-can-you-prevent-clickjacking-attacks/en-US.mdx -->

Prevent clickjacking at the server boundary with the Content Security Policy `frame-ancestors` directive. Use `'none'` when the page must never be framed, `'self'` for same-origin embedding, or an explicit list of trusted origins. `X-Frame-Options: DENY` or `SAMEORIGIN` remains a useful fallback for older clients, but cannot express a modern multi-origin allowlist. JavaScript “frame-busting” code is not a reliable primary defense.

```http
X-Frame-Options: DENY
```

```http
Content-Security-Policy: frame-ancestors 'none'
```

<!-- Update here: /questions/how-can-you-prevent-clickjacking-attacks/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-can-you-prevent-clickjacking-attacks/en-US.mdx)

<br>

### Explain the concept of input validation and its importance in security

<!-- Update here: /questions/explain-the-concept-of-input-validation-and-its-importance-in-security/en-US.mdx -->

Input validation checks that untrusted data has the expected type, format, length, range, and business meaning. Browser validation improves feedback, but every security boundary must validate on the trusted server because clients can bypass JavaScript and submit requests directly. Prefer allowlists and explicit schemas.

Validation reduces malformed and abusive input, but it is not a universal injection defense. Continue to bind SQL parameters, encode output for its destination, sanitize intentionally allowed HTML, and enforce authorization independently.

<!-- Update here: /questions/explain-the-concept-of-input-validation-and-its-importance-in-security/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-concept-of-input-validation-and-its-importance-in-security/en-US.mdx)

<br>

### What are some tools and techniques for identifying security vulnerabilities in JavaScript code?

<!-- Update here: /questions/what-are-some-tools-and-techniques-for-identifying-security-vulnerabilities-in-javascript-code/en-US.mdx -->

Use complementary layers: threat modeling and manual review for design flaws; linters and static analysis for risky data flows and APIs; dependency and secret scanning for supply-chain exposure; authorization-focused tests; and dynamic tools such as OWASP ZAP or Burp Suite against an authorized running environment. No scanner proves an application secure. Prioritize findings by exploitability and impact, verify them manually, and retest the fix.

Do not run active scans against systems you do not own or have permission to test. Use controlled test data and avoid placing real credentials in scan configuration or reports.

<!-- Update here: /questions/what-are-some-tools-and-techniques-for-identifying-security-vulnerabilities-in-javascript-code/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-some-tools-and-techniques-for-identifying-security-vulnerabilities-in-javascript-code/en-US.mdx)

<br>

### How can you implement secure authentication and authorization in JavaScript applications?

<!-- Update here: /questions/how-can-you-implement-secure-authentication-and-authorization-in-javascript-applications/en-US.mdx -->

Use a proven identity provider or framework rather than inventing an authentication protocol. Protect credentials with HTTPS; use phishing-resistant passkeys or properly hashed passwords with MFA where appropriate; establish a short-lived server-side session or carefully validated token; and keep browser session credentials in `HttpOnly`, `Secure`, appropriately scoped cookies when possible. Enforce authorization on every server-side operation using the application's actual permission model—never rely on hidden UI or client-side role checks. Cookie-based sessions also need CSRF defenses such as `SameSite` plus a CSRF token where necessary.

<!-- Update here: /questions/how-can-you-implement-secure-authentication-and-authorization-in-javascript-applications/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-can-you-implement-secure-authentication-and-authorization-in-javascript-applications/en-US.mdx)

<br>

### Explain the same-origin policy with regards to JavaScript

<!-- Update here: /questions/explain-the-same-origin-policy-with-regards-to-javascript/en-US.mdx -->

The same-origin policy limits how code from one origin can interact with resources from another origin. An origin is the tuple of scheme, host, and port. Browsers permit many cross-origin writes and embeds, such as form submissions, links, images, and scripts, but normally prevent a page from reading a cross-origin response or another origin's DOM. CORS lets a server opt specific origins into reading a response; it is not what makes the request itself possible.

<!-- Update here: /questions/explain-the-same-origin-policy-with-regards-to-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-the-same-origin-policy-with-regards-to-javascript/en-US.mdx)

<br>

### What is `'use strict';` (strict mode) in JavaScript for?

<!-- Update here: /questions/what-is-use-strict-what-are-the-advantages-and-disadvantages-to-using-it/en-US.mdx -->

`'use strict'` is a statement used to enable strict mode to entire scripts or individual functions. Strict mode is a way to opt into a restricted variant of JavaScript.

**Advantages**

- Makes it impossible to accidentally create global variables.
- Makes assignments which would otherwise silently fail to throw an exception.
- Makes attempts to delete undeletable properties throw an exception (where before the attempt would simply have no effect).
- Requires that function parameter names be unique.
- A plain function call receives `this === undefined` instead of coercing it to the global object.
- It catches some common coding bloopers, throwing exceptions.
- It disables features that are confusing or poorly thought out.

**Disadvantages**

- Some legacy syntax and reflective features such as `with`, `arguments.callee`, and access to `function.caller` are unavailable.
- Code that depended on silent failures or implicit globals will throw and may need migration work.
- A strict-mode directive cannot be placed in a function with non-simple parameters, such as default, rest, or destructured parameters.

ES modules and class bodies are already strict. Use the directive for legacy scripts or functions that are otherwise in sloppy mode; do not add a redundant directive merely to code that is already an ES module.

<!-- Update here: /questions/what-is-use-strict-what-are-the-advantages-and-disadvantages-to-using-it/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-is-use-strict-what-are-the-advantages-and-disadvantages-to-using-it/en-US.mdx)

<br>

### What tools and techniques do you use for debugging JavaScript code?

<!-- Update here: /questions/what-tools-and-techniques-do-you-use-for-debugging-javascript-code/en-US.mdx -->

Reproduce the failure reliably, reduce it to the smallest useful scenario, form a specific hypothesis, and inspect the program at the boundary where expected and actual behavior diverge. Use breakpoints and the call stack for control flow, the Network panel for request failures, source maps for transformed code, the Performance and Memory panels for measured performance problems, and framework-specific tools only when the failure is inside that framework's state or render model.

Prefer a debugger, conditional breakpoint, or logpoint over scattering permanent `console.log()` calls. Preserve the failing input and add a regression test after finding the cause.

<!-- Update here: /questions/what-tools-and-techniques-do-you-use-for-debugging-javascript-code/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-tools-and-techniques-do-you-use-for-debugging-javascript-code/en-US.mdx)

<br>

### How does JavaScript garbage collection work?

<!-- Update here: /questions/how-does-javascript-garbage-collection-work/en-US.mdx -->

JavaScript engines automatically reclaim objects that are no longer reachable from roots such as the current call stack, global objects, and live host objects. Modern engines combine tracing collectors with optimizations such as generations, incremental work, and compaction; the exact strategy is an engine implementation detail.

**Mark-and-sweep**

The most common garbage collection algorithm used in JavaScript is the Mark-and-sweep algorithm. It operates in two phases:

- **Marking phase**: The garbage collector traverses the object graph, starting from the root objects (global variables, currently executing functions, etc.), and marks all reachable objects as "in-use".
- **Sweeping phase**: The garbage collector sweeps through memory, removing all unmarked objects, as they are considered unreachable and no longer needed.

This algorithm effectively identifies and removes objects that have become unreachable, freeing up memory for new allocations.

**Generational garbage collection**

Used by modern JavaScript engines, objects are divided into different generations based on their age. Objects start in the young generation, and those that survive several collections are promoted to the old generation. This optimization reduces the overhead of garbage collection by focusing on the younger generation, where most objects are short-lived.

Garbage collection does not prevent memory leaks: a listener, timer, closure, DOM reference, or unbounded cache can keep data reachable even when the application no longer needs it. Diagnose a suspected leak by repeating the problematic action, comparing heap snapshots, and following retaining paths. Do not try to force garbage collection in normal application code.

<!-- Update here: /questions/how-does-javascript-garbage-collection-work/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-does-javascript-garbage-collection-work/en-US.mdx)

<br>

### Explain what a single page app is and how to make one SEO-friendly

<!-- Update here: /questions/explain-what-a-single-page-app-is-and-how-to-make-one-seo-friendly/en-US.mdx -->

A single page application (SPA) performs route transitions and view updates in the browser instead of loading a new HTML document for every navigation. A purely client-rendered SPA may return only an HTML shell initially, which can delay content discovery, metadata, and meaningful paint. SPA navigation does not require client-only initial rendering: the first route can be server-rendered or pre-rendered and then hydrated for client-side navigation.

For indexable routes, return meaningful HTML and correct status codes, canonical URLs, titles, metadata, structured data, and crawlable links. HTML can be produced per request (SSR), at build time or on demand (static generation/prerendering), or through a framework-specific cached regeneration model. Streaming can improve delivery but is not itself an SEO requirement. Test the rendered output and crawler behavior for the actual search engines and link-preview clients you support.

<!-- Update here: /questions/explain-what-a-single-page-app-is-and-how-to-make-one-seo-friendly/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/explain-what-a-single-page-app-is-and-how-to-make-one-seo-friendly/en-US.mdx)

<br>

### How can you share code between JavaScript files?

<!-- Update here: /questions/how-can-you-share-code-between-files/en-US.mdx -->

Share code through modules with an explicit public API. ECMAScript modules (`export` / `import`) are the language standard and work in browsers, Node.js, and toolchains with host-specific resolution rules. CommonJS (`module.exports` / `require`) remains relevant to existing Node.js code and packages; do not mix the two formats without checking the runtime's interoperability rules.

```js
// file1.js
export function greet() {
  console.log('Hello, world!');
}

// file2.js
import { greet } from './file1.js';
greet();
```

Alternatively, in Node.js, you can use `module.exports` and `require`:

```js
// file1.js
module.exports = function greet() {
  console.log('Hello, world!');
};

// file2.js
const greet = require('./file1.js');
greet();
```

<!-- Update here: /questions/how-can-you-share-code-between-files/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-can-you-share-code-between-files/en-US.mdx)

<br>

### How do you organize your code?

<!-- Update here: /questions/how-do-you-organize-your-code-module-pattern-classical-inheritance/en-US.mdx -->

Organize code around product capabilities and dependency boundaries, not one universal folder template. Give each module a small public API, keep volatile infrastructure behind adapters, colocate code that changes together, and make dependency direction explicit. Prefer composition and plain functions/objects; use classes and inheritance only when an actual subtype relationship and shared contract make them clearer.

Start simple and refactor when change patterns reveal a boundary. Deep “controllers/services/utils/helpers” layers can scatter one feature across the repository just as easily as one giant file can couple everything together.

<!-- Update here: /questions/how-do-you-organize-your-code-module-pattern-classical-inheritance/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/how-do-you-organize-your-code-module-pattern-classical-inheritance/en-US.mdx)

<br>

### What are some of the advantages and disadvantages of using TypeScript and compile-to-JavaScript languages

<!-- Update here: /questions/what-are-some-of-the-advantages-disadvantages-of-writing-javascript-code-in-a-language-that-compiles-to-javascript/en-US.mdx -->

Compile-to-JavaScript languages can add static types, different syntax, stronger domain modeling, and tool-supported refactoring while still running in JavaScript environments. The tradeoffs are another compiler and configuration surface, source-map and debugging complexity, interoperability constraints, generated-output size or semantics, ecosystem fit, and a language-specific learning cost.

TypeScript is the common incremental choice because it is a typed superset of JavaScript and its types are erased. JSDoc-typed JavaScript is an alternative when a project wants type checking without changing source syntax or emitting compiled files. Languages such as ReScript, Elm, ClojureScript, and PureScript make larger semantic and ecosystem tradeoffs and should be chosen deliberately.

There is no universal runtime performance advantage or penalty. Inspect the emitted JavaScript and measure the deployed application, especially when downlevel transforms, runtime helpers, or a language-specific runtime are involved.

<!-- Update here: /questions/what-are-some-of-the-advantages-disadvantages-of-writing-javascript-code-in-a-language-that-compiles-to-javascript/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/what-are-some-of-the-advantages-disadvantages-of-writing-javascript-code-in-a-language-that-compiles-to-javascript/en-US.mdx)

<br>

### When would you use `document.write()`?

<!-- Update here: /questions/when-would-you-use-document-write/en-US.mdx -->

Almost never in new application code. During HTML parsing, `document.write()` injects markup into the input stream; after the document has loaded, it can implicitly call `document.open()` and replace the page. Its behavior in deferred or asynchronous scripts is problematic, it is an injection sink for untrusted strings, and browsers may intervene in slow-network cases.

You may encounter it in legacy scripts or tightly controlled parser-time snippets. Replace it with normal HTML, DOM creation methods, or explicit script loading. Use the console and debugger—not `document.write()`—for debugging.

<!-- Update here: /questions/when-would-you-use-document-write/en-US.mdx -->

<br>
    
[Back to top ↑](#table-of-contents-all-questions) &nbsp;&nbsp;/&nbsp;&nbsp; [✏️ Edit answer](https://github.com/yangshun/top-javascript-interview-questions/edit/main/questions/when-would-you-use-document-write/en-US.mdx)

<br>


<!-- QUESTIONS:ALL:END -->

## Questions by Difficulty

JavaScript interview questions categorized by difficulty.

### Basic-level JavaScript Interviews Questions

<!-- QUESTIONS:BASIC:START -->

1. [Explain the concept of "hoisting" in JavaScript](#explain-the-concept-of-hoisting-in-javascript)
2. [What are the differences between JavaScript variables created using `let`, `var` or `const`?](#what-are-the-differences-between-javascript-variables-created-using-let-var-or-const)
3. [What is the difference between `==` and `===` in JavaScript?](#what-is-the-difference-between--and--in-javascript)
4. [What is the event loop in JavaScript runtimes?](#what-is-the-event-loop-in-javascript-runtimes)
5. [Explain event delegation in JavaScript](#explain-event-delegation-in-javascript)
6. [Explain how `this` works in JavaScript](#explain-how-this-works-in-javascript)
7. [Describe the difference between a cookie, `sessionStorage` and `localStorage` in browsers](#describe-the-difference-between-a-cookie-sessionstorage-and-localstorage-in-browsers)
8. [Describe the difference between `<script>`, `<script async>` and `<script defer>`](#describe-the-difference-between-script-script-async-and-script-defer)
9. [What's the difference between a JavaScript variable that is: `null`, `undefined` or undeclared?](#whats-the-difference-between-a-javascript-variable-that-is-null-undefined-or-undeclared)
10. [What's the difference between `.call` and `.apply` in JavaScript?](#whats-the-difference-between-call-and-apply-in-javascript)
11. [Explain `Function.prototype.bind` in JavaScript](#explain-functionprototypebind-in-javascript)
12. [What advantage is there for using the JavaScript arrow syntax for a method in a constructor?](#what-advantage-is-there-for-using-the-javascript-arrow-syntax-for-a-method-in-a-constructor)
13. [Explain how prototypal inheritance works in JavaScript](#explain-how-prototypal-inheritance-works-in-javascript)
14. [Difference between: `function Person(){}`, `const person = Person()`, and `const person = new Person()` in JavaScript?](#difference-between-function-person-const-person--person-and-const-person--new-person-in-javascript)
15. [Explain the differences on the usage of `foo` between `function foo() {}` and `var foo = function() {}` in JavaScript](#explain-the-differences-on-the-usage-of-foo-between-function-foo--and-var-foo--function--in-javascript)
16. [What are the various ways to create objects in JavaScript?](#what-are-the-various-ways-to-create-objects-in-javascript)
17. [What is the definition of a higher-order function in JavaScript?](#what-is-the-definition-of-a-higher-order-function-in-javascript)
18. [What are the differences between JavaScript ES2015 classes and ES5 function constructors?](#what-are-the-differences-between-javascript-es2015-classes-and-es5-function-constructors)
19. [Describe event bubbling in JavaScript and browsers](#describe-event-bubbling-in-javascript-and-browsers)
20. [Describe event capturing in JavaScript and browsers](#describe-event-capturing-in-javascript-and-browsers)
21. [What is the difference between `mouseenter` and `mouseover` event in JavaScript and browsers?](#what-is-the-difference-between-mouseenter-and-mouseover-event-in-javascript-and-browsers)
22. [Explain the difference between synchronous and asynchronous functions in JavaScript](#explain-the-difference-between-synchronous-and-asynchronous-functions-in-javascript)
23. [Explain AJAX in as much detail as possible](#explain-ajax-in-as-much-detail-as-possible)
24. [What are the advantages and disadvantages of using AJAX?](#what-are-the-advantages-and-disadvantages-of-using-ajax)
25. [What are the differences between `XMLHttpRequest` and `fetch()` in JavaScript and browsers?](#what-are-the-differences-between-xmlhttprequest-and-fetch-in-javascript-and-browsers)
26. [What are the various data types in JavaScript?](#what-are-the-various-data-types-in-javascript)
27. [What language constructs do you use for iterating over object properties and array items in JavaScript?](#what-language-constructs-do-you-use-for-iterating-over-object-properties-and-array-items-in-javascript)
28. [What are the benefits of using spread syntax in JavaScript and how is it different from rest syntax?](#what-are-the-benefits-of-using-spread-syntax-in-javascript-and-how-is-it-different-from-rest-syntax)
29. [What is the difference between a `Map` object and a plain object in JavaScript?](#what-is-the-difference-between-a-map-object-and-a-plain-object-in-javascript)
30. [What are the differences between `Map`/`Set` and `WeakMap`/`WeakSet` in JavaScript?](#what-are-the-differences-between-mapset-and-weakmapweakset-in-javascript)
31. [Can you offer a use case for the new arrow => function syntax?](#can-you-offer-a-use-case-for-the-new-arrow--function-syntax)
32. [Explain the concept of a callback function in asynchronous operations](#explain-the-concept-of-a-callback-function-in-asynchronous-operations)
33. [Explain the concept of caching and how it can be used to improve performance](#explain-the-concept-of-caching-and-how-it-can-be-used-to-improve-performance)
34. [Explain the concept of debouncing and throttling](#explain-the-concept-of-debouncing-and-throttling)
35. [Explain the concept of destructuring assignment for objects and arrays](#explain-the-concept-of-destructuring-assignment-for-objects-and-arrays)
36. [Explain the concept of hoisting with regards to functions](#explain-the-concept-of-hoisting-with-regards-to-functions)
37. [Explain the concept of inheritance in ES2015 classes](#explain-the-concept-of-inheritance-in-es2015-classes)
38. [Explain the concept of lazy loading and how it can improve performance](#explain-the-concept-of-lazy-loading-and-how-it-can-improve-performance)
39. [Explain the concept of lexical scoping](#explain-the-concept-of-lexical-scoping)
40. [Explain the concept of scope in JavaScript](#explain-the-concept-of-scope-in-javascript)
41. [Explain the concept of the Prototype pattern](#explain-the-concept-of-the-prototype-pattern)
42. [Explain the concept of the Singleton pattern](#explain-the-concept-of-the-singleton-pattern)
43. [Explain the concept of the spread operator and its uses](#explain-the-concept-of-the-spread-operator-and-its-uses)
44. [Explain the concept of `this` binding in event handlers](#explain-the-concept-of-this-binding-in-event-handlers)
45. [Explain the difference between classical inheritance and prototypal inheritance](#explain-the-difference-between-classical-inheritance-and-prototypal-inheritance)
46. [Explain the difference between `document.querySelector()` and `document.getElementById()`](#explain-the-difference-between-documentqueryselector-and-documentgetelementbyid)
47. [Explain the difference between dot notation and bracket notation for accessing object properties](#explain-the-difference-between-dot-notation-and-bracket-notation-for-accessing-object-properties)
48. [Explain the difference between global scope, function scope, and block scope](#explain-the-difference-between-global-scope-function-scope-and-block-scope)
49. [Explain the difference between shallow copy and deep copy](#explain-the-difference-between-shallow-copy-and-deep-copy)
50. [Explain the difference in hoisting between `var`, `let`, and `const`](#explain-the-difference-in-hoisting-between-var-let-and-const)
51. [How can closures be used to create private variables?](#how-can-closures-be-used-to-create-private-variables)
52. [How can you avoid problems related to hoisting?](#how-can-you-avoid-problems-related-to-hoisting)
53. [How can you share code between JavaScript files?](#how-can-you-share-code-between-javascript-files)
54. [How do `Set`s and `Map`s handle equality checks for objects?](#how-do-sets-and-maps-handle-equality-checks-for-objects)
55. [How do you access the index of an element in an array during iteration?](#how-do-you-access-the-index-of-an-element-in-an-array-during-iteration)
56. [How do you add, remove, and modify HTML elements using JavaScript?](#how-do-you-add-remove-and-modify-html-elements-using-javascript)
57. [How do you add, remove, and update elements in an array?](#how-do-you-add-remove-and-update-elements-in-an-array)
58. [How do you check if an object has a specific property?](#how-do-you-check-if-an-object-has-a-specific-property)
59. [How do you check the data type of a variable?](#how-do-you-check-the-data-type-of-a-variable)
60. [How do you convert a `Set` to an array in JavaScript?](#how-do-you-convert-a-set-to-an-array-in-javascript)
61. [How do you convert a string to a number in JavaScript?](#how-do-you-convert-a-string-to-a-number-in-javascript)
62. [How do you create a constructor function?](#how-do-you-create-a-constructor-function)
63. [How do you get the query string values of the current page in JavaScript?](#how-do-you-get-the-query-string-values-of-the-current-page-in-javascript)
64. [How do you handle errors in asynchronous operations?](#how-do-you-handle-errors-in-asynchronous-operations)
65. [How do you handle errors using `try...catch` blocks?](#how-do-you-handle-errors-using-trycatch-blocks)
66. [How do you import and export modules in JavaScript?](#how-do-you-import-and-export-modules-in-javascript)
67. [How do you make an HTTP request using the Fetch API?](#how-do-you-make-an-http-request-using-the-fetch-api)
68. [How do you manipulate CSS styles using JavaScript?](#how-do-you-manipulate-css-styles-using-javascript)
69. [How do you prevent the default behavior of an event?](#how-do-you-prevent-the-default-behavior-of-an-event)
70. [How do you redirect to a new page in JavaScript?](#how-do-you-redirect-to-a-new-page-in-javascript)
71. [How do you reliably determine whether an object is empty?](#how-do-you-reliably-determine-whether-an-object-is-empty)
72. [How do you use `window.history` API?](#how-do-you-use-windowhistory-api)
73. [Provide some examples of how currying and partial application can be used](#provide-some-examples-of-how-currying-and-partial-application-can-be-used)
74. [What are callback functions and how are they used?](#what-are-callback-functions-and-how-are-they-used)
75. [What are default parameters and how are they used?](#what-are-default-parameters-and-how-are-they-used)
76. [What are design patterns and why are they useful?](#what-are-design-patterns-and-why-are-they-useful)
77. [What are event listeners and how are they used?](#what-are-event-listeners-and-how-are-they-used)
78. [What are modules and why are they useful?](#what-are-modules-and-why-are-they-useful)
79. [What are Promises and how do they work?](#what-are-promises-and-how-do-they-work)
80. [What are rest parameters and how are they used?](#what-are-rest-parameters-and-how-are-they-used)
81. [What are `Set`s and `Map`s and how are they used?](#what-are-sets-and-maps-and-how-are-they-used)
82. [What are some popular JavaScript testing frameworks?](#what-are-some-popular-javascript-testing-frameworks)
83. [What are some tools that can be used for JavaScript testing?](#what-are-some-tools-that-can-be-used-for-javascript-testing)
84. [What are template literals and how are they used?](#what-are-template-literals-and-how-are-they-used)
85. [What are the advantages of using the spread operator with arrays and objects?](#what-are-the-advantages-of-using-the-spread-operator-with-arrays-and-objects)
86. [What are the common pitfalls of using the `this` keyword?](#what-are-the-common-pitfalls-of-using-the-this-keyword)
87. [What are the different methods for iterating over an array?](#what-are-the-different-methods-for-iterating-over-an-array)
88. [What are the different ways to copy an object or an array?](#what-are-the-different-ways-to-copy-an-object-or-an-array)
89. [What are the different ways to make an API call in JavaScript?](#what-are-the-different-ways-to-make-an-api-call-in-javascript)
90. [What do you think of CommonJS vs ESM?](#what-do-you-think-of-commonjs-vs-esm)
91. [What is recursion and how is it used in JavaScript?](#what-is-recursion-and-how-is-it-used-in-javascript)
92. [What is the difference between a parameter and an argument?](#what-is-the-difference-between-a-parameter-and-an-argument)
93. [What is the DOM and how is it structured?](#what-is-the-dom-and-how-is-it-structured)
94. [What is the purpose of the `break` and `continue` statements?](#what-is-the-purpose-of-the-break-and-continue-statements)
95. [What is the purpose of the `finally` block?](#what-is-the-purpose-of-the-finally-block)
96. [What is the purpose of the `new` keyword?](#what-is-the-purpose-of-the-new-keyword)
97. [What is the purpose of the `switch` statement?](#what-is-the-purpose-of-the-switch-statement)
98. [What is the spread operator and how is it used?](#what-is-the-spread-operator-and-how-is-it-used)
99. [What is the ternary operator and how is it used?](#what-is-the-ternary-operator-and-how-is-it-used)
100. [What is the use of `Promise.all()`](#what-is-the-use-of-promiseall)

<!-- QUESTIONS:BASIC:END -->

### Intermediate-level JavaScript Interviews Questions

<!-- QUESTIONS:INTERMEDIATE:START -->

1. [What's a typical use case for anonymous functions in JavaScript?](#whats-a-typical-use-case-for-anonymous-functions-in-javascript)
2. [What is a closure in JavaScript, and how/why would you use one?](#what-is-a-closure-in-javascript-and-howwhy-would-you-use-one)
3. [What are the pros and cons of using Promises instead of callbacks in JavaScript?](#what-are-the-pros-and-cons-of-using-promises-instead-of-callbacks-in-javascript)
4. [How do you abort a web request using `AbortController` in JavaScript?](#how-do-you-abort-a-web-request-using-abortcontroller-in-javascript)
5. [Why is extending built-in JavaScript objects not a good idea?](#why-is-extending-built-in-javascript-objects-not-a-good-idea)
6. [Why is it, in general, a good idea to leave the global JavaScript scope of a website as-is and never touch it?](#why-is-it-in-general-a-good-idea-to-leave-the-global-javascript-scope-of-a-website-as-is-and-never-touch-it)
7. [Explain the differences between CommonJS modules and ES modules in JavaScript](#explain-the-differences-between-commonjs-modules-and-es-modules-in-javascript)
8. [Explain the difference between mutable and immutable objects in JavaScript](#explain-the-difference-between-mutable-and-immutable-objects-in-javascript)
9. [Why might you want to create static class members in JavaScript?](#why-might-you-want-to-create-static-class-members-in-javascript)
10. [What are `Symbol`s used for in JavaScript?](#what-are-symbols-used-for-in-javascript)
11. [What are JavaScript object getters and setters for?](#what-are-javascript-object-getters-and-setters-for)
12. [What tools and techniques do you use for debugging JavaScript code?](#what-tools-and-techniques-do-you-use-for-debugging-javascript-code)
13. [Difference between document `load` event and document `DOMContentLoaded` event?](#difference-between-document-load-event-and-document-domcontentloaded-event)
14. [Explain how JSONP works (and how it's not really Ajax)](#explain-how-jsonp-works-and-how-its-not-really-ajax)
15. [Explain the concept of a microtask queue](#explain-the-concept-of-a-microtask-queue)
16. [Explain the concept of code coverage and how it can be used to assess test quality](#explain-the-concept-of-code-coverage-and-how-it-can-be-used-to-assess-test-quality)
17. [Explain the concept of Content Security Policy (CSP) and how it enhances security](#explain-the-concept-of-content-security-policy-csp-and-how-it-enhances-security)
18. [Explain the concept of Cross-Site Request Forgery (CSRF) and its mitigation techniques](#explain-the-concept-of-cross-site-request-forgery-csrf-and-its-mitigation-techniques)
19. [Explain the concept of error propagation in JavaScript](#explain-the-concept-of-error-propagation-in-javascript)
20. [Explain the concept of input validation and its importance in security](#explain-the-concept-of-input-validation-and-its-importance-in-security)
21. [Explain the concept of partial application](#explain-the-concept-of-partial-application)
22. [Explain the concept of tagged templates](#explain-the-concept-of-tagged-templates)
23. [Explain the concept of test-driven development (TDD)](#explain-the-concept-of-test-driven-development-tdd)
24. [Explain the concept of the Strategy pattern](#explain-the-concept-of-the-strategy-pattern)
25. [Explain the concept of the Web Socket API](#explain-the-concept-of-the-web-socket-api)
26. [Explain the concept of tree shaking in module bundling](#explain-the-concept-of-tree-shaking-in-module-bundling)
27. [Explain the difference between unit testing, integration testing, and end-to-end testing](#explain-the-difference-between-unit-testing-integration-testing-and-end-to-end-testing)
28. [Explain the different states of a Promise](#explain-the-different-states-of-a-promise)
29. [Explain the different ways the `this` keyword can be bound](#explain-the-different-ways-the-this-keyword-can-be-bound)
30. [Explain the event phases in a browser](#explain-the-event-phases-in-a-browser)
31. [Explain the Observer pattern and its use cases](#explain-the-observer-pattern-and-its-use-cases)
32. [Explain the same-origin policy with regards to JavaScript](#explain-the-same-origin-policy-with-regards-to-javascript)
33. [Explain what a single page app is and how to make one SEO-friendly](#explain-what-a-single-page-app-is-and-how-to-make-one-seo-friendly)
34. [How can you create custom error objects?](#how-can-you-create-custom-error-objects)
35. [How can you prevent SQL injection vulnerabilities in JavaScript applications?](#how-can-you-prevent-sql-injection-vulnerabilities-in-javascript-applications)
36. [How can you test asynchronous code in JavaScript?](#how-can-you-test-asynchronous-code-in-javascript)
37. [How do currying and partial application differ from each other?](#how-do-currying-and-partial-application-differ-from-each-other)
38. [How do `<iframe>` on a page communicate?](#how-do-iframe-on-a-page-communicate)
39. [How do you detect if JavaScript is disabled on a page?](#how-do-you-detect-if-javascript-is-disabled-on-a-page)
40. [How do you organize your code?](#how-do-you-organize-your-code)
41. [How do you write unit tests for JavaScript code?](#how-do-you-write-unit-tests-for-javascript-code)
42. [How is `Promise.all()` different from `Promise.allSettled()`?](#how-is-promiseall-different-from-promiseallsettled)
43. [What are Progressive Web Applications (PWAs)?](#what-are-progressive-web-applications-pwas)
44. [What are some best practices for handling sensitive data in JavaScript?](#what-are-some-best-practices-for-handling-sensitive-data-in-javascript)
45. [What are some best practices for writing maintainable and effective tests in JavaScript?](#what-are-some-best-practices-for-writing-maintainable-and-effective-tests-in-javascript)
46. [What are some common performance bottlenecks in JavaScript applications?](#what-are-some-common-performance-bottlenecks-in-javascript-applications)
47. [What are some common security headers and their purpose?](#what-are-some-common-security-headers-and-their-purpose)
48. [What are some tools and techniques for identifying security vulnerabilities in JavaScript code?](#what-are-some-tools-and-techniques-for-identifying-security-vulnerabilities-in-javascript-code)
49. [What are the benefits of using a module bundler?](#what-are-the-benefits-of-using-a-module-bundler)
50. [What are the benefits of using currying and partial application?](#what-are-the-benefits-of-using-currying-and-partial-application)
51. [What are the different types of errors in JavaScript?](#what-are-the-different-types-of-errors-in-javascript)
52. [What are the different types of testing in software development?](#what-are-the-different-types-of-testing-in-software-development)
53. [What are the metadata fields of a module?](#what-are-the-metadata-fields-of-a-module)
54. [What are the potential issues caused by hoisting?](#what-are-the-potential-issues-caused-by-hoisting)
55. [What are the potential pitfalls of using closures?](#what-are-the-potential-pitfalls-of-using-closures)
56. [What is async/await and how does it simplify asynchronous code?](#what-is-asyncawait-and-how-does-it-simplify-asynchronous-code)
57. [What is Cross-Site Scripting (XSS) and how can you prevent it?](#what-is-cross-site-scripting-xss-and-how-can-you-prevent-it)
58. [What is currying and how does it work?](#what-is-currying-and-how-does-it-work)
59. [What is `Object.freeze()` for?](#what-is-objectfreeze-for)
60. [What is `Object.preventExtensions()` for?](#what-is-objectpreventextensions-for)
61. [What is `Object.seal()` for?](#what-is-objectseal-for)
62. [What is the Command pattern and how is it used?](#what-is-the-command-pattern-and-how-is-it-used)
63. [What is the Decorator pattern and how is it used?](#what-is-the-decorator-pattern-and-how-is-it-used)
64. [What is the difference between `event.preventDefault()` and `event.stopPropagation()`?](#what-is-the-difference-between-eventpreventdefault-and-eventstoppropagation)
65. [What is the difference between `innerHTML` and `textContent`?](#what-is-the-difference-between-innerhtml-and-textcontent)
66. [What is the difference between `setTimeout()`, `setImmediate()`, and `process.nextTick()`?](#what-is-the-difference-between-settimeout-setimmediate-and-processnexttick)
67. [What is the difference between the Window object and the Document object?](#what-is-the-difference-between-the-window-object-and-the-document-object)
68. [What is the Factory pattern and how is it used?](#what-is-the-factory-pattern-and-how-is-it-used)
69. [What is the `Intl` namespace object for?](#what-is-the-intl-namespace-object-for)
70. [What is the Module pattern and how does it help with encapsulation?](#what-is-the-module-pattern-and-how-does-it-help-with-encapsulation)
71. [What is the prototype chain and how does it work?](#what-is-the-prototype-chain-and-how-does-it-work)
72. [What's the difference between an "attribute" and a "property" in the DOM?](#whats-the-difference-between-an-attribute-and-a-property-in-the-dom)

<!-- QUESTIONS:INTERMEDIATE:END -->

### Advanced-level JavaScript Interviews Questions

<!-- QUESTIONS:ADVANCED:START -->

1. [What is `'use strict';` (strict mode) in JavaScript for?](#what-is-use-strict-strict-mode-in-javascript-for)
2. [What are JavaScript polyfills for?](#what-are-javascript-polyfills-for)
3. [What are iterators and generators in JavaScript and what are they used for?](#what-are-iterators-and-generators-in-javascript-and-what-are-they-used-for)
4. [What are server-sent events?](#what-are-server-sent-events)
5. [What are JavaScript object property flags and descriptors?](#what-are-javascript-object-property-flags-and-descriptors)
6. [What are proxies in JavaScript used for?](#what-are-proxies-in-javascript-used-for)
7. [What are workers in JavaScript used for?](#what-are-workers-in-javascript-used-for)
8. [How does JavaScript garbage collection work?](#how-does-javascript-garbage-collection-work)
9. [Explain why the following doesn't work as an IIFE: `function foo(){}();`. What needs to be changed to properly make it an IIFE?](#explain-why-the-following-doesnt-work-as-an-iife-function-foo-what-needs-to-be-changed-to-properly-make-it-an-iife)
10. [How can you implement secure authentication and authorization in JavaScript applications?](#how-can-you-implement-secure-authentication-and-authorization-in-javascript-applications)
11. [How can you optimize DOM manipulation for better performance?](#how-can-you-optimize-dom-manipulation-for-better-performance)
12. [How can you optimize network requests for better performance?](#how-can-you-optimize-network-requests-for-better-performance)
13. [How can you prevent clickjacking attacks?](#how-can-you-prevent-clickjacking-attacks)
14. [How do you validate form elements using the Constraint Validation API?](#how-do-you-validate-form-elements-using-the-constraint-validation-api)
15. [How does hoisting affect function declarations and expressions?](#how-does-hoisting-affect-function-declarations-and-expressions)
16. [What are mocks and stubs and how are they used in testing?](#what-are-mocks-and-stubs-and-how-are-they-used-in-testing)
17. [What are some of the advantages and disadvantages of using TypeScript and compile-to-JavaScript languages](#what-are-some-of-the-advantages-and-disadvantages-of-using-typescript-and-compile-to-javascript-languages)
18. [What are some techniques for reducing reflows and repaints?](#what-are-some-techniques-for-reducing-reflows-and-repaints)
19. [What are some tools that can be used to measure and analyze JavaScript performance?](#what-are-some-tools-that-can-be-used-to-measure-and-analyze-javascript-performance)
20. [What are Web Workers and how can they be used to improve performance?](#what-are-web-workers-and-how-can-they-be-used-to-improve-performance)
21. [When would you use `document.write()`?](#when-would-you-use-documentwrite)

<!-- QUESTIONS:ADVANCED:END -->
