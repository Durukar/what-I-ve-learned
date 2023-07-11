let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varATemp = varA;
varA = varB;
varB = varC;
varC = varATemp;

console.log(varA, varB, varC);

// Maneira moderna

[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);