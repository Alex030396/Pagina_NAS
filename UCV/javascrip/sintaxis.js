
/*
var a = 4;
switch (a) {
    case 74:
        console.log("El numero es 74");
        break;
    case 4:
        console.log("El numero es 4");
        break;
    case 9:
        console.log("El numero es 9");
        break;
    default:
        console.log("El numero no es ni 74, ni 4, ni 9");
}

for (i = 1; i < 10; i++) {
    console.log(i);
}
for (i = 10; i > -1; i--) {
    console.log(i);
}

console.log("While");

var num = 1;
while (num <11) {
    console.log(num);
    num++;
}

console.log("do While");
var cos = 1;
do {
    console.log(cos);
    cos++;
} while (cos < 11);
*/

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Domingo";
    break;
  case 1:
    day = "Lunes";
    break;
  case 2:
    day = "Martes";
    break;
  case 3:
    day = "Miércoles";
    break;
  case 4:
    day = "Jueves";
    break;
  case 5:
    day = "Viernes";
    break;
  case 6:
    day = "Sábado";
    break;
}
console.log(day);


const numbers = [45, 4, 9, 16, 25];
let txt = "";

for (let x in numbers) {
  txt += numbers[x];  // Esto CONCATENA como strings
}

console.log(txt);  // Resultado: "45491625" (string)