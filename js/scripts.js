var text = "Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.";

console.log(text);

var addText = 'Zielone słonie';
var upperAddText = addText.toUpperCase();

console.log(upperAddText)

var afterText = text.replace('Papugi', upperAddText);

console.log(afterText);
console.log(afterText.length);
console.log(afterText.substr(0, 45));
