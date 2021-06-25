class Manejadora implements EventListenerObject {
  public handleEvent(ev: Event) {
    let botonClikeado = <HTMLInputElement>ev.target;

    if (botonClikeado.id == "btnAgregar") {
      this.AgregarCiudadano();
    } else if (botonClikeado.id == "btnListar") {
      this.MostrarCiudadanos();
    }
  }

  AgregarCiudadano() {
    let nombre: string = $("txtNombre").value;
    let apellido: string = $("txtApellido").value;
    let edad: number = parseInt($("txtEdad").value);
    let dni: number = parseInt($("txtDni").value);
    let sexo="ahre";
 
    let nacionalidadElegida = <HTMLSelectElement>(
      document.getElementById("txtNacionalidad")
    );
    let nacionalidad = nacionalidadElegida.value;


    let ciudadano: Ciudadano = new Ciudadano(nombre,apellido,edad,dni,nacionalidad,sexo);

    localStorage.setItem(`${ciudadano.dni}`, JSON.stringify(ciudadano));
    alert("agregado");
  }

  MostrarCiudadanos() {
    
    let items = localStorage.length;
    for (let index = 0; index < items; index++) {
      let key: any = localStorage.key(index);
      let ciudadano = JSON.parse(<string>localStorage.getItem(key));
      anexarFila(ciudadano);
    }
  }
}

function anexarFila(ciudadano: any) {
  let tabla = $("tabla");

  let filaNueva = document.createElement("tr");

  let tdNombre = document.createElement("td");
  let tdApellido = document.createElement("td");
  let tdEdad = document.createElement("td");
  let tdDni = document.createElement("td");
  let tdNacionalidad = document.createElement("td");
  let tdSexo = document.createElement("td");

  let txtNombre = document.createTextNode(ciudadano.nombre);
  let txtApellido = document.createTextNode(ciudadano.apellido);
  let txtEdad = document.createTextNode(ciudadano.edad.toString());
  let txtDni = document.createTextNode(ciudadano.dni.toString());
  let txtNacionalidad = document.createTextNode(ciudadano.pais);
  let txtSexo = document.createTextNode(ciudadano.sexo);

  tdNombre.appendChild(txtNombre);
  tdApellido.appendChild(txtApellido);
  tdEdad.appendChild(txtEdad);
  tdDni.appendChild(txtDni);
  tdNacionalidad.appendChild(txtNacionalidad);
  tdSexo.appendChild(txtSexo);

  filaNueva.appendChild(tdNombre);
  filaNueva.appendChild(tdApellido);
  filaNueva.appendChild(tdEdad);
  filaNueva.appendChild(tdDni);
  filaNueva.appendChild(tdNacionalidad);
  filaNueva.appendChild(tdSexo);

  tabla.appendChild(filaNueva);
}

window.addEventListener("load", () => {
  let main = new Manejadora();

  let btnAgregar = $("btnAgregar");
  btnAgregar.addEventListener("click", main);

  let btnListar = $("btnListar");
  btnListar.addEventListener("click", main);
});

function $(id: string): HTMLInputElement {
  return <HTMLInputElement>document.getElementById(id);
}
