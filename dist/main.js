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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: initGame, gameBreak, kill, clientConnect, clientUserInfoChanged, item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initGame\", function() { return initGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameBreak\", function() { return gameBreak; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"kill\", function() { return kill; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clientConnect\", function() { return clientConnect; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clientUserInfoChanged\", function() { return clientUserInfoChanged; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"item\", function() { return item; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n\r\n\r\nconst initGame = (initTime) => {\r\n  return {\r\n    time: initTime,\r\n    eventType: _constants__WEBPACK_IMPORTED_MODULE_0__[\"ACTIONS\"].INIT_GAME\r\n  }\r\n}\r\n\r\nconst gameBreak = (time) => {\r\n  return {\r\n    time,\r\n    eventType: _constants__WEBPACK_IMPORTED_MODULE_0__[\"ACTIONS\"].GAME_BREAK\r\n  }\r\n}\r\n\r\nfunction kill(time, killer, victim) {\r\n  return {\r\n    time,\r\n    eventType: _constants__WEBPACK_IMPORTED_MODULE_0__[\"ACTIONS\"].KILL,\r\n    killer,\r\n    victim\r\n  }\r\n};\r\n\r\nfunction clientConnect(time, player) {\r\n  return {\r\n    time,\r\n    eventType: _constants__WEBPACK_IMPORTED_MODULE_0__[\"ACTIONS\"].CLIENT_CONNECT,\r\n    player\r\n  }\r\n};\r\n\r\nfunction clientUserInfoChanged(time, player, change) {\r\n  return {\r\n    time,\r\n    eventType: _constants__WEBPACK_IMPORTED_MODULE_0__[\"ACTIONS\"].CLIENT_USER_INFO_CHANGED,\r\n    player,\r\n    change\r\n  }\r\n};\r\n\r\nfunction item(time, player, item) {\r\n  return {\r\n    time,\r\n    eventType: _constants__WEBPACK_IMPORTED_MODULE_0__[\"ACTIONS\"].ITEM,\r\n    player,\r\n    item\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/actions/index.js?");

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: ACTIONS, EXPIRE_TIME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ACTIONS\", function() { return ACTIONS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EXPIRE_TIME\", function() { return EXPIRE_TIME; });\nconst ACTIONS = {\r\n  INIT_GAME:  'InitGame',\r\n  GAME_BREAK: 'GameBreak',\r\n  SHUTDOWN_GAME: 'ShutdownGame',\r\n  KILL: 'Kill',\r\n  CLIENT_CONNECT: 'ClientConnect',\r\n  CLIENT_USER_INFO_CHANGED: 'ClientUserInfoChanged',\r\n  ITEM: 'Item'\r\n}\r\n\r\nconst EXPIRE_TIME = 180;\r\n\n\n//# sourceURL=webpack:///./src/constants/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parser */ \"./src/parser/index.js\");\n\r\nconst values = document.getElementById('log').value;\r\n\r\nconst game = new _parser__WEBPACK_IMPORTED_MODULE_0__[\"default\"](values);\r\ngame.runLog();\r\n\r\ngame.printGames()\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/parser/index.js":
/*!*****************************!*\
  !*** ./src/parser/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return parser; });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ \"./src/actions/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ \"./src/utils/index.js\");\n\r\n\r\n\r\n\r\nclass parser {\r\n  constructor(rawLog) {\r\n    this.games = [];\r\n    this.events = [],\r\n    this.rawLog = rawLog;\r\n    this.gameIndex = -1;\r\n  };\r\n\r\n  logReader(log) {\r\n    const [time, eventType] = log;\r\n    switch (eventType) {\r\n      case 'InitGame:':\r\n        this.initGame(time);\r\n        break;\r\n      case 'Kill:':\r\n        this.kill(log);\r\n        break;\r\n      case 'ClientConnect:':\r\n        this.clientConnect(log);\r\n        break;\r\n      case 'ClientDisconnect:':\r\n        this.clientDisconnect(log);\r\n        break;\r\n      case 'ClientUserinfoChanged:':\r\n        this.clientUserInfoChanged(log);\r\n        break;\r\n      case 'Item:':\r\n        this.item(log);\r\n        break;\r\n      case 'ShutdownGame:':\r\n        this.gameBreak(time);\r\n      case '------------------------------------------------------------':\r\n        this.gameBreak(time)\r\n        break;\r\n      default: \r\n        return;\r\n    }\r\n  };\r\n\r\n  dispatchAction(payload) { this.events.push(payload) };\r\n\r\n  getPlayer(playerCode) {\r\n    const { games, gameIndex } = this;\r\n    return games[gameIndex].players[playerCode];\r\n  }\r\n\r\n  gameBreak(time) {\r\n    const lastEvent = this.events[this.events.length-1];\r\n    if(lastEvent &&lastEvent.eventType !== _constants__WEBPACK_IMPORTED_MODULE_1__[\"ACTIONS\"].GAME_BREAK) {\r\n      this.dispatchAction(_actions__WEBPACK_IMPORTED_MODULE_0__[\"gameBreak\"](time));\r\n      if(this.games.length > 0) {\r\n        this.games[this.gameIndex].finishTime = time;\r\n      }\r\n    }\r\n  }\r\n\r\n  initGame(initTime) {\r\n    const lastEvent = this.events[this.events.length-1];\r\n    const newGame = {\r\n      initTime,\r\n      players: { \r\n        1022: {\r\n          name: '<world>',\r\n          code: 1022,\r\n          inventory: []\r\n        },\r\n      },\r\n    };\r\n    if(lastEvent) {\r\n      this.gameBreak(lastEvent.time)\r\n    }\r\n    this.dispatchAction(_actions__WEBPACK_IMPORTED_MODULE_0__[\"initGame\"](initTime));\r\n    this.games[initTime === '0:00' ? ++this.gameIndex : this.gameIndex] = newGame;\r\n  };\r\n\r\n  clientUserInfoChanged([time, _, player, change]) {\r\n    const { games, gameIndex } = this;\r\n    const parsedName = change.split('\\\\')[1];\r\n\r\n    this.dispatchAction(_actions__WEBPACK_IMPORTED_MODULE_0__[\"clientUserInfoChanged\"](time, player, parsedName));\r\n    this.getPlayer(player).name = parsedName;\r\n  }\r\n\r\n  clientConnect([time, _, player]) {\r\n    const { games, gameIndex } = this;\r\n    this.dispatchAction(_actions__WEBPACK_IMPORTED_MODULE_0__[\"clientConnect\"](time, player));\r\n\r\n    games[gameIndex].players[player] = {\r\n      name: '',\r\n      code: player,\r\n      inventory: []\r\n    };\r\n  }\r\n\r\n  clientDisconnect([time, _, player]) {\r\n    const {games, gameIndex} = this;\r\n    delete games[gameIndex].players[player];\r\n  }\r\n\r\n  kill([time, _, killer, victim, ]) {\r\n    this.dispatchAction(_actions__WEBPACK_IMPORTED_MODULE_0__[\"kill\"](time, killer, victim));\r\n  };\r\n\r\n  item([time, _, player, item]) {\r\n    this.dispatchAction(_actions__WEBPACK_IMPORTED_MODULE_0__[\"item\"](time, player, item));\r\n  \r\n    this.getPlayer(player).inventory.push({\r\n      item,\r\n      expires: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"getExpireTime\"])(time)\r\n    });\r\n  }\r\n\r\n  runLog() {\r\n    const logs = this.rawLog.split('\\n').map(line => line.trim().split(' '));\r\n    logs.forEach(log => {\r\n      this.logReader(log);\r\n    });\r\n  };\r\n\r\n  printGames() {\r\n    const { games } = this;\r\n    games.forEach((game, i) => {\r\n      const { players } = game;\r\n      const { initTime, finishTime } = game;\r\n      const playersCodes  = Object.keys(players);\r\n      const quantityOfPlayers = playersCodes.length - 1;\r\n      const playersNames = playersCodes.map(player => {\r\n        return players[player].name\r\n      })\r\n      const playersAtTheEnd = playersNames.filter(player => player !== '<world>');\r\n      const itemsForPlayers = {};\r\n\r\n      Object.keys(players).forEach(player => {\r\n        itemsForPlayers[player] = [];\r\n        players[player].inventory.forEach(item => {\r\n          if (Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"isExpired\"])(item.expires, finishTime)) {\r\n            itemsForPlayers[player][item.item] = (itemsForPlayers[player][item.item] || 0) + 1;\r\n          }\r\n        }); \r\n      });\r\n\r\n      console.log(`The game ${i+1} started at ${initTime} and ended at ${finishTime} with ${quantityOfPlayers} player(s)`);\r\n      if (quantityOfPlayers > 0) {\r\n        console.log(`They were ${playersAtTheEnd.join(', ')}`)\r\n        playersCodes.forEach(player => {\r\n          if (player == 1022) {\r\n            return;\r\n          }\r\n          if (Object.keys(itemsForPlayers[player]).length === 0) {\r\n            console.log(`${players[player].name} ended up with nothing`);\r\n            return;\r\n          }\r\n          const inventory = Object.keys(itemsForPlayers[player]).map(key => `${itemsForPlayers[player][key]} ${key}`);\r\n          console.log(`${players[player].name} ended up with ${inventory.join(', ')}`);\r\n        })\r\n      };\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/parser/index.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: secondsHandler, getTimeInMinutesAndSeconds, getTimeInSeconds, getExpireTime, isExpired */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"secondsHandler\", function() { return secondsHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTimeInMinutesAndSeconds\", function() { return getTimeInMinutesAndSeconds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTimeInSeconds\", function() { return getTimeInSeconds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getExpireTime\", function() { return getExpireTime; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isExpired\", function() { return isExpired; });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.js\");\n\r\nconst secondsHandler = (seconds) => seconds >= 10 ? seconds : `0${seconds}`\r\n\r\nfunction getTimeInMinutesAndSeconds(time) {\r\n  const minutes = Math.floor(time / 60);\r\n  const seconds = time % 60;\r\n\r\n  return `${minutes}:${secondsHandler(seconds)}`;\r\n};\r\n\r\nfunction getTimeInSeconds(time) {\r\n  const [ minutes, seconds ] = time.split(':');\r\n  return minutes * 60 + parseInt(seconds);\r\n};\r\n\r\nfunction getExpireTime(time) {\r\n  const [ minutes, seconds ] = time.split(':');\r\n  const expires = minutes * 60 + parseInt(seconds) + _constants__WEBPACK_IMPORTED_MODULE_0__[\"EXPIRE_TIME\"];\r\n  const expireMinutes = Math.floor(expires / 60);\r\n  const expireSeconds = secondsHandler(expires % 60);\r\n\r\n  return `${expireMinutes}:${expireSeconds}`\r\n};\r\n\r\nfunction isExpired(expireTime, time) {\r\n  return getTimeInSeconds(expireTime) < getTimeInSeconds(time);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ })

/******/ });