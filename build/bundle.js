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
/* harmony import */ var _services_fight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
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

console.log('Welcome to the Forgotten Realms');
var go = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        _services_fight__WEBPACK_IMPORTED_MODULE_0__["default"].game();
        return [2 /*return*/];
    });
}); };
go();


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
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

var Fight = /** @class */ (function () {
    function Fight() {
        var _this = this;
        this.target = function (g) {
            g.hero.target = g.monster;
            g.monster.target = g.hero;
        };
        this.turn = function (g) {
            _this.target(g);
            var turn = [];
            var rand = Math.random();
            if (rand <= 0.5) {
                turn.push(g.hero.attack());
                turn.push(g.monster.attack());
            }
            else {
                turn.push(g.monster.attack());
                turn.push(g.hero.attack());
            }
            g.turn = turn;
        };
        this.game = function () { return __awaiter(_this, void 0, void 0, function () {
            var g, _i, _a, action;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, _classes_game__WEBPACK_IMPORTED_MODULE_0__["Game"].play()];
                    case 1:
                        g = _b.sent();
                        console.log(g);
                        while (true) {
                            this.turn(g);
                            for (_i = 0, _a = g.turn; _i < _a.length; _i++) {
                                action = _a[_i];
                                console.log(action);
                            }
                            if (g.monster.hp <= 0) {
                                console.log('Hero wins !');
                            }
                            else if (g.hero.hp <= 0) {
                                console.log('Monster wins !');
                            }
                        }
                        return [2 /*return*/];
                }
            });
        }); };
    }
    return Fight;
}());
/* harmony default export */ __webpack_exports__["default"] = (Object.freeze(new Fight()));


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var _classes_Characters_hero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _classes_Characters_monster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var _Weapons_sword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _Weapons_dagger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _Weapons_weapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var _scripts_tools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
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
    function Game(hero, monster) {
        this._hero = hero;
        this._monster = monster;
        this._turn = [];
    }
    Object.defineProperty(Game.prototype, "hero", {
        get: function () {
            return this._hero;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "monster", {
        get: function () {
            return this._monster;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "turn", {
        get: function () {
            return this._turn;
        },
        set: function (turn) {
            this._turn = turn;
        },
        enumerable: true,
        configurable: true
    });
    // Permet de lancer la partie
    // Demande au joueur s'il veut créer un personnage ou non
    Game.play = function () { return __awaiter(void 0, void 0, void 0, function () {
        var heroName, weapon, hero, monster;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(_scripts_tools__WEBPACK_IMPORTED_MODULE_5__["inputReader"])('Name your Hero:')];
                case 1:
                    heroName = _a.sent();
                    return [4 /*yield*/, Game.weaponChoice()];
                case 2:
                    weapon = _a.sent();
                    hero = new _classes_Characters_hero__WEBPACK_IMPORTED_MODULE_0__["Hero"](heroName, weapon);
                    monster = new _classes_Characters_monster__WEBPACK_IMPORTED_MODULE_1__["Monster"]();
                    return [2 /*return*/, new Game(hero, monster)];
            }
        });
    }); };
    Game.weaponChoice = function () { return __awaiter(void 0, void 0, void 0, function () {
        var weapon, choice;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    weapon = new _Weapons_weapon__WEBPACK_IMPORTED_MODULE_4__["Weapon"]();
                    return [4 /*yield*/, Object(_scripts_tools__WEBPACK_IMPORTED_MODULE_5__["inputReader"])('Choose your weapon : [1]Sword - [2]Dagger')];
                case 1:
                    choice = _a.sent();
                    console.log(choice);
                    if (choice === JSON.stringify(1)) {
                        weapon = new _Weapons_sword__WEBPACK_IMPORTED_MODULE_2__["Sword"]();
                    }
                    else if (choice === JSON.stringify(2)) {
                        weapon = new _Weapons_dagger__WEBPACK_IMPORTED_MODULE_3__["Dagger"]();
                    }
                    else {
                        Game.weaponChoice();
                    }
                    return [2 /*return*/, weapon];
            }
        });
    }); };
    return Game;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
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
    function Hero(name, weapon) {
        var _this = _super.call(this, name, weapon) || this;
        // Permet à un héros de soigner un de ses alliés
        _this.heal = function () {
            // TODO: heal function
        };
        return _this;
    }
    return Hero;
}(_character__WEBPACK_IMPORTED_MODULE_0__["Character"]));



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony import */ var _Weapons_weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);

