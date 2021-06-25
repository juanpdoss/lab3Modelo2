// Ciudadano, hereda de persona, posee como atributos dni(entero), país(string) y sexo(string). Un constructor para
// inicializar los atributos. Un método CiudadanoToJSON que retornará la representación del objeto en formato JSON. Se
// debe de reutilizar el método PersonaToString.

class Ciudadano extends Persona {
  public dni: number;
  public pais: string;
  public sexo: string;

  constructor(
    nombre: string,
    apellido: string,
    edad: number,
    dni: number,
    pais: string,
    sexo: string
  ) {
    super(nombre, apellido, edad);
    this.dni = dni;
    this.pais = pais;
    this.sexo = sexo;
  }

  CiudadanoToJson() {
    let personaJSON = JSON.parse(super.PersonaToString());

  }
}
