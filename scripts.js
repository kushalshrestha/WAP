console.log("Hello World");
// console.log(x); //undefined
y = 10;
console.log(y); //10
var z = 5;
console.log(z);

console.log(a);
var a = 5;
console.log(a);

// console.log(b); //Uncaught ReferenceError: Cannot access 'b' before initialization. See 'let' is used below. Gives error. i.e fails..won't go further below
let b = 1325;
console.log(b);

console.log(c); //undefined. See 'var' is used below and does not give error
var c = 99329;
console.log(c);

//line 20 will have var x;
if (false) {
  var d = 8; // see line 20;
  console.log(d);
}
console.log(d);

var e = 101010;
if (false) {
  var e = 8; // see line 20;
  console.log(d);
}
console.log(e);

if (true) {
  console.log("adskjdjasl");
  let f = 8888; // no hoisting going on. let won't go outside the block
  console.log(f);
}
// console.log(f); //Uncaught ReferenceError: f is not defined

const g = 0;
console.log(g);

// const h=9182171;
// g=4378329232; //ncaught TypeError: Assignment to constant variable.
// console.log(g);

// for(let x=0; x<4;4++){

// }
// console.log(x);

console.log(i);
for (var i = 0; i < 4; i++) {}

console.log(j);
for (var j = 0; j < 4821; j++) {}
console.log(j);

/* function scopes */

// function f1() {
//     console.log('reached here');
//   var x = 6;
// }

// console.log(x); // Uncaught ReferenceError: x is not defined + f1 not called

////////////////////

function f2() {
    var x = 6;
  }
  
console.log(f2()); // now will give undefined
//////////////////////////


function f3() {
    console.log("f3 called");
    var kushal = 612;
  }
  f3();
//   console.log(kushal); // not defined;
//////////



  function f4() {
    console.log("f4 called");
    kushal1 = 111112;
  }
  f4();
//   console.log(kushal1); // not defined;

/////////


// function f6(){
//     function f7(){
//          xa=712782178;
//     }
//     f7();
//     console.log(xa); //Uncaught ReferenceError: xa is not defined where var is placed
//     //!!! IMP TODO: now try removing var. Then above code will have a output.
// }
// f6(); //xa is not defined



// let anil=7;
// for(var anil=0;anil<3;anil++){
// }
// console.log(anil)



var das=78932923;
for(let das=0;das<99;das++){
    console.log(das);
}
console.log(das);


var qwe = 1199;
var qwer=1199;
var qwert="1199";
console.log(qwe==qwer);
console.log(qwe==qwert);
console.log(qwe===qwert);


var po=1;
console.log(po == true);
var pot=9;
console.log(pot == true);
var pote=-9;
console.log(pot == true);

var rte=7;
var rteq=7.0;
var rteqw=7.1;

console.log(rte == rteq);
console.log(rte === rteq);
console.log(rte === rteqw);


var dhf=7;
var dhfu = "7.5";
console.log(dhf+dhfu);
console.log(dhf+parseInt(dhfu)); //ignores decimal
console.log(dhf+parseFloat(dhfu)); //decimal included


var cx=7;
var cxq=cx;
// cxq=9;
console.log(cxq);

var tan = {
    i: 43, j: 4893, j:823239222389 , k:"kushal", k:"kushal shrestha" //notice 2 same keys, so will overwrite
}

var tank = tan;
tank.i=999;
tank.kushal=10;
tank.kushal="new value";    
console.log(tank); //by reference, since object. change tan to not object