var error = document.getElementById('vistaError');
var resultado = document.getElementById('vistaResultado');
error.style.display = 'none';

const Encriptar=()=>{
    var texto = document.getElementById('textoEncriptar').value;
    if(texto == ""){
        resultado.style.display = 'none';
        error.style.display = '';
    }else{
        error.style.display = 'none';
        resultado.style.display = '';
        var textoEncriptado = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        document.getElementById('textoEncriptar').value = "";
        document.getElementById('resultadoEncriptar').value = textoEncriptado;
    }
}

const Desencriptar=()=>{
    var texto = document.getElementById('textoEncriptar').value;
    if(texto == ""){
        resultado.style.display = 'none';
        error.style.display = '';
    }else{
        error.style.display = 'none';
        resultado.style.display = '';
        var textoEncriptado = texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        document.getElementById('textoEncriptar').value = "";
        document.getElementById('resultadoEncriptar').value = textoEncriptado;
    }
}