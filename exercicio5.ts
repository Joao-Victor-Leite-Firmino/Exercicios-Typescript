function saudacao(nome: string, sobrenome?: string): string {
    if (sobrenome) {
      return `Olá, ${nome} ${sobrenome}!`;
    } else {
      return `Olá, ${nome}!`;
    }
  }
  
console.log(saudacao("João"))
console.log(saudacao("João", "Firmino"))