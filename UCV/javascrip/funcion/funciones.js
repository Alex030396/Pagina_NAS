
function saludo(){
    console.log("Que lo que menor");
}

saludo();

function hipotenusa(a,b) {
    function cuadrado(x) {
        return x * x;
    }
    return Math.sqrt(cuadrado(a) + cuadrado(b));
}

var cateto1 = 3, cateto2 = 4;
console.log("La hipotenusa es: " + hipotenusa(cateto1, cateto2));


var x = function(c,d) {return c>d;}
x(5,2)
x=5;

var y = (c,d) => {
    console.log("Hola");
    return (c+d)*2;
}

console.log(x);
console.log(y);

var objeto = {
    propiedad:28,
    duplicar_numero: (a)=> {
        return a*2;
    },
    dividir_numero: function(x) {
        return x/2;
    },
    propiedad2: "Alex"
}

console.log(objeto.duplicar_numero(5));
console.log(objeto.dividir_numero(10));

if (true) {
    var x = 2;
}

console.log(x); 
if (true) {
    let z = 2;
}
// console.log(z); 

if (true) {
    let w = 3;
    if(true) {
        if(true) {
            var cont = 0;
            while(cont<1){
                console.log(w);
                cont+=1;
            }
        }
    }
}