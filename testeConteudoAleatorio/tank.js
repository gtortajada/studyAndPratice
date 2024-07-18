// Variáveis inciais do jogo
var direcao;
var exibeCanvas;
var context;
var imagemMapeada;
var mapaLinhas;
var mapaColunas;
var Mapa;

//Variáveis de definição do tanque1
var tanque1Frames;
var tanque1Index;
var tanque1Rotation
var tanque1X;
var tanque1Y;

//Variáveis de definição do tanque2
var tanque2Frames;
var tanque2Index;
var tanque2Rotation;
var tanque2X;
var tanque2Y;

//Variáveis de definição de bandeira
var bandeira;
var bandeiraIndex;
var bandeiraX;
var bandeiraY;

//Variáveis de popntuação
var pontosjog = 0;
var pontoscomp =0;

//Variáveis para os sons
var som;
var musica;

window.addEventListener('load', canvasApl, false);

function canvasApl(){
    exibeCanvas = document.getElementById("canvas");
    exibeCanvas.addEventListener('click',eventoClick,false);
    context = exibeCanvas.getContext("2d");
    imagemMapeada = new Image();
    imagemMapeada.addEventListener('load',iniciar, false);
    imagemMapeada.src="imagens/tanks.png";

    //Som
    som = document.getElementById("som");
    musica = document.getElementById("musica");

    //Variáveis de definição do mapa
    mapaLinhas = 15;
    mapaColunas = 15;
    Mapa = [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	, [0,0,0,20,0,0,0,0,0,20,0,0,0,0,0]
	, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	, [0,0,0,0,0,0,0,0,0,0,0,0,20,0,0]
	, [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	, [0,0,0,0,0,0,20,0,0,0,0,0,0,0,0]
    ];

    //Variáveis de definição do tanque1
        tanque1Frames=[1,2,3,4,5,6,7,8];
        tanque1Index=0;
        tanque1Rotation=90;
        tanque1X=Math.floor(math.random() * 400);
        tanque1Y=Math.floor(Math.random() * 400);
        direcao=1;

    //Variáveis de definição do tanque2 (inimigo)
        tanque2Frames=[9,10,11,12,13,14,15,16];
        tanque2Index=0;
        tanque2Rotation=90;
        tanque2X=Math.floor(Math.random() * 400);
        tanque2Y=Math.floor(Math.random() * 400);

    //Variáveis de definição da bandeira
        bandeira =[0,21,21,21,21,0];
        bandeiraIndex=0;
        bandeiraX=Math.floor(Math.random() * 400);
        bandeiraY=Math.floor(Math.random() * 400);
}

function iniciar(){
    musica.loop = true;
    musica.play();
    setInterval(gameLoop, 50);
}

//GameLoop
function gameLoop(){
    desenhaTela();
    atualizarTanque1();
    desenhaInimigo();
    detectandoColisaoBrandeira();
    desenhaTank();
    desenhaBandeira();
    atualizarInimigo();
    desenhaTexto();
    gameOver();
}

//Função responsável em desenhar o mapa no canvas
function desenhaTela() {
    for (var linha=0;linha<mapaLinhas;linha++){
        for (var coluna=0;colunla<mapaColunas;coluna++){
            var mapaId = Mapa[linha][coluna];
            var sourceX = Math.floor(mapaId % 8) *32;
            var sourceY = Math.floor(mapaId / 8) *32;
            context.drawImage(imageMapeada, sourceX,
                sourceY,32,32,coluna*32,linha*32,32,32);
        }
    }
}

// Fui até a linha 122! Link para continuar: https://github.com/pedromogly/TankGame_1.1/blob/master/js/tank.js

//Função respnosável em desenhar o tanque1 no mapa












// pedromogly / TankGame_1.1