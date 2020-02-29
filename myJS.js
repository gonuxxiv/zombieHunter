// ↓↓↓ global variables
let button = document.createElement('button');
button.innerHTML = "STOP"

let zombie = document.createElement("img"); 
zombie.src = "images/zombie2.gif";
zombie.id = "zombie";

let introZombie = document.createElement('img');
introZombie.src = "images/zombie1.png";
introZombie.id = "intro";
document.body.appendChild(introZombie);

let h1 = document.createElement('h1');  
h1.innerHTML = "Welcome to Zombie Hunter";
document.body.appendChild(h1);


let myInterval = null;
let isExploding = false;
let score = 1;

let gunShot = new Audio("audios/audio.mp3");
let introMusic = new Audio("audios/introMusic.mp3");
introMusic.volume = 0.5;
let growl = new Audio("audios/growl.wav");
let growl1 = new Audio("audios/growl1.wav");
let growl2 = new Audio("audios/growl2.wav");
growl2.volume = 0.8;
let growl3 = new Audio("audios/growl3.mp3");
growl3.volume = 0.8;
let growl_list = [growl, growl1, growl2, growl3];

// ↓↓↓ Main game control 
introZombie.onclick = intro;
zombie.onclick = eliminate;
button.onclick = stopGame;

function intro() {
    introZombie.style.display = 'none';
    button.style.display = 'block';
    gunShot.play();
    introMusic.load();
    displayScore();
    setTimeout(function(){randomMotion()}, 2000)
}



// ↓↓↓ randomly position zombie image
function randomMotion() {
    introMusic.play();
    introMusic.volume = 0.5;
    document.body.appendChild(button);
    document.body.appendChild(zombie);
    zombie.style.display = 'block';
    // ↓↓↓ main sequence
    setInterval(function(){
        zombie.src = "images/zombie2.gif"
        zombie.style.left = Math.floor(Math.random() * 60 + 10) + "%"; // reset position range that fits the browser
        zombie.style.bottom = Math.floor(Math.random() * 40 + 10) + "%";
    }, 1500)
    // ↓↓↓ change the text in the button
    button.innerHTML = "Stop";
    // ↓↓↓ invoke corresponding function
}


// ↓↓↓ explosion function
function eliminate() {
    // clearInterval(myInterval);
    updateScores();

    let randNum = Math.floor(Math.random() * 4);
    growl_list[randNum].play();
    // ↓↓↓ explosion sequence
    zombie.src = "images/zombieKill.gif";
}

// ↓↓↓ return to the default position
function stopGame() {
    clearInterval(randomMotion);
    h1.innerHTML = "Welcome to Zombie Hunter";
    zombie.style.display = "none";
    introZombie.style.display = 'block';
    // ↓↓↓ change the text in the button
    button.style.display = 'none';
    // ↓↓↓ start game again
    introMusic.volume = 0;
    introMusic.pause();
    score = 1;
}

// ↓↓↓ create score board on screen
function displayScore() {
    h1.id = "score";
    h1.innerHTML = "Score: 0";
    document.body.appendChild(h1);
}
// ↓↓↓ update scores each kill
function updateScores() {
    let h1 = document.getElementById('score');
    h1.innerHTML = "Score: " + score;
    score++;
}
