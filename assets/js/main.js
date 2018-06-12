const button = document.getElementById("btn");
button.addEventListener("click", () => {
  // Acá guardo el comentario ingresado por el usuario
  let comments = document.getElementById("txtTwit").value;
  // Limpiar el textarea
  document.getElementById("txtTwit").value = " ";
  // Contenedor donde dejaré mis comentarios en html: Padre de div
  const cont = document.getElementById("cont");
  // Crear un div contenedor: Hijo de cont
  const newComments = document.createElement("div");
  // Validar que el textarea tenga un comentario
  if (txtTwit.length == 0 || txtTwit == null) {
    alert("Debes ingresar un mensaje");
    return false;
  }
  // Nodos de texto del textarea
  let textNewComment = document.createTextNode(comments);
  const elementContainer = document.createElement("p");
  elementContainer.appendChild(textNewComment);
  newComments.appendChild(elementContainer);
  cont.appendChild(newComments);
})