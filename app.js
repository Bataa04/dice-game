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
document.querySelector(".btn-roll").addEventListener("click", function () {
  var diceNumber = Math.floor(Math.random() * 6) + 1;
  diceDom.style.display = "block";
  diceDom.src = "dice-" + diceNumber + ".png";
});
