var buttonEl = document.querySelector(".btn");
var divEl = document.querySelector(".mydiv");

var colors = ["red","green","blue"];
var i = 0;

buttonEl.onclick = function() {
    // logic 

    divEl.style.backgroundColor = colors[i]; 
    i++;

    if (i == 3) {
        i = 0;
    }

}

