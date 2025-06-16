const view = {
  mostrarInicio: () => {
    document.getElementById("titulo").textContent = "Inicio";
    document.getElementById("contenido").innerHTML = `
      <h2>Bienvenido</h2>
      <p>Usa el menú para navegar entre secciones.</p>
    `;
  },

  mostrarNotas: () => {
    document.getElementById("titulo").textContent = "Mis Notas";
    document.getElementById("contenido").innerHTML = `
      <ion-textarea id="nuevaNota" placeholder="Escribe una nota..." rows="3"></ion-textarea>
      <ion-button expand="block" onclick="controller.agregarNota()">Agregar Nota</ion-button>
      <ion-list id="listaNotas"></ion-list>
    `;
  },

  actualizarListaNotas: () => {
    const lista = document.getElementById("listaNotas");
    const notas = model.obtenerNotas();
    lista.innerHTML = "";

    notas.forEach((nota, index) => {
      const item = document.createElement("ion-item");
      item.innerHTML = `
        <div class="nota">
          <span>${nota}</span>
          <ion-button color="danger" size="small" onclick="controller.eliminarNota(${index})">
            <ion-icon name="trash-outline"></ion-icon>
          </ion-button>
        </div>
      `;
      lista.appendChild(item);
    });
  }
};
