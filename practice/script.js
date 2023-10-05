function add(num1, num2){
    return num1 + num2;
}


let names = "Ritik Hans ";
let a =  12;
let b = 23;
let ans = add(a, b);
console.log("The sum of two Numbers is ", ans);

let age = 1234;
if(age > 18){
    console.log("You are greator than 18");
}
else{
    console.log("You are not greator than 18");
}

let arr = [1,2,3,4,5,6,"Ritik Hans","harry potter"];
let arr2 = new Array(1,2,3.45,"Hans","Ritik");
console.log(arr2[4]);

for(element of arr){
    console.log("the element is ", element);
}

let employee = {
    nam : "Ritik" ,
    salary : 1234,
    age : 45,
    gender : "Male",
}
console.log("The keys values are printing from this direction ");
for(key in employee){
    console.log("The key is " , key);
}

arr.forEach(function print(element){
    console.log("My name is Ritik Hans ,"+ element);
});


alert("Hello Good Morning");
let nums = prompt("Enter any Value");
let chk = confirm("Do you shure you want to do this");
if(chk){
    console.log("It has been done now");
}
else{
    console.log("It has been deleted now ");
}


let container = document.getElementById("container");
console.log(container);

let className = document.getElementsByClassName("box");
console.log(className);

let select = document.querySelector("#container");
console.log(select);







function hide(){
    let para = document.getElementById('para');
    if(para.style.display != 'none'){
        para.style.display = 'none';
    }
    else{
        para.style.display = 'block';
    }
}


let heading = document.getElementById('heading');
heading.addEventListener("mouseover", function run(){
    console.log("You are at Heading");
});

heading.addEventListener("mouseout", function print(){
    console.log("You are outside the heading box");
});

