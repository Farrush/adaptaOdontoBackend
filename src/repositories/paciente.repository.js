import con from './connection.js'

export async function sPacientes(){
    const sql = "select id_paciente id, nome, rg, telefone from paciente"

    return await con.query(sql)
}

export async function sPaciente(id){
    const sql = "select id_paciente id, nome, rg, telefone from paciente where id_paciente = ?"

    return await con.query(sql, [id])
}
export async function iPaciente(paciente){
    const sql = "insert into paciente (nome, rg, telefone) values (?, ?, ?)"

    return await con.query(sql, [paciente.nome, paciente.rg, paciente.telefone])
}
export async function uPaciente(paciente){
    const sql = "update paciente set nome = ?, rg = ?, telefone = ? where id_paciente = ?"
    return await con.query(sql, [paciente.nome, paciente.rg, paciente.telefone, paciente.id])
}

export async function dPaciente(id){
    const sql = "delete from paciente where id_paciente = ?"
    return await con.query(sql, [id])
}

