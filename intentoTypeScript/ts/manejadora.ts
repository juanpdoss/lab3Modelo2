class Manejadora implements EventListenerObject {
  public handleEvent(ev: Event) {
    let botonClikeado = <HTMLInputElement>ev.target;

    if (botonClikeado.id == "btnAgregar") {
      this.AgregarCiudadano();
    }
  }

  AgregarCiudadano() {
    let nombre: string = $("txtNombre").value;
    let apellido: string = $("txtApellido").value;
    let edad: number = parseInt($("txtEdad").value);
    let dni: number = parseInt($("txtDni").value);
    let sexo = "femenino";
    if ($("masculino").checked) {
      sexo = "masculino";
    }

    let nacionalidadElegida = <HTMLSelectElement>(
      document.getElementById("txtNacionalidad")
    );
    let nacionalidad = nacionalidadElegida.value;

    let ciudadano: Ciudadano = new Ciudadano(
      nombre,
      apellido,
      edad,
      dni,
      nacionalidad,
      sexo
    );

    localStorage.setItem(`${ciudadano.dni}`, ciudadano.CiudadanoToJson());
    this.anexarFila(ciudadano);
  }

  // MostrarCiudadanos() {
  //   let items = localStorage.length;
  //   for (let index = 0; index < items; index++) {
  //     let key: any = localStorage.key(index);
  //     let ciudadano = JSON.parse(<string>localStorage.getItem(key));
  //     anexarFila(ciudadano);
  //   }
  // }

  anexarFila(ciudadano: Ciudadano) {
    let tabla = $("tabla");

    let filaNueva = document.createElement("tr");

    let tdNombre = document.createElement("td");
    let tdApellido = document.createElement("td");
    let tdEdad = document.createElement("td");
    let tdDni = document.createElement("td");
    let tdNacionalidad = document.createElement("td");
    let tdSexo = document.createElement("td");
    let tdModificar = document.createElement("td");
    let tdEliminar = document.createElement("td");

    let txtNombre = document.createTextNode(ciudadano.nombre);
    let txtApellido = document.createTextNode(ciudadano.apellido);
    let txtEdad = document.createTextNode(ciudadano.edad.toString());
    let txtDni = document.createTextNode(ciudadano.dni.toString());
    let txtNacionalidad = document.createTextNode(ciudadano.pais);
    let txtSexo = document.createTextNode(ciudadano.sexo);

    let anclaEliminar = document.createElement("a");
    let anclaModificar = document.createElement("a");
    anclaEliminar.setAttribute("href", "#");
    anclaModificar.setAttribute("href", "");
    anclaEliminar.addEventListener("click", this.EliminarCiudadano);
    anclaModificar.addEventListener("click", this.ModificarCiudadano);
    let txtEliminar = document.createTextNode("eliminar");
    let txtModificar = document.createTextNode("modificar");
    anclaEliminar.appendChild(txtEliminar);
    anclaModificar.appendChild(txtModificar);

    tdNombre.appendChild(txtNombre);
    tdApellido.appendChild(txtApellido);
    tdEdad.appendChild(txtEdad);
    tdDni.appendChild(txtDni);
    tdNacionalidad.appendChild(txtNacionalidad);
    tdSexo.appendChild(txtSexo);
    tdModificar.appendChild(anclaModificar);
    tdEliminar.appendChild(anclaEliminar);

    filaNueva.appendChild(tdNombre);
    filaNueva.appendChild(tdApellido);
    filaNueva.appendChild(tdEdad);
    filaNueva.appendChild(tdDni);
    filaNueva.appendChild(tdNacionalidad);
    filaNueva.appendChild(tdSexo);
    filaNueva.appendChild(tdModificar);
    filaNueva.appendChild(tdEliminar);

    tabla.appendChild(filaNueva);
  }

  EliminarCiudadano(ev: Event) {
    let td = <HTMLTableCellElement>ev.target;
    let fila = <HTMLTableRowElement>td.parentNode?.parentNode;
    fila.remove();
  }

  ModificarCiudadano(ev: Event) {
    let fila = <HTMLTableRowElement>ev.target;

    $("txtNombre").value = <string>fila.childNodes[0].nodeValue;
    $("txtApellido").value = <string>fila.childNodes[1].nodeValue;
    $("txtEdad").value = <string>fila.childNodes[2].nodeValue;
    $("txtDni").value = <string>fila.childNodes[3].nodeValue;

    if (<string>fila.childNodes[4].nodeValue == "argentino") {
    }
  }
}

window.addEventListener("load", () => {
  let main = new Manejadora();

  let btnAgregar = $("btnAgregar");
  btnAgregar.addEventListener("click", main);
});

//funciones helpers
function $(id: string): HTMLInputElement {
  return <HTMLInputElement>document.getElementById(id);
}
