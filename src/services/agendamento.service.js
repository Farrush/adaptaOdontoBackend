import { sAgenda, sAgendas, iAgenda, uAgenda, dAgenda } from "../repositories/agendamento.repository.js";

export async function buscarAgendamentos(){
    const [dados] = await sAgendas()
    return dados
}
export async function buscarAgendamento(id){
    const [agendamento] = await sAgenda(id)
    return agendamento[0]
}
export async function novoAgendamento(agendamento){
    const [dados] = await iAgenda(agendamento)
    return dados.insertId
}
export async function alterarAgendamento(agendamento, id){
    agendamento = {...agendamento, id}
    const [dados] = await uAgenda(agendamento)
    return dados.affectedRows
}
export async function deletarAgendamento(id){
    const [dados] = await dAgenda(id)
    return dados.affectedRows
}