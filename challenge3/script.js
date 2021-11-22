'use strict';

// 1.
const person1 = {
  name: 'Bernard',
  height: 1.69,
  weight: 78,
}

const person2 = {
  name: 'Marcel',
  height: 1.95,
  weight: 92,
}

const person3 = {
  name: 'Bernard',
  height: 1.88,
  weight: 95,
}

const person4 = {
  name: 'Marcel',
  height: 1.76,
  weight: 85,
}

// 2.
let imcBernard = Math.round(person1.weight / (person1.height * person1.height) * 10)/10;
console.log(imcBernard);

let imcMarcel = Math.round(person2.weight / (person2.height * person2.height) * 10)/10;
console.log(imcMarcel);

let imcBernard2 = Math.round(person3.weight / (person3.height * person3.height) * 10)/10;
console.log(imcBernard2);

let imcMarcel2 = Math.round(person4.weight / (person4.height * person4.height) * 10)/10;
console.log(imcMarcel2);

// 3.
let bernardHigherIMC = false;

if (imcBernard > imcMarcel){
  bernardHigherIMC = true;
  console.log(`Bernard a un IMC ${imcBernard} plus élevé que Marcel ${imcMarcel}`);
}
else {
  bernardHigherIMC = false;
  console.log(`Marcel a un IMC ${imcMarcel} plus élevé que Bernard ${imcBernard}`);
}

if (imcBernard2 > imcMarcel2){
  bernardHigherIMC = true;
  console.log(`Bernard a un IMC ${imcBernard2} plus élevé que Marcel ${imcMarcel2}`);
}
else {
  bernardHigherIMC = false;
  console.log(`Marcel a un IMC ${imcMarcel2} plus élevé que Bernard ${imcBernard2}`);
}

let people = [person1, person2, person3, person4];

people.forEach((element) => {
  let imc = Math.round(element.weight / (element.height * element.height) *10)/10;
  switch (true) {
    case imc < 20:
      console.log(`${element.name} : Insuffisance pondérale`);
      break;
    case imc >= 20 && imc < 25:
      console.log(`${element.name} : Poids normal`);
      break;
    case imc >= 25 && imc < 30:
      console.log(`${element.name} : Surpoids`);
      break;
    case imc >= 30 && imc < 40:
      console.log(`${element.name} : Obésité`);
      break;
    case imc > 40:
      console.log(`${element.name} : Obésité importante`);
      break;
  }
});