const button = document.getElementById("findButton");
button.onclick = function() {
  // your code goes here
  let typedText = document.getElementById("input").value;
  let words = typedText.split(", ");
  console.log(getAnagramsOf(typedText));
  let result = getAnagramsOf(typedText);
  let newDiv = document.createElement("div");
  newDiv.innerHTML = result.join(", ");
  document.getElementById("results").appendChild(newDiv);
};

function getAnagramsOf(myWord) {
  let anagramArray = [];
  let newWord = alphabetize(myWord);
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let currentWord = alphabetize(word);
    if (currentWord === newWord) {
      anagramArray.push(word);
    }
  }
  return anagramArray;
}

function alphabetize(a) {
  return a
    .toLowerCase()
    .split("")
    .sort()
    .join("")
    .trim();
}
