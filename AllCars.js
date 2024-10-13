var elements = document.getElementsByClassName("fotoproduk");
var i;

function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

function three() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}

var header = document.getElementById("carpreview");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

