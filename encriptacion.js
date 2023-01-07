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