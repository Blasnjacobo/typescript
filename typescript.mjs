"use strict";
// ANY: cualquier tipo de dato
var _a;
// es que IGNORE el tipado de typescript
var anyValue = 'hola';
anyValue.toUpperCase();
//* functions
console.log('Tipar funciones');
function saludar(name) {
    console.log("Hola ".concat(name));
}
saludar('Pepe');
// saludar(2) //! Argument of type 'number' is not assignable to parameter oftype 'string'
//Todo cuando no se le pone el tipo a los parametro los toma como any, entonces ignora el tipado de typescript, por ejemplo...
/* function saludando ({ name, age }){ //! The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    console.log(`Hola ${name}, tienes ${age} yo`)
}

saludando ({ name:2, age: 'Pepe'})
*/
//* Primera forma de tipar funciones con parametros
console.log('Primera forma de tipar funciones con parametros');
function funcionTipado1(_a) {
    var name = _a.name, age = _a.age;
    console.log("Hola ".concat(name, ", tienes ").concat(age, " yo"));
}
funcionTipado1({ name: 'Manuel', age: 2 });
//* Segunda forma de tipar funciones con parametros
console.log('Segunda forma de tipar funciones con parametros');
function funcionTipado2(persona) {
    var name = persona.name, age = persona.age;
    console.log("Hola ".concat(name, ", tienes ").concat(age, " yo"));
}
funcionTipado2({ name: 'Manuel', age: 2 });
//* Tipando funciones con retorno
console.log('Tipando funciones con retorno');
function funcionRetorno(_a) {
    var name = _a.name, age = _a.age;
    console.log("Hola ".concat(name, ", tienes ").concat(age, " yo"));
    return name;
}
funcionTipado1({ name: 'Manuel', age: 2 });
//* Tipando funciones con funciones en sus parametros
// el void es un: NO me importa lo que devuelve, si es que devuelve, si no pues tambien
console.log('Tipar funciones con funciones en sus parametros');
var sayHiFromFunction = function (fn) {
    fn('Miguel');
};
var sayHi = function (name) {
    console.log("Hola ".concat(name));
    return "Hola ".concat(name);
};
sayHiFromFunction(sayHi);
//* Tipar arrow function
console.log('1era forma de Tipar funciones con arrow funcions');
var sumar = function (a, b) {
    return a + b;
};
console.log('2nda forma de Tipar funciones con arrow funcions');
var restar = function (a, b) {
    return a + b;
};
//* inferencia funciones anonimas segun el contexto
console.log('inferencia de funciones anonimas segun el contexto');
var avengers = ['Spidey', 'Hulk', 'Avengers'];
avengers.forEach(function (avenger) {
    console.log(avenger.toUpperCase());
});
//*Objetos
var hero = {
    name: 'Thor',
    age: 40
};
// hero.power = 100 //! Property 'power' does not exist on type '{ name: string, age: number}
function createHero(name, age) {
    return { name: name, age: age };
}
var thor = createHero('thor', 36);
//* Type Alias
console.log('Alias');
var heros = {
    name: 'thor',
    age: 56
};
console.log(heros);
function createHeros(hero) {
    var name = hero.name, age = hero.age;
    return { name: name, age: age };
}
var spiderman = createHeros({ name: 'Spiderman', age: 18 });
console.log(spiderman);
//* Optional properties
console.log('optional properties');
console.log('When adding "?" means that key may or not be filled, its optional');
var superhero = {
    name: 'thor',
    age: 56
};
console.log(superhero);
function createSuperhero(superhero) {
    var name = superhero.name, age = superhero.age;
    return { name: name, age: age, isActive: true };
}
var spidermanOP = createSuperhero({ name: 'Spiderman', age: 18 });
// const spidermanOP = Object.freeze({ name: 'Spiderman', age:18 }) se vuelve NO
console.log(spidermanOP);
console.log(spidermanOP.isActive);
(_a = spidermanOP.id) === null || _a === void 0 ? void 0 : _a.toString(); //? Typescript ha detectado que id puede ser number o undefined, es por ello que se pone automativamente el signo de interrogacion para ponerlo como opcional
// spidermanOP.id = 3286498326498326 //! Cannot assign to 'id' because it is a read-onli property
//* Template union types
console.log('Template union types');
var enableAnimationDuration = 200; // 200 ms
var ann;
var superheroT = {
    name: 'thor',
    age: 56
};
console.log(superhero);
function createSuperheroT(superheroT) {
    var name = superheroT.name, age = superheroT.age;
    return {
        // id: '123', //! Type '123' is not assignable to type `${string}-${string}-${string}-${string}-${string}`.
        id: '123-123-123-123-123',
        name: name,
        age: age,
        isActive: true
    };
}
var batman = createSuperheroT({ name: 'Batman', age: 42 });
var color = '0022ff'; // hexadecimal
//* Interception types
console.log('Interception types');
var heroe = {
    name: 'thor',
    age: 56
};
console.log(heroe);
function createSuperheroTIN(input) {
    var name = input.name, age = input.age;
    return {
        // id: '123', //! Type '123' is not assignable to type `${string}-${string}-${string}-${string}-${string}`.
        id: '123-123-123-123-123',
        name: name,
        age: age,
        isActive: true
    };
}
var batmanIN = createSuperheroT({ name: 'Batman', age: 42 });
// batman.powerScale = 'supersayayin' //! Type 'supersayayin is nor assignable to type 'HeroPowerScaleIN | undefined'
batmanIN.powerScale = 'planetary';
//* Type index
console.log('Type index');
var addressHero = {
    planet: 'Earth',
    city: 'Madrid'
};
//* Type from value
//? typeof te permite create tipos de codigo que ya tienes
console.log('Type from value');
var newAdress = {
    planet: 'Earth',
    city: 'Madrid'
};
var addressTwitch = {
    planet: 'Mars',
    city: 'Twitch'
};
//Type from function return
console.log('Type from function return');
// Quiero recuperar el tipo de una funcion, en el ejemplo de abajo sabemos que planet y city son string
function createAddress() {
    return {
        planet: 'tierra',
        city: 'Barcelona'
    };
}
//* Arrays
// const languages: Array<string> = [] Es una forma valida
var languages = [];
languages.push('Javascript');
languages.push(2);
// languages.push(true) //! Arguments of type 'boolean' is not assignable to parameter of type 'string | number'
//* Matrices y tuplas
console.log('Matrices y tuplas');
var gameBoard = [
    ['X', 'O', 'X'],
    ['O', 'X', 'O'],
    ['X', ' ', 'O'] // string []
];
gameBoard[0][1] = 'X';
var white = [255, 255, 255]; // 0-255 
// const black: RGB = [0,0,0,4] //! Type '[number, number, number, number]' is not assignable to type 'RGB'. Source has 4 elemen(s) but target allows only 3
// white.push(4) //! Property 'push' does not exist on type 'RGB', it will work if we remove the readonly property
