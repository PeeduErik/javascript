
function juhuslikTemperatuur() {
    return Math.floor(Math.random() * 51) - 10; 
}
function hindamine(temperatuur) {
    if (temperatuur > 25) {
        console.log("Väga kuum ilm! Temperatuur on " + temperatuur + " kraadi.");
    } else if (temperatuur >= 15 && temperatuur <= 25) {
        console.log("Mõnus temperatuur. Temperatuur on " + temperatuur + " kraadi.");
    } else {
        console.log("Jahe ilm. Temperatuur on " + temperatuur + " kraadi.");
    }
}
var juhuslikuTemperatuur = juhuslikTemperatuur();
hindamine(juhuslikuTemperatuur);

