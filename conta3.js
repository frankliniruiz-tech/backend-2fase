class ContaBancaria {
    #saldo; // o "#" deixa privado os dados.

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(valor){
         if (valor <= 0){
            console.log("Valor de depósito inválido.");
            return;
         }
           this.#saldo += valor; 
    }
    sacar(valor){
        if (valor > this.#saldo){
            console.log("Saldo insuficiente.");
            return;
        }
        this.saldo -= valor;
    }
    get saldoAtual(){
        return this.saldo;
    }
}

const contas = [new ContaBancaria("NICOLAS MADURO", 2000), new ContaBancaria("Kazushi", 305)];

contas.forEach((conta) => console.log(`${conta.titular}`));
