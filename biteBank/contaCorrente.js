export class ContaCorrente{
    Agencia;
    cliente;
    _Saldo= 0;
    

    sacar(valor){
        
        if(this._Saldo >= valor){
            this._Saldo -= valor;
            return valor
        }
    }
    depositar(valor){
        if(valor> 0){
            return;
        }
        this._Saldo += valor;
    }
    transferir(valor,conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}