'use strict';

// 1. et 2.
const person1 = {
  name: 'Bernard',
  height: 1.69,
  weight: 78,
  calcBMI: function() {
    return (this.weight / (this.height * this.height)).toFixed(1);
  },
  bmi: '',
}

const person2 = {
  name: 'Marcel',
  height: 1.95,
  weight: 92,
  calcBMI: function() {
    return (this.weight / (this.height * this.height)).toFixed(1);
  },
  bmi: '',
}

// 3.
console.log(`L'IMC de Bernard (${person1.calcBMI()}) est plus élevé que celui de Marcel (${person2.calcBMI()})`);