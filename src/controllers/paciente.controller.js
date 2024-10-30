import { Router } from "express";
import { buscarPaciente, buscarPacientes, novoPaciente, alterarPaciente, deletarPaciente } from "../services/paciente.service.js";
import { autenticar } from "../utils/jwt.js";
const endpoints  = Router()

endpoints.get('/paciente', autenticar, async (req, res)=> {
    try{
        res.send(await buscarPacientes())
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.get('/paciente/:id', autenticar, async (req, res) => {
    try{
        const Paciente = await buscarPaciente(req.params.id)
        if(Paciente == null)
            throw new Error("Não encontrado")
        res.send(Paciente)
    }catch(err){
        let status = 400
        if(err.message === "Não encontrado")
            status = 404

        res.status(status).send({erro: err.message})
    }
})

endpoints.post('/paciente', autenticar, async (req, res) => {
    try{
        res.send({novoId: await novoPaciente(req.body)})
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.put('/paciente/:id', autenticar, async (req, res) => {
    try{

        res.send({alterados: await alterarPaciente(req.body, req.params.id)})
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.delete('/paciente/:id', autenticar, async (req, res) => {
    try{
        res.send({excluidos: await deletarPaciente(req.params.id)})
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})


export default endpoints