console.log("ül2");
// Kellaaja muutujad
let tunnid = 7;      // Näide: 7 tunnid
let minutid = 30;    // Näide: 30 minutid
let sekundid = 15;   // Näide: 15 sekundid

// Kujunda kellaeg
let kellaeg = tunnid + ":" + minutid + ":" + sekundid + " PM";

// Väljasta kellaeg konsooli
console.log(kellaeg);

// Muutuja, mis sisaldab tsitaati
let tsitaat = "Elu on nagu jalgrattasõit. Selleks, et tasakaalus püsida, pead liikuma edasi.";
let autoriNimi = "Albert Einstein";

// Moodustame uue stringi koos tsitaadi ja autori nimega
let tsitaatKoosAutoriga = '"' + tsitaat + '" - ' + autoriNimi;

// Väljastame tsitaadi koos autoriga
console.log(tsitaatKoosAutoriga);

// Muutujad
let eesnimi1 = "Müri";
let perenimi1 = "Jurakas";

// Kasuta template literals, et moodustada lause
let lause = `${eesnimi1} ${perenimi1} nimetähed on ${eesnimi1[0]}.${perenimi1[0]}.`;

// Väljastame lause
console.log(lause);


// Muutuja kujul "Perenimi, Eesnimi"
let täisnimi = "Jurakas, Jüri";

// Leia koma asukoht sõnes
let komaAsukoht = täisnimi.indexOf(",");

// Eralda perenimi kasutades koma asukohta
let perenimi2 = täisnimi.slice(0, komaAsukoht);

// Muuda perenimi suurtähtedeks
let suuredTähed = perenimi1.toUpperCase();

// Kuvame perenime konsooli
console.log("Perenimi suurtähtedega: " + suuredTähed);

// Kuvame perenime pikkuse
console.log("Perenime pikkus: " + perenimi2.length);


let epost = "karrolk@netlog.com";

// Asenda domeen "netlog.com" domeeniga "gmail.com"
let muudetudEpost = epost.replace("netlog.com", "gmail.com");

// Väljasta muudetud e-posti aadress
console.log(muudetudEpost);


let andmerida = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";

// Jagame andmerida komade abil
let andmed = andmerida.split(",");

// Andmed iga välja jaoks
let id = andmed[0];
let eesnimi3 = andmed[1];
let perenimi3 = andmed[2];
let post3 = andmed[3];
let sugu = andmed[4];
let ipAadress3 = andmed[5];

// Väljastame andmed konsooli
console.log("ID: " + id);
console.log("Eesnimi: " + eesnimi3);
console.log("Perenimi: " + perenimi3);
console.log("E-post: " + post3);
console.log("Sugu: " + sugu);
console.log("IP-aadress: " + ipAadress3);


let andmerida1 = "1,Marshal,Martinovic,mmartinovic0@dedecms.com,Male,40.19.226.175";

// Jagame andmerida komade abil
let andmed2 = andmerida1.split(",");

// Eraldame IP-aadressi ja e-posti aadressi
let ipAadress4 = andmed2[5];
let post4 = andmed2[3];

// Eraldame kasutajanime e-posti aadressist
let kasutajanimi = post4.split("@")[0];

// Väljastame IP-aadressi ja kasutajanime konsoolis
console.log("IP-aadress: " + ipAadress4);
console.log("Kasutajanimi: " + kasutajanimi);
console.log("");


