// Masukan variabel tanggal dengan angka 1 - 31
var tanggal = 22
// Masukan variabel bulan dengan angka 1 - 12
var bulan = 12
// Masukan variabel tahun dengan angka 1900 - 2200
var tahun = 1996

switch (bulan) {
    case 1 :
    bulan = " January ";
    break;
    case 2 : 
    bulan = " February ";
    break;
    case 3 : 
    bulan = " March";
    break;
    case 4 : 
    bulan = " April ";
    break;
    case 5 : 
    bulan = " May ";
    break;
    case 6 : 
    bulan = " June ";
    break;
    case 7 : 
    bulan = " July ";
    break;
    case 8 : 
    bulan = " August ";
    break;
    case 9 : 
    bulan = " September "
    break;
    case 10 :
    bulan = " October "
    break;
    case 11 :
    bulan = " November "
    break;
    case 12 :
    bulan = " December "
    break;
}

console.log(tanggal + bulan + tahun);