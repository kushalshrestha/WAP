window.onload = eventFunction; // onload 'eventFunction' triggers
function eventFunction() {
  let x = document.getElementById("testDiv").innerText;
  console.log(x); // Kushal Shrestha Button1 Button2 Button3 Button4 Button5
  let y = document.getElementById("testDiv").innerHTML;

  console.log(y);
  /*
  <button id="btn">Kushal Shrestha</button>
  <button id="btn1">Button1</button>
  <button id="btn2">Button2</button>
  <button id="btn3">Button3</button>
  <button id="btn4">Button4</button>
  <button id="btn5">Button5</button>
*/
  let btn = document.getElementById("btn");
  console.log(typeof btn); // object
  console.log(btn); // <button id="btn">Kushal Shrestha</button>
  let btn1 = document.getElementById("btn1");
  btn1.onclick = testMethod; //onclick 'testMethod' triggers
  let btn1_alt = (document.getElementById("btn2").onclick =
    function anotherTestMethod() {
      console.log("Yellow Submarine");
    });

  let btn1_alt1 = (document.getElementById("btn3").onclick = () => {
    console.log("Another way 1: Yellow Submarine");
  });
  let btn1_alt2 = (document.getElementById("btn4").onclick = () =>
    console.log("Another way 2: Yellow Submarine"));
  let btn1_alt3 = (document.getElementById("btn5").onclick = testMethod);

  document.getElementById("intro-btn").onclick = testMethod2;

  document.getElementById("timer-btn").onclick = testMethod3;
}

function testMethod() {
  console.log("test method called");
}

/* Unobtrusive Styling*/
function testMethod2() {
  let y = (document.getElementById("intro").className = "p-clicked");
}

/* setTimeout has 2 part: what would you like to do, when would you like to do 
Here, I would like to armBomb in 3 seconds.
Also we've 3rd part:
*/
let remainingAlertTime = 15;

//try alternative comment-uncomment on below 2 lines 
//use clearInterval during setInterval and clearTimeout during setTimeout 
// let timer = setTimeout(armBomb, 3 * 1000, 3); // in global
let timer = setInterval(armBomb, 3 * 1000, 3); // in global


function testMethod3() {
  alert("Timer stoped");
  //cleartimeout() method cancels a timeout previously established by calling setTimeout()
//   clearTimeout(timer);
  clearInterval(timer);
}

function armBomb(remainingTime) {
  alert("Bomb armed! Exploding in: " + remainingTime + " seconds");
}
