import { Admin } from "./Admin.js";
import User from "./User.js";
import { Doscente } from "./doscente.js";


const novoUser = new User('gabriel','g@g.com','21-092001')
console.log(novoUser.exibirInfos)

const novoAdmin = new Admin('rafaela','r@r.com', '2012-04-18' )
console.log(novoAdmin.nome = 'joao')

novoAdmin.nome = 'maira'
console.log(novoAdmin.nome)

//const novoDoscente = new 