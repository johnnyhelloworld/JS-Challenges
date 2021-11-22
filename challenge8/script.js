'use strict';

// 1.
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// 2.
let tips = [];
let totals = [];

// 3.
function calcTip(bill){
  if (bill >= 50 && bill <= 300){
    let tips = bill * 0.15;
    return tips;
  }
  else {
    let tips = bill * 0.2;
    return tips;
  }
}

tips = bills.map((element) => {
  return calcTip(element);
});

console.log(tips);

for (let i = 0; i < bills.length; i++){
  totals[i] = bills[i] + tips[i];
}

console.log(totals);

function calcAverage(array){
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  // console.log(array.reduce(reducer));
  let total = array.reduce(reducer);
  let average = total / array.length;
  return average.toFixed(2);
}

console.log(`La moyenne des totaux est de ${calcAverage(totals)}`);