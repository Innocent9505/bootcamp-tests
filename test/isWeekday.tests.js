describe('The isWeekday function', function(){
    it('should take a string parameter "Saturday" and find out if the parameter is a week-day (ie. Not a weekend day)', function(){
        assert.equal(isWeekday('Saturday'), false);
    });

    it('should take a string parameter "Monday" and find out if the parameter is a week-day (ie. Not a weekend day)', function(){
        assert.equal(isWeekday('Monday'), true);
    });
});