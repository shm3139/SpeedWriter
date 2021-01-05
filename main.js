//main.js
console.log("Connect to main.js");

var wordArray=[
	"once",
	"upon",
	"a",
	"time",
	"I",
	"was",
	"doing",
	"Javascript",
	"Assignment",
	"3",
];




var targetElement=document.querySelector("#confirm");
targetElement.addEventListener('click',beginGame,false);
var seconds=0;

function beginGame(e){
	wordArray.length=document.getElementById("difficulty").value;
	e.target.remove();
	document.querySelector("#difficulty").remove();
	function time(){
		seconds++;
	}
	var timer=setInterval(time,1000);
	createForm();
};

var output=0;
function createForm(){

	let game=document.querySelector('#whereItBegins');

	let directions=document.createElement('p');
	let directionsText=document.createTextNode('Next word: '+wordArray[output]);

	let inputArea=document.createElement('form');
	let newLine=document.createElement('br');

	function gameOver(){
	inputField.disabled=true;
	directionsText.remove();
	directionsText=document.createTextNode('Game Over! You got: '+output+ ' out of '+wordArray.length+' words!');
	directions.setAttribute('class','gameOver');
	directions.appendChild(directionsText);
	};

	var gameOverTimer=setTimeout(gameOver,20000);

	let inputField=document.createElement('input');
	inputField.setAttribute('type','text');
	inputField.addEventListener('keyup',readWord,false);

	if(output===wordArray.length){
		inputField.disabled=true;
		directionsText=document.createTextNode('Congratulations! Your time was '+seconds+' seconds.');
		clearTimeout(gameOverTimer);
	}

	directions.appendChild(directionsText);
	inputArea.appendChild(inputField);
	game.appendChild(directions);
	game.appendChild(inputArea);
	game.appendChild(newLine);
	//after you append
	inputField.focus();

	function readWord(e){
		while(inputField.value===wordArray[output]&&output<wordArray.length){
		inputArea.remove();
		e.target.remove();
		directions.remove();
		newLine.remove();
		output++;
		createForm();
		}
	};
};

