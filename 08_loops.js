//                                          for Loops 


// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

let friends = ["ritik","kumar","deept","ajat", "nigar"];

// for(let i = 0; i < friends.length; i++){
//     console.log("Hello friend " + friends[i]);
// }


//                                          for Each loop

friends.forEach(function print(element){
    console.log("Hello Friend to modern JavaScript , " + element);
});




//                                        for off Loop 
for(element of friends){
    console.log("Hello Friend to modern JavaScript , " + element);
}



//                                       for in lopps 
let employee = {
    name : "ritik",
    salary : 2,
    address : "jammu",
    rollNo : 1,
    age : 21,
}

for(key in employee){
    // console.log(employee[key]);
    console.log(`The $(key) of employee is $(employee[key])`);
}



//                               while loop in js 
let i = 1;
while(i < 4){
    console.log(i);
    i++;
}



//                                      do while loop
let j = 1;
do{
    console.log("The value of i is : " + j);
    j ++;
}while(j < 4);



