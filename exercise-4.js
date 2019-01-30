// Assign variabel tanggal dengan angka 1 - 31
var tanggal = 22
// Assign variabel bulan dengan angka 1 - 12
var bulan = 12
// Assign variabel tahun dengan angka 1900 - 2200
var tahun = 1996

if((tanggal >= 1 && tanggal <= 31) && (bulan >= 1 && bulan <= 12) && (tahun >= 1900 && tahun <= 2200)) {
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
}
else {
    console.log ("Assign tanggal dengan angka 1 - 31")
    console.log ("Assign bulan dengan angka 1 -12")
    console.log ("Assign tahun dengan angka 1900 - 2200")
}
