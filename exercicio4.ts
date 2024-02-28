let idade = 23;

type verificarIdade = (idade: number) => number;
let verificarMaioridade = (idade) >= 21 ? 'Maior de idade' :
'Menor de idade';

console.log(verificarMaioridade);