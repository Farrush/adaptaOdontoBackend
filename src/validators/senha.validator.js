export default function validar(senha){
    if(senha == null || senha == undefined || senha == '' || senha.trim() == '')
        throw new Error("Senha não foi inserida")
    if(senha.length >= 255)
        throw new Error("Senha ultrapassou o limite de caracteres")
    if(senha.length < 8)
        throw new Error("A senha deve conter no mínimo 8 dígitos")
}