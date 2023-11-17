// ANY: cualquier tipo de dato

import { type } from "os"

// es que IGNORE el tipado de typescript
let anyValue: any = 'hola'
anyValue.toUpperCase()


//* functions
console.log('Tipar funciones')

function saludar(name:string){
    console.log(`Hola ${name}`)
}

saludar('Pepe')
// saludar(2) //! Argument of type 'number' is not assignable to parameter oftype 'string'

//Todo cuando no se le pone el tipo a los parametro los toma como any, entonces ignora el tipado de typescript, por ejemplo...

/* function saludando ({ name, age }){ //! The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    console.log(`Hola ${name}, tienes ${age} yo`)
}

saludando ({ name:2, age: 'Pepe'})
*/

//* Primera forma de tipar funciones con parametros
console.log('Primera forma de tipar funciones con parametros')

function funcionTipado1 ({ name, age } : { name: string, age: number }){
    console.log(`Hola ${name}, tienes ${age} yo`)
}

funcionTipado1 ({ name:'Manuel', age: 2})

//* Segunda forma de tipar funciones con parametros
console.log('Segunda forma de tipar funciones con parametros')

function funcionTipado2 (persona: { name: string, age: number}){
    const { name, age } = persona
    console.log(`Hola ${name}, tienes ${age} yo`)
}

funcionTipado2 ({ name:'Manuel', age: 2 })

//* Tipando funciones con retorno
console.log('Tipando funciones con retorno')

function funcionRetorno ({ name, age } : { name: string, age: number }): string {
    console.log(`Hola ${name}, tienes ${age} yo`)
    return name
}

funcionTipado1 ({ name:'Manuel', age: 2})

//* Tipando funciones con funciones en sus parametros
// el void es un: NO me importa lo que devuelve, si es que devuelve, si no pues tambien
console.log('Tipar funciones con funciones en sus parametros')

const sayHiFromFunction = (fn: (name: string) => string) => {
    fn('Miguel')
}

const sayHi = (name: string) => {
    console.log(`Hola ${name}`)
    return `Hola ${name}`
}

sayHiFromFunction(sayHi)

//* Tipar arrow function
console.log('1era forma de Tipar funciones con arrow funcions')

const sumar = (a:number, b: number): number => {
    return a+b
}

console.log('2nda forma de Tipar funciones con arrow funcions')
const restar: (a:number, b: number) => number = (a, b) => {
    return a+b
}

//* inferencia funciones anonimas segun el contexto
console.log('inferencia de funciones anonimas segun el contexto')
const avengers = ['Spidey', 'Hulk', 'Avengers']
avengers.forEach(function(avenger) {
    console.log(avenger.toUpperCase())
})

//*Objetos
let hero = {
    name: 'Thor',
    age: 40
}

// hero.power = 100 //! Property 'power' does not exist on type '{ name: string, age: number}

function createHero(name: string, age: number){
    return { name, age }
}

const thor = createHero('thor', 36)

//* Type Alias
console.log('Alias')

type Hero = {
    name: string
    age: number
}

let heros: Hero = {
    name: 'thor',
    age:56
}
console.log(heros)

function createHeros(hero: Hero): Hero {
    const { name, age } =  hero
    return { name, age }
}

const spiderman = createHeros({ name: 'Spiderman', age:18})
console.log(spiderman)

//* Optional properties
console.log('optional properties')
console.log('When adding "?" means that key may or not be filled, its optional')
//?read only esta en modo lectura pero si es mutable, si en dado caso se quiere hacer no mutable se tiene que usar el freeze

type Superhero= {
    readonly id?:number
    name: string
    age: number
    isActive?: boolean
}

let superhero: Superhero= {
    name: 'thor',
    age:56
}
console.log(superhero)

function createSuperhero(superhero: Superhero): Superhero{
    const { name, age } =  superhero
    return { name, age, isActive:true }
}

const spidermanOP = createSuperhero({ name: 'Spiderman', age:18 })
// const spidermanOP = Object.freeze({ name: 'Spiderman', age:18 }) se vuelve NO
console.log(spidermanOP)
console.log(spidermanOP.isActive)
spidermanOP.id?.toString() //? Typescript ha detectado que id puede ser number o undefined, es por ello que se pone automativamente el signo de interrogacion para ponerlo como opcional

// spidermanOP.id = 3286498326498326 //! Cannot assign to 'id' because it is a read-onli property

