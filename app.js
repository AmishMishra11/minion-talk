var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

//var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var serverURL = "https://api.funtranslations.com/translate/minion.json";

function translateText(text) {
  return serverURL + "?" + "text=" + text;
}

function clickEvent() {
  var inputText = txtInput.value;
  fetch(translateText(inputText))
    .then((response) => response.json())
    .then((json) => {
      var translateText = json.contents.translated;
      output.innerText = translateText;
    });
}

btnTranslate.addEventListener("click", clickEvent);
