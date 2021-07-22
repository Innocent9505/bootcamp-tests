describe('The greet function' , function(){
    it('should return "Hello Nhlanhla" when i greet Nhlanhla' , function(){
        assert.equal(greet('Nhlanhla'), 'Hello, Nhlanhla');
    });

    it('should return "Hello Innocent" when i greet Innocent' , function(){
        assert.equal(greet('Innocent'), 'Hello, Innocent');

    });
});