import express from 'express'
import cors from 'cors'
import criarEndpoints from './routes.js'
const server = express()
server.use(cors())
server.use(express.json())

criarEndpoints(server)

server.listen(5040, console.log("Running on port 5040..."))