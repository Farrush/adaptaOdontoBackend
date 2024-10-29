import con from './connection.js'

export async function authLogin(email, senha){
    const sql = "select id_login id, nome, email from login where email = ? and senha = sha2(?, 256);"
    return await con.query(sql, [email, senha])
}
export async function sLogins(){
    const sql = "select id_login id, nome, email from login"

    return await con.query(sql)
}

export async function sLogin(id){
    const sql = "select id_login id, nome, email from login where id_login = ?"

    return await con.query(sql, [id])
}
export async function iLogin(login){
    const sql = "insert into login (nome, email, senha) values (?, ?, sha2(?, 256))"

    return await con.query(sql, [login.nome, login.email, login.senha])
}
export async function uLogin(login){
    const sql = "update login set nome = ?, email = ?, senha = sha2(?, 256) where id_login = ?"
    return await con.query(sql, [login.nome, login.email, login.senha, login.id])
}

export async function dLogin(id){
    const sql = "delete from login where id_login = ?"
    return await con.query(sql, [id])
}

