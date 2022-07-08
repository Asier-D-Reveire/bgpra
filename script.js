var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bodyy");
var h3 = document.querySelector("h3");
var button = document.getElementsByClassName("btn")[0];

function f() {
    body.style.background = "linear-gradient(90deg, " + color1.value + ", " + color2.value + ")";
    h3.textContent = body.style.background + ";";
}
color1.addEventListener("input", f);
color2.addEventListener("input", f);
button.addEventListener("click", function() {
    body.style.background = "linear-gradient(90deg, rgb(21, 21, 239), rgb(234, 77, 17)";
    h3.textContent = body.style.background + ";";

});