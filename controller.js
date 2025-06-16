const controller = {
  mostrarInicio: () => {
    view.mostrarInicio();
    document.querySelector("ion-menu").close();
  },

  mostrarNotas: () => {
    view.mostrarNotas();
    view.actualizarListaNotas();
    document.querySelector("ion-menu").close();
  },

  agregarNota: () => {
    const nota = document.getElementById("nuevaNota").value.trim();
    if (!nota) return;
    model.agregarNota(nota);
    document.getElementById("nuevaNota").value = "";
    view.actualizarListaNotas();
  },

  eliminarNota: (index) => {
    model.eliminarNota(index);
    view.actualizarListaNotas();
  }
};
