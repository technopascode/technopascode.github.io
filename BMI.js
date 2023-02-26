const calculateButton = document.querySelector("#calculateButton");
const weightInput = document.querySelector("#weight");
const heightInput = document.querySelector("#height");
const resultDiv = document.querySelector("#result");

calculateButton.addEventListener("click", () => {
  const weight = parseFloat(weightInput.value);
  const height = parseFloat(heightInput.value) / 100; // convert to meters
  const bmi = weight / (height * height);

  if (isNaN(bmi)) {
    resultDiv.innerText = "Please enter a valid weight and height.";
  } else {
    resultDiv.innerText = `Your BMI is ${bmi.toFixed(2)}.`;
  }
});
