const inimesteAndmed = [
    { nimi: "Mari Maasikas", isikukood: "38705123568" },
    { nimi: "Jaan Jõesaar", isikukood: "49811234567" },
    { nimi: "Kristiina Kukk", isikukood: "39203029876" },
    { nimi: "Margus Mustikas", isikukood: "49807010346" },
    { nimi: "Jaak Järve", isikukood: "39504234985" },
    { nimi: "Kadi Kask", isikukood: "39811136789" },
  ];
  function leiaSynniAegJaVanus(isikukood) {
    const aasta = isikukood.slice(1, 3); 
    const kuu = isikukood.slice(3, 5); 
    const päev = isikukood.slice(5, 7);
    const sünniaasta = Number(aasta) < 22 ? "20" + aasta : "19" + aasta;
    const tänaneAasta = new Date().getFullYear();
    const vanus = tänaneAasta - Number(sünniaasta);
    return {
      sünniaeg: `${päev}.${kuu}.${sünniaasta}`,
      vanus: vanus,
    };
  }
  inimesteAndmed.forEach((inimene) => {
    inimene.leiaSynniAegJaVanus = function () {
      const synniAndmed = leiaSynniAegJaVanus(this.isikukood);
      this.sünniaeg = synniAndmed.sünniaeg;
      this.vanus = synniAndmed.vanus;
    };
  });
  inimesteAndmed.forEach((inimene) => {
    inimene.leiaSynniAegJaVanus();
    console.log(`${inimene.nimi}: Sünniaeg - ${inimene.sünniaeg}, Vanus - ${inimene.vanus} aastat`);
  });
  
console.log("");