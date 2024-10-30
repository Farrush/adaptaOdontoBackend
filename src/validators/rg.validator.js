export default function validarRG(rg) {
    if (rg == null || rg == undefined || rg.trim() === '') {
        throw new Error("RG não foi inserido");
    }

    if (rg.length < 6 || rg.length > 12) {
        throw new Error("O RG deve conter entre 6 a 12 dígitos");
    }
    
    if (!/^[a-zA-Z0-9]+$/.test(rg)) {
        throw new Error("O RG inserido contém dígitos desnecessários como '-', '.' ou dígitos inválidos");
    }
}