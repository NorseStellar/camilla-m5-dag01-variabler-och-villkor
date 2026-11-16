for (let i = 1; i <= 5; i++) {
   console.log(i);
}

// --- for-of-loop ---
const priser = [35, 32, 59, 45];
console.log(priser.length);
console.log(priser[0]);
for (const pris of priser) {
   console.log(pris);
}

console.log("Hejsan");

// --- Upppgift 1 ---
const mittNamn = "Camilla";
console.log(mittNamn);

// --- Uppgift 2 ---
const talet1 = 10;
const talet2 = 20;
const talet3 = 50;
const talet4 = 25;
console.log(talet1 + talet2 + talet3 + talet4);

// --- Uppgift 3 ---
if (talet3 > talet2) {
   console.log(talet3 + " är större än " + talet2);
} else {
   console.log("Talet " + talet3 + " är mindre än " + talet2);
}

// --- Uppgift 4 ---
const tal1 = 1;
const tal2 = 2;
const tal3 = 3;
const tal4 = 4;
const tal5 = 5;

const tal = [tal1, tal2, tal3, tal4, tal5];

for (let i = 0; i < tal.length; i++) {
   console.log("Tal: " + tal[i]);
}

// --- Uppgift 4 med namn ---
const namn1 = "Ellie";
const namn2 = "Minna";
const namn3 = "Lucas";
const namn4 = "Albin";

const namn = [namn1, namn2, namn3, namn4];

for (let i = 0; i < namn.length; i++) {
   console.log(namn[i]);
}

// --- Uppgift 5 ---
function dubbla(tal: number): number {
   return tal * 2;
}

for (let i: number = 1; i <= 5; i++) {
   console.log(dubbla(i));
}

// --- Test med if och else ---
// Skapa veckodag och klockslag
let veckodag = "lördag";
let klockslag = 15;

// Avgör om kaféet är öppet
let oppet = false;

if (veckodag === "lördag" || veckodag === "söndag") {
   // Helger: öppet 9–16
   if (klockslag >= 9 && klockslag < 16) {
      oppet = true;
   }
} else {
   // Vardagar: öppet 7–18
   if (klockslag >= 7 && klockslag < 18) {
      oppet = true;
   }
}

// Skriv ut resultatet
if (oppet) {
   console.log("Öppet just nu: ja");
} else {
   console.log("Öppet just nu: nej");
}
