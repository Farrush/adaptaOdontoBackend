import paciente from "./controllers/paciente.controller.js";
import agendamento from './controllers/agendamento.controller.js'
import login from './controllers/login.controller.js'

export default function criarEndpoints(server){
    server.use(paciente)
    server.use(login)
    server.use(agendamento)
}