// function greet(){
//     console.log("Hello Good Morning ");
// }


// setTimeout(greet, 5000); // 2000 is treated as a 2 sec 


// with parameters 

function greet2(name1,care){
    console.log(`${name1} , Good AfterNoon , and ${care}`);
}

let setTime = setTimeout(greet2,5000,"Ritik","Take Care");
console.log(setTime);
clearTimeout(setTime);


let intervalId = setInterval(greet2, 2000,"Harry", "Welcome Here ");
clearInterval(intervalId);





// Displaying the time in our website 

function displayTime(){
    let time = new Date();
    console.log(time);
    document.getElementById('time').innerHTML = time;
}

setInterval(displayTime, 1000);