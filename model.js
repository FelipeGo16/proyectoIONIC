const model = {
  obtenerNotas: () => {
    return JSON.parse(localStorage.getItem("notas")) || [];
  },

  agregarNota: (nota) => {
    const notas = model.obtenerNotas();
    notas.push(nota);
    localStorage.setItem("notas", JSON.stringify(notas));
  },

  eliminarNota: (index) => {
    const notas = model.obtenerNotas();
    notas.splice(index, 1);
    localStorage.setItem("notas", JSON.stringify(notas));
  }
};
