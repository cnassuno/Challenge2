// seletores e variáveis
var palavras = ['ALURA','ORACLE','HTML', 'JAVASCRIPT', 'CSS'];
var tabuleiro = document.getElementById('forca').getContext('2d');
var letras = [];
var palavraCorreta = " ";
var erros = 8;
var btnNovoJogo = document.getElementById ("btn-novo-jogo");

//escolher palavras aleatórias
function escolherPalavraSecreta (){
    var palavra = palavras[Math.floor(Math.random()*palavras.length)]
    palavraSecreta = palavra    
} 

//tracinhos no quadro
function escreverTracinhos (){
    tabuleiro.lineWidth = 6
    tabuleiro.lineCap = "round"
    tabuleiro.lineJoin = "round"
    tabuleiro.strokeStyle = "#0A3871"
    tabuleiro.beginPath()
    var eixo = 600/palavraSecreta.length
    for (let i=0; i<palavraSecreta.length; i++){
        tabuleiro.moveTo(500 + (eixo*i), 540)
        tabuleiro.lineTo(550 + (eixo*i), 540)
    }
    tabuleiro.stroke ()
    tabuleiro.closePath ()
} escreverTracinhos(escolherPalavraSecreta())

function escreverLetraCorreta(index){
    tabuleiro.font = "bold 52px Inter";
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "#0A3871";
    var eixo = 600/palavraSecreta.length;
    tabuleiro.fillText(palavraSecreta[index], 505 + (eixo*index),520);
    tabuleiro.stroke();
}

function escreverLetraIncorreta (letra, errorsLeft) {
    tabuleiro.font = "bold 40px Inter";
    tabuleiro.lineWidth = 6;
    tabuleiro.lineCap = "round";
    tabuleiro.lineJoin = "round";
    tabuleiro.strokeStyle = "#0A3871";
    tabuleiro.fillText(letra,535+(40*(10-errorsLeft)),610,40);
   }

function verificarLetraCorreta(key) {
    if(letras.length<1 || letras.indexOf(key)<0){
        letras.push(key)
        return false    
    } else {
        letras.push(key.toUpperCase())
        return true
        }
}

function adicionarLetraCorreta(i) {
    palavraCorreta += palavraSecreta[i].toUpperCase()  
}

function adicionarLetraIncorreta(letter) {
    if(palavraSecreta.indexOf(letter)<=0) {
        erros -= 1 
    }
}

//atualiza tela quando botao novo jogo é clicado
btnNovoJogo.addEventListener ("click", function(){
    location.reload();
});

document.onkeydown = (e) => {
    var letra = e.key.toUpperCase ()
    if (!verificarLetraCorreta (e.key)) {
        if (palavraSecreta.includes(letra)) {
            adicionarLetraCorreta(palavraSecreta.indexOf(letra))
            for (let i = 0; i<palavraSecreta.length; i++) {
                if (palavraSecreta[i] === letra){
                    escreverLetraCorreta(i)
                }
            }
        }
    else {
        if (!verificarLetraCorreta(e.key)) 
        return
        adicionarLetraIncorreta(letra)
        escreverLetraIncorreta(letra, erros)
        desenharParte()
        }       
     }
    }
 
function desenharParte(cadaErro){
    var cadaErro=erros;
    if (cadaErro==7) {
        tabuleiro.strokeStyle = "darkblue"
        tabuleiro.lineWidth = 5
        tabuleiro.lineCap = "round"
        tabuleiro.lineJoin = "round"     
        tabuleiro.beginPath ()   
        tabuleiro.arc(421,116, 14, 0, 2*3.14);
        tabuleiro.stroke()
        }

    if (cadaErro==6) {
        tabuleiro.fillStyle= "darkblue";
        tabuleiro.lineWidth = 5
        tabuleiro.lineCap = "round"
        tabuleiro.lineJoin = "round"
        tabuleiro.moveTo(421,130);
        tabuleiro.lineTo(421,140);
        tabuleiro.stroke();
        }

    if (cadaErro==5) {
        tabuleiro.fillStyle= "darkblue";
        tabuleiro.lineWidth = 5
        tabuleiro.lineCap = "round"
        tabuleiro.lineJoin = "round"
        tabuleiro.moveTo(421,140);
        tabuleiro.lineTo(421,200);
        tabuleiro.stroke();
        }

    if (cadaErro==4){
        tabuleiro.fillStyle= "darkblue";
        tabuleiro.lineWidth = 5
        tabuleiro.lineCap = "round"
        tabuleiro.lineJoin = "round"
        tabuleiro.moveTo(421,140);
        tabuleiro.lineTo(460,170);
        tabuleiro.stroke(); 
        }

    if (cadaErro==3) {
        tabuleiro.fillStyle= "darkblue";
        tabuleiro.lineWidth = 5
        tabuleiro.lineCap = "round"
        tabuleiro.lineJoin = "round"
        tabuleiro.moveTo(421,140);
        tabuleiro.lineTo(385,170);
        tabuleiro.stroke();
        }

    if (cadaErro==2) {
        tabuleiro.fillStyle= "darkblue";
        tabuleiro.lineWidth = 5
        tabuleiro.lineCap = "round"
        tabuleiro.lineJoin = "round"   
        tabuleiro.moveTo(421,200);
        tabuleiro.lineTo(455,238);
        tabuleiro.stroke();
         }

    if (cadaErro==1) {
        tabuleiro.fillStyle= "darkblue";
        tabuleiro.lineWidth = 5
        tabuleiro.lineCap = "round"
        tabuleiro.lineJoin = "round"   
        tabuleiro.moveTo(421,200);
        tabuleiro.lineTo(390,238);
        tabuleiro.stroke();  
        }
        
    if (cadaErro==0){
        alert ('Que pena, você perdeu...')
    }
    }
         

