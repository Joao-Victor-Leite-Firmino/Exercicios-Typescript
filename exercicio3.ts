interface Animal {
    emitirSom(): string;
}

let gato: Animal = {
    emitirSom() {
        return "miau";
    }
};

console.log(gato.emitirSom())