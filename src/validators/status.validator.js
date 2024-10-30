export default function validar(status){
    if(status == undefined || status == null)
        throw new Error("Status do agendamento não foi definido")
    if(status != "Confirmado" && status != "Cancelado" && status != "Concluído")
        throw new Error("O valor de status deve ser 'Confirmado', 'Cancelado' ou 'Concluído'")
}