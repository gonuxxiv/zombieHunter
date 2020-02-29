let intro = document.getElementById("intro");

let button = document.createElement('button');
button.innerHTML = "STOP"

let gunShot = new Audio("audios/audio.mp3");
let introMusic = new Audio("audios/introMusic.mp3");
introMusic.volume = 0.5;
let growl = new Audio("audios/growl.wav");
let growl1 = new Audio("audios/growl1.wav");
let growl2 = new Audio("audios/growl2.wav");
growl2.volume = 0.8;
let growl3 = new Audio("audios/growl3.mp3");
growl3.volume = 0.8;
let scream = new Audio("audios/scream.mp3");
scream.volume = 0.5;
let gunShot2 = new Audio("audios/gunshot2.mp3");
gunShot2.volume = 0.9;
let growl_list = [growl, growl1, growl2, growl3];


let h1 = document.createElement('h1');  
h1.innerHTML = "Welcome to Zombie Hunter";
document.body.appendChild(h1);

let height = window.innerHeight;
let width = window.innerWidth;
let randomWidth = -300;
let score = 0;
let time = 5000;




let gameSwitch = true;
let gameSwitch2 = true;
let gameSwitch3 = true;

function stopGame(zombie) {
    introMusic.pause();
    gunShot.play();
    zombie.remove();
    h1.innerHTML = "Welcome to Zombie Hunter";
    intro.style.display = 'block';
    button.style.display = 'none';
    score = 0;
}

function createZombie() {
    gameSwitch = true;
    let zombie = document.createElement('img');
    zombie.src = "images/zombie2.gif"
    zombie.classList.add("zombie");
    // zombie.setAttribute('onclick', 'eliminate()');
    document.body.appendChild(zombie);
    zombie.style.bottom = Math.floor((Math.random() * 40) + 15) + "%";
    zombieLoop(zombie);
    let motion = setInterval(createZombie, 5000);
    zombie.addEventListener('click', function() {
        if (gameSwitch) {
            gameSwitch = false;
            eliminate(zombie);
        }
    })
    button.addEventListener('click', function() {
        clearInterval(motion);
        stopGame(zombie)});
}

function zombieLoop(zombie) {
    setInterval(function(){ zombie.src = "images/zombie2.gif"; }, 1450);
}


function myFunc() {
    gunShot.play();
    inGameSetUp();
    setTimeout(createZombie, 2000);
    // zombie.style.bottom = Math.floor((Math.random() * 40) + 15) + "%";
}

function inGameSetUp() {
    introMusic.load();
    setTimeout(function(){ introMusic.play(); }, 2000);
    intro.style.display = 'none';
    document.body.appendChild(button);
    button.style.display = 'block';
    displayScore();
}

function eliminate(zombie) {
    gunShot2.play();
    updateScores();
    let randNum = Math.floor(Math.random() * 4);
    growl_list[randNum].play();
    zombie.src = "images/zombieKill.gif";
    setTimeout(function() {
        zombie.classList.remove('zombie');
        zombie.classList.add('shot');
        zombie.remove();
    }, 500);
}





function displayScore() {
    h1.id = "score";
    h1.innerHTML = "Score: 0";
    document.body.appendChild(h1);
}

function updateScores() {
    score++;
    h1.innerHTML = "Score: " + score;
    time -= 100;
}

function loseScore() {
    score--;
    h1.innerHTML = "Score: " + score;
    scream.play();
}


// function handler() {
//     if (gameSwitch) {
//         if (gameSwitch2) {
//             if(gameSwitch3) {
//                 motion = setInterval(zombieMotion, 30);
//             }
//             else if(!(gameSwitch3)) {
//                 clearInterval(motion);
//             }
//         } 
//         else {
//             clearInterval(motion);
//             setTimeout(function(){ zombie.style.display = 'none'; }, 450);
//         }
//     }
//     else if(!(gameSwitch)) {
//         loseScore();
//         clearInterval(motion);
//     }
// }

// let zombieMotion = function() {
    //         zombie.style.left = randomWidth + "px";
    //         randomWidth += 5
    //         if (randomWidth > (width - 30)) {
    //             if (gameSwitch3) {
    //                 gameSwitch = false;
    //                 handler();
    //             }
    //         }
    //         if ((!gameSwitch2)) {
    //             handler();
    //         }
    //     }