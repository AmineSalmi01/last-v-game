const words = [
    "Hello World",
    "Amine.",
    "Amine.Salmi",
    "Solicode"
];

// levels
const lvls = {
    "Easy": 60,
    "Normal": 30,
    "Hard": 15 
};

let LevelName = "Normal";
let LevelSeconds = lvls[LevelName];


//selectors 


let StartButoon = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".messg .level");
let SecondsSpan = document.querySelector(".messg .seconds");
let Word = document.querySelector(".words");
let Words_comming = document.querySelector(".words-comming");
let input = document.querySelector(".input");
let TimeSpan = document.querySelector(".time Span");
let ScoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMssg = document.querySelector(".finish");


// setting

lvlNameSpan.innerHTML = LevelName;
SecondsSpan.innerHTML = LevelSeconds;
TimeSpan.innerHTML = LevelSeconds;
scoreTotal.innerHTML = words.length;


//close paste event

input.onpaste = function () {
    return false;
}

StartButoon.onclick = function (){
    this.remove();
    getwords()
}


function getwords() {
    let random_word = words[Math.floor(Math.random() * words.length)];
    let index = words.indexOf(random_word);
    words.splice(index, 1);
    Word.innerHTML = random_word;

    Words_comming.innerHTML ='';
    for(let i = 0; i < words.length; i++) {
        let div = document.createElement("div");
        let text = document.createTextNode(words[i]);
        div.appendChild(text);
        Words_comming.appendChild(div); 
    }
    startPlay() 
    
    }

    // play function 
    function startPlay() {
        let start  =  setInterval(() => {
            TimeSpan.innerHTML--;

            if(TimeSpan.innerHTML === "0"){
                clearInterval(start);

                if(Word.innerHTML.toLowerCase() === input.value.toLowerCase()){
                    input.value = ''
                    ScoreGot.innerHTML++;
                }else{
                    let span = document.createElement("span");
                    span.className = 'Opss';
                    let spanText = document.createTextNode("Game over")
                    span.appendChild(spanText);
                    finishMssg.appendChild(span);
                }
            }
        }, 1000);

}