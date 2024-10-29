import { uLogin, iLogin, dLogin, authLogin, sLogin, sLogins } from "../repositories/login.repository.js";
import validarEmail from '../validators/email.validator.js'
import validarNome from "../validators/nome.validator.js";
import validarSenha from '../validators/senha.validator.js'

export async function buscarLogins(){
    const [dados] = await sLogins()
    return dados
}
export async function buscarLogin(id){
    const [login] = await sLogin(id)
    return login[0]
}
export async function autenticarLogin(email, senha){
    validarEmail(email)
    validarSenha(senha)
    const [login] = await authLogin(email, senha)
    return login[0]
}
export async function novoLogin(login){
    validarEmail(login.email)
    validarNome(login.nome)
    validarSenha(login.senha)
    const [dados] = await iLogin(login)
    return dados.insertId
}
export async function alterarLogin(login, id){
    validarEmail(login.email)
    validarNome(login.nome)
    validarSenha(login.senha)
    login = {...login, id}
    const [dados] = await uLogin(login)
    return dados.affectedRows
}
export async function deletarLogin(id){
    const [dados] = await dLogin(id)
    return dados
}