var isMaximize = false;
const vw = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
);
const vh = Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
);
// document.getElementById("desktop").addEventListener(
//   "mousedown",
//   function (event) {

//     if ((event.buttons & 3) === 3) {
//       //Do something here
//     }
//   },
//   true
// );

window.onload = function() {
    //dragElement(document.getElementById("terminal"));
    //dragElement(document.getElementById("mydiv1"));

    //document.getElementById("myframe").allowTransparency = "false";
    var time = document.getElementById("time");

    document.oncontextmenu = rightClick;

    setInterval(function() {
        let current = new Date().toString().split(" ");
        time.textContent = current[0] =
            " " + current[1] + " " + current[2] + " " + current[4];
    }, 1000);

    document.getElementById("command").addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            processCommand();
        }
    });

    document.getElementById("myrange").oninput = function() {
        console.log("fuck off" + this.value);
        var value = ((this.value - this.min) / (this.max - this.min)) * 100;
        this.style.background =
            "linear-gradient(to right, #2f5bee 0%, #2f5bee " +
            value +
            "%, #fff " +
            value +
            "%, white 100%)";
    };

    document.getElementById("myrange1").oninput = function() {
        console.log("fuck off" + this.value);
        var value = ((this.value - this.min) / (this.max - this.min)) * 100;
        this.style.background =
            "linear-gradient(to right, #2f5bee 0%, #2f5bee " +
            value +
            "%, #fff " +
            value +
            "%, white 100%)";
    };
};

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
        // if (elmnt.offsetLeft - pos1 < 60) {
        //   document.getElementById("lbar").style.display = "none";
        // } else {
        //   document.getElementById("lbar").style.display = "";
        // }
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
    if (app === "chrome") {
        document.getElementById("sbar").classList.remove("hide");
        document.getElementById("myframe").src =
            "https://www.google.com/webhp?igu=1";
        //document.getElementById("mydiv").classList.remove("hide");
    } else {
        document.getElementById("myframe").src = "";
        document.getElementById("sbar").classList.add("hide");
        if (app === "vscode") {
            document.getElementById("myframe").src =
                "https://github1s.com/pavankalyan-codes/30-Days-30-Projects";
        }
    }

    maximizeWindow();

    // document.getElementById("sbar").classList.add("hide");
    // document.getElementById("myframe").src =
    //   "https://github1s.com/pavankalyan-codes/30-Days-30-Projects";
};

const minimizeWindow = () => {
    document.getElementById("mydiv").classList.add("hide");
};

const maximizeWindow = () => {
    document.getElementById("mydiv").classList.remove("hide");
};

function rightClick(clickEvent) {
    clickEvent.preventDefault();

    // if (document.getElementById("contextMenu").style.display == "block")
    //   hideMenu();
    // else {
    //   var menu = document.getElementById("contextMenu");

    //   menu.style.display = "block";
    //   menu.style.left = clickEvent.pageX + "px";
    //   menu.style.top = clickEvent.pageY + "px";

    // }
}

function hideMenu() {
    document.getElementById("contextMenu").style.display = "none";
}

function leftClick() {
    document.getElementById("rt-menu").classList.add("hide");
    console.log("dfdf");
    hideMenu();
}
document.addEventListener(
    "contextmenu",
    function(ev) {
        if (ev.clientX < 60 || ev.clientY < 20) {
            return;
        }

        ev.preventDefault();

        var menu = document.getElementById("contextMenu");

        menu.style.display = "block";

        if (ev.pageY > 450) {
            if (ev.pageX > vh - 200) {
                menu.style.left = ev.pageX - 200 + "px";
            } else {
                menu.style.left = ev.pageX + "px";
            }

            menu.style.top = ev.pageY - 190 + "px";
        } else {
            if (ev.pageX > vh - 200) {
                menu.style.left = ev.pageX - 200 + "px";
            } else {
                menu.style.left = ev.pageX + "px";
            }

            menu.style.top = ev.pageY + "px";
        }

        return false;
    },
    false
);

function dashboardSearch() {
    //document.getElementById("overlay").classList.add("overlay");
}

function closeWindow() {
    document.getElementById("mydiv").classList.add("hide");
}

function getBrowserSearchbar() {
    return `<div id="sbar" class="hide">
    <div class="search-bar d-flex col-12 pad5" >
    <i class="fas fa-redo-alt broswer-icons col-1"></i>
    <i class="fas fa-home broswer-icons col-1"></i>

    <input
      type="text"
      id="search"
      class="col-9"
      value="www.google.com"
    />
    </div >
  </div >`;
}

function processCommand() {
    let command = document.getElementById("command").value;
    let commandOutput =
        `
    <div class="d-flex"> 
      <span class="terminal-text">PavanKalyan@Portfolio:~$</span><input readonly class="trans-inp white fw-normal ml2" value=` +
        command +
        `></input>
    </div>
    <div class="d-flex white fw-normal">
      ` +
        command +
        `: command not found
    </div>

  `;
    document.getElementById("cmdOutput").innerHTML += commandOutput;
    document.getElementById("command").value = "";
    var bash = document.getElementById("bash");
    bash.scrollTop = bash.scrollHeight;
}

function newfolder() {
    console.log("opening");
}

function openTopMenu() {
    console.log("checking");
    document.getElementById("rt-menu").classList.remove("hide");
}