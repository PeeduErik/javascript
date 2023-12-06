const salajaneSonum = (sonum) => {
    const taishaalikud = "aeiouAEIOU";
    const asendaTarniga = (sone) => {
      let salajaneSone = "";
      for (let i = 0; i < sone.length; i++) {
        if (taishaalikud.includes(sone[i])) {
          salajaneSone += "*";
        } else {
          salajaneSone += sone[i];
        }
      }
      return salajaneSone;
    };
    const sonumiOsad = sonum.split(" ");
    const salajasedOsad = sonumiOsad.map(asendaTarniga);
    return salajasedOsad.join(" ");
  };
  const algneSonum = "See on minu salajane sõnum";
  const salajaneVersioon = salajaneSonum(algneSonum);
  console.log(salajaneVersioon);
  
  
console.log("");