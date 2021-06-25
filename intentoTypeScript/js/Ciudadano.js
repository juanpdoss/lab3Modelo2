"use strict";
// Ciudadano, hereda de persona, posee como atributos dni(entero), país(string) y sexo(string). Un constructor para
// inicializar los atributos. Un método CiudadanoToJSON que retornará la representación del objeto en formato JSON. Se
// debe de reutilizar el método PersonaToString.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ciudadano = /** @class */ (function (_super) {
    __extends(Ciudadano, _super);
    function Ciudadano(nombre, apellido, edad, dni, pais, sexo) {
        var _this = _super.call(this, nombre, apellido, edad) || this;
        _this.dni = dni;
        _this.pais = pais;
        _this.sexo = sexo;
        return _this;
    }
    Ciudadano.prototype.CiudadanoToJson = function () {
        var personaJSON = JSON.parse(_super.prototype.PersonaToString.call(this));
    };
    return Ciudadano;
}(Persona));
