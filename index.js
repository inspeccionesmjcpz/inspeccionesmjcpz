let main = document.querySelector(".main-container");

document.addEventListener("DOMContentLoaded", function () {
  fetch("./inspectores.json")
    .then((response) => response.json())
    .then((data) => {
      // Ordenar los datos alfabéticamente por el nombre
      data.sort((a, b) => a.nombre.localeCompare(b.nombre));

      // Mostrar los datos ordenados en la página
      const resultadoDiv = document.getElementById("resultado");
      data.forEach((item) => {
        if (item.legajo) {
          resultadoDiv.innerHTML += `<div class="row-style">
        <p>${item.nombre}</p>
        <p>${item.legajo}</p>
      </div>`;
        }
      });
    })
    .catch((error) => console.error("Error al obtener los datos:", error));
});

setTimeout(function () {
  main.style.display = "flex";
}, 2000);
