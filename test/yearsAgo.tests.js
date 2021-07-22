describe('The yearsAgo function', function(){
    it('should take in a year("1976") and return how many years ago "1976" is from the current year', function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976));
    });

    it('should take in a year("2000") and return how many years ago "2000" is from the current year', function(){
        assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));

    });
});