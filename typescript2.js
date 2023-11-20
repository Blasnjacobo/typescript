"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Type = exports.SpdxID = exports.NodeID = exports.Name = exports.Key = exports.Language = exports.DefaultBranch = void 0;
console.log('De novato a ninja');
//* Enum
console.log('Enum');
function mostrarMensaje(tipoDeError) {
    if (tipoDeError === 0 /* ERROR_TYPES.NOT_FOUND */) {
        console.log('No se encuentra el recurso');
    }
    else if (tipoDeError === 1 /* ERROR_TYPES.UNAUTHORIZED */) {
        console.log('No tienes permisos para acceder');
    }
    else if (tipoDeError === 2 /* ERROR_TYPES.FORBIDDEN */) {
        console.log('No tienes permisos para acceder');
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
    var canvas = document.getElementById('canvas');
    if (canvas instanceof HTMLCanvasElement) {
        var ctx = canvas.getContext('2d');
    }
}
// typeof -> para tipos
// instanceof -> para instancias
//* Fetching de datos en typescript
console.log('fetching de datos');
var DefaultBranch;
(function (DefaultBranch) {
    DefaultBranch["Dev"] = "dev";
    DefaultBranch["Main"] = "main";
    DefaultBranch["Master"] = "master";
})(DefaultBranch || (exports.DefaultBranch = DefaultBranch = {}));
var Language;
(function (Language) {
    Language["HTML"] = "HTML";
    Language["JavaScript"] = "JavaScript";
    Language["ObjectiveC"] = "Objective-C";
    Language["TypeScript"] = "TypeScript";
})(Language || (exports.Language = Language = {}));
var Key;
(function (Key) {
    Key["Apache20"] = "apache-2.0";
    Key["GPL30"] = "gpl-3.0";
    Key["MIT"] = "mit";
    Key["Other"] = "other";
})(Key || (exports.Key = Key = {}));
var Name;
(function (Name) {
    Name["ApacheLicense20"] = "Apache License 2.0";
    Name["GNUGeneralPublicLicenseV30"] = "GNU General Public License v3.0";
    Name["MITLicense"] = "MIT License";
    Name["Other"] = "Other";
})(Name || (exports.Name = Name = {}));
var NodeID;
(function (NodeID) {
    NodeID["MDc6TGljZW5ZZTA"] = "MDc6TGljZW5zZTA=";
    NodeID["MDc6TGljZW5ZZTEz"] = "MDc6TGljZW5zZTEz";
    NodeID["MDc6TGljZW5ZZTI"] = "MDc6TGljZW5zZTI=";
    NodeID["MDc6TGljZW5ZZTk"] = "MDc6TGljZW5zZTk=";
})(NodeID || (exports.NodeID = NodeID = {}));
var SpdxID;
(function (SpdxID) {
    SpdxID["Apache20"] = "Apache-2.0";
    SpdxID["GPL30"] = "GPL-3.0";
    SpdxID["MIT"] = "MIT";
    SpdxID["Noassertion"] = "NOASSERTION";
})(SpdxID || (exports.SpdxID = SpdxID = {}));
var Type;
(function (Type) {
    Type["Organization"] = "Organization";
    Type["User"] = "User";
})(Type || (exports.Type = Type = {}));
var Visibility;
(function (Visibility) {
    Visibility["Public"] = "public";
})(Visibility || (exports.Visibility = Visibility = {}));
var foo = function () { return __awaiter(void 0, void 0, void 0, function () {
    var API_URL, response, data, repos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                API_URL = 'https://api.github.com/search/repositories?q=javascript';
                return [4 /*yield*/, fetch(API_URL)];
            case 1:
                response = _a.sent();
                if (!response.ok) {
                    throw new Error('Request failed');
                }
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                repos = data.items.map(function (repo) {
                    return {
                        name: repo.name,
                        id: repo.id,
                        // url: repo.link //! Property 'link' does not exist on type 'Item'
                        url: repo.html_url
                    };
                });
                return [2 /*return*/];
        }
    });
}); };
foo();
var hero = {
    id: '1',
    name: 'Spiderman',
    age: 30,
    saludar: function () {
        console.log('Hola');
    }
};
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
var carrito = {
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
};
//* Narrowing
console.log('Narrowing');
function mostrarLongitud(objeto) {
    if (typeof objeto === 'string')
        return objeto.length;
    return objeto.toString().length;
}
console.log(mostrarLongitud('1'));
/*
function jugar(personaje: Personaje) {
    console.log(personaje.saltar()) //! Property 'saltar' does not exist on type 'Personaje'. Property 'saltar' does not exist on type Sonic
}
*/
function jugar(personaje) {
    if (personaje.company === 'Nintendo') {
        personaje.saltar(); // Este personaje es Mario
        return;
    }
    //Seguro llega Sonic
    personaje.correr();
}
//Para comprobar que es cierto persona basado en un tipo se puede juzgar con una funcion
function checkIsSonic(personaje) {
    return personaje.correr !== undefined;
}
// HAY QUE EVITARLO
function jugarSonic(personaje) {
    if (checkIsSonic(personaje)) {
        personaje.correr();
        return;
    }
    else
        personaje.saltar();
}
// Otro ejercicio del never
function fn(x) {
    if (typeof x === 'string') {
        //do something
        x.toUpperCase();
    }
    else if (typeof x === 'number') {
        //do something
        x.toFixed(2);
    }
    else {
        x; //?  (parameter) x: never
    }
}
// Classes
console.log('Clases');
var Avenger = /** @class */ (function () {
    function Avenger(name, powerScore) {
        this.wonBattles = 0;
        this.name = name;
        this.powerScore = powerScore;
    }
    Object.defineProperty(Avenger.prototype, "fullName", {
        get: function () {
            return console.log("".concat(this.name, ", de poder ").concat(this.powerScore));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Avenger.prototype, "power", {
        set: function (newPower) {
            if (newPower <= 100) {
                this.powerScore = newPower;
            }
            else {
                throw new Error('Power score cannot be more than 100');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Avenger;
}());
var avengers = new Avenger('Spiderman', 80);
console.log(avengers.fullName);
