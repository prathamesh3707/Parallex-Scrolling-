let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_front = document.getElementById("mountains_front");
let mountains_behind = document.getElementById("mountains_behind");
let btn = document.getElementById("btn");
let text = document.getElementById("text");
let header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  stars.style.left = value * 0.25 + "px";
  moon.style.top = value * 0.8 + "px";
  mountains_behind.style.top = value * 0.3 + "px";
  mountains_front.style.top = value * 0 + "px";
  text.style.marginRight = value * 4 + "px";
  btn.style.marginTop = value * 1.5 + "px";
});
