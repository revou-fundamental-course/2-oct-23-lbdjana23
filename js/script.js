const title = document.getElementById("header-title");
const inputField = document.getElementById("inputField");
const buttonConvert = document.getElementById("buttonConvert");
const buttonReverse = document.getElementById("buttonReverse");
const buttonReset = document.getElementById("buttonReset");
const resultElement = document.getElementById("result");

buttonConvert.addEventListener("click", function () {
  const celsius = parseFloat(inputField.value);
  if (!isNaN(celsius)) {
    const fahrenheit = (celsius * 9) / 5 + 32;
    title.innerHTML = `Result :<br/> ${celsius} Celsius is equal to ${fahrenheit.toFixed(
      2
    )} Fahrenheit.`;
    resultElement.style.display = "block";
  } else {
    title.innerHTML = " Invalid input. Please enter a valid number.";
    resultElement.style.display = "block";
  }
});

buttonReset.addEventListener("click", function () {
  inputField.value = "";
  title.innerHTML = "Result";
  title.innerHTML = "none";
});

buttonReverse.addEventListener("click", function () {
  const fahrenheit = parseFloat(inputField.value);
  if (!isNaN(fahrenheit)) {
    const celsius = ((fahrenheit - 32) * 5) / 9;
    title.innerHTML = `Result :<br/> ${fahrenheit} Fahrenheit is equal to ${celsius.toFixed(
      2
    )} Celsius.`;
    resultElement.style.display = "none";
  } else {
    title.innerHTML = "Invalid input. Please enter a valid number.";
    resultElement.style.display = "block";
  }
});

// const title = document.getElementById("header-title");
// const conversionButton = document.getElementById("buttonConvert");

// conversionButton.addEventListener("click", function () {
//   title.innerHTML = "holla";
// });

// function changeTitle() {
//   title.innerHTML = "hello";
// }

// const integerRegex = /^-?\d+$/;
// console.log(integerRegex.test("10asd"));

// INI TEST UNTUK GIT BRANCH

// const title = document.getElementById("header-title");
// const conversionButton = document.getElementById("buttonConvert");
// const resetButton = document.getElementById("buttonReset");
// const reverseButton = document.getElementById("buttonReverse");
// const inputField = document.getElementById("inputField");
// const resultElement = document.getElementById("result");

//  buttonConvert.addEventListener("click", function () {
//    const celsius = parseFloat(inputField.value);
//    if (!isNaN(celsius)) {
//      const fahrenheit = (celsius * 9) / 5 + 32;
//      resultElement.textContent = `${celsius} Celsius is equal to ${fahrenheit.toFixed(
//        2
//      )} Fahrenheit.`;
//      resultElement.style.display = "block";
//    } else {
//      resultElement.textContent =
//        "Invalid input. Please enter a valid number.";
//      resultElement.style.display = "block";
//    }
//  });

// resetButton.addEventListener("click", function () {
//   inputField.value = "";
//   resultElement.textContent = "Result";
//   resultElement.style.display = "none";
// });

// reverseButton.addEventListener("click", function () {
//   title.innerHTML = "hello";
// });
