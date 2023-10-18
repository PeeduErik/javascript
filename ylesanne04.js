console.log("ül4");
// Antud massiiv
let nadalapaevad = ["Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede"];

// Paranda massiiv ja kuva selle elemendid
nadalapaevad[2] = "Kolmapäev"; // Parandame kirjavea
console.log("Massiivi elemendid: " + nadalapaevad.join(", "));

// Kuva massiivi suurus
let massiiviSuurus = nadalapaevad.length;
console.log("Massiivi suurus: " + massiiviSuurus);

// Lisa lõppu koodi abiga Laupäev ja Pühapäev
nadalapaevad.push("Laupäev", "Pühapäev");
console.log("Lisatud Laupäev ja Pühapäev: " + nadalapaevad.join(", "));

// Sorteeri elemendid kahanevalt
nadalapaevad.sort().reverse();
console.log("Kahanevalt sorteeritud elemendid: " + nadalapaevad.join(", "));

// Kuva viimane element
let viimaneElement = nadalapaevad[nadalapaevad.length - 1];
console.log("Viimane element: " + viimaneElement);

let koodid = "444689936146563731 2452966188592191874 52634311978613959924676311 4874232339 491973615889195397613151 64491375479568464397 2799868298847212752434 9464245911 84529438455334236247245 8131257451645317232949247 26471594451453281675411332 6631592725297745964837 616698332453173937881461 3311783543427862468268 385418321228899775431 4659867 73395213225525916984356 833792195426925124155181841 123388893 6941777837193213644325351 11353488912476869536954 61173937137292328237388335 5344692 452956158 31937616696951768494 584842118999165552436 8832121577139589884 15282516522883423742885 14713349724 6919979438697694 2252585676244745856486 5617683424485959291 547443594 2678324174797795449925 43753791352187862731151912 6875665565836721939262 35482977 84421878934473534291995 798457553821668942312 11114498238219156246883553 3599955 8831995953696776 8138759916933117676486 2388776737768787 37232647683297835458183 11318659392964788174775 683293746169875551252354 741545327395636643318531 38447974824822841161273 88768222547689886222 6345677462396774359 4942661761 1354569165 2553653936124138282 851786784517417366411515 42279319649497959785 5523951771 45941761289678527316294 37776454913244819275691 436669892715419465494342 682264111527 734681268219555989841131 882641896825571288724 382545666 12133138432672285179566156291 83644842221351483476411355532 9589336353993598224 184537669759184472427331 41851326945453796784 525783591 173773335961894524914465 47516715963756294236321 7296569497726217615 79487235 4931878519724923131437 31214731844284735237658435 1378458823933518466122 1241955123792435126557994 347427652476673662454 55596877477154112241923 9789414554758712319821 86228624276917113671233411 89659521 1352796469161477381192 69483824148396716861472 4766533634762298963245 5155973593459278561 1784478259974148659431 29583142566714785218623 244371427148584159487652 871836193187759591363 247956";

// Tükelda sõne ja kuva, mitu koodi saad
let koodidMassiiv = koodid.split(" ");
console.log("Koodide arv: " + koodidMassiiv.length);

// Mitmes index on koodil 35482977
let index = koodidMassiiv.indexOf("35482977");
console.log("Koodi '35482977' indeks: " + index);

// Kuva saadud massiivist täpselt pooled elemendid
let poolMassiivist = koodidMassiiv.slice(0, koodidMassiiv.length / 2);
console.log("Pool massiivist: " + poolMassiivist.join(" "));

let sportlased = [
    ["Alice", 25, [10.2, 9.8, 10.5]],
    ["Bob", 22, [9.5, 9.6, 9.7]],
    ["Charlie", 28, [11.1, 11.2, 11.5]]
  ];
  
  // Läbime iga sportlase
  for (let i = 0; i < sportlased.length; i++) {
    let sportlane = sportlased[i];
    let nimi = sportlane[0];
    let tulemused = sportlane[2];
    
    // Leia parim tulemus
    let parimTulemus = Math.max(...tulemused);
    
    // Kuva nimi ja parim tulemus
    console.log("Sportlane: " + nimi);
    console.log("Parim tulemus: " + parimTulemus);
    console.log(); // Lisame tühja rea eraldamiseks
  }
  


console.log("");