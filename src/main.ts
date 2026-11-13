import "./kalibrering";

// Dag 1: Variabler, typer och villkor. Följ README.md steg för steg.
// Resultatet syns i Console (F12). Spara, så laddas sidan om av sig själv.
// Röda understrykningar i VS Code är TypeScript som varnar. Håll musen över dem och läs.

// STEG 1 ------------------------------------------------------------
// TODO: skriv ut texten "Hej från Kafé Kardemumma" med console.log
console.log("Hej från Kafé Kardemumma");

// STEG 2 ------------------------------------------------------------
// TODO: skapa konstanten kafeNamn (string) med värdet "Kafé Kardemumma"
// TODO: skapa konstanterna prisBulle (number, 35) och prisKaffe (number, 32)
// TODO: skapa variablerna antalBullar (2) och antalKaffe (1) med let, båda number
// TODO: skriv ut kafeNamn
//       Skriv typen själv, till exempel:  const kafeNamn: string = "..."

const kafeNamn = "Kafé Kardemumma";
const prisBulle = 35;
const prisKaffe = 32;

let antalBullar = 2;
let antalKaffe = 1;

console.log(kafeNamn);

// STEG 3 ------------------------------------------------------------
// TODO: skapa en string, ett number, en boolean, en undefined och en null
//       Typerna heter string, number, boolean, undefined och null
// TODO: skriv ut typeof för alla fem på en rad (tips: separera med komma)
// TODO: prova att ge number-variabeln en text. Vad säger TypeScript?
// SVAR: TypesCript säger: string string boolean undefined object

const kolaKaka: string = "Kolakaka";
const kakPris: number = "15";
const finnsLager: boolean = true;
let x: undefined = undefined;
const y: null = null;

console.log(typeof kolaKaka, typeof kakPris, typeof finnsLager, typeof x, typeof y);

// STEG 4 ------------------------------------------------------------
// TODO: räkna ut summa = antalBullar * prisBulle + antalKaffe * prisKaffe
// TODO: räkna ut momsDel (12 % ingår i priset): summa * 0.12 / 1.12
// TODO: skriv ut "Summa: ... kr" och "Varav moms (12 %): ... kr"
//       Moms ska ha två decimaler (toFixed(2))
//       Håll musen över momsDel.toFixed(2). Vilken typ ger toFixed?
// SVAR: number | undefined): string

const summa = antalBullar * prisBulle + antalKaffe * prisKaffe;
const momsDel = (summa * 0.12) / 1.12;
console.log("Summa: " + summa + " kr." + " Varav moms (12%):" + momsDel.toFixed(2) + " kr");

// STEG 5 ------------------------------------------------------------
// TODO: skapa ärStudent (boolean, true). Om ärStudent är true: rabatt 10 %.
// TODO: räkna ut attBetala (number) och skriv ut "Att betala: ... kr"
// SVAR: Att betala: 100 kr.

let prisStudent: number = 200;
let arStudent: boolean = true;

let rabattStudent: number = arStudent ? 0.1 : 0;
let attBetala: number = prisStudent * (1 - rabattStudent);

console.log(`Att betala: ${attBetala} kr.`);

// STEG 6 ------------------------------------------------------------
// TODO: skapa veckodag (string, "lördag") och klockslag (number, 15)
// TODO: avgör om kaféet är öppet (boolean): vardagar 7–18, helger 9–16
// TODO: skriv ut "Öppet just nu: ja" eller "Öppet just nu: nej"

// Start Test nr 1:
// Skapa veckodag och klockslag
let veckodag = "lördag";
let klockslag = 15;

// Avgör om kaféet är öppet
let oppet =
   (veckodag !== "lördag" && veckodag !== "söndag" && klockslag >= 7 && klockslag < 18) ||
   ((veckodag === "lördag" || veckodag === "söndag") && klockslag >= 9 && klockslag < 16);

// Skriv ut resultatet
console.log("Öppet just nu: " + (oppet ? "ja" : "nej"));

// Slut på test nr 1.

// // Test nr 2. if och else
// // Skapa veckodag och klockslag
// let veckodag = "lördag";
// let klockslag = 15;

// // Avgör om kaféet är öppet
// let oppet = false;

// if (veckodag === "lördag" || veckodag === "söndag") {
//    // Helger: öppet 9–16
//    if (klockslag >= 9 && klockslag < 16) {
//       oppet = true;
//    }
// } else {
//    // Vardagar: öppet 7–18
//    if (klockslag >= 7 && klockslag < 18) {
//       oppet = true;
//    }
// }

// // Skriv ut resultatet
// if (oppet) {
//    console.log("Öppet just nu: ja");
// } else {
//    console.log("Öppet just nu: nej");
// }

// STEG 7 ------------------------------------------------------------
// TODO: se README. Gissa först, kör sedan.
