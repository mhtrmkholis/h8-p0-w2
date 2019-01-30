// No. 1
var rows1 = 5;

while (rows1 !== 0) {
  console.log('*');
  rows1--;
}

// No. 2
var rows2 = 5;
var bintang = "";

for (var x = rows2; x > 0; x--) {
  bintang = "";
  for(var y = 0; y < rows2; y++) {
    bintang = bintang + '*';
  }
  console.log (bintang);
}

// No. 3
var rows3 = 5;
var bintang = "";

for (var x = 0; x < rows3; x++) {
  bintang = "";
  for (y = 0; y <= x; y++) {
    bintang = bintang + "*";
  }
  console.log (bintang);
}