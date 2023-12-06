function kuupaevEesti(kuupaev) {
    const kuuNimed = [
      "jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
      "juuli", "august", "september", "oktoober", "november", "detsember"
    ];
    const [paev, kuu, aasta] = kuupaev.split(".");
    const paevNum = parseInt(paev);
    const kuuNum = parseInt(kuu);
    const aastaNum = parseInt(aasta);
    if (isNaN(paevNum) || isNaN(kuuNum) || isNaN(aastaNum)) {
      console.log("Vigane kuupäeva formaat. Kasuta formaati 'paev.kuu.aasta', näiteks '19.07.23'.");
    } else if (kuuNum < 1 || kuuNum > 12) {
      console.log("Vigane kuu number. Kasutage vahemikku 1 kuni 12.");
    } else {
      console.log(`${paevNum}. ${kuuNimed[kuuNum - 1]} ${aastaNum}. aastal`);
    }
  }
  kuupaevEesti("19.07.23");
  
console.log("");