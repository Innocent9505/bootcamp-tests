describe('The isFromBellville function', function(){
    it('should return true if a registration number starts with CY', function(){
        assert.equal(isFromBellville('CY 123'), true);
    });
    it('should return false if a registration number doesnt starts with CY', function(){
        assert.equal(isFromBellville('CJ 123'), false);
});

});