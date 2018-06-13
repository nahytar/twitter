const button = document.getElementById("btn");
const txtArea = document.getElementById("txtTwit");
const counter = document.getElementById("counter");

const checkText = () => {
  if (txtArea.value.trim().length > 0 && txtArea.value.length < 140) {
    button.disabled = false;
  } else {
    button.disabled = true;
  }

  counter.innerHTML = 140 - txtArea.value.length;
}

button.addEventListener("click", () => {
  // Acá guardo el comentario ingresado por el usuario
  let comments = txtArea.value;
  // Limpiar el textarea
  txtArea.value = "";
  checkText();
  // Contenedor donde dejaré mis comentarios en html: Padre de div
  const cont = document.getElementById("cont");
  // Crear un div contenedor: Hijo de cont
  const newComments = document.createElement("div");
  // Nodos de texto del textarea
  let textNewComment = document.createTextNode(comments);
  const elementContainer = document.createElement("p");
  elementContainer.appendChild(textNewComment);
  newComments.appendChild(elementContainer);
  cont.appendChild(newComments);
})

txtArea.addEventListener("keyup", checkText);
checkText();