var timer = 30;
var score = 0;
var randval = 0;

function increaseScore(){
   score += 1;
   document.querySelector("#scoreval").textContent=score;
}

function makeBubble(){
   var clutter= "";

   for (var i = 1; i <= 168; i++){
      var rn = Math.floor(Math.random()*10)
      clutter += `<div class = "bubble">${rn}</div>`;
   }

   document.querySelector("#pbtm").innerHTML = clutter;
}


function runTimer() {
  var timerint = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML = `
      <div class="game-over">
         <h1>Game Over</h1>
         <h2>Your Final Score: ${score}</h2>
      </div>
      `;
    }
  }, 1000);
}


function getNewHit(){
   randval = Math.floor(Math.random()*10)
   document.querySelector("#hit").innerHTML = randval;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickednum = Number(dets.target.textContent);
  if (clickednum === randval) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});


makeBubble();
getNewHit();
runTimer();