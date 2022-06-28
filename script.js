const input = document.getElementById("userinput");
const button = document.getElementById("enter");
const ul = document.getElementsByTagName("ul")[0];

function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  li.addEventListener("click", function () {
    // creates a boolean that toggle the done class on li;

    const checked = this.classList.toggle("done");

    // creates a delete button for checked list
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteButton");

    // if the list item is clicked, this toggle the done class

    if (checked) {
      deleteButton.appendChild(document.createTextNode("delete"));
      deleteButton.classList = "deleteButton";
      li.appendChild(deleteButton);
      deleteButton.addEventListener("click", function () {
        this.parentElement.remove();
      });
    } else {
      this.getElementsByClassName("deleteButton")[0].remove();
    }
  });
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

button.addEventListener("click", addListAfterClick());

input.addEventListener("keypress", addListAfterKeyPress);
