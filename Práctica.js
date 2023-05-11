// function mayorMenosMenor(numeros) {
//     if (Array.isArray(numeros) && numeros.every(Number.isInteger)) {
//         let valorMaximo = Number.NEGATIVE_INFINITY;
//         let valorMinimo = Number.POSITIVE_INFINITY;
//         for (let i = 0; i < numeros.length; i++) {
//             if(numeros[i] > valorMaximo) {
//                 valorMaximo = numeros[i];
//             }
//             if (numeros[i] < valorMinimo) {
//                 valorMinimo = numeros[i];
//             }
//         }
//         console.log(valorMaximo - valorMinimo);
//     }
// }
// mayorMenosMenor([39, 1, 27])

// function actividadesEnComun(persona1, persona2) {
//     if (Array.isArray(persona1) && persona1.every((elemento) => typeof elemento === 'string')) {
//         if (Array.isArray(persona2) && persona2.every((elemento) => typeof elemento === 'string')) {
//             let comun = [];
//             for (let i = 0; i < persona1.length; i++) {
//                 if (persona2.includes(persona1[i])) {
//                     comun.push(persona1[i]);
//                 }
//             }
//             console.log(comun)
//         }
//     }
// }
// let persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
// let persona2 = ['comer', 'dormir', 'futbol']
// actividadesEnComun(persona1, persona2)

// class Viajero {
//     constructor(nombre, paises, compañeros) {
//         this.nombre = nombre;
//         this.paises = paises;
//         this.compañeros = compañeros;
//     }
//     getPaises() {
//         return this.paises;
//     }
//     getCompañeros() {
//         return this.compañeros.map(compañero => compañero.nombre);
//     }
//     addPaises(pais) {
//         this.paises.push(pais);
//     }
//     addCompañero(nombre, edad) {
//         let nuevoCompañero = {
//             nombre: nombre,
//             edad: edad
//         }
//         this.compañeros.push(nuevoCompañero)
//     }
// }

// function bienvenidoSr(persona) {
//     if (!persona.invitado) {
//         return "Disculpe señor, no está invitado a la fiesta";
//     } else if ('nombre' in persona && 'apellido' in persona && 'invitado' in persona) {
//         return persona.nombre + " " + persona.apellido + ", un gusto tenerlo nuevamente! Bienvenido"
//     } else if ('apellido' in persona && 'invitado' in persona && !persona.nombre) {
//         return "Bienvenido Sr." + persona.apellido;
//     } else if ('nombre' in persona && 'invitado' in persona && !persona.apellido) {
//         return "Hola " + persona.nombre + ", tu mesa está lista" 
//     }
// }
// let persona1 = {
//     invitado: true,
//     nombre: "Lionel",
//     apellido: "Messi",
// };
// let persona2 = {
//     invitado: true,
//     apellido: "Ronaldo",
// };
// let persona3 = {
//     invitado: true,
//     nombre: "Diego",
// };
// let persona4 = {
//     invitado: false,
//     nombre: "Paolo",
//     apellido: "Guerrero",
// };
// console.log(bienvenidoSr(persona1));
// console.log(bienvenidoSr(persona2));
// console.log(bienvenidoSr(persona3));
// console.log(bienvenidoSr(persona4));

// function intercambio(objeto) {
//     let nuevo = {};
//     for (let propiedad in objeto) {
//         nuevo[objeto[propiedad]] = propiedad;
//     }
//     return nuevo;
// }
// let objetoOriginal = {propiedad1: 'valor1', propiedad2: 'valor2', propiedad3: 'valor3'};
// let objetoIntercambiado = intercambio(objetoOriginal);
// console.log(objetoIntercambiado);

// function fakeBinary(size) {
//     let resultado = "";
//     for (let i = 0; i < size; i++) {
//         if (i % 2 === 0) {
//             resultado += "1";
//         } else if (i % 2 === 1) {
//             resultado += "0";
//         }
//     }
//     console.log(resultado);
// }
// fakeBinary(6)

// function buscandoAWally(personajes) {
//     if (Array.isArray(personajes)) {
//         var encontrado = personajes.indexOf("Wally");
//     }
//     console.log("He encontrado a Wally en la posicion " + encontrado);
// }
// buscandoAWally(['Dobby', 'Harry', 'Dementor', 'Wally', 'Sirius'])

// function soloStrings(arregloMixto) {
//     if (Array.isArray(arregloMixto)) {
//         let stringsOnly = [];
//         for (let i = 0; i < arregloMixto.length; i++) {
//             if (typeof arregloMixto[i] == 'string') {
//                 stringsOnly.push(arregloMixto[i]);
//             }
//         }
//         console.log(stringsOnly);
//     }
// }
// soloStrings([1, 2, "Henry"])