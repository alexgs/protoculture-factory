//ES6
'use strict';

// Run with Mocha
let chai = require( 'chai' )
    , expect = chai.expect
    , ProtocultureFactory = require( '../index.js' )
    , ImmutableMapTrait = ProtocultureFactory.ImmutableMapTrait
    ;

class Spinner {
    constructor( config ) {
        this.immutableMapInit( config.data );

        // Could Object.freeze get moved into an init function, so it's not part
        // of the pattern here? How would that work with multiple traits?
        return Object.freeze( this );
    }
}

ProtocultureFactory.compose( Spinner, ImmutableMapTrait);

describe( 'A class for creating persistent immutable objects', () => {
    context( '(class fundamentals)', () => {
        it( 'should have a prototype with methods from the trait', () => {
            expect( typeof Spinner.prototype.set ).to.equal( 'function' );
            expect( typeof Spinner.prototype.get ).to.equal( 'function' );

            let spin = new Spinner( { data: { id: 0, value: 0 } } );
            expect( typeof spin.set ).to.equal( 'function' );
            expect( typeof spin.get ).to.equal( 'function' );
        });

        it( 'should create frozen objects' );
    });

    context( '(defensive programming)', () => {
        it( 'should reject bad stuff' );
    });
});

describe( 'A persistent immutable object', () => {
    it( 'should fail when setting a property directly' );
    it( 'should be able to add properties' );
    it( 'should have read-only properties' );
});

