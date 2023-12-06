const products = ["Õunad", "Piim", "Leib", "Juust", "Tomatid", "Kanafilee", "Muna", "Sibul", "Apelsinid", "Riis", "Jogurt", "Kartul", "Kalafilee", "Pasta", "Jogurtijook", "Porgandid", "Virsikud", "Pähklid", "Rosinad", "Kapsas", "Kreeka jogurt", "Veiseliha", "Banaanid", "Oliivid", "Mandlid", "Magus kartul", "Greibid"];

for (let i = 0; i < products.length; i++) {
    if (products[i] === "Muna" || products[i] === "Sibul" || products[i] === "Riis") {
        continue; 
    }
    console.log((i + 1) + ". " + products[i]);
    if (i >= 9) {
        break;
    }
}
console.log("");