export default class User{
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email,nascimento,role, ativo=true){
        this.#nome = nome;
        this.#email=email;
        this.#nascimento = nascimento;
        this.#role= role || 'estudante';
        this.#ativo = ativo;
    }
    get email(){
        return this.#email
    }
    get nome(){
        return this.#nome
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.ativo
    }
    get nascimento(){
        return this.#nascimento
    }
    set email(email){
        return this.#email
    }
    set nome(nome){
        if(nome===''){
            throw new Error('formato não valido')
        }
        this.#nome = nome
    }
    set role(role){
        return this.#role
    }
    set ativo(ativo){
        return this.ativo
    }
    set nascimento(nascimento){
        return this.#nascimento
    }

    exibirInfos(){
        return ` ${this.nome}, ${this.role}, ${this.email} `
    }
    
}
