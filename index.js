// ES6
'use strict';

let Immutable = require( 'immutable' );

exports.compose = ( target, Trait ) => {
    Object.assign( target.prototype, Trait );
};

exports.ImmutableMapTrait = {
    immutableMapData: null,

    immutableMapInit: ( data ) => {
        this.immutableMapData = Immutable.Map();
        for ( let prop in data ) {
            if ( data.hasOwnProperty( prop ) ) {
                this.immutableMapData.set( prop, data[ prop ] );
            }
        }
    },

    set: ( key, value ) => {

    },

    get: ( key ) => {

    }
};
