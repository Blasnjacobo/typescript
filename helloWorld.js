"use strict";
//Todo In Typescript you have to compile in typescript format an then run the javascript code
//Todo Example: tsc helloWorld.ts, and then node helloWorld.js
//Todo para creat el archivo de configuracion usamos npx tsc --init
// Hola mundo comentado
console.log('Hola, typescript');
//* Variables tipadas
var myString = 'Esto es una cadena de texto';
// myString = 2  //! Type 'number' is not assignable to type 'string'
// ? con este error ha entrado el concepto de tipado fuerte, ya que ese tipo de variable no pertenece a ese elemento
var myString2;
myString2 = 'Aqui cambio el valor de la cadena de texto';
// myString2 = 6 //! Type 'number is not assinable to type string
myString2 = '6';
console.log(myString);
console.log(typeof myString);
let myBool = false;
myBool = true;
console.log(myBool);
console.log(typeof myBool);
// myBool = undefined //! Type 'undefined' is not assigable to type 'boolean'
let myUndefined;
console.log(myUndefined);
//* constantes
const myConst = 'Mi propiedad constante';
// myConst = 'otro valor'
console.log(myConst); //! Cannot assign to 'myConst' because it is a constant
//* Controles de flujo
let myNumber = 10;
if (myNumber === 10)
    console.log('El valor es 10');
else
    console.log('El valor no es 10');
//* Funciones
// todo El void en esta funcion significa que no regresara nada
function myFunction() {
    console.log('Mi function');
}
console.log(myFunction());
function mynewFunction() {
    return 'regresando un string';
}
console.log(mynewFunction());
function sumTwoNumbers(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}
console.log(sumTwoNumbers(4, 10));
// List
let myList = ['Blastois', 'Jacobo-2-2'];
console.log(myList);
// let mySet: Set<string> = ['Agua','No', 'coca'] //! Type 'string[]' is missing the following properties from type 'Set<string>': add, clear, delete, has, and 2 more.
let mySet = new Set(['Agua', 'No', 'coca', 'No', 'Agua']); //  Set no admite repetidos
console.log(mySet);
// mySet.add(36) //! Argument of type 'number' is not assignable to parameter of type 'string'
//* Maps
let myMap = new Map([['Blas', 5], ['Jacobo', 10]]);
myMap.set('juanitoLopez', 23);
console.log(myMap);
console.log(myMap.get('Blas'));
//ciclos
for (const value of myList) {
    console.log(value);
}
let myCounter = 0;
while (myCounter < myList.length) {
    console.log(myList[myCounter]);
    myCounter++;
}
// Clases
class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let myClass = new MyClass('Mayco', 10000);
console.log(myClass);
console.log(myClass.name);
var MyEnum;
(function (MyEnum) {
    MyEnum["DART"] = "dart";
    MyEnum["PYTHON"] = "python";
    MyEnum["SWIFT"] = "swift";
    MyEnum["JAVA"] = "kotlin";
    MyEnum["JAVASCRIPT"] = "javascript";
})(MyEnum || (MyEnum = {}));
const myEnum = MyEnum.DART;
console.log(myEnum);
