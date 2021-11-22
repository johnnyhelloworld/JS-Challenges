'use strict';

let dauphinsScores = [
  [44, 23, 71],
  [85, 54, 41],
];

let koalasScores = [
  [65, 54, 49],
  [23, 34, 27],
];

// 1.
function calcAverage(array){
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  // console.log(array.reduce(reducer));
  let total = array.reduce(reducer);
  let average = total / array.length;
  return average.toFixed(2);
}

// 2.
for (let i=0; i<dauphinsScores.length; i++){
  console.log(calcAverage(dauphinsScores[i]));
}

for (let i=0; i<koalasScores.length; i++){
  console.log(calcAverage(koalasScores[i]));
}

// 3.
function checkWinner(array1, array2){
  for (let i=0; i<array1.length; i++){
    if (calcAverage(array1[i]) > calcAverage(array2[i])*2){
      console.log(`L'équipe Dauphin gagne (${calcAverage(array1[i])} vs ${calcAverage(array2[i])})`);
    }
    else if (calcAverage(array2[i]) > calcAverage(array1[i])*2){
      console.log(`L'équipe Koala gagne (${calcAverage(array2[i])} vs ${calcAverage(array1[i])})`);
    }
    else {
      console.log("Une équipe gagne seulement si elle a au moins le double de la moyenne de score de l'autre équipe. Sinon, personne ne gagne !");
    }
  } 
}
  
//4.
checkWinner(dauphinsScores, koalasScores);