'use strict';

// 1.
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

console.log(calcTip(100));

// 2.
let bills = [125, 555, 44];

// 3.
let tips = bills.map((element) => {
  return calcTip(element);
});

console.log(tips);

// 4.
let totals = [];
for (let i = 0; i < bills.length; i++){
  totals[i] = bills[i] + tips[i];
}

console.log(totals);