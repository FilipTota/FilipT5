module.exports = {
    random: function random (min, max) {
        console.log ('Funkcija proizvoljnog broja:');
        if (typeof min == 'number' && typeof max == 'number') {
            const br = Math.floor (Math.random() * (max - min + 1) + min);
            console.log(`--${br}`);
        }
        else {
            console.log ('--Greska! Kao parametre upisite samo brojeve.')
        }
    },

    minIntegerFromArray: function minIntegerFromArray (array) {
        console.log ('Funkcija najmanjeg integera:');
        let noviArray = [];
        let x = false;
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === 'number') {
                x = true;
            }
        }
        if (x) {
            for (let i = 0; i < array.length; i++) {
                if (typeof array [i] === 'number') {
                    noviArray.push(array[i]);
                }
            }
            let min = noviArray [0];
            for ( let i = 0; i < noviArray.length; i++) {
                if(noviArray[i] < min) {
                    min = noviArray [i];
                }
            }
            console.log (`--Najmanji broj u array-u: ${min}`);
        }
        else {
            console.log ('--Greska! Array mora sadrzavati barem jedan broj.');
        }
    },
    
    
    minIntegerFromString: function minIntegerFromString (string) {
        console.log ('Funkcija najmanjeg integera u stringu:');
        let x = false;
        for (let i = 0; i < string.length; i++) {
            if (!isNaN (string.charAt(i))) {
                x = true;
            }
        }
        if (x) {
            let broj = string.match (/\d+/g).map (Number);
            let min = broj [0]
            for (let i = 0; i < broj.length; i++) {
                if(broj [i] < min) {
                    min = broj [i];
                }
            }
            console.log (`--Najmanji broj u stringu: ${min}`);
        }
        else {
            console.log ('--String ne sadrzi ni jedan broj.')
        }
    },

    concatStringsByLength: function concatStringsByLength (arrayOfStrings, type) {
        console.log ('Funkcija poredka stringa:');
        if(type === 0) {
            arrayOfStrings.sort (function (a, b) {
                return a.length - b.length;
            }); 
            console.log ('--Stringovi poredani od manjega prema vecem: ');
            console.log (arrayOfStrings.join("")); 
        }
        if(type === 1) {
            arrayOfStrings.sort (function (a, b) {
                return b.length - a.length;
            }); 
            console.log ('--Stringovi poredani od veceg prema manjem: ');
            console.log (arrayOfStrings.join(""));
        }
    }
}