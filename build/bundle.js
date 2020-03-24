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
                        this.play();
                        return [2 /*return*/];
                }
            });
        }); };
        // Permet de générer des monstres en fonction de l'équipe de héros
        this.generateMonsters = function () {
            console.log("Attention des méchants !");
        };
        this.questionName = function (readline) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        readline.question('Nom du personnage: ', function (name) {
                            resolve(name);
                        });
                    })];
            });
        }); };
        this.questionWeapon = function (readline) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        readline.question("Choix de l'arme: [1]Épée [2]Dague", function (weapon) {
                            switch (weapon) {
                                case '1':
                                    console.log("Ah ! Un chevalier !");
                                    resolve(new _Weapons_sword__WEBPACK_IMPORTED_MODULE_2__["default"]());
                                    break;
                                case '2':
                                    console.log("Oooh, un voleur");
                                    resolve(new _Weapons_dagger__WEBPACK_IMPORTED_MODULE_3__["default"]());
                                    break;
                                default:
                                    console.log('Commande invalide !');
                            }
                        });
                    })];
            });
        }); };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2dhbWUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhZGxpbmVcIiIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9DaGFyYWN0ZXJzL2hlcm8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvQ2hhcmFjdGVycy9jaGFyYWN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvV2VhcG9ucy93ZWFwb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvV2VhcG9ucy9zd29yZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9XZWFwb25zL2RhZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7OztBQ2xGQTtBQUFBO0FBQWtDO0FBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQztBQUNuRCxJQUFJLElBQUksR0FBRyxJQUFJLHFEQUFJLEVBQUUsQ0FBQztBQUN0QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSnlCO0FBQ1M7QUFFVjtBQUNFO0FBR3RDO0lBSUUsY0FBWSxLQUFVLEVBQUUsUUFBYTtRQUFyQyxpQkFHQztRQUhXLGtDQUFVO1FBQUUsd0NBQWE7UUFLckMsMERBQTBEO1FBQ25ELE9BQUUsR0FBRyx3REFBd0IsQ0FBQztZQUNuQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEtBQUs7WUFDcEIsTUFBTSxFQUFFLE9BQU8sQ0FBQyxNQUFNO1NBQ3ZCLENBQUM7UUFFRiw2QkFBNkI7UUFDN0IseURBQXlEO1FBQ2xELFNBQUksR0FBRztZQUNaLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtnQkFDakMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsK0JBQStCLEVBQUUsVUFBQyxNQUFNO29CQUN2RCxRQUFRLE1BQU0sQ0FBQyxXQUFXLEVBQUUsRUFBRTt3QkFDNUIsS0FBSyxHQUFHOzRCQUNOLE9BQU8sQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3pDLE1BQU07d0JBQ1IsS0FBSyxHQUFHOzRCQUNOLE9BQU8sQ0FBQyxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDOzRCQUNqQyxNQUFNO3dCQUNSOzRCQUNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztxQkFDOUM7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUM7UUFFRCxzRUFBc0U7UUFDL0Qsc0JBQWlCLEdBQUcsVUFBTyxRQUFhOzs7Ozt3QkFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQzt3QkFDNUIsSUFBSSxHQUFHLElBQUksZ0VBQUksRUFBRSxDQUFDO3dCQUVBLHFCQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDOzt3QkFBakQsUUFBUSxHQUFRLFNBQWlDO3dCQUMvQixxQkFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQzs7d0JBQXJELFVBQVUsR0FBUSxTQUFtQzt3QkFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7d0JBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQzs7OzthQUNiO1FBRUQsa0VBQWtFO1FBQzNELHFCQUFnQixHQUFHO1lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUMxQyxDQUFDO1FBRU0saUJBQVksR0FBRyxVQUFPLFFBQWE7O2dCQUN4QyxzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUNqQyxRQUFRLENBQUMsUUFBUSxDQUFDLHFCQUFxQixFQUFFLFVBQUMsSUFBWTs0QkFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoQixDQUFDLENBQUM7b0JBQ0osQ0FBQyxDQUFDOzthQUNIO1FBRU0sbUJBQWMsR0FBRyxVQUFPLFFBQWE7O2dCQUMxQyxzQkFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO3dCQUNqQyxRQUFRLENBQUMsUUFBUSxDQUFDLG1DQUFtQyxFQUFFLFVBQUMsTUFBYzs0QkFDcEUsUUFBUSxNQUFNLEVBQUU7Z0NBQ2QsS0FBSyxHQUFHO29DQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQ0FDbkMsT0FBTyxDQUFDLElBQUksc0RBQUssRUFBRSxDQUFDLENBQUM7b0NBQ3JCLE1BQU07Z0NBQ1IsS0FBSyxHQUFHO29DQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQztvQ0FDL0IsT0FBTyxDQUFDLElBQUksdURBQU0sRUFBRSxDQUFDLENBQUM7b0NBQ3RCLE1BQU07Z0NBQ1I7b0NBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQzs2QkFDckM7d0JBQ0gsQ0FBQyxDQUFDLENBQUM7b0JBQ0wsQ0FBQyxDQUFDLEVBQUM7O2FBQ0o7UUF0RUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7SUFDNUIsQ0FBQztJQXFFSCxXQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7QUNuRkQscUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUM7QUFHbkM7SUFBa0Msd0JBQVM7SUFHekMsY0FBYztJQUNkLGNBQVksSUFBUyxFQUFFLEVBQU0sRUFBRSxLQUFTLEVBQUUsT0FBVyxFQUFFLElBQVE7UUFBbkQsZ0NBQVM7UUFBRSwyQkFBTTtRQUFFLGlDQUFTO1FBQUUscUNBQVc7UUFBRSwrQkFBUTtRQUEvRCxZQUNFLGtCQUFNLElBQUksRUFBRSxFQUFFLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxTQUVoQztRQVdELHNCQUFzQjtRQUN0QiwyQkFBMkI7UUFDM0IsNEJBQTRCO1FBQzVCLGdCQUFVLEdBQUcsVUFBQyxJQUFZLEVBQUUsTUFBYztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWEsSUFBSSxvQ0FBMEIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFNLENBQUMsQ0FBQztRQUNwRixDQUFDO1FBRUQsZ0RBQWdEO1FBQ2hELFVBQUksR0FBRztZQUNMLHNCQUFzQjtRQUN4QixDQUFDO1FBdEJDLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDOztJQUNwQixDQUFDO0lBR0Qsc0JBQUksc0JBQUk7UUFEUixvQkFBb0I7YUFDcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzthQUVELFVBQVMsSUFBWTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDOzs7T0FKQTtJQWlCSCxXQUFDO0FBQUQsQ0FBQyxDQTdCaUMsa0RBQVMsR0E2QjFDOzs7Ozs7Ozs7QUNoQ0Q7QUFBQTtBQUF1QztBQUV2QztJQVFFLGNBQWM7SUFDZCxtQkFDRSxJQUFTLEVBQ1QsRUFBTSxFQUNOLEtBQVMsRUFDVCxPQUFXLEVBQ1gsTUFBcUI7UUFKckIsZ0NBQVM7UUFDVCwyQkFBTTtRQUNOLGlDQUFTO1FBQ1QscUNBQVc7UUFDWCxzQ0FBYSx1REFBTSxFQUFFO1FBa0R2QixxQkFBcUI7UUFDckIseUVBQXlFO1FBQ3pFLFdBQU0sR0FBRyxVQUFDLE1BQWlCO1lBQ3pCLHNCQUFzQjtZQUN0Qix5QkFBeUI7UUFDM0IsQ0FBQztRQUVELG9EQUFvRDtRQUNwRCxXQUFNLEdBQUc7WUFDUCx3QkFBd0I7WUFDeEIseUVBQXlFO1FBQzNFLENBQUM7UUEzREMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBR0Qsc0JBQUksMkJBQUk7UUFEUixvQkFBb0I7YUFDcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzthQUVELFVBQVMsSUFBWTtZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLHlCQUFFO2FBQU47WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQzthQUVELFVBQU8sRUFBVTtZQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNEJBQUs7YUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO2FBRUQsVUFBVSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksOEJBQU87YUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDO2FBRUQsVUFBWSxPQUFlO1lBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQzFCLENBQUM7OztPQUpBO0lBTUQsc0JBQUksNkJBQU07YUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDO2FBRUQsVUFBVyxNQUFjO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3hCLENBQUM7OztPQUpBO0lBa0JILGdCQUFDO0FBQUQsQ0FBQzs7Ozs7Ozs7O0FDOUVEO0FBQUE7SUFNRSxjQUFjO0lBQ2Q7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBR0Qsc0JBQUksMEJBQU07UUFEVixvQkFBb0I7YUFDcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVcsTUFBYztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLDBCQUFNO2FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQVcsTUFBYztZQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN4QixDQUFDOzs7T0FKQTtJQU1ELHNCQUFJLGtDQUFjO2FBQWxCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzlCLENBQUM7YUFFRCxVQUFtQixjQUFzQjtZQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQztRQUN4QyxDQUFDOzs7T0FKQTtJQUtILGFBQUM7QUFBRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQzRCO0FBRTdCO0lBQW1DLHlCQUFNO0lBQXpDOztJQUVBLENBQUM7SUFBRCxZQUFDO0FBQUQsQ0FBQyxDQUZrQywrQ0FBTSxHQUV4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSjRCO0FBRTdCO0lBQW9DLDBCQUFNO0lBQTFDOztJQUdBLENBQUM7SUFBRCxhQUFDO0FBQUQsQ0FBQyxDQUhtQywrQ0FBTSxHQUd6QyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2NsYXNzZXMvZ2FtZSc7XHJcblxyXG5jb25zb2xlLmxvZygnQmllbnZlbnVlIGRhbnMgbGVzIFJveWF1bWVzIE91Ymxpw6lzJyk7XHJcbmxldCBnYW1lID0gbmV3IEdhbWUoKTtcclxuZ2FtZS5wbGF5KCk7IiwiaW1wb3J0ICogYXMgcmVhZGxpbmUgZnJvbSAncmVhZGxpbmUnO1xyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jbGFzc2VzL0NoYXJhY3RlcnMvaGVybyc7XHJcbmltcG9ydCBNb25zdGVyIGZyb20gJy4uL2NsYXNzZXMvQ2hhcmFjdGVycy9tb25zdGVyJztcclxuaW1wb3J0IFN3b3JkIGZyb20gJy4vV2VhcG9ucy9zd29yZCc7XHJcbmltcG9ydCBEYWdnZXIgZnJvbSAnLi9XZWFwb25zL2RhZ2dlcic7XHJcbmltcG9ydCBXZWFwb24gZnJvbSAnLi9XZWFwb25zL3dlYXBvbic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcclxuICBwcml2YXRlIF9oZXJvczogQXJyYXk8SGVybz47XHJcbiAgcHJpdmF0ZSBfbW9uc3RlcnM6IEFycmF5PE1vbnN0ZXI+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihoZXJvcyA9IFtdLCBtb25zdGVycyA9IFtdKSB7XHJcbiAgICB0aGlzLl9oZXJvcyA9IGhlcm9zO1xyXG4gICAgdGhpcy5fbW9uc3RlcnMgPSBtb25zdGVycztcclxuICB9XHJcblxyXG4gIC8vIENyw6lhdGlvbiBkJ3VuZSBpbnRlcmZhY2UgcG91ciBmYWlyZSBpbnTDqXJhZ2lyIGxlIGpvdWV1clxyXG4gIHB1YmxpYyBybCA9IHJlYWRsaW5lLmNyZWF0ZUludGVyZmFjZSh7XHJcbiAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcclxuICAgIG91dHB1dDogcHJvY2Vzcy5zdGRvdXRcclxuICB9KVxyXG5cclxuICAvLyBQZXJtZXQgZGUgbGFuY2VyIGxhIHBhcnRpZVxyXG4gIC8vIERlbWFuZGUgYXUgam91ZXVyIHMnaWwgdmV1dCBjcsOpZXIgdW4gcGVyc29ubmFnZSBvdSBub25cclxuICBwdWJsaWMgcGxheSA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMucmwucXVlc3Rpb24oJ0Nyw6llciB1biBwZXJzb25uYWdlID8gIFtvL25dICcsIChhbnN3ZXIpID0+IHtcclxuICAgICAgICBzd2l0Y2ggKGFuc3dlci50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICBjYXNlICdvJzpcclxuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmNoYXJhY3RlckNyZWF0aW9uKHRoaXMucmwpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICduJzpcclxuICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmdlbmVyYXRlTW9uc3RlcnMoKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmVqZWN0KGNvbnNvbGUubG9nKCdDb21tYW5kZSBpbnZhbGlkZSAhJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vIFBlcm1ldCBhdSBqb3VldXIgZGUgcmVudHJlciBsZSBub20gZXQgbCdhcm1lIGR1IGjDqXJvcyBxdWkgc2VyYSBjcsOpw6lcclxuICBwdWJsaWMgY2hhcmFjdGVyQ3JlYXRpb24gPSBhc3luYyAocmVhZGxpbmU6IGFueSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJDcsOpYXRpb24gZHUgaMOpcm9zXCIpXHJcbiAgICBsZXQgaGVybyA9IG5ldyBIZXJvKCk7XHJcblxyXG4gICAgY29uc3QgaGVyb05hbWU6IGFueSA9IGF3YWl0IHRoaXMucXVlc3Rpb25OYW1lKHJlYWRsaW5lKTtcclxuICAgIGNvbnN0IGhlcm9XZWFwb246IGFueSA9IGF3YWl0IHRoaXMucXVlc3Rpb25XZWFwb24ocmVhZGxpbmUpO1xyXG4gICAgaGVyby5jcmVhdGVIZXJvKGhlcm9OYW1lLCBoZXJvV2VhcG9uKTtcclxuICAgIHRoaXMucGxheSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gUGVybWV0IGRlIGfDqW7DqXJlciBkZXMgbW9uc3RyZXMgZW4gZm9uY3Rpb24gZGUgbCfDqXF1aXBlIGRlIGjDqXJvc1xyXG4gIHB1YmxpYyBnZW5lcmF0ZU1vbnN0ZXJzID0gKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJBdHRlbnRpb24gZGVzIG3DqWNoYW50cyAhXCIpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHF1ZXN0aW9uTmFtZSA9IGFzeW5jIChyZWFkbGluZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZWFkbGluZS5xdWVzdGlvbignTm9tIGR1IHBlcnNvbm5hZ2U6ICcsIChuYW1lOiBzdHJpbmcpID0+IHtcclxuICAgICAgICByZXNvbHZlKG5hbWUpO1xyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHB1YmxpYyBxdWVzdGlvbldlYXBvbiA9IGFzeW5jIChyZWFkbGluZTogYW55KSA9PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICByZWFkbGluZS5xdWVzdGlvbihcIkNob2l4IGRlIGwnYXJtZTogWzFdw4lww6llIFsyXURhZ3VlXCIsICh3ZWFwb246IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHN3aXRjaCAod2VhcG9uKSB7XHJcbiAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBaCAhIFVuIGNoZXZhbGllciAhXCIpO1xyXG4gICAgICAgICAgICByZXNvbHZlKG5ldyBTd29yZCgpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBjYXNlICcyJzpcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJPb29oLCB1biB2b2xldXJcIik7XHJcbiAgICAgICAgICAgIHJlc29sdmUobmV3IERhZ2dlcigpKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29tbWFuZGUgaW52YWxpZGUgIScpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWRsaW5lXCIpOyIsImltcG9ydCBDaGFyYWN0ZXIgZnJvbSAnLi9jaGFyYWN0ZXInXHJcbmltcG9ydCBXZWFwb24gZnJvbSAnLi4vV2VhcG9ucy93ZWFwb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVybyBleHRlbmRzIENoYXJhY3RlciB7XHJcbiAgcHJpdmF0ZSBfcm9sZTogYW55OyAvL0xlIHJvbGUgc2VyYSB1bmUgZW51bVxyXG5cclxuICAvL0NvbnN0cnVjdGV1clxyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSBcIlwiLCBocCA9IDAsIG1heEhwID0gMCwgZGVmZW5zZSA9IDAsIHJvbGUgPSAwKSB7XHJcbiAgICBzdXBlcihuYW1lLCBocCwgbWF4SHAsIGRlZmVuc2UpO1xyXG4gICAgdGhpcy5fcm9sZSA9IHJvbGU7XHJcbiAgfVxyXG5cclxuICAvL0dldHRlcnMgZXQgU2V0dGVyc1xyXG4gIGdldCByb2xlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JvbGU7XHJcbiAgfVxyXG5cclxuICBzZXQgcm9sZShyb2xlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3JvbGUgPSByb2xlO1xyXG4gIH1cclxuXHJcbiAgLy9Nw6l0aG9kZXMgZCdpbnN0YW5jZSBcclxuICAvLyBQZXJtZXQgZGUgY3LDqWVyIHVuIEjDqXJvc1xyXG4gIC8vIFBhcmFtczogc29uIG5vbSwgc29uIGFybWVcclxuICBjcmVhdGVIZXJvID0gKG5hbWU6IHN0cmluZywgd2VhcG9uOiBXZWFwb24pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGBCaWVudmVudWUgJHtuYW1lfSwgdHUgZMOpbWFycmVzIGF2ZWMgdW5lICR7d2VhcG9uLmNvbnN0cnVjdG9yLm5hbWV9YCk7XHJcbiAgfVxyXG5cclxuICAvLyBQZXJtZXQgw6AgdW4gaMOpcm9zIGRlIHNvaWduZXIgdW4gZGUgc2VzIGFsbGnDqXNcclxuICBoZWFsID0gKCkgPT4ge1xyXG4gICAgLy8gVE9ETzogaGVhbCBmdW5jdGlvblxyXG4gIH1cclxufSIsImltcG9ydCBXZWFwb24gZnJvbSAnLi4vV2VhcG9ucy93ZWFwb24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhcmFjdGVyIHtcclxuICAvL1ZhcmlhYmxlcyBkJ2luc3RhbmNlXHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgX2hwOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfbWF4SHA6IG51bWJlcjtcclxuICBwcml2YXRlIF9kZWZlbnNlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfd2VhcG9uOiBXZWFwb247XHJcblxyXG4gIC8vQ29uc3RydWN0ZXVyXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBuYW1lID0gXCJcIixcclxuICAgIGhwID0gMCxcclxuICAgIG1heEhwID0gMCxcclxuICAgIGRlZmVuc2UgPSAwLFxyXG4gICAgd2VhcG9uID0gbmV3IFdlYXBvbigpXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2hwID0gaHA7XHJcbiAgICB0aGlzLl9tYXhIcCA9IG1heEhwO1xyXG4gICAgdGhpcy5fZGVmZW5zZSA9IGRlZmVuc2U7XHJcbiAgICB0aGlzLl93ZWFwb24gPSB3ZWFwb247XHJcbiAgfVxyXG5cclxuICAvL0dldHRlcnMgZXQgc2V0dGVyc1xyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hwO1xyXG4gIH1cclxuXHJcbiAgc2V0IGhwKGhwOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2hwID0gaHA7XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4SHAoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF4SHA7XHJcbiAgfVxyXG5cclxuICBzZXQgbWF4SHAobWF4SHA6IG51bWJlcikge1xyXG4gICAgdGhpcy5fbWF4SHAgPSBtYXhIcDtcclxuICB9XHJcblxyXG4gIGdldCBkZWZlbnNlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmVuc2U7XHJcbiAgfVxyXG5cclxuICBzZXQgZGVmZW5zZShkZWZlbnNlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2RlZmVuc2UgPSBkZWZlbnNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHdlYXBvbigpIHtcclxuICAgIHJldHVybiB0aGlzLl93ZWFwb247XHJcbiAgfVxyXG5cclxuICBzZXQgd2VhcG9uKHdlYXBvbjogV2VhcG9uKSB7XHJcbiAgICB0aGlzLl93ZWFwb24gPSB3ZWFwb247XHJcbiAgfVxyXG5cclxuICAvL03DqXRob2RlcyBkJ2luc3RhbmNlXHJcbiAgLy8gUGVybWV0IGF1IHBlcnNvbm5hZ2UgZCdhdHRhcXVlciBsYSBjaWJsZSBhZHZlcnNlIGV0IGx1aSByZXRpcmVyIGRlcyBQVlxyXG4gIGF0dGFjayA9ICh0YXJnZXQ6IENoYXJhY3RlcikgPT4ge1xyXG4gICAgLy8gVE9ETzogYWRkIHRhcmdldCgpO1xyXG4gICAgLy8gVE9ETzogYXR0YWNrIGZ1bmN0aW9uIFxyXG4gIH1cclxuXHJcbiAgLy8gUGVybWV0IGRlIGNpYmxlciBsJ2FkdmVyc2FpcmUgYXZhbnQgZGUgbCdhdHRhcXVlclxyXG4gIHRhcmdldCA9ICgpID0+IHtcclxuICAgIC8vIFRPRE86IHRhcmdldCBmdW5jdGlvblxyXG4gICAgLy8gRMOpZmluaXIgcXVpIGNpYmxlIHF1aSBldCBjaGVjayBzaSBwZXJzb25uZSB0YXJnZXQgMiBmb2lzIGxhIG3Dqm1lIGNpYmxlXHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2VhcG9uIHtcclxuICAvL1ZhcmlhYmxlcyBkJ2luc3RhbmNlXHJcbiAgcHJpdmF0ZSBfbWluRG1nOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfbWF4RG1nOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBfY3JpdGljYWxDaGFuY2U6IG51bWJlcjtcclxuXHJcbiAgLy9Db25zdHJ1Y3RldXJcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX21pbkRtZyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKSArIDE7XHJcbiAgICB0aGlzLl9tYXhEbWcgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxMDtcclxuICAgIHRoaXMuX2NyaXRpY2FsQ2hhbmNlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjApICsgMTtcclxuICB9XHJcblxyXG4gIC8vR2V0dGVycyBldCBTZXR0ZXJzXHJcbiAgZ2V0IG1pbkRtZygpIHtcclxuICAgIHJldHVybiB0aGlzLl9taW5EbWc7XHJcbiAgfVxyXG5cclxuICBzZXQgbWluRG1nKG1pbkRtZzogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9taW5EbWcgPSBtaW5EbWc7XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4RG1nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX21heERtZztcclxuICB9XHJcblxyXG4gIHNldCBtYXhEbWcobWF4RG1nOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX21heERtZyA9IG1heERtZztcclxuICB9XHJcblxyXG4gIGdldCBjcml0aWNhbENoYW5jZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9jcml0aWNhbENoYW5jZTtcclxuICB9XHJcblxyXG4gIHNldCBjcml0aWNhbENoYW5jZShjcml0aWNhbENoYW5jZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9jcml0aWNhbENoYW5jZSA9IGNyaXRpY2FsQ2hhbmNlO1xyXG4gIH1cclxufSIsImltcG9ydCBXZWFwb24gZnJvbSAnLi93ZWFwb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTd29yZCBleHRlbmRzIFdlYXBvbiB7XHJcblxyXG59IiwiaW1wb3J0IFdlYXBvbiBmcm9tICcuL3dlYXBvbidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhZ2dlciBleHRlbmRzIFdlYXBvbiB7XHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=