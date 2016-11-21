var assert = require('assert');
var numberToWord = require('../number_to_word.js');

describe('numberToWord', function() {
    it('should return word representation of a number',function(){
        var givenNumbers = [1,9,13,11,19,21,35,59,99,112,104,1745];
        var expectedResult = ['One','Nine','Thirteen','Eleven','Nineteen','Twenty One','Thirty Five','Fifty Nine','Ninety Nine','One Hundred Twelve','One Hundred Four','One Thousand Seven Hundred Forty Five'];
        for(var counter = 0; counter<givenNumbers.length; counter++)
            assert.equal(numberToWord.generate(givenNumbers[counter]), expectedResult[counter]);
    });
});