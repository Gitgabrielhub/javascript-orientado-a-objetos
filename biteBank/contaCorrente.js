import { Cliente } from "./cliente.js";

export class ContaCorrente{
    static numeroContas = 0;
    //publicos
    agencia;
    _cliente;

    //privados
    _Saldo= 0;
     
    get saldo(){
        return this._Saldo
    }
    
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor
        }
    }
    constructor(agencia,cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroContas +=1 
    }
    get cliente(){
        return this._cliente
    }
    sacar(valor){
        
        if(this._Saldo >= valor){
            this._Saldo -= valor;
            return valor
        }
    }
    depositar(valor){
        if(valor > 0){
            return this._Saldo += valor;
        }

        
    }
    transferir(valor,conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}