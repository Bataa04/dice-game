// togloomin buh gayar ashiglagdah huvisagch
// togloom duussan eshiig shalgah tuluw
var isNewGame;
// ali toglogch shoo shidhiig hadgalna
var activePlayer;
// hoyr toglogchiin tsugluulsan onoo
var scores;
// idewhte toglogchiin tsugluulj bga eeljiin onoo
var roundScore;
// shooni yurgiig uzuuleh elementiig dom oos haij olood end hadgalay.
var diceDom = document.querySelector(".dice");
//togloomiig ehluulne
iniGame();
// togloomig shineer ehelhed beltgene
function iniGame() {
  // togloom ehlellee gedeg tuluwt oruulna
  isNewGame = false;
  //toglogchiin eeljiig hadgalah huvisagch negduger togloch 0 , hoyrdugaar toglogch 1
  activePlayer = 0;
  // toglogchdiin tugluulsan onoog hadgalah huvisagch
  scores = [0, 0];
  //togkogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
  roundScore = 0;

  //shooni ali talaaraa buusniig hadgalah huvisagch hregtei,1-6 gesehn utgiig ene huvisagchid sanamsarguigeer uusgej ugnu.
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // program ehlhed beltgie.
  document.getElementById("score-0").textContent = "0";
  window.document.getElementById("score-1").textContent = "0";
  window.document.getElementById("current-0").textContent = "0";
  window.document.getElementById("current-1").textContent = "0";

  // toglogchdiin neriig butsaaj gargah
  document.getElementById("name-0").textContent = "Player1 ";
  document.getElementById("name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

  diceDom.style.display = "none";
}

// shoog shideh event listener
document.querySelector(".btn-roll").addEventListener("click", function () {
  // 1-6 dotroh sanamsargui neg too gargaj awna
  if (isNewGame === true) {
    var diceNumber = Math.floor(Math.random() * 6) + 1;

    // shooni yurgiig wed deer gargaj irne
    diceDom.style.display = "block";

    // buusan toond hargalzah zurgiig web gargaj irne
    diceDom.src = "dice-" + diceNumber + ".png";

    //  buusan too n 1 ees zalgaatai bol idewhte toglogchiin eeljiin onoog uurchilnu

    if (diceNumber !== 1) {
      //1 ess yalgaatai too buulaa.buusan toog nemj ugluu.
      roundScore = roundScore + diceNumber;
      document.getElementById("current-" + activePlayer).textContent =
        roundScore;
    } else {
      switchToNextPlayer();
    }
  } else {
    alert("Togloom duussan baina. New Game towchig darnuu");
  }
});

// Hold towchnii event listener

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (isNewGame) {
    // ug toglogchiin eeljnii onoog golobal onoon deer n nemj ugnu.
    scores[activePlayer] = scores[activePlayer] + roundScore;
    // delgets deer onoog uurchlunu
    document.getElementById("score-" + activePlayer).textContent =
      scores[activePlayer];

    // ug toglogch hojson eshiig shalgah (onoo n 100gaas ih)
    if (scores[activePlayer] >= 100) {
      // togloomig duussan tuluwt oruulna
      isNewGame = true;
      // yalagch gesen text iig nerniihaan orond gargana
      document.getElementById("name-" + activePlayer).textContent = "WINNER!!";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
    } else {
    }

    // toglogchiin eeljiig solilno.
    switchToNextPlayer();
  } else {
    alert("Togloom duussan baina. New Game towchig darnuu");
  }
});
// ene function n togloh eeljiig draagin toglogch ruu shiljuuldeg
function switchToNextPlayer() {
  // eeljiin onoog 0 bolgono
  roundScore = 0;
  document.getElementById("current-" + activePlayer).textContent = 0;
  // 1 buusan tul nuguu toglogchiin eelj irne.
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);

  // ulaan tseg shiljuuleh.
  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  //shoog tur alga bolgoh

  diceDom.style.display = "none";
}
// new game shine togloom ehluuleh tovchnii event listner

document.querySelector(".btn-new").addEventListener("click", iniGame);
