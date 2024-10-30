export default function validar(hora){
    if(hora == undefined || hora == null)
        throw new Error("Hora do agendamento não foi inserida")
    if(!hora.includes(':'))
        throw new Error("Formato de hora inválido")
    let horaSeparada = hora.split(':')
    if(horaSeparada[0] > 23 || horaSeparada[0] < 0)
        throw new Error("Campo das horas com valor inválido, tente de 0 a 23")
    if(horaSeparada[1] > 59 || horaSeparada[1] < 0)
        throw new Error("Campo de minutos com valor inválido, tente de 0 a 59")
}