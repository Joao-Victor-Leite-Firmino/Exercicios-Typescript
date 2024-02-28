interface Pessoa {
    nome: String;
    idade: Number;
    passouJava: Boolean;
    torcePara: String[];
}

let umaPessoa: Pessoa = {nome: "João", idade: 23, passouJava: false, torcePara: ['Santos', 'Faze', 'GSW']};

console.log(umaPessoa);