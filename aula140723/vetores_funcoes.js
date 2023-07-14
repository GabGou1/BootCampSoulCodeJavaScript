const nums = [6, 9, 0, 3,8 ,1 , 4, 2, 5, 7, 7];
console.log(nums);

nums.push(4); // Adiciona o valor ao final do Vetor
console.log(nums);

nums.unshift(9); // Adiciona no inicio do Vetor
console.log(nums);

nums.pop(); // Remove um elemento do final do Vetor
console.log(nums);

nums.shift(); // Remove um elemento do inicio do Vetor
console.log(nums);

let juncao = nums.join("-"); // Transforma o vetor em uma string, faz a junção
console.log(juncao);

let vetor2 = [5, 6, 7];
let vetor_final = nums.concat(vetor2); // Gera uma nova Array que concatena dois vetores dentro dela
console.log(vetor_final);

console.log(vetor_final.sort()); // Organiza o vetor por ordem alfabética

vetor_final.push(100, 101, 1000);
console.log(vetor_final.sort()); // É melhor para organizar vetores com strings

console.log(vetor_final.reverse()); // Gera um novo elemento com a ordem reversa

console.log(vetor_final.includes(10)); // Retorna um boolean

//console.log(vetor_final.fill(0)); Preenche todos os elementos com 0 (modifica o vetor)

console.log(vetor_final.indexOf(3)); // Retorna o indice do primeiro elemento do vetor

console.log(vetor_final.splice(6, 3)); // Remove de acordo com o indece, o numero dos indeces
console.log(vetor_final);

console.log(vetor_final.slice(2, 5)) // Retorna um vetor do indice 2 a 5-1 (não modifica)

vetor_final.forEach(num => console.log(num)); // Itera sobre os elementos do vetor

console.log(vetor_final.reduce((acumulador, num) => (acumulador - num), 0)); // reduce -> efetuar a redução dos valores em um valor acumulativo

console.log(vetor_final.map(num => (num * 2))); // Multiplica todos os valores por 2

console.log(vetor_final.find(num => (num > 8))); // Retorna o primeiro valor que corresponde a condição específica

console.log(vetor_final.filter(num => (num % 2 == 0))); // Retorna um vetor com elementos que correspondem a condição

// String como Vetor
let nome = "Prof. Gabriel Braga";
let idade = 21;
let mensagem = `Nome: ${nome}\nIdade: ${idade}`; // Interpolação
console.log(mensagem);

console.log(nome[2]); // Perfeitamente válido retorna o O

console.log("A pessoa com o nome \"Gabriel\" está esperando você na recepção.");