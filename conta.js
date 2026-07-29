let saldoJose = 1000;
let saldoMario = 500;

const taxaJuros = 0.02;
const saldoComJuros = saldoJose * (1 + taxaJuros);

const contaJose = {
  titulas: "Jose",
  saldo: saldoJose
};

const contaMario = {
  titular: "Mario",
  saldo: saldoMario
};

const contas = [contaJose, contaMario]; //Array (lista)

contas.forEach((conta) => {
  console.log(`Titular: ${conta.titular} tem R$ ${conta.saldo}`);
})

contaJose.saldo = -5000;
console.log(`Saldo altereado sem controle: ${contaJose.saldo}`);
