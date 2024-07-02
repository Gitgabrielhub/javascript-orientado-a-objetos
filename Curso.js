class Curso{
    constructor(nomeCurso, idCurso,cadastroCurso,SituacaoInscricao){
        this.nomeCurso = nomeCurso;
        this.idCurso = idCurso;
        this.cadastroCurso = cadastroCurso;
        this.SituacaoInscricao = SituacaoInscricao;
     }
     
     cursos = []

     criarCurso(nome,id){

        if(this.SituacaoInscricao === true ){
            console.log(`as vagas para o curso de ${this.nomeCurso} estão abertas`);

            this.cursos.push({nome,id});
            return this.cursos

        }else{
            console.log(`as inscrições para o curso ${this.nomeCurso} já estão encerradas`)
        }
     }
     removerCurso({nome, id}){
        this.cursos.filter((curso, identificacao)=>{
            if(nome === curso || id === identificacao){
                return 
            }
        })
     }
     
     
}
let curso = new Curso('Humanas','10','00101',true).criarCurso('constitucional', '0021')
let curso2 = new Curso('exatas','020','00202',true).criarCurso('introducao a matematica', '0022')
console.log(Curso)
