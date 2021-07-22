describe('The transportFee function', function(){
    it('should returns "R20" for the "Morning Shift"', function(){
        assert.equal(transportFee('morning'), 'R20');
    });

    it('should returns "R10" for the "Afternoon Shift"', function(){
        assert.equal(transportFee('afternoon'), 'R10');
    });

    it('should be free for "Nightshift"', function(){
        assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');
    });
});