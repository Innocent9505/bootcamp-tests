describe('The greet function' , function(){
    it('should take someones name and return Hello plus name' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
        assert.equal(greet('Sam'), 'Hello, Sam');

    });
});