import { Router } from "express";
import { alterarLogin, autenticarLogin, buscarLogin, buscarLogins, deletarLogin, novoLogin } from "../services/login.service.js";
import { autenticar, geraToken } from "../utils/jwt.js";
const endpoints  = Router()

endpoints.get('/login', autenticar, async (req, res)=> {
    try{
        res.send(await buscarLogins())
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.get('/login/:id', autenticar, async (req, res) => {
    try{
        const login = await buscarLogin(req.params.id)
        if(login == null)
            throw new Error("Não encontrado")
        res.send(login)
    }catch(err){
        let status = 400
        if(err.message === "Não encontrado")
            status = 404

        res.status(status).send({erro: err.message})
    }
})
endpoints.post('/login/auth', async (req, res)=> {
    try{
        let login = await autenticarLogin(req.body.email, req.body.senha)
        res.send({token: geraToken(login), login})
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.post('/login', async (req, res) => {
    try{
        res.send({novoId: await novoLogin(req.body)})
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.put('/login/:id', autenticar, async (req, res) => {
    try{

        res.send({alterados: await alterarLogin(req.body, req.params.id)})
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})
endpoints.delete('/login/:id', autenticar, async (req, res) => {
    try{
        res.send({excluidos: await deletarLogin(req.params.id)})
    }catch(err){
        res.status(400).send({erro: err.message})
    }
})

export default endpoints