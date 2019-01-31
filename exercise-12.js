function konversiMenit(menit) {
  var jam = "1:"
  var menitBaru = menit - 60

  if (menit >= 60 && menit <= 69 && menit < 120) {
    return jam + "0" + menitBaru;
  }
  else if (menit >= 60 && menit >= 70 && menit < 120) {
    return jam + menitBaru;
  }
  else if (menit >= 120 && menit <= 129) {
    jam = "2:"
    menitBaru = menit - 120;
    return jam + "0" + menitBaru;
  }
  else if (menit >= 130) {
    jam = "2:"
    menitBaru = menit - 120;
    return jam + menitBaru;
  }
  else {
    return "0:" + menit;
  }
}
console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));