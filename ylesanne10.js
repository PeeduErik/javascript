const toode = {
    nimetus: "Õunad",
    hind: 1.5,
    kogus: 10,
    koguhind: function() {
      return this.hind * this.kogus;
    },
    muudaKogus: function(uusKogus) {
      this.kogus = uusKogus;
    },
    kuvaSisu: function() {
      console.log(`Toode: ${this.nimetus}`);
      console.log(`Hind: ${this.hind} eurot`);
      console.log(`Kogus: ${this.kogus}`);
    }
  };
  
  
  console.log("Toote nimetus:", toode.nimetus);
  console.log("Toote hind:", toode.hind, "eurot");
  console.log("Toote kogus:", toode.kogus);
  console.log("Toote koguhind:", toode.koguhind(), "eurot");
  
  toode.muudaKogus(15); 
  console.log("Uus toote kogus:", toode.kogus);
  
  toode.kuvaSisu();
  
console.log("");