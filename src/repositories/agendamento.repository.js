import con from './connection.js'

export async function sAgendas(){
    const sql = "select id_agendamento id, id_paciente paciente, dt_agendamento data, hr_agendamento hora, status, tratamento from agendamento"

    return await con.query(sql)
}

export async function sAgenda(id){
    const sql = "select id_agendamento id, id_paciente paciente, dt_agendamento data, hr_agendamento hora, status,"+
    " tratamento from agendamento where id_agendamento = ?"

    return await con.query(sql, [id])
}
export async function iAgenda(agendamento){
    const sql = "insert into agendamento (id_paciente, dt_agendamento, hr_agendamento, status, tratamento) values (?,?,?,?,?)"

    return await con.query(sql, [agendamento.paciente, agendamento.data, agendamento.hora, agendamento.status, agendamento.tratamento])
}
export async function uAgenda(agendamento){
    const sql = "update agendamento set id_paciente = ?, dt_agendamento = ?, hr_agendamento = ?, status = ?, tratamento = ? where id_agendamento = ?"
    return await con.query(sql, [agendamento.paciente, agendamento.data, agendamento.hora, agendamento.status, agendamento.tratamento, agendamento.id])
}

export async function dAgenda(id){
    const sql = "delete from agendamento where id_agendamento = ?"
    return await con.query(sql, [id])
}
