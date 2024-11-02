export default function validar(data){
    if(data == undefined || data == null)
        throw new Error("Data do agendamento não foi inserida")
    if(isNaN(new Date(data)))
        throw new Error("Data em formato inválido")
    if(new Date(data) < new Date())
        throw new Error("Não é possível marcar um agendamento para o passado")

}