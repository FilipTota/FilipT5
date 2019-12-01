const functions = require('./functions.js');
const config = require('./config.js');

//poziv funkcija i ulaznih podataka u index file
functions.random (config.min, config.max);
functions.minIntegerFromArray (config.array);
functions.minIntegerFromString (config.string);
functions.concatStringsByLength (config.arrayOfStrings, config.type);