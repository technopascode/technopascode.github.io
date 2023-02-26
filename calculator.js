let result = document.getElementById("result");

function addSymbol(symbol) {
  result.value += symbol;
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (err) {
    result.value = "Error";
  }
}
