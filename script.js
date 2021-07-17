console.log("Star Wars");

let handle = document.getElementById("handle");
let blade = document.getElementById("blade");

let Red = document.getElementById("Red");
let Green = document.getElementById("Green");
let Blue = document.getElementById("Blue");
let Yellow = document.getElementById("Yellow");
let Purple = document.getElementById("Purple");
let Pink = document.getElementById("Pink");
let line;
let val = localStorage.getItem("text");
let text;
handle.addEventListener("click", function () {
  if (val == null || val == "red") {
    line = Red;
    blade.classList.toggle("red");
  } else if (val == "blue") {
    line = Blue;
    blade.classList.toggle("blue");
  } else if (val == "green") {
    line = Green;
    blade.classList.toggle("green");
  } else if (val == "yellow") {
  line =  Yellow
    blade.classList.toggle("yellow");
  } else if (val == "purple") {
    line = Purple
    blade.classList.toggle("purple");
  } else if (val == "pink") {
    line = Pink
    blade.classList.toggle("pink");
  }
   line.classList.add("underline");
});



Red.addEventListener("click", () => {
  line.classList.remove("underline");
  blade.classList.remove(`${val}`);
  localStorage.setItem("text", "red");
  val = localStorage.getItem("text");
});
Blue.addEventListener("click", () => {
  line.classList.remove("underline");
  blade.classList.remove(`${val}`);
  localStorage.setItem("text", "blue");
  val = localStorage.getItem("text");
});
Green.addEventListener("click", () => {
  line.classList.remove("underline");
  blade.classList.remove(`${val}`);
  localStorage.setItem("text", "green");
  val = localStorage.getItem("text");
});
Yellow.addEventListener("click", () => {
  line.classList.remove("underline");
  blade.classList.remove(`${val}`);
  localStorage.setItem("text", "yellow");
  val = localStorage.getItem("text");
});
Purple.addEventListener("click", () => {
  line.classList.remove("underline");
  blade.classList.remove(`${val}`);
  localStorage.setItem("text", "purple");
  val = localStorage.getItem("text");
});
Pink.addEventListener("click", () => {
  line.classList.remove("underline");
  blade.classList.remove(`${val}`);
  localStorage.setItem("text", "pink");
  val = localStorage.getItem("text");
});