//* Template union types

console.log('Template union types')
type HeroIdIN=`${string}-${string}-${string}-${string}-${string}`
type HeroPowerScaleIN = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

const enableAnimationDuration: boolean | number = 200 // 200 ms


let ann: number | string

// La variable ann puede ser numero o string
// ann = true //! Type 'boolean' is not assignable to type 'string | number'




type SuperheroT= {
    readonly id?: HeroIdIN
    name: string
    age: number
    isActive?: boolean
    powerScale?: HeroPowerScaleIN
}

let superheroT: SuperheroT= {
    name: 'thor',
    age:56
}
console.log(superhero)

function createSuperheroT(superheroT: SuperheroT): SuperheroT{
    const { name, age } =  superheroT
    return { 
        // id: '123', //! Type '123' is not assignable to type `${string}-${string}-${string}-${string}-${string}`.
        id: '123-123-123-123-123',
        name,
        age,
        isActive:true }
}

const batman = createSuperheroT({ name: 'Batman', age:42 })
// batman.powerScale = 'supersayayin' //! Type 'supersayayin is nor assignable to type 'HeroPowerScaleIN | undefined'



type HexadecimalColor = '#${string}'
const color = '0022ff' // hexadecimal


//* Interception types

console.log('Interception types')
type HeroeId=`${string}-${string}-${string}-${string}-${string}`
type HeroePoderEscala = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal'

type HeroeBasicInfo = {
    name: string,
    age: number
}


type HeroeProperties= {
    readonly id?: HeroeId
    isActive?: boolean
    powerScale?: HeroPowerScaleIN
}

type Heroe = HeroeBasicInfo & HeroeProperties

let heroe: Heroe = {
    name: 'thor',
    age: 56
}
console.log(heroe)

function createSuperheroTIN(input: HeroeBasicInfo): SuperheroT{
    const { name, age } =  input
    return { 
        // id: '123', //! Type '123' is not assignable to type `${string}-${string}-${string}-${string}-${string}`.
        id: '123-123-123-123-123',
        name,
        age,
        isActive:true }
}

const batmanIN = createSuperheroT({ name: 'Batman', age:42 })
// batman.powerScale = 'supersayayin' //! Type 'supersayayin is nor assignable to type 'HeroPowerScaleIN | undefined'
batmanIN.powerScale = 'planetary'

//* Type index

console.log('Type index')

type HeroProperties = {
    isActive: boolean,
    address: {
        planet: string,
        city: string
    }
}

const addressHero: HeroProperties['address'] = {
    planet: 'Earth',
    city: 'Madrid'
}

//* Type from value
//? typeof te permite create tipos de codigo que ya tienes

console.log('Type from value')
const newAdress = {
    planet: 'Earth',
    city: 'Madrid'
}

type NewAddress = typeof addressHero

const addressTwitch: NewAddress = {
    planet: 'Mars',
    city: 'Twitch'
}

//Type from function return
console.log('Type from function return')
// Quiero recuperar el tipo de una funcion, en el ejemplo de abajo sabemos que planet y city son string

function createAddress(){
    return {
        planet: 'tierra',
        city: 'Barcelona'
    }
}

type Direccion = ReturnType<typeof createAddress>


//* Arrays

// const languages: Array<string> = [] Es una forma valida
const languages: (string | number)[] = []

languages.push('Javascript')
languages.push(2)
// languages.push(true) //! Arguments of type 'boolean' is not assignable to parameter of type 'string | number'

//* Matrices y tuplas
console.log('Matrices y tuplas')

/*
[
    ['X', 'O', 'X'],  // string []
    ['O', 'X', 'O'],  // string []
    ['X', ' ', 'O']   // string []
]
*/

// Una tupla es un array que tiene un limite fijado de longitud

type CellValue = 'X' | 'O' | ' '
type GameBoard = [
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue],
    [CellValue, CellValue, CellValue]
]

const gameBoard: CellValue[][] = [
    ['X', 'O', 'X'],  // string []
    ['O', 'X', 'O'],  // string []
    ['X', ' ', 'O']   // string []
]

gameBoard[0][1] = 'X'

//EJEMPLOS DE TUPLAS

//type State = [string, (newName: string) => void]
//const [hero, setHero]: State = useState('thor')

type RGB = [number, number, number]
const RGB = [255, 255, 0] // 0-255
