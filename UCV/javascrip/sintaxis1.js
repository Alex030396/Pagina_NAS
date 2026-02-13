var frutas = ["Manzana", "Banana", "Cereza"];

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);

var longitud = frutas.length;
console.log("Número de frutas: " + longitud);

var nueva_longitud = frutas.push("Naranja");
console.log("Nueva longitud después de agregar una fruta: " + nueva_longitud);

var ultima_fruta = frutas.pop();
console.log("Fruta eliminada: " + ultima_fruta);

var primera_fruta = frutas.shift();
console.log("Primera fruta eliminada: " + primera_fruta);

nueva_fruta = frutas.unshift("Fresa");
console.log("Nueva longitud después de agregar una fruta al inicio: " + nueva_fruta);

frutas.indexOf("Cereza");
console.log("Índice de Cereza: " + frutas.indexOf("Cereza"));
console.log(frutas);

frutas.splice(1, 1);
console.log("Frutas después de eliminar el segundo elemento: " + frutas);

var persona = {nombre: "Juan",edad: 30,  ciudad: "Madrid"};

persona.nombre;
console.log("Nombre: " + persona.nombre);

