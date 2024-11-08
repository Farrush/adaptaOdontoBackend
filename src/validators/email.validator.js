export default function validar(email){
    if(email == null || email == undefined || email.trim() == null)
        throw new Error("Email não foi inserido")
    if(!email.includes('@') || email.length < 7)
        throw new Error('Email inválido')
    if(email.length >= 255){
        throw new Error('Email ultrapassou o limite de caracteres')
    }
}