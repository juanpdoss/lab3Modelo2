"use strict";
var Manejadora = /** @class */ (function () {
    function Manejadora() {
    }
    Manejadora.prototype.handleEvent = function (ev) {
        var botonClikeado = ev.target;
        if (botonClikeado.id == "btnAgregar") {
            this.AgregarCiudadano();
        }
    };
    Manejadora.prototype.AgregarCiudadano = function () {
        var nombre = $("txtNombre").value;
        var apellido = $("txtApellido").value;
        var edad = parseInt($("txtEdad").value);
        var dni = parseInt($("txtDni").value);
        var sexo = "femenino";
        if ($("masculino").checked) {
            sexo = "masculino";
        }
        var nacionalidadElegida = (document.getElementById("txtNacionalidad"));
        var nacionalidad = nacionalidadElegida.value;
        var ciudadano = new Ciudadano(nombre, apellido, edad, dni, nacionalidad, sexo);
        localStorage.setItem("" + ciudadano.dni, ciudadano.CiudadanoToJson());
        this.anexarFila(ciudadano);
    };
    // MostrarCiudadanos() {
    //   let items = localStorage.length;
    //   for (let index = 0; index < items; index++) {
    //     let key: any = localStorage.key(index);
    //     let ciudadano = JSON.parse(<string>localStorage.getItem(key));
    //     anexarFila(ciudadano);
    //   }
    // }
    Manejadora.prototype.anexarFila = function (ciudadano) {
        var tabla = $("tabla");
        var filaNueva = document.createElement("tr");
        var tdNombre = document.createElement("td");
        var tdApellido = document.createElement("td");
        var tdEdad = document.createElement("td");
        var tdDni = document.createElement("td");
        var tdNacionalidad = document.createElement("td");
        var tdSexo = document.createElement("td");
        var tdModificar = document.createElement("td");
        var tdEliminar = document.createElement("td");
        var txtNombre = document.createTextNode(ciudadano.nombre);
        var txtApellido = document.createTextNode(ciudadano.apellido);
        var txtEdad = document.createTextNode(ciudadano.edad.toString());
        var txtDni = document.createTextNode(ciudadano.dni.toString());
        var txtNacionalidad = document.createTextNode(ciudadano.pais);
        var txtSexo = document.createTextNode(ciudadano.sexo);
        var anclaEliminar = document.createElement("a");
        var anclaModificar = document.createElement("a");
        anclaEliminar.setAttribute("href", "#");
        anclaModificar.setAttribute("href", "");
        anclaEliminar.addEventListener("click", this.EliminarCiudadano);
        anclaModificar.addEventListener("click", this.ModificarCiudadano);
        var txtEliminar = document.createTextNode("eliminar");
        var txtModificar = document.createTextNode("modificar");
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
    };
    Manejadora.prototype.EliminarCiudadano = function (ev) {
        var _a;
        var td = ev.target;
        var fila = (_a = td.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode;
        fila.remove();
    };
    Manejadora.prototype.ModificarCiudadano = function (ev) {
        var fila = ev.target;
        $("txtNombre").value = fila.childNodes[0].nodeValue;
        $("txtApellido").value = fila.childNodes[1].nodeValue;
        $("txtEdad").value = fila.childNodes[2].nodeValue;
        $("txtDni").value = fila.childNodes[3].nodeValue;
        if (fila.childNodes[4].nodeValue == "argentino") {
        }
    };
    return Manejadora;
}());
window.addEventListener("load", function () {
    var main = new Manejadora();
    var btnAgregar = $("btnAgregar");
    btnAgregar.addEventListener("click", main);
});
//funciones helpers
function $(id) {
    return document.getElementById(id);
}
