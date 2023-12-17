let mainbody = document.querySelector('#main');
let main = document.querySelector('#mainintro');
let bblbox = document.querySelector('#pbottom');
let timing = document.querySelector('#timing');
let binput = document.querySelector('#target');
let target = document.querySelector('#pbottom');
let score = document.querySelector('#score');
let name = document.querySelector('#name');
let dpscore = document.querySelector('#dpscore');
let dphscore = document.querySelector('.dphscore');
let playerscore = 0;
let highscore = 20;
let maxnum = 59;
let minnum = 1;
let minute = 1;
let second = 59;
let intervalvalue = 1000;
let targets;

const bubbles = () => {
    let bblnum = "";

    for (let i = 0; i <= 111; i++) {
        let rannum = Math.floor(Math.random() * (maxnum - minnum) + minnum);
        bblnum += `<div id="bubble">${rannum}</div>`;

        bblbox.innerHTML = (bblnum);
    }
}

const scoreboard = () => {
    // dpscore.innerHTML = 12;
dphscore.innerHTML = "not set";
}

const randomnumber = () => {
    targets = Math.floor(Math.random() * (maxnum - minnum) + minnum);
    binput.innerHTML = targets;
}

const picker = () => {
    target.addEventListener("click", (pick) => {
        let gamescore = Number(pick.target.innerHTML);

        if (gamescore === targets) {
            playerscore = playerscore + 10;
            score.innerHTML = (playerscore);

            bubbles();
            randomnumber();
        }
    })
}

const timer = () => {
    let clrint = setInterval(() => {

        timing.innerHTML = "[" + minute + ":" + second + "]";

        if (second > 0) {
            second--;
        }

        else if (minute == 0 && second == 0) {
            mainbody.innerHTML = `<div class="mainclass" id="mainsboard">
    <div class="midclass" id="midsboard">
        <h1 class="colorname" style="margin-bottom: 40px; font-size: 40px">Congratulations</h1>
        <h2 class="scorecard">Your score : <span id="dpscore" style="border: 2px solid green;">not set</span></h2>
        <h2 class="scorecard">High score : <span class="dphscore" style="border: 2px solid green;">not set</span></h2>
        <button id="btn" style="width: 90%; height: 50px; margin-top: 50px;" onclick="restart()">Restart Game</button>
    </div>
    </div>`;
    
    console.log("yahhhhhhhhhhh");
            timing.innerHTML = "Timeout";
            binput.innerHTML = "00";
            score.innerHTML = "00";
            clearInterval(clrint);
            bblbox.innerHTML = "";

            scoreboard();
            
        }

        else if (minute != 0 && second == 0) {
            minute--;
            second = 59;
        }
    }, intervalvalue);
}

const hideintro = () => {

    if (name.value == "") {
        error.innerHTML = "please enter your name first !";

        setTimeout(() => {
            error.innerHTML = "";
        }, 5000);
    }

    else {
        main.style.display = "none";

        timer();
        bubbles();
        picker();
        randomnumber();
        scoreboard();
    }
}

const restart = () => {
    location.reload();
}
