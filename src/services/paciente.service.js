import { uPaciente, iPaciente, dPaciente, sPaciente, sPacientes, sPacienteRG } from "../repositories/paciente.repository.js";
import validarNome from "../validators/nome.validator.js";
import validarRG from '../validators/rg.validator.js'

export async function buscarPacientes(){
    const [dados] = await sPacientes()
    return dados
}
export async function buscarPaciente(id){
    const [paciente] = await sPaciente(id)
    return paciente[0]
}
export async function buscarPacienteRG(rg){
    validarRG(rg)
    const [paciente] = await sPacienteRG(rg)
    return paciente[0]
}
export async function novoPaciente(paciente){
    validarNome(paciente.nome)
    validarRG(paciente.rg)
    const [dados] = await iPaciente(paciente)
    return dados.insertId
}
export async function alterarPaciente(paciente, id){
    validarNome(paciente.nome)
    validarRG(paciente.rg)
    paciente = {...paciente, id}
    const [dados] = await uPaciente(paciente)
    return dados.affectedRows
}
export async function deletarPaciente(id){
    const [dados] = await dPaciente(id)
    return dados.affectedRows
}