// function soloNumeros(array) {
//     if (Array.isArray(array)) {
//         console.log(array.filter(elemento => Number.isInteger(elemento)));
//     }
// }
// soloNumeros([2, 3, 4, "Luna", 0.5])

// function soloNumero(array) {
//    if (Array.isArray(array)) {
//       let hola = array.filter(elemento => Number.isInteger(elemento));
//       console.log(hola)
//    }
// }
// soloNumero([1, 2, 3, "4", "Hola", 3.5])

// function stringMasLarga(strings) {
//    if (Array.isArray(strings)) {
//       let larga = "";
//       for (let i = 0; i < strings.length; i++) {
//          if (strings[i].length > larga.length) {
//             larga = strings[i];
//          }
//       }
//       console.log(larga)
//    }
// }
// stringMasLarga(["Hola", "Henry", "Renzo", "Rodríguez", "Javascript"])

// function buscarAmigo(amigos, nombre) {
//     if (Array.isArray(amigos)) {
//         for (let i = 0; i < amigos.length; i++) {
//             if (amigos[i].hasOwnProperty('nombre') && amigos[i].nombre === nombre) {
//                 return amigos[i]
//             }
//         }
//     }
// }

// let amigos = [
//     {nombre: "Juan", edad: 30},
//     {nombre: "Ana", edad: 28},
//     {nombre: "Pedro", edad: 32},
//     {nombre: "Luisa", edad: 26}
// ];
// let amigoBuscado = buscarAmigo(amigos, "Ana");
// console.log(amigoBuscado)

// function numeroSimetrico (num) {
//     if (Number.isInteger(num)) {
//         let nuevo = num.toString();
//         let invertido = nuevo.split('').reverse().join('');
//         if (nuevo === invertido) {
//             console.log(true)
//         } else if (nuevo !== invertido) {
//             console.log(false)
//         }
//     }
// }
// numeroSimetrico (12321)
// numeroSimetrico (12345)

// function pluck(array, propiedad) {
//     if(Array.isArray(array)) {
//         let nuevo = array.map((Objeto) => {return Objeto[propiedad]});
//         return nuevo;
//     }
// }

// let arrayDeObjetos = [
//   { nombre: 'Juan', edad: 30 },
//   { nombre: 'María', edad: 25 },
//   { nombre: 'Pedro', edad: 40 },
// ];
// let nombres = pluck(arrayDeObjetos, 'nombre');
// console.log(nombres)

// function crearClasePersona () {
//     class Persona {
//         constructor(nombre, edad, hobbies, amigos) {
//             this.nombre = nombre;
//             this.edad = edad;
//             this.hobbies = hobbies;
//             this.amigos = amigos; 
//         }
//         addFriend(nombre, edad) {
//             let nuevoAmigo = {
//                 nombre:nombre,
//                 edad:edad,
//             }
//             this.amigos.push(nuevoAmigo);
//         }
//         addHobby(hobby) {
//             this.hobbies.push(hobby);
//         }
//         getFriends() {
//             return this.amigos.map((amigo) => amigo.nombre);
//         }
//         getHobbies() {
//             return this.hobbies;
//         }
//         getPromedioEdad() {
//             let sumaEdades = this.amigos.reduce((total, amigos) => total + amigos.edad, 0);
//             let promedio = sumaEdades / this.amigos.length;
//             return promedio;
//         }
//     }
//     return Persona;
// }

// function filtrar(funcion) {
//     Array.prototype.filtrar = function(funcion) {
//         let resultado = [];
//         this.forEach((elemento) => {
//             funcion(elemento) ? resultado.push(elemento) : null;
//         })
//         return resultado;
//     }
// }
