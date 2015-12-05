# Protoculture Factory

A library for persistent, composable, immutable objects!

## Import

```js
let ProtoFactory = require( 'protoculture-factory' );
```

## Object Literals

```js
let immutableObj = ProtoFactory.makeObject()
        .add( 'foo', 12 )
        .add( 'bar', 'xyz' );

console.log( immutableObj.foo + " | " + immutableObj.bar );  // "12 | xyz"
immutableObj.hot = 12;                                       // throws

newObj = immutableObj.set( 'foo', 13 );
console.log( immutableObj.foo + " | " + immutableObj.bar );  // "12 | xyz"
console.log( newObj.foo + " | " + newObj.bar );              // "13 | xyz"

```
