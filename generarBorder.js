const $ = (selector) => document.querySelector(selector);

const $tMomento = $('#tMomento');
const $texto = $('#texto');
const $typeBorder = $('#typeBorder');

const getCodeAzul = (tMomento, texto) => {

    return `  `
}

const getCodeCeleste = (tMomento, texto) => {

    return `  `
}

const getCodeBeige = (tMomento, texto) => {

    return `  `

}



const Border = (tMomento, texto, typeBorder) => {
    if (tMomento === '' || typeBorder === '') {
        alert('Por favor llene todos los campos');
        return;
    }

    let result = "";

    if (typeBorder === "azulp") {
        result = getCodeAzul(tMomento, texto)
    }

    if (typeBorder === "celestep") {
        result = getCodeCeleste(tMomento, texto)
    }

    if (typeBorder === "beigep") {
        result = getCodeBeige(tMomento, texto)
    }

    return result
}

const generarBorder = () => {
    const tMomento = $tMomento.value;
    const texto = $texto.value;
    const typeBorder = $typeBorder.value;

    const resutl = Border(tMomento, texto, typeBorder);
}
