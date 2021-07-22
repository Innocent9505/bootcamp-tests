describe('The totalPhoneBill function',function(){
    it('should take in a string ("call, sms, call, sms, sms") and calculate the total bill to return R7.45', function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
    });

    it('should take in a string ("call, sms") and calculate the total bill to return R3.40', function(){
        assert.equal('R3.40', totalPhoneBill('call, sms'));
    });

    it('should take in a string ("sms, sms") and calculate the total bill to return R1.30', function(){
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    })
})