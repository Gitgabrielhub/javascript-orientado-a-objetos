import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = 'Ricardo';
cliente1.cpf = 22200011102;

const cliente2 = new Cliente();
cliente2.nome = 'Alice'
cliente2.cpf = 55544499907;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia =1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo.depositar(500)

const conta2 = new ContaCorrente()
conta2.cliente = cliente2
conta2.agencia = 102


contaCorrenteRicardo.transferir(300,conta2)
console.log(conta2) 

