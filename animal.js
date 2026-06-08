const animal = {
    nome: "Polla Negra", //string
    especie: "Ave", //string
    idade: 4, //numeber
    tutor: false, // bolean
    vacinado: false // bolean
};

//console.log(animal);
console.log(animal.nome);
console.log(animal.tutor);

animal.idade =  6,
//console.log(animal);

console.log(`${animal.nome} é um ${animal.especie} com a idade ${animal.idade} e não possui vacina ${animal.vacinado}.`);
