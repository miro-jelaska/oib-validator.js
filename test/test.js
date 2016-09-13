var should = chai.should();
var oibLength = 11;

describe('oibValidator', function() {
    describe('#iso7064_mod11_10(tenRandomlyGeneratedNumbers)', function() {
        it('should not change passed array of numbers', function() {
            var arrayOfTenNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            oibValidator.iso7064_mod11_10(arrayOfTenNumbers);
            arrayOfTenNumbers.should.have.length(10);
        });

        it('#1 test of validity', function() {
            var arrayOfTenNumbers = oibStringToNumberArray('69435151530');
            oibValidator.iso7064_mod11_10(arrayOfTenNumbers).should.equal(0);
        });

        it('#2 test of validity', function() {
            var arrayOfTenNumbers = oibStringToNumberArray('61553429925'); /* DUMP Association of young programmers OIB */
            oibValidator.iso7064_mod11_10(arrayOfTenNumbers).should.equal(5);
        });

        it('#3 test of validity', function() {
            var arrayOfTenNumbers = oibStringToNumberArray('00857144221'); /* University of Split, Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture OIB */
            oibValidator.iso7064_mod11_10(arrayOfTenNumbers).should.equal(1);
        });

        it('#4 test of validity', function() {
            var arrayOfTenNumbers = oibStringToNumberArray('02879747067');  /* University of Split, School of Medicine OIB */
            oibValidator.iso7064_mod11_10(arrayOfTenNumbers).should.equal(7);
        });

        it('#5 test of validity', function() {
            var arrayOfTenNumbers = oibStringToNumberArray('99401575594'); /* University of Split, Faculty of Chemistry and Technology OIB */
            oibValidator.iso7064_mod11_10(arrayOfTenNumbers).should.equal(4);
        });

        it('#6 test of validity', function() {
            var arrayOfTenNumbers = oibStringToNumberArray('20858497843'); /* University of Split, Faculty of science OIB */
            oibValidator.iso7064_mod11_10(arrayOfTenNumbers).should.equal(3);
        });

        it('#7 test of validity', function() {
            var arrayOfTenNumbers = oibStringToNumberArray('84477684422'); /* University of Split, Faculty of Economics OIB */
            oibValidator.iso7064_mod11_10(arrayOfTenNumbers).should.equal(2);
        });

        it('#8 test of validity', function() {
            var arrayOfTenNumbers = oibStringToNumberArray('98004523293'); /* University of Split, Faculty of Philosophy OIB */
            oibValidator.iso7064_mod11_10(arrayOfTenNumbers).should.equal(3);
        });


        function oibStringToNumberArray(oibString) {
            return oibString.split('')
                .slice(0, oibLength - 1)
                .map(function (numberAsString) { return parseInt(numberAsString); });
        }
    });

    describe('#isValid(oibString)', function() {
        it('#1 test of validity', function() {
            expect(oibValidator.isValid('69435151530')).to.be.true;
        });

        it('#2 test of validity', function() {
            expect(oibValidator.isValid('61553429925')).to.be.true; /* DUMP Association of young programmers OIB */
        });

        it('#3 test of validity', function() {
            expect(oibValidator.isValid('00857144221')).to.be.true; /* University of Split, Faculty of Electrical Engineering, Mechanical Engineering and Naval Architecture OIB */
        });

        it('#4 test of validity', function() {
            expect(oibValidator.isValid('02879747067')).to.be.true; /* University of Split, School of Medicine OIB */
        });

        it('#5 test of validity', function() {
            expect(oibValidator.isValid('99401575594')).to.be.true; /* University of Split, Faculty of Chemistry and Technology OIB */
        });

        it('#6 test of validity', function() {
            expect(oibValidator.isValid('20858497843')).to.be.true; /* University of Split, Faculty of science OIB */
        });

        it('#7 test of validity', function() {
            expect(oibValidator.isValid('84477684422')).to.be.true; /* University of Split, Faculty of Economics OIB */
        });

        it('#8 test of validity', function() {
            expect(oibValidator.isValid('98004523293')).to.be.true; /* University of Split, Faculty of Philosophy OIB */
        });
    });
});