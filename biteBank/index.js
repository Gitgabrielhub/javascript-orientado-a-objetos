import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente('Ricardo',22200011102);
const cliente2 = new Cliente('Alice',55544499907);
let quantidadeContas = 0;



const contaCorrenteRicardo = new ContaCorrente(1001,cliente1);
console.log(contaCorrenteRicardo)

contaCorrenteRicardo.depositar(500)

const contaCorrenteAlice= new ContaCorrente(cliente2,102 )



contaCorrenteRicardo.transferir(300,contaCorrenteAlice)
contaCorrenteAlice.transferir(110, contaCorrenteRicardo)

console.log(ContaCorrente.numeroContas)

