const vasco = document.querySelector('.vasco');
const bola = document.querySelector('.bola');
const nuvem = document.querySelector('.nuvens');
const goScreen = document.querySelector('.gameover');
const seeker = document.querySelector('.b');
const seekerf = document.querySelector('.furacao');
const maxScoresc = document.getElementById("maxscore");

const maxScore = parseInt(display.innerHTML = localStorage.getItem("data"));
maxScoresc.textContent = `Última Pontuação: ${maxScore} pts`; 

const jump = () => {
    vasco.classList.add('jump');

    setTimeout(() => {
        vasco.classList.remove('jump');

    },550);
}

const loop = setInterval(() => {
    const bolaPosition = bola.offsetLeft;
    const nuvemPosition = nuvem.offsetLeft;
    const vascoPosition = +window.getComputedStyle(vasco).bottom.replace('px', '');
    
    if (centiseconds>500 && centiseconds<799){
        setTimeout(() => {
            bola.style.animationDuration = '1s';
          }, 540);
    }
    if(centiseconds>800 && centiseconds<999){
        setTimeout(() => {
            bola.style.animationDuration = '0.8s';
          }, 350);
    }
    if(centiseconds>1000){
        setTimeout(() => {
            bola.style.animationDuration = '0.6s';
          }, 135);
    }
    if(centiseconds>=1500){
        alert("!!!O vasco venceu a série B!!!");
    }
    if (window.innerWidth <= 800 && window.innerWidth >551) {
        bola.style.animationDuration = '1s';
        // Executa algum código para telas pequenas
        if(bolaPosition <=270 && bolaPosition >=170 && vascoPosition <=60){
        bola.style.animation = 'none';
        bola.style.left = `${bolaPosition}px`;
        pause();
        vasco.style.animation = 'none';
        vasco.style.bottom = `${vascoPosition}px`;
        nuvem.style.animation = 'none';
        nuvem.style.left = `${nuvemPosition}px`;
        vasco.src = './css/images/vascogo.png';
        bola.src = './css/images/bolaimg.png';
        bola.style.scale = '0.5';
        vasco.style.scale = '0.9';
        seeker.classList.add('pegar');
        seekerf.classList.add('pegar');
        saveData()
        setTimeout(() => {

            goScreen.style.display = 'flex';
          }, 1500);
        }
      } 
      if (window.innerWidth <= 550 && window.innerWidth > 471) {
        if(bolaPosition <=250 && bolaPosition >=190 && vascoPosition <=40){
            bola.style.animation = 'none';
            bola.style.left = `${bolaPosition}px`;
            pause();
            vasco.style.animation = 'none';
            vasco.style.bottom = `${vascoPosition}px`;
            nuvem.style.animation = 'none';
            nuvem.style.left = `${nuvemPosition}px`;
            vasco.src = './css/images/vascogo.png';
            bola.src = './css/images/bolaimg.png';
            bola.style.scale = '0.5';
            vasco.style.scale = '0.9';
            seeker.classList.add('pegar');
            seekerf.classList.add('pegar');
            saveData()
            setTimeout(() => {
    
                goScreen.style.display = 'flex';
              }, 1500);
            }
      }

      if (window.innerWidth <= 470) {
        bola.style.animationDuration = '0.9s';
        if(bolaPosition <=160 && bolaPosition >=100 && vascoPosition <=40){
            bola.style.animation = 'none';
            bola.style.left = `${bolaPosition}px`;
            pause();
            vasco.style.animation = 'none';
            vasco.style.bottom = `${vascoPosition}px`;
            nuvem.style.animation = 'none';
            nuvem.style.left = `${nuvemPosition}px`;
            vasco.src = './css/images/vascogo.png';
            bola.src = './css/images/bolaimg.png';
            bola.style.scale = '0.5';
            vasco.style.scale = '0.9';
            seeker.classList.add('pegar');
            seekerf.classList.add('pegar');
            saveData()
            setTimeout(() => {
    
                goScreen.style.display = 'flex';
              }, 1500);
            }
      }
      else {
        // Executa algum código para telas grandes
      
    if (bolaPosition <= 470 && bolaPosition >= 370 && vascoPosition <= 60){
        bola.style.animation = 'none';
        bola.style.left = `${bolaPosition}px`;
        pause();
        vasco.style.animation = 'none';
        vasco.style.bottom = `${vascoPosition}px`;
        nuvem.style.animation = 'none';
        nuvem.style.left = `${nuvemPosition}px`;
        vasco.src = './css/images/vascogo.png';
        bola.src = './css/images/bolaimg.png';
        bola.style.scale = '0.5';
        vasco.style.scale = '0.9';
        seeker.classList.add('pegar');
        seekerf.classList.add('pegar');
        saveData()
        setTimeout(() => {

            goScreen.style.display = 'flex';
          }, 1500);
    }}
}, 10);
document.addEventListener('keydown', jump)

function play(){
    location.reload();
}

let timer;
let centiseconds = 0;

function updateDisplay() {
  let display = document.getElementById("display");
  let displaygo = document.getElementById("score");
  display.textContent = `${centiseconds} pts`;
  displaygo.textContent = `Pontuação: ${centiseconds} pontos`;
}

if (!timer) {
    timer = setInterval(function () {
      centiseconds++;
      updateDisplay();
    }, 100);
}

function pause() {
    clearInterval(timer);
    timer = null;
}
  
function reset() {
    pause();
    centiseconds = 0;
    updateDisplay();
}

function saveData(){
    localStorage.setItem("data", display.innerHTML);
}


