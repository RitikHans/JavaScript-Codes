let myVar = 34;
let myVar2 = "Ritik Hans";
let myVar3 = true;
let myVar4 = null;
let myVar5 = undefined;



// Objects 
let employee = {
    name : "Ritik",
    salary : 10,
    channel : "theritikhans",
    channel2 : "myNameIsRitikHans",
    "channel 3" : "I am Ritik Hans ",
}
// console.log(employee['channnel 3'])

console.log(employee);

console.log(employee.channel);
console.log(employee.name);

console.log(employee['channel']);
console.log(employee['name']);



// Arrays 

// let names = [123,23,3,"Ritik Hans ", undefined] ;
let names = new Array(41,2,4,"Ritik Hans ", undefined);
console.log(names);
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);
console.log("The length of an Arrays is " + names.length);

names = names.sort();
console.log(names);

names.push("This is a push Element ");
console.log(names);


// creating array with 23 size 
let otherNames = new Array(23);












