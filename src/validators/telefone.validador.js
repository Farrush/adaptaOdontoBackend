export default function validar(telefone){
    if(telefone.trim() == '' || telefone == '' || telefone == null)
        throw new Error("O número de telefone não foi inserido")
    if(telefone.length < 8)
        throw new Error("O número mínimo de dígitos para o telefone é 8")
}