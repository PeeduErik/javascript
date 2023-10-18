

console.log("");
// Küsi kasutajalt nime
var kasutajanimi1 = prompt("Sisesta oma kasutajanimi:");

// Kontrolli, kas kasutajanimi on "admin" ja väljasta vastav sõnum
if (kasutajanimi1 === "admin") {
    console.log("Tere, administraator!");
} else {
    console.log("Tere, külaline!");
}
console.log("");