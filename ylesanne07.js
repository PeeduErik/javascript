const products = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];

for (let i = 0; i < products.length; i++) {
    // Vaata, kas toode on Muna, Sibul või Riis
    if (products[i] === "Muna" || products[i] === "Sibul" || products[i] === "Riis") {
        continue; // Jäta need tooted vahele
    }

    // Kuva järjekorranumber ja toode
    console.log((i + 1) + ". " + products[i]);

    // Peatu pärast 10 toote kuvamist
    if (i >= 9) {
        break;
    }
}
console.log("");