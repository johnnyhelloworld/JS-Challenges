'use strict';

let dauphinsScores = [
  [96, 108, 89],
  [97, 112, 101],
  [97, 112, 101],
];

let koalasScores = [
  [88, 91, 110],
  [109, 95, 123],
  [109, 95, 106],
];

// 1.
function averageScore(array){
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  // console.log(array.reduce(reducer));
  let total = array.reduce(reducer);
  let average = total / array.length;
  return average.toFixed(2);
}

for (let i=0; i<dauphinsScores.length; i++){
  console.log(averageScore(dauphinsScores[i]));
}

for (let i=0; i<koalasScores.length; i++){
  console.log(averageScore(koalasScores[i]));
}

// 2. + 3.
function compareAverages(array1, array2){
  for (let i=0; i<array1.length; i++){
    if (averageScore(array1[i]) > 100 || averageScore(array2[i]) > 100){
      if (averageScore(array1[i]) > averageScore(array2[i])){
        console.log("Le gagnant de la compétition est la team Dauphins !");
      }
      else if (averageScore(array1[i]) < averageScore(array2[i])){
        console.log("Le gagnant de la compétition est la team Koalas !");
      }
      else if (averageScore(array1[i]) == averageScore(array2[i])){
        console.log("Egalité !");
      }
    } else {
      console.log("Une équipe ne peut gagner seulement si sa moyenne de score est supérieure à 100. Sinon, il n'y a pas de gagnant.")
    }
  }
} 
  
compareAverages(dauphinsScores, koalasScores);