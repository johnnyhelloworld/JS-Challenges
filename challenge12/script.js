'use strict';

// 1. 

const temperatures1 = [17, 21, 23];
const temperatures2 = [12.5, 5, -5, 0, 4];

temperatures1.map((temperature, index) => 
  console.log(`${temperature} degrés dans ${index + 1} jours`));

temperatures2.map((temperature, index) => 
  console.log(`${temperature} degrés dans ${index + 1} jours`));