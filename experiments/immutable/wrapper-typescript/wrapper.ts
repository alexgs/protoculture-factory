/// <reference path='../../../typings/Immutable.d.ts' />
'use strict';

//let Immutable = require('immutable');
import * as Immutable from 'immutable';

export class Spinner {
    data: Immutable.Map<string, any>;

    constructor( id: string, value: number, label: string) {
        this.data = Immutable.Map<string, any>()
            .set( 'id', id)
            .set( 'value', value )
            .set( 'label', label );
    }

    set( key: string, value: any ): Spinner {
        let result = Object.create( Spinner.prototype );
        result.data = this.data.set( key, value );
        return result;
    }

    get( key: string ): any {
        return this.data.get( key );
    }
}
