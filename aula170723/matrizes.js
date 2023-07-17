const vetor1 = [1, 3, 5, 7, 9];
const vetor2 = [2, 4, 6, 8, 0];
const vetor3 = [1, 2, 3, 4, 5];
const vetor4 = [6, 7, 8, 9, 0];

const matriz = [vetor1, vetor2, vetor3, vetor4];

console.log(vetor1);
console.log(matriz[0][3]);

const matriz3D = [
  [
    [1, 2], // matriz3D [0][0]
    [3, 4] // matriz3D [0][1]
  ],
  [
    [5, 6], // matriz3D [1][0]
    [7, 8] // matriz3D [1][1]
  ]
];

console.log(matriz3D[1][0][0]); // Acessar o elemento 5
console.log(matriz3D[1][1][1]); // Acessar o elemento 8

const matriz3x3 = [
  [1, 8, 4],
  [6, 5, 9],
  [2, 3, 7]
];

for (let x = 0; x < matriz3x3.length; x++) {
  for (let y = 0; y < matriz3x3[x].length; y++) {
    console.log(matriz3x3[x][y]);
  }
}