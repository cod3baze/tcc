const inputElement = document.querySelector("input#insert");
const listElement = document.querySelector("div#status ul");

// remove item do status.
// clicando duas vezes
const handleRemoveItem = (item) => {
  let id = item.id;

  let spanElement = document.getElementById(id);
  item.onclick = () => {
    spanElement.remove();
  };
  console.log(item);
};

// quando o end clicar no input.
const handleInputInner = () => {
  console.log("Focado!");
  handleInputFocused();
};

// adiciona ouvinte no teclado.
const handleInputFocused = () => {
  document.addEventListener("keydown", handleKeyPressed);
};

// Adiciona item no Status.
function appendChildenX(val) {
  let no = document.createTextNode(val);
  let liElement = document.createElement("li");
  liElement.setAttribute("id", val);
  liElement.appendChild(no);

  let x = document.createTextNode("X");
  let span = document.createElement("span");
  span.setAttribute("id", val);
  span.setAttribute("onclick", "handleRemoveItem(this)");
  span.appendChild(x);
  liElement.append(span);

  listElement.appendChild(liElement);
  inputElement.value = "";
}

const handleKeyPressed = (event) => {
  const { key, code } = event;

  if (key === " " && code === "Space") {
    let val = inputElement.value;

    const words = val.trim().split(" ");
    if (words[0] === "") {
      return {};
    } else {
      appendChildenX(words[0]);
      return { ...words };
    }
  }
};

// -------------------------------------------------------------------

const handleInputOut = () => {
  document.removeEventListener("keydown", removed);
};
const removed = () => {
  console.log("disfocado!");
};

inputElement.addEventListener("focus", handleInputInner);
inputElement.addEventListener("blur", handleInputOut);

// -------------------------------------------------------------------

// inputElement.addEventListener("change", appendChildenX);
