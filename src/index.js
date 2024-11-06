import express from 'express'
import cors from 'cors'
import criarEndpoints from './routes.js'
import dotenv from 'dotenv'
const server = express()
dotenv.config()
server.use(cors())
server.use(express.json())

criarEndpoints(server)

server.listen(5040, console.log("\nRunning on port 5040...\n"))