import { sAgenda, sAgendas, iAgenda, uAgenda, dAgenda } from "../repositories/agendamento.repository.js";
import validarData from "../validators/data.validator.js";
import validarHora from "../validators/hora.validator.js";
import validarStatus from '../validators/status.validator.js'
export async function buscarAgendamentos(){
    const [dados] = await sAgendas()
    return dados
}
export async function buscarAgendamento(id){
    const [agendamento] = await sAgenda(id)
    return agendamento[0]
}
export async function novoAgendamento(agendamento){
    if(agendamento.data && agendamento.data.includes('T'))
        agendamento = {...agendamento, data: agendamento.data.split('T')[0]}
    validarData(agendamento.data)
    validarHora(agendamento.hora)
    validarStatus(agendamento.status)
    const [dados] = await iAgenda(agendamento)
    return dados.insertId
}
export async function alterarAgendamento(agendamento, id){
    validarData(agendamento.data)
    validarHora(agendamento.hora)
    validarStatus(agendamento.status)
    agendamento = {...agendamento, id}
    const [dados] = await uAgenda(agendamento)
    return dados.affectedRows
}
export async function deletarAgendamento(id){
    const [dados] = await dAgenda(id)
    return dados.affectedRows
}