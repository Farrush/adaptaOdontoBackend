export default function validar(nome){
    if(nome == undefined || nome == null || nome == '')
        throw new Error("Nome não inserido")
}