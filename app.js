function greet() {
    console.log("hello")

}
greet();

function logGreeting(fn) {
    fn();

};
logGreeting(greet);

let greetMe = function() {
    console.log("hello from the funtion expression");
}
greetMe();
logGreeting(greetMe);
let mifuncion = () => {

}

mifuncion();

let saludo = (nombre, tratamiento) => {
    console.log("hola " + "" + nombre)
}
saludo("miguel", "sr.");

let cuadrado = Numero => {
    return Numero * Numero;

}

let saludo1 = (nombre, tratamiento) => console.log("hola" + tratamiento + "nombre");