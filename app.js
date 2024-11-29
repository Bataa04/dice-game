//toglogchiin eeljiig hadgalah huvisagch negduger togloch 0 , hoyrdugaar toglogch 1
var activePlayer = 0;
// toglogchdiin tugluulsan onoog hadgalah huvisagch
var scores = [0, 0];
//togkogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
var roundScore = 0;

//shooni ali talaaraa buusniig hadgalah huvisagch hregtei,1-6 gesehn utgiig ene huvisagchid sanamsarguigeer uusgej ugnu.
var diceNumber = Math.floor(Math.random() * 6) + 1;

// program ehlhed beltgie.
document.getElementById("score-0").textContent = "0";
window.document.getElementById("score-1").textContent = "0";
window.document.getElementById("current-0").textContent = "0";
window.document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 dotroh sanamsargui neg too gargaj awna
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // shooni yurgiig wed deer gargaj irne
  diceDom.style.display = "block";

  // buusan toond hargalzah zurgiig web gargaj irne
  diceDom.src = "dice-" + diceNumber + ".png";

  //  buusan too n 1 ees zalgaatai bol idewhte toglogchiin eeljiin onoog uurchilnu

  if (diceNumber !== 1) {
    //1 ess yalgaatai too buulaa.buusan toog nemj ugluu.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;
  } else {
    // toglogchiin eeljindee busan onoog 0 bolgo.
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    // 1 buusan tul nuguu toglogchiin eelj irne.
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

    // ulaan tseg shiljuuleh.
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    //shoog tur alga bolgoh

    diceDom.style.display = "none";

    // if (activePlayer === 0) {
    // activePlayer = 1;
    //} else {
    // activePlayer = 0;
    //}
  }
});
