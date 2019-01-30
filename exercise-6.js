// 1. Melakukan Looping Menggunakan While
// LOOPING PERTAMA
var while1 = 2
while (while1 <= 20) {
    console.log (while1 + " - I love coding ");
    while1 += 2;
}
// LOOPING KEDUA
var while2 = 20
while (while2 >= 2) {
    console.log (while2 + " - I will become fullstack developer ");
    while2 -= 2;
}
//------------------------------------------------------------------//
// 2. Melakukan Looping Menggunakan For
// LOOPING PERTAMA
for (var for1 = 1; for1 <= 20; for1++) {
    console.log (for1 + " - I love coding ");
}
// LOOPING KEDUA
for (var for2 = 20; for2 >= 1; for2--) {
    console.log (for2 + " - I will become fullstack developer ");
}
//------------------------------------------------------------------//
// 3. Angka Ganjil dan Genap
// 3.1. 
var a = 1
while (a <= 100) {
    console.log ( a );
    a++
}
// 3.2.
var a = 1
while (a <= 100) {
    if (a % 2 == 0) {
        console.log (a + " = GENAP ");
    }
    else {
        console.log (a + " = GANJIL ");
    }
    a++;
}
// 3.3.
// Pertambahan counter 2
var c2 = 1
while (c2 <= 100) {
    console.log (c2);
    c2 += 2;
}
// Pertambahan counter 5
var c5 = 1
while (c5 <= 100) {
    console.log (c5);
    c5 += 5;
}
// Pertambahan counter 9
var c9 = 1
while (c9 <= 100) {
    console.log (c9);
    c9 += 9;
}
// 3.4.
// KELIPATAN 3
var c2 = 1
while (c2 <= 100) {
    if (c2 % 3 == 0) {
    console.log (c2, c2 + " KELIPATAN 3");
    }
    else {
        console.log (c2);
    }
    c2 += 2;
}
// KELIPATAN 6
var c5 = 1
while (c5 <= 100) {
    if (c5 % 6 == 0) {
    console.log (c5, c5 + " KELIPATAN 6");
    }
    else {
        console.log (c5);
    }
    c5 += 5;
}
// KELIPATAN 10
var c9 = 1
while (c9 <= 100) {
    if (c9 % 10 == 0) {
    console.log (c9, c9 + " KELIPATAN 10");
    }
    else {
        console.log (c9);
    }
    c9 += 9;
}