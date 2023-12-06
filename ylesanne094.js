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
  const algneMassiiv = ["Kati", "Mati", "Kati", "Mari", "Mati", "Jüri"];
  const unikaalsedNimed = leiaUnikaalsedNimed(algneMassiiv);
  console.log(unikaalsedNimed); 
  
console.log("");