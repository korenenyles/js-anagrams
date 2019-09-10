const button = document.getElementById("findButton");
let wordsSplit = words.split(", ");

function getAnagramsOf(typedText){
    for( let i = 0; i < wordsSplit.length; i++){
    let alphabetical = wordsSplit.split("").sort().join("");
    
        
    }
    return words;
}

button.onclick = function () {
    // your code goes here

}



    let typedText = document.getElementById("input").value;
    getAnagramsOf(typedText);




function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}