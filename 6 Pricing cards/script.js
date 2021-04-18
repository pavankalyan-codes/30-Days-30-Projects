var currentId = "card2";
function transform(id) {
  if (currentId === id) return;

  document.getElementById(currentId).classList.remove("make-big");

  currentId = id;

  document.getElementById(currentId).classList.add("make-big");
}
