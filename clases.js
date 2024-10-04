class Persona{
constructor(nombre, apellido){
    this.nombre= nombre;
    this.apellido= apellido;
}
get nombre(){
return this._nombre
}
set nombre(nombre){
this._nombre=nombre;
}
set apellido(apellido){
    this._apellido= apellido;
}
}
let persona1 = new Persona ("Camilo", "Rocha");
console.log(persona1)
let persona2 = new Persona ('Camilo', 'Rocha');
console.log(persona2)
persona1.nombre ="Camilo Enrique";
console.log(persona1.nombre);