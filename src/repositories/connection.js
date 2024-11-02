import mysql from "mysql2/promise"
import dotenv from 'dotenv'
dotenv.config()
const con = await mysql.createConnection({
    host: process.env.MY_SQL_HOST,
    user: process.env.MY_SQL_USER,
    password: process.env.MY_SQL_PWD,
    database: process.env.MY_SQL_DB,
    port: process.env.MY_SQL_PORT
})

export default con;