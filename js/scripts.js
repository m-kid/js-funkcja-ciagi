var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";

console.log(text);

var addedText = prompt('Jakie jest Twoje ulubione zwierzę?');
var upperAddedText = addedText.toUpperCase();

console.log(upperAddedText)

var divideText = text.split (" ");

var firstWord = divideText[0];
console.log(firstWord);


var textTransformed = text.replace(firstWord, upperAddedText);
var textLength = textTransformed.length;


console.log(textTransformed);
console.log(textTransformed.length);
console.log(textTransformed.substr(0, textLength / 2));
