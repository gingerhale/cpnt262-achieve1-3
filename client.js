// establishing variable 
const text = 'Roses are red, Violets are blue';

// string length
console.log(text.length);
// value = 31

// substring 
if (text.includes('lets')){
console.log('found substring');
} else {
console.log('no substring found')
}
// value = 'found substring'

// index
console.log(text.indexOf("s"));
// value = 2

// first character
const firstChar = text[0];
console.log(firstChar);
// value = R

// last charcter
const lastChar = text[text.length - 1];
console.log(lastChar)
// value = e

