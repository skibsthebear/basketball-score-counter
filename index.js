//Import ScoreCards
let guestScoreEl = document.getElementById('guest-score');
let homeScoreEl = document.getElementById('home-score');
let timerEl = document.getElementById('timer');

//Declare scores
let homeScore = 0;
let guestScore = 0;

let minutes = 0;
let seconds = 0;



//Functions for adding score HOME
function homeAdd1(){
    console.log("Button 1 is being clicked.");
    homeScore += 1;
    homeScoreEl.textContent = homeScore;
}

function homeAdd2(){
    console.log("Button 2 is being clicked.");
    homeScore += 2;
    homeScoreEl.textContent = homeScore;
}

function homeAdd3(){
    console.log("Button 3 is being clicked.");
    homeScore += 3;
    homeScoreEl.textContent = homeScore;
}


//Functions for adding score GUEST
function guestAdd1(){
    console.log("Button 1 is being clicked.");
    guestScore += 1;
    guestScoreEl.textContent = guestScore;
}

function guestAdd2(){
    console.log("Button 2 is being clicked.");
    guestScore += 2;
    guestScoreEl.textContent = guestScore;
}

function guestAdd3(){
    console.log("Button 3 is being clicked.");
    guestScore += 3;
    guestScoreEl.textContent = guestScore;
}

//Reset function

function resetScore(){
    homeScore = 0;
    guestScore = 0;

    console.log('Score has been reset!')

    homeScoreEl.textContent = 0;
    guestScoreEl.textContent = 0;
    minutes = 0;
    seconds = 0;

    timerEl.textContent = minutes + ":" + seconds;
}

function timerLogic(){
    
    
    const countDown = setInterval(() => {
        seconds++;
        timerEl.textContent = minutes + ":" + seconds
        if (seconds >= 60){
            minutes ++;
            seconds = 0;

        }

        if (minutes >= 60){
            clearInterval(countDown);
        }
    }, 1000)


}

timerLogic();