var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
console.log(txtInput);

function clickEvent() {
  console.log("Clicked");
  console.log("inpit", txtInput.value);
}

btnTranslate.addEventListener("click", clickEvent);

// // input
// var name = prompt("enter your name");
// // procssing
// var display = "welcome! " + name;
// //output
// alert(display);
