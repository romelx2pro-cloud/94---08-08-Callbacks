// function grumpus() {
//   alert("GAHHH GO AWAY!")
// }

// // setTimeout(callback, delay)
// setTimeout(function () { //we pass an anonymous callback function
//   alert("WELCOME!");
// }, 5000);

// //DON'T WORRY ABOUT ANY OF THIS SYNTAX!!
// const btn = document.querySelector('button');
// // JUST FOCUS ON THE CALLBACK WE PASS IN!
// btn.addEventListener('click', function () {
//   alert("WHY DID YOU CLICK ME!!??")
// })
function grumpus() {
  // alert("GAHHH GO AWAY!");
  console.log("aga");
}
// setTimeout(function () {
//   console.log("wc");
// }, 2000);
document.querySelector("button").addEventListener("click", grumpus);
