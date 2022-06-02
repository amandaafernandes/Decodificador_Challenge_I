
function encripitar() {
    var texto = document.getElementById("texto2").value.toLowerCase(); //área inserção da mensagem - deixa tudo maiusculo
    var texresultado = texto.replace(/e/g, "enter"); // subistituição
    var texresultado = texresultado.replace(/i/g, "imes");
    var texresultado = texresultado.replace(/a/g, "ai");
    var texresultado = texresultado.replace(/o/g, "ober");
    var texresultado = texresultado.replace(/u/g, "ufat");

    document.getElementById("boneco").style.display = "none"; // display define ou retorna o tipo de exibição do elemento, none apaga iamgem
    document.getElementById("textoResultado").innerHTML = texresultado;  //texto inserido, o Internet Explorer muda o valor do atributo innerHTML dessa entrada
    //document.getElementById("copy").style.display = "inherit"; //herde as características da propriedade display do elemento pai
    
    //fonte de consulta -> https://blog.betrybe.com/css/css-display/
} 

function desencripitar() {
    var texto = document.getElementById("texto2").value.toLowerCase();
    var texresultado = texto.replace(/enter/g, "e");
    var texresultado = texresultado.replace(/imes/g, "i");
    var texresultado = texresultado.replace(/ai/g, "a");
    var texresultado = texresultado.replace(/ober/g, "o");
    var texresultado = texresultado.replace(/ufat/g, "u");

    document.getElementById("boneco").style.display = "none";
    document.getElementById("textoResultado").innerHTML = texresultado;
   //document.getElementById("copy").style.display = "inherit";
    
} 

//copiar
var mensagem = document.querySelector("#bt-copy");
mensagem.addEventListener("click", copy(), false);

    function copy(){
        var textArea = document.querySelector("#textoResultado");
        textArea.select();
        document.execCommand("copy");
        texto2.value = "";
        texto2.focus(); //iniciar com cursor piscando de entrada 

       // alert('Texto copiado para área de transferência! Ctrl+V para colar');
        
    };
    






