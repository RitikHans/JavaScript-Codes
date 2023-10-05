// first occurance of a string 
var str = 'This is a string';
console.log(str);
let position = str.indexOf('is');
console.log(position);

// last occurance of a string 
position = str.lastIndexOf('is');
console.log(position);


// substring of a string (startIndex, endIndex-1)
let substr3 = str.slice(1,5);
let substr1 = str.substring(1,7);
let substr2 = str.substr(1,3);
console.log(substr2);


// Replace some string part of a orinial string 
let replace = str.replace('string','Ritik Hans');
console.log(replace);
console.log(str);


// lower case and uppar case string 
console.log(str.toUpperCase());
console.log(str.toLowerCase());


// concationation through functions 
let newstring = str.concat(" and may be its not a string ");
console.log(newstring);
console.log(str);


// Removing white space from start and end of a string using trim function 
let strWithWhiteSpaces = "        There     are many    white spaces here   yes      ";
console.log(strWithWhiteSpaces);
console.log(strWithWhiteSpaces.trim());

// for getting element of that index we use charAt function 
let char2 = str.charAt(2);
console.log(char2)

console.log(str[6]);
console.log(str[1]);
console.log(str[2]);










