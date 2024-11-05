import mysql from "mysql2/promise"
import dotenv from 'dotenv'

dotenv.config()

const con = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PWD,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT
})

export default con;