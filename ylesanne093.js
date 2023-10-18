const salajaneSonum = (sonum) => {
    // Defineerime täishäälikute loendi
    const taishaalikud = "aeiouAEIOU";
  
    // Funktsioon täishäälikute asendamiseks tärniga
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
  
    // Rakendame asendamist iga sõna kohta
    const sonumiOsad = sonum.split(" ");
    const salajasedOsad = sonumiOsad.map(asendaTarniga);
  
    // Liidame salajased osad tagasi üheks sõnumiks
    return salajasedOsad.join(" ");
  };
  
  // Kasutamine:
  const algneSonum = "See on minu salajane sõnum";
  const salajaneVersioon = salajaneSonum(algneSonum);
  console.log(salajaneVersioon); // Näide väljundist: "S** ** mn* s*l*j*n* s*m"
  
  
console.log("");