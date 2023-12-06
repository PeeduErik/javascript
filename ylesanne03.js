console.log("ül3");
// Muutujad sõidu kauguse ja kiiruse jaoks
let kaugus = 120; // Kaugus kilomeetrites
let kiirus = 60; // Kiirus kilomeetrites tunnis

// Arvuta sõidu aeg (tundides)
let soiduAeg = kaugus / kiirus;

// Väljasta sõidu aeg konsooli
console.log("Sõidu aeg: " + soiduAeg + " tundi");



let koguPostitusi = 137;
let postitusiLehekuljel = 10;
let täispikadLeheküljed = Math.floor(koguPostitusi / postitusiLehekuljel);
let postitusiViimaselLehel = koguPostitusi % postitusiLehekuljel;
if (postitusiViimaselLehel === 0) {
    console.log("Lehekülgi on vaja: " + täispikadLeheküljed);
} else {
    console.log("Lehekülgi on vaja: " + (täispikadLeheküljed + 1));
    console.log("Postitusi viimasel lehel: " + postitusiViimaselLehel);
}

let serveriVoimsusWattides = 400; // Serveri võimsus wattides
let elektriHindSentides = 9.69;  // Elektri hind sentides/kWh

// Arvuta serveri voolutarbimine kilovatt-tundides (kWh)
let voolutarbimineKWh = serveriVoimsusWattides / 1000;


let elektriHindEurodesKWh = elektriHindSentides / 100; // Sentid eurodesse teisendamiseks
let tookuluEurodes = voolutarbimineKWh * elektriHindEurodesKWh;

// Väljasta töökulu konsooli
console.log("Serveri töökulu ühe tunni jooksul: " + tookuluEurodes.toFixed(2) + " eurot");

console.log("");

