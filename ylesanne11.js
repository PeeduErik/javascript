const nimed = [
    "mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask",
    "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas",
    "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder",
    "Kaidi Koppel", "tiina Toom"
  ];
  
  // Funktsioon nimede korrastamiseks
  function korraldaNimed(nimed) {
    const korraldatudNimed = [];
    for (const nimi of nimed) {
      const osad = nimi.split(" ");
      if (osad.length === 2) {
        const eesnimi = osad[0].charAt(0).toUpperCase() + osad[0].slice(1);
        const perenimi = osad[1].toLowerCase();
        const email = perenimi + "@metshein.com";
        korraldatudNimed.push(`${eesnimi} ${email}`);
      }
    }
    return korraldatudNimed;
  }
  
  // Funktsioon nime otsimiseks ja täisnime kuvamiseks
  function otsiNime(nimi, nimed) {
    const leitudNimi = nimed.find((n) => n.toLowerCase() === nimi.toLowerCase());
    if (leitudNimi) {
      return leitudNimi;
    } else {
      return "Nime ei leitud";
    }
  }
  
  // Korrasta nimed
  const korraldatudNimed = korraldaNimed(nimed);
  console.log("Korraldatud nimed:");
  console.log(korraldatudNimed);
  
  // Otsi nime ja kuvage täisnimi
  const otsitavNimi = "Jaak Järve";
  const leitudNimi = otsiNime(otsitavNimi, korraldatudNimed);
  console.log(`Nimi "${otsitavNimi}" korraldatud kujul: ${leitudNimi}`);
  
console.log("");