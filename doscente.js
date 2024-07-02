import User from "./User.js";

export class Doscente extends User{
    constructor(nome,email,nascimento,role='docente',ativo=true){
        super(nome,email,nascimento,role,ativo)
    }

    aprovaEstudante(estudante, curso){
        return `estudante ${estudante} aprovado no curso de ${curso}`
    }


}
