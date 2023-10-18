// Algne mündimassiiv
const coins = [200, 0.2, 10, 0.01, 2, 1, 0.1, 0.02, 0.05, 100, 5, 0.5, 50, 20];

// Uus massiiv mündi ja summa hoidmiseks
const sortedCoins = [];
let sum = 0;

// Sorteerime välja mündid ja lisame uude massiivi
while (coins.length > 0) {
    const coin = coins.pop();
    sortedCoins.push(coin);
    sum += coin;
}

// Kuva sorteeritud mündid
console.log("Sorteeritud mündid:", sortedCoins);

// Kuva, mitu münti saadi ja nende summa
console.log("Said", sortedCoins.length, "münti, mille kogusumma on", sum);
console.log("");