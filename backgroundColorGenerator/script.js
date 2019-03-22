var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


function setGradient() {
        body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
        css.textContent = body.style.background + ";";
}


function hexColorGenerator() {
  let randomNum = Math.floor(Math.random() * 16777216); // 256^3  
  let hextest = randomNum.toString(16);  
  hextest = ('00000' + hextest).substr(-6);
  hextest = '#' + hextest.toUpperCase();
  return hextest;
}


function randomColor() {
  color1.value = hexColorGenerator(); 
  color2.value = hexColorGenerator();
  setGradient();
}


color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

button.addEventListener("click", randomColor)
