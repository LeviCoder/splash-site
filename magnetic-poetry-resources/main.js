
let wordspace = document.getElementById("wordspace");
let spaceWidth = wordspace.scrollWidth;
let spaceHeight = wordspace.scrollHeight;


function createWordElement(word) {

    let el = document.createElement("span");
    el.innerText = word;
    el.classList.add("word-el");
    el.style.left = Math.random()*(spaceWidth - word.length*12) + "px";
    el.style.top = Math.random()*(spaceHeight - 30) + "px";

    dragElement(el);
    
    wordspace.appendChild(el);
}

for (let i = 0; i < words.length; i++) {
    createWordElement(words[i]);
}


