// Küsi kasutajalt number
var number = parseFloat(prompt("Sisesta number:"));

// Kontrolli, kas sisestatud väärtus on number
if (!isNaN(number)) {
    // Kasuta switch-case konstruktsiooni, et kontrollida numbrit
    switch (true) {
        case number > 0:
            console.log("Sisestatud number on positiivne.");
            break;
        case number < 0:
            console.log("Sisestatud number on negatiivne.");
            break;
        default:
            console.log("Sisestatud number on null.");
    }
} else {
    console.log("Vigane sisend. Palun sisesta number korrektselt.");
}
console.log("");