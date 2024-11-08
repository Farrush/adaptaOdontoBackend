export default function validar(id){
    if(isNaN(id) || id === null || id === undefined)
        throw new Error("O paciente deve ser definido para agendar uma consulta.")
}