
let wordspace = document.getElementById("wordspace");
let spaceWidth = wordspace.scrollWidth;
let spaceHeight = wordspace.scrollHeight;


function toggleWordHighlight(e) {
    e.preventDefault();
    if(e.target.classList.contains("word-highlighted")) {
        e.target.classList.remove("word-highlighted")
    } else {
        e.target.classList.add("word-highlighted");
    }
    
}

function renameTile(e) {
    e.preventDefault();
    let newWord = prompt("type in a new word") || "blank";
    e.target.innerText = newWord;
}

function createWordElement(word) {

    let el = document.createElement("span");
    el.innerText = word;
    el.classList.add("word-el");
    el.classList.add("word-el-basic");
    el.style.left = Math.random()*(spaceWidth - word.length*12) + "px";
    el.style.top = Math.random()*(spaceHeight - 30) + "px";

    dragElement(el);
    el.addEventListener("contextmenu", toggleWordHighlight);
    
    wordspace.appendChild(el);
}

function createTextboxElement(word) {

    let el = document.createElement("span");
    el.innerText = "blank"
    el.classList.add("word-el");
    el.classList.add("text-el");
    el.style.left = Math.random()*(spaceWidth - word.length*12) + "px";
    el.style.top = Math.random()*(spaceHeight - 30) + "px";

    dragElement(el);
    el.addEventListener("contextmenu", renameTile);
    
    wordspace.appendChild(el);
}

for (let i = 0; i < words.length; i++) {
    createWordElement(words[i]);
}
for(var i = 0; i < 7; i++) {
    createTextboxElement("no");
}


function hideInstructions() {
    document.getElementById("blocker").style.display = "none";
}