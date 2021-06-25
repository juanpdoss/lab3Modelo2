"use strict";
var Manejadora = /** @class */ (function () {
    function Manejadora() {
    }
    Manejadora.prototype.handleEvent = function (ev) {
        var botonClikeado = ev.target;
        if (botonClikeado.id == "btnAgregar") {
            this.AgregarCiudadano();
        }
        else if (botonClikeado.id == "btnListar") {
            this.MostrarCiudadanos();
        }
    };
    Manejadora.prototype.AgregarCiudadano = function () {
        var nombre = $("txtNombre").value;
        var apellido = $("txtApellido").value;
        var edad = parseInt($("txtEdad").value);
        var dni = parseInt($("txtDni").value);
        var sexo = "ahre";
        var nacionalidadElegida = (document.getElementById("txtNacionalidad"));
        var nacionalidad = nacionalidadElegida.value;
        var ciudadano = new Ciudadano(nombre, apellido, edad, dni, nacionalidad, sexo);
        localStorage.setItem("" + ciudadano.dni, JSON.stringify(ciudadano));
        alert("agregado");
    };
    Manejadora.prototype.MostrarCiudadanos = function () {
        var items = localStorage.length;
        for (var index = 0; index < items; index++) {
            var key = localStorage.key(index);
            var ciudadano = JSON.parse(localStorage.getItem(key));
            anexarFila(ciudadano);
        }
    };
    return Manejadora;
}());
function anexarFila(ciudadano) {
    var tabla = $("tabla");
    var filaNueva = document.createElement("tr");
    var tdNombre = document.createElement("td");
    var tdApellido = document.createElement("td");
    var tdEdad = document.createElement("td");
    var tdDni = document.createElement("td");
    var tdNacionalidad = document.createElement("td");
    var tdSexo = document.createElement("td");
    var txtNombre = document.createTextNode(ciudadano.nombre);
    var txtApellido = document.createTextNode(ciudadano.apellido);
    var txtEdad = document.createTextNode(ciudadano.edad.toString());
    var txtDni = document.createTextNode(ciudadano.dni.toString());
    var txtNacionalidad = document.createTextNode(ciudadano.pais);
    var txtSexo = document.createTextNode(ciudadano.sexo);
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
window.addEventListener("load", function () {
    var main = new Manejadora();
    var btnAgregar = $("btnAgregar");
    btnAgregar.addEventListener("click", main);
    var btnListar = $("btnListar");
    btnListar.addEventListener("click", main);
});
function $(id) {
    return document.getElementById(id);
}
