
var number = parseFloat(prompt("Sisesta number:"));

if (!isNaN(number)) {
    
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