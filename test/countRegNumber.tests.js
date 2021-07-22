describe('The countRegNumber function', function(){
    it('should take in a string parameter ("CA 182736,CY 523519,CJ 812328") and returns the number of registration numbers in the string which is "3"', function(){
        var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
        assert.equal(regCount, 3);
    });

    it('should take in a string parameter ("CA 182736") and returns the number of registration numbers in the string which is "1"', function(){
        var regCount = countRegNumber('CA 182736')
        assert.equal(regCount, 1);
    });
});