function arvudeKogusJaKeskmine() {
    let arvudeSumma = 0;
    let arvudeArv = 0;
  
    while (true) {
      const sisend = prompt("Sisesta täisarv (või vajuta tühikut tühjendamiseks):");
  
      if (sisend === "" || sisend === null) {
        break; // Katkestame tsükli, kui kasutaja jätab sisendi tühjaks või vajutab "tühjendamiseks"
      }
  
      const arv = parseInt(sisend);
  
      if (!isNaN(arv)) {
        arvudeSumma += arv;
        arvudeArv++;
      } else {
        alert("Vigane sisend. Sisesta ainult täisarvud.");
      }
    }
  
    const keskmine = arvudeArv > 0 ? arvudeSumma / arvudeArv : 0;
  
    return {
      koguarv: arvudeSumma,
      keskmine: keskmine,
    };
  }
  
  const tulemused = arvudeKogusJaKeskmine();
  console.log("Koguarv: " + tulemused.koguarv);
  console.log("Keskmine: " + tulemused.keskmine);
  
console.log("");