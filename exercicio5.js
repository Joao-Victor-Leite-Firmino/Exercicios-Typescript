var nome = "João";
var sobrenome = "Firmino";
function saudacao(nome, sobrenome) {
    if (sobrenome) {
        return "Ol\u00E1, ".concat(nome, " ").concat(sobrenome, "!");
    }
    else {
        return "Ol\u00E1, ".concat(nome, "!");
    }
}
saudacao(nome, sobrenome);
