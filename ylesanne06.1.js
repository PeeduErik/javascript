var broneeringuArv = parseInt(prompt("Sisesta inimeste arv:"));


switch (true) {
    case broneeringuArv >= 1 && broneeringuArv <= 2:
        console.log("Valige laud kahele inimesele.");
        break;
    case broneeringuArv >= 3 && broneeringuArv <= 4:
        console.log("Valige laud neljale inimesele.");
        break;
    case broneeringuArv >= 5 && broneeringuArv <= 6:
        console.log("Valige laud kuuele inimesele.");
        break;
    default:
        console.log("Valige suur laud.");
}
console.log("");