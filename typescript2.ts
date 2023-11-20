import { type } from "os"

console.log('De novato a ninja')

//* Enum
console.log('Enum')

const enum ERROR_TYPES {
    NOT_FOUND,         //INDICE 0
    UNAUTHORIZED,      //INDICE 1
    FORBIDDEN          //INDICE 2
}

function mostrarMensaje (tipoDeError: ERROR_TYPES){
    if (tipoDeError === ERROR_TYPES.NOT_FOUND){
        console.log('No se encuentra el recurso')
    } else if (tipoDeError === ERROR_TYPES.UNAUTHORIZED){
        console.log('No tienes permisos para acceder')
    } else if (tipoDeError === ERROR_TYPES.FORBIDDEN){
        console.log('No tienes permisos para acceder')
    }
}

//* Asersiones de tipos 

/*
// ESTE CODIGO NO HACE NINGUNA ASERSION SOBRE CANVAS LO CUAL PETARIA YA QUE LE ESTAMOS PASANDO UN SPAN
const canvas = document.querySelector('span')
// Null si no lo encuentra
// HTML si lo encuentra

//? como sabe typescript que realmente estas recuperando un elemento <canvas />?

if (canvas !== null){
    const ctx = (canvas as HTMLCanvasElement).getContext('2D')
}
*/
if (typeof document !== 'undefined') {
const canvas = document.getElementById('canvas')
if (canvas instanceof HTMLCanvasElement){
    const ctx = canvas.getContext('2d')
}}

// typeof -> para tipos
// instanceof -> para instancias


//* Fetching de datos en typescript
console.log('fetching de datos')
export type GithubAPIResponse = {
    total_count:        number;
    incomplete_results: boolean;
    items:              Item[];
}

export type Item = {
    id:                          number;
    node_id:                     string;
    name:                        string;
    full_name:                   string;
    private:                     boolean;
    owner:                       Owner;
    html_url:                    string;
    description:                 null | string;
    fork:                        boolean;
    url:                         string;
    forks_url:                   string;
    keys_url:                    string;
    collaborators_url:           string;
    teams_url:                   string;
    hooks_url:                   string;
    issue_events_url:            string;
    events_url:                  string;
    assignees_url:               string;
    branches_url:                string;
    tags_url:                    string;
    blobs_url:                   string;
    git_tags_url:                string;
    git_refs_url:                string;
    trees_url:                   string;
    statuses_url:                string;
    languages_url:               string;
    stargazers_url:              string;
    contributors_url:            string;
    subscribers_url:             string;
    subscription_url:            string;
    commits_url:                 string;
    git_commits_url:             string;
    comments_url:                string;
    issue_comment_url:           string;
    contents_url:                string;
    compare_url:                 string;
    merges_url:                  string;
    archive_url:                 string;
    downloads_url:               string;
    issues_url:                  string;
    pulls_url:                   string;
    milestones_url:              string;
    notifications_url:           string;
    labels_url:                  string;
    releases_url:                string;
    deployments_url:             string;
    created_at:                  Date;
    updated_at:                  Date;
    pushed_at:                   Date;
    git_url:                     string;
    ssh_url:                     string;
    clone_url:                   string;
    svn_url:                     string;
    homepage:                    null | string;
    size:                        number;
    stargazers_count:            number;
    watchers_count:              number;
    language:                    Language | null;
    has_issues:                  boolean;
    has_projects:                boolean;
    has_downloads:               boolean;
    has_wiki:                    boolean;
    has_pages:                   boolean;
    has_discussions:             boolean;
    forks_count:                 number;
    mirror_url:                  null;
    archived:                    boolean;
    disabled:                    boolean;
    open_issues_count:           number;
    license:                     License | null;
    allow_forking:               boolean;
    is_template:                 boolean;
    web_commit_signoff_required: boolean;
    topics:                      string[];
    visibility:                  Visibility;
    forks:                       number;
    open_issues:                 number;
    watchers:                    number;
    default_branch:              DefaultBranch;
    score:                       number;
}

export enum DefaultBranch {
    Dev = "dev",
    Main = "main",
    Master = "master",
}

export enum Language {
    HTML = "HTML",
    JavaScript = "JavaScript",
    ObjectiveC = "Objective-C",
    TypeScript = "TypeScript",
}

export type License = {
    key:     Key;
    name:    Name;
    spdx_id: SpdxID;
    url:     null | string;
    node_id: NodeID;
}

export enum Key {
    Apache20 = "apache-2.0",
    GPL30 = "gpl-3.0",
    MIT = "mit",
    Other = "other",
}

export enum Name {
    ApacheLicense20 = "Apache License 2.0",
    GNUGeneralPublicLicenseV30 = "GNU General Public License v3.0",
    MITLicense = "MIT License",
    Other = "Other",
}

export enum NodeID {
    MDc6TGljZW5ZZTA = "MDc6TGljZW5zZTA=",
    MDc6TGljZW5ZZTEz = "MDc6TGljZW5zZTEz",
    MDc6TGljZW5ZZTI = "MDc6TGljZW5zZTI=",
    MDc6TGljZW5ZZTk = "MDc6TGljZW5zZTk=",
}

