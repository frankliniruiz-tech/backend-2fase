function criarConta(titular, saldoInicial) {
    let saldo = saldoInicial;

    return{
        titular,
        depositar(valor){
            if (valor <= 0){
                console.log("Valor do depósitivo inválido.");
                return; // para o processo.
            }
            saldo += valor;
        },
        sacar(valor) {
            if (valor => saldo){
                console.log("Saque realizado com sucesso!");
                return;
            }
            saldo -= valor;
        },
        get saldoAtual(){
            return saldo;
        },
    };
};

const contas = [criarConta("NICOLAS MADURO", 5000), criarConta("Kazushi Sudou", 5000)];
//                                          0

//contas[0].depositar(6220);
contas[1].sacar(100);

contas.forEach((conta) => { //forEach > para cada item do array
    console.log(`${conta.titular} tem R$ ${conta.saldoAtual}`);
})