(function (window) {
    'use strict';

    var oibLength = 11;
    var validator = {
        isValid: isValid,
        iso7064_mod11_10: iso7064_mod11_10
    };
    
    function isValid(oibString) {
        if(!oibString && oibString.length !== oibLength)
            return false;

        var tenRandomlyGeneratedNumbers =
            oibString
            .split('')
            .slice(0, oibLength - 1)
            .map(function (numberAsString) { return parseInt(numberAsString); });

        var generatedControlDigit = iso7064_mod11_10(tenRandomlyGeneratedNumbers);
        var originalControlDigit = oibString[oibLength - 1];
        return originalControlDigit === generatedControlDigit;
    }
    function iso7064_mod11_10(tenRandomlyGeneratedNumbers) {
        tenRandomlyGeneratedNumbers = tenRandomlyGeneratedNumbers.slice();
        var isFirstDigit = true,
            rest = -1;

        /* 5. Ponavljaju se koraci 2, 3, 4, 5 dok se ne potroše sve znamenke */
        while (tenRandomlyGeneratedNumbers && tenRandomlyGeneratedNumbers.length){

            /* 1. Prva znamenka zbroji se s brojem 10 */
            if(isFirstDigit){
                rest = tenRandomlyGeneratedNumbers.shift() + 10;
                isFirstDigit = false;
            }
            /* 5. Sljedeća znamenka zbroji se s ostatkom u prethodnom koraku */
            else
                rest = rest + tenRandomlyGeneratedNumbers.shift();
            /* 2. Dobiveni zbroj cjelobrojno (s ostatkom) podijeli se brojem 10;
             *    ako je dobiveni ostatak 0 zamijeni se brojem 10 (ovaj broj je tzb. međuostatak) */
            rest = rest % 10;
            if(rest === 0)
                rest = 10;

            /* 3. Dobiveni međuostatak pomnoži se brojem 2 */
            rest = rest * 2;

            /* 4. Dobiveni umnožak cjelobrojno (s ostatkom) podijeli se brojem 11
             *    ovaj ostatak matematički nikako ne može bit 0 jer je rezultat prethodnog koraka uvijek paran broj */
            rest = rest % 11;

        }
        /* 7. Razlika između broja 11 i ostatka u zadnjem koraku je kontrolna zamenka;
         *    ako je ostatak 1 kontrolna znamenka je  0 (11-1=10, a 10 ima dvije znamenke) */
        rest = 11 - rest;
        rest = rest % 10;
        if(rest === 1)
            rest = 1;

        return rest;
    }
    
    window.oibValidator = validator;
})(window);