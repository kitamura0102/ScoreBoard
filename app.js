let score1 = 0;
let score2 = 0;
let homeScore = (document.getElementById("home-score").textContent = score1);

let guestScore = document.getElementById("guest-score").textContent = score2;

function getOnePoint() {
    score1 += 1;
    console.log(score1)
    homeScore = document.getElementById("home-score").textContent = score1;

}


function getTwoPoint() {
    score1 +=2;
    console.log(score1)
    homeScore = document.getElementById("home-score").textContent = score1;

}
function getThreePoint() {
    score1 +=3;
    console.log(score1)
    homeScore = document.getElementById("home-score").textContent = score1;

}


function pointsOne() {
    score2 += 1;
    console.log(score2)
    guestScore = document.getElementById("guest-score").textContent = score2;
}


function pointsTwo() {
    score2 +=2;
    console.log(score2)
    guestScore = document.getElementById("guest-score").textContent = score2;
}
function pointsThree() {
    score2 +=3;
    console.log(score2)
    guestScore = document.getElementById("guest-score").textContent = score2;
}

function reset(){
    score1 = 0;
    score2 = 0;
    homeScore = document.getElementById("home-score").textContent = score1;
    guestScore = document.getElementById("guest-score").textContent = score2;


}