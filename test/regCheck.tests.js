describe('The regCheck Function', function(){
    
    it('should return true if the registration numbers plates is from Gauteng and starts with GP.', function(){
        assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
    });

    it('should return false if the registration numbers plate is not from Gauteng.', function(){
        assert.equal(regCheck('DC 55 YU GP', 'EC'), false);
    });

    it('should return true if the registration numbers plate is from Limpopo and starts with L.', function(){
        assert.equal(regCheck('5566 L', 'L'), true);
    });

    it('should return false if the registration numbers plate is not from Limpopo and doesnt starts with L.', function(){
        assert.equal(regCheck('5566 L', 'M'), false);
    });

    it('should return true if the registration numbers plate is from Eastern Cape and starts with EC.', function(){
        assert.equal(regCheck('ERT 123 EC', 'EC'), true);
    });

    it('should return false if the registration numbers plate is not from Eastern Cape and doesnt starts with EC.', function(){
        assert.equal(regCheck('ERT 123 EC', 'GP'), false);
    });

    it('should return true if the registration numbers plate is from Mpumalanga and starts with MP.', function(){
        assert.equal(regCheck('FGT 123 MP', 'MP'), true);
    });

    it('should return false if the for registration numbers plate is not from Mpumalanga and doesnt starts with MP.', function(){
        assert.equal(regCheck('FGT 123 MM', 'MP'), false);
    });
});
