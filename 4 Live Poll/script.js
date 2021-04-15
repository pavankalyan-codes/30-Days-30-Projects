var pollResult = [];
window.addEventListener("load", function () {
  var random1 = getRandom(1, 100);
  var random2 = getRandom(1, 100);
  var random3 = getRandom(1, 100);
  var random4 = getRandom(1, 100);

  pollResult.push(random1);
  pollResult.push(random2);
  pollResult.push(random3);
  pollResult.push(random4);

  let sum = pollResult.reduce((sum, element) => {
    return sum + element;
  });

  pollResult = pollResult.map((element) => {
    return (element / sum) * 100;
  });
});
function select(opt) {
  document.getElementById("opt1").style.width = pollResult[0] + "%";
  document.getElementById("opt2").style.width = pollResult[1] + "%";
  document.getElementById("opt3").style.width = pollResult[2] + "%";
  document.getElementById("opt4").style.width = pollResult[3] + "%";

  for (let i = 0; i < 4; i++) {
    document.getElementsByClassName("card")[i].classList.remove("myhover");
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
