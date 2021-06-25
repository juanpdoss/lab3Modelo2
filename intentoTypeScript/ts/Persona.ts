// Persona: nombre(string), apellido(string) y edad(entero) como atributos. Un constructor que reciba tres parámetros. Un
// método, PersonaToString que retorne la representación de la clase en formato cadena.

class Persona {
  public nombre: string;
  public apellido: string;
  public edad: number;

  /**
   *
   */
  constructor(nombre: string, apellido: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  PersonaToString(): string {
    return JSON.stringify(this);
  }
}
