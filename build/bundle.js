/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

console.log('Bienvenue dans les Royaumes Oubliés');
var game = new _classes_game__WEBPACK_IMPORTED_MODULE_0__["default"]();
game.play();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classes_Characters_hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _Weapons_sword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _Weapons_dagger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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




var Game = /** @class */ (function () {
    function Game(heros, monsters) {
        var _this = this;
        if (heros === void 0) { heros = []; }
        if (monsters === void 0) { monsters = []; }
        // Création d'une interface pour faire intéragir le joueur
        this.rl = readline__WEBPACK_IMPORTED_MODULE_0__["createInterface"]({
            input: process.stdin,
            output: process.stdout
        });
        // Permet de lancer la partie
        // Demande au joueur s'il veut créer un personnage ou non
        this.play = function () {
            return new Promise(function (resolve, reject) {
                _this.rl.question('Créer un personnage ?  [o/n] ', function (answer) {
                    switch (answer.toLowerCase()) {
                        case 'o':
                            resolve(_this.characterCreation(_this.rl));
                            break;
                        case 'n':
                            resolve(_this.generateMonsters());
                            break;
                        default:
                            reject(console.log('Commande invalide !'));
                    }
                });
            });
        };
        // Permet au joueur de rentrer le nom et l'arme du héros qui sera créé
        this.characterCreation = function (readline) { return __awaiter(_this, void 0, void 0, function () {
            var hero, heroName, heroWeapon;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Création du héros");
                        hero = new _classes_Characters_hero__WEBPACK_IMPORTED_MODULE_1__["default"]();
                        return [4 /*yield*/, this.questionName(readline)];
                    case 1:
                        heroName = _a.sent();
                        return [4 /*yield*/, this.questionWeapon(readline)];
                    case 2:
                        heroWeapon = _a.sent();
                        hero.createHero(heroName, heroWeapon);
                        return [2 /*return*/];
                }
            });
        }); };
        // Permet de générer des monstres en fonction de l'équipe de héros
        this.generateMonsters = function () {
            console.log("Attention des méchants !");
        };
        this.questionName = function (readline) {
            return new Promise(function (resolve, reject) {
                readline.question('Nom du personnage: ', function (name) {
                    resolve(heroName = name);
                });
            });
        };
        this.questionWeapon = function (readline) {
            return new Promise(function (resolve, reject) {
                readline.question("Choix de l'arme: [1]Épée [2]Dague", function (weapon) {
                    switch (weapon) {
                        case 1:
                            console.log("Ah ! Un chevalier !");
                            resolve(heroWeapon = new _Weapons_sword__WEBPACK_IMPORTED_MODULE_2__["default"]());
                            break;
                        case 2:
                            console.log("Oooh, un voleur");
                            resolve(heroWeapon = new _Weapons_dagger__WEBPACK_IMPORTED_MODULE_3__["default"]());
                            break;
                        default:
                            console.log('Commande invalide !');
                    }
                });
            });
        };
        this._heros = heros;
        this._monsters = monsters;
    }
    return Game;
}());
/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    //Constructeur
    function Hero(name, hp, maxHp, defense, role) {
        if (name === void 0) { name = ""; }
        if (hp === void 0) { hp = 0; }
        if (maxHp === void 0) { maxHp = 0; }
        if (defense === void 0) { defense = 0; }
        if (role === void 0) { role = 0; }
        var _this = _super.call(this, name, hp, maxHp, defense) || this;
        //Méthodes d'instance 
        // Permet de créer un Héros
        // Params: son nom, son arme
        _this.createHero = function (name, weapon) {
            console.log("Bienvenue " + name + ", tu d\u00E9marres avec une " + weapon.constructor.name);
        };
        // Permet à un héros de soigner un de ses alliés
        _this.heal = function () {
            // TODO: heal function
        };
        _this._role = role;
        return _this;
    }
    Object.defineProperty(Hero.prototype, "role", {
        //Getters et Setters
        get: function () {
            return this._role;
        },
        set: function (role) {
            this._role = role;
        },
        enumerable: true,
        configurable: true
    });
    return Hero;
}(_character__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Hero);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Weapons_weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var Character = /** @class */ (function () {
    //Constructeur
    function Character(name, hp, maxHp, defense, weapon) {
        if (name === void 0) { name = ""; }
        if (hp === void 0) { hp = 0; }
        if (maxHp === void 0) { maxHp = 0; }
        if (defense === void 0) { defense = 0; }
        if (weapon === void 0) { weapon = new _Weapons_weapon__WEBPACK_IMPORTED_MODULE_0__["default"](); }
        //Méthodes d'instance
        // Permet au personnage d'attaquer la cible adverse et lui retirer des PV
        this.attack = function (target) {
            // TODO: add target();
            // TODO: attack function 
        };
        // Permet de cibler l'adversaire avant de l'attaquer
        this.target = function () {
            // TODO: target function
            // Définir qui cible qui et check si personne target 2 fois la même cible
        };
        this._name = name;
        this._hp = hp;
        this._maxHp = maxHp;
        this._defense = defense;
        this._weapon = weapon;
    }
    Object.defineProperty(Character.prototype, "name", {
        //Getters et setters
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (hp) {
            this._hp = hp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "maxHp", {
        get: function () {
            return this._maxHp;
        },
        set: function (maxHp) {
            this._maxHp = maxHp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "defense", {
        get: function () {
            return this._defense;
        },
        set: function (defense) {
            this._defense = defense;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Character.prototype, "weapon", {
        get: function () {
            return this._weapon;
        },
        set: function (weapon) {
            this._weapon = weapon;
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}());
/* harmony default export */ __webpack_exports__["default"] = (Character);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var Weapon = /** @class */ (function () {
    //Constructeur
    function Weapon() {
        this._minDmg = Math.floor(Math.random() * 10) + 1;
        this._maxDmg = Math.floor(Math.random() * 10) + 10;
        this._criticalChance = Math.floor(Math.random() * 20) + 1;
    }
    Object.defineProperty(Weapon.prototype, "minDmg", {
        //Getters et Setters
        get: function () {
            return this._minDmg;
        },
        set: function (minDmg) {
            this._minDmg = minDmg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "maxDmg", {
        get: function () {
            return this._maxDmg;
        },
        set: function (maxDmg) {
            this._maxDmg = maxDmg;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Weapon.prototype, "criticalChance", {
        get: function () {
            return this._criticalChance;
        },
        set: function (criticalChance) {
            this._criticalChance = criticalChance;
        },
        enumerable: true,
        configurable: true
    });
    return Weapon;
}());
/* harmony default export */ __webpack_exports__["default"] = (Weapon);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Sword = /** @class */ (function (_super) {
    __extends(Sword, _super);
    function Sword() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Sword;
}(_weapon__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Sword);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Dagger = /** @class */ (function (_super) {
    __extends(Dagger, _super);
    function Dagger() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dagger;
}(_weapon__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ __webpack_exports__["default"] = (Dagger);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2dhbWUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhZGxpbmVcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9DaGFyYWN0ZXJzL2hlcm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQ2hhcmFjdGVycy9jaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvV2VhcG9ucy93ZWFwb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvV2VhcG9ucy9zd29yZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9XZWFwb25zL2RhZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtB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VyxNQUFjO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksa0NBQWM7YUFBbEI7WUFDRSxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDOUIsQ0FBQzthQUVELFVBQW1CLGNBQXNCO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1FBQ3hDLENBQUM7OztPQUpBO0lBS0gsYUFBQztBQUFELENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDNEI7QUFFN0I7SUFBbUMseUJBQU07SUFBekM7O0lBRUEsQ0FBQztJQUFELFlBQUM7QUFBRCxDQUFDLENBRmtDLCtDQUFNLEdBRXhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKNEI7QUFFN0I7SUFBb0MsMEJBQU07SUFBMUM7O0lBR0EsQ0FBQztJQUFELGFBQUM7QUFBRCxDQUFDLENBSG1DLCtDQUFNLEdBR3pDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBHYW1lIGZyb20gJy4vY2xhc3Nlcy9nYW1lJztcclxuXHJcbmNvbnNvbGUubG9nKCdCaWVudmVudWUgZGFucyBsZXMgUm95YXVtZXMgT3VibGnDqXMnKTtcclxubGV0IGdhbWUgPSBuZXcgR2FtZSgpO1xyXG5nYW1lLnBsYXkoKTsiLCJpbXBvcnQgKiBhcyByZWFkbGluZSBmcm9tICdyZWFkbGluZSc7XHJcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NsYXNzZXMvQ2hhcmFjdGVycy9oZXJvJztcclxuaW1wb3J0IE1vbnN0ZXIgZnJvbSAnLi4vY2xhc3Nlcy9DaGFyYWN0ZXJzL21vbnN0ZXInO1xyXG5pbXBvcnQgU3dvcmQgZnJvbSAnLi9XZWFwb25zL3N3b3JkJztcclxuaW1wb3J0IERhZ2dlciBmcm9tICcuL1dlYXBvbnMvZGFnZ2VyJztcclxuaW1wb3J0IFdlYXBvbiBmcm9tICcuL1dlYXBvbnMvd2VhcG9uJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xyXG4gIHByaXZhdGUgX2hlcm9zOiBBcnJheTxIZXJvPjtcclxuICBwcml2YXRlIF9tb25zdGVyczogQXJyYXk8TW9uc3Rlcj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKGhlcm9zID0gW10sIG1vbnN0ZXJzID0gW10pIHtcclxuICAgIHRoaXMuX2hlcm9zID0gaGVyb3M7XHJcbiAgICB0aGlzLl9tb25zdGVycyA9IG1vbnN0ZXJzO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3LDqWF0aW9uIGQndW5lIGludGVyZmFjZSBwb3VyIGZhaXJlIGludMOpcmFnaXIgbGUgam91ZXVyXHJcbiAgcHVibGljIHJsID0gcmVhZGxpbmUuY3JlYXRlSW50ZXJmYWNlKHtcclxuICAgIGlucHV0OiBwcm9jZXNzLnN0ZGluLFxyXG4gICAgb3V0cHV0OiBwcm9jZXNzLnN0ZG91dFxyXG4gIH0pXHJcblxyXG4gIC8vIFBlcm1ldCBkZSBsYW5jZXIgbGEgcGFydGllXHJcbiAgLy8gRGVtYW5kZSBhdSBqb3VldXIgcydpbCB2ZXV0IGNyw6llciB1biBwZXJzb25uYWdlIG91IG5vblxyXG4gIHB1YmxpYyBwbGF5ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5ybC5xdWVzdGlvbignQ3LDqWVyIHVuIHBlcnNvbm5hZ2UgPyAgW28vbl0gJywgKGFuc3dlcikgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAoYW5zd2VyLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgIGNhc2UgJ28nOlxyXG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuY2hhcmFjdGVyQ3JlYXRpb24odGhpcy5ybCkpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ24nOlxyXG4gICAgICAgICAgICByZXNvbHZlKHRoaXMuZ2VuZXJhdGVNb25zdGVycygpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZWplY3QoY29uc29sZS5sb2coJ0NvbW1hbmRlIGludmFsaWRlICEnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gUGVybWV0IGF1IGpvdWV1ciBkZSByZW50cmVyIGxlIG5vbSBldCBsJ2FybWUgZHUgaMOpcm9zIHF1aSBzZXJhIGNyw6nDqVxyXG4gIHB1YmxpYyBjaGFyYWN0ZXJDcmVhdGlvbiA9IGFzeW5jIChyZWFkbGluZTogYW55KSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkNyw6lhdGlvbiBkdSBow6lyb3NcIilcclxuICAgIGxldCBoZXJvID0gbmV3IEhlcm8oKTtcclxuXHJcbiAgICBjb25zdCBoZXJvTmFtZTogYW55ID0gYXdhaXQgdGhpcy5xdWVzdGlvbk5hbWUocmVhZGxpbmUpO1xyXG4gICAgY29uc3QgaGVyb1dlYXBvbjogV2VhcG9uID0gYXdhaXQgdGhpcy5xdWVzdGlvbldlYXBvbihyZWFkbGluZSk7XHJcbiAgICBoZXJvLmNyZWF0ZUhlcm8oaGVyb05hbWUsIGhlcm9XZWFwb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gUGVybWV0IGRlIGfDqW7DqXJlciBkZXMgbW9uc3RyZXMgZW4gZm9uY3Rpb24gZGUgbCfDqXF1aXBlIGRlIGjDqXJvc1xyXG4gIHB1YmxpYyBnZW5lcmF0ZU1vbnN0ZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJBdHRlbnRpb24gZGVzIG3DqWNoYW50cyAhXCIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHF1ZXN0aW9uTmFtZSA9IChyZWFkbGluZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZWFkbGluZS5xdWVzdGlvbignTm9tIGR1IHBlcnNvbm5hZ2U6ICcsIChuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXNvbHZlKGhlcm9OYW1lID0gbmFtZSk7XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHF1ZXN0aW9uV2VhcG9uID0gKHJlYWRsaW5lOiBhbnkpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHJlYWRsaW5lLnF1ZXN0aW9uKFwiQ2hvaXggZGUgbCdhcm1lOiBbMV3DiXDDqWUgWzJdRGFndWVcIiwgKHdlYXBvbjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoICh3ZWFwb24pIHtcclxuICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBaCAhIFVuIGNoZXZhbGllciAhXCIpO1xyXG4gICAgICAgICAgICByZXNvbHZlKGhlcm9XZWFwb24gPSBuZXcgU3dvcmQoKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk9vb2gsIHVuIHZvbGV1clwiKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShoZXJvV2VhcG9uID0gbmV3IERhZ2dlcigpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tbWFuZGUgaW52YWxpZGUgIScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWRsaW5lXCIpOyIsImltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9jaGFyYWN0ZXInXHJcbmltcG9ydCBXZWFwb24gZnJvbSAnLi4vV2VhcG9ucy93ZWFwb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyBleHRlbmRzIENoYXJhY3RlciB7XHJcbiAgcHJpdmF0ZSBfcm9sZTogYW55OyAvL0xlIHJvbGUgc2VyYSB1bmUgZW51bVxyXG5cclxuICAvL0NvbnN0cnVjdGV1clxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSBcIlwiLCBocCA9IDAsIG1heEhwID0gMCwgZGVmZW5zZSA9IDAsIHJvbGUgPSAwKSB7XHJcbiAgICBzdXBlcihuYW1lLCBocCwgbWF4SHAsIGRlZmVuc2UpO1xyXG4gICAgdGhpcy5fcm9sZSA9IHJvbGU7XHJcbiAgfVxyXG5cclxuICAvL0dldHRlcnMgZXQgU2V0dGVyc1xyXG4gIGdldCByb2xlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JvbGU7XHJcbiAgfVxyXG5cclxuICBzZXQgcm9sZShyb2xlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3JvbGUgPSByb2xlO1xyXG4gIH1cclxuXHJcbiAgLy9Nw6l0aG9kZXMgZCdpbnN0YW5jZSBcclxuICAvLyBQZXJtZXQgZGUgY3LDqWVyIHVuIEjDqXJvc1xyXG4gIC8vIFBhcmFtczogc29uIG5vbSwgc29uIGFybWVcclxuICBjcmVhdGVIZXJvID0gKG5hbWU6IHN0cmluZywgd2VhcG9uOiBXZWFwb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBCaWVudmVudWUgJHtuYW1lfSwgdHUgZMOpbWFycmVzIGF2ZWMgdW5lICR7d2VhcG9uLmNvbnN0cnVjdG9yLm5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICAvLyBQZXJtZXQgw6AgdW4gaMOpcm9zIGRlIHNvaWduZXIgdW4gZGUgc2VzIGFsbGnDqXNcclxuICBoZWFsID0gKCkgPT4ge1xyXG4gICAgLy8gVE9ETzogaGVhbCBmdW5jdGlvblxyXG4gIH1cclxufSIsImltcG9ydCBXZWFwb24gZnJvbSAnLi4vV2VhcG9ucy93ZWFwb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIHtcclxuICAvL1ZhcmlhYmxlcyBkJ2luc3RhbmNlXHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2hwOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfbWF4SHA6IG51bWJlcjtcclxuICBwcml2YXRlIF9kZWZlbnNlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfd2VhcG9uOiBXZWFwb247XHJcblxyXG4gIC8vQ29uc3RydWN0ZXVyXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuYW1lID0gXCJcIixcclxuICAgIGhwID0gMCxcclxuICAgIG1heEhwID0gMCxcclxuICAgIGRlZmVuc2UgPSAwLFxyXG4gICAgd2VhcG9uID0gbmV3IFdlYXBvbigpXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2hwID0gaHA7XHJcbiAgICB0aGlzLl9tYXhIcCA9IG1heEhwO1xyXG4gICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2U7XHJcbiAgICB0aGlzLl93ZWFwb24gPSB3ZWFwb247XHJcbiAgfVxyXG5cclxuICAvL0dldHRlcnMgZXQgc2V0dGVyc1xyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hwO1xyXG4gIH1cclxuXHJcbiAgc2V0IGhwKGhwOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2hwID0gaHA7XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4SHAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4SHA7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4SHAobWF4SHA6IG51bWJlcikge1xyXG4gICAgdGhpcy5fbWF4SHAgPSBtYXhIcDtcclxuICB9XHJcblxyXG4gIGdldCBkZWZlbnNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmVuc2U7XHJcbiAgfVxyXG5cclxuICBzZXQgZGVmZW5zZShkZWZlbnNlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2RlZmVuc2UgPSBkZWZlbnNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHdlYXBvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl93ZWFwb247XHJcbiAgfVxyXG5cclxuICBzZXQgd2VhcG9uKHdlYXBvbjogV2VhcG9uKSB7XHJcbiAgICB0aGlzLl93ZWFwb24gPSB3ZWFwb247XHJcbiAgfVxyXG5cclxuICAvL03DqXRob2RlcyBkJ2luc3RhbmNlXHJcbiAgLy8gUGVybWV0IGF1IHBlcnNvbm5hZ2UgZCdhdHRhcXVlciBsYSBjaWJsZSBhZHZlcnNlIGV0IGx1aSByZXRpcmVyIGRlcyBQVlxyXG4gIGF0dGFjayA9ICh0YXJnZXQ6IENoYXJhY3RlcikgPT4ge1xyXG4gICAgLy8gVE9ETzogYWRkIHRhcmdldCgpO1xyXG4gICAgLy8gVE9ETzogYXR0YWNrIGZ1bmN0aW9uIFxyXG4gIH1cclxuXHJcbiAgLy8gUGVybWV0IGRlIGNpYmxlciBsJ2FkdmVyc2FpcmUgYXZhbnQgZGUgbCdhdHRhcXVlclxyXG4gIHRhcmdldCA9ICgpID0+IHtcclxuICAgIC8vIFRPRE86IHRhcmdldCBmdW5jdGlvblxyXG4gICAgLy8gRMOpZmluaXIgcXVpIGNpYmxlIHF1aSBldCBjaGVjayBzaSBwZXJzb25uZSB0YXJnZXQgMiBmb2lzIGxhIG3Dqm1lIGNpYmxlXHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhcG9uIHtcclxuICAvL1ZhcmlhYmxlcyBkJ2luc3RhbmNlXHJcbiAgcHJpdmF0ZSBfbWluRG1nOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfbWF4RG1nOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfY3JpdGljYWxDaGFuY2U6IG51bWJlcjtcclxuXHJcbiAgLy9Db25zdHJ1Y3RldXJcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX21pbkRtZyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XHJcbiAgICB0aGlzLl9tYXhEbWcgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxMDtcclxuICAgIHRoaXMuX2NyaXRpY2FsQ2hhbmNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApICsgMTtcclxuICB9XHJcblxyXG4gIC8vR2V0dGVycyBldCBTZXR0ZXJzXHJcbiAgZ2V0IG1pbkRtZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9taW5EbWc7XHJcbiAgfVxyXG5cclxuICBzZXQgbWluRG1nKG1pbkRtZzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9taW5EbWcgPSBtaW5EbWc7XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4RG1nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heERtZztcclxuICB9XHJcblxyXG4gIHNldCBtYXhEbWcobWF4RG1nOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX21heERtZyA9IG1heERtZztcclxuICB9XHJcblxyXG4gIGdldCBjcml0aWNhbENoYW5jZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jcml0aWNhbENoYW5jZTtcclxuICB9XHJcblxyXG4gIHNldCBjcml0aWNhbENoYW5jZShjcml0aWNhbENoYW5jZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9jcml0aWNhbENoYW5jZSA9IGNyaXRpY2FsQ2hhbmNlO1xyXG4gIH1cclxufSIsImltcG9ydCBXZWFwb24gZnJvbSAnLi93ZWFwb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd29yZCBleHRlbmRzIFdlYXBvbiB7XHJcblxyXG59IiwiaW1wb3J0IFdlYXBvbiBmcm9tICcuL3dlYXBvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhZ2dlciBleHRlbmRzIFdlYXBvbiB7XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=