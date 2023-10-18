const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
    // Lisa kontrollimiseks oma nimi ja isikukood
  ];
  
  // Funktsioon sünniaja ja vanuse leidmiseks
  function leiaSynniAegJaVanus(isikukood) {
    const aasta = isikukood.slice(1, 3); // Saame isiku sünniaasta kahe esimese numbri põhjal
    const kuu = isikukood.slice(3, 5); // Saame sünnikuu
    const päev = isikukood.slice(5, 7); // Saame sünnipäeva
  
    // Lisame aastale '18' või '19', sõltuvalt sellest, kas isik on sündinud enne või pärast 2000. aastat
    const sünniaasta = Number(aasta) < 22 ? "20" + aasta : "19" + aasta;
  
    // Arvutame isiku vanuse
    const tänaneAasta = new Date().getFullYear();
    const vanus = tänaneAasta - Number(sünniaasta);
  
    // Tagastame sünniaja ja vanuse
    return {
      sünniaeg: `${päev}.${kuu}.${sünniaasta}`,
      vanus: vanus,
    };
  }
  
  // Lisa meetod inimeste andmetele
  inimesteAndmed.forEach((inimene) => {
    inimene.leiaSynniAegJaVanus = function () {
      const synniAndmed = leiaSynniAegJaVanus(this.isikukood);
      this.sünniaeg = synniAndmed.sünniaeg;
      this.vanus = synniAndmed.vanus;
    };
  });
  
  // Kutsu meetod välja iga inimese andmete kohta
  inimesteAndmed.forEach((inimene) => {
    inimene.leiaSynniAegJaVanus();
    console.log(`${inimene.nimi}: Sünniaeg - ${inimene.sünniaeg}, Vanus - ${inimene.vanus} aastat`);
  });
  
console.log("");