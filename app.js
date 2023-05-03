/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// access dice1 value and dice2 
// current = calc sum of dice1 & dice2

let current = 0;
// let newcurrent=0;
let dice1 = 0;
let dice2 = 0;
let player1scored = 0;
let player2scored = 0;
let playerOneDomElement = document.getElementById('score-0');
let playerTwoDomElement = document.getElementById('score-1');
let currentDomElement1 = document.getElementById("current-0");
let currentDomElement2 = document.getElementById("current-1");
let player1 = document.getElementById("player-0");
let player2 = document.getElementById("player-1");
let target =0;


newGame();



function rollDice() {
  // getElemntsById --> array
  document.getElementById("dice-1").hidden = false;
  document.getElementById("dice-2").hidden = false;
  dice1 = Math.floor(Math.random() * 6) + 1;
  dice2 = Math.floor(Math.random() * 6) + 1;
  if (player1.classList.value.includes("active")) {
    if (dice1 >= 2 && dice2 >= 2) {
      document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
      document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
      current = current + dice1 + dice2;
      document.getElementById("current-0").innerHTML = current;

      // clacCurrent();
      // console.log('rolldice()');
    }
    else {
      current = 0;
      document.getElementById("current-0").innerHTML = current;
      document.getElementById("current-1").innerHTML = 0;
      document.getElementById("dice-1").hidden = true;
      document.getElementById("dice-2").hidden = true;
      console.log('mistake ' + dice1 + " " + dice2);
      switchPlayers();

    }
  } else if (player2.classList.value.includes("active")){
    if (dice1 >= 2 && dice2 >= 2) {
      document.getElementById("dice-1").src = "dice-" + dice1 + ".png";
      document.getElementById("dice-2").src = "dice-" + dice2 + ".png";
      current = current + dice1 + dice2;
      document.getElementById("current-1").innerHTML = current;

      // clacCurrent();
      console.log('rolldice()');
    }
    else {
      current = 0;
      document.getElementById("current-0").innerHTML = current;
      document.getElementById("current-1").innerHTML = 0;
      document.getElementById("dice-1").hidden = true;
      document.getElementById("dice-2").hidden = true;
      console.log('mistake ' + dice1 + " " + dice2);
      switchPlayers();

    }
  }
}


function setPlayerScore() {
  let player1Score = document.getElementById("score-0");
  let player2Score = document.getElementById("score-1");
  
  //check which player is active
  if (player1.classList.value.includes("active")) {
    setActivePlayerScore(player1Score, current, currentDomElement1);
    player1scored = parseInt(player1Score.innerHTML)
  } else if(player2.classList.value.includes("active")){
    setActivePlayerScore(player2Score, current, currentDomElement2);
    player2scored = parseInt(player2Score.innerHTML)
    
  }
  checkWinner();
}

function setActivePlayerScore(playerScore, currentScore, currentDomElement){
  //check if player's score is greater than zero
  if(parseInt(playerScore.innerHTML) > 0){
    //update player's score
    playerScore.innerHTML = parseInt(playerScore.innerHTML) + currentScore;
    console.log(' bos ya 3am ', playerScore.innerText);
  }else{
    //set player's score to the current value
    playerScore.innerHTML = currentScore;
   
    console.log('mardy yapa ' +  playerScore.innerText);
  }
  //reset current score and update UI
  currentScore = 0;
  currentDomElement.innerHTML = currentScore;
  //switch players
  switchPlayers();
}


function switchPlayers() {
  current = 0;
  // set score for the active player
  console.log('fklshgkj');
  if (player1.classList.contains("active")) {
    player1.classList.remove("active");
    document.getElementById("dice-1").hidden = true;
    document.getElementById("dice-2").hidden = true;
    player2.classList.add("active"); // here is the issue
    
  } else if (player2.classList.contains("active")) {
    player2.classList.remove("active");
    document.getElementById("dice-1").hidden = true;
    document.getElementById("dice-2").hidden = true;
    player1.classList.add("active"); // here is the issue
    // console.log("player1");
    // player1.classList.add("active");
  }
}
function newGame() {
  document.getElementById("score-0").innerHTML = "0";
  // document.getElementById("img-0").hidden = true;
  document.getElementById("score-1").innerHTML = "0";
  document.getElementById("current-0").innerHTML = "0";
  document.getElementById("current-1").innerHTML = "0";

  // document.getElementsByTagName("img").hidden = true;
  document.getElementById("dice-1").hidden = true;
  document.getElementById("dice-2").hidden = true;
  player1.classList.add("active");
  document.getElementById("name-0").innerHTML="Player 1";
  document.getElementById("name-1").innerHTML="Player 2";
};
// document.getElementById("maxscore").addEventListener('onmouseleave', () => {});

function saveinput(event) {
let targetInput = document.getElementById("maxscore").value;
target = targetInput;
  console.log(target);

};

function checkWinner(){
  console.log(player1scored);
  console.log(player2scored);
  console.log(target);
  if (player1scored >= target) {
    console.log("elprince da ksb ya beh em4y el3b b3ed");
    document.getElementById("name-0").innerHTML = "winner";
    document.getElementById("name-1").innerHTML = "loser";
    player2.classList.remove("active");
  } else if (player2scored >= target) {
    console.log("elprince da ksb ya ma3lm wala lek feha");
    document.getElementById("name-0").innerHTML = "loser";
    document.getElementById("name-1").innerHTML = "winner";
    player1.classList.remove("active");
  };
}