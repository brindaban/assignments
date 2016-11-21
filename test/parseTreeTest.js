var assert = require('assert');
var parseTree = require('../parseTree.js');

describe('parseTree', function() {
    it('should return expression of given tree', function() {
        var givenTree ={   parent: '-',
            left:
                {   parent: '+',
                    left: { parent: '*', 
                            left: 1, 
                            right: 2 
                        },
                    right: {
                            parent: '/', 
                            left: 3, 
                            right: 5
                         }
                },
            right: {
                            parent: '/', 
                            left: 3, 
                            right: 5
                         } };


        var expectedExpr = '( ( ( 1 * 2 ) + ( 3 / 5 ) ) - ( 3 / 5 ) )';
        assert.equal(parseTree.parse(givenTree),expectedExpr); 
    });

    it('should return when in tree there is one parent left right each',function(){
        var givenTree = { parent: '+', left: 1, right: 2};
        var expectedExpr = '( 1 + 2 )'
        assert.equal(parseTree.parse(givenTree),expectedExpr);
    });
});
