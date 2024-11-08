export default function validar(nome){
    if(nome == undefined || nome == null || nome == '' || nome.trim() == '')
        throw new Error("Nome não inserido")
}