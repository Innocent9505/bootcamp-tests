describe('The isWeekday function', function(){
    it('should take a string parameter - to find out if the parameter passed if is a day of the week (ie. Not a weekend day)', function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Monday'), true);
    });
});