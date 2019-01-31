function konversiMenit(menit) {
    var sisaMenit = menit % 60;
    if(sisaMenit < 10) {
      sisaMenit = "0" + menit % 60;
    }
    return Math.floor(menit / 60) + ":" + sisaMenit;
  }
  console.log(konversiMenit(63));
  console.log(konversiMenit(124));
  console.log(konversiMenit(53));
  console.log(konversiMenit(88));
  console.log(konversiMenit(120));
