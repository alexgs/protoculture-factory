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
