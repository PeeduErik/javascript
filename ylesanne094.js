const leiaUnikaalsedNimed = (nimeMassiiv) => {
    const unikaalsedNimed = [];
    const nimedeHoidla = new Set();
  
    for (const nimi of nimeMassiiv) {
      if (!nimedeHoidla.has(nimi)) {
        unikaalsedNimed.push(nimi);
        nimedeHoidla.add(nimi);
      }
    }
  
    return unikaalsedNimed;
  };
  
  // Kasutamine:
  const algneMassiiv = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
  const unikaalsedNimed = leiaUnikaalsedNimed(algneMassiiv);
  console.log(unikaalsedNimed); // Näide väljundist: ["Kati", "Mati", "Mari", "Jüri"]
  
console.log("");