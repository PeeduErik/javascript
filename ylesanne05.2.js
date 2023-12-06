
var piletiTyyp = prompt("Sisesta piletitüüp (täispilet või sooduspilet):");
var vanus = parseInt(prompt("Sisesta oma vanus:"));


var hind = 0;


if (piletiTyyp === "täispilet") {
    if (vanus < 18) {
        hind = 10;
    } else if (vanus >= 18 && vanus <= 64) {
        hind = 20;
    } else if (vanus >= 65) {
        hind = 15;
    }
} else if (piletiTyyp === "sooduspilet") {
    if (vanus < 18 || vanus >= 65) {
        hind = 8;
    } else if (vanus >= 18 && vanus <= 64) {
        hind = 15;
    }
} else {
    console.log("Vigane piletitüüp. Sisesta kas 'täispilet' või 'sooduspilet'.");
}


if (hind > 0) {
    console.log("Pileti hind on " + hind + " eurot.");
}
console.log("");