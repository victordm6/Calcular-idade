function calcularIdade(anos) {

    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
};

const pessoa1 = {
    nome: 'Helena',
    idade: 42
};

const pessoa2 = {
    nome: 'Joao',
    idade: 12
};

console.log(calcularIdade.call(pessoa1, 30));
