describe('The fromWhere function',function(){
    it('should take a car registration number as a parameter and returns the town the car is from. If the reg number starts with CY return Bellville, for CJ return Paarl, for CA return Cape Town otherwise return Some other place!', function(){
        assert.equal(fromWhere('CY'), 'Bellville');
        assert.equal(fromWhere('CJ'), 'Paarl');
        assert.equal(fromWhere('CA'), 'Cape Town');
        assert.equal(fromWhere('CC'), 'Some other place!');
    });
});