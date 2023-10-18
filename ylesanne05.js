// Funktsioon juhusliku temperatuuri genereerimiseks vahemikus -10 kuni 40 kraadi
function juhuslikTemperatuur() {
    return Math.floor(Math.random() * 51) - 10; // -10 kuni 40
}

// Funktsioon temperatuuri hindamiseks ja sõnumi väljastamiseks
function hindamine(temperatuur) {
    if (temperatuur > 25) {
        console.log("Väga kuum ilm! Temperatuur on " + temperatuur + " kraadi.");
    } else if (temperatuur >= 15 && temperatuur <= 25) {
        console.log("Mõnus temperatuur. Temperatuur on " + temperatuur + " kraadi.");
    } else {
        console.log("Jahe ilm. Temperatuur on " + temperatuur + " kraadi.");
    }
}

// Genereeri juhuslik temperatuur ja kutsu hindamisfunktsioon välja
var juhuslikuTemperatuur = juhuslikTemperatuur();
hindamine(juhuslikuTemperatuur);

