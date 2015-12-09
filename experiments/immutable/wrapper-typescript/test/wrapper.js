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

        expect( spin0.id ).to.equal( '0' );
    });
});
