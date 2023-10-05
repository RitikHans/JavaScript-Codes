let main = document.getElementById('main');
console.log(main);

let nav = document.getElementById('nav');
console.log(nav);

// nav.innerHTML;

let containers = document.getElementsByClassName('container');
console.log(containers);


// slect only first element 
let sel = document.querySelector('.container');
let sel2 = document.querySelector('#nav>li');
console.log("Selector returns ", sel2);


let sel3 = document.querySelectorAll('#nav>li');
console.log("Another selctor return ", sel3);








