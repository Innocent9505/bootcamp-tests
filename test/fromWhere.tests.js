describe('The fromWhere function',function(){
    it('should take a car registration number ("CY") as a parameter and returns the town the car is from ("Bellville").', function(){
        assert.equal(fromWhere('CY'), 'Bellville');
    });
    
    it('should take a car registration number ("CJ") as a parameter and returns the town the car is from ("Paarl").', function(){
        assert.equal(fromWhere('CJ'), 'Paarl');
    });

    it('should take a car registration number ("CA") as a parameter and returns the town the car is from ("Cape Town").', function(){
        assert.equal(fromWhere('CA'), 'Cape Town');
    });

    it('should take a car registration number ("CC") as a parameter and returns the town the car is from ("Some other place!").', function(){
        assert.equal(fromWhere('CC'), 'Some other place!');
    });
});