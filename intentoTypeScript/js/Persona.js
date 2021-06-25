"use strict";
// Persona: nombre(string), apellido(string) y edad(entero) como atributos. Un constructor que reciba tres parámetros. Un
// método, PersonaToString que retorne la representación de la clase en formato cadena.
var Persona = /** @class */ (function () {
    /**
     *
     */
    function Persona(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    Persona.prototype.PersonaToString = function () {
        return ('"nombre"' +
            ":" +
            '"' +
            this.nombre +
            '"' +
            ',"apellido"' +
            ":" +
            '"' +
            this.apellido +
            '"' +
            ',"edad"' +
            ":" +
            '"' +
            this.edad +
            '"');
    };
    return Persona;
}());
