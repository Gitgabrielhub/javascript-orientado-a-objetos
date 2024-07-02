import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./contaCorrente.js";

const cliente0 = new Cliente();
cliente0.nome = 'gabriel';
cliente0.cpf = '00022211108';
cliente0._Saldo = 300;
console.log(cliente0)

const contaCorrenteCliente0 = new ContaCorrente();
contaCorrenteCliente0.Agencia = 101;
contaCorrenteCliente0.cliente = cliente0;
contaCorrenteCliente0._Saldo = cliente0._Saldo;
console.log(contaCorrenteCliente0)

const conta2 = new ContaCorrente();
conta2.Agencia = 100;
conta2.cliente = 'aderbal';
conta2._Saldo = 210;
conta2.transferir(300,contaCorrenteCliente0 )


/* 
contacorrente.transferir(200,conta2)
console.log(conta2) */