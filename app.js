//toglogchiin eeljiig hadgalah huvisagch negduger togloch 0 , hoyrdugaar toglogch 1
var activePlayer = 0;
// toglogchdiin tugluulsan onoog hadgalah huvisagch
var scores = [0, 0];
//togkogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
var roundScore = 0;

//shooni ali talaaraa buusniig hadgalah huvisagch hregtei,1-6 gesehn utgiig ene huvisagchid sanamsarguigeer uusgej ugnu.
var dice = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>

//window.document.querySelector("#score-0").textContent = dice;
//document.querySelector("#score-1").textContent = dice;
window.document.querySelector("#score-0").textContent = 0;
window.document.querySelector("#score-1").textContent = 0;
window.document.querySelector("#current-0").textContent = 0;
window.document.querySelector("#current-1").textContent = 0;
document.querySelector(".dice").style.display = "none";
console.log("Wurfel :" + dice);
