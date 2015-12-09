'use strict';

let Immutable = require( 'immutable' );

class Spinner {
    constructor( id, value, label ) {
        this.data = Immutable.Map()
            .set( 'id', id )
            .set( 'value', value )
            .set( 'label', label );
        return Object.freeze( this );
    }

    set( key, value ) {
        let result = Object.create( Spinner.prototype );
        result.data = this.data.set( key, value );
        return Object.freeze( result );
    }

    get( key ) {
        return this.data.get( key );
    }
}

module.exports = Spinner;
