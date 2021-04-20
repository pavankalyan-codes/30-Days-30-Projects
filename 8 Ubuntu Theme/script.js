var isMaximize = false;
window.addEventListener("load", function () {
  dragElement(document.getElementById("mydiv"));
  document.getElementById("myframe").allowTransparency = "false";
  var time = document.getElementById("time");

  setInterval(function () {
    let current = new Date().toString().split(" ");
    time.textContent = current[0] =
      " " + current[1] + " " + current[2] + " " + current[4];
  }, 1000);
});

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    if (elmnt.offsetLeft - pos1 < 60) {
      document.getElementById("lbar").style.display = "none";
    } else {
      document.getElementById("lbar").style.display = "";
    }
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function makeFullScreen() {
  if (isMaximize) {
    minimize();
    isMaximize = false;
  } else {
    document.getElementById("lbar").style.display = "none";
    document.getElementById("mydiv").classList.add("make-fullscreen");
    document.getElementById("myframe").classList.add("iframe-full");
    isMaximize = true;
  }
}

function minimize() {
  document.getElementById("lbar").style.display = "";
  document.getElementById("mydiv").classList.remove("make-fullscreen");
  document.getElementById("myframe").classList.remove("iframe-full");
}

const openApp = (app) => {
  console.log(app);
  document.getElementById("sbar").classList.add("hide");
  document.getElementById("myframe").src =
    "https://github1s.com/pavankalyan-codes/30-Days-30-Projects";
};

const minimizeWindow = () => {
  document.getElementById("mydiv").style.display = "none";
};
