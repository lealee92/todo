const input = document.getElementById("userinput");
const button = document.getElementById("enter");
const ul = document.querySelector("ul");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeyPress(event) {
  // everytime en event listener is added we have keypress and this function also receives the parameters automatically
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}

function toggle() {
  const li = document.getElementsByTagName("li");
  li.classList.toggle("done");
}

button.addEventListener("click", addListAfterClick());

input.addEventListener("keypress", addListAfterKeyPress);

todo.addEventListener("click", function (toggle) {
  const li = document.querySelectorAll("li");
  for (let i = 0; i < li.length; i++) {}
});
