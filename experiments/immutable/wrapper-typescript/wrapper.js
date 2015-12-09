/// <reference path='../../../typings/Immutable.d.ts' />
'use strict';
import * as Immutable from 'immutable';
export class Spinner {
    constructor(id, value, label) {
        this.data = Immutable.Map()
            .set('id', id)
            .set('value', value)
            .set('label', label);
    }
    set(key, value) {
        let result = Object.create(Spinner.prototype);
        result.data = this.data.set(key, value);
        return result;
    }
    get(key) {
        return this.data.get(key);
    }
}
//# sourceMappingURL=wrapper.js.map