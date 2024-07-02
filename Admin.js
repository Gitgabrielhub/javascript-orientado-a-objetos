import User from "./User.js";


export class Admin extends User {
    constructor(nome,email,nascimento,role='admin',ativo=true){
        super(nome,email,nascimento,role,ativo)
    }

    exibirInfos(){
        return ` ${this.nome}, ${this.role}, ${this.email} `
    }

    criarCurso(nomeDoCurso,Vagas){
        return `curso de ${nomeDoCurso} criado com ${Vagas}`
    }
}

