[![NSP Status](https://nodesecurity.io/orgs/mjelaska/projects/b4037e18-8238-43d5-b68c-5582ca44b4a3/badge)](https://nodesecurity.io/orgs/mjelaska/projects/b4037e18-8238-43d5-b68c-5582ca44b4a3)
[![dependencies Status](https://david-dm.org/MiroslavJelaska/oib-validator.js/status.svg)](https://david-dm.org/MiroslavJelaska/oib-validator.js)
# oib-validator.js
JavaScript validator za OIB.

Have some questions or want to give a feedback? You can send me a <a href="mailto:mjelaska.public@gmail.com">an email ✉️</a>

**NOTE:** Do you like it? Show it by giving a ⭐️. 🚀

## Kontrola OIB-a po međunarodnoj normi ISO7064 (MOD 11,10) - Hibridni sistem
*Ovaj tekst je preuzet sa [regos.hr](http://www.regos.hr/UserDocsImages/KONTROLA%20OIB-a.pdf) 14.9.2016., a original se može pronaći u folderu readme-resources.*

 1. OIB ima 11 znamenaka od koji je posljednja tj. 11. znamenka kontrolna znamenka - dobivena je izračunom iz prethodnih 10 znamenaka po meñunarodnoj normi ISO 7064 (MOD 11, 10).
 2. Kontrolna znamenka prema navedenoj normi dobiva se slijedećim postupkom:
    1. prva znamenka zbroji se s brojem 10
    2. dobiveni zbroj cjelobrojno (s ostatkom) podijeli se brojem 10; ako je dobiveni ostatak 0 zamijeni se brojem 10 (ovaj broj je tzv. meñuostatak)
    3. dobiveni meñuostatak pomnoži se brojem 2
    4. dobiveni umnožak cjelobrojno (s ostatkom) podijeli se brojem 11; ovaj ostatak matematički nikako ne može biti 0 jer je rezultat prethodnog koraka uvijek paran broj
    5. slijedeća znamenka zbroji se s ostatkom u prethodnom koraku
    6. ponavljaju se koraci 2, 3, 4 i 5 dok se ne potroše sve znamenke
    7. razlika izmeñu broja 11 i ostatka u zadnjem koraku je kontrolna znamenka; ako je ostatak 1 kontrolna znamenka je 0 (11-1=10, a 10 ima dvije znamenke)


