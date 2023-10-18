const opilased = [
    { nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
    { nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
    { nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
    { nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
    { nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
    { nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
    { nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
    { nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
    { nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
    { nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
  ];
  
  // Funktsioon parima tulemuse leidmiseks
  function leiaParimTulemus(tulemused) {
    return Math.max(...tulemused);
  }
  
  // Funktsioon keskmise tulemuse leidmiseks
  function leiaKeskmineTulemus(tulemused) {
    const summa = tulemused.reduce((acc, tulemus) => acc + tulemus, 0);
    return (summa / tulemused.length).toFixed(2);
  }
  
  // Kuvame iga õpilase nime, parima tulemuse ja keskmise tulemuse
  opilased.forEach((opilane) => {
    const parimTulemus = leiaParimTulemus(opilane.tulemused);
    const keskmineTulemus = leiaKeskmineTulemus(opilane.tulemused);
    console.log(`Õpilane: ${opilane.nimi}, Parim tulemus: ${parimTulemus}, Keskmine tulemus: ${keskmineTulemus}`);
  });
  
console.log("");