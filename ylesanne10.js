const toode = {
    nimetus: "Õunad",
    hind: 1.5,
    kogus: 10,
  
    // Meetod koguhinna arvutamiseks
    koguhind: function() {
      return this.hind * this.kogus;
    },
  
    // Meetod toote koguse muutmiseks
    muudaKogus: function(uusKogus) {
      this.kogus = uusKogus;
    },
  
    // Meetod objekti sisu kuvamiseks
    kuvaSisu: function() {
      console.log(`Toode: ${this.nimetus}`);
      console.log(`Hind: ${this.hind} eurot`);
      console.log(`Kogus: ${this.kogus}`);
    }
  };
  
  // Kuva objekti omadused konsoolis
  console.log("Toote nimetus:", toode.nimetus);
  console.log("Toote hind:", toode.hind, "eurot");
  console.log("Toote kogus:", toode.kogus);
  
  // Kasuta meetodeid ja kuvage tulemused
  console.log("Toote koguhind:", toode.koguhind(), "eurot");
  
  toode.muudaKogus(15); // Muuda toote kogust
  console.log("Uus toote kogus:", toode.kogus);
  
  // Kuvage objekti sisu
  toode.kuvaSisu();
  
console.log("");