var NumAvg = [];

outer: while (true) {
  var Num = prompt("Enter an integer (a negative integer to quit) ");
  n = parseFloat(Num);
  m = parseInt(Num);

  if (m >= 0 || NumAvg.length > 0) {
    if (m >= 0) {
      NumAvg.push(n);
    }
    if (m < 0) {
      {
        let sumNum = NumAvg.reduce((a, b) => a + b) / NumAvg.length;
        alert(
          "For the list: "+ NumAvg +", the average is " + sumNum.toFixed(2) +
            ", the maximun is " +
            Math.max.apply(Math, NumAvg) +
            ", the minnimun is " +
            Math.min.apply(Math, NumAvg)
        );

        break outer;
      }
    }
  } else {
    alert("Enter an integer (a negative integer to quit)  ");
  }
}


