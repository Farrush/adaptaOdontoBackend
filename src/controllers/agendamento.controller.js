import { Router } from "express";
import { autenticar } from "../utils/jwt.js";
import { buscarAgendamentos, buscarAgendamento, novoAgendamento, alterarAgendamento, deletarAgendamento } from "../services/agendamento.service.js";
const endpoints  = Router()
endpoints.get('/agendamento', autenticar, async (req, res)=> {
    try{
        res.send(await buscarAgendamentos())
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.get('/agendamento/:id', autenticar, async (req, res) => {
    try{
        const agendamento = await buscarAgendamento(req.params.id)
        if(agendamento == null)
            throw new Error("Não encontrado")
        res.send(agendamento)
    }catch(err){
        let status = 400
        if(err.message === "Não encontrado")
            status = 404

        res.status(status).send({erro: err.message})
    }
})

endpoints.post('/agendamento', autenticar, async (req, res) => {
    try{
        res.send({novoId: await novoAgendamento(req.body)})
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.put('/agendamento/:id', autenticar, async (req, res) => {
    try{

        res.send({alterados: await alterarAgendamento(req.body, req.params.id)})
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.delete('/agendamento/:id', autenticar, async (req, res) => {
    try{
        res.send({excluidos: await deletarAgendamento(req.params.id)})
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
export default endpoints