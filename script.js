console.log("script.js loaded");

// let mainTitle = document.querySelector("#main-title");
// mainTitle.addEventListener("click", function () {
//     alert("You clicked here");
// });

let circles = document.querySelectorAll("circle");

circles.forEach((circle) => {
    let randomColor = Math.floor(Math.random()*1677215);
    circle.setAttribute("fill", randomColor);
});