var Character = /** @class */ (function () {
    //Constructeur
    function Character(name, weapon) {
        var _this = this;
        if (name === void 0) { name = ""; }
        if (weapon === void 0) { weapon = new _Weapons_weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"](); }
        //Méthodes d'instance
        // Permet au personnage d'attaquer la cible adverse et lui retirer des PV
        this.attack = function () {
            var result = "";
            if (_this.target) {
                var dmg = _this.weapon.damage() - _this.target.defense;
                _this.target.hp -= dmg;
                result = _this.name + " attack " + _this.target.name + " and do " + dmg + " points of damage ! " + _this.target.name + " has " + _this.target.hp + " hp left.";
            }
            return result;
        };
        this._name = name;
        this._hp = Math.floor(Math.random() * 100 + 50);
        this._maxHp = this._hp;
        this._defense = Math.floor(Math.random() * 10);
        this._weapon = weapon;
        this._target = undefined;
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
    Object.defineProperty(Character.prototype, "target", {
        get: function () {
            return this._target;
        },
        set: function (target) {
            this._target = target;
        },
        enumerable: true,
        configurable: true
    });
    return Character;
}());



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
var Weapon = /** @class */ (function () {
    //Constructeur
    function Weapon() {
        var _this = this;
        this.damage = function () {
            var dmg = Math.floor(Math.random() * (_this._maxDmg - _this._minDmg)) + _this._minDmg;
            var rand = Math.random();
            rand < _this._criticalChance && dmg * 1.5;
            return dmg;
        };
        this._minDmg = Math.floor(Math.random() * 10) + 1;
        this._maxDmg = Math.floor(Math.random() * 10) + 10;
        this._criticalChance = Math.floor(Math.random() * 20) + 1;
    }
    return Weapon;
}());



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Monster", function() { return Monster; });
/* harmony import */ var _character__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _Weapons_weapon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
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


var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    //Constructeur
    function Monster() {
        var _this = _super.call(this) || this;
        _this.randomName = function () {
            var name = Math.random().toString(36).replace(/[^a-z]+/g, '');
            return name[0].toUpperCase() + name.substring(1);
        };
        _this._name = _this.randomName();
        _this._weapon = new _Weapons_weapon__WEBPACK_IMPORTED_MODULE_1__["Weapon"]();
        return _this;
    }
    return Monster;
}(_character__WEBPACK_IMPORTED_MODULE_0__["Character"]));



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sword", function() { return Sword; });
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
        var _this = _super.call(this) || this;
        _this._minDmg * 2;
        return _this;
    }
    return Sword;
}(_weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"]));



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dagger", function() { return Dagger; });
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
        var _this = _super.call(this) || this;
        _this._criticalChance * 1.5;
        return _this;
    }
    return Dagger;
}(_weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"]));



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputReader", function() { return inputReader; });
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var readline__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(readline__WEBPACK_IMPORTED_MODULE_0__);
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

var inputReader = function (question) { return __awaiter(void 0, void 0, void 0, function () {
    var response, rl;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                response = "";
                rl = readline__WEBPACK_IMPORTED_MODULE_0__["createInterface"]({
                    input: process.stdin,
                    output: process.stdout
                });
                return [4 /*yield*/, new Promise(function (resolve, reject) {
                        rl.question("" + question, function (answer) {
                            resolve(answer);
                        });
                    }).then(function (onfull) {
                        response = JSON.stringify(onfull);
                        rl.close();
                    })];
            case 1:
                _a.sent();
                return [2 /*return*/, response];
        }
    });
}); };


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("readline");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlcy9maWdodC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9nYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL0NoYXJhY3RlcnMvaGVyby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9DaGFyYWN0ZXJzL2NoYXJhY3Rlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9XZWFwb25zL3dlYXBvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9DaGFyYWN0ZXJzL21vbnN0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvV2VhcG9ucy9zd29yZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9XZWFwb25zL2RhZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy90b29scy50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFkbGluZVwiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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T0FBTyxDQUFDLE1BQU07aUJBQ3ZCLENBQUM7Z0JBRUYscUJBQU0sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDaEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFHLFFBQVUsRUFBRSxVQUFDLE1BQWM7NEJBQ3hDLE9BQU8sQ0FBQyxNQUFNLENBQUM7d0JBQ2pCLENBQUMsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQU07d0JBQ1osUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ2xDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDYixDQUFDLENBQUM7O2dCQVBGLFNBT0U7Z0JBRUYsc0JBQU8sUUFBUTs7O0tBQ2hCOzs7Ozs7O0FDcEJELHFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBGaWdodCBmcm9tICcuL3NlcnZpY2VzL2ZpZ2h0J1xyXG5cclxuY29uc29sZS5sb2coJ1dlbGNvbWUgdG8gdGhlIEZvcmdvdHRlbiBSZWFsbXMnKTtcclxuY29uc3QgZ28gPSBhc3luYyAoKSA9PiB7XHJcbiAgRmlnaHQuZ2FtZSgpO1xyXG59XHJcblxyXG5nbygpOyIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi4vY2xhc3Nlcy9nYW1lXCI7XHJcblxyXG5jbGFzcyBGaWdodCB7XHJcbiAgdGFyZ2V0ID0gKGc6IEdhbWUpID0+IHtcclxuICAgIGcuaGVyby50YXJnZXQgPSBnLm1vbnN0ZXI7XHJcbiAgICBnLm1vbnN0ZXIudGFyZ2V0ID0gZy5oZXJvO1xyXG4gIH1cclxuXHJcbiAgdHVybiA9IChnOiBHYW1lKSA9PiB7XHJcbiAgICB0aGlzLnRhcmdldChnKTtcclxuICAgIGxldCB0dXJuOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG5cclxuICAgIGlmIChyYW5kIDw9IDAuNSkge1xyXG4gICAgICB0dXJuLnB1c2goZy5oZXJvLmF0dGFjaygpKTtcclxuICAgICAgdHVybi5wdXNoKGcubW9uc3Rlci5hdHRhY2soKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0dXJuLnB1c2goZy5tb25zdGVyLmF0dGFjaygpKTtcclxuICAgICAgdHVybi5wdXNoKGcuaGVyby5hdHRhY2soKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZy50dXJuID0gdHVybjtcclxuICB9XHJcblxyXG4gIGdhbWUgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBsZXQgZyA9IGF3YWl0IEdhbWUucGxheSgpO1xyXG4gICAgY29uc29sZS5sb2coZyk7XHJcblxyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgdGhpcy50dXJuKGcpO1xyXG4gICAgICBmb3IgKGxldCBhY3Rpb24gb2YgZy50dXJuKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGcubW9uc3Rlci5ocCA8PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0hlcm8gd2lucyAhJyk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZy5oZXJvLmhwIDw9IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTW9uc3RlciB3aW5zICEnKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgT2JqZWN0LmZyZWV6ZShuZXcgRmlnaHQoKSk7IiwiaW1wb3J0ICogYXMgcmVhZGxpbmUgZnJvbSAncmVhZGxpbmUnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi4vY2xhc3Nlcy9DaGFyYWN0ZXJzL2hlcm8nO1xyXG5pbXBvcnQgeyBNb25zdGVyIH0gZnJvbSAnLi4vY2xhc3Nlcy9DaGFyYWN0ZXJzL21vbnN0ZXInO1xyXG5pbXBvcnQgeyBTd29yZCB9IGZyb20gJy4vV2VhcG9ucy9zd29yZCc7XHJcbmltcG9ydCB7IERhZ2dlciB9IGZyb20gJy4vV2VhcG9ucy9kYWdnZXInO1xyXG5pbXBvcnQgeyBXZWFwb24gfSBmcm9tICcuL1dlYXBvbnMvd2VhcG9uJztcclxuaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi9DaGFyYWN0ZXJzL2NoYXJhY3Rlcic7XHJcbmltcG9ydCB7IGlucHV0UmVhZGVyIH0gZnJvbSAnLi4vc2NyaXB0cy90b29scyc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZSB7XHJcbiAgcHJpdmF0ZSBfaGVybzogQ2hhcmFjdGVyO1xyXG4gIHByaXZhdGUgX21vbnN0ZXI6IENoYXJhY3RlcjtcclxuICBwcml2YXRlIF90dXJuOiBzdHJpbmdbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoaGVybzogQ2hhcmFjdGVyLCBtb25zdGVyOiBDaGFyYWN0ZXIpIHtcclxuICAgIHRoaXMuX2hlcm8gPSBoZXJvO1xyXG4gICAgdGhpcy5fbW9uc3RlciA9IG1vbnN0ZXI7XHJcbiAgICB0aGlzLl90dXJuID0gW11cclxuICB9XHJcblxyXG4gIGdldCBoZXJvKCk6IENoYXJhY3RlciB7XHJcbiAgICByZXR1cm4gdGhpcy5faGVybztcclxuICB9XHJcblxyXG4gIGdldCBtb25zdGVyKCk6IENoYXJhY3RlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbW9uc3RlcjtcclxuICB9XHJcblxyXG4gIGdldCB0dXJuKCk6IHN0cmluZ1tdIHtcclxuICAgIHJldHVybiB0aGlzLl90dXJuO1xyXG4gIH1cclxuXHJcbiAgc2V0IHR1cm4odHVybjogc3RyaW5nW10pIHtcclxuICAgIHRoaXMuX3R1cm4gPSB0dXJuO1xyXG4gIH1cclxuXHJcbiAgLy8gUGVybWV0IGRlIGxhbmNlciBsYSBwYXJ0aWVcclxuICAvLyBEZW1hbmRlIGF1IGpvdWV1ciBzJ2lsIHZldXQgY3LDqWVyIHVuIHBlcnNvbm5hZ2Ugb3Ugbm9uXHJcbiAgcHVibGljIHN0YXRpYyBwbGF5ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IGhlcm9OYW1lID0gYXdhaXQgaW5wdXRSZWFkZXIoJ05hbWUgeW91ciBIZXJvOicpO1xyXG4gICAgbGV0IHdlYXBvbiA9IGF3YWl0IEdhbWUud2VhcG9uQ2hvaWNlKCkgYXMgV2VhcG9uO1xyXG4gICAgbGV0IGhlcm8gPSBuZXcgSGVybyhoZXJvTmFtZSwgd2VhcG9uKTtcclxuICAgIGxldCBtb25zdGVyID0gbmV3IE1vbnN0ZXIoKTtcclxuICAgIHJldHVybiBuZXcgR2FtZShoZXJvLCBtb25zdGVyKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgd2VhcG9uQ2hvaWNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgbGV0IHdlYXBvbiA9IG5ldyBXZWFwb24oKTtcclxuICAgIGxldCBjaG9pY2UgPSBhd2FpdCBpbnB1dFJlYWRlcihcclxuICAgICAgJ0Nob29zZSB5b3VyIHdlYXBvbiA6IFsxXVN3b3JkIC0gWzJdRGFnZ2VyJ1xyXG4gICAgKVxyXG4gICAgY29uc29sZS5sb2coY2hvaWNlKTtcclxuICAgIGlmIChjaG9pY2UgPT09IEpTT04uc3RyaW5naWZ5KDEpKSB7XHJcbiAgICAgIHdlYXBvbiA9IG5ldyBTd29yZCgpO1xyXG4gICAgfSBlbHNlIGlmIChjaG9pY2UgPT09IEpTT04uc3RyaW5naWZ5KDIpKSB7XHJcbiAgICAgIHdlYXBvbiA9IG5ldyBEYWdnZXIoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIEdhbWUud2VhcG9uQ2hvaWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHdlYXBvbjtcclxuICB9O1xyXG59IiwiaW1wb3J0IHsgQ2hhcmFjdGVyIH0gZnJvbSAnLi9jaGFyYWN0ZXInXHJcbmltcG9ydCB7IFdlYXBvbiB9IGZyb20gJy4uL1dlYXBvbnMvd2VhcG9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBIZXJvIGV4dGVuZHMgQ2hhcmFjdGVyIHtcclxuXHJcbiAgLy9Db25zdHJ1Y3RldXJcclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHdlYXBvbjogV2VhcG9uKSB7XHJcbiAgICBzdXBlcihuYW1lLCB3ZWFwb24pO1xyXG4gIH1cclxuXHJcbiAgLy8gUGVybWV0IMOgIHVuIGjDqXJvcyBkZSBzb2lnbmVyIHVuIGRlIHNlcyBhbGxpw6lzXHJcbiAgaGVhbCA9ICgpID0+IHtcclxuICAgIC8vIFRPRE86IGhlYWwgZnVuY3Rpb25cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBXZWFwb24gfSBmcm9tICcuLi9XZWFwb25zL3dlYXBvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyIHtcclxuICAvL1ZhcmlhYmxlcyBkJ2luc3RhbmNlXHJcbiAgX25hbWU6IHN0cmluZztcclxuICBfaHA6IG51bWJlcjtcclxuICBfbWF4SHA6IG51bWJlcjtcclxuICBfZGVmZW5zZTogbnVtYmVyO1xyXG4gIF93ZWFwb246IFdlYXBvbjtcclxuICBfdGFyZ2V0PzogQ2hhcmFjdGVyO1xyXG5cclxuICAvL0NvbnN0cnVjdGV1clxyXG4gIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZyA9IFwiXCIsIHdlYXBvbjogV2VhcG9uID0gbmV3IFdlYXBvbigpKSB7XHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIHRoaXMuX2hwID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwICsgNTApO1xyXG4gICAgdGhpcy5fbWF4SHAgPSB0aGlzLl9ocDtcclxuICAgIHRoaXMuX2RlZmVuc2UgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XHJcbiAgICB0aGlzLl93ZWFwb24gPSB3ZWFwb247XHJcbiAgICB0aGlzLl90YXJnZXQgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICAvL0dldHRlcnMgZXQgc2V0dGVyc1xyXG4gIGdldCBuYW1lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgfVxyXG5cclxuICBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGhwKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hwO1xyXG4gIH1cclxuXHJcbiAgc2V0IGhwKGhwOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2hwID0gaHA7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVmZW5zZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZlbnNlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRlZmVuc2UoZGVmZW5zZTogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9kZWZlbnNlID0gZGVmZW5zZTtcclxuICB9XHJcblxyXG4gIGdldCB3ZWFwb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fd2VhcG9uO1xyXG4gIH1cclxuXHJcbiAgc2V0IHdlYXBvbih3ZWFwb246IFdlYXBvbikge1xyXG4gICAgdGhpcy5fd2VhcG9uID0gd2VhcG9uO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRhcmdldCgpOiBDaGFyYWN0ZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldDtcclxuICB9XHJcblxyXG4gIHNldCB0YXJnZXQodGFyZ2V0OiBDaGFyYWN0ZXIgfCB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcclxuICB9XHJcblxyXG4gIC8vTcOpdGhvZGVzIGQnaW5zdGFuY2VcclxuICAvLyBQZXJtZXQgYXUgcGVyc29ubmFnZSBkJ2F0dGFxdWVyIGxhIGNpYmxlIGFkdmVyc2UgZXQgbHVpIHJldGlyZXIgZGVzIFBWXHJcbiAgYXR0YWNrID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJcIjtcclxuICAgIGlmICh0aGlzLnRhcmdldCkge1xyXG4gICAgICBsZXQgZG1nID0gdGhpcy53ZWFwb24uZGFtYWdlKCkgLSB0aGlzLnRhcmdldC5kZWZlbnNlO1xyXG4gICAgICB0aGlzLnRhcmdldC5ocCAtPSBkbWc7XHJcblxyXG4gICAgICByZXN1bHQgPSBgJHt0aGlzLm5hbWV9IGF0dGFjayAke3RoaXMudGFyZ2V0Lm5hbWV9IGFuZCBkbyAke2RtZ30gcG9pbnRzIG9mIGRhbWFnZSAhICR7dGhpcy50YXJnZXQubmFtZX0gaGFzICR7dGhpcy50YXJnZXQuaHB9IGhwIGxlZnQuYFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFdlYXBvbiB7XHJcbiAgLy9WYXJpYWJsZXMgZCdpbnN0YW5jZVxyXG4gIF9taW5EbWc6IG51bWJlcjtcclxuICBfbWF4RG1nOiBudW1iZXI7XHJcbiAgX2NyaXRpY2FsQ2hhbmNlOiBudW1iZXI7XHJcblxyXG4gIC8vQ29uc3RydWN0ZXVyXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9taW5EbWcgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkgKyAxO1xyXG4gICAgdGhpcy5fbWF4RG1nID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApICsgMTA7XHJcbiAgICB0aGlzLl9jcml0aWNhbENoYW5jZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIwKSArIDE7XHJcbiAgfVxyXG5cclxuICBkYW1hZ2UgPSAoKSA9PiB7XHJcbiAgICBsZXQgZG1nID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHRoaXMuX21heERtZyAtIHRoaXMuX21pbkRtZykpICsgdGhpcy5fbWluRG1nO1xyXG4gICAgbGV0IHJhbmQgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgcmFuZCA8IHRoaXMuX2NyaXRpY2FsQ2hhbmNlICYmIGRtZyAqIDEuNTtcclxuXHJcbiAgICByZXR1cm4gZG1nO1xyXG4gIH1cclxufSIsImltcG9ydCB7IENoYXJhY3RlciB9IGZyb20gJy4vY2hhcmFjdGVyJ1xyXG5pbXBvcnQgeyBXZWFwb24gfSBmcm9tICcuLi9XZWFwb25zL3dlYXBvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgTW9uc3RlciBleHRlbmRzIENoYXJhY3RlciB7XHJcblxyXG4gIC8vQ29uc3RydWN0ZXVyXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fbmFtZSA9IHRoaXMucmFuZG9tTmFtZSgpO1xyXG4gICAgdGhpcy5fd2VhcG9uID0gbmV3IFdlYXBvbigpO1xyXG4gIH1cclxuXHJcbiAgcmFuZG9tTmFtZSA9ICgpID0+IHtcclxuICAgIGxldCBuYW1lID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikucmVwbGFjZSgvW15hLXpdKy9nLCAnJylcclxuICAgIHJldHVybiBuYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cmluZygxKVxyXG4gIH1cclxufSIsImltcG9ydCB7IFdlYXBvbiB9IGZyb20gJy4vd2VhcG9uJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFN3b3JkIGV4dGVuZHMgV2VhcG9uIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9taW5EbWcgKiAyO1xyXG4gIH1cclxufSIsImltcG9ydCB7IFdlYXBvbiB9IGZyb20gJy4vd2VhcG9uJ1xyXG5cclxuZXhwb3J0IGNsYXNzIERhZ2dlciBleHRlbmRzIFdlYXBvbiB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fY3JpdGljYWxDaGFuY2UgKiAxLjU7XHJcbiAgfVxyXG59IiwiaW1wb3J0ICogYXMgcmVhZGxpbmUgZnJvbSAncmVhZGxpbmUnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGlucHV0UmVhZGVyID0gYXN5bmMgKHF1ZXN0aW9uOiBzdHJpbmcpID0+IHtcclxuICBsZXQgcmVzcG9uc2UgPSBcIlwiO1xyXG5cclxuICBjb25zdCBybCA9IHJlYWRsaW5lLmNyZWF0ZUludGVyZmFjZSh7XHJcbiAgICBpbnB1dDogcHJvY2Vzcy5zdGRpbixcclxuICAgIG91dHB1dDogcHJvY2Vzcy5zdGRvdXRcclxuICB9KVxyXG5cclxuICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBybC5xdWVzdGlvbihgJHtxdWVzdGlvbn1gLCAoYW5zd2VyOiBzdHJpbmcpID0+IHtcclxuICAgICAgcmVzb2x2ZShhbnN3ZXIpXHJcbiAgICB9KVxyXG4gIH0pLnRoZW4ob25mdWxsID0+IHtcclxuICAgIHJlc3BvbnNlID0gSlNPTi5zdHJpbmdpZnkob25mdWxsKTtcclxuICAgIHJsLmNsb3NlKCk7XHJcbiAgfSlcclxuXHJcbiAgcmV0dXJuIHJlc3BvbnNlXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFkbGluZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9