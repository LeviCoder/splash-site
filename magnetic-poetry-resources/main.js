
let wordspace = document.getElementById("wordspace");

function createWordElement(word) {

    let el = document.createElement("span");
    el.classList.add("word-el");
    el.innerText = word;
    wordspace.appendChild(el);
}

for (let i = 0; i < words.length; i++) {
    createWordElement(words[i]);
}