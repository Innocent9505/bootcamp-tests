describe('The countAllPaarl function', function(){
    it('should take a parameter string with registration numbers("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123") and returns the number of registration numbers in the string for Paarl which is "3"', function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));
    });

    it('should take a parameter string with registration numbers("CJ 345 123, CK 345, CJ 123") and returns the number of registration numbers in the string for Paarl which is "2"', function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));

    });
});