export enum SpdxID {
    Apache20 = "Apache-2.0",
    GPL30 = "GPL-3.0",
    MIT = "MIT",
    Noassertion = "NOASSERTION",
}

export type Owner = {
    login:               string;
    id:                  number;
    node_id:             string;
    avatar_url:          string;
    gravatar_id:         string;
    url:                 string;
    html_url:            string;
    followers_url:       string;
    following_url:       string;
    gists_url:           string;
    starred_url:         string;
    subscriptions_url:   string;
    organizations_url:   string;
    repos_url:           string;
    events_url:          string;
    received_events_url: string;
    type:                Type;
    site_admin:          boolean;
}

export enum Type {
    Organization = "Organization",
    User = "User",
}

export enum Visibility {
    Public = "public",
}

const foo = async () => {
    const API_URL = 'https://api.github.com/search/repositories?q=javascript'
    const response = await fetch(API_URL)
    if (!response.ok){
        throw new Error('Request failed')
    }

    // From quicktype we copy api response and paste, and we get the interface 

    const data = await response.json() as GithubAPIResponse

    const repos =  data.items.map(repo => {
        return{
            name: repo.name,
            id: repo.id,
            // url: repo.link //! Property 'link' does not exist on type 'Item'
            url: repo.html_url
        }
    })
  };
foo ()

//* Interfaces
// Se sabe como es la forma, el dibujo que esta definiendo la forma, pero no se tiene el valor todavia

/* 
type Hero1 = {
    id: string
    name: string
    age: number
}
*/

interface Hero {
    id: string
    name: string
    age: number
    saludar: () => void
}

const hero: Hero = {
    id: '1',
    name: 'Spiderman',
    age: 30,
    saludar: () => {
        console.log('Hola')
    }
}

// Interface anidado

interface Producto {
    id: number
    nombre: string
    precio: number
    quantity: number
}

interface Zapatilla extends Producto {
    talla: number
}

interface CarritoDeCompras {
    totalPrice: number
    productos: (Producto | Zapatilla)[]
}

interface CarritoOps {
    add: (product: Producto) => void,
    remove: (id: number) => void,

}

interface CarritoOps {
    clear: () => void
}

// Como se puede ver se esta extendiendo CarritoOps automaticamente al renombrarlo, algo que con types marcaria error al duplicar

/*
type CarritoOpsType = {                          //! Duplicate indentifier 'CarritoOpsType'
    add: (product: Producto) => void,
    remove: (id: number) => void,
}

type CarritoOpsType = {                          //! Duplicate indentifier 'CarritoOpsType'
    clear: () => void
}
*/

const carrito: CarritoDeCompras = {
    totalPrice: 100,
    productos: [
        {
            id: 1,
            nombre: 'Producto 1',
            precio: 100,
            quantity: 1,
            talla: 4
        }
    ]
}

//* Narrowing
console.log('Narrowing')

function mostrarLongitud (objeto: number | string) {
    if(typeof objeto === 'string')
    return objeto.length
return objeto.toString().length
}

console.log(mostrarLongitud('1'))

// Otro ejemplo

interface Mario {
    company: 'Nintendo',
    nombre: string,
    saltar: () => void
}

interface Sonic {
    company: 'Sega',
    nombre: string,
    correr: () => void
}

type Personaje = Mario | Sonic

/* 
function jugar(personaje: Personaje) {
    console.log(personaje.saltar()) //! Property 'saltar' does not exist on type 'Personaje'. Property 'saltar' does not exist on type Sonic
}
*/

function jugar(personaje: Personaje) {
    if (personaje.company === 'Nintendo'){
        personaje.saltar()  // Este personaje es Mario
        return
    }
//Seguro llega Sonic
personaje.correr()
}

//Para comprobar que es cierto persona basado en un tipo se puede juzgar con una funcion
function checkIsSonic(personaje: Personaje): personaje is Sonic {
    return (personaje as Sonic).correr !== undefined
}

// HAY QUE EVITARLO
function jugarSonic(personaje: Personaje){
    if (checkIsSonic(personaje)){
        personaje.correr()
        return
    } else
    personaje.saltar()
}

// Otro ejercicio del never

function fn(x: string | number){
    if (typeof x === 'string'){
        //do something
        x.toUpperCase()
    } else if (typeof x === 'number'){
        //do something
        x.toFixed(2)
    } else {
        x //?  (parameter) x: never
    }
}

// Classes
console.log('Clases')
class Avenger {
    readonly name: string
    // #powerScore: number //EL # lo hace privado, lo que solo es accesible dentro de la clase
    private powerScore: number
    wonBattles: number = 0

    constructor(name: string, powerScore: number){
    this.name = name
    this.powerScore = powerScore
    }

    get fullName() {
        return console.log(`${this.name}, de poder ${this.powerScore}`)
    }

    set power(newPower: number){
        if (newPower <= 100){
            this.powerScore = newPower
        } else {
            throw new Error('Power score cannot be more than 100')
        }
    }
}

const avengers = new Avenger('Spiderman', 80)
console.log(avengers.fullName)
console.log(avengers.powerScore) //! Property 'powerScore' is private and only accesible within class 'Avenger'
