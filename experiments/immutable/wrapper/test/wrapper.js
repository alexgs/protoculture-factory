'use strict';

// Run with Mocha
let chai = require( 'chai' )
    , expect = chai.expect
    , Spinner = require( '../wrapper.js' )
    ;

chai.use( require( 'dirty-chai' ) );

describe( 'A wrapper around an immutable', () => {
    it( 'should get initialized and return data', () => {
        let spin0 = new Spinner( '0', 18, 'strength' );
        let spin1 = new Spinner( '1', 12, 'hit points' );

        expect( spin0.get( 'id' ) ).to.equal( '0' );
        expect( spin1.get( 'label' ) ).to.equal( 'hit points' );
    });

    it( 'should return a new object when a mutator is called', () => {
        let spin0 = new Spinner( '0', 18, 'strength' );
        let spin2 = spin0.set( 'value', 16 );

        expect( spin0.get( 'value' ) ).to.equal( 18 );
        expect( spin2.get( 'value' ) ).to.equal( 16 );
    });

    it( 'should throw an error when setting a property directly', () => {
        let spin0 = new Spinner( '0', 18, 'strength' );
        expect( () => { spin0.data = null } ).to.throw( TypeError );
        expect( () => { spin0.data = spin0.data.set( 'new', 7 ) } ).to.throw( TypeError );
    });

    it( 'should allow an update in place', () => {
        let spin0 = new Spinner( '0', 18, 'strength' );
        spin0 = spin0.set( 'value', 16 );
        expect( spin0.get( 'value' ) ).to.equal( 16 );
    });
});
