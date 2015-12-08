// ES6
'use strict';

exports.makeObject = function() {
    let result = Object.create( ImmutablePrototype );
    return result;
};

let ImmutablePrototype = Object.create( null );

ImmutablePrototype.keys = function() {
    let result = new Array( 0 );
    let props = Object.getOwnPropertyNames( this );
    for (let prop of props) {
        if ( Object.propertyIsEnumerable.bind( this, prop ) ) {
            result.push( prop );
        }
    }
    return result;
};

ImmutablePrototype.add = function( key, value ) {
    // Create a new immutable
    let result = Object.create( ImmutablePrototype );

    // Copy all enumerable properties from `this` to the new immutable
    let oldProps = this.keys();
    for ( let oldProp of oldProps ) {
        result[oldProp] = this[oldProp];
    }

    // Add the new property and return the new immutable
    result[key] = value;
    return result;
};
