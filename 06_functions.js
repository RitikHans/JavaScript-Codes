

function great(name, greetText){
    if(name != "Sanya"){
        console.log(greetText + " " + name + " ");
        console.log(name + " is a good boy \n");
    }
    else{
        console.log(greetText + " " + name + " ");
        console.log(name + " is a good girl \n");
    }
}

function getSum(a, b, c){
    let d = a  + b + c;
    return d;
}

let name1 = "Ritik";
let name2 = "Karan";
let name3 = "Shubam";
let name4 = "Sanya";

let greetText = "Good Morning!";

// method - 1
// console.log(name1 + " is a good boy");
// console.log(name2 + " is a good boy");
// console.log(name3 + " is a good boy");
// console.log(name4 + " is a good girl");


// method 2 
great(name1, greetText);
great(name2, greetText);
great(name3, greetText);
great(name4, greetText);



let a = 12;
let b  = 23;
let c = 34;

let addition = getSum(a,b,c);
console.log("The sum of three numbers is " + addition);