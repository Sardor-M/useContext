
// 

const text = "this is a simple text";

const words = text.split(" ");

for (let i = 0; i < words.length; i++){
    words[i] = [i][0].toUpperCase( ) + words[i].slice (1, words[i].length)
}

const newText = words.join(" ");
console.log(newText);