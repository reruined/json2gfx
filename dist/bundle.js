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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./content recursive \\.(js|json|vert|frag|png|jpg)$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./models/forest.json": "./content/models/forest.json",
	"./models/grassWall.json": "./content/models/grassWall.json",
	"./models/terrain.json": "./content/models/terrain.json",
	"./models/test2.json": "./content/models/test2.json",
	"./models/tree.json": "./content/models/tree.json",
	"./models/weird-canyon3.json": "./content/models/weird-canyon3.json",
	"./procedural/Cube.js": "./content/procedural/Cube.js",
	"./procedural/Grass.js": "./content/procedural/Grass.js",
	"./procedural/Grid.js": "./content/procedural/Grid.js",
	"./procedural/Quad.js": "./content/procedural/Quad.js",
	"./procedural/Terrain.js": "./content/procedural/Terrain.js",
	"./procedural/Triangle.js": "./content/procedural/Triangle.js",
	"./procedural/TurningTorso.js": "./content/procedural/TurningTorso.js",
	"./shaders/ambient.frag": "./content/shaders/ambient.frag",
	"./shaders/ambient.vert": "./content/shaders/ambient.vert",
	"./shaders/debug-uv.frag": "./content/shaders/debug-uv.frag",
	"./shaders/debug-uv.vert": "./content/shaders/debug-uv.vert",
	"./shaders/pointlight.frag": "./content/shaders/pointlight.frag",
	"./shaders/pointlight.vert": "./content/shaders/pointlight.vert",
	"./shaders/shadow.frag": "./content/shaders/shadow.frag",
	"./shaders/shadow.vert": "./content/shaders/shadow.vert",
	"./shaders/sunlight-terrain.frag": "./content/shaders/sunlight-terrain.frag",
	"./shaders/sunlight-terrain.vert": "./content/shaders/sunlight-terrain.vert",
	"./shaders/sunlight.frag": "./content/shaders/sunlight.frag",
	"./shaders/sunlight.vert": "./content/shaders/sunlight.vert",
	"./shaders/terrain.frag": "./content/shaders/terrain.frag",
	"./shaders/terrain.vert": "./content/shaders/terrain.vert"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./content recursive \\.(js|json|vert|frag|png|jpg)$";

/***/ }),

/***/ "./content/models/forest.json":
/***/ (function(module, exports) {

module.exports = {"tinyGrassMesh":{"function":"Grass","params":{"origin":[0,-1,0]}},"mediumGrassGeometry":{"shapes":{"template":{"shape":"cube"},"position":{"min":[-1.5,0.5,-1.5],"max":[1.5,0.5,1.5]},"orientation":{"min":[0,-180,0],"max":[0,180,0]},"scale":{"min":[0.2,1,0],"max":[0.2,9,0]},"count":45,"seed":0}},"treeMesh":{"function":"TurningTorso","params":{"origin":[0,0,0],"scale":[0.9,0.9,0.9],"segments":30,"twist":5,"shrink":0.15,"height":8}},"floor":{"shadow":false,"orientation":[0,0,0],"albedo":"#B86A22","mesh":{"function":"Quad","params":{"position":[0,-0.001,0],"orientation":[-90,0,0],"scale":[75,50,1]}}},"tinyGrassField":{"parent":"@floor","children":{"template":{"albedo":"#E9842C","mesh":"@tinyGrassMesh"},"position":{"min":[-75,0,-50],"max":[75,0,50]},"orientation":{"min":[0,-180,0],"max":[0,180,0]},"scale":{"min":[0.2,0.1,0.2],"max":[1,0.3,1]},"count":4000}},"mediumGrassField":{"parent":"@floor","children":{"template":{"albedo":"sandybrown","geometry":"@mediumGrassGeometry"},"position":{"min":[-75,0,-50],"max":[75,0,50]},"orientation":{"min":[0,-45,0],"max":[0,45,0]},"count":50,"seed":1211}},"treeField":{"parent":"@floor","children":{"template":{"albedo":"brown","mesh":"@treeMesh"},"position":{"min":[-75,0,-50],"max":[75,0,50]},"orientation":{"min":[-5,-180,-5],"max":[5,180,5]},"scale":{"min":[0.9,0.5,0.9],"max":[1.1,1.2,1.1]},"count":50,"seed":1211}},"sun":{"light":{"type":"directional","color":"white","intensity":0.5,"direction":[1,-1,-0.8]}},"camera":{"fov":90,"near":0.1,"far":100,"position":[4,10,50],"lookat":[6,2.8,0],"clearColor":"skyblue"}}

/***/ }),

/***/ "./content/models/grassWall.json":
/***/ (function(module, exports) {

module.exports = {"floorGeometry":{"shapes":[{"shape":"quad","orientation":[-90,0,0],"scale":[62,62,1]}]},"thinGrassGeometry":{"shapes":{"template":{"shape":"cube"},"position":{"min":[-5.5,0.5,-5.5],"max":[5.5,0.5,5.5]},"orientation":{"min":[-5,-25,-5],"max":[5,25,5]},"scale":{"min":[0.1,1,0],"max":[0.15,1,0]},"count":20,"seed":0}},"mediumGrassGeometry":{"shapes":{"template":{"shape":"cube"},"position":{"min":[-3,0.5,-3],"max":[3,0.5,3]},"orientation":{"min":[-5,-25,-5],"max":[5,25,5]},"scale":{"min":[0.7,1,0],"max":[0.8,1,0]},"count":10,"seed":0}},"smallGrassGeometry":{"shapes":{"template":{"shape":"cube"},"position":{"min":[-3,0.5,-3],"max":[3,0.5,3]},"orientation":{"min":[-5,-25,-5],"max":[5,25,5]},"scale":{"min":[0.7,1,0],"max":[0.8,1,0]},"count":15,"seed":0}},"floor":{"shadow":false,"geometry":"@floorGeometry","albedo":"#B86A22","position":[0,-0.01,0]},"tallGrass":{"parent":"@floor","position":[0,0,0],"orientation":[0,0,0],"children":{"template":{"shadow":false,"albedo":"#E9842C","geometry":"@thinGrassGeometry"},"position":{"min":[-30,0,-30],"max":[30,0,0]},"orientation":{"min":[-1,-45,-1],"max":[1,45,1]},"scale":{"min":[1,5,1],"max":[1,10,1]},"count":160,"seed":502}},"mediumGrass":{"parent":"@floor","position":[0,0,0],"orientation":[0,0,0],"children":{"template":{"shadow":false,"albedo":"#775BD4","geometry":"@mediumGrassGeometry"},"position":{"min":[-30,0,-5],"max":[30,0,20]},"orientation":{"min":[-1,-45,-1],"max":[1,45,1]},"scale":{"min":[1,3,1],"max":[1,5,1]},"count":160,"seed":882}},"smallGrass":{"parent":"@floor","position":[0,0,0],"orientation":[0,0,0],"children":{"template":{"shadow":true,"albedo":"tomato","geometry":"@smallGrassGeometry"},"position":{"min":[-30,0,20],"max":[30,0,30]},"orientation":{"min":[-1,-45,-1],"max":[1,45,1]},"scale":{"min":[1,1,1],"max":[1,2,1]},"count":260,"seed":82678}},"sun":{"light":{"type":"directional","color":"white","intensity":0.5,"direction":[1,-1,-0.8]}},"camera":{"fov":120,"near":0.1,"far":100,"position":[-10,20,40],"lookat":[-5,0,0]}}

/***/ }),

/***/ "./content/models/terrain.json":
/***/ (function(module, exports) {

module.exports = {"terrainMesh":{"function":"Cube","params":{}},"terrainMesh2":{"function":"Terrain","params":{"orientation":[-90,0,0],"position":[0,1,0],"scale":[1.2,1.2,1]}},"terrain":{"shadow":false,"shaderProgram":"terrain","mesh":"@terrainMesh","position":[0,0,-7]},"terrain2":{"shadow":false,"shaderProgram":"terrain","mesh":"@terrainMesh2"},"sun":{"shaderProgram":"sunlight-terrain","light":{"type":"directional","color":"white","intensity":0.5,"direction":[1,-1,-0.8]}},"camera":{"fov":70,"near":0.1,"far":100,"position":[-0.5,3,2],"lookat":[0,1,0]}}

/***/ }),

/***/ "./content/models/test2.json":
/***/ (function(module, exports) {

module.exports = {"floorGeometry":{"shapes":[{"shape":"quad","orientation":[-90,0,0],"scale":[62,62,1]}]},"grassClusterGeometry":{"shapes":{"template":{"shape":"cube"},"position":{"min":[-1,0.5,-1],"max":[1,0.5,1]},"orientation":{"min":[0,-25,0],"max":[0,25,0]},"scale":{"min":[1,1,0],"max":[1,1,0]},"count":15,"seed":0}},"boxGeometry":{"shapes":[{"shape":"cube"}]},"floor":{"shadow":false,"geometry":"@floorGeometry","albedo":"#B86A22","position":[0,-0.01,0]},"brownGrass":{"parent":"@floor","position":[0,0,0],"orientation":[0,0,0],"children":{"template":{"albedo":"#E9842C","geometry":"@grassClusterGeometry"},"position":{"min":[-30,0,-30],"max":[30,0,30]},"orientation":{"min":[0,-90,0],"max":[0,90,0]},"scale":{"min":[1,1,1],"max":[1,1,1]},"count":160,"seed":502}},"purpleGrass":{"parent":"@floor","position":[0,0,0],"orientation":[0,90,0],"children":{"template":{"albedo":"#775BD4","geometry":"@grassClusterGeometry"},"position":{"min":[-30,0,-30],"max":[30,0,30]},"orientation":{"min":[0,-90,0],"max":[0,90,0]},"scale":{"min":[1,1,1],"max":[1,1,1]},"count":80,"seed":502}},"sun":{"light":{"type":"directional","color":"white","intensity":0.5,"direction":[1,-1,-0.8]}},"camera":{"fov":90,"near":0.1,"far":100,"position":[0,20,40],"lookat":[0,0,0]}}

/***/ }),

/***/ "./content/models/tree.json":
/***/ (function(module, exports) {

module.exports = {"floorGeometry":{"shapes":[{"shape":"quad","scale":[4,4,1],"orientation":[-90,0,0],"position":[0,-0.01,0]}]},"floor1":{"shadow":false,"position":[-7,0,-10],"geometry":"@floorGeometry"},"tree1":{"parent":"@floor1","geometry":{"shapes":[{"shape":"cube","position":[0,0.5,0]},{"shape":"cube","position":[0,1.5,0],"orientation":[0,15,0],"scale":[0.8,0.8,0.8]},{"shape":"cube","position":[0,2.5,0],"orientation":[0,30,0],"scale":[0.6,0.6,0.6]},{"shape":"cube","position":[0,3.5,0],"orientation":[0,45,0],"scale":[0.4,0.4,0.4]}]}},"floor2":{"shadow":false,"albedo":"darkred","geometry":"@floorGeometry"},"proceduralTree":{"shadow":true,"mesh":{"function":"TurningTorso","params":{"origin":[0,0,0],"scale":[0.9,0.9,0.9],"segments":20,"twist":5,"shrink":0.04,"height":5}}},"sun":{"light":{"type":"directional","color":"white","intensity":0.5,"direction":[1,-1,-0.8]}},"camera":{"fov":35,"near":0.1,"far":100,"position":[0.5,17,17],"lookat":[0,8,0]}}

/***/ }),

/***/ "./content/models/weird-canyon3.json":
/***/ (function(module, exports) {

module.exports = {"geometries":{"test":{"shape":"triangle","albedo":"./sand.jpg","position":[0,0.5,0],"scale":1},"test2":{"shape":"quad","albedo":"./fist.jpg","position":[0,1,0],"scale":2,"uvScale":2},"ground":{"shape":"quad","albedo":"./sand2.jpg","orientation":[-90,0,0],"scale":400,"uvScale":100},"road":{"shape":"plane","albedo":"navajowhite","orientation":[-90,0,0],"scale":[2,0,200]},"cliff1":{"shape":"cube","albedo":"white","position":[0,1.5,0],"scale":[1,3,1]},"cliff2":{"shape":"cube","albedo":"sandybrown","scale":[5,10,1],"position":[0,5,0]},"rock":{"shape":"cube","albedo":"navajowhite","scale":[0.2,0.2,0.2],"position":[0,0.1,0]},"bigrock":{"shape":"cube","albedo":"navajowhite","scale":[0.8,0.5,0.8],"position":[0,0.15,0]}},"templates":{"rock":{"shadow":false,"geometry":"@geometries.rock"},"bigrock":{"shadow":false,"geometry":"@geometries.bigrock"}},"scene":{"test":{"geometry":"@geometries.test","position":[-3,0,8],"orientation":[0,-80,0]},"test2":{"geometry":"@geometries.test2","position":[-4,0,2],"orientation":[-3.5,-90,0]},"ground":{"shadow":false,"geometry":"@geometries.ground","position":[0,0,0],"children":{"camera":{"position":[-6,2,10],"lookAt":[2,1,0],"projection":"perspective","fov":80,"near":0.1,"far":100},"road":{"geometry":"@geometries.road","position":[-5,0.01,0],"shadow":false},"cliff1":{"geometry":"@geometries.cliff1","position":[-1,0,7],"shadow":true},"cliff2":{"shadow":true,"geometry":"@geometries.cliff2","position":[10,0,-15]},"rocks-left":{"generator":{"template":"@templates.rock","min":{"position":[-30,0,-200],"orientation":[0,0,0]},"max":{"position":[-6.3,0,50],"orientation":[270,270,270]},"count":1000,"seed":9729}},"rocks-right":{"generator":{"template":"@templates.rock","min":{"position":[-4,0,-200],"orientation":[0,0,0]},"max":{"position":[50,0,50],"orientation":[270,270,270]},"count":2000,"seed":8294}},"bigrocks-right":{"generator":{"template":"@templates.bigrock","min":{"position":[-4,0,-200],"orientation":[0,0,0]},"max":{"position":[50,0,50],"orientation":[270,270,270]},"count":500,"seed":2226}},"sun":{"light":{"type":"directional","color":"white","intensity":0.5,"direction":[1,-1,0.4]}}}}},"export":"@scene","camera":"@scene.ground.children.camera","backColor":"skyblue"}

/***/ }),

/***/ "./content/procedural/Cube.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_MathUtils_js__ = __webpack_require__("./src/MathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Mesh_js__ = __webpack_require__("./src/Mesh.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Mat3_js__ = __webpack_require__("./src/Mat3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__ = __webpack_require__("./src/Vec3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Quad_js__ = __webpack_require__("./content/procedural/Quad.js");






/* harmony default export */ __webpack_exports__["default"] = (function (params) {
    const {
        origin = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero(),
        position = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero(),
        orientation = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero(),
        scale = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].one()
    } = params;

    const mesh = __WEBPACK_IMPORTED_MODULE_1__src_Mesh_js__["a" /* default */].merge(
        Object(__WEBPACK_IMPORTED_MODULE_4__Quad_js__["default"])({
            position: [0, 0, 1],
            orientation: [0, 0, 0]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_4__Quad_js__["default"])({
            position: [1, 0, 0],
            orientation: [0, 90, 0]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_4__Quad_js__["default"])({
            position: [0, 0, -1],
            orientation: [0, 180, 0]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_4__Quad_js__["default"])({
            position: [-1, 0, 0],
            orientation: [0, -90, 0]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_4__Quad_js__["default"])({
            position: [0, 1, 0],
            orientation: [-90, 0, 0]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_4__Quad_js__["default"])({
            position: [0, -1, 0],
            orientation: [90, 0, 0]
        })
    );

    __WEBPACK_IMPORTED_MODULE_1__src_Mesh_js__["a" /* default */].applyScale(mesh, scale);
    __WEBPACK_IMPORTED_MODULE_1__src_Mesh_js__["a" /* default */].applyRotation(mesh, __WEBPACK_IMPORTED_MODULE_2__src_Mat3_js__["a" /* default */].fromEulerAngles(orientation.map(__WEBPACK_IMPORTED_MODULE_0__src_MathUtils_js__["a" /* default */].degToRad)));
    __WEBPACK_IMPORTED_MODULE_1__src_Mesh_js__["a" /* default */].applyTranslation(mesh, position);
    __WEBPACK_IMPORTED_MODULE_1__src_Mesh_js__["a" /* default */].applyOrigin(mesh, origin);
    __WEBPACK_IMPORTED_MODULE_1__src_Mesh_js__["a" /* default */].calculateNormals(mesh);

    return mesh;
});


/***/ }),

/***/ "./content/procedural/Grass.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ArrayUtils_js__ = __webpack_require__("./src/ArrayUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_MathUtils_js__ = __webpack_require__("./src/MathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__ = __webpack_require__("./src/Mesh.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__ = __webpack_require__("./src/Vec3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Mat3_js__ = __webpack_require__("./src/Mat3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Triangle_js__ = __webpack_require__("./content/procedural/Triangle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Quad_js__ = __webpack_require__("./content/procedural/Quad.js");








/* harmony default export */ __webpack_exports__["default"] = (function (params) {
    const {
        origin = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero(),
        position = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero(),
        orientation = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero(),
        scale = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].one(),
    } = params;

    let mesh = __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].merge(
        TwoSidedTriangle(),
        TwoSidedTriangle({ orientation: [0, 45, 0] }),
        TwoSidedTriangle({ orientation: [0, 90, 0] }),
        TwoSidedTriangle({ orientation: [0, 135, 0] })
    );

    __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].applyScale(mesh, scale);
    __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].applyRotation(mesh, __WEBPACK_IMPORTED_MODULE_4__src_Mat3_js__["a" /* default */].fromEulerAngles(orientation.map(__WEBPACK_IMPORTED_MODULE_1__src_MathUtils_js__["a" /* default */].degToRad)));
    __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].applyTranslation(mesh, position);
    __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].applyOrigin(mesh, origin);

    return mesh;
});;

function TwoSidedTriangle(params = {}) {
    const {
        origin = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero(),
        position = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero(),
        orientation = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero(),
        scale = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].one(),
    } = params;

    const mesh = __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].merge(
        Object(__WEBPACK_IMPORTED_MODULE_5__Triangle_js__["default"])(),
        Object(__WEBPACK_IMPORTED_MODULE_5__Triangle_js__["default"])({ orientation: [0, 180, 0] })
    );

    __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].applyScale(mesh, scale);
    __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].applyRotation(mesh, __WEBPACK_IMPORTED_MODULE_4__src_Mat3_js__["a" /* default */].fromEulerAngles(orientation.map(__WEBPACK_IMPORTED_MODULE_1__src_MathUtils_js__["a" /* default */].degToRad)));
    __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].applyTranslation(mesh, position);
    __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].applyOrigin(mesh, origin);

    return mesh;
}


/***/ }),

/***/ "./content/procedural/Grid.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_MathUtils_js__ = __webpack_require__("./src/MathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__ = __webpack_require__("./src/Vec3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Mat3_js__ = __webpack_require__("./src/Mat3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__ = __webpack_require__("./src/Mesh.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Quad_js__ = __webpack_require__("./content/procedural/Quad.js");






const POSITIONS = Object.freeze([
    [-1, -1, 0],
    [1, -1, 0],
    [1, 1, 0],

    [1, 1, 0],
    [-1, 1, 0],
    [-1, -1, 0],
]);

const NORMALS = Object.freeze([
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],

    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
]);

/* harmony default export */ __webpack_exports__["default"] = (function (params) {
    const {
        scale = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].one(),
        origin = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].zero(),
        orientation = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].zero(),
        position = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].zero(),
        cells = 20
    } = params || {};

    const halfGridSize = 1.0;
    const halfCellSize = halfGridSize / cells;
    const cellSize = halfCellSize * 2.0;
    const startPos = [-halfGridSize + halfCellSize, -halfGridSize + halfCellSize, 0];

    const meshes = [];
    for(let x = 0; x < cells; x++) {
        for(let y = 0; y < cells; y++) {
            meshes.push(Object(__WEBPACK_IMPORTED_MODULE_4__Quad_js__["default"])({
                scale: [halfCellSize, halfCellSize, 1],
                position: __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].add(startPos, [cellSize * x, cellSize * y, 0])
            }));
        }
    }

    const mesh = __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].merge(...meshes);

    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].applyScale(mesh, scale);
    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].applyRotation(mesh, __WEBPACK_IMPORTED_MODULE_2__src_Mat3_js__["a" /* default */].fromEulerAngles(orientation.map(__WEBPACK_IMPORTED_MODULE_0__src_MathUtils_js__["a" /* default */].degToRad)));
    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].applyTranslation(mesh, position);
    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].applyOrigin(mesh, origin);

    return mesh;
});


/***/ }),

/***/ "./content/procedural/Quad.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_MathUtils_js__ = __webpack_require__("./src/MathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__ = __webpack_require__("./src/Vec3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Mat3_js__ = __webpack_require__("./src/Mat3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__ = __webpack_require__("./src/Mesh.js");





const POSITIONS = Object.freeze([
    [-1, -1, 0],
    [1, -1, 0],
    [1, 1, 0],

    [1, 1, 0],
    [-1, 1, 0],
    [-1, -1, 0],
]);

const NORMALS = Object.freeze([
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],

    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
]);

/* harmony default export */ __webpack_exports__["default"] = (function (params) {
    const {
        scale = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].one(),
        origin = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].zero(),
        orientation = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].zero(),
        position = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].zero(),
    } = params || {};

    const mesh = {
        positions: POSITIONS,
        normals: NORMALS,
        mode: 'TRIANGLES'
    };

    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].applyScale(mesh, scale);
    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].applyRotation(mesh, __WEBPACK_IMPORTED_MODULE_2__src_Mat3_js__["a" /* default */].fromEulerAngles(orientation.map(__WEBPACK_IMPORTED_MODULE_0__src_MathUtils_js__["a" /* default */].degToRad)));
    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].applyTranslation(mesh, position);
    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].applyOrigin(mesh, origin);

    return mesh;
});


/***/ }),

/***/ "./content/procedural/Terrain.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_MathUtils_js__ = __webpack_require__("./src/MathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__ = __webpack_require__("./src/Vec3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Mat3_js__ = __webpack_require__("./src/Mat3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__ = __webpack_require__("./src/Mesh.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Grid_js__ = __webpack_require__("./content/procedural/Grid.js");






const POSITIONS = Object.freeze([
    [-1, -1, 0],
    [1, -1, 0],
    [1, 1, 0],

    [1, 1, 0],
    [-1, 1, 0],
    [-1, -1, 0],
]);

const NORMALS = Object.freeze([
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],

    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
]);

/* harmony default export */ __webpack_exports__["default"] = (function (params) {
    const {
        scale = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].one(),
        origin = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].zero(),
        orientation = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].zero(),
        position = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].zero(),
    } = params || {};

    const mesh = Object(__WEBPACK_IMPORTED_MODULE_4__Grid_js__["default"])();

    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].applyScale(mesh, scale);
    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].applyRotation(mesh, __WEBPACK_IMPORTED_MODULE_2__src_Mat3_js__["a" /* default */].fromEulerAngles(orientation.map(__WEBPACK_IMPORTED_MODULE_0__src_MathUtils_js__["a" /* default */].degToRad)));
    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].applyTranslation(mesh, position);
    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].applyOrigin(mesh, origin);

    mesh.positions = mesh.positions.map(position => {
        position = __WEBPACK_IMPORTED_MODULE_1__src_Vec3_js__["a" /* default */].clone(position);
        position[1] *= Math.sin(((__WEBPACK_IMPORTED_MODULE_0__src_MathUtils_js__["a" /* default */].clamp(position[0], -1.0, 1.0) + 1.0) / 2.0) * Math.PI);
        position[1] *= Math.sin(((__WEBPACK_IMPORTED_MODULE_0__src_MathUtils_js__["a" /* default */].clamp(position[2], -1.0, 1.0) + 1.0) / 2.0) * Math.PI);
        position[1] = 1.0 - position[1] * 1.9;

        return position;
    });

    __WEBPACK_IMPORTED_MODULE_3__src_Mesh_js__["a" /* default */].calculateNormals(mesh);

    return mesh;
});


/***/ }),

/***/ "./content/procedural/Triangle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ArrayUtils_js__ = __webpack_require__("./src/ArrayUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_MathUtils_js__ = __webpack_require__("./src/MathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__ = __webpack_require__("./src/Vec3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Mat3_js__ = __webpack_require__("./src/Mat3.js");





const POSITIONS = Object.freeze([
    [0, 1, 0],
    [-1, -1, 0],
    [1, -1, 0],
]);

const NORMALS = Object.freeze([
    [0, 0, 1],
    [0, 0, 1],
    [0, 0, 1],
]);

/* harmony default export */ __webpack_exports__["default"] = (function (params) {
    const {
        scale = __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].one(),
        origin = __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].zero(),
        orientation = __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].zero(),
        position = __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].zero(),
    } = params || {};

    const orientationInRadians = orientation.map(__WEBPACK_IMPORTED_MODULE_1__src_MathUtils_js__["a" /* default */].degToRad);

    const rotationMatrix = __WEBPACK_IMPORTED_MODULE_3__src_Mat3_js__["a" /* default */].fromEulerAngles(orientationInRadians);
    const originLocalPositions = POSITIONS
        .map(v => __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].multiply(v, scale))
        .map(v => __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].transform(v, rotationMatrix))
        .map(v => __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].add(v, position));

    const extents = calculateExtents(originLocalPositions);
    const unnormalizedOrigin = __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].multiply(origin, extents);
    const positions = originLocalPositions.map(v => __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].scaleAndAdd(v, unnormalizedOrigin, -0.5));
    const normals = NORMALS.map(v => __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].transform(v, rotationMatrix));

    return {
        positions,
        normals,
        mode: 'TRIANGLES'
    };
});

function calculateExtents(points) {
    const min = points.reduce((result, point) => __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].min(result, point), __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].largest());
    const max = points.reduce((result, point) => __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].max(result, point), __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].smallest());
    return __WEBPACK_IMPORTED_MODULE_2__src_Vec3_js__["a" /* default */].sub(max, min);
}


/***/ }),

/***/ "./content/procedural/TurningTorso.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_ArrayUtils_js__ = __webpack_require__("./src/ArrayUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_MathUtils_js__ = __webpack_require__("./src/MathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__ = __webpack_require__("./src/Mesh.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__ = __webpack_require__("./src/Vec3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_Mat3_js__ = __webpack_require__("./src/Mat3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Cube_js__ = __webpack_require__("./content/procedural/Cube.js");







/* harmony default export */ __webpack_exports__["default"] = (function (params) {
    const {
        origin = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero(),
        position = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero(),
        orientation = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero(),
        scale = __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].one(),

        segments = 20,
        twist = 5,
        shrink = 0.04,
        height = 5
    } = params;

    const meshes = [];
    __WEBPACK_IMPORTED_MODULE_0__src_ArrayUtils_js__["a" /* default */].range(segments).forEach(i => {
        const totalSize = meshes.length > 0 ?
            __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].getExtents(__WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].merge(...meshes)) :
            __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].zero();

        meshes.push(Object(__WEBPACK_IMPORTED_MODULE_5__Cube_js__["default"])({
            origin: [0, -1, 0],
            position: [0, totalSize[1], 0],
            orientation: [0, twist * i, 0],
            scale: [1 / (shrink * i + 1), height / segments, 1 / (shrink * i + 1)]
        }));

    });


    let mesh = __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].merge(...meshes);
    mesh.positions = mesh.positions.map(pos => {
        return __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].transform(pos, __WEBPACK_IMPORTED_MODULE_4__src_Mat3_js__["a" /* default */].fromEulerAngles([0, __WEBPACK_IMPORTED_MODULE_1__src_MathUtils_js__["a" /* default */].degToRad(twist * pos[1]), 0]));
    });
    mesh.normals = mesh.normals.map((normal, i) => {
        return __WEBPACK_IMPORTED_MODULE_3__src_Vec3_js__["a" /* default */].transform(normal, __WEBPACK_IMPORTED_MODULE_4__src_Mat3_js__["a" /* default */].fromEulerAngles([0, __WEBPACK_IMPORTED_MODULE_1__src_MathUtils_js__["a" /* default */].degToRad(twist * mesh.positions[i][1]), 0]));
    });

    /*
    mesh = Mesh.merge(mesh, Cube({
        origin: [0, -1, 0],
        position: [0, Mesh.getExtents(Mesh.merge(...meshes))[1], 0],
        scale: [2.5, 2.5, 2.5]
    }));
    */

    __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].applyScale(mesh, scale);
    __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].applyRotation(mesh, __WEBPACK_IMPORTED_MODULE_4__src_Mat3_js__["a" /* default */].fromEulerAngles(orientation.map(__WEBPACK_IMPORTED_MODULE_1__src_MathUtils_js__["a" /* default */].degToRad)));
    __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].applyTranslation(mesh, position);
    __WEBPACK_IMPORTED_MODULE_2__src_Mesh_js__["a" /* default */].applyOrigin(mesh, origin);

    return mesh;
});;


/***/ }),

/***/ "./content/shaders/ambient.frag":
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nuniform vec4 albedo;\nuniform vec4 ambient;\n// uniform sampler2D albedoSampler;\n// uniform float uvScale;\n\nvarying vec2 surfaceUv;\n\nvoid main() {\n    // gl_FragColor = vec4((albedo.xyz + texture2D(albedoSampler, surfaceUv * uvScale).xyz) * 0.7, 1);\n    gl_FragColor = vec4(albedo.xyz * 0.7, 1);\n}\n"

/***/ }),

/***/ "./content/shaders/ambient.vert":
/***/ (function(module, exports) {

module.exports = "uniform mat4 projection;\nuniform mat4 view;\nuniform mat4 world;\nuniform float totalTime;\n\nattribute vec4 position;\nattribute vec2 uv;\n\nvarying vec2 surfaceUv;\n\nvoid main() {\n    surfaceUv = uv;\n\n    vec4 worldPos = world * position;\n    float amplitude = (sin(-worldPos.x / 16.0 + (totalTime/1000.0)) + 1.0) / 2.0;\n    float sway = sin(totalTime/1000.0) * position.y * amplitude;\n    vec4 surfacePosition = worldPos + vec4(sway, 0, 0, 0);\n    gl_Position = projection * view * surfacePosition;\n}\n"

/***/ }),

/***/ "./content/shaders/debug-uv.frag":
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nuniform sampler2D sampler;\nvarying vec2 surfaceUv;\n\nvoid main() {\n    // gl_FragColor = texture2D(sampler, surfaceUv);\n    gl_FragColor = vec4(surfaceUv.x, surfaceUv.y, 0, 1);\n}\n"

/***/ }),

/***/ "./content/shaders/debug-uv.vert":
/***/ (function(module, exports) {

module.exports = "uniform mat4 projection;\nuniform mat4 view;\nuniform mat4 world;\n\nattribute vec4 position;\nattribute vec2 uv;\n\nvarying vec2 surfaceUv;\n\nvoid main() {\n    surfaceUv = uv;\n    gl_Position = projection * view * world * position;\n}\n"

/***/ }),

/***/ "./content/shaders/pointlight.frag":
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nuniform vec4 color;\nuniform vec4 lightColor;\nuniform vec3 lightPos;\nuniform float lightLinearTerm;\nuniform float lightQuadraticTerm;\nuniform float lightRadius;\nuniform float lightCutoff;\nuniform float lightIntensity;\n\nvarying vec3 surfacePos;\nvarying vec3 surfaceNormal;\n\nfloat getAttenuation(float constant, float linear, float quadratic, float dist) {\n    return 1.0 / (constant + linear * dist + quadratic * (dist*dist));\n}\n\n// https://imdoingitwrong.wordpress.com/2011/01/31/light-attenuation/\nfloat getAttenuation2(float radius, float intensity, float cutoff, float dist) {\n    float d = max(dist - radius, 0.0);\n    float denom = d/radius + 1.0;\n    float attenuation = 0.0;\n    attenuation = intensity / (denom*denom);\n    attenuation = (attenuation - cutoff) / (1.0 - cutoff);\n    attenuation = max(attenuation, 0.0);\n    return attenuation;\n}\n\nvoid main() {\n    vec3 surfaceToLight = lightPos - surfacePos;\n    float dist = length(surfaceToLight);\n    float facing = max(dot(normalize(surfaceToLight), normalize(surfaceNormal)), 0.0);\n\n    float attenuation = getAttenuation2(lightRadius, lightIntensity, lightCutoff, dist);\n    gl_FragColor = vec4(color.xyz * lightColor.xyz * facing * attenuation, 1);\n}\n"

/***/ }),

/***/ "./content/shaders/pointlight.vert":
/***/ (function(module, exports) {

module.exports = "uniform mat4 projection;\nuniform mat4 view;\nuniform mat4 world;\n\nattribute vec4 position;\nattribute vec3 normal;\nvarying vec3 surfacePos;\nvarying vec3 surfaceNormal;\n\nvoid main() {\n    surfaceNormal = (mat3(world) * normal);\n    surfacePos = (world * position).xyz;\n    gl_Position = projection * view * world * position;\n}\n"

/***/ }),

/***/ "./content/shaders/shadow.frag":
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nvoid main() {\n    gl_FragColor = vec4(0.0);\n}\n"

/***/ }),

/***/ "./content/shaders/shadow.vert":
/***/ (function(module, exports) {

module.exports = "uniform mat4 projection;\nuniform mat4 view;\nuniform mat4 world;\n\nattribute vec4 position;\n\nvoid main() {\n    gl_Position = projection * view * world * position;\n    gl_Position.z -= 0.001;\n}\n"

/***/ }),

/***/ "./content/shaders/sunlight-terrain.frag":
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nuniform vec4 lightColor;\nuniform vec3 lightDirection;\nuniform float lightIntensity;\nuniform sampler2D layerTexture;\n\nvarying vec3 worldNormal;\nvarying vec3 localPosition;\n\nvoid main() {\n    const float offset = 1.5;\n    const float amp = 0.01;\n    const float freq = 10.0;\n    float u = ((localPosition.y + 1.0) / 2.0) + sin((localPosition.x + localPosition.z) * freq + offset) * amp;\n    vec3 color = texture2D(layerTexture, vec2(1.0 - u, 0.5)).rgb;\n\n    vec3 surfaceColor = color.xyz;\n    float facing = max(dot(normalize(-lightDirection), normalize(worldNormal)), 0.0);\n    gl_FragColor = vec4(surfaceColor * lightColor.rgb * facing * lightIntensity, 1.0);\n}\n\n"

/***/ }),

/***/ "./content/shaders/sunlight-terrain.vert":
/***/ (function(module, exports) {

module.exports = "uniform mat4 projection;\nuniform mat4 view;\nuniform mat4 world;\n\nattribute vec4 position;\nattribute vec3 normal;\n\nvarying vec3 localPosition;\nvarying vec3 worldNormal;\n\nvoid main() {\n    localPosition = position.xyz;\n    worldNormal = mat3(world) * normal;\n    gl_Position = projection * view * world * vec4(localPosition, position.w);\n}\n"

/***/ }),

/***/ "./content/shaders/sunlight.frag":
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nuniform vec4 albedo;\nuniform vec4 lightColor;\nuniform vec3 lightDirection;\nuniform float lightIntensity;\n\nvarying vec3 surfaceNormal;\n\nvoid main() {\n    vec3 surfaceColor = albedo.xyz;\n    float facing = max(dot(normalize(-lightDirection), normalize(surfaceNormal)), 0.0);\n    gl_FragColor = vec4(surfaceColor * lightColor.rgb * facing * lightIntensity, 1.0);\n}\n"

/***/ }),

/***/ "./content/shaders/sunlight.vert":
/***/ (function(module, exports) {

module.exports = "uniform mat4 projection;\nuniform mat4 view;\nuniform mat4 world;\nuniform float totalTime;\n\nattribute vec4 position;\nattribute vec3 normal;\n\nvarying vec3 surfaceNormal;\n\nvoid main() {\n    surfaceNormal = mat3(world) * normal;\n\n    vec4 worldPos = world * position;\n    float amplitude = (sin(-worldPos.x / 16.0 + (totalTime/1000.0)) + 1.0) / 2.0;\n    float sway = sin(totalTime/1000.0) * position.y * amplitude;\n    vec4 surfacePosition = worldPos + vec4(sway, 0, 0, 0);\n    gl_Position = projection * view * surfacePosition;\n}\n"

/***/ }),

/***/ "./content/shaders/terrain.frag":
/***/ (function(module, exports) {

module.exports = "precision mediump float;\n\nuniform sampler2D layerTexture;\nvarying vec3 localPosition;\n\nvoid main() {\n    const float offset = 1.5;\n    const float amp = 0.01;\n    const float freq = 10.0;\n    float u = ((localPosition.y + 1.0) / 2.0) + sin((localPosition.x + localPosition.z) * freq + offset) * amp;\n    vec3 color = texture2D(layerTexture, vec2(1.0 - u, 0.5)).rgb * 0.5;\n\n    gl_FragColor = vec4(color, 1.0);\n}\n\n"

/***/ }),

/***/ "./content/shaders/terrain.vert":
/***/ (function(module, exports) {

module.exports = "uniform mat4 projection;\nuniform mat4 view;\nuniform mat4 world;\nuniform float totalTime;\n\nattribute vec4 position;\nattribute vec3 normal;\nattribute vec2 uv;\n\nvarying vec3 localPosition;\n\nvoid main() {\n    localPosition = position.xyz;\n    gl_Position = projection * view * world * vec4(localPosition, position.w);\n}\n"

/***/ }),

/***/ "./node_modules/css-loader/index.js!./src/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, "html, body {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    border: none;\n}\n\ncanvas {\n    display: block;\n    height: 100%;\n    width: 100%;\n    background: purple;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/random-js/lib/random.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*jshint eqnull:true*/
(function (root) {
  "use strict";

  var GLOBAL_KEY = "Random";

  var imul = (typeof Math.imul !== "function" || Math.imul(0xffffffff, 5) !== -5 ?
    function (a, b) {
      var ah = (a >>> 16) & 0xffff;
      var al = a & 0xffff;
      var bh = (b >>> 16) & 0xffff;
      var bl = b & 0xffff;
      // the shift by 0 fixes the sign on the high part
      // the final |0 converts the unsigned value into a signed value
      return (al * bl) + (((ah * bl + al * bh) << 16) >>> 0) | 0;
    } :
    Math.imul);

  var stringRepeat = (typeof String.prototype.repeat === "function" && "x".repeat(3) === "xxx" ?
    function (x, y) {
      return x.repeat(y);
    } : function (pattern, count) {
      var result = "";
      while (count > 0) {
        if (count & 1) {
          result += pattern;
        }
        count >>= 1;
        pattern += pattern;
      }
      return result;
    });

  function Random(engine) {
    if (!(this instanceof Random)) {
      return new Random(engine);
    }

    if (engine == null) {
      engine = Random.engines.nativeMath;
    } else if (typeof engine !== "function") {
      throw new TypeError("Expected engine to be a function, got " + typeof engine);
    }
    this.engine = engine;
  }
  var proto = Random.prototype;

  Random.engines = {
    nativeMath: function () {
      return (Math.random() * 0x100000000) | 0;
    },
    mt19937: (function (Int32Array) {
      // http://en.wikipedia.org/wiki/Mersenne_twister
      function refreshData(data) {
        var k = 0;
        var tmp = 0;
        for (;
          (k | 0) < 227; k = (k + 1) | 0) {
          tmp = (data[k] & 0x80000000) | (data[(k + 1) | 0] & 0x7fffffff);
          data[k] = data[(k + 397) | 0] ^ (tmp >>> 1) ^ ((tmp & 0x1) ? 0x9908b0df : 0);
        }

        for (;
          (k | 0) < 623; k = (k + 1) | 0) {
          tmp = (data[k] & 0x80000000) | (data[(k + 1) | 0] & 0x7fffffff);
          data[k] = data[(k - 227) | 0] ^ (tmp >>> 1) ^ ((tmp & 0x1) ? 0x9908b0df : 0);
        }

        tmp = (data[623] & 0x80000000) | (data[0] & 0x7fffffff);
        data[623] = data[396] ^ (tmp >>> 1) ^ ((tmp & 0x1) ? 0x9908b0df : 0);
      }

      function temper(value) {
        value ^= value >>> 11;
        value ^= (value << 7) & 0x9d2c5680;
        value ^= (value << 15) & 0xefc60000;
        return value ^ (value >>> 18);
      }

      function seedWithArray(data, source) {
        var i = 1;
        var j = 0;
        var sourceLength = source.length;
        var k = Math.max(sourceLength, 624) | 0;
        var previous = data[0] | 0;
        for (;
          (k | 0) > 0; --k) {
          data[i] = previous = ((data[i] ^ imul((previous ^ (previous >>> 30)), 0x0019660d)) + (source[j] | 0) + (j | 0)) | 0;
          i = (i + 1) | 0;
          ++j;
          if ((i | 0) > 623) {
            data[0] = data[623];
            i = 1;
          }
          if (j >= sourceLength) {
            j = 0;
          }
        }
        for (k = 623;
          (k | 0) > 0; --k) {
          data[i] = previous = ((data[i] ^ imul((previous ^ (previous >>> 30)), 0x5d588b65)) - i) | 0;
          i = (i + 1) | 0;
          if ((i | 0) > 623) {
            data[0] = data[623];
            i = 1;
          }
        }
        data[0] = 0x80000000;
      }

      function mt19937() {
        var data = new Int32Array(624);
        var index = 0;
        var uses = 0;

        function next() {
          if ((index | 0) >= 624) {
            refreshData(data);
            index = 0;
          }

          var value = data[index];
          index = (index + 1) | 0;
          uses += 1;
          return temper(value) | 0;
        }
        next.getUseCount = function() {
          return uses;
        };
        next.discard = function (count) {
          uses += count;
          if ((index | 0) >= 624) {
            refreshData(data);
            index = 0;
          }
          while ((count - index) > 624) {
            count -= 624 - index;
            refreshData(data);
            index = 0;
          }
          index = (index + count) | 0;
          return next;
        };
        next.seed = function (initial) {
          var previous = 0;
          data[0] = previous = initial | 0;

          for (var i = 1; i < 624; i = (i + 1) | 0) {
            data[i] = previous = (imul((previous ^ (previous >>> 30)), 0x6c078965) + i) | 0;
          }
          index = 624;
          uses = 0;
          return next;
        };
        next.seedWithArray = function (source) {
          next.seed(0x012bd6aa);
          seedWithArray(data, source);
          return next;
        };
        next.autoSeed = function () {
          return next.seedWithArray(Random.generateEntropyArray());
        };
        return next;
      }

      return mt19937;
    }(typeof Int32Array === "function" ? Int32Array : Array)),
    browserCrypto: (typeof crypto !== "undefined" && typeof crypto.getRandomValues === "function" && typeof Int32Array === "function") ? (function () {
      var data = null;
      var index = 128;

      return function () {
        if (index >= 128) {
          if (data === null) {
            data = new Int32Array(128);
          }
          crypto.getRandomValues(data);
          index = 0;
        }

        return data[index++] | 0;
      };
    }()) : null
  };

  Random.generateEntropyArray = function () {
    var array = [];
    var engine = Random.engines.nativeMath;
    for (var i = 0; i < 16; ++i) {
      array[i] = engine() | 0;
    }
    array.push(new Date().getTime() | 0);
    return array;
  };

  function returnValue(value) {
    return function () {
      return value;
    };
  }

  // [-0x80000000, 0x7fffffff]
  Random.int32 = function (engine) {
    return engine() | 0;
  };
  proto.int32 = function () {
    return Random.int32(this.engine);
  };

  // [0, 0xffffffff]
  Random.uint32 = function (engine) {
    return engine() >>> 0;
  };
  proto.uint32 = function () {
    return Random.uint32(this.engine);
  };

  // [0, 0x1fffffffffffff]
  Random.uint53 = function (engine) {
    var high = engine() & 0x1fffff;
    var low = engine() >>> 0;
    return (high * 0x100000000) + low;
  };
  proto.uint53 = function () {
    return Random.uint53(this.engine);
  };

  // [0, 0x20000000000000]
  Random.uint53Full = function (engine) {
    while (true) {
      var high = engine() | 0;
      if (high & 0x200000) {
        if ((high & 0x3fffff) === 0x200000 && (engine() | 0) === 0) {
          return 0x20000000000000;
        }
      } else {
        var low = engine() >>> 0;
        return ((high & 0x1fffff) * 0x100000000) + low;
      }
    }
  };
  proto.uint53Full = function () {
    return Random.uint53Full(this.engine);
  };

  // [-0x20000000000000, 0x1fffffffffffff]
  Random.int53 = function (engine) {
    var high = engine() | 0;
    var low = engine() >>> 0;
    return ((high & 0x1fffff) * 0x100000000) + low + (high & 0x200000 ? -0x20000000000000 : 0);
  };
  proto.int53 = function () {
    return Random.int53(this.engine);
  };

  // [-0x20000000000000, 0x20000000000000]
  Random.int53Full = function (engine) {
    while (true) {
      var high = engine() | 0;
      if (high & 0x400000) {
        if ((high & 0x7fffff) === 0x400000 && (engine() | 0) === 0) {
          return 0x20000000000000;
        }
      } else {
        var low = engine() >>> 0;
        return ((high & 0x1fffff) * 0x100000000) + low + (high & 0x200000 ? -0x20000000000000 : 0);
      }
    }
  };
  proto.int53Full = function () {
    return Random.int53Full(this.engine);
  };

  function add(generate, addend) {
    if (addend === 0) {
      return generate;
    } else {
      return function (engine) {
        return generate(engine) + addend;
      };
    }
  }

  Random.integer = (function () {
    function isPowerOfTwoMinusOne(value) {
      return ((value + 1) & value) === 0;
    }

    function bitmask(masking) {
      return function (engine) {
        return engine() & masking;
      };
    }

    function downscaleToLoopCheckedRange(range) {
      var extendedRange = range + 1;
      var maximum = extendedRange * Math.floor(0x100000000 / extendedRange);
      return function (engine) {
        var value = 0;
        do {
          value = engine() >>> 0;
        } while (value >= maximum);
        return value % extendedRange;
      };
    }

    function downscaleToRange(range) {
      if (isPowerOfTwoMinusOne(range)) {
        return bitmask(range);
      } else {
        return downscaleToLoopCheckedRange(range);
      }
    }

    function isEvenlyDivisibleByMaxInt32(value) {
      return (value | 0) === 0;
    }

    function upscaleWithHighMasking(masking) {
      return function (engine) {
        var high = engine() & masking;
        var low = engine() >>> 0;
        return (high * 0x100000000) + low;
      };
    }

    function upscaleToLoopCheckedRange(extendedRange) {
      var maximum = extendedRange * Math.floor(0x20000000000000 / extendedRange);
      return function (engine) {
        var ret = 0;
        do {
          var high = engine() & 0x1fffff;
          var low = engine() >>> 0;
          ret = (high * 0x100000000) + low;
        } while (ret >= maximum);
        return ret % extendedRange;
      };
    }

    function upscaleWithinU53(range) {
      var extendedRange = range + 1;
      if (isEvenlyDivisibleByMaxInt32(extendedRange)) {
        var highRange = ((extendedRange / 0x100000000) | 0) - 1;
        if (isPowerOfTwoMinusOne(highRange)) {
          return upscaleWithHighMasking(highRange);
        }
      }
      return upscaleToLoopCheckedRange(extendedRange);
    }

    function upscaleWithinI53AndLoopCheck(min, max) {
      return function (engine) {
        var ret = 0;
        do {
          var high = engine() | 0;
          var low = engine() >>> 0;
          ret = ((high & 0x1fffff) * 0x100000000) + low + (high & 0x200000 ? -0x20000000000000 : 0);
        } while (ret < min || ret > max);
        return ret;
      };
    }

    return function (min, max) {
      min = Math.floor(min);
      max = Math.floor(max);
      if (min < -0x20000000000000 || !isFinite(min)) {
        throw new RangeError("Expected min to be at least " + (-0x20000000000000));
      } else if (max > 0x20000000000000 || !isFinite(max)) {
        throw new RangeError("Expected max to be at most " + 0x20000000000000);
      }

      var range = max - min;
      if (range <= 0 || !isFinite(range)) {
        return returnValue(min);
      } else if (range === 0xffffffff) {
        if (min === 0) {
          return Random.uint32;
        } else {
          return add(Random.int32, min + 0x80000000);
        }
      } else if (range < 0xffffffff) {
        return add(downscaleToRange(range), min);
      } else if (range === 0x1fffffffffffff) {
        return add(Random.uint53, min);
      } else if (range < 0x1fffffffffffff) {
        return add(upscaleWithinU53(range), min);
      } else if (max - 1 - min === 0x1fffffffffffff) {
        return add(Random.uint53Full, min);
      } else if (min === -0x20000000000000 && max === 0x20000000000000) {
        return Random.int53Full;
      } else if (min === -0x20000000000000 && max === 0x1fffffffffffff) {
        return Random.int53;
      } else if (min === -0x1fffffffffffff && max === 0x20000000000000) {
        return add(Random.int53, 1);
      } else if (max === 0x20000000000000) {
        return add(upscaleWithinI53AndLoopCheck(min - 1, max - 1), 1);
      } else {
        return upscaleWithinI53AndLoopCheck(min, max);
      }
    };
  }());
  proto.integer = function (min, max) {
    return Random.integer(min, max)(this.engine);
  };

  // [0, 1] (floating point)
  Random.realZeroToOneInclusive = function (engine) {
    return Random.uint53Full(engine) / 0x20000000000000;
  };
  proto.realZeroToOneInclusive = function () {
    return Random.realZeroToOneInclusive(this.engine);
  };

  // [0, 1) (floating point)
  Random.realZeroToOneExclusive = function (engine) {
    return Random.uint53(engine) / 0x20000000000000;
  };
  proto.realZeroToOneExclusive = function () {
    return Random.realZeroToOneExclusive(this.engine);
  };

  Random.real = (function () {
    function multiply(generate, multiplier) {
      if (multiplier === 1) {
        return generate;
      } else if (multiplier === 0) {
        return function () {
          return 0;
        };
      } else {
        return function (engine) {
          return generate(engine) * multiplier;
        };
      }
    }

    return function (left, right, inclusive) {
      if (!isFinite(left)) {
        throw new RangeError("Expected left to be a finite number");
      } else if (!isFinite(right)) {
        throw new RangeError("Expected right to be a finite number");
      }
      return add(
        multiply(
          inclusive ? Random.realZeroToOneInclusive : Random.realZeroToOneExclusive,
          right - left),
        left);
    };
  }());
  proto.real = function (min, max, inclusive) {
    return Random.real(min, max, inclusive)(this.engine);
  };

  Random.bool = (function () {
    function isLeastBitTrue(engine) {
      return (engine() & 1) === 1;
    }

    function lessThan(generate, value) {
      return function (engine) {
        return generate(engine) < value;
      };
    }

    function probability(percentage) {
      if (percentage <= 0) {
        return returnValue(false);
      } else if (percentage >= 1) {
        return returnValue(true);
      } else {
        var scaled = percentage * 0x100000000;
        if (scaled % 1 === 0) {
          return lessThan(Random.int32, (scaled - 0x80000000) | 0);
        } else {
          return lessThan(Random.uint53, Math.round(percentage * 0x20000000000000));
        }
      }
    }

    return function (numerator, denominator) {
      if (denominator == null) {
        if (numerator == null) {
          return isLeastBitTrue;
        }
        return probability(numerator);
      } else {
        if (numerator <= 0) {
          return returnValue(false);
        } else if (numerator >= denominator) {
          return returnValue(true);
        }
        return lessThan(Random.integer(0, denominator - 1), numerator);
      }
    };
  }());
  proto.bool = function (numerator, denominator) {
    return Random.bool(numerator, denominator)(this.engine);
  };

  function toInteger(value) {
    var number = +value;
    if (number < 0) {
      return Math.ceil(number);
    } else {
      return Math.floor(number);
    }
  }

  function convertSliceArgument(value, length) {
    if (value < 0) {
      return Math.max(value + length, 0);
    } else {
      return Math.min(value, length);
    }
  }
  Random.pick = function (engine, array, begin, end) {
    var length = array.length;
    var start = begin == null ? 0 : convertSliceArgument(toInteger(begin), length);
    var finish = end === void 0 ? length : convertSliceArgument(toInteger(end), length);
    if (start >= finish) {
      return void 0;
    }
    var distribution = Random.integer(start, finish - 1);
    return array[distribution(engine)];
  };
  proto.pick = function (array, begin, end) {
    return Random.pick(this.engine, array, begin, end);
  };

  function returnUndefined() {
    return void 0;
  }
  var slice = Array.prototype.slice;
  Random.picker = function (array, begin, end) {
    var clone = slice.call(array, begin, end);
    if (!clone.length) {
      return returnUndefined;
    }
    var distribution = Random.integer(0, clone.length - 1);
    return function (engine) {
      return clone[distribution(engine)];
    };
  };

  Random.shuffle = function (engine, array, downTo) {
    var length = array.length;
    if (length) {
      if (downTo == null) {
        downTo = 0;
      }
      for (var i = (length - 1) >>> 0; i > downTo; --i) {
        var distribution = Random.integer(0, i);
        var j = distribution(engine);
        if (i !== j) {
          var tmp = array[i];
          array[i] = array[j];
          array[j] = tmp;
        }
      }
    }
    return array;
  };
  proto.shuffle = function (array) {
    return Random.shuffle(this.engine, array);
  };

  Random.sample = function (engine, population, sampleSize) {
    if (sampleSize < 0 || sampleSize > population.length || !isFinite(sampleSize)) {
      throw new RangeError("Expected sampleSize to be within 0 and the length of the population");
    }

    if (sampleSize === 0) {
      return [];
    }

    var clone = slice.call(population);
    var length = clone.length;
    if (length === sampleSize) {
      return Random.shuffle(engine, clone, 0);
    }
    var tailLength = length - sampleSize;
    return Random.shuffle(engine, clone, tailLength - 1).slice(tailLength);
  };
  proto.sample = function (population, sampleSize) {
    return Random.sample(this.engine, population, sampleSize);
  };

  Random.die = function (sideCount) {
    return Random.integer(1, sideCount);
  };
  proto.die = function (sideCount) {
    return Random.die(sideCount)(this.engine);
  };

  Random.dice = function (sideCount, dieCount) {
    var distribution = Random.die(sideCount);
    return function (engine) {
      var result = [];
      result.length = dieCount;
      for (var i = 0; i < dieCount; ++i) {
        result[i] = distribution(engine);
      }
      return result;
    };
  };
  proto.dice = function (sideCount, dieCount) {
    return Random.dice(sideCount, dieCount)(this.engine);
  };

  // http://en.wikipedia.org/wiki/Universally_unique_identifier
  Random.uuid4 = (function () {
    function zeroPad(string, zeroCount) {
      return stringRepeat("0", zeroCount - string.length) + string;
    }

    return function (engine) {
      var a = engine() >>> 0;
      var b = engine() | 0;
      var c = engine() | 0;
      var d = engine() >>> 0;

      return (
        zeroPad(a.toString(16), 8) +
        "-" +
        zeroPad((b & 0xffff).toString(16), 4) +
        "-" +
        zeroPad((((b >> 4) & 0x0fff) | 0x4000).toString(16), 4) +
        "-" +
        zeroPad(((c & 0x3fff) | 0x8000).toString(16), 4) +
        "-" +
        zeroPad(((c >> 4) & 0xffff).toString(16), 4) +
        zeroPad(d.toString(16), 8));
    };
  }());
  proto.uuid4 = function () {
    return Random.uuid4(this.engine);
  };

  Random.string = (function () {
    // has 2**x chars, for faster uniform distribution
    var DEFAULT_STRING_POOL = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_-";

    return function (pool) {
      if (pool == null) {
        pool = DEFAULT_STRING_POOL;
      }

      var length = pool.length;
      if (!length) {
        throw new Error("Expected pool not to be an empty string");
      }

      var distribution = Random.integer(0, length - 1);
      return function (engine, length) {
        var result = "";
        for (var i = 0; i < length; ++i) {
          var j = distribution(engine);
          result += pool.charAt(j);
        }
        return result;
      };
    };
  }());
  proto.string = function (length, pool) {
    return Random.string(pool)(this.engine, length);
  };

  Random.hex = (function () {
    var LOWER_HEX_POOL = "0123456789abcdef";
    var lowerHex = Random.string(LOWER_HEX_POOL);
    var upperHex = Random.string(LOWER_HEX_POOL.toUpperCase());

    return function (upper) {
      if (upper) {
        return upperHex;
      } else {
        return lowerHex;
      }
    };
  }());
  proto.hex = function (length, upper) {
    return Random.hex(upper)(this.engine, length);
  };

  Random.date = function (start, end) {
    if (!(start instanceof Date)) {
      throw new TypeError("Expected start to be a Date, got " + typeof start);
    } else if (!(end instanceof Date)) {
      throw new TypeError("Expected end to be a Date, got " + typeof end);
    }
    var distribution = Random.integer(start.getTime(), end.getTime());
    return function (engine) {
      return new Date(distribution(engine));
    };
  };
  proto.date = function (start, end) {
    return Random.date(start, end)(this.engine);
  };

  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return Random;
    }.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof module !== "undefined" && typeof require === "function") {
    module.exports = Random;
  } else {
    (function () {
      var oldGlobal = root[GLOBAL_KEY];
      Random.noConflict = function () {
        root[GLOBAL_KEY] = oldGlobal;
        return this;
      };
    }());
    root[GLOBAL_KEY] = Random;
  }
}(this));

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__("./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/ArrayUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    range
});

function range(number) {
    return Array(number).fill(0).map((_, index) => index);
}


/***/ }),

/***/ "./src/Gfx.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Log_js__ = __webpack_require__("./src/Log.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Type_js__ = __webpack_require__("./src/Type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MathUtils_js__ = __webpack_require__("./src/MathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Mat3_js__ = __webpack_require__("./src/Mat3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Mat4_js__ = __webpack_require__("./src/Mat4.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Vec3_js__ = __webpack_require__("./src/Vec3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Vec4_js__ = __webpack_require__("./src/Vec4.js");










/* harmony default export */ __webpack_exports__["a"] = ({
    renderScene,
    getGlContext,
    getGlobalTransform
});

function renderScene(canvas, scene, time, enableHack) {
    console.assert(__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isObject(time));
    console.assert(__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isNumber(time.total));
    console.assert(__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isNumber(time.delta));
    // console.group('Gfx');

    updateCanvasSize(canvas);
    __WEBPACK_IMPORTED_MODULE_0__Log_js__["a" /* default */].verbose(`resized canvas to [${canvas.width.toFixed(0)}, ${canvas.height.toFixed(0)}]`);

    const gl = getGlContext(canvas);
    gl.enable(gl.DEPTH_TEST);
    gl.depthFunc(gl.LEQUAL);
    gl.enable(gl.CULL_FACE);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    const camera = getActiveCamera(scene);
    camera.projection = getProjectionMatrix(camera, gl.canvas.width / gl.canvas.height);

    const clearColor = getClearColor(camera);
    clear(gl, clearColor);
    __WEBPACK_IMPORTED_MODULE_0__Log_js__["a" /* default */].verbose(`cleared canvas with color: [${clearColor.map(num => num.toFixed(0)).join(', ')}]`);

    __WEBPACK_IMPORTED_MODULE_0__Log_js__["a" /* default */].verbose('context:', gl);
    __WEBPACK_IMPORTED_MODULE_0__Log_js__["a" /* default */].verbose('camera:', camera);
    __WEBPACK_IMPORTED_MODULE_0__Log_js__["a" /* default */].verbose('scene:', scene);

    const visibleNodes = scene.nodes.filter(isVisible);
    const meshNodes = visibleNodes.filter(hasMesh);
    const lightNodes = visibleNodes.filter(hasLight);

    if(enableHack) {
        HACK_loadTexture(gl);
    }

    meshNodes.forEach(meshNode => {
        __WEBPACK_IMPORTED_MODULE_0__Log_js__["a" /* default */].verbose(`rendering mesh node: ${meshNode.key}`);
        renderNode(gl, meshNode, camera, time);
    });

    lightNodes.forEach(lightNode => {
        __WEBPACK_IMPORTED_MODULE_0__Log_js__["a" /* default */].verbose(`rendering light node: ${lightNode.key}`);
        renderLight(gl, lightNode, meshNodes, camera, time);
    });

    console.groupEnd();
}

function HACK_loadTexture(gl) {
    const texels = new Uint8Array([
        199, 187, 209,
        215, 157, 155,
        224, 141, 111,
        224, 141, 111,
        132, 40, 35,
        132, 40, 35,
    ]);
    /*
    const texels = new Uint8Array([
        85, 92, 102,
        234, 208, 168,
        132, 40, 35,
        132, 40, 35,
        132, 40, 35,
        132, 40, 35,
        132, 40, 35,
        132, 40, 35,
        132, 40, 35,
        132, 40, 35,
        255, 0, 0,
        255, 0, 0,
        255, 0, 0,
    ]);
    */
    const width = texels.length / 3;
    const height = 1;

    const layerTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, layerTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, width, height, 0, gl.RGB, gl.UNSIGNED_BYTE, texels);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.activeTexture(gl.TEXTURE0);
}

function clear(gl, color) {
    gl.clearColor(...color);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

function renderNode(gl, node, camera, time) {
    console.assert(hasMesh(node));

    if(hasMesh(node)) {
        drawMesh(gl, node.mesh, {
            shaderProgram: node.shaderProgram,
            uniforms: {
                projection: camera.projection,
                view: __WEBPACK_IMPORTED_MODULE_4__Mat4_js__["a" /* default */].inverse(camera.globalTransform),
                world: node.globalTransform,
                albedo: getAlbedo(node),
                totalTime: time.total
            }
        });
    }
}

function renderProjectedShadow(gl, light, props = {}) {
    let lightPos = __WEBPACK_IMPORTED_MODULE_5__Vec3_js__["a" /* default */].parse(light.direction);
    lightPos = __WEBPACK_IMPORTED_MODULE_5__Vec3_js__["a" /* default */].normalize(lightPos);
    lightPos = __WEBPACK_IMPORTED_MODULE_5__Vec3_js__["a" /* default */].scale(lightPos, -1);
    lightPos = __WEBPACK_IMPORTED_MODULE_5__Vec3_js__["a" /* default */].scale(lightPos, Number.MAX_SAFE_INTEGER);
    let lightMatrix = new Float32Array([
        lightPos[1],  0,            0,           0,
        -lightPos[0], 0, -lightPos[2],          -1,
        0,            0,  lightPos[1],           0,
        0,            0,            0, lightPos[1],
    ]);

    let t = __WEBPACK_IMPORTED_MODULE_4__Mat4_js__["a" /* default */].identity();
    t = __WEBPACK_IMPORTED_MODULE_4__Mat4_js__["a" /* default */].multiply(lightMatrix, t);
    t = __WEBPACK_IMPORTED_MODULE_4__Mat4_js__["a" /* default */].multiply(props.shadowCaster.globalTransform, t);

    drawMesh(gl, props.shadowCaster.mesh, {
        shaderProgram: props.shadowCaster.shaderProgram,
        uniforms: {
            world: t,
            view: props.uniforms.view,
            projection: props.uniforms.projection,
            albedo: new Float32Array(__WEBPACK_IMPORTED_MODULE_6__Vec4_js__["a" /* default */].zero()),
            totalTime: props.uniforms.totalTime
        }
    });
}

function renderLight(gl, lightNode, meshNodes, camera, time) {
    console.assert(gl);
    console.assert(hasLight(lightNode));
    console.assert(__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isArray(meshNodes));
    console.assert(__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isObject(camera));

    gl.colorMask(false, false, false, false);
    meshNodes
        .filter(isShadowCaster)
        .forEach(shadowCaster => {
            renderProjectedShadow(gl, lightNode.light, {
                shadowCaster: shadowCaster,
                uniforms: {
                    view: __WEBPACK_IMPORTED_MODULE_4__Mat4_js__["a" /* default */].inverse(camera.globalTransform),
                    projection: camera.projection,
                    totalTime: time.total
                }
            });
        });
    gl.colorMask(true, true, true, true);

    gl.blendFunc(gl.ONE, gl.ONE);
    gl.enable(gl.BLEND);
    meshNodes.forEach(meshNode => {
        drawMesh(gl, meshNode.mesh, {
            shaderProgram: lightNode.shaderProgram,
            uniforms: {
                projection: camera.projection,
                view: __WEBPACK_IMPORTED_MODULE_4__Mat4_js__["a" /* default */].inverse(camera.globalTransform),
                world: meshNode.globalTransform,
                albedo: getAlbedo(meshNode),
                lightColor: new Float32Array([1, 1, 1, 1]),
                lightDirection: new Float32Array(lightNode.light.direction),
                lightIntensity: lightNode.light.intensity,
                totalTime: time.total
            }
        });
    });
    gl.disable(gl.BLEND);
}

function drawMesh(gl, mesh, {shaderProgram, uniforms}) {
    console.assert(gl);
    console.assert(shaderProgram);
    console.assert(__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isObject(mesh));
    console.assert('layout' in mesh);
    console.assert('vertexCount' in mesh);
    console.assert('mode' in mesh);

    gl.useProgram(shaderProgram);
    bindLayout(gl, shaderProgram, mesh.layout);

    uploadUniforms(gl, shaderProgram, uniforms);
    gl.drawArrays(mesh.mode, 0, mesh.vertexCount);

    unbindLayout(mesh.layout);
    gl.useProgram(null);
}

function uploadUniforms(gl, program, uniforms) {
    console.assert('uniformLocations' in program);

    Object
        .keys(uniforms)
        .map(key => ({
            location: program.uniformLocations[key],
            key: key,
            value: uniforms[key]
        }))
        .forEach(triple => {
            if(!triple.location) {
                // console.warn(`Missing uniform '${triple.key}' in shader '${shader}'`);
                return;
            }

            commitUniform(gl, triple.location, triple.value, triple.key);
        });
}

// eslint-disable-next-line no-unused-vars
function commitUniform(gl, location, value, key) {
    console.assert(location);
    console.assert(!__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isUndefined(value));
    console.assert(!__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isNull(value));

    if(__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isNumber(value)) {
        // if(Number.isInteger(value) && key != 'uvScale') {
        //gl.uniform1i(location, value);
        // }
        // else {
        gl.uniform1f(location, value);
        // }
    }
    if(value.length === 16) {
        gl.uniformMatrix4fv(location, false, value);
    }
    if(value.length === 4) {
        gl.uniform4fv(location, value);
    }
    if(value.length === 3) {
        gl.uniform3fv(location, value);
    }
}

function bindLayout(gl, program, layout) {
    console.assert(gl);
    console.assert(program);
    console.assert(__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isArray(layout));

    layout.forEach(item => {
        const location = gl.getAttribLocation(program, item.key);
        if(location !== -1) {
            gl.bindBuffer(gl.ARRAY_BUFFER, item.buffer);
            gl.vertexAttribPointer(
                location,
                item.elementLength,
                item.type,
                item.normalize,
                item.stride,
                item.offset
            );
            gl.enableVertexAttribArray(location);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
        }
    });
}

function unbindLayout() {

}

function updateCanvasSize(canvas) {
    const width = canvas.parentNode.clientWidth;
    const height = canvas.parentNode.clientHeight;

    if(canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
    }
}

function isVisible(object) {
    const parentVisible = 'parent' in object ? isVisible(object.parent) : true;
    const visible = 'visible' in object ? object.visible : true;

    return parentVisible && visible;
}

function isShadowCaster(object) {
    return 'shadow' in object ? object.shadow : true;
}

function hasMesh(object) {
    return 'mesh' in object;
}

function hasLight(object) {
    return 'light' in object;
}

function getActiveCamera(scene) {
    return scene.nodes.find(node => node.key === 'camera');
}

function getClearColor(object) {
    return 'clearColor' in object ? object.clearColor : [0.2, 0.2, 0.2, 1];
}

function getGlContext(canvas) {
    const gl = canvas.getContext('webgl');
    return gl;
}

function getLocalRotationMatrix(object) {
    console.assert(__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isObject(object));

    const angles = __WEBPACK_IMPORTED_MODULE_5__Vec3_js__["a" /* default */].parse(object.orientation);
    return __WEBPACK_IMPORTED_MODULE_3__Mat3_js__["a" /* default */].fromEulerAngles(angles);
}

function getLocalPosition(object) {
    console.assert(__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isObject(object));
    return __WEBPACK_IMPORTED_MODULE_5__Vec3_js__["a" /* default */].parse(object.position);
}

function getGlobalScaleMatrix(object) {
    if(!object) {
        return __WEBPACK_IMPORTED_MODULE_3__Mat3_js__["a" /* default */].identity();
    }

    if('scale' in object) {
        return __WEBPACK_IMPORTED_MODULE_3__Mat3_js__["a" /* default */].scale(__WEBPACK_IMPORTED_MODULE_5__Vec3_js__["a" /* default */].parse(object.scale));
    }

    return __WEBPACK_IMPORTED_MODULE_3__Mat3_js__["a" /* default */].identity();
}

function getGlobalRotationMatrix(object) {
    if(!object) {
        return __WEBPACK_IMPORTED_MODULE_3__Mat3_js__["a" /* default */].identity();
    }

    if('lookat' in object) {
        return __WEBPACK_IMPORTED_MODULE_3__Mat3_js__["a" /* default */].lookAt(getGlobalPosition(object), object.lookat, [0, 1, 0]);
    }

    const globalParentRotation = getGlobalRotationMatrix(object.parent);
    const localRotation = getLocalRotationMatrix(object);
    return __WEBPACK_IMPORTED_MODULE_3__Mat3_js__["a" /* default */].multiply(globalParentRotation, localRotation);
}

function getGlobalTransform(object) {
    console.assert(__WEBPACK_IMPORTED_MODULE_1__Type_js__["a" /* default */].isObject(object));

    const scale = getGlobalScaleMatrix(object);
    const rotation = getGlobalRotationMatrix(object);
    const position = getGlobalPosition(object);
    return __WEBPACK_IMPORTED_MODULE_4__Mat4_js__["a" /* default */].multiply(
        __WEBPACK_IMPORTED_MODULE_4__Mat4_js__["a" /* default */].fromMat3(scale),
        __WEBPACK_IMPORTED_MODULE_4__Mat4_js__["a" /* default */].fromRotationTranslation(rotation, position)
    );
}

function getGlobalPosition(object) {
    if(!object) {
        return __WEBPACK_IMPORTED_MODULE_5__Vec3_js__["a" /* default */].zero();
    }

    const globalParentPosition = getGlobalPosition(object.parent);
    const globalParentRotation = getGlobalRotationMatrix(object.parent);
    const localPosition = getLocalPosition(object);

    return __WEBPACK_IMPORTED_MODULE_5__Vec3_js__["a" /* default */].add(
        globalParentPosition,
        __WEBPACK_IMPORTED_MODULE_5__Vec3_js__["a" /* default */].transform(localPosition, globalParentRotation)
    );
}

function getProjectionMatrix(camera, ar) {
    const near = 'near' in camera ? camera.near : 0.1;
    const far = 'far' in camera ? camera.far : 1000;
    const type = 'perspective';
    const fov = __WEBPACK_IMPORTED_MODULE_2__MathUtils_js__["a" /* default */].degToRad('fov' in camera ? camera.fov : 90);
    const hFov = 2 * Math.atan(Math.tan(fov / 2) / ar);

    return __WEBPACK_IMPORTED_MODULE_4__Mat4_js__["a" /* default */].perspective(ar, hFov, near, far);
}

function getAlbedo(object) {
    return 'albedo' in object? object.albedo : [1, 1, 1, 1];
}


/***/ }),

/***/ "./src/GlMesh.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type_js__ = __webpack_require__("./src/Type.js");


/* harmony default export */ __webpack_exports__["a"] = ({
    fromMesh,
});

function flatten(...arrays) {
    return arrays.reduce((result, item) => {
        result.push(...item);
        return result;
    }, []);
}

function fromMesh(gl, mesh) {
    console.assert(gl);
    console.assert(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isObject(mesh));
    console.assert(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isArray(mesh.positions));
    console.assert('mode' in mesh);

    const components = Object.keys(mesh)
        .map(key => ({ key, value: mesh[key] }))
        .filter(pair => __WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isArray(pair.value))
        .map(pair => ({
            key: pair.key,
            data: new Float32Array(flatten(...pair.value)),
            itemLength: pair.value[0].length
        }));

    /*
    // separate vertex components into 1d arrays
    const components = mesh.vertices.reduce((object, vertex) => {
        Object.keys(vertex).forEach(key => {
            if(key in object === false) {
                object[key] = { data: [], itemLength: vertex[key].length };
            }

            console.assert(vertex[key].length === object[key].itemLength);
            object[key].data.push(...vertex[key]);
        });

        return object;
    }, {});
    */


    const layout = components
        .map(component => {
            console.assert(component.data instanceof Float32Array);
            const buffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
            gl.bufferData(gl.ARRAY_BUFFER, component.data, gl.STATIC_DRAW);
            gl.bindBuffer(gl.ARRAY_BUFFER, null);

            return {
                // strip trailing 's' for compatibility with shader identifier
                key: component.key.substr(0, component.key.length - 1),
                buffer: buffer,
                type: gl.FLOAT,
                elementLength: component.itemLength,
                normalize: false,
                stride: 0,
                offset: 0,
            };
        });

    return {
        layout: layout,
        vertexCount: components[0].data.length / components[0].itemLength,
        mode: gl[mesh.mode]
    };
}


/***/ }),

/***/ "./src/Log.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    verbose
});

function verbose(...params) {
    //console.log(...params);
}


/***/ }),

/***/ "./src/Mat3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type_js__ = __webpack_require__("./src/Type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vec3_js__ = __webpack_require__("./src/Vec3.js");



const ROWS = 3;
const COLUMNS = 3;

const ROW_LENGTH = COLUMNS;
const ELEMENTS = ROWS * COLUMNS;

/* harmony default export */ __webpack_exports__["a"] = ({
    parse,
    identity,
    fromEulerAngles,
    multiply,
    getColumn,
    getColumnFast,
    rotationX,
    rotationY,
    rotationZ,
    scale,
    lookAt
});

function parse(value) {
    if(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isArray(value) && value.length === 3) {
        return fromEulerAngles(...value);
    }
    throw new TypeError(`Failed to parse value of type '${__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].getName(value)}' into a Mat3`);
}

function identity() {
    return new Float32Array([
        1, 0, 0,
        0, 1, 0,
        0, 0, 1
    ]);
}

function fromEulerAngles(angles) {
    //console.assert(Type.isArray(angles));

    const heading = rotationY(angles[1]);
    const pitch = rotationX(angles[0]);
    const bank = rotationZ(angles[2]);

    return multiply(bank, pitch, heading);
}

let _multiply_m2col = null;
let _multiply_m1row = null;
function multiply(m1, m2, ...matrices) {
    if(_multiply_m2col === null) {
        _multiply_m2col = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].zero();
        _multiply_m1row = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].zero();
    }

    if(!m2) {
        return m1;
    }

    _multiply_m2col[0] = 0;
    _multiply_m2col[1] = 0;
    _multiply_m2col[2] = 0;

    _multiply_m1row[0] = 0;
    _multiply_m1row[1] = 0;
    _multiply_m1row[2] = 0;
    const m1row = _multiply_m1row;
    const m2col = _multiply_m2col;
    let result = new Float32Array(ELEMENTS);
    for(let row = 0; row < ROWS; row++) {
        for(let col = 0; col < COLUMNS; col++) {
            getRowFast(m1row, m1, row);
            getColumnFast(m2col, m2, col);
            result[row * ROW_LENGTH + col] = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].dot(m1row, m2col);
        }
    }

    return multiply(result, ...matrices);
}

function rotationX(angle) {
    const yy = Math.cos(angle);
    const yz = Math.sin(angle);

    const zy = -Math.sin(angle);
    const zz = Math.cos(angle);

    return new Float32Array([
        1, 0, 0,
        0, yy, yz,
        0, zy, zz,
    ]);
}

function rotationY(angle) {
    const xx = Math.cos(angle);
    const xz = -Math.sin(angle);

    const zx = Math.sin(angle);
    const zz = Math.cos(angle);

    return new Float32Array([
        xx, 0, xz,
        0, 1, 0,
        zx, 0, zz,
    ]);
}

function rotationZ(angle) {
    const xx = Math.cos(angle);
    const xy = Math.sin(angle);

    const yx = -Math.sin(angle);
    const yy = Math.cos(angle);

    return new Float32Array([
        xx, xy, 0,
        yx, yy, 0,
        0, 0, 1,
    ]);
}

function getRow(m, row) {
    return new Float32Array(
        m.buffer,
        row * ROW_LENGTH * m.BYTES_PER_ELEMENT,
        ROW_LENGTH
    );
}

function getRowFast(out, m, row) {
    out[0] = m[row * ROW_LENGTH + 0];
    out[1] = m[row * ROW_LENGTH + 1];
    out[2] = m[row * ROW_LENGTH + 2];
}

function getColumn(m, col) {
    return __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].fromValues(
        m[0 * ROW_LENGTH + col],
        m[1 * ROW_LENGTH + col],
        m[2 * ROW_LENGTH + col]
    );
}

function getColumnFast(out, m, col) {
    out[0] = m[0 * ROW_LENGTH + col];
    out[1] = m[1 * ROW_LENGTH + col];
    out[2] = m[2 * ROW_LENGTH + col];
}

function scale(v) {
    return new Float32Array([
        v[0], 0, 0,
        0, v[1], 0,
        0, 0, v[2],
    ]);
}

function lookAt(eye, target, up) {
    const forward = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].normalize(__WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].sub(eye, target));
    const right = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].cross(up, forward);
    up = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].cross(forward, right);

    return new Float32Array([
        ...right,
        ...up,
        ...forward,
    ]);
}


/***/ }),

/***/ "./src/Mat4.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type_js__ = __webpack_require__("./src/Type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vec3_js__ = __webpack_require__("./src/Vec3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Vec4_js__ = __webpack_require__("./src/Vec4.js");




const ROWS = 4;
const ROW_LENGTH = 4;
const COLUMNS = 4;
const ELEMENTS = ROWS * COLUMNS;

/* harmony default export */ __webpack_exports__["a"] = ({
    identity,
    fromEulerAngles,
    fromMat3,
    fromRotationTranslation,
    multiply,
    translation,
    lookAt,
    setTranslation,
    orthographic,
    perspective,
    rotationY,
    inverse,
});

function perspective(ar, fov, near, far) {
    console.assert(far > near);
    console.assert(fov > 0);
    console.assert(fov < Math.PI * 2);
    console.assert(ar > 0);

    const f = 1.0 / Math.tan(fov * 0.5);

    let m = identity();
    m[0] = f / ar;
    m[5] = f;
    m[10] = (far + near) / (near - far);
    m[11] = -1.0;
    m[14] = (2.0 * far * near) / (near - far);
    m[15] = 0.0;

    return m;
}

function setTranslation(m, v) {
    m[12] = v[0];
    m[13] = v[1];
    m[14] = v[2];

    return m;
}

function fromMat3(m) {
    return new Float32Array([
        m[0], m[1], m[2], 0,
        m[3], m[4], m[5], 0,
        m[6], m[7], m[8], 0,
        0,       0,    0, 1,
    ]);
}

function fromRotationTranslation(rot, trans) {
    return setTranslation(fromMat3(rot), trans);
}

function lookAt(eye, target, up) {
    const forward = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].normalize(__WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].sub(eye, target));
    const right = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].cross(up, forward);
    up = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].cross(forward, right);

    return new Float32Array([
        ...right, 0,
        ...up, 0,
        ...forward, 0,
        ...eye, 1
    ]);
}

function identity() {
    return new Float32Array([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]);
}

function translation(v) {
    return new Float32Array([
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        v[0], v[1], v[2], 1
    ]);
}

function fromEulerAngles(angles) {
    const heading = rotationY(angles[1]);
    const pitch = rotationX(angles[0]);
    const bank = rotationZ(angles[2]);

    return multiply(bank, pitch, heading);
}

function rotationX(angle) {
    const yy = Math.cos(angle);
    const yz = Math.sin(angle);

    const zy = -Math.sin(angle);
    const zz = Math.cos(angle);

    return new Float32Array([
        1, 0, 0, 0,
        0, yy, yz, 0,
        0, zy, zz, 0,
        0, 0, 0, 1,
    ]);
}

function rotationY(angle) {
    const xx = Math.cos(angle);
    const xz = -Math.sin(angle);

    const zx = Math.sin(angle);
    const zz = Math.cos(angle);

    return new Float32Array([
        xx, 0, xz, 0,
        0, 1, 0, 0,
        zx, 0, zz, 0,
        0, 0, 0, 1
    ]);
}

function rotationZ(angle) {
    const xx = Math.cos(angle);
    const xy = Math.sin(angle);

    const yx = -Math.sin(angle);
    const yy = Math.cos(angle);

    return new Float32Array([
        xx, xy, 0, 0,
        yx, yy, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
    ]);
}

function multiply(m1, m2, ...matrices) {
    if(!m2) {
        return m1;
    }
    console.assert(m1.length === 16);
    console.assert(m2.length === 16);

    let result = new Float32Array(ELEMENTS);
    for(let row = 0; row < ROWS; row++) {
        for(let col = 0; col < COLUMNS; col++) {
            const m1row = getRow(m1, row);
            const m2col = getColumn(m2, col);
            result[row * ROW_LENGTH + col] = __WEBPACK_IMPORTED_MODULE_2__Vec4_js__["a" /* default */].dot(m1row, m2col);
        }
    }

    return multiply(result, ...matrices);
}

function getRow(m, row) {
    return __WEBPACK_IMPORTED_MODULE_2__Vec4_js__["a" /* default */].fromValues(
        m[row * ROW_LENGTH + 0],
        m[row * ROW_LENGTH + 1],
        m[row * ROW_LENGTH + 2],
        m[row * ROW_LENGTH + 3]
    );
}

function getColumn(m, col) {
    return __WEBPACK_IMPORTED_MODULE_2__Vec4_js__["a" /* default */].fromValues(
        m[0 * ROW_LENGTH + col],
        m[1 * ROW_LENGTH + col],
        m[2 * ROW_LENGTH + col],
        m[3 * ROW_LENGTH + col]
    );
}

function orthographic(left, right, bottom, top, near, far) {
    console.assert(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isNumber(left));
    console.assert(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isNumber(right));
    console.assert(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isNumber(bottom));
    console.assert(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isNumber(top));
    console.assert(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isNumber(near));
    console.assert(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isNumber(far));

    const width = right - left;
    const height = top - bottom;
    const depth = far - near;

    return new Float32Array([
        2 / width, 0, 0, 0,
        0, 2 / height, 0, 0,
        0, 0, -2 / depth, 0,
        -((right + left) / width), -((top + bottom) / height), -((far + near) / depth), 1,
    ]);
}

function inverse(m) {
    let i = 0;
    let det = 0;
    let inv = new Array(16);
    let result = new Array(16);

    inv[0] = m[5]  * m[10] * m[15] -
        m[5]  * m[11] * m[14] -
        m[9]  * m[6]  * m[15] +
        m[9]  * m[7]  * m[14] +
        m[13] * m[6]  * m[11] -
        m[13] * m[7]  * m[10];

    inv[4] = -m[4]  * m[10] * m[15] +
        m[4]  * m[11] * m[14] +
        m[8]  * m[6]  * m[15] -
        m[8]  * m[7]  * m[14] -
        m[12] * m[6]  * m[11] +
        m[12] * m[7]  * m[10];

    inv[8] = m[4]  * m[9] * m[15] -
        m[4]  * m[11] * m[13] -
        m[8]  * m[5] * m[15] +
        m[8]  * m[7] * m[13] +
        m[12] * m[5] * m[11] -
        m[12] * m[7] * m[9];

    inv[12] = -m[4]  * m[9] * m[14] +
        m[4]  * m[10] * m[13] +
        m[8]  * m[5] * m[14] -
        m[8]  * m[6] * m[13] -
        m[12] * m[5] * m[10] +
        m[12] * m[6] * m[9];

    inv[1] = -m[1]  * m[10] * m[15] +
        m[1]  * m[11] * m[14] +
        m[9]  * m[2] * m[15] -
        m[9]  * m[3] * m[14] -
        m[13] * m[2] * m[11] +
        m[13] * m[3] * m[10];

    inv[5] = m[0]  * m[10] * m[15] -
        m[0]  * m[11] * m[14] -
        m[8]  * m[2] * m[15] +
        m[8]  * m[3] * m[14] +
        m[12] * m[2] * m[11] -
        m[12] * m[3] * m[10];

    inv[9] = -m[0]  * m[9] * m[15] +
        m[0]  * m[11] * m[13] +
        m[8]  * m[1] * m[15] -
        m[8]  * m[3] * m[13] -
        m[12] * m[1] * m[11] +
        m[12] * m[3] * m[9];

    inv[13] = m[0]  * m[9] * m[14] -
        m[0]  * m[10] * m[13] -
        m[8]  * m[1] * m[14] +
        m[8]  * m[2] * m[13] +
        m[12] * m[1] * m[10] -
        m[12] * m[2] * m[9];

    inv[2] = m[1]  * m[6] * m[15] -
        m[1]  * m[7] * m[14] -
        m[5]  * m[2] * m[15] +
        m[5]  * m[3] * m[14] +
        m[13] * m[2] * m[7] -
        m[13] * m[3] * m[6];

    inv[6] = -m[0]  * m[6] * m[15] +
        m[0]  * m[7] * m[14] +
        m[4]  * m[2] * m[15] -
        m[4]  * m[3] * m[14] -
        m[12] * m[2] * m[7] +
        m[12] * m[3] * m[6];

    inv[10] = m[0]  * m[5] * m[15] -
        m[0]  * m[7] * m[13] -
        m[4]  * m[1] * m[15] +
        m[4]  * m[3] * m[13] +
        m[12] * m[1] * m[7] -
        m[12] * m[3] * m[5];

    inv[14] = -m[0]  * m[5] * m[14] +
        m[0]  * m[6] * m[13] +
        m[4]  * m[1] * m[14] -
        m[4]  * m[2] * m[13] -
        m[12] * m[1] * m[6] +
        m[12] * m[2] * m[5];

    inv[3] = -m[1] * m[6] * m[11] +
        m[1] * m[7] * m[10] +
        m[5] * m[2] * m[11] -
        m[5] * m[3] * m[10] -
        m[9] * m[2] * m[7] +
        m[9] * m[3] * m[6];

    inv[7] = m[0] * m[6] * m[11] -
        m[0] * m[7] * m[10] -
        m[4] * m[2] * m[11] +
        m[4] * m[3] * m[10] +
        m[8] * m[2] * m[7] -
        m[8] * m[3] * m[6];

    inv[11] = -m[0] * m[5] * m[11] +
        m[0] * m[7] * m[9] +
        m[4] * m[1] * m[11] -
        m[4] * m[3] * m[9] -
        m[8] * m[1] * m[7] +
        m[8] * m[3] * m[5];

    inv[15] = m[0] * m[5] * m[10] -
        m[0] * m[6] * m[9] -
        m[4] * m[1] * m[10] +
        m[4] * m[2] * m[9] +
        m[8] * m[1] * m[6] -
        m[8] * m[2] * m[5];

    det = m[0] * inv[0] + m[1] * inv[4] + m[2] * inv[8] + m[3] * inv[12];

    console.assert(det != 0);

    det = 1.0 / det;

    for (i = 0; i < 16; i++) {
        result[i] = inv[i] * det;
    }

    return result;
}


/***/ }),

/***/ "./src/MathUtils.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    degToRad,
    clamp,
});

function degToRad(degrees) {
    return degrees * (Math.PI / 180);
}

function clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
}


/***/ }),

/***/ "./src/Mesh.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type_js__ = __webpack_require__("./src/Type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Vec3_js__ = __webpack_require__("./src/Vec3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Mat3_js__ = __webpack_require__("./src/Mat3.js");




/* harmony default export */ __webpack_exports__["a"] = ({
    fromGeometry,
    getExtents,
    applyOrigin,
    applyTranslation,
    applyRotation,
    applyScale,
    calculateNormals,
    merge
});

const POSITIONS = {
    triangle: new Float32Array([
        0.0, 0.5, 0,
        -0.5, -0.5, 0,
        0.5, -0.5, 0,
    ]),
    quad: new Float32Array([
        -0.5, -0.5, 0,
        0.5, -0.5, 0,
        0.5, 0.5, 0,

        0.5, 0.5, 0,
        -0.5, 0.5, 0,
        -0.5, -0.5, 0,
    ]),
    cube: new Float32Array([
        // +z 1
        -0.5, -0.5, 0.5,
        0.5, -0.5, 0.5,
        0.5, 0.5, 0.5,

        // +z 2
        0.5, 0.5, 0.5,
        -0.5, 0.5, 0.5,
        -0.5, -0.5, 0.5,

        // -x 1
        -0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5,
        -0.5, 0.5, 0.5,

        // -x 2
        -0.5, 0.5, 0.5,
        -0.5, 0.5, -0.5,
        -0.5, -0.5, -0.5,

        // +y 1
        -0.5, 0.5, 0.5,
        0.5, 0.5, 0.5,
        0.5, 0.5, -0.5,

        // +y 2
        0.5, 0.5, -0.5,
        -0.5, 0.5, -0.5,
        -0.5, 0.5, 0.5,

        // +x 1
        0.5, -0.5, 0.5,
        0.5, -0.5, -0.5,
        0.5, 0.5, -0.5,

        // +x 2
        0.5, 0.5, -0.5,
        0.5, 0.5, 0.5,
        0.5, -0.5, 0.5,

        // -z 1
        0.5, -0.5, -0.5,
        -0.5, -0.5, -0.5,
        -0.5, 0.5, -0.5,

        // -z 2
        -0.5, 0.5, -0.5,
        0.5, 0.5, -0.5,
        0.5, -0.5, -0.5,

        // -y 1
        -0.5, -0.5, -0.5,
        0.5, -0.5, -0.5,
        0.5, -0.5, 0.5,

        // -y 2
        0.5, -0.5, 0.5,
        -0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5,
    ]),
};

const NORMALS = {
    triangle: new Float32Array([
        0, 0, 1,
        0, 0, 1,
        0, 0, 1
    ]),
    quad: new Float32Array([
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        0, 0, 1,
        0, 0, 1,
        0, 0, 1
    ]),
    cube: new Float32Array([
        // +z 1
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // +z 2
        0, 0, 1,
        0, 0, 1,
        0, 0, 1,

        // -x 1
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        // -x 2
        -1, 0, 0,
        -1, 0, 0,
        -1, 0, 0,

        // +y 1
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,

        // +y 2
        0, 1, 0,
        0, 1, 0,
        0, 1, 0,

        // +x 1
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // +x 2
        1, 0, 0,
        1, 0, 0,
        1, 0, 0,

        // -z 1
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        // -z 2
        0, 0, -1,
        0, 0, -1,
        0, 0, -1,

        // -y 1
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,

        // -y 2
        0, -1, 0,
        0, -1, 0,
        0, -1, 0,
    ])
};

function fromGeometry(geometry) {
    console.assert(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isObject(geometry));
    console.assert(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isArray(geometry.shapes));

    const vertexArrays = geometry.shapes.map(shape => {
        const orientation = 'orientation' in shape ? shape.orientation : __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].zero();
        const scale = 'scale' in shape ? shape.scale : [1, 1, 1];
        const position = 'position' in shape ? shape.position: __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].zero();

        //const rotation = Mat3.multiply(Mat3.scale(scale), Mat3.fromEulerAngles(orientation));
        const rotation = __WEBPACK_IMPORTED_MODULE_2__Mat3_js__["a" /* default */].fromEulerAngles(orientation);
        const scaleMatrix = __WEBPACK_IMPORTED_MODULE_2__Mat3_js__["a" /* default */].scale(scale);
        const vertices = getVertices(shape.shape)
            .map(v => transformVertex(v, position, rotation, scaleMatrix));

        return vertices;
    });

    const vertices = Array().concat(...vertexArrays);

    return {
        positions: vertices.map(v => v.position),
        normals: vertices.map(v => v.normal),
        mode: 'TRIANGLES',
    };
}

function getVertices(shape) {
    console.assert(shape in POSITIONS);
    console.assert(shape in NORMALS);
    const positions = POSITIONS[shape];
    const normals = NORMALS[shape];

    return Array(positions.length / 3).fill(null)
        .map((_, index) => {
            return {
                position: positions.slice(index * 3, index * 3 + 3),
                normal: normals.slice(index * 3, index * 3 + 3)
            };
        });
}

function transformVertex(vertex, translation, rotation, scale) {
    const newVertex = {};
    if('position' in vertex) {
        newVertex.position = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].clone(vertex.position);
        newVertex.position = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].transform(newVertex.position, scale);
        newVertex.position = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].transform(newVertex.position, rotation);
        newVertex.position = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].add(newVertex.position, translation);
    }
    if('normal' in vertex) {
        newVertex.normal = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].transform(vertex.normal, rotation);
    }
    return newVertex;
}


function getTriangleUvs() {
    return new Float32Array([
        0.5, 1,
        0, 0,
        1, 0
    ]);
}

function getPlaneUvs() {
    return new Float32Array([
        0, 0,
        1, 0,
        1, 1,

        1, 1,
        0, 1,
        0, 0,
    ]);
}

function applyScale(mesh, scale) {
    const positions = mesh.positions
        .map(position => __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].multiply(position, scale));
    mesh.positions = positions;
}

function applyRotation(mesh, transform) {
    const positions = mesh.positions
        .map(position => __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].transform(position, transform));

    const normals = mesh.normals
        .map(normal => __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].transform(normal, transform));

    mesh.positions = positions;
    mesh.normals = normals;
}

function applyTranslation(mesh, translation) {
    console.assert(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isObject(mesh));

    const positions = mesh.positions
        .map(position => __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].add(position, translation));
    mesh.positions = positions;
}

function applyOrigin(mesh, normalizedOrigin) {
    console.assert(normalizedOrigin.length === 3);
    console.assert(-1 >= normalizedOrigin[0] <= 1);
    console.assert(-1 >= normalizedOrigin[1] <= 1);
    console.assert(-1 >= normalizedOrigin[2] <= 1);
    console.assert('positions' in mesh);

    const extents = getExtents(mesh);
    const unnormalizedOrigin = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].multiply(normalizedOrigin, extents);
    const positions = mesh.positions.map(position => __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].scaleAndAdd(position, unnormalizedOrigin, -0.5));
    mesh.positions = positions;
}

function getExtents(mesh) {
    console.assert('positions' in mesh);
    const min = mesh.positions.reduce((result, pos) => __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].min(result, pos), __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].largest());
    const max = mesh.positions.reduce((result, pos) => __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].max(result, pos), __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].smallest());
    return __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].sub(max, min);
}

function calculateNormals(mesh) {
    console.assert('positions' in mesh);

    const normals = mesh.positions
        // split vertices into triangles
        .reduce((triangles, vertex, index) => {
            if(index % 3 === 0) {
                triangles.push([]);
            }

            triangles[triangles.length - 1].push(vertex);
            return triangles;
        }, [])
        // calculate normals per triangle
        .map(triangle => {
            const edge3 = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].sub(triangle[1], triangle[0]);
            const edge1 = __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].sub(triangle[2], triangle[1]);
            return __WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].normalize(__WEBPACK_IMPORTED_MODULE_1__Vec3_js__["a" /* default */].cross(edge3, edge1));
        })
        // triplicate normals
        .reduce((vertexNormals, triangleNormal) => {
            vertexNormals.push(triangleNormal, triangleNormal, triangleNormal);
            return vertexNormals;
        }, []);
    mesh.normals = normals;
}

function merge(...meshes) {
    const positions = Array().concat(...meshes.map(mesh => mesh.positions));
    const normals = Array().concat(...meshes.map(mesh => mesh.normals));

    return {
        positions,
        normals,
        mode: meshes[0].mode
    };
}


/***/ }),

/***/ "./src/Shader.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    compile,
    destroy
});

function compile(gl, type, source) {
    const glShader = gl.createShader(type);
    gl.shaderSource(glShader, source);
    gl.compileShader(glShader);

    if(!gl.getShaderParameter(glShader, gl.COMPILE_STATUS)) {
        const info = gl.getShaderInfoLog(glShader);
        gl.deleteShader(glShader);
        throw new Error(`Failed to compile shader:\n${info}`);
    }

    // console.log(`Shader.compile(${type}, ...) succeeded`);
    return glShader;
}

function destroy(gl, shader) {
    if(!gl.isShader(shader)) {
        throw new TypeError(`Attempted to destroy non-shader object '${shader}'`);
    }

    gl.deleteShader(shader);
    return null;
}


/***/ }),

/***/ "./src/ShaderProgram.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ArrayUtils_js__ = __webpack_require__("./src/ArrayUtils.js");


/* harmony default export */ __webpack_exports__["a"] = ({
    compile
});

function compile(gl, ...shaders) {
    console.assert(gl instanceof WebGLRenderingContext);

    const program = gl.createProgram();
    shaders.forEach(shader => {
        gl.attachShader(program, shader);
    });
    gl.linkProgram(program);

    if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.warn('Failed to load shader program "%s": %s',
            name, gl.getProgramInfoLog(program));
        return null;
    }

    program.attributes = {};
    program.attributes.vertexPosition = gl.getAttribLocation(program, 'aVertexPosition');

    const activeUniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
    program.uniformLocations = __WEBPACK_IMPORTED_MODULE_0__ArrayUtils_js__["a" /* default */].range(activeUniformCount)
        .map(index => gl.getActiveUniform(program, index))
        .map(info => ({ key: info.name, location: gl.getUniformLocation(program, info.name) }))
        .reduce((object, pair) => {
            object[pair.key] = pair.location;
            return object;
        }, {});

    return program;
}

/*
const ShaderProgram = Object.freeze({
    destroy: function () {
        console.assert(this.isValid());
        this.gl.deleteProgram(this.glProgram);
        this.glProgram = null;
    },

    isValid: function () {
        if(!this.glProgram) {
            return false;
        }

        return this.gl.isProgram(this.glProgram);
    }
});


export default function (gl) {
    console.assert(gl instanceof WebGLRenderingContext);

    return {
        create,
    };

    function create(...shaders) {
        const instance = Object.assign(Object.create(ShaderProgram), {
            gl,
            glProgram: compileProgram(shaders)
        });
        return instance;
    }

    function compileProgram([vs, fs]) {
        const program = gl.createProgram();
        vs = vs.glShader;
        fs = fs.glShader;
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);

        if(!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.warn('Failed to load shader program "%s": %s',
                name, gl.getProgramInfoLog(program));
            return null;
        }

        program.attributes = {};
        program.attributes.vertexPosition = gl.getAttribLocation(program, 'aVertexPosition');

        program.uniforms = {};
        program.uniforms.world = gl.getUniformLocation(program, 'uWorld');
        program.uniforms.view = gl.getUniformLocation(program, 'uView');
        program.uniforms.projection = gl.getUniformLocation(program, 'uProjection');

        return program;
    }
}
*/


/***/ }),

/***/ "./src/Type.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    getName,
    isString,
    isArray,
    isFunction,
    isUndefined,
    isNull,
    isObject,
    isNumber,
    isBoolean,
});

function getName(value) {
    if(isNull(value)) {
        return 'null';
    }

    if(isArray(value)) {
        return 'array';
    }

    return typeof value;
}

function isString(value) {
    return typeof value === 'string';
}

function isArray(value) {
    return Array.isArray(value);
}

function isFunction(value) {
    return typeof value === 'function';
}

function isUndefined(value) {
    return typeof value === 'undefined';
}

function isNull(value) {
    return value === null;
}

function isObject(value) {
    return Object(value) === value;
}

function isNumber(value) {
    return typeof value === 'number';
}

function isBoolean(value) {
    return typeof value === 'boolean';
}


/***/ }),

/***/ "./src/Vec3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type_js__ = __webpack_require__("./src/Type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Mat3_js__ = __webpack_require__("./src/Mat3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ArrayUtils_js__ = __webpack_require__("./src/ArrayUtils.js");




const VECTOR_LENGTH = 3;

/* harmony default export */ __webpack_exports__["a"] = ({
    parse,
    fromValues,
    add,
    sub,
    multiply,
    normalize,
    dot,
    cross,
    zero,
    one,
    transform,
    scale,
    clone,
    largest,
    smallest,
    min,
    max,
    scaleAndAdd
});

function scaleAndAdd(v1, v2, scalar) {
    return add(v1, scale(v2, scalar));
}

function min(v1, v2) {
    return __WEBPACK_IMPORTED_MODULE_2__ArrayUtils_js__["a" /* default */].range(VECTOR_LENGTH)
        .map(i => Math.min(v1[i], v2[i]));
}

function max(v1, v2) {
    return __WEBPACK_IMPORTED_MODULE_2__ArrayUtils_js__["a" /* default */].range(VECTOR_LENGTH)
        .map(i => Math.max(v1[i], v2[i]));
}

function largest() {
    return fromValues(
        Number.POSITIVE_INFINITY,
        Number.POSITIVE_INFINITY,
        Number.POSITIVE_INFINITY,
    );
}

function smallest() {
    return fromValues(
        Number.NEGATIVE_INFINITY,
        Number.NEGATIVE_INFINITY,
        Number.NEGATIVE_INFINITY,
    );
}

function multiply(v1, v2) {
    return __WEBPACK_IMPORTED_MODULE_2__ArrayUtils_js__["a" /* default */].range(3)
        .map(i => v1[i] * v2[i]);
}

function clone(v) {
    return fromValues(...v);
}

function parse(value) {
    if(value instanceof Float32Array) {
        return value.slice();
    }

    if(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isArray(value)) {
        return fromValues(...value);
    }

    if(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isNumber(value)) {
        return fromValues(value, value, value);
    }


    if(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isUndefined(value)) {
        return zero();
    }

    throw new TypeError(`Failed to parse value of type '${__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].getName(value)}' into a Vec3`);
}

function cross(v1, v2) {
    return new Float32Array([
        v1[1] * v2[2] - v1[2] * v2[1],
        v1[2] * v2[0] - v1[0] * v2[2],
        v1[0] * v2[1] - v1[1] * v2[0]
    ]);
}

function add(v1, v2) {
    return fromValues(
        v1[0] + v2[0],
        v1[1] + v2[1],
        v1[2] + v2[2]
    );
}

function sub(v1, v2) {
    return new Float32Array([
        v1[0] - v2[0],
        v1[1] - v2[1],
        v1[2] - v2[2]
    ]);
}

function normalize(v) {
    return scale(v, 1 / length(v));
}

function scale(v, scalar) {
    return v.map(element => element * scalar);
}

function length(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}

function fromValues(x = 0, y = 0, z = 0) {
    return new Float32Array([x, y, z]);
}

function zero() {
    return fromValues(0, 0, 0);
}

function one() {
    return fromValues(1, 1, 1);
}

function dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2];
}

function transform(v, m) {
    return fromValues(
        dot(v, __WEBPACK_IMPORTED_MODULE_1__Mat3_js__["a" /* default */].getColumn(m, 0)),
        dot(v, __WEBPACK_IMPORTED_MODULE_1__Mat3_js__["a" /* default */].getColumn(m, 1)),
        dot(v, __WEBPACK_IMPORTED_MODULE_1__Mat3_js__["a" /* default */].getColumn(m, 2))
    );
}


/***/ }),

/***/ "./src/Vec4.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Type_js__ = __webpack_require__("./src/Type.js");


/* harmony default export */ __webpack_exports__["a"] = ({
    fromValues,
    dot,
    parse,
    zero
});

function parse(value) {
    if(value instanceof Float32Array) {
        return value.slice();
    }

    if(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isArray(value)) {
        return fromValues(...value);
    }

    if(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isNumber(value)) {
        return fromValues(value, value, value, 1);
    }

    if(__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].isUndefined(value)) {
        return zero();
    }

    throw new TypeError(`Failed to parse value of type '${__WEBPACK_IMPORTED_MODULE_0__Type_js__["a" /* default */].getName(value)}' into a Vec4`);
}

function fromValues(x = 0, y = 0, z = 0, w = 1) {
    return new Float32Array([x, y, z, w]);
}

function dot(v1, v2) {
    return v1[0] * v2[0] + v1[1] * v2[1] + v1[2] * v2[2] + v1[3] * v2[3];
}

function zero() {
    return fromValues(0, 0, 0, 0);
}


/***/ }),

/***/ "./src/main.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css__ = __webpack_require__("./src/style.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MathUtils_js__ = __webpack_require__("./src/MathUtils.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random_js__ = __webpack_require__("./node_modules/random-js/lib/random.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_random_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_random_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Type_js__ = __webpack_require__("./src/Type.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Gfx_js__ = __webpack_require__("./src/Gfx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__GlMesh_js__ = __webpack_require__("./src/GlMesh.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Mesh_js__ = __webpack_require__("./src/Mesh.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Shader_js__ = __webpack_require__("./src/Shader.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ShaderProgram_js__ = __webpack_require__("./src/ShaderProgram.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Vec3_js__ = __webpack_require__("./src/Vec3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Vec4_js__ = __webpack_require__("./src/Vec4.js");














const modules = {};
let animationFrameId = null;

initContentHmr();
init();

function init() {
    const canvas = document.querySelector('canvas');

    canvas.addEventListener('click', handleClick);
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('resize', handleResize);

    restart();
}

function restart() {
    console.log('%cRestarting...', 'font-weight:bold');
    const canvas = document.querySelector('canvas');

    const urlParams = Object.assign({
        scene: 'models/grassWall.json',
        single: false
    }, getUrlParameters(window.location));
    const scene = loadScene(canvas, urlParams);

    cancelAnimationFrame(animationFrameId);
    startRenderLoop(canvas, scene, urlParams);
}

function initContentHmr() {
    let context = __webpack_require__("./content recursive \\.(js|json|vert|frag|png|jpg)$");
    for(const key of context.keys()) {
        modules[key] = context(key);
    }

    if(false) {
        module.hot.accept(context.id, () => {
            const newContext = require.context('../content', true, /\.(js|json|vert|frag|png|jpg)$/);
            const changedModules = newContext.keys()
                .map(key => ({ key: key, 'module': newContext(key) }))
                .filter(pair => modules[pair.key] !== pair.module);

            changedModules.forEach(pair => {
                modules[pair.key] = pair.module;
                /*
                if(getHashComponent(window.location.hash) === pair.key.replace(/^\.\//, '')) {
                    reloadModel();
                    console.log('Reloaded', pair.key);
                }
                else {
                    console.log('Not reloaded', pair.key);
                }
                */
            });
            restart();
        });
    }
}

function handleClick() {
    restart();
}

function handleHashChange() {
    restart();
}

function handleResize() {
    restart();
}

function expandTemplates(object) {
    Object.keys(object)
        .map(key => ({ key: key, value: object[key] }))
        .filter(pair => isTemplate(pair.value))
        .forEach(pair => {
            console.assert(isTemplate(pair.value));

            const {
                position: {
                    min: positionMin = __WEBPACK_IMPORTED_MODULE_9__Vec3_js__["a" /* default */].zero(),
                    max: positionMax = __WEBPACK_IMPORTED_MODULE_9__Vec3_js__["a" /* default */].zero(),
                } = {},
                orientation: {
                    min: orientationMin = __WEBPACK_IMPORTED_MODULE_9__Vec3_js__["a" /* default */].zero(),
                    max: orientationMax = __WEBPACK_IMPORTED_MODULE_9__Vec3_js__["a" /* default */].zero(),
                } = {},
                scale: {
                    min: scaleMin = __WEBPACK_IMPORTED_MODULE_9__Vec3_js__["a" /* default */].one(),
                    max: scaleMax = __WEBPACK_IMPORTED_MODULE_9__Vec3_js__["a" /* default */].one(),
                } = {},
                seed = 0,
                count = 1,
                template
            } = pair.value;

            const positionRandomEngine = __WEBPACK_IMPORTED_MODULE_2_random_js___default.a.engines.mt19937().seed(seed);
            const orientationRandomEngine = __WEBPACK_IMPORTED_MODULE_2_random_js___default.a.engines.mt19937().seed(seed);
            const scaleRandomEngine = __WEBPACK_IMPORTED_MODULE_2_random_js___default.a.engines.mt19937().seed(seed);
            object[pair.key] = Array(count).fill(null)
                .map(() => {
                    return Object.assign({}, template, {
                        position: randomVec3(positionRandomEngine, positionMin, positionMax),
                        orientation: randomVec3(orientationRandomEngine, orientationMin, orientationMax),
                        scale: randomVec3(scaleRandomEngine, scaleMin, scaleMax),
                    });
                });
        });

    Object.values(object)
        .filter(__WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isObject)
        .filter(value => !__WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isArray(value))
        .forEach(expandTemplates);
}

function evaluateFunctions(object) {
    console.assert(__WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isObject(object));

    Object.keys(object)
        .map(key => ({ key: key, value: object[key] }))
        .filter(pair => isProceduralFunction(pair.value))
        .forEach(pair => {
            const moduleName = `./procedural/${pair.value.function}.js`;
            if(moduleName in modules === false) {
                throw new Error(`Cannot evaluate function '${moduleName}'`);
            }
            const t0 = performance.now();
            const func = modules[moduleName].default;
            const result = func(pair.value.params);
            const t1 = performance.now();

            console.log(`Procedure '${pair.value.function}' evaluated to '${__WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].getName(result)}' (${(t1 - t0).toFixed(1)} ms):`, result);
            object[pair.key] = result;
        });

    Object.values(object)
        .filter(__WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isObject)
        .forEach(evaluateFunctions);
}

function isProceduralFunction(value) {
    if(!__WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isObject(value)) {
        return false;
    }

    if('function' in value === false) {
        return false;
    }

    return true;
}

function isTemplate(value) {
    if(!__WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isObject(value)) {
        return false;
    }

    if(__WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isArray(value)) {
        return false;
    }

    if('template' in value === false) {
        return false;
    }

    return true;
}

function convertDegreesToRadians(object) {
    console.assert(__WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isObject(object));

    Object.keys(object)
        .map(key => ({ key: key, value: object[key] }))
        .filter(pair => pair.key.match(/orientation|rotation/))
        .forEach(pair => {
            object[pair.key] = pair.value.map(__WEBPACK_IMPORTED_MODULE_1__MathUtils_js__["a" /* default */].degToRad);
        });

    Object.keys(object)
        .map(key => ({ key: key, value: object[key] }))
        .filter(pair => __WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isObject(pair.value))
        .forEach(pair => convertDegreesToRadians(pair.value));
}

function convertColorsToRGBA(object) {
    Object.keys(object)
        .map(key => ({ key: key, value: object[key] }))
        .filter(pair => pair.key.match(/albedo|clearColor/))
        .forEach(pair => object[pair.key] = parseColor(pair.value));

    Object.keys(object)
        .map(key => ({ key: key, value: object[key] }))
        .filter(pair => __WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isObject(pair.value))
        .forEach(pair => convertColorsToRGBA(pair.value));
}

function loadScene(canvas, { scene: scenePath }) {
    console.group(`Loading scene '${scenePath}'`);

    const model = JSON.parse(JSON.stringify(modules[`./${scenePath}`]));
    const resources = modules;
    const gl = __WEBPACK_IMPORTED_MODULE_4__Gfx_js__["a" /* default */].getGlContext(canvas);

    console.time('Scene creation');

    // convert albedos to RGBA
    console.time('Convert colors to RGBA');
    convertColorsToRGBA(model);
    console.timeEnd('Convert colors to RGBA');

    // expand templates
    console.time('Expand templates');
    expandTemplates(model);
    console.timeEnd('Expand templates');

    // evaluate functions
    console.time('Evaluate functions');
    evaluateFunctions(model);
    console.timeEnd('Evaluate functions');

    // convert degrees to radians
    console.time('Convert degrees to radians');
    convertDegreesToRadians(model);
    console.timeEnd('Convert degrees to radians');

    // extract nodes from 'children' arrays
    console.time('Extract nodes from \'children\' arrays');
    Object.keys(model)
        .map(key => ({ key: key, value: model[key] }))
        .filter(pair => 'children' in pair.value)
        .forEach(pair => {
            pair.value.children.forEach((child, index) => {
                child.parent = `@${pair.key}`;
                model[`${pair.key}.${index}`] = child;
            });
            delete pair.value.children;
        });
    console.timeEnd('Extract nodes from \'children\' arrays');

    // create an array of nodes, with keys, from the source object
    const t0 = performance.now();
    const nodes = Object
        .keys(model)
        // create key-value pairs
        .map(key => ({ key: key, value: model[key] }))
        // merge key and value into a new node
        .map(pair => Object.assign({}, pair.value, { key: pair.key }));
    console.log(`Created ${nodes.length} nodes (${(performance.now() - t0).toFixed(1)} ms)`);

    // resolve references
    nodes
        .forEach(node => {
            Object.keys(node)
                .filter(key => __WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isString(node[key]))
                .filter(key => node[key].startsWith('@'))
                .map(key => ({ key: key, ref: node[key].substr(1) }))
                .forEach(pair => node[pair.key] = nodes.find(item => item.key === pair.ref));
        });

    // resolve parents
    nodes
        .filter(node => __WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isString(node.parent))
        .forEach(node => {
            const parent = nodes.find(item => item.key === node.parent.substr(1));
            node.parent = parent;
        });

    // calculate globalTransform for all nodes
    console.time('Calculated global transform');
    nodes.forEach(node => node.globalTransform = __WEBPACK_IMPORTED_MODULE_4__Gfx_js__["a" /* default */].getGlobalTransform(node));
    console.timeEnd('Calculated global transform');

    // create meshes from geometries
    let meshCount = 0;
    const meshes = nodes
        .filter(node => 'geometry' in node)
        .map(node => node.geometry)
        .reduce((meshes, geometry) => {
            if(!meshes.get(geometry)) {
                meshes.set(geometry, __WEBPACK_IMPORTED_MODULE_6__Mesh_js__["a" /* default */].fromGeometry(geometry));
                meshCount++;
            }

            return meshes;
        }, new WeakMap());
    console.log(`Created ${meshCount} meshes`);

    // assign meshes to nodes
    nodes
        .filter(node => 'geometry' in node)
        .forEach(node => node.mesh = meshes.get(node.geometry));

    let glMeshCount = 0;
    const glMeshes = nodes
        .filter(node => 'mesh' in node)
        .map(node => node.mesh)
        .reduce((glMeshes, mesh) => {
            if(!glMeshes.get(mesh)) {
                glMeshes.set(mesh, __WEBPACK_IMPORTED_MODULE_5__GlMesh_js__["a" /* default */].fromMesh(gl, mesh));
                glMeshCount++;
            }

            return glMeshes;
        }, new WeakMap());
    console.log(`Created ${glMeshCount} GlMesh`);

    // assign meshes to nodes
    nodes
        .filter(node => 'mesh' in node)
        .forEach(node => node.mesh = glMeshes.get(node.mesh));

    // delete geometry from all nodes with a mesh
    nodes
        .filter(node => 'mesh' in node)
        .forEach(node => delete node.geometry);

    // assign default program names to all nodes
    nodes
        .filter(node => 'mesh' in node)
        .forEach(node => node.shaderProgram = node.shaderProgram || 'ambient');
    nodes
        .filter(node => 'light' in node)
        .forEach(node => node.shaderProgram = node.shaderProgram || 'sunlight');

    // compile unique programs
    const programs = nodes
        .filter(node => 'shaderProgram' in node)
        .map(node => node.shaderProgram)
        .reduce((compiledPrograms, programName) => {
            if(programName in compiledPrograms === false) {
                const vsSrc = resources[`./shaders/${programName}.vert`];
                const fsSrc = resources[`./shaders/${programName}.frag`];
                const vs = __WEBPACK_IMPORTED_MODULE_7__Shader_js__["a" /* default */].compile(gl, gl.VERTEX_SHADER, vsSrc);
                const fs = __WEBPACK_IMPORTED_MODULE_7__Shader_js__["a" /* default */].compile(gl, gl.FRAGMENT_SHADER, fsSrc);
                const program = __WEBPACK_IMPORTED_MODULE_8__ShaderProgram_js__["a" /* default */].compile(gl, vs, fs);
                compiledPrograms[programName] = program;
            }

            return compiledPrograms;
        }, {});
    console.log(`Compiled ${Object.keys(programs).length} shader programs`);

    // assign programs to nodes
    nodes
        .filter(node => 'shaderProgram' in node)
        .forEach(node => node.shaderProgram = programs[node.shaderProgram]);

    const scene = { nodes };
    console.timeEnd('Scene creation');

    console.groupEnd();
    return scene;
}

function startRenderLoop(canvas, scene, { single = false, useHack = false }) {
    console.assert(__WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isBoolean(single));
    console.log(`Starting render loop... (single = ${single})`);
    let totalTimeLastFrame = performance.now();
    animationFrameId = requestAnimationFrame(loop);

    function loop(totalTime) {
        const deltaTime = totalTime - totalTimeLastFrame;

        __WEBPACK_IMPORTED_MODULE_4__Gfx_js__["a" /* default */].renderScene(canvas, scene, { total: (single ? 0 : totalTime), delta: deltaTime }, useHack);
        totalTimeLastFrame = totalTime;
        animationFrameId = requestAnimationFrame(loop);

        if(single) {
            cancelAnimationFrame(animationFrameId);
            console.log(`Rendering took ${(performance.now() - totalTime).toFixed(1)} ms`);
        }
    }
}

function randomVec3(engine, min, max) {
    const distX = __WEBPACK_IMPORTED_MODULE_2_random_js___default.a.real(min[0], max[0], true);
    const distY = __WEBPACK_IMPORTED_MODULE_2_random_js___default.a.real(min[1], max[1], true);
    const distZ = __WEBPACK_IMPORTED_MODULE_2_random_js___default.a.real(min[2], max[2], true);
    return __WEBPACK_IMPORTED_MODULE_9__Vec3_js__["a" /* default */].fromValues(
        distX(engine),
        distY(engine),
        distZ(engine)
    );
}

function getUrlParameters(location) {
    console.assert('hash' in location);

    const parameters = (decodeURIComponent(location.hash).match(/(?=[^#])[^&\s]+=[^&\s]+/g) || [])
        .reduce((object, match) => {
            const [key, value] = match.split('=');
            object[key] = parseString(value);

            return object;
        }, {});

    return parameters;
}

function parseColor(value) {
    if(__WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isString(value)) {
        return __WEBPACK_IMPORTED_MODULE_10__Vec4_js__["a" /* default */].parse(convertNameToColor(value));
    }

    return __WEBPACK_IMPORTED_MODULE_10__Vec4_js__["a" /* default */].parse(value);
}

function parseString(string) {
    console.assert(__WEBPACK_IMPORTED_MODULE_3__Type_js__["a" /* default */].isString(string));

    if(string === '') {
        return string;
    }

    if(string === 'true') {
        return true;
    }

    if(string === 'false') {
        return false;
    }

    if(!isNaN(string)) {
        return +string;
    }

    return string;
}

function convertNameToColor(colorName) {
    const element = document.createElement('div');
    element.style.color = colorName;

    document.body.appendChild(element);
    const rawColor = getComputedStyle(element).color;
    document.body.removeChild(element);

    const color = rawColor.match(/\d+/g)
        .map(item => parseInt(item))
        .map(item => item / 255);

    return color;
}

/*
function loadModel(model) {
    render(model);
}

function requestModelFile(path) {
    const DEFAULT_MODEL = 'models/weird-canyon3.json';

    if(path.length === 0) {
        path = DEFAULT_MODEL;
    }

    requestFile(path)
        .catch(error => {
            console.error(`Failed to load model '${path}': ${error}`);
        })
        .then(response => {
            console.log(`Loading model '${path}'...`);
            loadModel(JSON.parse(response));
        });
}

function handleHashChange(e) {
    requestModelFile(getHashComponent(e.target.location.hash));
}

function requestFile(path) {
    const READY_STATE = Object.freeze({
        0: 'UNSENT',
        1: 'OPENED',
        2: 'HEADERS_RECEIVED',
        3: 'LOADING',
        4: 'DONE'
    });

    return new Promise(executor);

    function executor(resolve, reject) {
        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', handleReadyStateChange);
        request.addEventListener('progress', handleProgress);
        request.addEventListener('load', handleLoad);
        request.addEventListener('error', handleError);
        request.addEventListener('abort', handleAbort);
        request.open('GET', path);
        request.send();

        function handleReadyStateChange(e) {
            const readyState = READY_STATE[e.target.readyState];
            if(readyState === 'LOADING') {
                return;
            }

            console.log(`${path}: ${READY_STATE[e.target.readyState]} [${e.target.status}]`);
        }

        function handleProgress(e) {
            const ratio = ((e.loaded / e.total) * 100).toFixed(1);
            const percentComplete = e.lengthComputable ?
                `${ratio}%` :
                '<N/A>';

            const loaded = bytesToHumanReadable(e.loaded);
            const total = bytesToHumanReadable(e.total);

            console.log(`${path}: ${percentComplete} (${loaded}/${total}) [${e.target.status}]`);
        }

        function handleLoad(e) {
            console.log(`${path}: LOAD`);

            if(e.target.status === 200 || e.target.status === 0) {
                resolve(e.target.responseText);
            }

            reject(new Error(e.target.statusText));
        }

        function handleError(e) {
            console.log(`${path}: ERROR`);
            reject(new Error(e.target.statusText));
        }

        function handleAbort(e) {
            console.log(`${path}: ABORT`);
            reject(new Error(e.target.statusText));
        }
    }
}

function bytesToHumanReadable(bytes) {
    if(bytes > Math.pow(1000, 2)) {
        return `${(bytes/Math.pow(1000, 2)).toFixed(2)}MB`;
    }
    if(bytes > Math.pow(1000, 1)) {
        return `${(bytes/Math.pow(1000, 1)).toFixed(0)}kB`;
    }

    return `${bytes}B`;
}

function updateCanvasSize() {
    const width = canvas.parentNode.clientWidth;
    const height = canvas.parentNode.clientHeight;

    if(canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        console.log(`Resized canvas to [${canvas.width}, ${canvas.height}]`);
    }
}

function render(model) {
    updateCanvasSize();
    json2gfx(canvas, model);
}
*/


/***/ }),

/***/ "./src/style.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./src/style.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWEzNDA4OTk5NzVlZWYwN2NmMjEiLCJ3ZWJwYWNrOi8vLy4vY29udGVudCBcXC4oanN8anNvbnx2ZXJ0fGZyYWd8cG5nfGpwZykkIiwid2VicGFjazovLy8uL2NvbnRlbnQvbW9kZWxzL2ZvcmVzdC5qc29uIiwid2VicGFjazovLy8uL2NvbnRlbnQvbW9kZWxzL2dyYXNzV2FsbC5qc29uIiwid2VicGFjazovLy8uL2NvbnRlbnQvbW9kZWxzL3RlcnJhaW4uanNvbiIsIndlYnBhY2s6Ly8vLi9jb250ZW50L21vZGVscy90ZXN0Mi5qc29uIiwid2VicGFjazovLy8uL2NvbnRlbnQvbW9kZWxzL3RyZWUuanNvbiIsIndlYnBhY2s6Ly8vLi9jb250ZW50L21vZGVscy93ZWlyZC1jYW55b24zLmpzb24iLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wcm9jZWR1cmFsL0N1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wcm9jZWR1cmFsL0dyYXNzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcHJvY2VkdXJhbC9HcmlkLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcHJvY2VkdXJhbC9RdWFkLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcHJvY2VkdXJhbC9UZXJyYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcHJvY2VkdXJhbC9UcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3Byb2NlZHVyYWwvVHVybmluZ1RvcnNvLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2hhZGVycy9hbWJpZW50LmZyYWciLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaGFkZXJzL2FtYmllbnQudmVydCIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NoYWRlcnMvZGVidWctdXYuZnJhZyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NoYWRlcnMvZGVidWctdXYudmVydCIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NoYWRlcnMvcG9pbnRsaWdodC5mcmFnIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2hhZGVycy9wb2ludGxpZ2h0LnZlcnQiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaGFkZXJzL3NoYWRvdy5mcmFnIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2hhZGVycy9zaGFkb3cudmVydCIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NoYWRlcnMvc3VubGlnaHQtdGVycmFpbi5mcmFnIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2hhZGVycy9zdW5saWdodC10ZXJyYWluLnZlcnQiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaGFkZXJzL3N1bmxpZ2h0LmZyYWciLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaGFkZXJzL3N1bmxpZ2h0LnZlcnQiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaGFkZXJzL3RlcnJhaW4uZnJhZyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NoYWRlcnMvdGVycmFpbi52ZXJ0Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYW5kb20tanMvbGliL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXJyYXlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2Z4LmpzIiwid2VicGFjazovLy8uL3NyYy9HbE1lc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWF0My5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWF0NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWF0aFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9NZXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9TaGFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NoYWRlclByb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZlYzMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZlYzQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz9iZDg0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRTs7Ozs7OztBQzNDQSxrQkFBa0IsaUJBQWlCLDZCQUE2QixtQkFBbUIsd0JBQXdCLFVBQVUsWUFBWSxlQUFlLGFBQWEsMENBQTBDLGdCQUFnQixpQ0FBaUMsVUFBVSxnQ0FBZ0Msc0JBQXNCLGFBQWEsb0NBQW9DLHlGQUF5RixVQUFVLGdFQUFnRSw0QkFBNEIsb0VBQW9FLG1CQUFtQiw4QkFBOEIsWUFBWSwyQ0FBMkMsYUFBYSxrQ0FBa0MsZ0JBQWdCLGlDQUFpQyxVQUFVLG9DQUFvQyxlQUFlLHFCQUFxQiw4QkFBOEIsWUFBWSx3REFBd0QsYUFBYSxrQ0FBa0MsZ0JBQWdCLCtCQUErQix5QkFBeUIsY0FBYyw4QkFBOEIsWUFBWSxvQ0FBb0MsYUFBYSxrQ0FBa0MsZ0JBQWdCLG1DQUFtQyxVQUFVLHdDQUF3Qyx5QkFBeUIsUUFBUSxTQUFTLDhFQUE4RSxXQUFXLDhGOzs7Ozs7O0FDQWw5QyxrQkFBa0IsaUJBQWlCLFdBQVcseURBQXlELEVBQUUsc0JBQXNCLFVBQVUsWUFBWSxlQUFlLGFBQWEsMENBQTBDLGdCQUFnQixpQ0FBaUMsVUFBVSxpQ0FBaUMsc0JBQXNCLHdCQUF3QixVQUFVLFlBQVksZUFBZSxhQUFhLGtDQUFrQyxnQkFBZ0IsaUNBQWlDLFVBQVUsZ0NBQWdDLHNCQUFzQix1QkFBdUIsVUFBVSxZQUFZLGVBQWUsYUFBYSxrQ0FBa0MsZ0JBQWdCLGlDQUFpQyxVQUFVLGdDQUFnQyxzQkFBc0IsVUFBVSxxRkFBcUYsY0FBYyx1RUFBdUUsWUFBWSxrRUFBa0UsYUFBYSxpQ0FBaUMsZ0JBQWdCLGlDQUFpQyxVQUFVLDZCQUE2Qix5QkFBeUIsZ0JBQWdCLHVFQUF1RSxZQUFZLG9FQUFvRSxhQUFhLGlDQUFpQyxnQkFBZ0IsaUNBQWlDLFVBQVUsNEJBQTRCLHlCQUF5QixlQUFlLHVFQUF1RSxZQUFZLGlFQUFpRSxhQUFhLGlDQUFpQyxnQkFBZ0IsaUNBQWlDLFVBQVUsNEJBQTRCLDJCQUEyQixRQUFRLFNBQVMsOEVBQThFLFdBQVcseUU7Ozs7Ozs7QUNBejVELGtCQUFrQixlQUFlLDhCQUE4QixpQkFBaUIsK0JBQStCLGdFQUFnRSxZQUFZLG1GQUFtRixhQUFhLGdFQUFnRSxRQUFRLDRDQUE0Qyw4RUFBOEUsV0FBVyxzRTs7Ozs7OztBQ0F4ZSxrQkFBa0IsaUJBQWlCLFdBQVcseURBQXlELEVBQUUseUJBQXlCLFVBQVUsWUFBWSxlQUFlLGFBQWEsa0NBQWtDLGdCQUFnQiwrQkFBK0IsVUFBVSw0QkFBNEIsc0JBQXNCLGdCQUFnQixXQUFXLGVBQWUsRUFBRSxVQUFVLHFGQUFxRixlQUFlLHVFQUF1RSxZQUFZLHNEQUFzRCxhQUFhLGtDQUFrQyxnQkFBZ0IsK0JBQStCLFVBQVUsNEJBQTRCLHlCQUF5QixnQkFBZ0Isd0VBQXdFLFlBQVksc0RBQXNELGFBQWEsa0NBQWtDLGdCQUFnQiwrQkFBK0IsVUFBVSw0QkFBNEIsd0JBQXdCLFFBQVEsU0FBUyw4RUFBOEUsV0FBVyxxRTs7Ozs7OztBQ0FqcUMsa0JBQWtCLGlCQUFpQixXQUFXLDhFQUE4RSxFQUFFLFdBQVcsaUVBQWlFLFVBQVUsK0JBQStCLFdBQVcsb0NBQW9DLEVBQUUsaUZBQWlGLEVBQUUsaUZBQWlGLEVBQUUsaUZBQWlGLEdBQUcsV0FBVyw4REFBOEQsbUJBQW1CLHNCQUFzQixvQ0FBb0MsMEZBQTBGLFFBQVEsU0FBUyw4RUFBOEUsV0FBVyx1RTs7Ozs7OztBQ0F4M0Isa0JBQWtCLGNBQWMsUUFBUSx3RUFBd0UsVUFBVSw4RUFBOEUsV0FBVyx3RkFBd0YsU0FBUyxpRkFBaUYsV0FBVyxxRUFBcUUsV0FBVyx5RUFBeUUsU0FBUyxpRkFBaUYsWUFBWSxtRkFBbUYsY0FBYyxRQUFRLDZDQUE2QyxZQUFZLGlEQUFpRCxVQUFVLFFBQVEsMEVBQTBFLFVBQVUsOEVBQThFLFdBQVcsOEVBQThFLFVBQVUsK0ZBQStGLFNBQVMsb0VBQW9FLFdBQVcsa0VBQWtFLFdBQVcsb0VBQW9FLGVBQWUsYUFBYSxvQ0FBb0MsOENBQThDLFFBQVEsbURBQW1ELDJCQUEyQixnQkFBZ0IsYUFBYSxvQ0FBb0MsNkNBQTZDLFFBQVEsaURBQWlELDJCQUEyQixtQkFBbUIsYUFBYSx1Q0FBdUMsNkNBQTZDLFFBQVEsaURBQWlELDBCQUEwQixRQUFRLFNBQVMsZ0ZBQWdGLGtGOzs7Ozs7Ozs7Ozs7OztBQ0EvbUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7K0RBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsMEJBQTBCLDBCQUEwQjtBQUNwRCwwQkFBMEIsMEJBQTBCO0FBQ3BELDBCQUEwQiwyQkFBMkI7QUFDckQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLHVFQUFrQiwyQkFBMkI7QUFDN0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFdBQVc7QUFDN0Isc0JBQXNCLFdBQVc7QUFDakM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzsrREFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7OztBQzFEQSwwQ0FBMEMsd0JBQXdCLHVCQUF1QixxQ0FBcUMsMkJBQTJCLDJCQUEyQixpQkFBaUIsd0dBQXdHLCtDQUErQyxHQUFHLEc7Ozs7Ozs7QUNBL1YsMENBQTBDLG9CQUFvQixxQkFBcUIsMEJBQTBCLDRCQUE0QixvQkFBb0IsMkJBQTJCLGlCQUFpQixxQkFBcUIseUNBQXlDLG1GQUFtRixrRUFBa0UsNERBQTRELHdEQUF3RCxHQUFHLEc7Ozs7Ozs7QUNBbmhCLDBDQUEwQyw4QkFBOEIseUJBQXlCLGlCQUFpQixzREFBc0QsMERBQTBELEdBQUcsRzs7Ozs7OztBQ0FyTywwQ0FBMEMsb0JBQW9CLHFCQUFxQiw0QkFBNEIsb0JBQW9CLDJCQUEyQixpQkFBaUIscUJBQXFCLHlEQUF5RCxHQUFHLEc7Ozs7Ozs7QUNBaFEsMENBQTBDLHVCQUF1QiwwQkFBMEIsd0JBQXdCLGdDQUFnQyxtQ0FBbUMsNEJBQTRCLDRCQUE0QiwrQkFBK0IsNEJBQTRCLDZCQUE2QixxRkFBcUYsd0VBQXdFLEdBQUcsMkpBQTJKLHdDQUF3QyxtQ0FBbUMsOEJBQThCLDhDQUE4Qyw0REFBNEQsMENBQTBDLHlCQUF5QixHQUFHLGlCQUFpQixrREFBa0QsMENBQTBDLHdGQUF3Riw0RkFBNEYsZ0ZBQWdGLEdBQUcsRzs7Ozs7OztBQ0E5d0MsMENBQTBDLG9CQUFvQixxQkFBcUIsNEJBQTRCLHdCQUF3QiwwQkFBMEIsNkJBQTZCLGlCQUFpQiw2Q0FBNkMsMENBQTBDLHlEQUF5RCxHQUFHLEc7Ozs7Ozs7QUNBbFcsMENBQTBDLGlCQUFpQiwrQkFBK0IsR0FBRyxHOzs7Ozs7O0FDQTdGLDBDQUEwQyxvQkFBb0IscUJBQXFCLDRCQUE0QixpQkFBaUIseURBQXlELDZCQUE2QixHQUFHLEc7Ozs7Ozs7QUNBek4sMENBQTBDLDRCQUE0Qiw4QkFBOEIsK0JBQStCLGlDQUFpQyw2QkFBNkIsNkJBQTZCLGlCQUFpQiwrQkFBK0IsNkJBQTZCLDhCQUE4QixpSEFBaUgsbUVBQW1FLHNDQUFzQyx1RkFBdUYsd0ZBQXdGLEdBQUcsSzs7Ozs7OztBQ0FydEIsMENBQTBDLG9CQUFvQixxQkFBcUIsNEJBQTRCLHdCQUF3QiwrQkFBK0IsMkJBQTJCLGlCQUFpQixtQ0FBbUMseUNBQXlDLGdGQUFnRixHQUFHLEc7Ozs7Ozs7QUNBalgsMENBQTBDLHdCQUF3QiwwQkFBMEIsOEJBQThCLCtCQUErQiwrQkFBK0IsaUJBQWlCLHFDQUFxQyx5RkFBeUYsd0ZBQXdGLEdBQUcsRzs7Ozs7OztBQ0FsYSwwQ0FBMEMsb0JBQW9CLHFCQUFxQiwwQkFBMEIsNEJBQTRCLHdCQUF3QiwrQkFBK0IsaUJBQWlCLDJDQUEyQyx5Q0FBeUMsbUZBQW1GLGtFQUFrRSw0REFBNEQsd0RBQXdELEdBQUcsRzs7Ozs7OztBQ0FqakIsMENBQTBDLG1DQUFtQyw2QkFBNkIsaUJBQWlCLCtCQUErQiw2QkFBNkIsOEJBQThCLGlIQUFpSCx5RUFBeUUsd0NBQXdDLEdBQUcsSzs7Ozs7OztBQ0ExYiwwQ0FBMEMsb0JBQW9CLHFCQUFxQiwwQkFBMEIsNEJBQTRCLHdCQUF3QixvQkFBb0IsK0JBQStCLGlCQUFpQixtQ0FBbUMsZ0ZBQWdGLEdBQUcsRzs7Ozs7OztBQ0EzVjtBQUNBOzs7QUFHQTtBQUNBLHFDQUFzQyxtQkFBbUIsZ0JBQWdCLGlCQUFpQixtQkFBbUIsR0FBRyxZQUFZLHFCQUFxQixtQkFBbUIsa0JBQWtCLHlCQUF5QixHQUFHOztBQUVsTjs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdCQUFnQjtBQUNuRCxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksb0JBQW9CO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxjQUFjOztBQUVsRTtBQUNBOzs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLFNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsWUFBWTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQUE7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDLFE7Ozs7Ozs7QUMzc0JEO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQixtQkFBbUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHNCQUFzQjtBQUN2Qzs7QUFFQTtBQUNBLG1CQUFtQiwyQkFBMkI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsbUJBQW1CO0FBQ25DO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsMkJBQTJCO0FBQzVDO0FBQ0E7O0FBRUEsUUFBUSx1QkFBdUI7QUFDL0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLGlCQUFpQjtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYzs7QUFFZCxrREFBa0Qsc0JBQXNCO0FBQ3hFO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUMvVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFdBQVcsRUFBRTtBQUNyRCx3Q0FBd0MsV0FBVyxFQUFFOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLHNDQUFzQztBQUN0QyxHQUFHO0FBQ0g7QUFDQSw4REFBOEQ7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBOzs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJGQUFzQyx3QkFBd0IsSUFBSSx5QkFBeUI7O0FBRTNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0dBQStDLGlEQUFpRDs7QUFFaEc7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpR0FBNEMsYUFBYTtBQUN6RDtBQUNBLEtBQUs7O0FBRUw7QUFDQSxrR0FBNkMsY0FBYztBQUMzRDtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBOztBQUVBLDZCQUE2Qix3QkFBd0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9EQUFvRCxXQUFXLGVBQWUsT0FBTztBQUNyRjtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbFpBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELHlFQUFvQjtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEMsd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQyx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM5VUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBOzt5REFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3pVQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsS0FBSztBQUMzRDs7QUFFQSxxQ0FBcUMsS0FBSztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUsT0FBTztBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMzQkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0VBQXNFO0FBQzdGO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBELHlFQUFvQjtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqSkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBEQUEwRCx5RUFBb0I7QUFDOUU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzQ0FBc0M7QUFDcEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixLQUFLO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLCtCQUErQjtBQUNyRDtBQUNBO0FBQ0EsK0NBQStDLG9CQUFvQjtBQUNuRTtBQUNBLDZEQUE2RCxXQUFXO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXNDLG9CQUFvQixrQkFBa0IsMEVBQXFCLEtBQUsscUJBQXFCO0FBQzNIO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLHNCQUFzQiwrQkFBK0I7QUFDckQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsK0JBQStCO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsbUJBQW1CO0FBQy9DLG9DQUFvQyxVQUFVOztBQUU5Qyx5REFBeUQsVUFBVTtBQUNuRTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw4QkFBOEI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFNBQVM7QUFDNUMseUJBQXlCLFNBQVMsR0FBRyxNQUFNO0FBQzNDLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDhCQUE4QjtBQUNwRDtBQUNBLHFDQUFxQyxlQUFlLGdCQUFnQjtBQUNwRSwyQkFBMkIsYUFBYSxVQUFVLG9DQUFvQzs7QUFFdEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHFDQUFxQztBQUNuRTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7QUFDVCwyQkFBMkIsVUFBVTs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULDJCQUEyQixZQUFZOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsWUFBWTtBQUNqRSxxREFBcUQsWUFBWTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxJQUFJO0FBQ2IsNEJBQTRCLDZCQUE2Qjs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx5Q0FBeUMsa0NBQWtDO0FBQzNFO0FBQ0EscURBQXFELE9BQU87QUFDNUQ7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDZGQUF3QyxvREFBb0Q7QUFDNUY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMENBQTBDLDJDQUEyQztBQUNyRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVMsSUFBSTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtREFBbUQsS0FBSyxLQUFLLE1BQU07QUFDbkUsU0FBUztBQUNUO0FBQ0EsMENBQTBDLEtBQUs7QUFDL0M7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkIsS0FBSyxJQUFJLGlDQUFpQyxJQUFJLGdCQUFnQjtBQUN6Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsTUFBTTtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBLDJCQUEyQixLQUFLLElBQUksZ0JBQWdCLElBQUksT0FBTyxHQUFHLE1BQU0sS0FBSyxnQkFBZ0I7QUFDN0Y7O0FBRUE7QUFDQSwyQkFBMkIsS0FBSzs7QUFFaEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsS0FBSztBQUNoQztBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLEtBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7O0FBRUEsY0FBYyxNQUFNO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsYUFBYSxJQUFJLGNBQWM7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQy9qQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbWFpbi5qc1wiKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5YTM0MDg5OTk3NWVlZjA3Y2YyMSIsInZhciBtYXAgPSB7XG5cdFwiLi9tb2RlbHMvZm9yZXN0Lmpzb25cIjogXCIuL2NvbnRlbnQvbW9kZWxzL2ZvcmVzdC5qc29uXCIsXG5cdFwiLi9tb2RlbHMvZ3Jhc3NXYWxsLmpzb25cIjogXCIuL2NvbnRlbnQvbW9kZWxzL2dyYXNzV2FsbC5qc29uXCIsXG5cdFwiLi9tb2RlbHMvdGVycmFpbi5qc29uXCI6IFwiLi9jb250ZW50L21vZGVscy90ZXJyYWluLmpzb25cIixcblx0XCIuL21vZGVscy90ZXN0Mi5qc29uXCI6IFwiLi9jb250ZW50L21vZGVscy90ZXN0Mi5qc29uXCIsXG5cdFwiLi9tb2RlbHMvdHJlZS5qc29uXCI6IFwiLi9jb250ZW50L21vZGVscy90cmVlLmpzb25cIixcblx0XCIuL21vZGVscy93ZWlyZC1jYW55b24zLmpzb25cIjogXCIuL2NvbnRlbnQvbW9kZWxzL3dlaXJkLWNhbnlvbjMuanNvblwiLFxuXHRcIi4vcHJvY2VkdXJhbC9DdWJlLmpzXCI6IFwiLi9jb250ZW50L3Byb2NlZHVyYWwvQ3ViZS5qc1wiLFxuXHRcIi4vcHJvY2VkdXJhbC9HcmFzcy5qc1wiOiBcIi4vY29udGVudC9wcm9jZWR1cmFsL0dyYXNzLmpzXCIsXG5cdFwiLi9wcm9jZWR1cmFsL0dyaWQuanNcIjogXCIuL2NvbnRlbnQvcHJvY2VkdXJhbC9HcmlkLmpzXCIsXG5cdFwiLi9wcm9jZWR1cmFsL1F1YWQuanNcIjogXCIuL2NvbnRlbnQvcHJvY2VkdXJhbC9RdWFkLmpzXCIsXG5cdFwiLi9wcm9jZWR1cmFsL1RlcnJhaW4uanNcIjogXCIuL2NvbnRlbnQvcHJvY2VkdXJhbC9UZXJyYWluLmpzXCIsXG5cdFwiLi9wcm9jZWR1cmFsL1RyaWFuZ2xlLmpzXCI6IFwiLi9jb250ZW50L3Byb2NlZHVyYWwvVHJpYW5nbGUuanNcIixcblx0XCIuL3Byb2NlZHVyYWwvVHVybmluZ1RvcnNvLmpzXCI6IFwiLi9jb250ZW50L3Byb2NlZHVyYWwvVHVybmluZ1RvcnNvLmpzXCIsXG5cdFwiLi9zaGFkZXJzL2FtYmllbnQuZnJhZ1wiOiBcIi4vY29udGVudC9zaGFkZXJzL2FtYmllbnQuZnJhZ1wiLFxuXHRcIi4vc2hhZGVycy9hbWJpZW50LnZlcnRcIjogXCIuL2NvbnRlbnQvc2hhZGVycy9hbWJpZW50LnZlcnRcIixcblx0XCIuL3NoYWRlcnMvZGVidWctdXYuZnJhZ1wiOiBcIi4vY29udGVudC9zaGFkZXJzL2RlYnVnLXV2LmZyYWdcIixcblx0XCIuL3NoYWRlcnMvZGVidWctdXYudmVydFwiOiBcIi4vY29udGVudC9zaGFkZXJzL2RlYnVnLXV2LnZlcnRcIixcblx0XCIuL3NoYWRlcnMvcG9pbnRsaWdodC5mcmFnXCI6IFwiLi9jb250ZW50L3NoYWRlcnMvcG9pbnRsaWdodC5mcmFnXCIsXG5cdFwiLi9zaGFkZXJzL3BvaW50bGlnaHQudmVydFwiOiBcIi4vY29udGVudC9zaGFkZXJzL3BvaW50bGlnaHQudmVydFwiLFxuXHRcIi4vc2hhZGVycy9zaGFkb3cuZnJhZ1wiOiBcIi4vY29udGVudC9zaGFkZXJzL3NoYWRvdy5mcmFnXCIsXG5cdFwiLi9zaGFkZXJzL3NoYWRvdy52ZXJ0XCI6IFwiLi9jb250ZW50L3NoYWRlcnMvc2hhZG93LnZlcnRcIixcblx0XCIuL3NoYWRlcnMvc3VubGlnaHQtdGVycmFpbi5mcmFnXCI6IFwiLi9jb250ZW50L3NoYWRlcnMvc3VubGlnaHQtdGVycmFpbi5mcmFnXCIsXG5cdFwiLi9zaGFkZXJzL3N1bmxpZ2h0LXRlcnJhaW4udmVydFwiOiBcIi4vY29udGVudC9zaGFkZXJzL3N1bmxpZ2h0LXRlcnJhaW4udmVydFwiLFxuXHRcIi4vc2hhZGVycy9zdW5saWdodC5mcmFnXCI6IFwiLi9jb250ZW50L3NoYWRlcnMvc3VubGlnaHQuZnJhZ1wiLFxuXHRcIi4vc2hhZGVycy9zdW5saWdodC52ZXJ0XCI6IFwiLi9jb250ZW50L3NoYWRlcnMvc3VubGlnaHQudmVydFwiLFxuXHRcIi4vc2hhZGVycy90ZXJyYWluLmZyYWdcIjogXCIuL2NvbnRlbnQvc2hhZGVycy90ZXJyYWluLmZyYWdcIixcblx0XCIuL3NoYWRlcnMvdGVycmFpbi52ZXJ0XCI6IFwiLi9jb250ZW50L3NoYWRlcnMvdGVycmFpbi52ZXJ0XCJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vY29udGVudCByZWN1cnNpdmUgXFxcXC4oanN8anNvbnx2ZXJ0fGZyYWd8cG5nfGpwZykkXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50IFxcLihqc3xqc29ufHZlcnR8ZnJhZ3xwbmd8anBnKSRcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudCByZWN1cnNpdmUgXFwuKGpzfGpzb258dmVydHxmcmFnfHBuZ3xqcGcpJFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcInRpbnlHcmFzc01lc2hcIjp7XCJmdW5jdGlvblwiOlwiR3Jhc3NcIixcInBhcmFtc1wiOntcIm9yaWdpblwiOlswLC0xLDBdfX0sXCJtZWRpdW1HcmFzc0dlb21ldHJ5XCI6e1wic2hhcGVzXCI6e1widGVtcGxhdGVcIjp7XCJzaGFwZVwiOlwiY3ViZVwifSxcInBvc2l0aW9uXCI6e1wibWluXCI6Wy0xLjUsMC41LC0xLjVdLFwibWF4XCI6WzEuNSwwLjUsMS41XX0sXCJvcmllbnRhdGlvblwiOntcIm1pblwiOlswLC0xODAsMF0sXCJtYXhcIjpbMCwxODAsMF19LFwic2NhbGVcIjp7XCJtaW5cIjpbMC4yLDEsMF0sXCJtYXhcIjpbMC4yLDksMF19LFwiY291bnRcIjo0NSxcInNlZWRcIjowfX0sXCJ0cmVlTWVzaFwiOntcImZ1bmN0aW9uXCI6XCJUdXJuaW5nVG9yc29cIixcInBhcmFtc1wiOntcIm9yaWdpblwiOlswLDAsMF0sXCJzY2FsZVwiOlswLjksMC45LDAuOV0sXCJzZWdtZW50c1wiOjMwLFwidHdpc3RcIjo1LFwic2hyaW5rXCI6MC4xNSxcImhlaWdodFwiOjh9fSxcImZsb29yXCI6e1wic2hhZG93XCI6ZmFsc2UsXCJvcmllbnRhdGlvblwiOlswLDAsMF0sXCJhbGJlZG9cIjpcIiNCODZBMjJcIixcIm1lc2hcIjp7XCJmdW5jdGlvblwiOlwiUXVhZFwiLFwicGFyYW1zXCI6e1wicG9zaXRpb25cIjpbMCwtMC4wMDEsMF0sXCJvcmllbnRhdGlvblwiOlstOTAsMCwwXSxcInNjYWxlXCI6Wzc1LDUwLDFdfX19LFwidGlueUdyYXNzRmllbGRcIjp7XCJwYXJlbnRcIjpcIkBmbG9vclwiLFwiY2hpbGRyZW5cIjp7XCJ0ZW1wbGF0ZVwiOntcImFsYmVkb1wiOlwiI0U5ODQyQ1wiLFwibWVzaFwiOlwiQHRpbnlHcmFzc01lc2hcIn0sXCJwb3NpdGlvblwiOntcIm1pblwiOlstNzUsMCwtNTBdLFwibWF4XCI6Wzc1LDAsNTBdfSxcIm9yaWVudGF0aW9uXCI6e1wibWluXCI6WzAsLTE4MCwwXSxcIm1heFwiOlswLDE4MCwwXX0sXCJzY2FsZVwiOntcIm1pblwiOlswLjIsMC4xLDAuMl0sXCJtYXhcIjpbMSwwLjMsMV19LFwiY291bnRcIjo0MDAwfX0sXCJtZWRpdW1HcmFzc0ZpZWxkXCI6e1wicGFyZW50XCI6XCJAZmxvb3JcIixcImNoaWxkcmVuXCI6e1widGVtcGxhdGVcIjp7XCJhbGJlZG9cIjpcInNhbmR5YnJvd25cIixcImdlb21ldHJ5XCI6XCJAbWVkaXVtR3Jhc3NHZW9tZXRyeVwifSxcInBvc2l0aW9uXCI6e1wibWluXCI6Wy03NSwwLC01MF0sXCJtYXhcIjpbNzUsMCw1MF19LFwib3JpZW50YXRpb25cIjp7XCJtaW5cIjpbMCwtNDUsMF0sXCJtYXhcIjpbMCw0NSwwXX0sXCJjb3VudFwiOjUwLFwic2VlZFwiOjEyMTF9fSxcInRyZWVGaWVsZFwiOntcInBhcmVudFwiOlwiQGZsb29yXCIsXCJjaGlsZHJlblwiOntcInRlbXBsYXRlXCI6e1wiYWxiZWRvXCI6XCJicm93blwiLFwibWVzaFwiOlwiQHRyZWVNZXNoXCJ9LFwicG9zaXRpb25cIjp7XCJtaW5cIjpbLTc1LDAsLTUwXSxcIm1heFwiOls3NSwwLDUwXX0sXCJvcmllbnRhdGlvblwiOntcIm1pblwiOlstNSwtMTgwLC01XSxcIm1heFwiOls1LDE4MCw1XX0sXCJzY2FsZVwiOntcIm1pblwiOlswLjksMC41LDAuOV0sXCJtYXhcIjpbMS4xLDEuMiwxLjFdfSxcImNvdW50XCI6NTAsXCJzZWVkXCI6MTIxMX19LFwic3VuXCI6e1wibGlnaHRcIjp7XCJ0eXBlXCI6XCJkaXJlY3Rpb25hbFwiLFwiY29sb3JcIjpcIndoaXRlXCIsXCJpbnRlbnNpdHlcIjowLjUsXCJkaXJlY3Rpb25cIjpbMSwtMSwtMC44XX19LFwiY2FtZXJhXCI6e1wiZm92XCI6OTAsXCJuZWFyXCI6MC4xLFwiZmFyXCI6MTAwLFwicG9zaXRpb25cIjpbNCwxMCw1MF0sXCJsb29rYXRcIjpbNiwyLjgsMF0sXCJjbGVhckNvbG9yXCI6XCJza3libHVlXCJ9fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9tb2RlbHMvZm9yZXN0Lmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9tb2RlbHMvZm9yZXN0Lmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJmbG9vckdlb21ldHJ5XCI6e1wic2hhcGVzXCI6W3tcInNoYXBlXCI6XCJxdWFkXCIsXCJvcmllbnRhdGlvblwiOlstOTAsMCwwXSxcInNjYWxlXCI6WzYyLDYyLDFdfV19LFwidGhpbkdyYXNzR2VvbWV0cnlcIjp7XCJzaGFwZXNcIjp7XCJ0ZW1wbGF0ZVwiOntcInNoYXBlXCI6XCJjdWJlXCJ9LFwicG9zaXRpb25cIjp7XCJtaW5cIjpbLTUuNSwwLjUsLTUuNV0sXCJtYXhcIjpbNS41LDAuNSw1LjVdfSxcIm9yaWVudGF0aW9uXCI6e1wibWluXCI6Wy01LC0yNSwtNV0sXCJtYXhcIjpbNSwyNSw1XX0sXCJzY2FsZVwiOntcIm1pblwiOlswLjEsMSwwXSxcIm1heFwiOlswLjE1LDEsMF19LFwiY291bnRcIjoyMCxcInNlZWRcIjowfX0sXCJtZWRpdW1HcmFzc0dlb21ldHJ5XCI6e1wic2hhcGVzXCI6e1widGVtcGxhdGVcIjp7XCJzaGFwZVwiOlwiY3ViZVwifSxcInBvc2l0aW9uXCI6e1wibWluXCI6Wy0zLDAuNSwtM10sXCJtYXhcIjpbMywwLjUsM119LFwib3JpZW50YXRpb25cIjp7XCJtaW5cIjpbLTUsLTI1LC01XSxcIm1heFwiOls1LDI1LDVdfSxcInNjYWxlXCI6e1wibWluXCI6WzAuNywxLDBdLFwibWF4XCI6WzAuOCwxLDBdfSxcImNvdW50XCI6MTAsXCJzZWVkXCI6MH19LFwic21hbGxHcmFzc0dlb21ldHJ5XCI6e1wic2hhcGVzXCI6e1widGVtcGxhdGVcIjp7XCJzaGFwZVwiOlwiY3ViZVwifSxcInBvc2l0aW9uXCI6e1wibWluXCI6Wy0zLDAuNSwtM10sXCJtYXhcIjpbMywwLjUsM119LFwib3JpZW50YXRpb25cIjp7XCJtaW5cIjpbLTUsLTI1LC01XSxcIm1heFwiOls1LDI1LDVdfSxcInNjYWxlXCI6e1wibWluXCI6WzAuNywxLDBdLFwibWF4XCI6WzAuOCwxLDBdfSxcImNvdW50XCI6MTUsXCJzZWVkXCI6MH19LFwiZmxvb3JcIjp7XCJzaGFkb3dcIjpmYWxzZSxcImdlb21ldHJ5XCI6XCJAZmxvb3JHZW9tZXRyeVwiLFwiYWxiZWRvXCI6XCIjQjg2QTIyXCIsXCJwb3NpdGlvblwiOlswLC0wLjAxLDBdfSxcInRhbGxHcmFzc1wiOntcInBhcmVudFwiOlwiQGZsb29yXCIsXCJwb3NpdGlvblwiOlswLDAsMF0sXCJvcmllbnRhdGlvblwiOlswLDAsMF0sXCJjaGlsZHJlblwiOntcInRlbXBsYXRlXCI6e1wic2hhZG93XCI6ZmFsc2UsXCJhbGJlZG9cIjpcIiNFOTg0MkNcIixcImdlb21ldHJ5XCI6XCJAdGhpbkdyYXNzR2VvbWV0cnlcIn0sXCJwb3NpdGlvblwiOntcIm1pblwiOlstMzAsMCwtMzBdLFwibWF4XCI6WzMwLDAsMF19LFwib3JpZW50YXRpb25cIjp7XCJtaW5cIjpbLTEsLTQ1LC0xXSxcIm1heFwiOlsxLDQ1LDFdfSxcInNjYWxlXCI6e1wibWluXCI6WzEsNSwxXSxcIm1heFwiOlsxLDEwLDFdfSxcImNvdW50XCI6MTYwLFwic2VlZFwiOjUwMn19LFwibWVkaXVtR3Jhc3NcIjp7XCJwYXJlbnRcIjpcIkBmbG9vclwiLFwicG9zaXRpb25cIjpbMCwwLDBdLFwib3JpZW50YXRpb25cIjpbMCwwLDBdLFwiY2hpbGRyZW5cIjp7XCJ0ZW1wbGF0ZVwiOntcInNoYWRvd1wiOmZhbHNlLFwiYWxiZWRvXCI6XCIjNzc1QkQ0XCIsXCJnZW9tZXRyeVwiOlwiQG1lZGl1bUdyYXNzR2VvbWV0cnlcIn0sXCJwb3NpdGlvblwiOntcIm1pblwiOlstMzAsMCwtNV0sXCJtYXhcIjpbMzAsMCwyMF19LFwib3JpZW50YXRpb25cIjp7XCJtaW5cIjpbLTEsLTQ1LC0xXSxcIm1heFwiOlsxLDQ1LDFdfSxcInNjYWxlXCI6e1wibWluXCI6WzEsMywxXSxcIm1heFwiOlsxLDUsMV19LFwiY291bnRcIjoxNjAsXCJzZWVkXCI6ODgyfX0sXCJzbWFsbEdyYXNzXCI6e1wicGFyZW50XCI6XCJAZmxvb3JcIixcInBvc2l0aW9uXCI6WzAsMCwwXSxcIm9yaWVudGF0aW9uXCI6WzAsMCwwXSxcImNoaWxkcmVuXCI6e1widGVtcGxhdGVcIjp7XCJzaGFkb3dcIjp0cnVlLFwiYWxiZWRvXCI6XCJ0b21hdG9cIixcImdlb21ldHJ5XCI6XCJAc21hbGxHcmFzc0dlb21ldHJ5XCJ9LFwicG9zaXRpb25cIjp7XCJtaW5cIjpbLTMwLDAsMjBdLFwibWF4XCI6WzMwLDAsMzBdfSxcIm9yaWVudGF0aW9uXCI6e1wibWluXCI6Wy0xLC00NSwtMV0sXCJtYXhcIjpbMSw0NSwxXX0sXCJzY2FsZVwiOntcIm1pblwiOlsxLDEsMV0sXCJtYXhcIjpbMSwyLDFdfSxcImNvdW50XCI6MjYwLFwic2VlZFwiOjgyNjc4fX0sXCJzdW5cIjp7XCJsaWdodFwiOntcInR5cGVcIjpcImRpcmVjdGlvbmFsXCIsXCJjb2xvclwiOlwid2hpdGVcIixcImludGVuc2l0eVwiOjAuNSxcImRpcmVjdGlvblwiOlsxLC0xLC0wLjhdfX0sXCJjYW1lcmFcIjp7XCJmb3ZcIjoxMjAsXCJuZWFyXCI6MC4xLFwiZmFyXCI6MTAwLFwicG9zaXRpb25cIjpbLTEwLDIwLDQwXSxcImxvb2thdFwiOlstNSwwLDBdfX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvbW9kZWxzL2dyYXNzV2FsbC5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvbW9kZWxzL2dyYXNzV2FsbC5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1widGVycmFpbk1lc2hcIjp7XCJmdW5jdGlvblwiOlwiQ3ViZVwiLFwicGFyYW1zXCI6e319LFwidGVycmFpbk1lc2gyXCI6e1wiZnVuY3Rpb25cIjpcIlRlcnJhaW5cIixcInBhcmFtc1wiOntcIm9yaWVudGF0aW9uXCI6Wy05MCwwLDBdLFwicG9zaXRpb25cIjpbMCwxLDBdLFwic2NhbGVcIjpbMS4yLDEuMiwxXX19LFwidGVycmFpblwiOntcInNoYWRvd1wiOmZhbHNlLFwic2hhZGVyUHJvZ3JhbVwiOlwidGVycmFpblwiLFwibWVzaFwiOlwiQHRlcnJhaW5NZXNoXCIsXCJwb3NpdGlvblwiOlswLDAsLTddfSxcInRlcnJhaW4yXCI6e1wic2hhZG93XCI6ZmFsc2UsXCJzaGFkZXJQcm9ncmFtXCI6XCJ0ZXJyYWluXCIsXCJtZXNoXCI6XCJAdGVycmFpbk1lc2gyXCJ9LFwic3VuXCI6e1wic2hhZGVyUHJvZ3JhbVwiOlwic3VubGlnaHQtdGVycmFpblwiLFwibGlnaHRcIjp7XCJ0eXBlXCI6XCJkaXJlY3Rpb25hbFwiLFwiY29sb3JcIjpcIndoaXRlXCIsXCJpbnRlbnNpdHlcIjowLjUsXCJkaXJlY3Rpb25cIjpbMSwtMSwtMC44XX19LFwiY2FtZXJhXCI6e1wiZm92XCI6NzAsXCJuZWFyXCI6MC4xLFwiZmFyXCI6MTAwLFwicG9zaXRpb25cIjpbLTAuNSwzLDJdLFwibG9va2F0XCI6WzAsMSwwXX19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L21vZGVscy90ZXJyYWluLmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9tb2RlbHMvdGVycmFpbi5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wiZmxvb3JHZW9tZXRyeVwiOntcInNoYXBlc1wiOlt7XCJzaGFwZVwiOlwicXVhZFwiLFwib3JpZW50YXRpb25cIjpbLTkwLDAsMF0sXCJzY2FsZVwiOls2Miw2MiwxXX1dfSxcImdyYXNzQ2x1c3Rlckdlb21ldHJ5XCI6e1wic2hhcGVzXCI6e1widGVtcGxhdGVcIjp7XCJzaGFwZVwiOlwiY3ViZVwifSxcInBvc2l0aW9uXCI6e1wibWluXCI6Wy0xLDAuNSwtMV0sXCJtYXhcIjpbMSwwLjUsMV19LFwib3JpZW50YXRpb25cIjp7XCJtaW5cIjpbMCwtMjUsMF0sXCJtYXhcIjpbMCwyNSwwXX0sXCJzY2FsZVwiOntcIm1pblwiOlsxLDEsMF0sXCJtYXhcIjpbMSwxLDBdfSxcImNvdW50XCI6MTUsXCJzZWVkXCI6MH19LFwiYm94R2VvbWV0cnlcIjp7XCJzaGFwZXNcIjpbe1wic2hhcGVcIjpcImN1YmVcIn1dfSxcImZsb29yXCI6e1wic2hhZG93XCI6ZmFsc2UsXCJnZW9tZXRyeVwiOlwiQGZsb29yR2VvbWV0cnlcIixcImFsYmVkb1wiOlwiI0I4NkEyMlwiLFwicG9zaXRpb25cIjpbMCwtMC4wMSwwXX0sXCJicm93bkdyYXNzXCI6e1wicGFyZW50XCI6XCJAZmxvb3JcIixcInBvc2l0aW9uXCI6WzAsMCwwXSxcIm9yaWVudGF0aW9uXCI6WzAsMCwwXSxcImNoaWxkcmVuXCI6e1widGVtcGxhdGVcIjp7XCJhbGJlZG9cIjpcIiNFOTg0MkNcIixcImdlb21ldHJ5XCI6XCJAZ3Jhc3NDbHVzdGVyR2VvbWV0cnlcIn0sXCJwb3NpdGlvblwiOntcIm1pblwiOlstMzAsMCwtMzBdLFwibWF4XCI6WzMwLDAsMzBdfSxcIm9yaWVudGF0aW9uXCI6e1wibWluXCI6WzAsLTkwLDBdLFwibWF4XCI6WzAsOTAsMF19LFwic2NhbGVcIjp7XCJtaW5cIjpbMSwxLDFdLFwibWF4XCI6WzEsMSwxXX0sXCJjb3VudFwiOjE2MCxcInNlZWRcIjo1MDJ9fSxcInB1cnBsZUdyYXNzXCI6e1wicGFyZW50XCI6XCJAZmxvb3JcIixcInBvc2l0aW9uXCI6WzAsMCwwXSxcIm9yaWVudGF0aW9uXCI6WzAsOTAsMF0sXCJjaGlsZHJlblwiOntcInRlbXBsYXRlXCI6e1wiYWxiZWRvXCI6XCIjNzc1QkQ0XCIsXCJnZW9tZXRyeVwiOlwiQGdyYXNzQ2x1c3Rlckdlb21ldHJ5XCJ9LFwicG9zaXRpb25cIjp7XCJtaW5cIjpbLTMwLDAsLTMwXSxcIm1heFwiOlszMCwwLDMwXX0sXCJvcmllbnRhdGlvblwiOntcIm1pblwiOlswLC05MCwwXSxcIm1heFwiOlswLDkwLDBdfSxcInNjYWxlXCI6e1wibWluXCI6WzEsMSwxXSxcIm1heFwiOlsxLDEsMV19LFwiY291bnRcIjo4MCxcInNlZWRcIjo1MDJ9fSxcInN1blwiOntcImxpZ2h0XCI6e1widHlwZVwiOlwiZGlyZWN0aW9uYWxcIixcImNvbG9yXCI6XCJ3aGl0ZVwiLFwiaW50ZW5zaXR5XCI6MC41LFwiZGlyZWN0aW9uXCI6WzEsLTEsLTAuOF19fSxcImNhbWVyYVwiOntcImZvdlwiOjkwLFwibmVhclwiOjAuMSxcImZhclwiOjEwMCxcInBvc2l0aW9uXCI6WzAsMjAsNDBdLFwibG9va2F0XCI6WzAsMCwwXX19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L21vZGVscy90ZXN0Mi5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvbW9kZWxzL3Rlc3QyLmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJmbG9vckdlb21ldHJ5XCI6e1wic2hhcGVzXCI6W3tcInNoYXBlXCI6XCJxdWFkXCIsXCJzY2FsZVwiOls0LDQsMV0sXCJvcmllbnRhdGlvblwiOlstOTAsMCwwXSxcInBvc2l0aW9uXCI6WzAsLTAuMDEsMF19XX0sXCJmbG9vcjFcIjp7XCJzaGFkb3dcIjpmYWxzZSxcInBvc2l0aW9uXCI6Wy03LDAsLTEwXSxcImdlb21ldHJ5XCI6XCJAZmxvb3JHZW9tZXRyeVwifSxcInRyZWUxXCI6e1wicGFyZW50XCI6XCJAZmxvb3IxXCIsXCJnZW9tZXRyeVwiOntcInNoYXBlc1wiOlt7XCJzaGFwZVwiOlwiY3ViZVwiLFwicG9zaXRpb25cIjpbMCwwLjUsMF19LHtcInNoYXBlXCI6XCJjdWJlXCIsXCJwb3NpdGlvblwiOlswLDEuNSwwXSxcIm9yaWVudGF0aW9uXCI6WzAsMTUsMF0sXCJzY2FsZVwiOlswLjgsMC44LDAuOF19LHtcInNoYXBlXCI6XCJjdWJlXCIsXCJwb3NpdGlvblwiOlswLDIuNSwwXSxcIm9yaWVudGF0aW9uXCI6WzAsMzAsMF0sXCJzY2FsZVwiOlswLjYsMC42LDAuNl19LHtcInNoYXBlXCI6XCJjdWJlXCIsXCJwb3NpdGlvblwiOlswLDMuNSwwXSxcIm9yaWVudGF0aW9uXCI6WzAsNDUsMF0sXCJzY2FsZVwiOlswLjQsMC40LDAuNF19XX19LFwiZmxvb3IyXCI6e1wic2hhZG93XCI6ZmFsc2UsXCJhbGJlZG9cIjpcImRhcmtyZWRcIixcImdlb21ldHJ5XCI6XCJAZmxvb3JHZW9tZXRyeVwifSxcInByb2NlZHVyYWxUcmVlXCI6e1wic2hhZG93XCI6dHJ1ZSxcIm1lc2hcIjp7XCJmdW5jdGlvblwiOlwiVHVybmluZ1RvcnNvXCIsXCJwYXJhbXNcIjp7XCJvcmlnaW5cIjpbMCwwLDBdLFwic2NhbGVcIjpbMC45LDAuOSwwLjldLFwic2VnbWVudHNcIjoyMCxcInR3aXN0XCI6NSxcInNocmlua1wiOjAuMDQsXCJoZWlnaHRcIjo1fX19LFwic3VuXCI6e1wibGlnaHRcIjp7XCJ0eXBlXCI6XCJkaXJlY3Rpb25hbFwiLFwiY29sb3JcIjpcIndoaXRlXCIsXCJpbnRlbnNpdHlcIjowLjUsXCJkaXJlY3Rpb25cIjpbMSwtMSwtMC44XX19LFwiY2FtZXJhXCI6e1wiZm92XCI6MzUsXCJuZWFyXCI6MC4xLFwiZmFyXCI6MTAwLFwicG9zaXRpb25cIjpbMC41LDE3LDE3XSxcImxvb2thdFwiOlswLDgsMF19fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9tb2RlbHMvdHJlZS5qc29uXG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvbW9kZWxzL3RyZWUuanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImdlb21ldHJpZXNcIjp7XCJ0ZXN0XCI6e1wic2hhcGVcIjpcInRyaWFuZ2xlXCIsXCJhbGJlZG9cIjpcIi4vc2FuZC5qcGdcIixcInBvc2l0aW9uXCI6WzAsMC41LDBdLFwic2NhbGVcIjoxfSxcInRlc3QyXCI6e1wic2hhcGVcIjpcInF1YWRcIixcImFsYmVkb1wiOlwiLi9maXN0LmpwZ1wiLFwicG9zaXRpb25cIjpbMCwxLDBdLFwic2NhbGVcIjoyLFwidXZTY2FsZVwiOjJ9LFwiZ3JvdW5kXCI6e1wic2hhcGVcIjpcInF1YWRcIixcImFsYmVkb1wiOlwiLi9zYW5kMi5qcGdcIixcIm9yaWVudGF0aW9uXCI6Wy05MCwwLDBdLFwic2NhbGVcIjo0MDAsXCJ1dlNjYWxlXCI6MTAwfSxcInJvYWRcIjp7XCJzaGFwZVwiOlwicGxhbmVcIixcImFsYmVkb1wiOlwibmF2YWpvd2hpdGVcIixcIm9yaWVudGF0aW9uXCI6Wy05MCwwLDBdLFwic2NhbGVcIjpbMiwwLDIwMF19LFwiY2xpZmYxXCI6e1wic2hhcGVcIjpcImN1YmVcIixcImFsYmVkb1wiOlwid2hpdGVcIixcInBvc2l0aW9uXCI6WzAsMS41LDBdLFwic2NhbGVcIjpbMSwzLDFdfSxcImNsaWZmMlwiOntcInNoYXBlXCI6XCJjdWJlXCIsXCJhbGJlZG9cIjpcInNhbmR5YnJvd25cIixcInNjYWxlXCI6WzUsMTAsMV0sXCJwb3NpdGlvblwiOlswLDUsMF19LFwicm9ja1wiOntcInNoYXBlXCI6XCJjdWJlXCIsXCJhbGJlZG9cIjpcIm5hdmFqb3doaXRlXCIsXCJzY2FsZVwiOlswLjIsMC4yLDAuMl0sXCJwb3NpdGlvblwiOlswLDAuMSwwXX0sXCJiaWdyb2NrXCI6e1wic2hhcGVcIjpcImN1YmVcIixcImFsYmVkb1wiOlwibmF2YWpvd2hpdGVcIixcInNjYWxlXCI6WzAuOCwwLjUsMC44XSxcInBvc2l0aW9uXCI6WzAsMC4xNSwwXX19LFwidGVtcGxhdGVzXCI6e1wicm9ja1wiOntcInNoYWRvd1wiOmZhbHNlLFwiZ2VvbWV0cnlcIjpcIkBnZW9tZXRyaWVzLnJvY2tcIn0sXCJiaWdyb2NrXCI6e1wic2hhZG93XCI6ZmFsc2UsXCJnZW9tZXRyeVwiOlwiQGdlb21ldHJpZXMuYmlncm9ja1wifX0sXCJzY2VuZVwiOntcInRlc3RcIjp7XCJnZW9tZXRyeVwiOlwiQGdlb21ldHJpZXMudGVzdFwiLFwicG9zaXRpb25cIjpbLTMsMCw4XSxcIm9yaWVudGF0aW9uXCI6WzAsLTgwLDBdfSxcInRlc3QyXCI6e1wiZ2VvbWV0cnlcIjpcIkBnZW9tZXRyaWVzLnRlc3QyXCIsXCJwb3NpdGlvblwiOlstNCwwLDJdLFwib3JpZW50YXRpb25cIjpbLTMuNSwtOTAsMF19LFwiZ3JvdW5kXCI6e1wic2hhZG93XCI6ZmFsc2UsXCJnZW9tZXRyeVwiOlwiQGdlb21ldHJpZXMuZ3JvdW5kXCIsXCJwb3NpdGlvblwiOlswLDAsMF0sXCJjaGlsZHJlblwiOntcImNhbWVyYVwiOntcInBvc2l0aW9uXCI6Wy02LDIsMTBdLFwibG9va0F0XCI6WzIsMSwwXSxcInByb2plY3Rpb25cIjpcInBlcnNwZWN0aXZlXCIsXCJmb3ZcIjo4MCxcIm5lYXJcIjowLjEsXCJmYXJcIjoxMDB9LFwicm9hZFwiOntcImdlb21ldHJ5XCI6XCJAZ2VvbWV0cmllcy5yb2FkXCIsXCJwb3NpdGlvblwiOlstNSwwLjAxLDBdLFwic2hhZG93XCI6ZmFsc2V9LFwiY2xpZmYxXCI6e1wiZ2VvbWV0cnlcIjpcIkBnZW9tZXRyaWVzLmNsaWZmMVwiLFwicG9zaXRpb25cIjpbLTEsMCw3XSxcInNoYWRvd1wiOnRydWV9LFwiY2xpZmYyXCI6e1wic2hhZG93XCI6dHJ1ZSxcImdlb21ldHJ5XCI6XCJAZ2VvbWV0cmllcy5jbGlmZjJcIixcInBvc2l0aW9uXCI6WzEwLDAsLTE1XX0sXCJyb2Nrcy1sZWZ0XCI6e1wiZ2VuZXJhdG9yXCI6e1widGVtcGxhdGVcIjpcIkB0ZW1wbGF0ZXMucm9ja1wiLFwibWluXCI6e1wicG9zaXRpb25cIjpbLTMwLDAsLTIwMF0sXCJvcmllbnRhdGlvblwiOlswLDAsMF19LFwibWF4XCI6e1wicG9zaXRpb25cIjpbLTYuMywwLDUwXSxcIm9yaWVudGF0aW9uXCI6WzI3MCwyNzAsMjcwXX0sXCJjb3VudFwiOjEwMDAsXCJzZWVkXCI6OTcyOX19LFwicm9ja3MtcmlnaHRcIjp7XCJnZW5lcmF0b3JcIjp7XCJ0ZW1wbGF0ZVwiOlwiQHRlbXBsYXRlcy5yb2NrXCIsXCJtaW5cIjp7XCJwb3NpdGlvblwiOlstNCwwLC0yMDBdLFwib3JpZW50YXRpb25cIjpbMCwwLDBdfSxcIm1heFwiOntcInBvc2l0aW9uXCI6WzUwLDAsNTBdLFwib3JpZW50YXRpb25cIjpbMjcwLDI3MCwyNzBdfSxcImNvdW50XCI6MjAwMCxcInNlZWRcIjo4Mjk0fX0sXCJiaWdyb2Nrcy1yaWdodFwiOntcImdlbmVyYXRvclwiOntcInRlbXBsYXRlXCI6XCJAdGVtcGxhdGVzLmJpZ3JvY2tcIixcIm1pblwiOntcInBvc2l0aW9uXCI6Wy00LDAsLTIwMF0sXCJvcmllbnRhdGlvblwiOlswLDAsMF19LFwibWF4XCI6e1wicG9zaXRpb25cIjpbNTAsMCw1MF0sXCJvcmllbnRhdGlvblwiOlsyNzAsMjcwLDI3MF19LFwiY291bnRcIjo1MDAsXCJzZWVkXCI6MjIyNn19LFwic3VuXCI6e1wibGlnaHRcIjp7XCJ0eXBlXCI6XCJkaXJlY3Rpb25hbFwiLFwiY29sb3JcIjpcIndoaXRlXCIsXCJpbnRlbnNpdHlcIjowLjUsXCJkaXJlY3Rpb25cIjpbMSwtMSwwLjRdfX19fX0sXCJleHBvcnRcIjpcIkBzY2VuZVwiLFwiY2FtZXJhXCI6XCJAc2NlbmUuZ3JvdW5kLmNoaWxkcmVuLmNhbWVyYVwiLFwiYmFja0NvbG9yXCI6XCJza3libHVlXCJ9XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L21vZGVscy93ZWlyZC1jYW55b24zLmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9tb2RlbHMvd2VpcmQtY2FueW9uMy5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBNYXRoVXRpbHMgZnJvbSAnLi4vLi4vc3JjL01hdGhVdGlscy5qcyc7XG5pbXBvcnQgTWVzaCBmcm9tICcuLi8uLi9zcmMvTWVzaC5qcyc7XG5pbXBvcnQgTWF0MyBmcm9tICcuLi8uLi9zcmMvTWF0My5qcyc7XG5pbXBvcnQgVmVjMyBmcm9tICcuLi8uLi9zcmMvVmVjMy5qcyc7XG5pbXBvcnQgUXVhZCBmcm9tICcuL1F1YWQuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBvcmlnaW4gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgcG9zaXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgc2NhbGUgPSBWZWMzLm9uZSgpXG4gICAgfSA9IHBhcmFtcztcblxuICAgIGNvbnN0IG1lc2ggPSBNZXNoLm1lcmdlKFxuICAgICAgICBRdWFkKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgMCwgMV0sXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogWzAsIDAsIDBdXG4gICAgICAgIH0pLFxuICAgICAgICBRdWFkKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbMSwgMCwgMF0sXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogWzAsIDkwLCAwXVxuICAgICAgICB9KSxcbiAgICAgICAgUXVhZCh7XG4gICAgICAgICAgICBwb3NpdGlvbjogWzAsIDAsIC0xXSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBbMCwgMTgwLCAwXVxuICAgICAgICB9KSxcbiAgICAgICAgUXVhZCh7XG4gICAgICAgICAgICBwb3NpdGlvbjogWy0xLCAwLCAwXSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBbMCwgLTkwLCAwXVxuICAgICAgICB9KSxcbiAgICAgICAgUXVhZCh7XG4gICAgICAgICAgICBwb3NpdGlvbjogWzAsIDEsIDBdLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFstOTAsIDAsIDBdXG4gICAgICAgIH0pLFxuICAgICAgICBRdWFkKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgLTEsIDBdLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFs5MCwgMCwgMF1cbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgTWVzaC5hcHBseVNjYWxlKG1lc2gsIHNjYWxlKTtcbiAgICBNZXNoLmFwcGx5Um90YXRpb24obWVzaCwgTWF0My5mcm9tRXVsZXJBbmdsZXMob3JpZW50YXRpb24ubWFwKE1hdGhVdGlscy5kZWdUb1JhZCkpKTtcbiAgICBNZXNoLmFwcGx5VHJhbnNsYXRpb24obWVzaCwgcG9zaXRpb24pO1xuICAgIE1lc2guYXBwbHlPcmlnaW4obWVzaCwgb3JpZ2luKTtcbiAgICBNZXNoLmNhbGN1bGF0ZU5vcm1hbHMobWVzaCk7XG5cbiAgICByZXR1cm4gbWVzaDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9wcm9jZWR1cmFsL0N1YmUuanNcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9wcm9jZWR1cmFsL0N1YmUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEFycmF5VXRpbHMgZnJvbSAnLi4vLi4vc3JjL0FycmF5VXRpbHMuanMnO1xuaW1wb3J0IE1hdGhVdGlscyBmcm9tICcuLi8uLi9zcmMvTWF0aFV0aWxzLmpzJztcbmltcG9ydCBNZXNoIGZyb20gJy4uLy4uL3NyYy9NZXNoLmpzJztcbmltcG9ydCBWZWMzIGZyb20gJy4uLy4uL3NyYy9WZWMzLmpzJztcbmltcG9ydCBNYXQzIGZyb20gJy4uLy4uL3NyYy9NYXQzLmpzJztcbmltcG9ydCBUcmlhbmdsZSBmcm9tICcuL1RyaWFuZ2xlLmpzJztcbmltcG9ydCBRdWFkIGZyb20gJy4vUXVhZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG9yaWdpbiA9IFZlYzMuemVybygpLFxuICAgICAgICBwb3NpdGlvbiA9IFZlYzMuemVybygpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IFZlYzMuemVybygpLFxuICAgICAgICBzY2FsZSA9IFZlYzMub25lKCksXG4gICAgfSA9IHBhcmFtcztcblxuICAgIGxldCBtZXNoID0gTWVzaC5tZXJnZShcbiAgICAgICAgVHdvU2lkZWRUcmlhbmdsZSgpLFxuICAgICAgICBUd29TaWRlZFRyaWFuZ2xlKHsgb3JpZW50YXRpb246IFswLCA0NSwgMF0gfSksXG4gICAgICAgIFR3b1NpZGVkVHJpYW5nbGUoeyBvcmllbnRhdGlvbjogWzAsIDkwLCAwXSB9KSxcbiAgICAgICAgVHdvU2lkZWRUcmlhbmdsZSh7IG9yaWVudGF0aW9uOiBbMCwgMTM1LCAwXSB9KVxuICAgICk7XG5cbiAgICBNZXNoLmFwcGx5U2NhbGUobWVzaCwgc2NhbGUpO1xuICAgIE1lc2guYXBwbHlSb3RhdGlvbihtZXNoLCBNYXQzLmZyb21FdWxlckFuZ2xlcyhvcmllbnRhdGlvbi5tYXAoTWF0aFV0aWxzLmRlZ1RvUmFkKSkpO1xuICAgIE1lc2guYXBwbHlUcmFuc2xhdGlvbihtZXNoLCBwb3NpdGlvbik7XG4gICAgTWVzaC5hcHBseU9yaWdpbihtZXNoLCBvcmlnaW4pO1xuXG4gICAgcmV0dXJuIG1lc2g7XG59O1xuXG5mdW5jdGlvbiBUd29TaWRlZFRyaWFuZ2xlKHBhcmFtcyA9IHt9KSB7XG4gICAgY29uc3Qge1xuICAgICAgICBvcmlnaW4gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgcG9zaXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgc2NhbGUgPSBWZWMzLm9uZSgpLFxuICAgIH0gPSBwYXJhbXM7XG5cbiAgICBjb25zdCBtZXNoID0gTWVzaC5tZXJnZShcbiAgICAgICAgVHJpYW5nbGUoKSxcbiAgICAgICAgVHJpYW5nbGUoeyBvcmllbnRhdGlvbjogWzAsIDE4MCwgMF0gfSlcbiAgICApO1xuXG4gICAgTWVzaC5hcHBseVNjYWxlKG1lc2gsIHNjYWxlKTtcbiAgICBNZXNoLmFwcGx5Um90YXRpb24obWVzaCwgTWF0My5mcm9tRXVsZXJBbmdsZXMob3JpZW50YXRpb24ubWFwKE1hdGhVdGlscy5kZWdUb1JhZCkpKTtcbiAgICBNZXNoLmFwcGx5VHJhbnNsYXRpb24obWVzaCwgcG9zaXRpb24pO1xuICAgIE1lc2guYXBwbHlPcmlnaW4obWVzaCwgb3JpZ2luKTtcblxuICAgIHJldHVybiBtZXNoO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L3Byb2NlZHVyYWwvR3Jhc3MuanNcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9wcm9jZWR1cmFsL0dyYXNzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBNYXRoVXRpbHMgZnJvbSAnLi4vLi4vc3JjL01hdGhVdGlscy5qcyc7XG5pbXBvcnQgVmVjMyBmcm9tICcuLi8uLi9zcmMvVmVjMy5qcyc7XG5pbXBvcnQgTWF0MyBmcm9tICcuLi8uLi9zcmMvTWF0My5qcyc7XG5pbXBvcnQgTWVzaCBmcm9tICcuLi8uLi9zcmMvTWVzaC5qcyc7XG5pbXBvcnQgUXVhZCBmcm9tICcuL1F1YWQuanMnO1xuXG5jb25zdCBQT1NJVElPTlMgPSBPYmplY3QuZnJlZXplKFtcbiAgICBbLTEsIC0xLCAwXSxcbiAgICBbMSwgLTEsIDBdLFxuICAgIFsxLCAxLCAwXSxcblxuICAgIFsxLCAxLCAwXSxcbiAgICBbLTEsIDEsIDBdLFxuICAgIFstMSwgLTEsIDBdLFxuXSk7XG5cbmNvbnN0IE5PUk1BTFMgPSBPYmplY3QuZnJlZXplKFtcbiAgICBbMCwgMCwgMV0sXG4gICAgWzAsIDAsIDFdLFxuICAgIFswLCAwLCAxXSxcblxuICAgIFswLCAwLCAxXSxcbiAgICBbMCwgMCwgMV0sXG4gICAgWzAsIDAsIDFdLFxuXSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIHNjYWxlID0gVmVjMy5vbmUoKSxcbiAgICAgICAgb3JpZ2luID0gVmVjMy56ZXJvKCksXG4gICAgICAgIG9yaWVudGF0aW9uID0gVmVjMy56ZXJvKCksXG4gICAgICAgIHBvc2l0aW9uID0gVmVjMy56ZXJvKCksXG4gICAgICAgIGNlbGxzID0gMjBcbiAgICB9ID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgY29uc3QgaGFsZkdyaWRTaXplID0gMS4wO1xuICAgIGNvbnN0IGhhbGZDZWxsU2l6ZSA9IGhhbGZHcmlkU2l6ZSAvIGNlbGxzO1xuICAgIGNvbnN0IGNlbGxTaXplID0gaGFsZkNlbGxTaXplICogMi4wO1xuICAgIGNvbnN0IHN0YXJ0UG9zID0gWy1oYWxmR3JpZFNpemUgKyBoYWxmQ2VsbFNpemUsIC1oYWxmR3JpZFNpemUgKyBoYWxmQ2VsbFNpemUsIDBdO1xuXG4gICAgY29uc3QgbWVzaGVzID0gW107XG4gICAgZm9yKGxldCB4ID0gMDsgeCA8IGNlbGxzOyB4KyspIHtcbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IGNlbGxzOyB5KyspIHtcbiAgICAgICAgICAgIG1lc2hlcy5wdXNoKFF1YWQoe1xuICAgICAgICAgICAgICAgIHNjYWxlOiBbaGFsZkNlbGxTaXplLCBoYWxmQ2VsbFNpemUsIDFdLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBWZWMzLmFkZChzdGFydFBvcywgW2NlbGxTaXplICogeCwgY2VsbFNpemUgKiB5LCAwXSlcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IG1lc2ggPSBNZXNoLm1lcmdlKC4uLm1lc2hlcyk7XG5cbiAgICBNZXNoLmFwcGx5U2NhbGUobWVzaCwgc2NhbGUpO1xuICAgIE1lc2guYXBwbHlSb3RhdGlvbihtZXNoLCBNYXQzLmZyb21FdWxlckFuZ2xlcyhvcmllbnRhdGlvbi5tYXAoTWF0aFV0aWxzLmRlZ1RvUmFkKSkpO1xuICAgIE1lc2guYXBwbHlUcmFuc2xhdGlvbihtZXNoLCBwb3NpdGlvbik7XG4gICAgTWVzaC5hcHBseU9yaWdpbihtZXNoLCBvcmlnaW4pO1xuXG4gICAgcmV0dXJuIG1lc2g7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvcHJvY2VkdXJhbC9HcmlkLmpzXG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvcHJvY2VkdXJhbC9HcmlkLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBNYXRoVXRpbHMgZnJvbSAnLi4vLi4vc3JjL01hdGhVdGlscy5qcyc7XG5pbXBvcnQgVmVjMyBmcm9tICcuLi8uLi9zcmMvVmVjMy5qcyc7XG5pbXBvcnQgTWF0MyBmcm9tICcuLi8uLi9zcmMvTWF0My5qcyc7XG5pbXBvcnQgTWVzaCBmcm9tICcuLi8uLi9zcmMvTWVzaC5qcyc7XG5cbmNvbnN0IFBPU0lUSU9OUyA9IE9iamVjdC5mcmVlemUoW1xuICAgIFstMSwgLTEsIDBdLFxuICAgIFsxLCAtMSwgMF0sXG4gICAgWzEsIDEsIDBdLFxuXG4gICAgWzEsIDEsIDBdLFxuICAgIFstMSwgMSwgMF0sXG4gICAgWy0xLCAtMSwgMF0sXG5dKTtcblxuY29uc3QgTk9STUFMUyA9IE9iamVjdC5mcmVlemUoW1xuICAgIFswLCAwLCAxXSxcbiAgICBbMCwgMCwgMV0sXG4gICAgWzAsIDAsIDFdLFxuXG4gICAgWzAsIDAsIDFdLFxuICAgIFswLCAwLCAxXSxcbiAgICBbMCwgMCwgMV0sXG5dKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2NhbGUgPSBWZWMzLm9uZSgpLFxuICAgICAgICBvcmlnaW4gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgcG9zaXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICB9ID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgY29uc3QgbWVzaCA9IHtcbiAgICAgICAgcG9zaXRpb25zOiBQT1NJVElPTlMsXG4gICAgICAgIG5vcm1hbHM6IE5PUk1BTFMsXG4gICAgICAgIG1vZGU6ICdUUklBTkdMRVMnXG4gICAgfTtcblxuICAgIE1lc2guYXBwbHlTY2FsZShtZXNoLCBzY2FsZSk7XG4gICAgTWVzaC5hcHBseVJvdGF0aW9uKG1lc2gsIE1hdDMuZnJvbUV1bGVyQW5nbGVzKG9yaWVudGF0aW9uLm1hcChNYXRoVXRpbHMuZGVnVG9SYWQpKSk7XG4gICAgTWVzaC5hcHBseVRyYW5zbGF0aW9uKG1lc2gsIHBvc2l0aW9uKTtcbiAgICBNZXNoLmFwcGx5T3JpZ2luKG1lc2gsIG9yaWdpbik7XG5cbiAgICByZXR1cm4gbWVzaDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9wcm9jZWR1cmFsL1F1YWQuanNcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9wcm9jZWR1cmFsL1F1YWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IE1hdGhVdGlscyBmcm9tICcuLi8uLi9zcmMvTWF0aFV0aWxzLmpzJztcbmltcG9ydCBWZWMzIGZyb20gJy4uLy4uL3NyYy9WZWMzLmpzJztcbmltcG9ydCBNYXQzIGZyb20gJy4uLy4uL3NyYy9NYXQzLmpzJztcbmltcG9ydCBNZXNoIGZyb20gJy4uLy4uL3NyYy9NZXNoLmpzJztcbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZC5qcyc7XG5cbmNvbnN0IFBPU0lUSU9OUyA9IE9iamVjdC5mcmVlemUoW1xuICAgIFstMSwgLTEsIDBdLFxuICAgIFsxLCAtMSwgMF0sXG4gICAgWzEsIDEsIDBdLFxuXG4gICAgWzEsIDEsIDBdLFxuICAgIFstMSwgMSwgMF0sXG4gICAgWy0xLCAtMSwgMF0sXG5dKTtcblxuY29uc3QgTk9STUFMUyA9IE9iamVjdC5mcmVlemUoW1xuICAgIFswLCAwLCAxXSxcbiAgICBbMCwgMCwgMV0sXG4gICAgWzAsIDAsIDFdLFxuXG4gICAgWzAsIDAsIDFdLFxuICAgIFswLCAwLCAxXSxcbiAgICBbMCwgMCwgMV0sXG5dKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2NhbGUgPSBWZWMzLm9uZSgpLFxuICAgICAgICBvcmlnaW4gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgcG9zaXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICB9ID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgY29uc3QgbWVzaCA9IEdyaWQoKTtcblxuICAgIE1lc2guYXBwbHlTY2FsZShtZXNoLCBzY2FsZSk7XG4gICAgTWVzaC5hcHBseVJvdGF0aW9uKG1lc2gsIE1hdDMuZnJvbUV1bGVyQW5nbGVzKG9yaWVudGF0aW9uLm1hcChNYXRoVXRpbHMuZGVnVG9SYWQpKSk7XG4gICAgTWVzaC5hcHBseVRyYW5zbGF0aW9uKG1lc2gsIHBvc2l0aW9uKTtcbiAgICBNZXNoLmFwcGx5T3JpZ2luKG1lc2gsIG9yaWdpbik7XG5cbiAgICBtZXNoLnBvc2l0aW9ucyA9IG1lc2gucG9zaXRpb25zLm1hcChwb3NpdGlvbiA9PiB7XG4gICAgICAgIHBvc2l0aW9uID0gVmVjMy5jbG9uZShwb3NpdGlvbik7XG4gICAgICAgIHBvc2l0aW9uWzFdICo9IE1hdGguc2luKCgoTWF0aFV0aWxzLmNsYW1wKHBvc2l0aW9uWzBdLCAtMS4wLCAxLjApICsgMS4wKSAvIDIuMCkgKiBNYXRoLlBJKTtcbiAgICAgICAgcG9zaXRpb25bMV0gKj0gTWF0aC5zaW4oKChNYXRoVXRpbHMuY2xhbXAocG9zaXRpb25bMl0sIC0xLjAsIDEuMCkgKyAxLjApIC8gMi4wKSAqIE1hdGguUEkpO1xuICAgICAgICBwb3NpdGlvblsxXSA9IDEuMCAtIHBvc2l0aW9uWzFdICogMS45O1xuXG4gICAgICAgIHJldHVybiBwb3NpdGlvbjtcbiAgICB9KTtcblxuICAgIE1lc2guY2FsY3VsYXRlTm9ybWFscyhtZXNoKTtcblxuICAgIHJldHVybiBtZXNoO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L3Byb2NlZHVyYWwvVGVycmFpbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3Byb2NlZHVyYWwvVGVycmFpbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQXJyYXlVdGlscyBmcm9tICcuLi8uLi9zcmMvQXJyYXlVdGlscy5qcyc7XG5pbXBvcnQgTWF0aFV0aWxzIGZyb20gJy4uLy4uL3NyYy9NYXRoVXRpbHMuanMnO1xuaW1wb3J0IFZlYzMgZnJvbSAnLi4vLi4vc3JjL1ZlYzMuanMnO1xuaW1wb3J0IE1hdDMgZnJvbSAnLi4vLi4vc3JjL01hdDMuanMnO1xuXG5jb25zdCBQT1NJVElPTlMgPSBPYmplY3QuZnJlZXplKFtcbiAgICBbMCwgMSwgMF0sXG4gICAgWy0xLCAtMSwgMF0sXG4gICAgWzEsIC0xLCAwXSxcbl0pO1xuXG5jb25zdCBOT1JNQUxTID0gT2JqZWN0LmZyZWV6ZShbXG4gICAgWzAsIDAsIDFdLFxuICAgIFswLCAwLCAxXSxcbiAgICBbMCwgMCwgMV0sXG5dKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2NhbGUgPSBWZWMzLm9uZSgpLFxuICAgICAgICBvcmlnaW4gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgcG9zaXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICB9ID0gcGFyYW1zIHx8IHt9O1xuXG4gICAgY29uc3Qgb3JpZW50YXRpb25JblJhZGlhbnMgPSBvcmllbnRhdGlvbi5tYXAoTWF0aFV0aWxzLmRlZ1RvUmFkKTtcblxuICAgIGNvbnN0IHJvdGF0aW9uTWF0cml4ID0gTWF0My5mcm9tRXVsZXJBbmdsZXMob3JpZW50YXRpb25JblJhZGlhbnMpO1xuICAgIGNvbnN0IG9yaWdpbkxvY2FsUG9zaXRpb25zID0gUE9TSVRJT05TXG4gICAgICAgIC5tYXAodiA9PiBWZWMzLm11bHRpcGx5KHYsIHNjYWxlKSlcbiAgICAgICAgLm1hcCh2ID0+IFZlYzMudHJhbnNmb3JtKHYsIHJvdGF0aW9uTWF0cml4KSlcbiAgICAgICAgLm1hcCh2ID0+IFZlYzMuYWRkKHYsIHBvc2l0aW9uKSk7XG5cbiAgICBjb25zdCBleHRlbnRzID0gY2FsY3VsYXRlRXh0ZW50cyhvcmlnaW5Mb2NhbFBvc2l0aW9ucyk7XG4gICAgY29uc3QgdW5ub3JtYWxpemVkT3JpZ2luID0gVmVjMy5tdWx0aXBseShvcmlnaW4sIGV4dGVudHMpO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IG9yaWdpbkxvY2FsUG9zaXRpb25zLm1hcCh2ID0+IFZlYzMuc2NhbGVBbmRBZGQodiwgdW5ub3JtYWxpemVkT3JpZ2luLCAtMC41KSk7XG4gICAgY29uc3Qgbm9ybWFscyA9IE5PUk1BTFMubWFwKHYgPT4gVmVjMy50cmFuc2Zvcm0odiwgcm90YXRpb25NYXRyaXgpKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9ucyxcbiAgICAgICAgbm9ybWFscyxcbiAgICAgICAgbW9kZTogJ1RSSUFOR0xFUydcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVFeHRlbnRzKHBvaW50cykge1xuICAgIGNvbnN0IG1pbiA9IHBvaW50cy5yZWR1Y2UoKHJlc3VsdCwgcG9pbnQpID0+IFZlYzMubWluKHJlc3VsdCwgcG9pbnQpLCBWZWMzLmxhcmdlc3QoKSk7XG4gICAgY29uc3QgbWF4ID0gcG9pbnRzLnJlZHVjZSgocmVzdWx0LCBwb2ludCkgPT4gVmVjMy5tYXgocmVzdWx0LCBwb2ludCksIFZlYzMuc21hbGxlc3QoKSk7XG4gICAgcmV0dXJuIFZlYzMuc3ViKG1heCwgbWluKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9wcm9jZWR1cmFsL1RyaWFuZ2xlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvcHJvY2VkdXJhbC9UcmlhbmdsZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQXJyYXlVdGlscyBmcm9tICcuLi8uLi9zcmMvQXJyYXlVdGlscy5qcyc7XG5pbXBvcnQgTWF0aFV0aWxzIGZyb20gJy4uLy4uL3NyYy9NYXRoVXRpbHMuanMnO1xuaW1wb3J0IE1lc2ggZnJvbSAnLi4vLi4vc3JjL01lc2guanMnO1xuaW1wb3J0IFZlYzMgZnJvbSAnLi4vLi4vc3JjL1ZlYzMuanMnO1xuaW1wb3J0IE1hdDMgZnJvbSAnLi4vLi4vc3JjL01hdDMuanMnO1xuaW1wb3J0IEN1YmUgZnJvbSAnLi9DdWJlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgb3JpZ2luID0gVmVjMy56ZXJvKCksXG4gICAgICAgIHBvc2l0aW9uID0gVmVjMy56ZXJvKCksXG4gICAgICAgIG9yaWVudGF0aW9uID0gVmVjMy56ZXJvKCksXG4gICAgICAgIHNjYWxlID0gVmVjMy5vbmUoKSxcblxuICAgICAgICBzZWdtZW50cyA9IDIwLFxuICAgICAgICB0d2lzdCA9IDUsXG4gICAgICAgIHNocmluayA9IDAuMDQsXG4gICAgICAgIGhlaWdodCA9IDVcbiAgICB9ID0gcGFyYW1zO1xuXG4gICAgY29uc3QgbWVzaGVzID0gW107XG4gICAgQXJyYXlVdGlscy5yYW5nZShzZWdtZW50cykuZm9yRWFjaChpID0+IHtcbiAgICAgICAgY29uc3QgdG90YWxTaXplID0gbWVzaGVzLmxlbmd0aCA+IDAgP1xuICAgICAgICAgICAgTWVzaC5nZXRFeHRlbnRzKE1lc2gubWVyZ2UoLi4ubWVzaGVzKSkgOlxuICAgICAgICAgICAgVmVjMy56ZXJvKCk7XG5cbiAgICAgICAgbWVzaGVzLnB1c2goQ3ViZSh7XG4gICAgICAgICAgICBvcmlnaW46IFswLCAtMSwgMF0sXG4gICAgICAgICAgICBwb3NpdGlvbjogWzAsIHRvdGFsU2l6ZVsxXSwgMF0sXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogWzAsIHR3aXN0ICogaSwgMF0sXG4gICAgICAgICAgICBzY2FsZTogWzEgLyAoc2hyaW5rICogaSArIDEpLCBoZWlnaHQgLyBzZWdtZW50cywgMSAvIChzaHJpbmsgKiBpICsgMSldXG4gICAgICAgIH0pKTtcblxuICAgIH0pO1xuXG5cbiAgICBsZXQgbWVzaCA9IE1lc2gubWVyZ2UoLi4ubWVzaGVzKTtcbiAgICBtZXNoLnBvc2l0aW9ucyA9IG1lc2gucG9zaXRpb25zLm1hcChwb3MgPT4ge1xuICAgICAgICByZXR1cm4gVmVjMy50cmFuc2Zvcm0ocG9zLCBNYXQzLmZyb21FdWxlckFuZ2xlcyhbMCwgTWF0aFV0aWxzLmRlZ1RvUmFkKHR3aXN0ICogcG9zWzFdKSwgMF0pKTtcbiAgICB9KTtcbiAgICBtZXNoLm5vcm1hbHMgPSBtZXNoLm5vcm1hbHMubWFwKChub3JtYWwsIGkpID0+IHtcbiAgICAgICAgcmV0dXJuIFZlYzMudHJhbnNmb3JtKG5vcm1hbCwgTWF0My5mcm9tRXVsZXJBbmdsZXMoWzAsIE1hdGhVdGlscy5kZWdUb1JhZCh0d2lzdCAqIG1lc2gucG9zaXRpb25zW2ldWzFdKSwgMF0pKTtcbiAgICB9KTtcblxuICAgIC8qXG4gICAgbWVzaCA9IE1lc2gubWVyZ2UobWVzaCwgQ3ViZSh7XG4gICAgICAgIG9yaWdpbjogWzAsIC0xLCAwXSxcbiAgICAgICAgcG9zaXRpb246IFswLCBNZXNoLmdldEV4dGVudHMoTWVzaC5tZXJnZSguLi5tZXNoZXMpKVsxXSwgMF0sXG4gICAgICAgIHNjYWxlOiBbMi41LCAyLjUsIDIuNV1cbiAgICB9KSk7XG4gICAgKi9cblxuICAgIE1lc2guYXBwbHlTY2FsZShtZXNoLCBzY2FsZSk7XG4gICAgTWVzaC5hcHBseVJvdGF0aW9uKG1lc2gsIE1hdDMuZnJvbUV1bGVyQW5nbGVzKG9yaWVudGF0aW9uLm1hcChNYXRoVXRpbHMuZGVnVG9SYWQpKSk7XG4gICAgTWVzaC5hcHBseVRyYW5zbGF0aW9uKG1lc2gsIHBvc2l0aW9uKTtcbiAgICBNZXNoLmFwcGx5T3JpZ2luKG1lc2gsIG9yaWdpbik7XG5cbiAgICByZXR1cm4gbWVzaDtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvcHJvY2VkdXJhbC9UdXJuaW5nVG9yc28uanNcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9wcm9jZWR1cmFsL1R1cm5pbmdUb3Jzby5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuXFxudW5pZm9ybSB2ZWM0IGFsYmVkbztcXG51bmlmb3JtIHZlYzQgYW1iaWVudDtcXG4vLyB1bmlmb3JtIHNhbXBsZXIyRCBhbGJlZG9TYW1wbGVyO1xcbi8vIHVuaWZvcm0gZmxvYXQgdXZTY2FsZTtcXG5cXG52YXJ5aW5nIHZlYzIgc3VyZmFjZVV2O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgLy8gZ2xfRnJhZ0NvbG9yID0gdmVjNCgoYWxiZWRvLnh5eiArIHRleHR1cmUyRChhbGJlZG9TYW1wbGVyLCBzdXJmYWNlVXYgKiB1dlNjYWxlKS54eXopICogMC43LCAxKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChhbGJlZG8ueHl6ICogMC43LCAxKTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvc2hhZGVycy9hbWJpZW50LmZyYWdcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9zaGFkZXJzL2FtYmllbnQuZnJhZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxudW5pZm9ybSBtYXQ0IHZpZXc7XFxudW5pZm9ybSBtYXQ0IHdvcmxkO1xcbnVuaWZvcm0gZmxvYXQgdG90YWxUaW1lO1xcblxcbmF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xcblxcbnZhcnlpbmcgdmVjMiBzdXJmYWNlVXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBzdXJmYWNlVXYgPSB1djtcXG5cXG4gICAgdmVjNCB3b3JsZFBvcyA9IHdvcmxkICogcG9zaXRpb247XFxuICAgIGZsb2F0IGFtcGxpdHVkZSA9IChzaW4oLXdvcmxkUG9zLnggLyAxNi4wICsgKHRvdGFsVGltZS8xMDAwLjApKSArIDEuMCkgLyAyLjA7XFxuICAgIGZsb2F0IHN3YXkgPSBzaW4odG90YWxUaW1lLzEwMDAuMCkgKiBwb3NpdGlvbi55ICogYW1wbGl0dWRlO1xcbiAgICB2ZWM0IHN1cmZhY2VQb3NpdGlvbiA9IHdvcmxkUG9zICsgdmVjNChzd2F5LCAwLCAwLCAwKTtcXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIHN1cmZhY2VQb3NpdGlvbjtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvc2hhZGVycy9hbWJpZW50LnZlcnRcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9zaGFkZXJzL2FtYmllbnQudmVydFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuXFxudW5pZm9ybSBzYW1wbGVyMkQgc2FtcGxlcjtcXG52YXJ5aW5nIHZlYzIgc3VyZmFjZVV2O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgLy8gZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHNhbXBsZXIsIHN1cmZhY2VVdik7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoc3VyZmFjZVV2LngsIHN1cmZhY2VVdi55LCAwLCAxKTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvc2hhZGVycy9kZWJ1Zy11di5mcmFnXG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvc2hhZGVycy9kZWJ1Zy11di5mcmFnXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXG51bmlmb3JtIG1hdDQgdmlldztcXG51bmlmb3JtIG1hdDQgd29ybGQ7XFxuXFxuYXR0cmlidXRlIHZlYzQgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuXFxudmFyeWluZyB2ZWMyIHN1cmZhY2VVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHN1cmZhY2VVdiA9IHV2O1xcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogd29ybGQgKiBwb3NpdGlvbjtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvc2hhZGVycy9kZWJ1Zy11di52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvc2hhZGVycy9kZWJ1Zy11di52ZXJ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG5cXG51bmlmb3JtIHZlYzQgY29sb3I7XFxudW5pZm9ybSB2ZWM0IGxpZ2h0Q29sb3I7XFxudW5pZm9ybSB2ZWMzIGxpZ2h0UG9zO1xcbnVuaWZvcm0gZmxvYXQgbGlnaHRMaW5lYXJUZXJtO1xcbnVuaWZvcm0gZmxvYXQgbGlnaHRRdWFkcmF0aWNUZXJtO1xcbnVuaWZvcm0gZmxvYXQgbGlnaHRSYWRpdXM7XFxudW5pZm9ybSBmbG9hdCBsaWdodEN1dG9mZjtcXG51bmlmb3JtIGZsb2F0IGxpZ2h0SW50ZW5zaXR5O1xcblxcbnZhcnlpbmcgdmVjMyBzdXJmYWNlUG9zO1xcbnZhcnlpbmcgdmVjMyBzdXJmYWNlTm9ybWFsO1xcblxcbmZsb2F0IGdldEF0dGVudWF0aW9uKGZsb2F0IGNvbnN0YW50LCBmbG9hdCBsaW5lYXIsIGZsb2F0IHF1YWRyYXRpYywgZmxvYXQgZGlzdCkge1xcbiAgICByZXR1cm4gMS4wIC8gKGNvbnN0YW50ICsgbGluZWFyICogZGlzdCArIHF1YWRyYXRpYyAqIChkaXN0KmRpc3QpKTtcXG59XFxuXFxuLy8gaHR0cHM6Ly9pbWRvaW5naXR3cm9uZy53b3JkcHJlc3MuY29tLzIwMTEvMDEvMzEvbGlnaHQtYXR0ZW51YXRpb24vXFxuZmxvYXQgZ2V0QXR0ZW51YXRpb24yKGZsb2F0IHJhZGl1cywgZmxvYXQgaW50ZW5zaXR5LCBmbG9hdCBjdXRvZmYsIGZsb2F0IGRpc3QpIHtcXG4gICAgZmxvYXQgZCA9IG1heChkaXN0IC0gcmFkaXVzLCAwLjApO1xcbiAgICBmbG9hdCBkZW5vbSA9IGQvcmFkaXVzICsgMS4wO1xcbiAgICBmbG9hdCBhdHRlbnVhdGlvbiA9IDAuMDtcXG4gICAgYXR0ZW51YXRpb24gPSBpbnRlbnNpdHkgLyAoZGVub20qZGVub20pO1xcbiAgICBhdHRlbnVhdGlvbiA9IChhdHRlbnVhdGlvbiAtIGN1dG9mZikgLyAoMS4wIC0gY3V0b2ZmKTtcXG4gICAgYXR0ZW51YXRpb24gPSBtYXgoYXR0ZW51YXRpb24sIDAuMCk7XFxuICAgIHJldHVybiBhdHRlbnVhdGlvbjtcXG59XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWMzIHN1cmZhY2VUb0xpZ2h0ID0gbGlnaHRQb3MgLSBzdXJmYWNlUG9zO1xcbiAgICBmbG9hdCBkaXN0ID0gbGVuZ3RoKHN1cmZhY2VUb0xpZ2h0KTtcXG4gICAgZmxvYXQgZmFjaW5nID0gbWF4KGRvdChub3JtYWxpemUoc3VyZmFjZVRvTGlnaHQpLCBub3JtYWxpemUoc3VyZmFjZU5vcm1hbCkpLCAwLjApO1xcblxcbiAgICBmbG9hdCBhdHRlbnVhdGlvbiA9IGdldEF0dGVudWF0aW9uMihsaWdodFJhZGl1cywgbGlnaHRJbnRlbnNpdHksIGxpZ2h0Q3V0b2ZmLCBkaXN0KTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvci54eXogKiBsaWdodENvbG9yLnh5eiAqIGZhY2luZyAqIGF0dGVudWF0aW9uLCAxKTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvc2hhZGVycy9wb2ludGxpZ2h0LmZyYWdcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9zaGFkZXJzL3BvaW50bGlnaHQuZnJhZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxudW5pZm9ybSBtYXQ0IHZpZXc7XFxudW5pZm9ybSBtYXQ0IHdvcmxkO1xcblxcbmF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMzIG5vcm1hbDtcXG52YXJ5aW5nIHZlYzMgc3VyZmFjZVBvcztcXG52YXJ5aW5nIHZlYzMgc3VyZmFjZU5vcm1hbDtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHN1cmZhY2VOb3JtYWwgPSAobWF0Myh3b3JsZCkgKiBub3JtYWwpO1xcbiAgICBzdXJmYWNlUG9zID0gKHdvcmxkICogcG9zaXRpb24pLnh5ejtcXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIHdvcmxkICogcG9zaXRpb247XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L3NoYWRlcnMvcG9pbnRsaWdodC52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvc2hhZGVycy9wb2ludGxpZ2h0LnZlcnRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgwLjApO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9zaGFkZXJzL3NoYWRvdy5mcmFnXG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvc2hhZGVycy9zaGFkb3cuZnJhZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxudW5pZm9ybSBtYXQ0IHZpZXc7XFxudW5pZm9ybSBtYXQ0IHdvcmxkO1xcblxcbmF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIHdvcmxkICogcG9zaXRpb247XFxuICAgIGdsX1Bvc2l0aW9uLnogLT0gMC4wMDE7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L3NoYWRlcnMvc2hhZG93LnZlcnRcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9zaGFkZXJzL3NoYWRvdy52ZXJ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG5cXG51bmlmb3JtIHZlYzQgbGlnaHRDb2xvcjtcXG51bmlmb3JtIHZlYzMgbGlnaHREaXJlY3Rpb247XFxudW5pZm9ybSBmbG9hdCBsaWdodEludGVuc2l0eTtcXG51bmlmb3JtIHNhbXBsZXIyRCBsYXllclRleHR1cmU7XFxuXFxudmFyeWluZyB2ZWMzIHdvcmxkTm9ybWFsO1xcbnZhcnlpbmcgdmVjMyBsb2NhbFBvc2l0aW9uO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgY29uc3QgZmxvYXQgb2Zmc2V0ID0gMS41O1xcbiAgICBjb25zdCBmbG9hdCBhbXAgPSAwLjAxO1xcbiAgICBjb25zdCBmbG9hdCBmcmVxID0gMTAuMDtcXG4gICAgZmxvYXQgdSA9ICgobG9jYWxQb3NpdGlvbi55ICsgMS4wKSAvIDIuMCkgKyBzaW4oKGxvY2FsUG9zaXRpb24ueCArIGxvY2FsUG9zaXRpb24ueikgKiBmcmVxICsgb2Zmc2V0KSAqIGFtcDtcXG4gICAgdmVjMyBjb2xvciA9IHRleHR1cmUyRChsYXllclRleHR1cmUsIHZlYzIoMS4wIC0gdSwgMC41KSkucmdiO1xcblxcbiAgICB2ZWMzIHN1cmZhY2VDb2xvciA9IGNvbG9yLnh5ejtcXG4gICAgZmxvYXQgZmFjaW5nID0gbWF4KGRvdChub3JtYWxpemUoLWxpZ2h0RGlyZWN0aW9uKSwgbm9ybWFsaXplKHdvcmxkTm9ybWFsKSksIDAuMCk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoc3VyZmFjZUNvbG9yICogbGlnaHRDb2xvci5yZ2IgKiBmYWNpbmcgKiBsaWdodEludGVuc2l0eSwgMS4wKTtcXG59XFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvc2hhZGVycy9zdW5saWdodC10ZXJyYWluLmZyYWdcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9zaGFkZXJzL3N1bmxpZ2h0LXRlcnJhaW4uZnJhZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxudW5pZm9ybSBtYXQ0IHZpZXc7XFxudW5pZm9ybSBtYXQ0IHdvcmxkO1xcblxcbmF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMzIG5vcm1hbDtcXG5cXG52YXJ5aW5nIHZlYzMgbG9jYWxQb3NpdGlvbjtcXG52YXJ5aW5nIHZlYzMgd29ybGROb3JtYWw7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBsb2NhbFBvc2l0aW9uID0gcG9zaXRpb24ueHl6O1xcbiAgICB3b3JsZE5vcm1hbCA9IG1hdDMod29ybGQpICogbm9ybWFsO1xcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogd29ybGQgKiB2ZWM0KGxvY2FsUG9zaXRpb24sIHBvc2l0aW9uLncpO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9zaGFkZXJzL3N1bmxpZ2h0LXRlcnJhaW4udmVydFxuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3NoYWRlcnMvc3VubGlnaHQtdGVycmFpbi52ZXJ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG5cXG51bmlmb3JtIHZlYzQgYWxiZWRvO1xcbnVuaWZvcm0gdmVjNCBsaWdodENvbG9yO1xcbnVuaWZvcm0gdmVjMyBsaWdodERpcmVjdGlvbjtcXG51bmlmb3JtIGZsb2F0IGxpZ2h0SW50ZW5zaXR5O1xcblxcbnZhcnlpbmcgdmVjMyBzdXJmYWNlTm9ybWFsO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgdmVjMyBzdXJmYWNlQ29sb3IgPSBhbGJlZG8ueHl6O1xcbiAgICBmbG9hdCBmYWNpbmcgPSBtYXgoZG90KG5vcm1hbGl6ZSgtbGlnaHREaXJlY3Rpb24pLCBub3JtYWxpemUoc3VyZmFjZU5vcm1hbCkpLCAwLjApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHN1cmZhY2VDb2xvciAqIGxpZ2h0Q29sb3IucmdiICogZmFjaW5nICogbGlnaHRJbnRlbnNpdHksIDEuMCk7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L3NoYWRlcnMvc3VubGlnaHQuZnJhZ1xuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3NoYWRlcnMvc3VubGlnaHQuZnJhZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxudW5pZm9ybSBtYXQ0IHZpZXc7XFxudW5pZm9ybSBtYXQ0IHdvcmxkO1xcbnVuaWZvcm0gZmxvYXQgdG90YWxUaW1lO1xcblxcbmF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMzIG5vcm1hbDtcXG5cXG52YXJ5aW5nIHZlYzMgc3VyZmFjZU5vcm1hbDtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHN1cmZhY2VOb3JtYWwgPSBtYXQzKHdvcmxkKSAqIG5vcm1hbDtcXG5cXG4gICAgdmVjNCB3b3JsZFBvcyA9IHdvcmxkICogcG9zaXRpb247XFxuICAgIGZsb2F0IGFtcGxpdHVkZSA9IChzaW4oLXdvcmxkUG9zLnggLyAxNi4wICsgKHRvdGFsVGltZS8xMDAwLjApKSArIDEuMCkgLyAyLjA7XFxuICAgIGZsb2F0IHN3YXkgPSBzaW4odG90YWxUaW1lLzEwMDAuMCkgKiBwb3NpdGlvbi55ICogYW1wbGl0dWRlO1xcbiAgICB2ZWM0IHN1cmZhY2VQb3NpdGlvbiA9IHdvcmxkUG9zICsgdmVjNChzd2F5LCAwLCAwLCAwKTtcXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uICogdmlldyAqIHN1cmZhY2VQb3NpdGlvbjtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvc2hhZGVycy9zdW5saWdodC52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvc2hhZGVycy9zdW5saWdodC52ZXJ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG5cXG51bmlmb3JtIHNhbXBsZXIyRCBsYXllclRleHR1cmU7XFxudmFyeWluZyB2ZWMzIGxvY2FsUG9zaXRpb247XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBjb25zdCBmbG9hdCBvZmZzZXQgPSAxLjU7XFxuICAgIGNvbnN0IGZsb2F0IGFtcCA9IDAuMDE7XFxuICAgIGNvbnN0IGZsb2F0IGZyZXEgPSAxMC4wO1xcbiAgICBmbG9hdCB1ID0gKChsb2NhbFBvc2l0aW9uLnkgKyAxLjApIC8gMi4wKSArIHNpbigobG9jYWxQb3NpdGlvbi54ICsgbG9jYWxQb3NpdGlvbi56KSAqIGZyZXEgKyBvZmZzZXQpICogYW1wO1xcbiAgICB2ZWMzIGNvbG9yID0gdGV4dHVyZTJEKGxheWVyVGV4dHVyZSwgdmVjMigxLjAgLSB1LCAwLjUpKS5yZ2IgKiAwLjU7XFxuXFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsIDEuMCk7XFxufVxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L3NoYWRlcnMvdGVycmFpbi5mcmFnXG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvc2hhZGVycy90ZXJyYWluLmZyYWdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1xcbnVuaWZvcm0gbWF0NCB2aWV3O1xcbnVuaWZvcm0gbWF0NCB3b3JsZDtcXG51bmlmb3JtIGZsb2F0IHRvdGFsVGltZTtcXG5cXG5hdHRyaWJ1dGUgdmVjNCBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMyBub3JtYWw7XFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuXFxudmFyeWluZyB2ZWMzIGxvY2FsUG9zaXRpb247XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBsb2NhbFBvc2l0aW9uID0gcG9zaXRpb24ueHl6O1xcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogd29ybGQgKiB2ZWM0KGxvY2FsUG9zaXRpb24sIHBvc2l0aW9uLncpO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9zaGFkZXJzL3RlcnJhaW4udmVydFxuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3NoYWRlcnMvdGVycmFpbi52ZXJ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodW5kZWZpbmVkKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsIGJvZHkge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG5jYW52YXMge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZDogcHVycGxlO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyIS4vc3JjL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3NyYy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qanNoaW50IGVxbnVsbDp0cnVlKi9cbihmdW5jdGlvbiAocm9vdCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgR0xPQkFMX0tFWSA9IFwiUmFuZG9tXCI7XG5cbiAgdmFyIGltdWwgPSAodHlwZW9mIE1hdGguaW11bCAhPT0gXCJmdW5jdGlvblwiIHx8IE1hdGguaW11bCgweGZmZmZmZmZmLCA1KSAhPT0gLTUgP1xuICAgIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICB2YXIgYWggPSAoYSA+Pj4gMTYpICYgMHhmZmZmO1xuICAgICAgdmFyIGFsID0gYSAmIDB4ZmZmZjtcbiAgICAgIHZhciBiaCA9IChiID4+PiAxNikgJiAweGZmZmY7XG4gICAgICB2YXIgYmwgPSBiICYgMHhmZmZmO1xuICAgICAgLy8gdGhlIHNoaWZ0IGJ5IDAgZml4ZXMgdGhlIHNpZ24gb24gdGhlIGhpZ2ggcGFydFxuICAgICAgLy8gdGhlIGZpbmFsIHwwIGNvbnZlcnRzIHRoZSB1bnNpZ25lZCB2YWx1ZSBpbnRvIGEgc2lnbmVkIHZhbHVlXG4gICAgICByZXR1cm4gKGFsICogYmwpICsgKCgoYWggKiBibCArIGFsICogYmgpIDw8IDE2KSA+Pj4gMCkgfCAwO1xuICAgIH0gOlxuICAgIE1hdGguaW11bCk7XG5cbiAgdmFyIHN0cmluZ1JlcGVhdCA9ICh0eXBlb2YgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQgPT09IFwiZnVuY3Rpb25cIiAmJiBcInhcIi5yZXBlYXQoMykgPT09IFwieHh4XCIgP1xuICAgIGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICByZXR1cm4geC5yZXBlYXQoeSk7XG4gICAgfSA6IGZ1bmN0aW9uIChwYXR0ZXJuLCBjb3VudCkge1xuICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICB3aGlsZSAoY291bnQgPiAwKSB7XG4gICAgICAgIGlmIChjb3VudCAmIDEpIHtcbiAgICAgICAgICByZXN1bHQgKz0gcGF0dGVybjtcbiAgICAgICAgfVxuICAgICAgICBjb3VudCA+Pj0gMTtcbiAgICAgICAgcGF0dGVybiArPSBwYXR0ZXJuO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcblxuICBmdW5jdGlvbiBSYW5kb20oZW5naW5lKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFJhbmRvbSkpIHtcbiAgICAgIHJldHVybiBuZXcgUmFuZG9tKGVuZ2luZSk7XG4gICAgfVxuXG4gICAgaWYgKGVuZ2luZSA9PSBudWxsKSB7XG4gICAgICBlbmdpbmUgPSBSYW5kb20uZW5naW5lcy5uYXRpdmVNYXRoO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIGVuZ2luZSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgZW5naW5lIHRvIGJlIGEgZnVuY3Rpb24sIGdvdCBcIiArIHR5cGVvZiBlbmdpbmUpO1xuICAgIH1cbiAgICB0aGlzLmVuZ2luZSA9IGVuZ2luZTtcbiAgfVxuICB2YXIgcHJvdG8gPSBSYW5kb20ucHJvdG90eXBlO1xuXG4gIFJhbmRvbS5lbmdpbmVzID0ge1xuICAgIG5hdGl2ZU1hdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwKSB8IDA7XG4gICAgfSxcbiAgICBtdDE5OTM3OiAoZnVuY3Rpb24gKEludDMyQXJyYXkpIHtcbiAgICAgIC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTWVyc2VubmVfdHdpc3RlclxuICAgICAgZnVuY3Rpb24gcmVmcmVzaERhdGEoZGF0YSkge1xuICAgICAgICB2YXIgayA9IDA7XG4gICAgICAgIHZhciB0bXAgPSAwO1xuICAgICAgICBmb3IgKDtcbiAgICAgICAgICAoayB8IDApIDwgMjI3OyBrID0gKGsgKyAxKSB8IDApIHtcbiAgICAgICAgICB0bXAgPSAoZGF0YVtrXSAmIDB4ODAwMDAwMDApIHwgKGRhdGFbKGsgKyAxKSB8IDBdICYgMHg3ZmZmZmZmZik7XG4gICAgICAgICAgZGF0YVtrXSA9IGRhdGFbKGsgKyAzOTcpIHwgMF0gXiAodG1wID4+PiAxKSBeICgodG1wICYgMHgxKSA/IDB4OTkwOGIwZGYgOiAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoO1xuICAgICAgICAgIChrIHwgMCkgPCA2MjM7IGsgPSAoayArIDEpIHwgMCkge1xuICAgICAgICAgIHRtcCA9IChkYXRhW2tdICYgMHg4MDAwMDAwMCkgfCAoZGF0YVsoayArIDEpIHwgMF0gJiAweDdmZmZmZmZmKTtcbiAgICAgICAgICBkYXRhW2tdID0gZGF0YVsoayAtIDIyNykgfCAwXSBeICh0bXAgPj4+IDEpIF4gKCh0bXAgJiAweDEpID8gMHg5OTA4YjBkZiA6IDApO1xuICAgICAgICB9XG5cbiAgICAgICAgdG1wID0gKGRhdGFbNjIzXSAmIDB4ODAwMDAwMDApIHwgKGRhdGFbMF0gJiAweDdmZmZmZmZmKTtcbiAgICAgICAgZGF0YVs2MjNdID0gZGF0YVszOTZdIF4gKHRtcCA+Pj4gMSkgXiAoKHRtcCAmIDB4MSkgPyAweDk5MDhiMGRmIDogMCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHRlbXBlcih2YWx1ZSkge1xuICAgICAgICB2YWx1ZSBePSB2YWx1ZSA+Pj4gMTE7XG4gICAgICAgIHZhbHVlIF49ICh2YWx1ZSA8PCA3KSAmIDB4OWQyYzU2ODA7XG4gICAgICAgIHZhbHVlIF49ICh2YWx1ZSA8PCAxNSkgJiAweGVmYzYwMDAwO1xuICAgICAgICByZXR1cm4gdmFsdWUgXiAodmFsdWUgPj4+IDE4KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2VlZFdpdGhBcnJheShkYXRhLCBzb3VyY2UpIHtcbiAgICAgICAgdmFyIGkgPSAxO1xuICAgICAgICB2YXIgaiA9IDA7XG4gICAgICAgIHZhciBzb3VyY2VMZW5ndGggPSBzb3VyY2UubGVuZ3RoO1xuICAgICAgICB2YXIgayA9IE1hdGgubWF4KHNvdXJjZUxlbmd0aCwgNjI0KSB8IDA7XG4gICAgICAgIHZhciBwcmV2aW91cyA9IGRhdGFbMF0gfCAwO1xuICAgICAgICBmb3IgKDtcbiAgICAgICAgICAoayB8IDApID4gMDsgLS1rKSB7XG4gICAgICAgICAgZGF0YVtpXSA9IHByZXZpb3VzID0gKChkYXRhW2ldIF4gaW11bCgocHJldmlvdXMgXiAocHJldmlvdXMgPj4+IDMwKSksIDB4MDAxOTY2MGQpKSArIChzb3VyY2Vbal0gfCAwKSArIChqIHwgMCkpIHwgMDtcbiAgICAgICAgICBpID0gKGkgKyAxKSB8IDA7XG4gICAgICAgICAgKytqO1xuICAgICAgICAgIGlmICgoaSB8IDApID4gNjIzKSB7XG4gICAgICAgICAgICBkYXRhWzBdID0gZGF0YVs2MjNdO1xuICAgICAgICAgICAgaSA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChqID49IHNvdXJjZUxlbmd0aCkge1xuICAgICAgICAgICAgaiA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAoayA9IDYyMztcbiAgICAgICAgICAoayB8IDApID4gMDsgLS1rKSB7XG4gICAgICAgICAgZGF0YVtpXSA9IHByZXZpb3VzID0gKChkYXRhW2ldIF4gaW11bCgocHJldmlvdXMgXiAocHJldmlvdXMgPj4+IDMwKSksIDB4NWQ1ODhiNjUpKSAtIGkpIHwgMDtcbiAgICAgICAgICBpID0gKGkgKyAxKSB8IDA7XG4gICAgICAgICAgaWYgKChpIHwgMCkgPiA2MjMpIHtcbiAgICAgICAgICAgIGRhdGFbMF0gPSBkYXRhWzYyM107XG4gICAgICAgICAgICBpID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YVswXSA9IDB4ODAwMDAwMDA7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG10MTk5MzcoKSB7XG4gICAgICAgIHZhciBkYXRhID0gbmV3IEludDMyQXJyYXkoNjI0KTtcbiAgICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIHVzZXMgPSAwO1xuXG4gICAgICAgIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgaWYgKChpbmRleCB8IDApID49IDYyNCkge1xuICAgICAgICAgICAgcmVmcmVzaERhdGEoZGF0YSk7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHZhbHVlID0gZGF0YVtpbmRleF07XG4gICAgICAgICAgaW5kZXggPSAoaW5kZXggKyAxKSB8IDA7XG4gICAgICAgICAgdXNlcyArPSAxO1xuICAgICAgICAgIHJldHVybiB0ZW1wZXIodmFsdWUpIHwgMDtcbiAgICAgICAgfVxuICAgICAgICBuZXh0LmdldFVzZUNvdW50ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHVzZXM7XG4gICAgICAgIH07XG4gICAgICAgIG5leHQuZGlzY2FyZCA9IGZ1bmN0aW9uIChjb3VudCkge1xuICAgICAgICAgIHVzZXMgKz0gY291bnQ7XG4gICAgICAgICAgaWYgKChpbmRleCB8IDApID49IDYyNCkge1xuICAgICAgICAgICAgcmVmcmVzaERhdGEoZGF0YSk7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHdoaWxlICgoY291bnQgLSBpbmRleCkgPiA2MjQpIHtcbiAgICAgICAgICAgIGNvdW50IC09IDYyNCAtIGluZGV4O1xuICAgICAgICAgICAgcmVmcmVzaERhdGEoZGF0YSk7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluZGV4ID0gKGluZGV4ICsgY291bnQpIHwgMDtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcbiAgICAgICAgbmV4dC5zZWVkID0gZnVuY3Rpb24gKGluaXRpYWwpIHtcbiAgICAgICAgICB2YXIgcHJldmlvdXMgPSAwO1xuICAgICAgICAgIGRhdGFbMF0gPSBwcmV2aW91cyA9IGluaXRpYWwgfCAwO1xuXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCA2MjQ7IGkgPSAoaSArIDEpIHwgMCkge1xuICAgICAgICAgICAgZGF0YVtpXSA9IHByZXZpb3VzID0gKGltdWwoKHByZXZpb3VzIF4gKHByZXZpb3VzID4+PiAzMCkpLCAweDZjMDc4OTY1KSArIGkpIHwgMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaW5kZXggPSA2MjQ7XG4gICAgICAgICAgdXNlcyA9IDA7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG4gICAgICAgIG5leHQuc2VlZFdpdGhBcnJheSA9IGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgICAgICBuZXh0LnNlZWQoMHgwMTJiZDZhYSk7XG4gICAgICAgICAgc2VlZFdpdGhBcnJheShkYXRhLCBzb3VyY2UpO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuICAgICAgICBuZXh0LmF1dG9TZWVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBuZXh0LnNlZWRXaXRoQXJyYXkoUmFuZG9tLmdlbmVyYXRlRW50cm9weUFycmF5KCkpO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG10MTk5Mzc7XG4gICAgfSh0eXBlb2YgSW50MzJBcnJheSA9PT0gXCJmdW5jdGlvblwiID8gSW50MzJBcnJheSA6IEFycmF5KSksXG4gICAgYnJvd3NlckNyeXB0bzogKHR5cGVvZiBjcnlwdG8gIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgSW50MzJBcnJheSA9PT0gXCJmdW5jdGlvblwiKSA/IChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGF0YSA9IG51bGw7XG4gICAgICB2YXIgaW5kZXggPSAxMjg7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbmRleCA+PSAxMjgpIHtcbiAgICAgICAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgZGF0YSA9IG5ldyBJbnQzMkFycmF5KDEyOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZGF0YSk7XG4gICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRhdGFbaW5kZXgrK10gfCAwO1xuICAgICAgfTtcbiAgICB9KCkpIDogbnVsbFxuICB9O1xuXG4gIFJhbmRvbS5nZW5lcmF0ZUVudHJvcHlBcnJheSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgZW5naW5lID0gUmFuZG9tLmVuZ2luZXMubmF0aXZlTWF0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyArK2kpIHtcbiAgICAgIGFycmF5W2ldID0gZW5naW5lKCkgfCAwO1xuICAgIH1cbiAgICBhcnJheS5wdXNoKG5ldyBEYXRlKCkuZ2V0VGltZSgpIHwgMCk7XG4gICAgcmV0dXJuIGFycmF5O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJldHVyblZhbHVlKHZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICB9XG5cbiAgLy8gWy0weDgwMDAwMDAwLCAweDdmZmZmZmZmXVxuICBSYW5kb20uaW50MzIgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgcmV0dXJuIGVuZ2luZSgpIHwgMDtcbiAgfTtcbiAgcHJvdG8uaW50MzIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFJhbmRvbS5pbnQzMih0aGlzLmVuZ2luZSk7XG4gIH07XG5cbiAgLy8gWzAsIDB4ZmZmZmZmZmZdXG4gIFJhbmRvbS51aW50MzIgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgcmV0dXJuIGVuZ2luZSgpID4+PiAwO1xuICB9O1xuICBwcm90by51aW50MzIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFJhbmRvbS51aW50MzIodGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIC8vIFswLCAweDFmZmZmZmZmZmZmZmZmXVxuICBSYW5kb20udWludDUzID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgIHZhciBoaWdoID0gZW5naW5lKCkgJiAweDFmZmZmZjtcbiAgICB2YXIgbG93ID0gZW5naW5lKCkgPj4+IDA7XG4gICAgcmV0dXJuIChoaWdoICogMHgxMDAwMDAwMDApICsgbG93O1xuICB9O1xuICBwcm90by51aW50NTMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFJhbmRvbS51aW50NTModGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIC8vIFswLCAweDIwMDAwMDAwMDAwMDAwXVxuICBSYW5kb20udWludDUzRnVsbCA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGhpZ2ggPSBlbmdpbmUoKSB8IDA7XG4gICAgICBpZiAoaGlnaCAmIDB4MjAwMDAwKSB7XG4gICAgICAgIGlmICgoaGlnaCAmIDB4M2ZmZmZmKSA9PT0gMHgyMDAwMDAgJiYgKGVuZ2luZSgpIHwgMCkgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gMHgyMDAwMDAwMDAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGxvdyA9IGVuZ2luZSgpID4+PiAwO1xuICAgICAgICByZXR1cm4gKChoaWdoICYgMHgxZmZmZmYpICogMHgxMDAwMDAwMDApICsgbG93O1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcHJvdG8udWludDUzRnVsbCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUmFuZG9tLnVpbnQ1M0Z1bGwodGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIC8vIFstMHgyMDAwMDAwMDAwMDAwMCwgMHgxZmZmZmZmZmZmZmZmZl1cbiAgUmFuZG9tLmludDUzID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgIHZhciBoaWdoID0gZW5naW5lKCkgfCAwO1xuICAgIHZhciBsb3cgPSBlbmdpbmUoKSA+Pj4gMDtcbiAgICByZXR1cm4gKChoaWdoICYgMHgxZmZmZmYpICogMHgxMDAwMDAwMDApICsgbG93ICsgKGhpZ2ggJiAweDIwMDAwMCA/IC0weDIwMDAwMDAwMDAwMDAwIDogMCk7XG4gIH07XG4gIHByb3RvLmludDUzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBSYW5kb20uaW50NTModGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIC8vIFstMHgyMDAwMDAwMDAwMDAwMCwgMHgyMDAwMDAwMDAwMDAwMF1cbiAgUmFuZG9tLmludDUzRnVsbCA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIGhpZ2ggPSBlbmdpbmUoKSB8IDA7XG4gICAgICBpZiAoaGlnaCAmIDB4NDAwMDAwKSB7XG4gICAgICAgIGlmICgoaGlnaCAmIDB4N2ZmZmZmKSA9PT0gMHg0MDAwMDAgJiYgKGVuZ2luZSgpIHwgMCkgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gMHgyMDAwMDAwMDAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGxvdyA9IGVuZ2luZSgpID4+PiAwO1xuICAgICAgICByZXR1cm4gKChoaWdoICYgMHgxZmZmZmYpICogMHgxMDAwMDAwMDApICsgbG93ICsgKGhpZ2ggJiAweDIwMDAwMCA/IC0weDIwMDAwMDAwMDAwMDAwIDogMCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBwcm90by5pbnQ1M0Z1bGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFJhbmRvbS5pbnQ1M0Z1bGwodGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIGFkZChnZW5lcmF0ZSwgYWRkZW5kKSB7XG4gICAgaWYgKGFkZGVuZCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGdlbmVyYXRlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgICAgICByZXR1cm4gZ2VuZXJhdGUoZW5naW5lKSArIGFkZGVuZDtcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgUmFuZG9tLmludGVnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGlzUG93ZXJPZlR3b01pbnVzT25lKHZhbHVlKSB7XG4gICAgICByZXR1cm4gKCh2YWx1ZSArIDEpICYgdmFsdWUpID09PSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGJpdG1hc2sobWFza2luZykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgICAgICAgcmV0dXJuIGVuZ2luZSgpICYgbWFza2luZztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG93bnNjYWxlVG9Mb29wQ2hlY2tlZFJhbmdlKHJhbmdlKSB7XG4gICAgICB2YXIgZXh0ZW5kZWRSYW5nZSA9IHJhbmdlICsgMTtcbiAgICAgIHZhciBtYXhpbXVtID0gZXh0ZW5kZWRSYW5nZSAqIE1hdGguZmxvb3IoMHgxMDAwMDAwMDAgLyBleHRlbmRlZFJhbmdlKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICB2YWx1ZSA9IGVuZ2luZSgpID4+PiAwO1xuICAgICAgICB9IHdoaWxlICh2YWx1ZSA+PSBtYXhpbXVtKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlICUgZXh0ZW5kZWRSYW5nZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZG93bnNjYWxlVG9SYW5nZShyYW5nZSkge1xuICAgICAgaWYgKGlzUG93ZXJPZlR3b01pbnVzT25lKHJhbmdlKSkge1xuICAgICAgICByZXR1cm4gYml0bWFzayhyYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZG93bnNjYWxlVG9Mb29wQ2hlY2tlZFJhbmdlKHJhbmdlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpc0V2ZW5seURpdmlzaWJsZUJ5TWF4SW50MzIodmFsdWUpIHtcbiAgICAgIHJldHVybiAodmFsdWUgfCAwKSA9PT0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cHNjYWxlV2l0aEhpZ2hNYXNraW5nKG1hc2tpbmcpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgICAgIHZhciBoaWdoID0gZW5naW5lKCkgJiBtYXNraW5nO1xuICAgICAgICB2YXIgbG93ID0gZW5naW5lKCkgPj4+IDA7XG4gICAgICAgIHJldHVybiAoaGlnaCAqIDB4MTAwMDAwMDAwKSArIGxvdztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBzY2FsZVRvTG9vcENoZWNrZWRSYW5nZShleHRlbmRlZFJhbmdlKSB7XG4gICAgICB2YXIgbWF4aW11bSA9IGV4dGVuZGVkUmFuZ2UgKiBNYXRoLmZsb29yKDB4MjAwMDAwMDAwMDAwMDAgLyBleHRlbmRlZFJhbmdlKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgICAgIHZhciByZXQgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgdmFyIGhpZ2ggPSBlbmdpbmUoKSAmIDB4MWZmZmZmO1xuICAgICAgICAgIHZhciBsb3cgPSBlbmdpbmUoKSA+Pj4gMDtcbiAgICAgICAgICByZXQgPSAoaGlnaCAqIDB4MTAwMDAwMDAwKSArIGxvdztcbiAgICAgICAgfSB3aGlsZSAocmV0ID49IG1heGltdW0pO1xuICAgICAgICByZXR1cm4gcmV0ICUgZXh0ZW5kZWRSYW5nZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBzY2FsZVdpdGhpblU1MyhyYW5nZSkge1xuICAgICAgdmFyIGV4dGVuZGVkUmFuZ2UgPSByYW5nZSArIDE7XG4gICAgICBpZiAoaXNFdmVubHlEaXZpc2libGVCeU1heEludDMyKGV4dGVuZGVkUmFuZ2UpKSB7XG4gICAgICAgIHZhciBoaWdoUmFuZ2UgPSAoKGV4dGVuZGVkUmFuZ2UgLyAweDEwMDAwMDAwMCkgfCAwKSAtIDE7XG4gICAgICAgIGlmIChpc1Bvd2VyT2ZUd29NaW51c09uZShoaWdoUmFuZ2UpKSB7XG4gICAgICAgICAgcmV0dXJuIHVwc2NhbGVXaXRoSGlnaE1hc2tpbmcoaGlnaFJhbmdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHVwc2NhbGVUb0xvb3BDaGVja2VkUmFuZ2UoZXh0ZW5kZWRSYW5nZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBzY2FsZVdpdGhpbkk1M0FuZExvb3BDaGVjayhtaW4sIG1heCkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgICAgICAgdmFyIHJldCA9IDA7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICB2YXIgaGlnaCA9IGVuZ2luZSgpIHwgMDtcbiAgICAgICAgICB2YXIgbG93ID0gZW5naW5lKCkgPj4+IDA7XG4gICAgICAgICAgcmV0ID0gKChoaWdoICYgMHgxZmZmZmYpICogMHgxMDAwMDAwMDApICsgbG93ICsgKGhpZ2ggJiAweDIwMDAwMCA/IC0weDIwMDAwMDAwMDAwMDAwIDogMCk7XG4gICAgICAgIH0gd2hpbGUgKHJldCA8IG1pbiB8fCByZXQgPiBtYXgpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG1pbiwgbWF4KSB7XG4gICAgICBtaW4gPSBNYXRoLmZsb29yKG1pbik7XG4gICAgICBtYXggPSBNYXRoLmZsb29yKG1heCk7XG4gICAgICBpZiAobWluIDwgLTB4MjAwMDAwMDAwMDAwMDAgfHwgIWlzRmluaXRlKG1pbikpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJFeHBlY3RlZCBtaW4gdG8gYmUgYXQgbGVhc3QgXCIgKyAoLTB4MjAwMDAwMDAwMDAwMDApKTtcbiAgICAgIH0gZWxzZSBpZiAobWF4ID4gMHgyMDAwMDAwMDAwMDAwMCB8fCAhaXNGaW5pdGUobWF4KSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkV4cGVjdGVkIG1heCB0byBiZSBhdCBtb3N0IFwiICsgMHgyMDAwMDAwMDAwMDAwMCk7XG4gICAgICB9XG5cbiAgICAgIHZhciByYW5nZSA9IG1heCAtIG1pbjtcbiAgICAgIGlmIChyYW5nZSA8PSAwIHx8ICFpc0Zpbml0ZShyYW5nZSkpIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlKG1pbik7XG4gICAgICB9IGVsc2UgaWYgKHJhbmdlID09PSAweGZmZmZmZmZmKSB7XG4gICAgICAgIGlmIChtaW4gPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gUmFuZG9tLnVpbnQzMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYWRkKFJhbmRvbS5pbnQzMiwgbWluICsgMHg4MDAwMDAwMCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocmFuZ2UgPCAweGZmZmZmZmZmKSB7XG4gICAgICAgIHJldHVybiBhZGQoZG93bnNjYWxlVG9SYW5nZShyYW5nZSksIG1pbik7XG4gICAgICB9IGVsc2UgaWYgKHJhbmdlID09PSAweDFmZmZmZmZmZmZmZmZmKSB7XG4gICAgICAgIHJldHVybiBhZGQoUmFuZG9tLnVpbnQ1MywgbWluKTtcbiAgICAgIH0gZWxzZSBpZiAocmFuZ2UgPCAweDFmZmZmZmZmZmZmZmZmKSB7XG4gICAgICAgIHJldHVybiBhZGQodXBzY2FsZVdpdGhpblU1MyhyYW5nZSksIG1pbik7XG4gICAgICB9IGVsc2UgaWYgKG1heCAtIDEgLSBtaW4gPT09IDB4MWZmZmZmZmZmZmZmZmYpIHtcbiAgICAgICAgcmV0dXJuIGFkZChSYW5kb20udWludDUzRnVsbCwgbWluKTtcbiAgICAgIH0gZWxzZSBpZiAobWluID09PSAtMHgyMDAwMDAwMDAwMDAwMCAmJiBtYXggPT09IDB4MjAwMDAwMDAwMDAwMDApIHtcbiAgICAgICAgcmV0dXJuIFJhbmRvbS5pbnQ1M0Z1bGw7XG4gICAgICB9IGVsc2UgaWYgKG1pbiA9PT0gLTB4MjAwMDAwMDAwMDAwMDAgJiYgbWF4ID09PSAweDFmZmZmZmZmZmZmZmZmKSB7XG4gICAgICAgIHJldHVybiBSYW5kb20uaW50NTM7XG4gICAgICB9IGVsc2UgaWYgKG1pbiA9PT0gLTB4MWZmZmZmZmZmZmZmZmYgJiYgbWF4ID09PSAweDIwMDAwMDAwMDAwMDAwKSB7XG4gICAgICAgIHJldHVybiBhZGQoUmFuZG9tLmludDUzLCAxKTtcbiAgICAgIH0gZWxzZSBpZiAobWF4ID09PSAweDIwMDAwMDAwMDAwMDAwKSB7XG4gICAgICAgIHJldHVybiBhZGQodXBzY2FsZVdpdGhpbkk1M0FuZExvb3BDaGVjayhtaW4gLSAxLCBtYXggLSAxKSwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdXBzY2FsZVdpdGhpbkk1M0FuZExvb3BDaGVjayhtaW4sIG1heCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSgpKTtcbiAgcHJvdG8uaW50ZWdlciA9IGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgIHJldHVybiBSYW5kb20uaW50ZWdlcihtaW4sIG1heCkodGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIC8vIFswLCAxXSAoZmxvYXRpbmcgcG9pbnQpXG4gIFJhbmRvbS5yZWFsWmVyb1RvT25lSW5jbHVzaXZlID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgIHJldHVybiBSYW5kb20udWludDUzRnVsbChlbmdpbmUpIC8gMHgyMDAwMDAwMDAwMDAwMDtcbiAgfTtcbiAgcHJvdG8ucmVhbFplcm9Ub09uZUluY2x1c2l2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUmFuZG9tLnJlYWxaZXJvVG9PbmVJbmNsdXNpdmUodGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIC8vIFswLCAxKSAoZmxvYXRpbmcgcG9pbnQpXG4gIFJhbmRvbS5yZWFsWmVyb1RvT25lRXhjbHVzaXZlID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgIHJldHVybiBSYW5kb20udWludDUzKGVuZ2luZSkgLyAweDIwMDAwMDAwMDAwMDAwO1xuICB9O1xuICBwcm90by5yZWFsWmVyb1RvT25lRXhjbHVzaXZlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBSYW5kb20ucmVhbFplcm9Ub09uZUV4Y2x1c2l2ZSh0aGlzLmVuZ2luZSk7XG4gIH07XG5cbiAgUmFuZG9tLnJlYWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIG11bHRpcGx5KGdlbmVyYXRlLCBtdWx0aXBsaWVyKSB7XG4gICAgICBpZiAobXVsdGlwbGllciA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZ2VuZXJhdGU7XG4gICAgICB9IGVsc2UgaWYgKG11bHRpcGxpZXIgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgICAgICAgcmV0dXJuIGdlbmVyYXRlKGVuZ2luZSkgKiBtdWx0aXBsaWVyO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAobGVmdCwgcmlnaHQsIGluY2x1c2l2ZSkge1xuICAgICAgaWYgKCFpc0Zpbml0ZShsZWZ0KSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkV4cGVjdGVkIGxlZnQgdG8gYmUgYSBmaW5pdGUgbnVtYmVyXCIpO1xuICAgICAgfSBlbHNlIGlmICghaXNGaW5pdGUocmlnaHQpKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiRXhwZWN0ZWQgcmlnaHQgdG8gYmUgYSBmaW5pdGUgbnVtYmVyXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFkZChcbiAgICAgICAgbXVsdGlwbHkoXG4gICAgICAgICAgaW5jbHVzaXZlID8gUmFuZG9tLnJlYWxaZXJvVG9PbmVJbmNsdXNpdmUgOiBSYW5kb20ucmVhbFplcm9Ub09uZUV4Y2x1c2l2ZSxcbiAgICAgICAgICByaWdodCAtIGxlZnQpLFxuICAgICAgICBsZWZ0KTtcbiAgICB9O1xuICB9KCkpO1xuICBwcm90by5yZWFsID0gZnVuY3Rpb24gKG1pbiwgbWF4LCBpbmNsdXNpdmUpIHtcbiAgICByZXR1cm4gUmFuZG9tLnJlYWwobWluLCBtYXgsIGluY2x1c2l2ZSkodGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIFJhbmRvbS5ib29sID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBpc0xlYXN0Qml0VHJ1ZShlbmdpbmUpIHtcbiAgICAgIHJldHVybiAoZW5naW5lKCkgJiAxKSA9PT0gMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBsZXNzVGhhbihnZW5lcmF0ZSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgICAgIHJldHVybiBnZW5lcmF0ZShlbmdpbmUpIDwgdmFsdWU7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2JhYmlsaXR5KHBlcmNlbnRhZ2UpIHtcbiAgICAgIGlmIChwZXJjZW50YWdlIDw9IDApIHtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlKGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAocGVyY2VudGFnZSA+PSAxKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzY2FsZWQgPSBwZXJjZW50YWdlICogMHgxMDAwMDAwMDA7XG4gICAgICAgIGlmIChzY2FsZWQgJSAxID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGxlc3NUaGFuKFJhbmRvbS5pbnQzMiwgKHNjYWxlZCAtIDB4ODAwMDAwMDApIHwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGxlc3NUaGFuKFJhbmRvbS51aW50NTMsIE1hdGgucm91bmQocGVyY2VudGFnZSAqIDB4MjAwMDAwMDAwMDAwMDApKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAobnVtZXJhdG9yLCBkZW5vbWluYXRvcikge1xuICAgICAgaWYgKGRlbm9taW5hdG9yID09IG51bGwpIHtcbiAgICAgICAgaWYgKG51bWVyYXRvciA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGlzTGVhc3RCaXRUcnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9iYWJpbGl0eShudW1lcmF0b3IpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG51bWVyYXRvciA8PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlKGZhbHNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChudW1lcmF0b3IgPj0gZGVub21pbmF0b3IpIHtcbiAgICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWUodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlc3NUaGFuKFJhbmRvbS5pbnRlZ2VyKDAsIGRlbm9taW5hdG9yIC0gMSksIG51bWVyYXRvcik7XG4gICAgICB9XG4gICAgfTtcbiAgfSgpKTtcbiAgcHJvdG8uYm9vbCA9IGZ1bmN0aW9uIChudW1lcmF0b3IsIGRlbm9taW5hdG9yKSB7XG4gICAgcmV0dXJuIFJhbmRvbS5ib29sKG51bWVyYXRvciwgZGVub21pbmF0b3IpKHRoaXMuZW5naW5lKTtcbiAgfTtcblxuICBmdW5jdGlvbiB0b0ludGVnZXIodmFsdWUpIHtcbiAgICB2YXIgbnVtYmVyID0gK3ZhbHVlO1xuICAgIGlmIChudW1iZXIgPCAwKSB7XG4gICAgICByZXR1cm4gTWF0aC5jZWlsKG51bWJlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLmZsb29yKG51bWJlcik7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gY29udmVydFNsaWNlQXJndW1lbnQodmFsdWUsIGxlbmd0aCkge1xuICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgIHJldHVybiBNYXRoLm1heCh2YWx1ZSArIGxlbmd0aCwgMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBNYXRoLm1pbih2YWx1ZSwgbGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgUmFuZG9tLnBpY2sgPSBmdW5jdGlvbiAoZW5naW5lLCBhcnJheSwgYmVnaW4sIGVuZCkge1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHN0YXJ0ID0gYmVnaW4gPT0gbnVsbCA/IDAgOiBjb252ZXJ0U2xpY2VBcmd1bWVudCh0b0ludGVnZXIoYmVnaW4pLCBsZW5ndGgpO1xuICAgIHZhciBmaW5pc2ggPSBlbmQgPT09IHZvaWQgMCA/IGxlbmd0aCA6IGNvbnZlcnRTbGljZUFyZ3VtZW50KHRvSW50ZWdlcihlbmQpLCBsZW5ndGgpO1xuICAgIGlmIChzdGFydCA+PSBmaW5pc2gpIHtcbiAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgfVxuICAgIHZhciBkaXN0cmlidXRpb24gPSBSYW5kb20uaW50ZWdlcihzdGFydCwgZmluaXNoIC0gMSk7XG4gICAgcmV0dXJuIGFycmF5W2Rpc3RyaWJ1dGlvbihlbmdpbmUpXTtcbiAgfTtcbiAgcHJvdG8ucGljayA9IGZ1bmN0aW9uIChhcnJheSwgYmVnaW4sIGVuZCkge1xuICAgIHJldHVybiBSYW5kb20ucGljayh0aGlzLmVuZ2luZSwgYXJyYXksIGJlZ2luLCBlbmQpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHJldHVyblVuZGVmaW5lZCgpIHtcbiAgICByZXR1cm4gdm9pZCAwO1xuICB9XG4gIHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbiAgUmFuZG9tLnBpY2tlciA9IGZ1bmN0aW9uIChhcnJheSwgYmVnaW4sIGVuZCkge1xuICAgIHZhciBjbG9uZSA9IHNsaWNlLmNhbGwoYXJyYXksIGJlZ2luLCBlbmQpO1xuICAgIGlmICghY2xvbmUubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcmV0dXJuVW5kZWZpbmVkO1xuICAgIH1cbiAgICB2YXIgZGlzdHJpYnV0aW9uID0gUmFuZG9tLmludGVnZXIoMCwgY2xvbmUubGVuZ3RoIC0gMSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgICAgIHJldHVybiBjbG9uZVtkaXN0cmlidXRpb24oZW5naW5lKV07XG4gICAgfTtcbiAgfTtcblxuICBSYW5kb20uc2h1ZmZsZSA9IGZ1bmN0aW9uIChlbmdpbmUsIGFycmF5LCBkb3duVG8pIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIGlmIChsZW5ndGgpIHtcbiAgICAgIGlmIChkb3duVG8gPT0gbnVsbCkge1xuICAgICAgICBkb3duVG8gPSAwO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IChsZW5ndGggLSAxKSA+Pj4gMDsgaSA+IGRvd25UbzsgLS1pKSB7XG4gICAgICAgIHZhciBkaXN0cmlidXRpb24gPSBSYW5kb20uaW50ZWdlcigwLCBpKTtcbiAgICAgICAgdmFyIGogPSBkaXN0cmlidXRpb24oZW5naW5lKTtcbiAgICAgICAgaWYgKGkgIT09IGopIHtcbiAgICAgICAgICB2YXIgdG1wID0gYXJyYXlbaV07XG4gICAgICAgICAgYXJyYXlbaV0gPSBhcnJheVtqXTtcbiAgICAgICAgICBhcnJheVtqXSA9IHRtcDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXJyYXk7XG4gIH07XG4gIHByb3RvLnNodWZmbGUgPSBmdW5jdGlvbiAoYXJyYXkpIHtcbiAgICByZXR1cm4gUmFuZG9tLnNodWZmbGUodGhpcy5lbmdpbmUsIGFycmF5KTtcbiAgfTtcblxuICBSYW5kb20uc2FtcGxlID0gZnVuY3Rpb24gKGVuZ2luZSwgcG9wdWxhdGlvbiwgc2FtcGxlU2l6ZSkge1xuICAgIGlmIChzYW1wbGVTaXplIDwgMCB8fCBzYW1wbGVTaXplID4gcG9wdWxhdGlvbi5sZW5ndGggfHwgIWlzRmluaXRlKHNhbXBsZVNpemUpKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkV4cGVjdGVkIHNhbXBsZVNpemUgdG8gYmUgd2l0aGluIDAgYW5kIHRoZSBsZW5ndGggb2YgdGhlIHBvcHVsYXRpb25cIik7XG4gICAgfVxuXG4gICAgaWYgKHNhbXBsZVNpemUgPT09IDApIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICB2YXIgY2xvbmUgPSBzbGljZS5jYWxsKHBvcHVsYXRpb24pO1xuICAgIHZhciBsZW5ndGggPSBjbG9uZS5sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA9PT0gc2FtcGxlU2l6ZSkge1xuICAgICAgcmV0dXJuIFJhbmRvbS5zaHVmZmxlKGVuZ2luZSwgY2xvbmUsIDApO1xuICAgIH1cbiAgICB2YXIgdGFpbExlbmd0aCA9IGxlbmd0aCAtIHNhbXBsZVNpemU7XG4gICAgcmV0dXJuIFJhbmRvbS5zaHVmZmxlKGVuZ2luZSwgY2xvbmUsIHRhaWxMZW5ndGggLSAxKS5zbGljZSh0YWlsTGVuZ3RoKTtcbiAgfTtcbiAgcHJvdG8uc2FtcGxlID0gZnVuY3Rpb24gKHBvcHVsYXRpb24sIHNhbXBsZVNpemUpIHtcbiAgICByZXR1cm4gUmFuZG9tLnNhbXBsZSh0aGlzLmVuZ2luZSwgcG9wdWxhdGlvbiwgc2FtcGxlU2l6ZSk7XG4gIH07XG5cbiAgUmFuZG9tLmRpZSA9IGZ1bmN0aW9uIChzaWRlQ291bnQpIHtcbiAgICByZXR1cm4gUmFuZG9tLmludGVnZXIoMSwgc2lkZUNvdW50KTtcbiAgfTtcbiAgcHJvdG8uZGllID0gZnVuY3Rpb24gKHNpZGVDb3VudCkge1xuICAgIHJldHVybiBSYW5kb20uZGllKHNpZGVDb3VudCkodGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIFJhbmRvbS5kaWNlID0gZnVuY3Rpb24gKHNpZGVDb3VudCwgZGllQ291bnQpIHtcbiAgICB2YXIgZGlzdHJpYnV0aW9uID0gUmFuZG9tLmRpZShzaWRlQ291bnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICByZXN1bHQubGVuZ3RoID0gZGllQ291bnQ7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRpZUNvdW50OyArK2kpIHtcbiAgICAgICAgcmVzdWx0W2ldID0gZGlzdHJpYnV0aW9uKGVuZ2luZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gIH07XG4gIHByb3RvLmRpY2UgPSBmdW5jdGlvbiAoc2lkZUNvdW50LCBkaWVDb3VudCkge1xuICAgIHJldHVybiBSYW5kb20uZGljZShzaWRlQ291bnQsIGRpZUNvdW50KSh0aGlzLmVuZ2luZSk7XG4gIH07XG5cbiAgLy8gaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Vbml2ZXJzYWxseV91bmlxdWVfaWRlbnRpZmllclxuICBSYW5kb20udXVpZDQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIHplcm9QYWQoc3RyaW5nLCB6ZXJvQ291bnQpIHtcbiAgICAgIHJldHVybiBzdHJpbmdSZXBlYXQoXCIwXCIsIHplcm9Db3VudCAtIHN0cmluZy5sZW5ndGgpICsgc3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgICB2YXIgYSA9IGVuZ2luZSgpID4+PiAwO1xuICAgICAgdmFyIGIgPSBlbmdpbmUoKSB8IDA7XG4gICAgICB2YXIgYyA9IGVuZ2luZSgpIHwgMDtcbiAgICAgIHZhciBkID0gZW5naW5lKCkgPj4+IDA7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHplcm9QYWQoYS50b1N0cmluZygxNiksIDgpICtcbiAgICAgICAgXCItXCIgK1xuICAgICAgICB6ZXJvUGFkKChiICYgMHhmZmZmKS50b1N0cmluZygxNiksIDQpICtcbiAgICAgICAgXCItXCIgK1xuICAgICAgICB6ZXJvUGFkKCgoKGIgPj4gNCkgJiAweDBmZmYpIHwgMHg0MDAwKS50b1N0cmluZygxNiksIDQpICtcbiAgICAgICAgXCItXCIgK1xuICAgICAgICB6ZXJvUGFkKCgoYyAmIDB4M2ZmZikgfCAweDgwMDApLnRvU3RyaW5nKDE2KSwgNCkgK1xuICAgICAgICBcIi1cIiArXG4gICAgICAgIHplcm9QYWQoKChjID4+IDQpICYgMHhmZmZmKS50b1N0cmluZygxNiksIDQpICtcbiAgICAgICAgemVyb1BhZChkLnRvU3RyaW5nKDE2KSwgOCkpO1xuICAgIH07XG4gIH0oKSk7XG4gIHByb3RvLnV1aWQ0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBSYW5kb20udXVpZDQodGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIFJhbmRvbS5zdHJpbmcgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIGhhcyAyKip4IGNoYXJzLCBmb3IgZmFzdGVyIHVuaWZvcm0gZGlzdHJpYnV0aW9uXG4gICAgdmFyIERFRkFVTFRfU1RSSU5HX1BPT0wgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5Xy1cIjtcblxuICAgIHJldHVybiBmdW5jdGlvbiAocG9vbCkge1xuICAgICAgaWYgKHBvb2wgPT0gbnVsbCkge1xuICAgICAgICBwb29sID0gREVGQVVMVF9TVFJJTkdfUE9PTDtcbiAgICAgIH1cblxuICAgICAgdmFyIGxlbmd0aCA9IHBvb2wubGVuZ3RoO1xuICAgICAgaWYgKCFsZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgcG9vbCBub3QgdG8gYmUgYW4gZW1wdHkgc3RyaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgZGlzdHJpYnV0aW9uID0gUmFuZG9tLmludGVnZXIoMCwgbGVuZ3RoIC0gMSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGVuZ2luZSwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgdmFyIGogPSBkaXN0cmlidXRpb24oZW5naW5lKTtcbiAgICAgICAgICByZXN1bHQgKz0gcG9vbC5jaGFyQXQoaik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH07XG4gICAgfTtcbiAgfSgpKTtcbiAgcHJvdG8uc3RyaW5nID0gZnVuY3Rpb24gKGxlbmd0aCwgcG9vbCkge1xuICAgIHJldHVybiBSYW5kb20uc3RyaW5nKHBvb2wpKHRoaXMuZW5naW5lLCBsZW5ndGgpO1xuICB9O1xuXG4gIFJhbmRvbS5oZXggPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBMT1dFUl9IRVhfUE9PTCA9IFwiMDEyMzQ1Njc4OWFiY2RlZlwiO1xuICAgIHZhciBsb3dlckhleCA9IFJhbmRvbS5zdHJpbmcoTE9XRVJfSEVYX1BPT0wpO1xuICAgIHZhciB1cHBlckhleCA9IFJhbmRvbS5zdHJpbmcoTE9XRVJfSEVYX1BPT0wudG9VcHBlckNhc2UoKSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHVwcGVyKSB7XG4gICAgICBpZiAodXBwZXIpIHtcbiAgICAgICAgcmV0dXJuIHVwcGVySGV4O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvd2VySGV4O1xuICAgICAgfVxuICAgIH07XG4gIH0oKSk7XG4gIHByb3RvLmhleCA9IGZ1bmN0aW9uIChsZW5ndGgsIHVwcGVyKSB7XG4gICAgcmV0dXJuIFJhbmRvbS5oZXgodXBwZXIpKHRoaXMuZW5naW5lLCBsZW5ndGgpO1xuICB9O1xuXG4gIFJhbmRvbS5kYXRlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICBpZiAoIShzdGFydCBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgc3RhcnQgdG8gYmUgYSBEYXRlLCBnb3QgXCIgKyB0eXBlb2Ygc3RhcnQpO1xuICAgIH0gZWxzZSBpZiAoIShlbmQgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGVuZCB0byBiZSBhIERhdGUsIGdvdCBcIiArIHR5cGVvZiBlbmQpO1xuICAgIH1cbiAgICB2YXIgZGlzdHJpYnV0aW9uID0gUmFuZG9tLmludGVnZXIoc3RhcnQuZ2V0VGltZSgpLCBlbmQuZ2V0VGltZSgpKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGRpc3RyaWJ1dGlvbihlbmdpbmUpKTtcbiAgICB9O1xuICB9O1xuICBwcm90by5kYXRlID0gZnVuY3Rpb24gKHN0YXJ0LCBlbmQpIHtcbiAgICByZXR1cm4gUmFuZG9tLmRhdGUoc3RhcnQsIGVuZCkodGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gUmFuZG9tO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIHJlcXVpcmUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gUmFuZG9tO1xuICB9IGVsc2Uge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgb2xkR2xvYmFsID0gcm9vdFtHTE9CQUxfS0VZXTtcbiAgICAgIFJhbmRvbS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByb290W0dMT0JBTF9LRVldID0gb2xkR2xvYmFsO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH07XG4gICAgfSgpKTtcbiAgICByb290W0dMT0JBTF9LRVldID0gUmFuZG9tO1xuICB9XG59KHRoaXMpKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9yYW5kb20tanMvbGliL3JhbmRvbS5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvcmFuZG9tLWpzL2xpYi9yYW5kb20uanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHNlbGVjdG9yKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vW3NlbGVjdG9yXSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0bWVtb1tzZWxlY3Rvcl0gPSBmbi5jYWxsKHRoaXMsIHNlbGVjdG9yKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWVtb1tzZWxlY3Rvcl1cblx0fTtcbn0pKGZ1bmN0aW9uICh0YXJnZXQpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KVxufSk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC8pL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcmFuZ2Vcbn07XG5cbmZ1bmN0aW9uIHJhbmdlKG51bWJlcikge1xuICAgIHJldHVybiBBcnJheShudW1iZXIpLmZpbGwoMCkubWFwKChfLCBpbmRleCkgPT4gaW5kZXgpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvQXJyYXlVdGlscy5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvQXJyYXlVdGlscy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBMb2cgZnJvbSAnLi9Mb2cuanMnO1xuaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlLmpzJztcbmltcG9ydCBNYXRoVXRpbHMgZnJvbSAnLi9NYXRoVXRpbHMuanMnO1xuaW1wb3J0IE1hdDMgZnJvbSAnLi9NYXQzLmpzJztcbmltcG9ydCBNYXQ0IGZyb20gJy4vTWF0NC5qcyc7XG5pbXBvcnQgVmVjMyBmcm9tICcuL1ZlYzMuanMnO1xuaW1wb3J0IFZlYzQgZnJvbSAnLi9WZWM0LmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHJlbmRlclNjZW5lLFxuICAgIGdldEdsQ29udGV4dCxcbiAgICBnZXRHbG9iYWxUcmFuc2Zvcm1cbn07XG5cbmZ1bmN0aW9uIHJlbmRlclNjZW5lKGNhbnZhcywgc2NlbmUsIHRpbWUsIGVuYWJsZUhhY2spIHtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzT2JqZWN0KHRpbWUpKTtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzTnVtYmVyKHRpbWUudG90YWwpKTtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzTnVtYmVyKHRpbWUuZGVsdGEpKTtcbiAgICAvLyBjb25zb2xlLmdyb3VwKCdHZngnKTtcblxuICAgIHVwZGF0ZUNhbnZhc1NpemUoY2FudmFzKTtcbiAgICBMb2cudmVyYm9zZShgcmVzaXplZCBjYW52YXMgdG8gWyR7Y2FudmFzLndpZHRoLnRvRml4ZWQoMCl9LCAke2NhbnZhcy5oZWlnaHQudG9GaXhlZCgwKX1dYCk7XG5cbiAgICBjb25zdCBnbCA9IGdldEdsQ29udGV4dChjYW52YXMpO1xuICAgIGdsLmVuYWJsZShnbC5ERVBUSF9URVNUKTtcbiAgICBnbC5kZXB0aEZ1bmMoZ2wuTEVRVUFMKTtcbiAgICBnbC5lbmFibGUoZ2wuQ1VMTF9GQUNFKTtcbiAgICBnbC52aWV3cG9ydCgwLCAwLCBnbC5jYW52YXMud2lkdGgsIGdsLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgY29uc3QgY2FtZXJhID0gZ2V0QWN0aXZlQ2FtZXJhKHNjZW5lKTtcbiAgICBjYW1lcmEucHJvamVjdGlvbiA9IGdldFByb2plY3Rpb25NYXRyaXgoY2FtZXJhLCBnbC5jYW52YXMud2lkdGggLyBnbC5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGNvbnN0IGNsZWFyQ29sb3IgPSBnZXRDbGVhckNvbG9yKGNhbWVyYSk7XG4gICAgY2xlYXIoZ2wsIGNsZWFyQ29sb3IpO1xuICAgIExvZy52ZXJib3NlKGBjbGVhcmVkIGNhbnZhcyB3aXRoIGNvbG9yOiBbJHtjbGVhckNvbG9yLm1hcChudW0gPT4gbnVtLnRvRml4ZWQoMCkpLmpvaW4oJywgJyl9XWApO1xuXG4gICAgTG9nLnZlcmJvc2UoJ2NvbnRleHQ6JywgZ2wpO1xuICAgIExvZy52ZXJib3NlKCdjYW1lcmE6JywgY2FtZXJhKTtcbiAgICBMb2cudmVyYm9zZSgnc2NlbmU6Jywgc2NlbmUpO1xuXG4gICAgY29uc3QgdmlzaWJsZU5vZGVzID0gc2NlbmUubm9kZXMuZmlsdGVyKGlzVmlzaWJsZSk7XG4gICAgY29uc3QgbWVzaE5vZGVzID0gdmlzaWJsZU5vZGVzLmZpbHRlcihoYXNNZXNoKTtcbiAgICBjb25zdCBsaWdodE5vZGVzID0gdmlzaWJsZU5vZGVzLmZpbHRlcihoYXNMaWdodCk7XG5cbiAgICBpZihlbmFibGVIYWNrKSB7XG4gICAgICAgIEhBQ0tfbG9hZFRleHR1cmUoZ2wpO1xuICAgIH1cblxuICAgIG1lc2hOb2Rlcy5mb3JFYWNoKG1lc2hOb2RlID0+IHtcbiAgICAgICAgTG9nLnZlcmJvc2UoYHJlbmRlcmluZyBtZXNoIG5vZGU6ICR7bWVzaE5vZGUua2V5fWApO1xuICAgICAgICByZW5kZXJOb2RlKGdsLCBtZXNoTm9kZSwgY2FtZXJhLCB0aW1lKTtcbiAgICB9KTtcblxuICAgIGxpZ2h0Tm9kZXMuZm9yRWFjaChsaWdodE5vZGUgPT4ge1xuICAgICAgICBMb2cudmVyYm9zZShgcmVuZGVyaW5nIGxpZ2h0IG5vZGU6ICR7bGlnaHROb2RlLmtleX1gKTtcbiAgICAgICAgcmVuZGVyTGlnaHQoZ2wsIGxpZ2h0Tm9kZSwgbWVzaE5vZGVzLCBjYW1lcmEsIHRpbWUpO1xuICAgIH0pO1xuXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xufVxuXG5mdW5jdGlvbiBIQUNLX2xvYWRUZXh0dXJlKGdsKSB7XG4gICAgY29uc3QgdGV4ZWxzID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICAxOTksIDE4NywgMjA5LFxuICAgICAgICAyMTUsIDE1NywgMTU1LFxuICAgICAgICAyMjQsIDE0MSwgMTExLFxuICAgICAgICAyMjQsIDE0MSwgMTExLFxuICAgICAgICAxMzIsIDQwLCAzNSxcbiAgICAgICAgMTMyLCA0MCwgMzUsXG4gICAgXSk7XG4gICAgLypcbiAgICBjb25zdCB0ZXhlbHMgPSBuZXcgVWludDhBcnJheShbXG4gICAgICAgIDg1LCA5MiwgMTAyLFxuICAgICAgICAyMzQsIDIwOCwgMTY4LFxuICAgICAgICAxMzIsIDQwLCAzNSxcbiAgICAgICAgMTMyLCA0MCwgMzUsXG4gICAgICAgIDEzMiwgNDAsIDM1LFxuICAgICAgICAxMzIsIDQwLCAzNSxcbiAgICAgICAgMTMyLCA0MCwgMzUsXG4gICAgICAgIDEzMiwgNDAsIDM1LFxuICAgICAgICAxMzIsIDQwLCAzNSxcbiAgICAgICAgMTMyLCA0MCwgMzUsXG4gICAgICAgIDI1NSwgMCwgMCxcbiAgICAgICAgMjU1LCAwLCAwLFxuICAgICAgICAyNTUsIDAsIDAsXG4gICAgXSk7XG4gICAgKi9cbiAgICBjb25zdCB3aWR0aCA9IHRleGVscy5sZW5ndGggLyAzO1xuICAgIGNvbnN0IGhlaWdodCA9IDE7XG5cbiAgICBjb25zdCBsYXllclRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XG4gICAgZ2wuYmluZFRleHR1cmUoZ2wuVEVYVFVSRV8yRCwgbGF5ZXJUZXh0dXJlKTtcbiAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQiwgd2lkdGgsIGhlaWdodCwgMCwgZ2wuUkdCLCBnbC5VTlNJR05FRF9CWVRFLCB0ZXhlbHMpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5ORUFSRVNUKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XG4gICAgZ2wuYWN0aXZlVGV4dHVyZShnbC5URVhUVVJFMCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyKGdsLCBjb2xvcikge1xuICAgIGdsLmNsZWFyQ29sb3IoLi4uY29sb3IpO1xuICAgIGdsLmNsZWFyKGdsLkNPTE9SX0JVRkZFUl9CSVQgfCBnbC5ERVBUSF9CVUZGRVJfQklUKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTm9kZShnbCwgbm9kZSwgY2FtZXJhLCB0aW1lKSB7XG4gICAgY29uc29sZS5hc3NlcnQoaGFzTWVzaChub2RlKSk7XG5cbiAgICBpZihoYXNNZXNoKG5vZGUpKSB7XG4gICAgICAgIGRyYXdNZXNoKGdsLCBub2RlLm1lc2gsIHtcbiAgICAgICAgICAgIHNoYWRlclByb2dyYW06IG5vZGUuc2hhZGVyUHJvZ3JhbSxcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbjogY2FtZXJhLnByb2plY3Rpb24sXG4gICAgICAgICAgICAgICAgdmlldzogTWF0NC5pbnZlcnNlKGNhbWVyYS5nbG9iYWxUcmFuc2Zvcm0pLFxuICAgICAgICAgICAgICAgIHdvcmxkOiBub2RlLmdsb2JhbFRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgICBhbGJlZG86IGdldEFsYmVkbyhub2RlKSxcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWU6IHRpbWUudG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0ZWRTaGFkb3coZ2wsIGxpZ2h0LCBwcm9wcyA9IHt9KSB7XG4gICAgbGV0IGxpZ2h0UG9zID0gVmVjMy5wYXJzZShsaWdodC5kaXJlY3Rpb24pO1xuICAgIGxpZ2h0UG9zID0gVmVjMy5ub3JtYWxpemUobGlnaHRQb3MpO1xuICAgIGxpZ2h0UG9zID0gVmVjMy5zY2FsZShsaWdodFBvcywgLTEpO1xuICAgIGxpZ2h0UG9zID0gVmVjMy5zY2FsZShsaWdodFBvcywgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpO1xuICAgIGxldCBsaWdodE1hdHJpeCA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICBsaWdodFBvc1sxXSwgIDAsICAgICAgICAgICAgMCwgICAgICAgICAgIDAsXG4gICAgICAgIC1saWdodFBvc1swXSwgMCwgLWxpZ2h0UG9zWzJdLCAgICAgICAgICAtMSxcbiAgICAgICAgMCwgICAgICAgICAgICAwLCAgbGlnaHRQb3NbMV0sICAgICAgICAgICAwLFxuICAgICAgICAwLCAgICAgICAgICAgIDAsICAgICAgICAgICAgMCwgbGlnaHRQb3NbMV0sXG4gICAgXSk7XG5cbiAgICBsZXQgdCA9IE1hdDQuaWRlbnRpdHkoKTtcbiAgICB0ID0gTWF0NC5tdWx0aXBseShsaWdodE1hdHJpeCwgdCk7XG4gICAgdCA9IE1hdDQubXVsdGlwbHkocHJvcHMuc2hhZG93Q2FzdGVyLmdsb2JhbFRyYW5zZm9ybSwgdCk7XG5cbiAgICBkcmF3TWVzaChnbCwgcHJvcHMuc2hhZG93Q2FzdGVyLm1lc2gsIHtcbiAgICAgICAgc2hhZGVyUHJvZ3JhbTogcHJvcHMuc2hhZG93Q2FzdGVyLnNoYWRlclByb2dyYW0sXG4gICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICB3b3JsZDogdCxcbiAgICAgICAgICAgIHZpZXc6IHByb3BzLnVuaWZvcm1zLnZpZXcsXG4gICAgICAgICAgICBwcm9qZWN0aW9uOiBwcm9wcy51bmlmb3Jtcy5wcm9qZWN0aW9uLFxuICAgICAgICAgICAgYWxiZWRvOiBuZXcgRmxvYXQzMkFycmF5KFZlYzQuemVybygpKSxcbiAgICAgICAgICAgIHRvdGFsVGltZTogcHJvcHMudW5pZm9ybXMudG90YWxUaW1lXG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGlnaHQoZ2wsIGxpZ2h0Tm9kZSwgbWVzaE5vZGVzLCBjYW1lcmEsIHRpbWUpIHtcbiAgICBjb25zb2xlLmFzc2VydChnbCk7XG4gICAgY29uc29sZS5hc3NlcnQoaGFzTGlnaHQobGlnaHROb2RlKSk7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc0FycmF5KG1lc2hOb2RlcykpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNPYmplY3QoY2FtZXJhKSk7XG5cbiAgICBnbC5jb2xvck1hc2soZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuICAgIG1lc2hOb2Rlc1xuICAgICAgICAuZmlsdGVyKGlzU2hhZG93Q2FzdGVyKVxuICAgICAgICAuZm9yRWFjaChzaGFkb3dDYXN0ZXIgPT4ge1xuICAgICAgICAgICAgcmVuZGVyUHJvamVjdGVkU2hhZG93KGdsLCBsaWdodE5vZGUubGlnaHQsIHtcbiAgICAgICAgICAgICAgICBzaGFkb3dDYXN0ZXI6IHNoYWRvd0Nhc3RlcixcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgICAgICB2aWV3OiBNYXQ0LmludmVyc2UoY2FtZXJhLmdsb2JhbFRyYW5zZm9ybSksXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Rpb246IGNhbWVyYS5wcm9qZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbFRpbWU6IHRpbWUudG90YWxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgZ2wuY29sb3JNYXNrKHRydWUsIHRydWUsIHRydWUsIHRydWUpO1xuXG4gICAgZ2wuYmxlbmRGdW5jKGdsLk9ORSwgZ2wuT05FKTtcbiAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xuICAgIG1lc2hOb2Rlcy5mb3JFYWNoKG1lc2hOb2RlID0+IHtcbiAgICAgICAgZHJhd01lc2goZ2wsIG1lc2hOb2RlLm1lc2gsIHtcbiAgICAgICAgICAgIHNoYWRlclByb2dyYW06IGxpZ2h0Tm9kZS5zaGFkZXJQcm9ncmFtLFxuICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiBjYW1lcmEucHJvamVjdGlvbixcbiAgICAgICAgICAgICAgICB2aWV3OiBNYXQ0LmludmVyc2UoY2FtZXJhLmdsb2JhbFRyYW5zZm9ybSksXG4gICAgICAgICAgICAgICAgd29ybGQ6IG1lc2hOb2RlLmdsb2JhbFRyYW5zZm9ybSxcbiAgICAgICAgICAgICAgICBhbGJlZG86IGdldEFsYmVkbyhtZXNoTm9kZSksXG4gICAgICAgICAgICAgICAgbGlnaHRDb2xvcjogbmV3IEZsb2F0MzJBcnJheShbMSwgMSwgMSwgMV0pLFxuICAgICAgICAgICAgICAgIGxpZ2h0RGlyZWN0aW9uOiBuZXcgRmxvYXQzMkFycmF5KGxpZ2h0Tm9kZS5saWdodC5kaXJlY3Rpb24pLFxuICAgICAgICAgICAgICAgIGxpZ2h0SW50ZW5zaXR5OiBsaWdodE5vZGUubGlnaHQuaW50ZW5zaXR5LFxuICAgICAgICAgICAgICAgIHRvdGFsVGltZTogdGltZS50b3RhbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBnbC5kaXNhYmxlKGdsLkJMRU5EKTtcbn1cblxuZnVuY3Rpb24gZHJhd01lc2goZ2wsIG1lc2gsIHtzaGFkZXJQcm9ncmFtLCB1bmlmb3Jtc30pIHtcbiAgICBjb25zb2xlLmFzc2VydChnbCk7XG4gICAgY29uc29sZS5hc3NlcnQoc2hhZGVyUHJvZ3JhbSk7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc09iamVjdChtZXNoKSk7XG4gICAgY29uc29sZS5hc3NlcnQoJ2xheW91dCcgaW4gbWVzaCk7XG4gICAgY29uc29sZS5hc3NlcnQoJ3ZlcnRleENvdW50JyBpbiBtZXNoKTtcbiAgICBjb25zb2xlLmFzc2VydCgnbW9kZScgaW4gbWVzaCk7XG5cbiAgICBnbC51c2VQcm9ncmFtKHNoYWRlclByb2dyYW0pO1xuICAgIGJpbmRMYXlvdXQoZ2wsIHNoYWRlclByb2dyYW0sIG1lc2gubGF5b3V0KTtcblxuICAgIHVwbG9hZFVuaWZvcm1zKGdsLCBzaGFkZXJQcm9ncmFtLCB1bmlmb3Jtcyk7XG4gICAgZ2wuZHJhd0FycmF5cyhtZXNoLm1vZGUsIDAsIG1lc2gudmVydGV4Q291bnQpO1xuXG4gICAgdW5iaW5kTGF5b3V0KG1lc2gubGF5b3V0KTtcbiAgICBnbC51c2VQcm9ncmFtKG51bGwpO1xufVxuXG5mdW5jdGlvbiB1cGxvYWRVbmlmb3JtcyhnbCwgcHJvZ3JhbSwgdW5pZm9ybXMpIHtcbiAgICBjb25zb2xlLmFzc2VydCgndW5pZm9ybUxvY2F0aW9ucycgaW4gcHJvZ3JhbSk7XG5cbiAgICBPYmplY3RcbiAgICAgICAgLmtleXModW5pZm9ybXMpXG4gICAgICAgIC5tYXAoa2V5ID0+ICh7XG4gICAgICAgICAgICBsb2NhdGlvbjogcHJvZ3JhbS51bmlmb3JtTG9jYXRpb25zW2tleV0sXG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiB1bmlmb3Jtc1trZXldXG4gICAgICAgIH0pKVxuICAgICAgICAuZm9yRWFjaCh0cmlwbGUgPT4ge1xuICAgICAgICAgICAgaWYoIXRyaXBsZS5sb2NhdGlvbikge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUud2FybihgTWlzc2luZyB1bmlmb3JtICcke3RyaXBsZS5rZXl9JyBpbiBzaGFkZXIgJyR7c2hhZGVyfSdgKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbW1pdFVuaWZvcm0oZ2wsIHRyaXBsZS5sb2NhdGlvbiwgdHJpcGxlLnZhbHVlLCB0cmlwbGUua2V5KTtcbiAgICAgICAgfSk7XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuZnVuY3Rpb24gY29tbWl0VW5pZm9ybShnbCwgbG9jYXRpb24sIHZhbHVlLCBrZXkpIHtcbiAgICBjb25zb2xlLmFzc2VydChsb2NhdGlvbik7XG4gICAgY29uc29sZS5hc3NlcnQoIVR5cGUuaXNVbmRlZmluZWQodmFsdWUpKTtcbiAgICBjb25zb2xlLmFzc2VydCghVHlwZS5pc051bGwodmFsdWUpKTtcblxuICAgIGlmKFR5cGUuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgIC8vIGlmKE51bWJlci5pc0ludGVnZXIodmFsdWUpICYmIGtleSAhPSAndXZTY2FsZScpIHtcbiAgICAgICAgLy9nbC51bmlmb3JtMWkobG9jYXRpb24sIHZhbHVlKTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgZ2wudW5pZm9ybTFmKGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgIC8vIH1cbiAgICB9XG4gICAgaWYodmFsdWUubGVuZ3RoID09PSAxNikge1xuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KGxvY2F0aW9uLCBmYWxzZSwgdmFsdWUpO1xuICAgIH1cbiAgICBpZih2YWx1ZS5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgZ2wudW5pZm9ybTRmdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgIH1cbiAgICBpZih2YWx1ZS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgZ2wudW5pZm9ybTNmdihsb2NhdGlvbiwgdmFsdWUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYmluZExheW91dChnbCwgcHJvZ3JhbSwgbGF5b3V0KSB7XG4gICAgY29uc29sZS5hc3NlcnQoZ2wpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KHByb2dyYW0pO1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNBcnJheShsYXlvdXQpKTtcblxuICAgIGxheW91dC5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBsb2NhdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sIGl0ZW0ua2V5KTtcbiAgICAgICAgaWYobG9jYXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgaXRlbS5idWZmZXIpO1xuICAgICAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihcbiAgICAgICAgICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgICAgICAgICBpdGVtLmVsZW1lbnRMZW5ndGgsXG4gICAgICAgICAgICAgICAgaXRlbS50eXBlLFxuICAgICAgICAgICAgICAgIGl0ZW0ubm9ybWFsaXplLFxuICAgICAgICAgICAgICAgIGl0ZW0uc3RyaWRlLFxuICAgICAgICAgICAgICAgIGl0ZW0ub2Zmc2V0XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkobG9jYXRpb24pO1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHVuYmluZExheW91dCgpIHtcblxufVxuXG5mdW5jdGlvbiB1cGRhdGVDYW52YXNTaXplKGNhbnZhcykge1xuICAgIGNvbnN0IHdpZHRoID0gY2FudmFzLnBhcmVudE5vZGUuY2xpZW50V2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gY2FudmFzLnBhcmVudE5vZGUuY2xpZW50SGVpZ2h0O1xuXG4gICAgaWYoY2FudmFzLndpZHRoICE9PSB3aWR0aCB8fCBjYW52YXMuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1Zpc2libGUob2JqZWN0KSB7XG4gICAgY29uc3QgcGFyZW50VmlzaWJsZSA9ICdwYXJlbnQnIGluIG9iamVjdCA/IGlzVmlzaWJsZShvYmplY3QucGFyZW50KSA6IHRydWU7XG4gICAgY29uc3QgdmlzaWJsZSA9ICd2aXNpYmxlJyBpbiBvYmplY3QgPyBvYmplY3QudmlzaWJsZSA6IHRydWU7XG5cbiAgICByZXR1cm4gcGFyZW50VmlzaWJsZSAmJiB2aXNpYmxlO1xufVxuXG5mdW5jdGlvbiBpc1NoYWRvd0Nhc3RlcihvYmplY3QpIHtcbiAgICByZXR1cm4gJ3NoYWRvdycgaW4gb2JqZWN0ID8gb2JqZWN0LnNoYWRvdyA6IHRydWU7XG59XG5cbmZ1bmN0aW9uIGhhc01lc2gob2JqZWN0KSB7XG4gICAgcmV0dXJuICdtZXNoJyBpbiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGhhc0xpZ2h0KG9iamVjdCkge1xuICAgIHJldHVybiAnbGlnaHQnIGluIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gZ2V0QWN0aXZlQ2FtZXJhKHNjZW5lKSB7XG4gICAgcmV0dXJuIHNjZW5lLm5vZGVzLmZpbmQobm9kZSA9PiBub2RlLmtleSA9PT0gJ2NhbWVyYScpO1xufVxuXG5mdW5jdGlvbiBnZXRDbGVhckNvbG9yKG9iamVjdCkge1xuICAgIHJldHVybiAnY2xlYXJDb2xvcicgaW4gb2JqZWN0ID8gb2JqZWN0LmNsZWFyQ29sb3IgOiBbMC4yLCAwLjIsIDAuMiwgMV07XG59XG5cbmZ1bmN0aW9uIGdldEdsQ29udGV4dChjYW52YXMpIHtcbiAgICBjb25zdCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpO1xuICAgIHJldHVybiBnbDtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYWxSb3RhdGlvbk1hdHJpeChvYmplY3QpIHtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzT2JqZWN0KG9iamVjdCkpO1xuXG4gICAgY29uc3QgYW5nbGVzID0gVmVjMy5wYXJzZShvYmplY3Qub3JpZW50YXRpb24pO1xuICAgIHJldHVybiBNYXQzLmZyb21FdWxlckFuZ2xlcyhhbmdsZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRMb2NhbFBvc2l0aW9uKG9iamVjdCkge1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNPYmplY3Qob2JqZWN0KSk7XG4gICAgcmV0dXJuIFZlYzMucGFyc2Uob2JqZWN0LnBvc2l0aW9uKTtcbn1cblxuZnVuY3Rpb24gZ2V0R2xvYmFsU2NhbGVNYXRyaXgob2JqZWN0KSB7XG4gICAgaWYoIW9iamVjdCkge1xuICAgICAgICByZXR1cm4gTWF0My5pZGVudGl0eSgpO1xuICAgIH1cblxuICAgIGlmKCdzY2FsZScgaW4gb2JqZWN0KSB7XG4gICAgICAgIHJldHVybiBNYXQzLnNjYWxlKFZlYzMucGFyc2Uob2JqZWN0LnNjYWxlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdDMuaWRlbnRpdHkoKTtcbn1cblxuZnVuY3Rpb24gZ2V0R2xvYmFsUm90YXRpb25NYXRyaXgob2JqZWN0KSB7XG4gICAgaWYoIW9iamVjdCkge1xuICAgICAgICByZXR1cm4gTWF0My5pZGVudGl0eSgpO1xuICAgIH1cblxuICAgIGlmKCdsb29rYXQnIGluIG9iamVjdCkge1xuICAgICAgICByZXR1cm4gTWF0My5sb29rQXQoZ2V0R2xvYmFsUG9zaXRpb24ob2JqZWN0KSwgb2JqZWN0Lmxvb2thdCwgWzAsIDEsIDBdKTtcbiAgICB9XG5cbiAgICBjb25zdCBnbG9iYWxQYXJlbnRSb3RhdGlvbiA9IGdldEdsb2JhbFJvdGF0aW9uTWF0cml4KG9iamVjdC5wYXJlbnQpO1xuICAgIGNvbnN0IGxvY2FsUm90YXRpb24gPSBnZXRMb2NhbFJvdGF0aW9uTWF0cml4KG9iamVjdCk7XG4gICAgcmV0dXJuIE1hdDMubXVsdGlwbHkoZ2xvYmFsUGFyZW50Um90YXRpb24sIGxvY2FsUm90YXRpb24pO1xufVxuXG5mdW5jdGlvbiBnZXRHbG9iYWxUcmFuc2Zvcm0ob2JqZWN0KSB7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc09iamVjdChvYmplY3QpKTtcblxuICAgIGNvbnN0IHNjYWxlID0gZ2V0R2xvYmFsU2NhbGVNYXRyaXgob2JqZWN0KTtcbiAgICBjb25zdCByb3RhdGlvbiA9IGdldEdsb2JhbFJvdGF0aW9uTWF0cml4KG9iamVjdCk7XG4gICAgY29uc3QgcG9zaXRpb24gPSBnZXRHbG9iYWxQb3NpdGlvbihvYmplY3QpO1xuICAgIHJldHVybiBNYXQ0Lm11bHRpcGx5KFxuICAgICAgICBNYXQ0LmZyb21NYXQzKHNjYWxlKSxcbiAgICAgICAgTWF0NC5mcm9tUm90YXRpb25UcmFuc2xhdGlvbihyb3RhdGlvbiwgcG9zaXRpb24pXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0R2xvYmFsUG9zaXRpb24ob2JqZWN0KSB7XG4gICAgaWYoIW9iamVjdCkge1xuICAgICAgICByZXR1cm4gVmVjMy56ZXJvKCk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2xvYmFsUGFyZW50UG9zaXRpb24gPSBnZXRHbG9iYWxQb3NpdGlvbihvYmplY3QucGFyZW50KTtcbiAgICBjb25zdCBnbG9iYWxQYXJlbnRSb3RhdGlvbiA9IGdldEdsb2JhbFJvdGF0aW9uTWF0cml4KG9iamVjdC5wYXJlbnQpO1xuICAgIGNvbnN0IGxvY2FsUG9zaXRpb24gPSBnZXRMb2NhbFBvc2l0aW9uKG9iamVjdCk7XG5cbiAgICByZXR1cm4gVmVjMy5hZGQoXG4gICAgICAgIGdsb2JhbFBhcmVudFBvc2l0aW9uLFxuICAgICAgICBWZWMzLnRyYW5zZm9ybShsb2NhbFBvc2l0aW9uLCBnbG9iYWxQYXJlbnRSb3RhdGlvbilcbiAgICApO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9qZWN0aW9uTWF0cml4KGNhbWVyYSwgYXIpIHtcbiAgICBjb25zdCBuZWFyID0gJ25lYXInIGluIGNhbWVyYSA/IGNhbWVyYS5uZWFyIDogMC4xO1xuICAgIGNvbnN0IGZhciA9ICdmYXInIGluIGNhbWVyYSA/IGNhbWVyYS5mYXIgOiAxMDAwO1xuICAgIGNvbnN0IHR5cGUgPSAncGVyc3BlY3RpdmUnO1xuICAgIGNvbnN0IGZvdiA9IE1hdGhVdGlscy5kZWdUb1JhZCgnZm92JyBpbiBjYW1lcmEgPyBjYW1lcmEuZm92IDogOTApO1xuICAgIGNvbnN0IGhGb3YgPSAyICogTWF0aC5hdGFuKE1hdGgudGFuKGZvdiAvIDIpIC8gYXIpO1xuXG4gICAgcmV0dXJuIE1hdDQucGVyc3BlY3RpdmUoYXIsIGhGb3YsIG5lYXIsIGZhcik7XG59XG5cbmZ1bmN0aW9uIGdldEFsYmVkbyhvYmplY3QpIHtcbiAgICByZXR1cm4gJ2FsYmVkbycgaW4gb2JqZWN0PyBvYmplY3QuYWxiZWRvIDogWzEsIDEsIDEsIDFdO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvR2Z4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9HZnguanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZyb21NZXNoLFxufTtcblxuZnVuY3Rpb24gZmxhdHRlbiguLi5hcnJheXMpIHtcbiAgICByZXR1cm4gYXJyYXlzLnJlZHVjZSgocmVzdWx0LCBpdGVtKSA9PiB7XG4gICAgICAgIHJlc3VsdC5wdXNoKC4uLml0ZW0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIFtdKTtcbn1cblxuZnVuY3Rpb24gZnJvbU1lc2goZ2wsIG1lc2gpIHtcbiAgICBjb25zb2xlLmFzc2VydChnbCk7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc09iamVjdChtZXNoKSk7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc0FycmF5KG1lc2gucG9zaXRpb25zKSk7XG4gICAgY29uc29sZS5hc3NlcnQoJ21vZGUnIGluIG1lc2gpO1xuXG4gICAgY29uc3QgY29tcG9uZW50cyA9IE9iamVjdC5rZXlzKG1lc2gpXG4gICAgICAgIC5tYXAoa2V5ID0+ICh7IGtleSwgdmFsdWU6IG1lc2hba2V5XSB9KSlcbiAgICAgICAgLmZpbHRlcihwYWlyID0+IFR5cGUuaXNBcnJheShwYWlyLnZhbHVlKSlcbiAgICAgICAgLm1hcChwYWlyID0+ICh7XG4gICAgICAgICAgICBrZXk6IHBhaXIua2V5LFxuICAgICAgICAgICAgZGF0YTogbmV3IEZsb2F0MzJBcnJheShmbGF0dGVuKC4uLnBhaXIudmFsdWUpKSxcbiAgICAgICAgICAgIGl0ZW1MZW5ndGg6IHBhaXIudmFsdWVbMF0ubGVuZ3RoXG4gICAgICAgIH0pKTtcblxuICAgIC8qXG4gICAgLy8gc2VwYXJhdGUgdmVydGV4IGNvbXBvbmVudHMgaW50byAxZCBhcnJheXNcbiAgICBjb25zdCBjb21wb25lbnRzID0gbWVzaC52ZXJ0aWNlcy5yZWR1Y2UoKG9iamVjdCwgdmVydGV4KSA9PiB7XG4gICAgICAgIE9iamVjdC5rZXlzKHZlcnRleCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgICAgaWYoa2V5IGluIG9iamVjdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBvYmplY3Rba2V5XSA9IHsgZGF0YTogW10sIGl0ZW1MZW5ndGg6IHZlcnRleFtrZXldLmxlbmd0aCB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydCh2ZXJ0ZXhba2V5XS5sZW5ndGggPT09IG9iamVjdFtrZXldLml0ZW1MZW5ndGgpO1xuICAgICAgICAgICAgb2JqZWN0W2tleV0uZGF0YS5wdXNoKC4uLnZlcnRleFtrZXldKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICB9LCB7fSk7XG4gICAgKi9cblxuXG4gICAgY29uc3QgbGF5b3V0ID0gY29tcG9uZW50c1xuICAgICAgICAubWFwKGNvbXBvbmVudCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmFzc2VydChjb21wb25lbnQuZGF0YSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSk7XG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBidWZmZXIpO1xuICAgICAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIGNvbXBvbmVudC5kYXRhLCBnbC5TVEFUSUNfRFJBVyk7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgbnVsbCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gc3RyaXAgdHJhaWxpbmcgJ3MnIGZvciBjb21wYXRpYmlsaXR5IHdpdGggc2hhZGVyIGlkZW50aWZpZXJcbiAgICAgICAgICAgICAgICBrZXk6IGNvbXBvbmVudC5rZXkuc3Vic3RyKDAsIGNvbXBvbmVudC5rZXkubGVuZ3RoIC0gMSksXG4gICAgICAgICAgICAgICAgYnVmZmVyOiBidWZmZXIsXG4gICAgICAgICAgICAgICAgdHlwZTogZ2wuRkxPQVQsXG4gICAgICAgICAgICAgICAgZWxlbWVudExlbmd0aDogY29tcG9uZW50Lml0ZW1MZW5ndGgsXG4gICAgICAgICAgICAgICAgbm9ybWFsaXplOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzdHJpZGU6IDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsYXlvdXQ6IGxheW91dCxcbiAgICAgICAgdmVydGV4Q291bnQ6IGNvbXBvbmVudHNbMF0uZGF0YS5sZW5ndGggLyBjb21wb25lbnRzWzBdLml0ZW1MZW5ndGgsXG4gICAgICAgIG1vZGU6IGdsW21lc2gubW9kZV1cbiAgICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvR2xNZXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9HbE1lc2guanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHZlcmJvc2Vcbn07XG5cbmZ1bmN0aW9uIHZlcmJvc2UoLi4ucGFyYW1zKSB7XG4gICAgLy9jb25zb2xlLmxvZyguLi5wYXJhbXMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTG9nLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9Mb2cuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlLmpzJztcbmltcG9ydCBWZWMzIGZyb20gJy4vVmVjMy5qcyc7XG5cbmNvbnN0IFJPV1MgPSAzO1xuY29uc3QgQ09MVU1OUyA9IDM7XG5cbmNvbnN0IFJPV19MRU5HVEggPSBDT0xVTU5TO1xuY29uc3QgRUxFTUVOVFMgPSBST1dTICogQ09MVU1OUztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBhcnNlLFxuICAgIGlkZW50aXR5LFxuICAgIGZyb21FdWxlckFuZ2xlcyxcbiAgICBtdWx0aXBseSxcbiAgICBnZXRDb2x1bW4sXG4gICAgZ2V0Q29sdW1uRmFzdCxcbiAgICByb3RhdGlvblgsXG4gICAgcm90YXRpb25ZLFxuICAgIHJvdGF0aW9uWixcbiAgICBzY2FsZSxcbiAgICBsb29rQXRcbn07XG5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlKSB7XG4gICAgaWYoVHlwZS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgcmV0dXJuIGZyb21FdWxlckFuZ2xlcyguLi52YWx1ZSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEZhaWxlZCB0byBwYXJzZSB2YWx1ZSBvZiB0eXBlICcke1R5cGUuZ2V0TmFtZSh2YWx1ZSl9JyBpbnRvIGEgTWF0M2ApO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eSgpIHtcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDEsIDAsIDAsXG4gICAgICAgIDAsIDEsIDAsXG4gICAgICAgIDAsIDAsIDFcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gZnJvbUV1bGVyQW5nbGVzKGFuZ2xlcykge1xuICAgIC8vY29uc29sZS5hc3NlcnQoVHlwZS5pc0FycmF5KGFuZ2xlcykpO1xuXG4gICAgY29uc3QgaGVhZGluZyA9IHJvdGF0aW9uWShhbmdsZXNbMV0pO1xuICAgIGNvbnN0IHBpdGNoID0gcm90YXRpb25YKGFuZ2xlc1swXSk7XG4gICAgY29uc3QgYmFuayA9IHJvdGF0aW9uWihhbmdsZXNbMl0pO1xuXG4gICAgcmV0dXJuIG11bHRpcGx5KGJhbmssIHBpdGNoLCBoZWFkaW5nKTtcbn1cblxubGV0IF9tdWx0aXBseV9tMmNvbCA9IG51bGw7XG5sZXQgX211bHRpcGx5X20xcm93ID0gbnVsbDtcbmZ1bmN0aW9uIG11bHRpcGx5KG0xLCBtMiwgLi4ubWF0cmljZXMpIHtcbiAgICBpZihfbXVsdGlwbHlfbTJjb2wgPT09IG51bGwpIHtcbiAgICAgICAgX211bHRpcGx5X20yY29sID0gVmVjMy56ZXJvKCk7XG4gICAgICAgIF9tdWx0aXBseV9tMXJvdyA9IFZlYzMuemVybygpO1xuICAgIH1cblxuICAgIGlmKCFtMikge1xuICAgICAgICByZXR1cm4gbTE7XG4gICAgfVxuXG4gICAgX211bHRpcGx5X20yY29sWzBdID0gMDtcbiAgICBfbXVsdGlwbHlfbTJjb2xbMV0gPSAwO1xuICAgIF9tdWx0aXBseV9tMmNvbFsyXSA9IDA7XG5cbiAgICBfbXVsdGlwbHlfbTFyb3dbMF0gPSAwO1xuICAgIF9tdWx0aXBseV9tMXJvd1sxXSA9IDA7XG4gICAgX211bHRpcGx5X20xcm93WzJdID0gMDtcbiAgICBjb25zdCBtMXJvdyA9IF9tdWx0aXBseV9tMXJvdztcbiAgICBjb25zdCBtMmNvbCA9IF9tdWx0aXBseV9tMmNvbDtcbiAgICBsZXQgcmVzdWx0ID0gbmV3IEZsb2F0MzJBcnJheShFTEVNRU5UUyk7XG4gICAgZm9yKGxldCByb3cgPSAwOyByb3cgPCBST1dTOyByb3crKykge1xuICAgICAgICBmb3IobGV0IGNvbCA9IDA7IGNvbCA8IENPTFVNTlM7IGNvbCsrKSB7XG4gICAgICAgICAgICBnZXRSb3dGYXN0KG0xcm93LCBtMSwgcm93KTtcbiAgICAgICAgICAgIGdldENvbHVtbkZhc3QobTJjb2wsIG0yLCBjb2wpO1xuICAgICAgICAgICAgcmVzdWx0W3JvdyAqIFJPV19MRU5HVEggKyBjb2xdID0gVmVjMy5kb3QobTFyb3csIG0yY29sKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtdWx0aXBseShyZXN1bHQsIC4uLm1hdHJpY2VzKTtcbn1cblxuZnVuY3Rpb24gcm90YXRpb25YKGFuZ2xlKSB7XG4gICAgY29uc3QgeXkgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgY29uc3QgeXogPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICBjb25zdCB6eSA9IC1NYXRoLnNpbihhbmdsZSk7XG4gICAgY29uc3QgenogPSBNYXRoLmNvcyhhbmdsZSk7XG5cbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDEsIDAsIDAsXG4gICAgICAgIDAsIHl5LCB5eixcbiAgICAgICAgMCwgenksIHp6LFxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiByb3RhdGlvblkoYW5nbGUpIHtcbiAgICBjb25zdCB4eCA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICBjb25zdCB4eiA9IC1NYXRoLnNpbihhbmdsZSk7XG5cbiAgICBjb25zdCB6eCA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICBjb25zdCB6eiA9IE1hdGguY29zKGFuZ2xlKTtcblxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgeHgsIDAsIHh6LFxuICAgICAgICAwLCAxLCAwLFxuICAgICAgICB6eCwgMCwgenosXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0aW9uWihhbmdsZSkge1xuICAgIGNvbnN0IHh4ID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIGNvbnN0IHh5ID0gTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgY29uc3QgeXggPSAtTWF0aC5zaW4oYW5nbGUpO1xuICAgIGNvbnN0IHl5ID0gTWF0aC5jb3MoYW5nbGUpO1xuXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICB4eCwgeHksIDAsXG4gICAgICAgIHl4LCB5eSwgMCxcbiAgICAgICAgMCwgMCwgMSxcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gZ2V0Um93KG0sIHJvdykge1xuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICBtLmJ1ZmZlcixcbiAgICAgICAgcm93ICogUk9XX0xFTkdUSCAqIG0uQllURVNfUEVSX0VMRU1FTlQsXG4gICAgICAgIFJPV19MRU5HVEhcbiAgICApO1xufVxuXG5mdW5jdGlvbiBnZXRSb3dGYXN0KG91dCwgbSwgcm93KSB7XG4gICAgb3V0WzBdID0gbVtyb3cgKiBST1dfTEVOR1RIICsgMF07XG4gICAgb3V0WzFdID0gbVtyb3cgKiBST1dfTEVOR1RIICsgMV07XG4gICAgb3V0WzJdID0gbVtyb3cgKiBST1dfTEVOR1RIICsgMl07XG59XG5cbmZ1bmN0aW9uIGdldENvbHVtbihtLCBjb2wpIHtcbiAgICByZXR1cm4gVmVjMy5mcm9tVmFsdWVzKFxuICAgICAgICBtWzAgKiBST1dfTEVOR1RIICsgY29sXSxcbiAgICAgICAgbVsxICogUk9XX0xFTkdUSCArIGNvbF0sXG4gICAgICAgIG1bMiAqIFJPV19MRU5HVEggKyBjb2xdXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q29sdW1uRmFzdChvdXQsIG0sIGNvbCkge1xuICAgIG91dFswXSA9IG1bMCAqIFJPV19MRU5HVEggKyBjb2xdO1xuICAgIG91dFsxXSA9IG1bMSAqIFJPV19MRU5HVEggKyBjb2xdO1xuICAgIG91dFsyXSA9IG1bMiAqIFJPV19MRU5HVEggKyBjb2xdO1xufVxuXG5mdW5jdGlvbiBzY2FsZSh2KSB7XG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICB2WzBdLCAwLCAwLFxuICAgICAgICAwLCB2WzFdLCAwLFxuICAgICAgICAwLCAwLCB2WzJdLFxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiBsb29rQXQoZXllLCB0YXJnZXQsIHVwKSB7XG4gICAgY29uc3QgZm9yd2FyZCA9IFZlYzMubm9ybWFsaXplKFZlYzMuc3ViKGV5ZSwgdGFyZ2V0KSk7XG4gICAgY29uc3QgcmlnaHQgPSBWZWMzLmNyb3NzKHVwLCBmb3J3YXJkKTtcbiAgICB1cCA9IFZlYzMuY3Jvc3MoZm9yd2FyZCwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAuLi5yaWdodCxcbiAgICAgICAgLi4udXAsXG4gICAgICAgIC4uLmZvcndhcmQsXG4gICAgXSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9NYXQzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9NYXQzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZS5qcyc7XG5pbXBvcnQgVmVjMyBmcm9tICcuL1ZlYzMuanMnO1xuaW1wb3J0IFZlYzQgZnJvbSAnLi9WZWM0LmpzJztcblxuY29uc3QgUk9XUyA9IDQ7XG5jb25zdCBST1dfTEVOR1RIID0gNDtcbmNvbnN0IENPTFVNTlMgPSA0O1xuY29uc3QgRUxFTUVOVFMgPSBST1dTICogQ09MVU1OUztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGlkZW50aXR5LFxuICAgIGZyb21FdWxlckFuZ2xlcyxcbiAgICBmcm9tTWF0MyxcbiAgICBmcm9tUm90YXRpb25UcmFuc2xhdGlvbixcbiAgICBtdWx0aXBseSxcbiAgICB0cmFuc2xhdGlvbixcbiAgICBsb29rQXQsXG4gICAgc2V0VHJhbnNsYXRpb24sXG4gICAgb3J0aG9ncmFwaGljLFxuICAgIHBlcnNwZWN0aXZlLFxuICAgIHJvdGF0aW9uWSxcbiAgICBpbnZlcnNlLFxufTtcblxuZnVuY3Rpb24gcGVyc3BlY3RpdmUoYXIsIGZvdiwgbmVhciwgZmFyKSB7XG4gICAgY29uc29sZS5hc3NlcnQoZmFyID4gbmVhcik7XG4gICAgY29uc29sZS5hc3NlcnQoZm92ID4gMCk7XG4gICAgY29uc29sZS5hc3NlcnQoZm92IDwgTWF0aC5QSSAqIDIpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KGFyID4gMCk7XG5cbiAgICBjb25zdCBmID0gMS4wIC8gTWF0aC50YW4oZm92ICogMC41KTtcblxuICAgIGxldCBtID0gaWRlbnRpdHkoKTtcbiAgICBtWzBdID0gZiAvIGFyO1xuICAgIG1bNV0gPSBmO1xuICAgIG1bMTBdID0gKGZhciArIG5lYXIpIC8gKG5lYXIgLSBmYXIpO1xuICAgIG1bMTFdID0gLTEuMDtcbiAgICBtWzE0XSA9ICgyLjAgKiBmYXIgKiBuZWFyKSAvIChuZWFyIC0gZmFyKTtcbiAgICBtWzE1XSA9IDAuMDtcblxuICAgIHJldHVybiBtO1xufVxuXG5mdW5jdGlvbiBzZXRUcmFuc2xhdGlvbihtLCB2KSB7XG4gICAgbVsxMl0gPSB2WzBdO1xuICAgIG1bMTNdID0gdlsxXTtcbiAgICBtWzE0XSA9IHZbMl07XG5cbiAgICByZXR1cm4gbTtcbn1cblxuZnVuY3Rpb24gZnJvbU1hdDMobSkge1xuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgbVswXSwgbVsxXSwgbVsyXSwgMCxcbiAgICAgICAgbVszXSwgbVs0XSwgbVs1XSwgMCxcbiAgICAgICAgbVs2XSwgbVs3XSwgbVs4XSwgMCxcbiAgICAgICAgMCwgICAgICAgMCwgICAgMCwgMSxcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24ocm90LCB0cmFucykge1xuICAgIHJldHVybiBzZXRUcmFuc2xhdGlvbihmcm9tTWF0Myhyb3QpLCB0cmFucyk7XG59XG5cbmZ1bmN0aW9uIGxvb2tBdChleWUsIHRhcmdldCwgdXApIHtcbiAgICBjb25zdCBmb3J3YXJkID0gVmVjMy5ub3JtYWxpemUoVmVjMy5zdWIoZXllLCB0YXJnZXQpKTtcbiAgICBjb25zdCByaWdodCA9IFZlYzMuY3Jvc3ModXAsIGZvcndhcmQpO1xuICAgIHVwID0gVmVjMy5jcm9zcyhmb3J3YXJkLCByaWdodCk7XG5cbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC4uLnJpZ2h0LCAwLFxuICAgICAgICAuLi51cCwgMCxcbiAgICAgICAgLi4uZm9yd2FyZCwgMCxcbiAgICAgICAgLi4uZXllLCAxXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIGlkZW50aXR5KCkge1xuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMSwgMCwgMCwgMCxcbiAgICAgICAgMCwgMSwgMCwgMCxcbiAgICAgICAgMCwgMCwgMSwgMCxcbiAgICAgICAgMCwgMCwgMCwgMVxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xhdGlvbih2KSB7XG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAxLCAwLCAwLCAwLFxuICAgICAgICAwLCAxLCAwLCAwLFxuICAgICAgICAwLCAwLCAxLCAwLFxuICAgICAgICB2WzBdLCB2WzFdLCB2WzJdLCAxXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIGZyb21FdWxlckFuZ2xlcyhhbmdsZXMpIHtcbiAgICBjb25zdCBoZWFkaW5nID0gcm90YXRpb25ZKGFuZ2xlc1sxXSk7XG4gICAgY29uc3QgcGl0Y2ggPSByb3RhdGlvblgoYW5nbGVzWzBdKTtcbiAgICBjb25zdCBiYW5rID0gcm90YXRpb25aKGFuZ2xlc1syXSk7XG5cbiAgICByZXR1cm4gbXVsdGlwbHkoYmFuaywgcGl0Y2gsIGhlYWRpbmcpO1xufVxuXG5mdW5jdGlvbiByb3RhdGlvblgoYW5nbGUpIHtcbiAgICBjb25zdCB5eSA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICBjb25zdCB5eiA9IE1hdGguc2luKGFuZ2xlKTtcblxuICAgIGNvbnN0IHp5ID0gLU1hdGguc2luKGFuZ2xlKTtcbiAgICBjb25zdCB6eiA9IE1hdGguY29zKGFuZ2xlKTtcblxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMSwgMCwgMCwgMCxcbiAgICAgICAgMCwgeXksIHl6LCAwLFxuICAgICAgICAwLCB6eSwgenosIDAsXG4gICAgICAgIDAsIDAsIDAsIDEsXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0aW9uWShhbmdsZSkge1xuICAgIGNvbnN0IHh4ID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIGNvbnN0IHh6ID0gLU1hdGguc2luKGFuZ2xlKTtcblxuICAgIGNvbnN0IHp4ID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgIGNvbnN0IHp6ID0gTWF0aC5jb3MoYW5nbGUpO1xuXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICB4eCwgMCwgeHosIDAsXG4gICAgICAgIDAsIDEsIDAsIDAsXG4gICAgICAgIHp4LCAwLCB6eiwgMCxcbiAgICAgICAgMCwgMCwgMCwgMVxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiByb3RhdGlvblooYW5nbGUpIHtcbiAgICBjb25zdCB4eCA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICBjb25zdCB4eSA9IE1hdGguc2luKGFuZ2xlKTtcblxuICAgIGNvbnN0IHl4ID0gLU1hdGguc2luKGFuZ2xlKTtcbiAgICBjb25zdCB5eSA9IE1hdGguY29zKGFuZ2xlKTtcblxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgeHgsIHh5LCAwLCAwLFxuICAgICAgICB5eCwgeXksIDAsIDAsXG4gICAgICAgIDAsIDAsIDEsIDAsXG4gICAgICAgIDAsIDAsIDAsIDFcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHkobTEsIG0yLCAuLi5tYXRyaWNlcykge1xuICAgIGlmKCFtMikge1xuICAgICAgICByZXR1cm4gbTE7XG4gICAgfVxuICAgIGNvbnNvbGUuYXNzZXJ0KG0xLmxlbmd0aCA9PT0gMTYpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KG0yLmxlbmd0aCA9PT0gMTYpO1xuXG4gICAgbGV0IHJlc3VsdCA9IG5ldyBGbG9hdDMyQXJyYXkoRUxFTUVOVFMpO1xuICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgUk9XUzsgcm93KyspIHtcbiAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCBDT0xVTU5TOyBjb2wrKykge1xuICAgICAgICAgICAgY29uc3QgbTFyb3cgPSBnZXRSb3cobTEsIHJvdyk7XG4gICAgICAgICAgICBjb25zdCBtMmNvbCA9IGdldENvbHVtbihtMiwgY29sKTtcbiAgICAgICAgICAgIHJlc3VsdFtyb3cgKiBST1dfTEVOR1RIICsgY29sXSA9IFZlYzQuZG90KG0xcm93LCBtMmNvbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXVsdGlwbHkocmVzdWx0LCAuLi5tYXRyaWNlcyk7XG59XG5cbmZ1bmN0aW9uIGdldFJvdyhtLCByb3cpIHtcbiAgICByZXR1cm4gVmVjNC5mcm9tVmFsdWVzKFxuICAgICAgICBtW3JvdyAqIFJPV19MRU5HVEggKyAwXSxcbiAgICAgICAgbVtyb3cgKiBST1dfTEVOR1RIICsgMV0sXG4gICAgICAgIG1bcm93ICogUk9XX0xFTkdUSCArIDJdLFxuICAgICAgICBtW3JvdyAqIFJPV19MRU5HVEggKyAzXVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldENvbHVtbihtLCBjb2wpIHtcbiAgICByZXR1cm4gVmVjNC5mcm9tVmFsdWVzKFxuICAgICAgICBtWzAgKiBST1dfTEVOR1RIICsgY29sXSxcbiAgICAgICAgbVsxICogUk9XX0xFTkdUSCArIGNvbF0sXG4gICAgICAgIG1bMiAqIFJPV19MRU5HVEggKyBjb2xdLFxuICAgICAgICBtWzMgKiBST1dfTEVOR1RIICsgY29sXVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIG9ydGhvZ3JhcGhpYyhsZWZ0LCByaWdodCwgYm90dG9tLCB0b3AsIG5lYXIsIGZhcikge1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNOdW1iZXIobGVmdCkpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNOdW1iZXIocmlnaHQpKTtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzTnVtYmVyKGJvdHRvbSkpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNOdW1iZXIodG9wKSk7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc051bWJlcihuZWFyKSk7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc051bWJlcihmYXIpKTtcblxuICAgIGNvbnN0IHdpZHRoID0gcmlnaHQgLSBsZWZ0O1xuICAgIGNvbnN0IGhlaWdodCA9IHRvcCAtIGJvdHRvbTtcbiAgICBjb25zdCBkZXB0aCA9IGZhciAtIG5lYXI7XG5cbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDIgLyB3aWR0aCwgMCwgMCwgMCxcbiAgICAgICAgMCwgMiAvIGhlaWdodCwgMCwgMCxcbiAgICAgICAgMCwgMCwgLTIgLyBkZXB0aCwgMCxcbiAgICAgICAgLSgocmlnaHQgKyBsZWZ0KSAvIHdpZHRoKSwgLSgodG9wICsgYm90dG9tKSAvIGhlaWdodCksIC0oKGZhciArIG5lYXIpIC8gZGVwdGgpLCAxLFxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiBpbnZlcnNlKG0pIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGRldCA9IDA7XG4gICAgbGV0IGludiA9IG5ldyBBcnJheSgxNik7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBBcnJheSgxNik7XG5cbiAgICBpbnZbMF0gPSBtWzVdICAqIG1bMTBdICogbVsxNV0gLVxuICAgICAgICBtWzVdICAqIG1bMTFdICogbVsxNF0gLVxuICAgICAgICBtWzldICAqIG1bNl0gICogbVsxNV0gK1xuICAgICAgICBtWzldICAqIG1bN10gICogbVsxNF0gK1xuICAgICAgICBtWzEzXSAqIG1bNl0gICogbVsxMV0gLVxuICAgICAgICBtWzEzXSAqIG1bN10gICogbVsxMF07XG5cbiAgICBpbnZbNF0gPSAtbVs0XSAgKiBtWzEwXSAqIG1bMTVdICtcbiAgICAgICAgbVs0XSAgKiBtWzExXSAqIG1bMTRdICtcbiAgICAgICAgbVs4XSAgKiBtWzZdICAqIG1bMTVdIC1cbiAgICAgICAgbVs4XSAgKiBtWzddICAqIG1bMTRdIC1cbiAgICAgICAgbVsxMl0gKiBtWzZdICAqIG1bMTFdICtcbiAgICAgICAgbVsxMl0gKiBtWzddICAqIG1bMTBdO1xuXG4gICAgaW52WzhdID0gbVs0XSAgKiBtWzldICogbVsxNV0gLVxuICAgICAgICBtWzRdICAqIG1bMTFdICogbVsxM10gLVxuICAgICAgICBtWzhdICAqIG1bNV0gKiBtWzE1XSArXG4gICAgICAgIG1bOF0gICogbVs3XSAqIG1bMTNdICtcbiAgICAgICAgbVsxMl0gKiBtWzVdICogbVsxMV0gLVxuICAgICAgICBtWzEyXSAqIG1bN10gKiBtWzldO1xuXG4gICAgaW52WzEyXSA9IC1tWzRdICAqIG1bOV0gKiBtWzE0XSArXG4gICAgICAgIG1bNF0gICogbVsxMF0gKiBtWzEzXSArXG4gICAgICAgIG1bOF0gICogbVs1XSAqIG1bMTRdIC1cbiAgICAgICAgbVs4XSAgKiBtWzZdICogbVsxM10gLVxuICAgICAgICBtWzEyXSAqIG1bNV0gKiBtWzEwXSArXG4gICAgICAgIG1bMTJdICogbVs2XSAqIG1bOV07XG5cbiAgICBpbnZbMV0gPSAtbVsxXSAgKiBtWzEwXSAqIG1bMTVdICtcbiAgICAgICAgbVsxXSAgKiBtWzExXSAqIG1bMTRdICtcbiAgICAgICAgbVs5XSAgKiBtWzJdICogbVsxNV0gLVxuICAgICAgICBtWzldICAqIG1bM10gKiBtWzE0XSAtXG4gICAgICAgIG1bMTNdICogbVsyXSAqIG1bMTFdICtcbiAgICAgICAgbVsxM10gKiBtWzNdICogbVsxMF07XG5cbiAgICBpbnZbNV0gPSBtWzBdICAqIG1bMTBdICogbVsxNV0gLVxuICAgICAgICBtWzBdICAqIG1bMTFdICogbVsxNF0gLVxuICAgICAgICBtWzhdICAqIG1bMl0gKiBtWzE1XSArXG4gICAgICAgIG1bOF0gICogbVszXSAqIG1bMTRdICtcbiAgICAgICAgbVsxMl0gKiBtWzJdICogbVsxMV0gLVxuICAgICAgICBtWzEyXSAqIG1bM10gKiBtWzEwXTtcblxuICAgIGludls5XSA9IC1tWzBdICAqIG1bOV0gKiBtWzE1XSArXG4gICAgICAgIG1bMF0gICogbVsxMV0gKiBtWzEzXSArXG4gICAgICAgIG1bOF0gICogbVsxXSAqIG1bMTVdIC1cbiAgICAgICAgbVs4XSAgKiBtWzNdICogbVsxM10gLVxuICAgICAgICBtWzEyXSAqIG1bMV0gKiBtWzExXSArXG4gICAgICAgIG1bMTJdICogbVszXSAqIG1bOV07XG5cbiAgICBpbnZbMTNdID0gbVswXSAgKiBtWzldICogbVsxNF0gLVxuICAgICAgICBtWzBdICAqIG1bMTBdICogbVsxM10gLVxuICAgICAgICBtWzhdICAqIG1bMV0gKiBtWzE0XSArXG4gICAgICAgIG1bOF0gICogbVsyXSAqIG1bMTNdICtcbiAgICAgICAgbVsxMl0gKiBtWzFdICogbVsxMF0gLVxuICAgICAgICBtWzEyXSAqIG1bMl0gKiBtWzldO1xuXG4gICAgaW52WzJdID0gbVsxXSAgKiBtWzZdICogbVsxNV0gLVxuICAgICAgICBtWzFdICAqIG1bN10gKiBtWzE0XSAtXG4gICAgICAgIG1bNV0gICogbVsyXSAqIG1bMTVdICtcbiAgICAgICAgbVs1XSAgKiBtWzNdICogbVsxNF0gK1xuICAgICAgICBtWzEzXSAqIG1bMl0gKiBtWzddIC1cbiAgICAgICAgbVsxM10gKiBtWzNdICogbVs2XTtcblxuICAgIGludls2XSA9IC1tWzBdICAqIG1bNl0gKiBtWzE1XSArXG4gICAgICAgIG1bMF0gICogbVs3XSAqIG1bMTRdICtcbiAgICAgICAgbVs0XSAgKiBtWzJdICogbVsxNV0gLVxuICAgICAgICBtWzRdICAqIG1bM10gKiBtWzE0XSAtXG4gICAgICAgIG1bMTJdICogbVsyXSAqIG1bN10gK1xuICAgICAgICBtWzEyXSAqIG1bM10gKiBtWzZdO1xuXG4gICAgaW52WzEwXSA9IG1bMF0gICogbVs1XSAqIG1bMTVdIC1cbiAgICAgICAgbVswXSAgKiBtWzddICogbVsxM10gLVxuICAgICAgICBtWzRdICAqIG1bMV0gKiBtWzE1XSArXG4gICAgICAgIG1bNF0gICogbVszXSAqIG1bMTNdICtcbiAgICAgICAgbVsxMl0gKiBtWzFdICogbVs3XSAtXG4gICAgICAgIG1bMTJdICogbVszXSAqIG1bNV07XG5cbiAgICBpbnZbMTRdID0gLW1bMF0gICogbVs1XSAqIG1bMTRdICtcbiAgICAgICAgbVswXSAgKiBtWzZdICogbVsxM10gK1xuICAgICAgICBtWzRdICAqIG1bMV0gKiBtWzE0XSAtXG4gICAgICAgIG1bNF0gICogbVsyXSAqIG1bMTNdIC1cbiAgICAgICAgbVsxMl0gKiBtWzFdICogbVs2XSArXG4gICAgICAgIG1bMTJdICogbVsyXSAqIG1bNV07XG5cbiAgICBpbnZbM10gPSAtbVsxXSAqIG1bNl0gKiBtWzExXSArXG4gICAgICAgIG1bMV0gKiBtWzddICogbVsxMF0gK1xuICAgICAgICBtWzVdICogbVsyXSAqIG1bMTFdIC1cbiAgICAgICAgbVs1XSAqIG1bM10gKiBtWzEwXSAtXG4gICAgICAgIG1bOV0gKiBtWzJdICogbVs3XSArXG4gICAgICAgIG1bOV0gKiBtWzNdICogbVs2XTtcblxuICAgIGludls3XSA9IG1bMF0gKiBtWzZdICogbVsxMV0gLVxuICAgICAgICBtWzBdICogbVs3XSAqIG1bMTBdIC1cbiAgICAgICAgbVs0XSAqIG1bMl0gKiBtWzExXSArXG4gICAgICAgIG1bNF0gKiBtWzNdICogbVsxMF0gK1xuICAgICAgICBtWzhdICogbVsyXSAqIG1bN10gLVxuICAgICAgICBtWzhdICogbVszXSAqIG1bNl07XG5cbiAgICBpbnZbMTFdID0gLW1bMF0gKiBtWzVdICogbVsxMV0gK1xuICAgICAgICBtWzBdICogbVs3XSAqIG1bOV0gK1xuICAgICAgICBtWzRdICogbVsxXSAqIG1bMTFdIC1cbiAgICAgICAgbVs0XSAqIG1bM10gKiBtWzldIC1cbiAgICAgICAgbVs4XSAqIG1bMV0gKiBtWzddICtcbiAgICAgICAgbVs4XSAqIG1bM10gKiBtWzVdO1xuXG4gICAgaW52WzE1XSA9IG1bMF0gKiBtWzVdICogbVsxMF0gLVxuICAgICAgICBtWzBdICogbVs2XSAqIG1bOV0gLVxuICAgICAgICBtWzRdICogbVsxXSAqIG1bMTBdICtcbiAgICAgICAgbVs0XSAqIG1bMl0gKiBtWzldICtcbiAgICAgICAgbVs4XSAqIG1bMV0gKiBtWzZdIC1cbiAgICAgICAgbVs4XSAqIG1bMl0gKiBtWzVdO1xuXG4gICAgZGV0ID0gbVswXSAqIGludlswXSArIG1bMV0gKiBpbnZbNF0gKyBtWzJdICogaW52WzhdICsgbVszXSAqIGludlsxMl07XG5cbiAgICBjb25zb2xlLmFzc2VydChkZXQgIT0gMCk7XG5cbiAgICBkZXQgPSAxLjAgLyBkZXQ7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgMTY7IGkrKykge1xuICAgICAgICByZXN1bHRbaV0gPSBpbnZbaV0gKiBkZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL01hdDQuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL01hdDQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRlZ1RvUmFkLFxuICAgIGNsYW1wLFxufTtcblxuZnVuY3Rpb24gZGVnVG9SYWQoZGVncmVlcykge1xuICAgIHJldHVybiBkZWdyZWVzICogKE1hdGguUEkgLyAxODApO1xufVxuXG5mdW5jdGlvbiBjbGFtcCh2YWx1ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5tYXgoTWF0aC5taW4odmFsdWUsIG1heCksIG1pbik7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9NYXRoVXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL01hdGhVdGlscy5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUuanMnO1xuaW1wb3J0IFZlYzMgZnJvbSAnLi9WZWMzLmpzJztcbmltcG9ydCBNYXQzIGZyb20gJy4vTWF0My5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmcm9tR2VvbWV0cnksXG4gICAgZ2V0RXh0ZW50cyxcbiAgICBhcHBseU9yaWdpbixcbiAgICBhcHBseVRyYW5zbGF0aW9uLFxuICAgIGFwcGx5Um90YXRpb24sXG4gICAgYXBwbHlTY2FsZSxcbiAgICBjYWxjdWxhdGVOb3JtYWxzLFxuICAgIG1lcmdlXG59O1xuXG5jb25zdCBQT1NJVElPTlMgPSB7XG4gICAgdHJpYW5nbGU6IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAwLjAsIDAuNSwgMCxcbiAgICAgICAgLTAuNSwgLTAuNSwgMCxcbiAgICAgICAgMC41LCAtMC41LCAwLFxuICAgIF0pLFxuICAgIHF1YWQ6IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAtMC41LCAtMC41LCAwLFxuICAgICAgICAwLjUsIC0wLjUsIDAsXG4gICAgICAgIDAuNSwgMC41LCAwLFxuXG4gICAgICAgIDAuNSwgMC41LCAwLFxuICAgICAgICAtMC41LCAwLjUsIDAsXG4gICAgICAgIC0wLjUsIC0wLjUsIDAsXG4gICAgXSksXG4gICAgY3ViZTogbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC8vICt6IDFcbiAgICAgICAgLTAuNSwgLTAuNSwgMC41LFxuICAgICAgICAwLjUsIC0wLjUsIDAuNSxcbiAgICAgICAgMC41LCAwLjUsIDAuNSxcblxuICAgICAgICAvLyAreiAyXG4gICAgICAgIDAuNSwgMC41LCAwLjUsXG4gICAgICAgIC0wLjUsIDAuNSwgMC41LFxuICAgICAgICAtMC41LCAtMC41LCAwLjUsXG5cbiAgICAgICAgLy8gLXggMVxuICAgICAgICAtMC41LCAtMC41LCAtMC41LFxuICAgICAgICAtMC41LCAtMC41LCAwLjUsXG4gICAgICAgIC0wLjUsIDAuNSwgMC41LFxuXG4gICAgICAgIC8vIC14IDJcbiAgICAgICAgLTAuNSwgMC41LCAwLjUsXG4gICAgICAgIC0wLjUsIDAuNSwgLTAuNSxcbiAgICAgICAgLTAuNSwgLTAuNSwgLTAuNSxcblxuICAgICAgICAvLyAreSAxXG4gICAgICAgIC0wLjUsIDAuNSwgMC41LFxuICAgICAgICAwLjUsIDAuNSwgMC41LFxuICAgICAgICAwLjUsIDAuNSwgLTAuNSxcblxuICAgICAgICAvLyAreSAyXG4gICAgICAgIDAuNSwgMC41LCAtMC41LFxuICAgICAgICAtMC41LCAwLjUsIC0wLjUsXG4gICAgICAgIC0wLjUsIDAuNSwgMC41LFxuXG4gICAgICAgIC8vICt4IDFcbiAgICAgICAgMC41LCAtMC41LCAwLjUsXG4gICAgICAgIDAuNSwgLTAuNSwgLTAuNSxcbiAgICAgICAgMC41LCAwLjUsIC0wLjUsXG5cbiAgICAgICAgLy8gK3ggMlxuICAgICAgICAwLjUsIDAuNSwgLTAuNSxcbiAgICAgICAgMC41LCAwLjUsIDAuNSxcbiAgICAgICAgMC41LCAtMC41LCAwLjUsXG5cbiAgICAgICAgLy8gLXogMVxuICAgICAgICAwLjUsIC0wLjUsIC0wLjUsXG4gICAgICAgIC0wLjUsIC0wLjUsIC0wLjUsXG4gICAgICAgIC0wLjUsIDAuNSwgLTAuNSxcblxuICAgICAgICAvLyAteiAyXG4gICAgICAgIC0wLjUsIDAuNSwgLTAuNSxcbiAgICAgICAgMC41LCAwLjUsIC0wLjUsXG4gICAgICAgIDAuNSwgLTAuNSwgLTAuNSxcblxuICAgICAgICAvLyAteSAxXG4gICAgICAgIC0wLjUsIC0wLjUsIC0wLjUsXG4gICAgICAgIDAuNSwgLTAuNSwgLTAuNSxcbiAgICAgICAgMC41LCAtMC41LCAwLjUsXG5cbiAgICAgICAgLy8gLXkgMlxuICAgICAgICAwLjUsIC0wLjUsIDAuNSxcbiAgICAgICAgLTAuNSwgLTAuNSwgMC41LFxuICAgICAgICAtMC41LCAtMC41LCAtMC41LFxuICAgIF0pLFxufTtcblxuY29uc3QgTk9STUFMUyA9IHtcbiAgICB0cmlhbmdsZTogbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDAsIDAsIDEsXG4gICAgICAgIDAsIDAsIDEsXG4gICAgICAgIDAsIDAsIDFcbiAgICBdKSxcbiAgICBxdWFkOiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMCwgMCwgMSxcbiAgICAgICAgMCwgMCwgMSxcbiAgICAgICAgMCwgMCwgMSxcblxuICAgICAgICAwLCAwLCAxLFxuICAgICAgICAwLCAwLCAxLFxuICAgICAgICAwLCAwLCAxXG4gICAgXSksXG4gICAgY3ViZTogbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIC8vICt6IDFcbiAgICAgICAgMCwgMCwgMSxcbiAgICAgICAgMCwgMCwgMSxcbiAgICAgICAgMCwgMCwgMSxcblxuICAgICAgICAvLyAreiAyXG4gICAgICAgIDAsIDAsIDEsXG4gICAgICAgIDAsIDAsIDEsXG4gICAgICAgIDAsIDAsIDEsXG5cbiAgICAgICAgLy8gLXggMVxuICAgICAgICAtMSwgMCwgMCxcbiAgICAgICAgLTEsIDAsIDAsXG4gICAgICAgIC0xLCAwLCAwLFxuXG4gICAgICAgIC8vIC14IDJcbiAgICAgICAgLTEsIDAsIDAsXG4gICAgICAgIC0xLCAwLCAwLFxuICAgICAgICAtMSwgMCwgMCxcblxuICAgICAgICAvLyAreSAxXG4gICAgICAgIDAsIDEsIDAsXG4gICAgICAgIDAsIDEsIDAsXG4gICAgICAgIDAsIDEsIDAsXG5cbiAgICAgICAgLy8gK3kgMlxuICAgICAgICAwLCAxLCAwLFxuICAgICAgICAwLCAxLCAwLFxuICAgICAgICAwLCAxLCAwLFxuXG4gICAgICAgIC8vICt4IDFcbiAgICAgICAgMSwgMCwgMCxcbiAgICAgICAgMSwgMCwgMCxcbiAgICAgICAgMSwgMCwgMCxcblxuICAgICAgICAvLyAreCAyXG4gICAgICAgIDEsIDAsIDAsXG4gICAgICAgIDEsIDAsIDAsXG4gICAgICAgIDEsIDAsIDAsXG5cbiAgICAgICAgLy8gLXogMVxuICAgICAgICAwLCAwLCAtMSxcbiAgICAgICAgMCwgMCwgLTEsXG4gICAgICAgIDAsIDAsIC0xLFxuXG4gICAgICAgIC8vIC16IDJcbiAgICAgICAgMCwgMCwgLTEsXG4gICAgICAgIDAsIDAsIC0xLFxuICAgICAgICAwLCAwLCAtMSxcblxuICAgICAgICAvLyAteSAxXG4gICAgICAgIDAsIC0xLCAwLFxuICAgICAgICAwLCAtMSwgMCxcbiAgICAgICAgMCwgLTEsIDAsXG5cbiAgICAgICAgLy8gLXkgMlxuICAgICAgICAwLCAtMSwgMCxcbiAgICAgICAgMCwgLTEsIDAsXG4gICAgICAgIDAsIC0xLCAwLFxuICAgIF0pXG59O1xuXG5mdW5jdGlvbiBmcm9tR2VvbWV0cnkoZ2VvbWV0cnkpIHtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzT2JqZWN0KGdlb21ldHJ5KSk7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc0FycmF5KGdlb21ldHJ5LnNoYXBlcykpO1xuXG4gICAgY29uc3QgdmVydGV4QXJyYXlzID0gZ2VvbWV0cnkuc2hhcGVzLm1hcChzaGFwZSA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gJ29yaWVudGF0aW9uJyBpbiBzaGFwZSA/IHNoYXBlLm9yaWVudGF0aW9uIDogVmVjMy56ZXJvKCk7XG4gICAgICAgIGNvbnN0IHNjYWxlID0gJ3NjYWxlJyBpbiBzaGFwZSA/IHNoYXBlLnNjYWxlIDogWzEsIDEsIDFdO1xuICAgICAgICBjb25zdCBwb3NpdGlvbiA9ICdwb3NpdGlvbicgaW4gc2hhcGUgPyBzaGFwZS5wb3NpdGlvbjogVmVjMy56ZXJvKCk7XG5cbiAgICAgICAgLy9jb25zdCByb3RhdGlvbiA9IE1hdDMubXVsdGlwbHkoTWF0My5zY2FsZShzY2FsZSksIE1hdDMuZnJvbUV1bGVyQW5nbGVzKG9yaWVudGF0aW9uKSk7XG4gICAgICAgIGNvbnN0IHJvdGF0aW9uID0gTWF0My5mcm9tRXVsZXJBbmdsZXMob3JpZW50YXRpb24pO1xuICAgICAgICBjb25zdCBzY2FsZU1hdHJpeCA9IE1hdDMuc2NhbGUoc2NhbGUpO1xuICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IGdldFZlcnRpY2VzKHNoYXBlLnNoYXBlKVxuICAgICAgICAgICAgLm1hcCh2ID0+IHRyYW5zZm9ybVZlcnRleCh2LCBwb3NpdGlvbiwgcm90YXRpb24sIHNjYWxlTWF0cml4KSk7XG5cbiAgICAgICAgcmV0dXJuIHZlcnRpY2VzO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdmVydGljZXMgPSBBcnJheSgpLmNvbmNhdCguLi52ZXJ0ZXhBcnJheXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zaXRpb25zOiB2ZXJ0aWNlcy5tYXAodiA9PiB2LnBvc2l0aW9uKSxcbiAgICAgICAgbm9ybWFsczogdmVydGljZXMubWFwKHYgPT4gdi5ub3JtYWwpLFxuICAgICAgICBtb2RlOiAnVFJJQU5HTEVTJyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXRWZXJ0aWNlcyhzaGFwZSkge1xuICAgIGNvbnNvbGUuYXNzZXJ0KHNoYXBlIGluIFBPU0lUSU9OUyk7XG4gICAgY29uc29sZS5hc3NlcnQoc2hhcGUgaW4gTk9STUFMUyk7XG4gICAgY29uc3QgcG9zaXRpb25zID0gUE9TSVRJT05TW3NoYXBlXTtcbiAgICBjb25zdCBub3JtYWxzID0gTk9STUFMU1tzaGFwZV07XG5cbiAgICByZXR1cm4gQXJyYXkocG9zaXRpb25zLmxlbmd0aCAvIDMpLmZpbGwobnVsbClcbiAgICAgICAgLm1hcCgoXywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHBvc2l0aW9ucy5zbGljZShpbmRleCAqIDMsIGluZGV4ICogMyArIDMpLFxuICAgICAgICAgICAgICAgIG5vcm1hbDogbm9ybWFscy5zbGljZShpbmRleCAqIDMsIGluZGV4ICogMyArIDMpXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtVmVydGV4KHZlcnRleCwgdHJhbnNsYXRpb24sIHJvdGF0aW9uLCBzY2FsZSkge1xuICAgIGNvbnN0IG5ld1ZlcnRleCA9IHt9O1xuICAgIGlmKCdwb3NpdGlvbicgaW4gdmVydGV4KSB7XG4gICAgICAgIG5ld1ZlcnRleC5wb3NpdGlvbiA9IFZlYzMuY2xvbmUodmVydGV4LnBvc2l0aW9uKTtcbiAgICAgICAgbmV3VmVydGV4LnBvc2l0aW9uID0gVmVjMy50cmFuc2Zvcm0obmV3VmVydGV4LnBvc2l0aW9uLCBzY2FsZSk7XG4gICAgICAgIG5ld1ZlcnRleC5wb3NpdGlvbiA9IFZlYzMudHJhbnNmb3JtKG5ld1ZlcnRleC5wb3NpdGlvbiwgcm90YXRpb24pO1xuICAgICAgICBuZXdWZXJ0ZXgucG9zaXRpb24gPSBWZWMzLmFkZChuZXdWZXJ0ZXgucG9zaXRpb24sIHRyYW5zbGF0aW9uKTtcbiAgICB9XG4gICAgaWYoJ25vcm1hbCcgaW4gdmVydGV4KSB7XG4gICAgICAgIG5ld1ZlcnRleC5ub3JtYWwgPSBWZWMzLnRyYW5zZm9ybSh2ZXJ0ZXgubm9ybWFsLCByb3RhdGlvbik7XG4gICAgfVxuICAgIHJldHVybiBuZXdWZXJ0ZXg7XG59XG5cblxuZnVuY3Rpb24gZ2V0VHJpYW5nbGVVdnMoKSB7XG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAwLjUsIDEsXG4gICAgICAgIDAsIDAsXG4gICAgICAgIDEsIDBcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gZ2V0UGxhbmVVdnMoKSB7XG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAwLCAwLFxuICAgICAgICAxLCAwLFxuICAgICAgICAxLCAxLFxuXG4gICAgICAgIDEsIDEsXG4gICAgICAgIDAsIDEsXG4gICAgICAgIDAsIDAsXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5U2NhbGUobWVzaCwgc2NhbGUpIHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBtZXNoLnBvc2l0aW9uc1xuICAgICAgICAubWFwKHBvc2l0aW9uID0+IFZlYzMubXVsdGlwbHkocG9zaXRpb24sIHNjYWxlKSk7XG4gICAgbWVzaC5wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGFwcGx5Um90YXRpb24obWVzaCwgdHJhbnNmb3JtKSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gbWVzaC5wb3NpdGlvbnNcbiAgICAgICAgLm1hcChwb3NpdGlvbiA9PiBWZWMzLnRyYW5zZm9ybShwb3NpdGlvbiwgdHJhbnNmb3JtKSk7XG5cbiAgICBjb25zdCBub3JtYWxzID0gbWVzaC5ub3JtYWxzXG4gICAgICAgIC5tYXAobm9ybWFsID0+IFZlYzMudHJhbnNmb3JtKG5vcm1hbCwgdHJhbnNmb3JtKSk7XG5cbiAgICBtZXNoLnBvc2l0aW9ucyA9IHBvc2l0aW9ucztcbiAgICBtZXNoLm5vcm1hbHMgPSBub3JtYWxzO1xufVxuXG5mdW5jdGlvbiBhcHBseVRyYW5zbGF0aW9uKG1lc2gsIHRyYW5zbGF0aW9uKSB7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc09iamVjdChtZXNoKSk7XG5cbiAgICBjb25zdCBwb3NpdGlvbnMgPSBtZXNoLnBvc2l0aW9uc1xuICAgICAgICAubWFwKHBvc2l0aW9uID0+IFZlYzMuYWRkKHBvc2l0aW9uLCB0cmFuc2xhdGlvbikpO1xuICAgIG1lc2gucG9zaXRpb25zID0gcG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBhcHBseU9yaWdpbihtZXNoLCBub3JtYWxpemVkT3JpZ2luKSB7XG4gICAgY29uc29sZS5hc3NlcnQobm9ybWFsaXplZE9yaWdpbi5sZW5ndGggPT09IDMpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KC0xID49IG5vcm1hbGl6ZWRPcmlnaW5bMF0gPD0gMSk7XG4gICAgY29uc29sZS5hc3NlcnQoLTEgPj0gbm9ybWFsaXplZE9yaWdpblsxXSA8PSAxKTtcbiAgICBjb25zb2xlLmFzc2VydCgtMSA+PSBub3JtYWxpemVkT3JpZ2luWzJdIDw9IDEpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KCdwb3NpdGlvbnMnIGluIG1lc2gpO1xuXG4gICAgY29uc3QgZXh0ZW50cyA9IGdldEV4dGVudHMobWVzaCk7XG4gICAgY29uc3QgdW5ub3JtYWxpemVkT3JpZ2luID0gVmVjMy5tdWx0aXBseShub3JtYWxpemVkT3JpZ2luLCBleHRlbnRzKTtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBtZXNoLnBvc2l0aW9ucy5tYXAocG9zaXRpb24gPT4gVmVjMy5zY2FsZUFuZEFkZChwb3NpdGlvbiwgdW5ub3JtYWxpemVkT3JpZ2luLCAtMC41KSk7XG4gICAgbWVzaC5wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGdldEV4dGVudHMobWVzaCkge1xuICAgIGNvbnNvbGUuYXNzZXJ0KCdwb3NpdGlvbnMnIGluIG1lc2gpO1xuICAgIGNvbnN0IG1pbiA9IG1lc2gucG9zaXRpb25zLnJlZHVjZSgocmVzdWx0LCBwb3MpID0+IFZlYzMubWluKHJlc3VsdCwgcG9zKSwgVmVjMy5sYXJnZXN0KCkpO1xuICAgIGNvbnN0IG1heCA9IG1lc2gucG9zaXRpb25zLnJlZHVjZSgocmVzdWx0LCBwb3MpID0+IFZlYzMubWF4KHJlc3VsdCwgcG9zKSwgVmVjMy5zbWFsbGVzdCgpKTtcbiAgICByZXR1cm4gVmVjMy5zdWIobWF4LCBtaW4pO1xufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVOb3JtYWxzKG1lc2gpIHtcbiAgICBjb25zb2xlLmFzc2VydCgncG9zaXRpb25zJyBpbiBtZXNoKTtcblxuICAgIGNvbnN0IG5vcm1hbHMgPSBtZXNoLnBvc2l0aW9uc1xuICAgICAgICAvLyBzcGxpdCB2ZXJ0aWNlcyBpbnRvIHRyaWFuZ2xlc1xuICAgICAgICAucmVkdWNlKCh0cmlhbmdsZXMsIHZlcnRleCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmKGluZGV4ICUgMyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRyaWFuZ2xlcy5wdXNoKFtdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJpYW5nbGVzW3RyaWFuZ2xlcy5sZW5ndGggLSAxXS5wdXNoKHZlcnRleCk7XG4gICAgICAgICAgICByZXR1cm4gdHJpYW5nbGVzO1xuICAgICAgICB9LCBbXSlcbiAgICAgICAgLy8gY2FsY3VsYXRlIG5vcm1hbHMgcGVyIHRyaWFuZ2xlXG4gICAgICAgIC5tYXAodHJpYW5nbGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWRnZTMgPSBWZWMzLnN1Yih0cmlhbmdsZVsxXSwgdHJpYW5nbGVbMF0pO1xuICAgICAgICAgICAgY29uc3QgZWRnZTEgPSBWZWMzLnN1Yih0cmlhbmdsZVsyXSwgdHJpYW5nbGVbMV0pO1xuICAgICAgICAgICAgcmV0dXJuIFZlYzMubm9ybWFsaXplKFZlYzMuY3Jvc3MoZWRnZTMsIGVkZ2UxKSk7XG4gICAgICAgIH0pXG4gICAgICAgIC8vIHRyaXBsaWNhdGUgbm9ybWFsc1xuICAgICAgICAucmVkdWNlKCh2ZXJ0ZXhOb3JtYWxzLCB0cmlhbmdsZU5vcm1hbCkgPT4ge1xuICAgICAgICAgICAgdmVydGV4Tm9ybWFscy5wdXNoKHRyaWFuZ2xlTm9ybWFsLCB0cmlhbmdsZU5vcm1hbCwgdHJpYW5nbGVOb3JtYWwpO1xuICAgICAgICAgICAgcmV0dXJuIHZlcnRleE5vcm1hbHM7XG4gICAgICAgIH0sIFtdKTtcbiAgICBtZXNoLm5vcm1hbHMgPSBub3JtYWxzO1xufVxuXG5mdW5jdGlvbiBtZXJnZSguLi5tZXNoZXMpIHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBBcnJheSgpLmNvbmNhdCguLi5tZXNoZXMubWFwKG1lc2ggPT4gbWVzaC5wb3NpdGlvbnMpKTtcbiAgICBjb25zdCBub3JtYWxzID0gQXJyYXkoKS5jb25jYXQoLi4ubWVzaGVzLm1hcChtZXNoID0+IG1lc2gubm9ybWFscykpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zaXRpb25zLFxuICAgICAgICBub3JtYWxzLFxuICAgICAgICBtb2RlOiBtZXNoZXNbMF0ubW9kZVxuICAgIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9NZXNoLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9NZXNoLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21waWxlLFxuICAgIGRlc3Ryb3lcbn07XG5cbmZ1bmN0aW9uIGNvbXBpbGUoZ2wsIHR5cGUsIHNvdXJjZSkge1xuICAgIGNvbnN0IGdsU2hhZGVyID0gZ2wuY3JlYXRlU2hhZGVyKHR5cGUpO1xuICAgIGdsLnNoYWRlclNvdXJjZShnbFNoYWRlciwgc291cmNlKTtcbiAgICBnbC5jb21waWxlU2hhZGVyKGdsU2hhZGVyKTtcblxuICAgIGlmKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoZ2xTaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKSkge1xuICAgICAgICBjb25zdCBpbmZvID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhnbFNoYWRlcik7XG4gICAgICAgIGdsLmRlbGV0ZVNoYWRlcihnbFNoYWRlcik7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGNvbXBpbGUgc2hhZGVyOlxcbiR7aW5mb31gKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhgU2hhZGVyLmNvbXBpbGUoJHt0eXBlfSwgLi4uKSBzdWNjZWVkZWRgKTtcbiAgICByZXR1cm4gZ2xTaGFkZXI7XG59XG5cbmZ1bmN0aW9uIGRlc3Ryb3koZ2wsIHNoYWRlcikge1xuICAgIGlmKCFnbC5pc1NoYWRlcihzaGFkZXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEF0dGVtcHRlZCB0byBkZXN0cm95IG5vbi1zaGFkZXIgb2JqZWN0ICcke3NoYWRlcn0nYCk7XG4gICAgfVxuXG4gICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgcmV0dXJuIG51bGw7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TaGFkZXIuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL1NoYWRlci5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQXJyYXlVdGlscyBmcm9tICcuL0FycmF5VXRpbHMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcGlsZVxufTtcblxuZnVuY3Rpb24gY29tcGlsZShnbCwgLi4uc2hhZGVycykge1xuICAgIGNvbnNvbGUuYXNzZXJ0KGdsIGluc3RhbmNlb2YgV2ViR0xSZW5kZXJpbmdDb250ZXh0KTtcblxuICAgIGNvbnN0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XG4gICAgc2hhZGVycy5mb3JFYWNoKHNoYWRlciA9PiB7XG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBzaGFkZXIpO1xuICAgIH0pO1xuICAgIGdsLmxpbmtQcm9ncmFtKHByb2dyYW0pO1xuXG4gICAgaWYoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGxvYWQgc2hhZGVyIHByb2dyYW0gXCIlc1wiOiAlcycsXG4gICAgICAgICAgICBuYW1lLCBnbC5nZXRQcm9ncmFtSW5mb0xvZyhwcm9ncmFtKSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHByb2dyYW0uYXR0cmlidXRlcyA9IHt9O1xuICAgIHByb2dyYW0uYXR0cmlidXRlcy52ZXJ0ZXhQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhVmVydGV4UG9zaXRpb24nKTtcblxuICAgIGNvbnN0IGFjdGl2ZVVuaWZvcm1Db3VudCA9IGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuQUNUSVZFX1VOSUZPUk1TKTtcbiAgICBwcm9ncmFtLnVuaWZvcm1Mb2NhdGlvbnMgPSBBcnJheVV0aWxzLnJhbmdlKGFjdGl2ZVVuaWZvcm1Db3VudClcbiAgICAgICAgLm1hcChpbmRleCA9PiBnbC5nZXRBY3RpdmVVbmlmb3JtKHByb2dyYW0sIGluZGV4KSlcbiAgICAgICAgLm1hcChpbmZvID0+ICh7IGtleTogaW5mby5uYW1lLCBsb2NhdGlvbjogZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sIGluZm8ubmFtZSkgfSkpXG4gICAgICAgIC5yZWR1Y2UoKG9iamVjdCwgcGFpcikgPT4ge1xuICAgICAgICAgICAgb2JqZWN0W3BhaXIua2V5XSA9IHBhaXIubG9jYXRpb247XG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gcHJvZ3JhbTtcbn1cblxuLypcbmNvbnN0IFNoYWRlclByb2dyYW0gPSBPYmplY3QuZnJlZXplKHtcbiAgICBkZXN0cm95OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUuYXNzZXJ0KHRoaXMuaXNWYWxpZCgpKTtcbiAgICAgICAgdGhpcy5nbC5kZWxldGVQcm9ncmFtKHRoaXMuZ2xQcm9ncmFtKTtcbiAgICAgICAgdGhpcy5nbFByb2dyYW0gPSBudWxsO1xuICAgIH0sXG5cbiAgICBpc1ZhbGlkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCF0aGlzLmdsUHJvZ3JhbSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZ2wuaXNQcm9ncmFtKHRoaXMuZ2xQcm9ncmFtKTtcbiAgICB9XG59KTtcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZ2wpIHtcbiAgICBjb25zb2xlLmFzc2VydChnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGUsXG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZSguLi5zaGFkZXJzKSB7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKFNoYWRlclByb2dyYW0pLCB7XG4gICAgICAgICAgICBnbCxcbiAgICAgICAgICAgIGdsUHJvZ3JhbTogY29tcGlsZVByb2dyYW0oc2hhZGVycylcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjb21waWxlUHJvZ3JhbShbdnMsIGZzXSkge1xuICAgICAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgICAgICB2cyA9IHZzLmdsU2hhZGVyO1xuICAgICAgICBmcyA9IGZzLmdsU2hhZGVyO1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdnMpO1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgZnMpO1xuICAgICAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgICAgICBpZighZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRmFpbGVkIHRvIGxvYWQgc2hhZGVyIHByb2dyYW0gXCIlc1wiOiAlcycsXG4gICAgICAgICAgICAgICAgbmFtZSwgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9ncmFtLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICAgICAgcHJvZ3JhbS5hdHRyaWJ1dGVzLnZlcnRleFBvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FWZXJ0ZXhQb3NpdGlvbicpO1xuXG4gICAgICAgIHByb2dyYW0udW5pZm9ybXMgPSB7fTtcbiAgICAgICAgcHJvZ3JhbS51bmlmb3Jtcy53b3JsZCA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndVdvcmxkJyk7XG4gICAgICAgIHByb2dyYW0udW5pZm9ybXMudmlldyA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndVZpZXcnKTtcbiAgICAgICAgcHJvZ3JhbS51bmlmb3Jtcy5wcm9qZWN0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1UHJvamVjdGlvbicpO1xuXG4gICAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgIH1cbn1cbiovXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9TaGFkZXJQcm9ncmFtLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9TaGFkZXJQcm9ncmFtLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBnZXROYW1lLFxuICAgIGlzU3RyaW5nLFxuICAgIGlzQXJyYXksXG4gICAgaXNGdW5jdGlvbixcbiAgICBpc1VuZGVmaW5lZCxcbiAgICBpc051bGwsXG4gICAgaXNPYmplY3QsXG4gICAgaXNOdW1iZXIsXG4gICAgaXNCb29sZWFuLFxufTtcblxuZnVuY3Rpb24gZ2V0TmFtZSh2YWx1ZSkge1xuICAgIGlmKGlzTnVsbCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICB9XG5cbiAgICBpZihpc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gJ2FycmF5JztcbiAgICB9XG5cbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNOdWxsKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiBPYmplY3QodmFsdWUpID09PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvVHlwZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvVHlwZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUuanMnO1xuaW1wb3J0IE1hdDMgZnJvbSAnLi9NYXQzLmpzJztcbmltcG9ydCBBcnJheVV0aWxzIGZyb20gJy4vQXJyYXlVdGlscy5qcyc7XG5cbmNvbnN0IFZFQ1RPUl9MRU5HVEggPSAzO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcGFyc2UsXG4gICAgZnJvbVZhbHVlcyxcbiAgICBhZGQsXG4gICAgc3ViLFxuICAgIG11bHRpcGx5LFxuICAgIG5vcm1hbGl6ZSxcbiAgICBkb3QsXG4gICAgY3Jvc3MsXG4gICAgemVybyxcbiAgICBvbmUsXG4gICAgdHJhbnNmb3JtLFxuICAgIHNjYWxlLFxuICAgIGNsb25lLFxuICAgIGxhcmdlc3QsXG4gICAgc21hbGxlc3QsXG4gICAgbWluLFxuICAgIG1heCxcbiAgICBzY2FsZUFuZEFkZFxufTtcblxuZnVuY3Rpb24gc2NhbGVBbmRBZGQodjEsIHYyLCBzY2FsYXIpIHtcbiAgICByZXR1cm4gYWRkKHYxLCBzY2FsZSh2Miwgc2NhbGFyKSk7XG59XG5cbmZ1bmN0aW9uIG1pbih2MSwgdjIpIHtcbiAgICByZXR1cm4gQXJyYXlVdGlscy5yYW5nZShWRUNUT1JfTEVOR1RIKVxuICAgICAgICAubWFwKGkgPT4gTWF0aC5taW4odjFbaV0sIHYyW2ldKSk7XG59XG5cbmZ1bmN0aW9uIG1heCh2MSwgdjIpIHtcbiAgICByZXR1cm4gQXJyYXlVdGlscy5yYW5nZShWRUNUT1JfTEVOR1RIKVxuICAgICAgICAubWFwKGkgPT4gTWF0aC5tYXgodjFbaV0sIHYyW2ldKSk7XG59XG5cbmZ1bmN0aW9uIGxhcmdlc3QoKSB7XG4gICAgcmV0dXJuIGZyb21WYWx1ZXMoXG4gICAgICAgIE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcbiAgICAgICAgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICAgICBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gc21hbGxlc3QoKSB7XG4gICAgcmV0dXJuIGZyb21WYWx1ZXMoXG4gICAgICAgIE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICAgICAgTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICAgICAgICBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbHkodjEsIHYyKSB7XG4gICAgcmV0dXJuIEFycmF5VXRpbHMucmFuZ2UoMylcbiAgICAgICAgLm1hcChpID0+IHYxW2ldICogdjJbaV0pO1xufVxuXG5mdW5jdGlvbiBjbG9uZSh2KSB7XG4gICAgcmV0dXJuIGZyb21WYWx1ZXMoLi4udik7XG59XG5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlKSB7XG4gICAgaWYodmFsdWUgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnNsaWNlKCk7XG4gICAgfVxuXG4gICAgaWYoVHlwZS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZnJvbVZhbHVlcyguLi52YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYoVHlwZS5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZyb21WYWx1ZXModmFsdWUsIHZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuXG5cbiAgICBpZihUeXBlLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gemVybygpO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYEZhaWxlZCB0byBwYXJzZSB2YWx1ZSBvZiB0eXBlICcke1R5cGUuZ2V0TmFtZSh2YWx1ZSl9JyBpbnRvIGEgVmVjM2ApO1xufVxuXG5mdW5jdGlvbiBjcm9zcyh2MSwgdjIpIHtcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIHYxWzFdICogdjJbMl0gLSB2MVsyXSAqIHYyWzFdLFxuICAgICAgICB2MVsyXSAqIHYyWzBdIC0gdjFbMF0gKiB2MlsyXSxcbiAgICAgICAgdjFbMF0gKiB2MlsxXSAtIHYxWzFdICogdjJbMF1cbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gYWRkKHYxLCB2Mikge1xuICAgIHJldHVybiBmcm9tVmFsdWVzKFxuICAgICAgICB2MVswXSArIHYyWzBdLFxuICAgICAgICB2MVsxXSArIHYyWzFdLFxuICAgICAgICB2MVsyXSArIHYyWzJdXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gc3ViKHYxLCB2Mikge1xuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgdjFbMF0gLSB2MlswXSxcbiAgICAgICAgdjFbMV0gLSB2MlsxXSxcbiAgICAgICAgdjFbMl0gLSB2MlsyXVxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemUodikge1xuICAgIHJldHVybiBzY2FsZSh2LCAxIC8gbGVuZ3RoKHYpKTtcbn1cblxuZnVuY3Rpb24gc2NhbGUodiwgc2NhbGFyKSB7XG4gICAgcmV0dXJuIHYubWFwKGVsZW1lbnQgPT4gZWxlbWVudCAqIHNjYWxhcik7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aCh2KSB7XG4gICAgcmV0dXJuIE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xufVxuXG5mdW5jdGlvbiBmcm9tVmFsdWVzKHggPSAwLCB5ID0gMCwgeiA9IDApIHtcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbeCwgeSwgel0pO1xufVxuXG5mdW5jdGlvbiB6ZXJvKCkge1xuICAgIHJldHVybiBmcm9tVmFsdWVzKDAsIDAsIDApO1xufVxuXG5mdW5jdGlvbiBvbmUoKSB7XG4gICAgcmV0dXJuIGZyb21WYWx1ZXMoMSwgMSwgMSk7XG59XG5cbmZ1bmN0aW9uIGRvdCh2MSwgdjIpIHtcbiAgICByZXR1cm4gdjFbMF0gKiB2MlswXSArIHYxWzFdICogdjJbMV0gKyB2MVsyXSAqIHYyWzJdO1xufVxuXG5mdW5jdGlvbiB0cmFuc2Zvcm0odiwgbSkge1xuICAgIHJldHVybiBmcm9tVmFsdWVzKFxuICAgICAgICBkb3QodiwgTWF0My5nZXRDb2x1bW4obSwgMCkpLFxuICAgICAgICBkb3QodiwgTWF0My5nZXRDb2x1bW4obSwgMSkpLFxuICAgICAgICBkb3QodiwgTWF0My5nZXRDb2x1bW4obSwgMikpXG4gICAgKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1ZlYzMuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL1ZlYzMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGZyb21WYWx1ZXMsXG4gICAgZG90LFxuICAgIHBhcnNlLFxuICAgIHplcm9cbn07XG5cbmZ1bmN0aW9uIHBhcnNlKHZhbHVlKSB7XG4gICAgaWYodmFsdWUgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnNsaWNlKCk7XG4gICAgfVxuXG4gICAgaWYoVHlwZS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZnJvbVZhbHVlcyguLi52YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYoVHlwZS5pc051bWJlcih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZyb21WYWx1ZXModmFsdWUsIHZhbHVlLCB2YWx1ZSwgMSk7XG4gICAgfVxuXG4gICAgaWYoVHlwZS5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHplcm8oKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBGYWlsZWQgdG8gcGFyc2UgdmFsdWUgb2YgdHlwZSAnJHtUeXBlLmdldE5hbWUodmFsdWUpfScgaW50byBhIFZlYzRgKTtcbn1cblxuZnVuY3Rpb24gZnJvbVZhbHVlcyh4ID0gMCwgeSA9IDAsIHogPSAwLCB3ID0gMSkge1xuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFt4LCB5LCB6LCB3XSk7XG59XG5cbmZ1bmN0aW9uIGRvdCh2MSwgdjIpIHtcbiAgICByZXR1cm4gdjFbMF0gKiB2MlswXSArIHYxWzFdICogdjJbMV0gKyB2MVsyXSAqIHYyWzJdICsgdjFbM10gKiB2MlszXTtcbn1cblxuZnVuY3Rpb24gemVybygpIHtcbiAgICByZXR1cm4gZnJvbVZhbHVlcygwLCAwLCAwLCAwKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1ZlYzQuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL1ZlYzQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBNYXRoVXRpbHMgZnJvbSAnLi9NYXRoVXRpbHMuanMnO1xuaW1wb3J0IFJhbmRvbSBmcm9tICdyYW5kb20tanMnO1xuaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlLmpzJztcbmltcG9ydCBHZnggZnJvbSAnLi9HZnguanMnO1xuaW1wb3J0IEdsTWVzaCBmcm9tICcuL0dsTWVzaC5qcyc7XG5pbXBvcnQgTWVzaCBmcm9tICcuL01lc2guanMnO1xuaW1wb3J0IFNoYWRlciBmcm9tICcuL1NoYWRlci5qcyc7XG5pbXBvcnQgU2hhZGVyUHJvZ3JhbSBmcm9tICcuL1NoYWRlclByb2dyYW0uanMnO1xuaW1wb3J0IFZlYzMgZnJvbSAnLi9WZWMzLmpzJztcbmltcG9ydCBWZWM0IGZyb20gJy4vVmVjNC5qcyc7XG5cbmNvbnN0IG1vZHVsZXMgPSB7fTtcbmxldCBhbmltYXRpb25GcmFtZUlkID0gbnVsbDtcblxuaW5pdENvbnRlbnRIbXIoKTtcbmluaXQoKTtcblxuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcblxuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIGhhbmRsZUhhc2hDaGFuZ2UpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBoYW5kbGVSZXNpemUpO1xuXG4gICAgcmVzdGFydCgpO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgIGNvbnNvbGUubG9nKCclY1Jlc3RhcnRpbmcuLi4nLCAnZm9udC13ZWlnaHQ6Ym9sZCcpO1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuXG4gICAgY29uc3QgdXJsUGFyYW1zID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHNjZW5lOiAnbW9kZWxzL2dyYXNzV2FsbC5qc29uJyxcbiAgICAgICAgc2luZ2xlOiBmYWxzZVxuICAgIH0sIGdldFVybFBhcmFtZXRlcnMod2luZG93LmxvY2F0aW9uKSk7XG4gICAgY29uc3Qgc2NlbmUgPSBsb2FkU2NlbmUoY2FudmFzLCB1cmxQYXJhbXMpO1xuXG4gICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCk7XG4gICAgc3RhcnRSZW5kZXJMb29wKGNhbnZhcywgc2NlbmUsIHVybFBhcmFtcyk7XG59XG5cbmZ1bmN0aW9uIGluaXRDb250ZW50SG1yKCkge1xuICAgIGxldCBjb250ZXh0ID0gcmVxdWlyZS5jb250ZXh0KCcuLi9jb250ZW50JywgdHJ1ZSwgL1xcLihqc3xqc29ufHZlcnR8ZnJhZ3xwbmd8anBnKSQvKTtcbiAgICBmb3IoY29uc3Qga2V5IG9mIGNvbnRleHQua2V5cygpKSB7XG4gICAgICAgIG1vZHVsZXNba2V5XSA9IGNvbnRleHQoa2V5KTtcbiAgICB9XG5cbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGNvbnRleHQuaWQsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJy4uL2NvbnRlbnQnLCB0cnVlLCAvXFwuKGpzfGpzb258dmVydHxmcmFnfHBuZ3xqcGcpJC8pO1xuICAgICAgICAgICAgY29uc3QgY2hhbmdlZE1vZHVsZXMgPSBuZXdDb250ZXh0LmtleXMoKVxuICAgICAgICAgICAgICAgIC5tYXAoa2V5ID0+ICh7IGtleToga2V5LCAnbW9kdWxlJzogbmV3Q29udGV4dChrZXkpIH0pKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIocGFpciA9PiBtb2R1bGVzW3BhaXIua2V5XSAhPT0gcGFpci5tb2R1bGUpO1xuXG4gICAgICAgICAgICBjaGFuZ2VkTW9kdWxlcy5mb3JFYWNoKHBhaXIgPT4ge1xuICAgICAgICAgICAgICAgIG1vZHVsZXNbcGFpci5rZXldID0gcGFpci5tb2R1bGU7XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBpZihnZXRIYXNoQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5oYXNoKSA9PT0gcGFpci5rZXkucmVwbGFjZSgvXlxcLlxcLy8sICcnKSkge1xuICAgICAgICAgICAgICAgICAgICByZWxvYWRNb2RlbCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnUmVsb2FkZWQnLCBwYWlyLmtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnTm90IHJlbG9hZGVkJywgcGFpci5rZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXN0YXJ0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2xpY2soKSB7XG4gICAgcmVzdGFydCgpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVIYXNoQ2hhbmdlKCkge1xuICAgIHJlc3RhcnQoKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xuICAgIHJlc3RhcnQoKTtcbn1cblxuZnVuY3Rpb24gZXhwYW5kVGVtcGxhdGVzKG9iamVjdCkge1xuICAgIE9iamVjdC5rZXlzKG9iamVjdClcbiAgICAgICAgLm1hcChrZXkgPT4gKHsga2V5OiBrZXksIHZhbHVlOiBvYmplY3Rba2V5XSB9KSlcbiAgICAgICAgLmZpbHRlcihwYWlyID0+IGlzVGVtcGxhdGUocGFpci52YWx1ZSkpXG4gICAgICAgIC5mb3JFYWNoKHBhaXIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoaXNUZW1wbGF0ZShwYWlyLnZhbHVlKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBtaW46IHBvc2l0aW9uTWluID0gVmVjMy56ZXJvKCksXG4gICAgICAgICAgICAgICAgICAgIG1heDogcG9zaXRpb25NYXggPSBWZWMzLnplcm8oKSxcbiAgICAgICAgICAgICAgICB9ID0ge30sXG4gICAgICAgICAgICAgICAgb3JpZW50YXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbWluOiBvcmllbnRhdGlvbk1pbiA9IFZlYzMuemVybygpLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IG9yaWVudGF0aW9uTWF4ID0gVmVjMy56ZXJvKCksXG4gICAgICAgICAgICAgICAgfSA9IHt9LFxuICAgICAgICAgICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbjogc2NhbGVNaW4gPSBWZWMzLm9uZSgpLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IHNjYWxlTWF4ID0gVmVjMy5vbmUoKSxcbiAgICAgICAgICAgICAgICB9ID0ge30sXG4gICAgICAgICAgICAgICAgc2VlZCA9IDAsXG4gICAgICAgICAgICAgICAgY291bnQgPSAxLFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlXG4gICAgICAgICAgICB9ID0gcGFpci52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25SYW5kb21FbmdpbmUgPSBSYW5kb20uZW5naW5lcy5tdDE5OTM3KCkuc2VlZChzZWVkKTtcbiAgICAgICAgICAgIGNvbnN0IG9yaWVudGF0aW9uUmFuZG9tRW5naW5lID0gUmFuZG9tLmVuZ2luZXMubXQxOTkzNygpLnNlZWQoc2VlZCk7XG4gICAgICAgICAgICBjb25zdCBzY2FsZVJhbmRvbUVuZ2luZSA9IFJhbmRvbS5lbmdpbmVzLm10MTk5MzcoKS5zZWVkKHNlZWQpO1xuICAgICAgICAgICAgb2JqZWN0W3BhaXIua2V5XSA9IEFycmF5KGNvdW50KS5maWxsKG51bGwpXG4gICAgICAgICAgICAgICAgLm1hcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCB0ZW1wbGF0ZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJhbmRvbVZlYzMocG9zaXRpb25SYW5kb21FbmdpbmUsIHBvc2l0aW9uTWluLCBwb3NpdGlvbk1heCksXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvbjogcmFuZG9tVmVjMyhvcmllbnRhdGlvblJhbmRvbUVuZ2luZSwgb3JpZW50YXRpb25NaW4sIG9yaWVudGF0aW9uTWF4KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjYWxlOiByYW5kb21WZWMzKHNjYWxlUmFuZG9tRW5naW5lLCBzY2FsZU1pbiwgc2NhbGVNYXgpLFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICBPYmplY3QudmFsdWVzKG9iamVjdClcbiAgICAgICAgLmZpbHRlcihUeXBlLmlzT2JqZWN0KVxuICAgICAgICAuZmlsdGVyKHZhbHVlID0+ICFUeXBlLmlzQXJyYXkodmFsdWUpKVxuICAgICAgICAuZm9yRWFjaChleHBhbmRUZW1wbGF0ZXMpO1xufVxuXG5mdW5jdGlvbiBldmFsdWF0ZUZ1bmN0aW9ucyhvYmplY3QpIHtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzT2JqZWN0KG9iamVjdCkpO1xuXG4gICAgT2JqZWN0LmtleXMob2JqZWN0KVxuICAgICAgICAubWFwKGtleSA9PiAoeyBrZXk6IGtleSwgdmFsdWU6IG9iamVjdFtrZXldIH0pKVxuICAgICAgICAuZmlsdGVyKHBhaXIgPT4gaXNQcm9jZWR1cmFsRnVuY3Rpb24ocGFpci52YWx1ZSkpXG4gICAgICAgIC5mb3JFYWNoKHBhaXIgPT4ge1xuICAgICAgICAgICAgY29uc3QgbW9kdWxlTmFtZSA9IGAuL3Byb2NlZHVyYWwvJHtwYWlyLnZhbHVlLmZ1bmN0aW9ufS5qc2A7XG4gICAgICAgICAgICBpZihtb2R1bGVOYW1lIGluIG1vZHVsZXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZXZhbHVhdGUgZnVuY3Rpb24gJyR7bW9kdWxlTmFtZX0nYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgZnVuYyA9IG1vZHVsZXNbbW9kdWxlTmFtZV0uZGVmYXVsdDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZ1bmMocGFpci52YWx1ZS5wYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgdDEgPSBwZXJmb3JtYW5jZS5ub3coKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYFByb2NlZHVyZSAnJHtwYWlyLnZhbHVlLmZ1bmN0aW9ufScgZXZhbHVhdGVkIHRvICcke1R5cGUuZ2V0TmFtZShyZXN1bHQpfScgKCR7KHQxIC0gdDApLnRvRml4ZWQoMSl9IG1zKTpgLCByZXN1bHQpO1xuICAgICAgICAgICAgb2JqZWN0W3BhaXIua2V5XSA9IHJlc3VsdDtcbiAgICAgICAgfSk7XG5cbiAgICBPYmplY3QudmFsdWVzKG9iamVjdClcbiAgICAgICAgLmZpbHRlcihUeXBlLmlzT2JqZWN0KVxuICAgICAgICAuZm9yRWFjaChldmFsdWF0ZUZ1bmN0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGlzUHJvY2VkdXJhbEZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYoIVR5cGUuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZignZnVuY3Rpb24nIGluIHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzVGVtcGxhdGUodmFsdWUpIHtcbiAgICBpZighVHlwZS5pc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKFR5cGUuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCd0ZW1wbGF0ZScgaW4gdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gY29udmVydERlZ3JlZXNUb1JhZGlhbnMob2JqZWN0KSB7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc09iamVjdChvYmplY3QpKTtcblxuICAgIE9iamVjdC5rZXlzKG9iamVjdClcbiAgICAgICAgLm1hcChrZXkgPT4gKHsga2V5OiBrZXksIHZhbHVlOiBvYmplY3Rba2V5XSB9KSlcbiAgICAgICAgLmZpbHRlcihwYWlyID0+IHBhaXIua2V5Lm1hdGNoKC9vcmllbnRhdGlvbnxyb3RhdGlvbi8pKVxuICAgICAgICAuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgICAgICAgIG9iamVjdFtwYWlyLmtleV0gPSBwYWlyLnZhbHVlLm1hcChNYXRoVXRpbHMuZGVnVG9SYWQpO1xuICAgICAgICB9KTtcblxuICAgIE9iamVjdC5rZXlzKG9iamVjdClcbiAgICAgICAgLm1hcChrZXkgPT4gKHsga2V5OiBrZXksIHZhbHVlOiBvYmplY3Rba2V5XSB9KSlcbiAgICAgICAgLmZpbHRlcihwYWlyID0+IFR5cGUuaXNPYmplY3QocGFpci52YWx1ZSkpXG4gICAgICAgIC5mb3JFYWNoKHBhaXIgPT4gY29udmVydERlZ3JlZXNUb1JhZGlhbnMocGFpci52YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0Q29sb3JzVG9SR0JBKG9iamVjdCkge1xuICAgIE9iamVjdC5rZXlzKG9iamVjdClcbiAgICAgICAgLm1hcChrZXkgPT4gKHsga2V5OiBrZXksIHZhbHVlOiBvYmplY3Rba2V5XSB9KSlcbiAgICAgICAgLmZpbHRlcihwYWlyID0+IHBhaXIua2V5Lm1hdGNoKC9hbGJlZG98Y2xlYXJDb2xvci8pKVxuICAgICAgICAuZm9yRWFjaChwYWlyID0+IG9iamVjdFtwYWlyLmtleV0gPSBwYXJzZUNvbG9yKHBhaXIudmFsdWUpKTtcblxuICAgIE9iamVjdC5rZXlzKG9iamVjdClcbiAgICAgICAgLm1hcChrZXkgPT4gKHsga2V5OiBrZXksIHZhbHVlOiBvYmplY3Rba2V5XSB9KSlcbiAgICAgICAgLmZpbHRlcihwYWlyID0+IFR5cGUuaXNPYmplY3QocGFpci52YWx1ZSkpXG4gICAgICAgIC5mb3JFYWNoKHBhaXIgPT4gY29udmVydENvbG9yc1RvUkdCQShwYWlyLnZhbHVlKSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRTY2VuZShjYW52YXMsIHsgc2NlbmU6IHNjZW5lUGF0aCB9KSB7XG4gICAgY29uc29sZS5ncm91cChgTG9hZGluZyBzY2VuZSAnJHtzY2VuZVBhdGh9J2ApO1xuXG4gICAgY29uc3QgbW9kZWwgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1vZHVsZXNbYC4vJHtzY2VuZVBhdGh9YF0pKTtcbiAgICBjb25zdCByZXNvdXJjZXMgPSBtb2R1bGVzO1xuICAgIGNvbnN0IGdsID0gR2Z4LmdldEdsQ29udGV4dChjYW52YXMpO1xuXG4gICAgY29uc29sZS50aW1lKCdTY2VuZSBjcmVhdGlvbicpO1xuXG4gICAgLy8gY29udmVydCBhbGJlZG9zIHRvIFJHQkFcbiAgICBjb25zb2xlLnRpbWUoJ0NvbnZlcnQgY29sb3JzIHRvIFJHQkEnKTtcbiAgICBjb252ZXJ0Q29sb3JzVG9SR0JBKG1vZGVsKTtcbiAgICBjb25zb2xlLnRpbWVFbmQoJ0NvbnZlcnQgY29sb3JzIHRvIFJHQkEnKTtcblxuICAgIC8vIGV4cGFuZCB0ZW1wbGF0ZXNcbiAgICBjb25zb2xlLnRpbWUoJ0V4cGFuZCB0ZW1wbGF0ZXMnKTtcbiAgICBleHBhbmRUZW1wbGF0ZXMobW9kZWwpO1xuICAgIGNvbnNvbGUudGltZUVuZCgnRXhwYW5kIHRlbXBsYXRlcycpO1xuXG4gICAgLy8gZXZhbHVhdGUgZnVuY3Rpb25zXG4gICAgY29uc29sZS50aW1lKCdFdmFsdWF0ZSBmdW5jdGlvbnMnKTtcbiAgICBldmFsdWF0ZUZ1bmN0aW9ucyhtb2RlbCk7XG4gICAgY29uc29sZS50aW1lRW5kKCdFdmFsdWF0ZSBmdW5jdGlvbnMnKTtcblxuICAgIC8vIGNvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zXG4gICAgY29uc29sZS50aW1lKCdDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFucycpO1xuICAgIGNvbnZlcnREZWdyZWVzVG9SYWRpYW5zKG1vZGVsKTtcbiAgICBjb25zb2xlLnRpbWVFbmQoJ0NvbnZlcnQgZGVncmVlcyB0byByYWRpYW5zJyk7XG5cbiAgICAvLyBleHRyYWN0IG5vZGVzIGZyb20gJ2NoaWxkcmVuJyBhcnJheXNcbiAgICBjb25zb2xlLnRpbWUoJ0V4dHJhY3Qgbm9kZXMgZnJvbSBcXCdjaGlsZHJlblxcJyBhcnJheXMnKTtcbiAgICBPYmplY3Qua2V5cyhtb2RlbClcbiAgICAgICAgLm1hcChrZXkgPT4gKHsga2V5OiBrZXksIHZhbHVlOiBtb2RlbFtrZXldIH0pKVxuICAgICAgICAuZmlsdGVyKHBhaXIgPT4gJ2NoaWxkcmVuJyBpbiBwYWlyLnZhbHVlKVxuICAgICAgICAuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgICAgICAgIHBhaXIudmFsdWUuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY2hpbGQucGFyZW50ID0gYEAke3BhaXIua2V5fWA7XG4gICAgICAgICAgICAgICAgbW9kZWxbYCR7cGFpci5rZXl9LiR7aW5kZXh9YF0gPSBjaGlsZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlIHBhaXIudmFsdWUuY2hpbGRyZW47XG4gICAgICAgIH0pO1xuICAgIGNvbnNvbGUudGltZUVuZCgnRXh0cmFjdCBub2RlcyBmcm9tIFxcJ2NoaWxkcmVuXFwnIGFycmF5cycpO1xuXG4gICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIG5vZGVzLCB3aXRoIGtleXMsIGZyb20gdGhlIHNvdXJjZSBvYmplY3RcbiAgICBjb25zdCB0MCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnN0IG5vZGVzID0gT2JqZWN0XG4gICAgICAgIC5rZXlzKG1vZGVsKVxuICAgICAgICAvLyBjcmVhdGUga2V5LXZhbHVlIHBhaXJzXG4gICAgICAgIC5tYXAoa2V5ID0+ICh7IGtleToga2V5LCB2YWx1ZTogbW9kZWxba2V5XSB9KSlcbiAgICAgICAgLy8gbWVyZ2Uga2V5IGFuZCB2YWx1ZSBpbnRvIGEgbmV3IG5vZGVcbiAgICAgICAgLm1hcChwYWlyID0+IE9iamVjdC5hc3NpZ24oe30sIHBhaXIudmFsdWUsIHsga2V5OiBwYWlyLmtleSB9KSk7XG4gICAgY29uc29sZS5sb2coYENyZWF0ZWQgJHtub2Rlcy5sZW5ndGh9IG5vZGVzICgkeyhwZXJmb3JtYW5jZS5ub3coKSAtIHQwKS50b0ZpeGVkKDEpfSBtcylgKTtcblxuICAgIC8vIHJlc29sdmUgcmVmZXJlbmNlc1xuICAgIG5vZGVzXG4gICAgICAgIC5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMobm9kZSlcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGtleSA9PiBUeXBlLmlzU3RyaW5nKG5vZGVba2V5XSkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihrZXkgPT4gbm9kZVtrZXldLnN0YXJ0c1dpdGgoJ0AnKSlcbiAgICAgICAgICAgICAgICAubWFwKGtleSA9PiAoeyBrZXk6IGtleSwgcmVmOiBub2RlW2tleV0uc3Vic3RyKDEpIH0pKVxuICAgICAgICAgICAgICAgIC5mb3JFYWNoKHBhaXIgPT4gbm9kZVtwYWlyLmtleV0gPSBub2Rlcy5maW5kKGl0ZW0gPT4gaXRlbS5rZXkgPT09IHBhaXIucmVmKSk7XG4gICAgICAgIH0pO1xuXG4gICAgLy8gcmVzb2x2ZSBwYXJlbnRzXG4gICAgbm9kZXNcbiAgICAgICAgLmZpbHRlcihub2RlID0+IFR5cGUuaXNTdHJpbmcobm9kZS5wYXJlbnQpKVxuICAgICAgICAuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IG5vZGVzLmZpbmQoaXRlbSA9PiBpdGVtLmtleSA9PT0gbm9kZS5wYXJlbnQuc3Vic3RyKDEpKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gcGFyZW50O1xuICAgICAgICB9KTtcblxuICAgIC8vIGNhbGN1bGF0ZSBnbG9iYWxUcmFuc2Zvcm0gZm9yIGFsbCBub2Rlc1xuICAgIGNvbnNvbGUudGltZSgnQ2FsY3VsYXRlZCBnbG9iYWwgdHJhbnNmb3JtJyk7XG4gICAgbm9kZXMuZm9yRWFjaChub2RlID0+IG5vZGUuZ2xvYmFsVHJhbnNmb3JtID0gR2Z4LmdldEdsb2JhbFRyYW5zZm9ybShub2RlKSk7XG4gICAgY29uc29sZS50aW1lRW5kKCdDYWxjdWxhdGVkIGdsb2JhbCB0cmFuc2Zvcm0nKTtcblxuICAgIC8vIGNyZWF0ZSBtZXNoZXMgZnJvbSBnZW9tZXRyaWVzXG4gICAgbGV0IG1lc2hDb3VudCA9IDA7XG4gICAgY29uc3QgbWVzaGVzID0gbm9kZXNcbiAgICAgICAgLmZpbHRlcihub2RlID0+ICdnZW9tZXRyeScgaW4gbm9kZSlcbiAgICAgICAgLm1hcChub2RlID0+IG5vZGUuZ2VvbWV0cnkpXG4gICAgICAgIC5yZWR1Y2UoKG1lc2hlcywgZ2VvbWV0cnkpID0+IHtcbiAgICAgICAgICAgIGlmKCFtZXNoZXMuZ2V0KGdlb21ldHJ5KSkge1xuICAgICAgICAgICAgICAgIG1lc2hlcy5zZXQoZ2VvbWV0cnksIE1lc2guZnJvbUdlb21ldHJ5KGdlb21ldHJ5KSk7XG4gICAgICAgICAgICAgICAgbWVzaENvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBtZXNoZXM7XG4gICAgICAgIH0sIG5ldyBXZWFrTWFwKCkpO1xuICAgIGNvbnNvbGUubG9nKGBDcmVhdGVkICR7bWVzaENvdW50fSBtZXNoZXNgKTtcblxuICAgIC8vIGFzc2lnbiBtZXNoZXMgdG8gbm9kZXNcbiAgICBub2Rlc1xuICAgICAgICAuZmlsdGVyKG5vZGUgPT4gJ2dlb21ldHJ5JyBpbiBub2RlKVxuICAgICAgICAuZm9yRWFjaChub2RlID0+IG5vZGUubWVzaCA9IG1lc2hlcy5nZXQobm9kZS5nZW9tZXRyeSkpO1xuXG4gICAgbGV0IGdsTWVzaENvdW50ID0gMDtcbiAgICBjb25zdCBnbE1lc2hlcyA9IG5vZGVzXG4gICAgICAgIC5maWx0ZXIobm9kZSA9PiAnbWVzaCcgaW4gbm9kZSlcbiAgICAgICAgLm1hcChub2RlID0+IG5vZGUubWVzaClcbiAgICAgICAgLnJlZHVjZSgoZ2xNZXNoZXMsIG1lc2gpID0+IHtcbiAgICAgICAgICAgIGlmKCFnbE1lc2hlcy5nZXQobWVzaCkpIHtcbiAgICAgICAgICAgICAgICBnbE1lc2hlcy5zZXQobWVzaCwgR2xNZXNoLmZyb21NZXNoKGdsLCBtZXNoKSk7XG4gICAgICAgICAgICAgICAgZ2xNZXNoQ291bnQrKztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGdsTWVzaGVzO1xuICAgICAgICB9LCBuZXcgV2Vha01hcCgpKTtcbiAgICBjb25zb2xlLmxvZyhgQ3JlYXRlZCAke2dsTWVzaENvdW50fSBHbE1lc2hgKTtcblxuICAgIC8vIGFzc2lnbiBtZXNoZXMgdG8gbm9kZXNcbiAgICBub2Rlc1xuICAgICAgICAuZmlsdGVyKG5vZGUgPT4gJ21lc2gnIGluIG5vZGUpXG4gICAgICAgIC5mb3JFYWNoKG5vZGUgPT4gbm9kZS5tZXNoID0gZ2xNZXNoZXMuZ2V0KG5vZGUubWVzaCkpO1xuXG4gICAgLy8gZGVsZXRlIGdlb21ldHJ5IGZyb20gYWxsIG5vZGVzIHdpdGggYSBtZXNoXG4gICAgbm9kZXNcbiAgICAgICAgLmZpbHRlcihub2RlID0+ICdtZXNoJyBpbiBub2RlKVxuICAgICAgICAuZm9yRWFjaChub2RlID0+IGRlbGV0ZSBub2RlLmdlb21ldHJ5KTtcblxuICAgIC8vIGFzc2lnbiBkZWZhdWx0IHByb2dyYW0gbmFtZXMgdG8gYWxsIG5vZGVzXG4gICAgbm9kZXNcbiAgICAgICAgLmZpbHRlcihub2RlID0+ICdtZXNoJyBpbiBub2RlKVxuICAgICAgICAuZm9yRWFjaChub2RlID0+IG5vZGUuc2hhZGVyUHJvZ3JhbSA9IG5vZGUuc2hhZGVyUHJvZ3JhbSB8fCAnYW1iaWVudCcpO1xuICAgIG5vZGVzXG4gICAgICAgIC5maWx0ZXIobm9kZSA9PiAnbGlnaHQnIGluIG5vZGUpXG4gICAgICAgIC5mb3JFYWNoKG5vZGUgPT4gbm9kZS5zaGFkZXJQcm9ncmFtID0gbm9kZS5zaGFkZXJQcm9ncmFtIHx8ICdzdW5saWdodCcpO1xuXG4gICAgLy8gY29tcGlsZSB1bmlxdWUgcHJvZ3JhbXNcbiAgICBjb25zdCBwcm9ncmFtcyA9IG5vZGVzXG4gICAgICAgIC5maWx0ZXIobm9kZSA9PiAnc2hhZGVyUHJvZ3JhbScgaW4gbm9kZSlcbiAgICAgICAgLm1hcChub2RlID0+IG5vZGUuc2hhZGVyUHJvZ3JhbSlcbiAgICAgICAgLnJlZHVjZSgoY29tcGlsZWRQcm9ncmFtcywgcHJvZ3JhbU5hbWUpID0+IHtcbiAgICAgICAgICAgIGlmKHByb2dyYW1OYW1lIGluIGNvbXBpbGVkUHJvZ3JhbXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdnNTcmMgPSByZXNvdXJjZXNbYC4vc2hhZGVycy8ke3Byb2dyYW1OYW1lfS52ZXJ0YF07XG4gICAgICAgICAgICAgICAgY29uc3QgZnNTcmMgPSByZXNvdXJjZXNbYC4vc2hhZGVycy8ke3Byb2dyYW1OYW1lfS5mcmFnYF07XG4gICAgICAgICAgICAgICAgY29uc3QgdnMgPSBTaGFkZXIuY29tcGlsZShnbCwgZ2wuVkVSVEVYX1NIQURFUiwgdnNTcmMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZzID0gU2hhZGVyLmNvbXBpbGUoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnNTcmMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyYW0gPSBTaGFkZXJQcm9ncmFtLmNvbXBpbGUoZ2wsIHZzLCBmcyk7XG4gICAgICAgICAgICAgICAgY29tcGlsZWRQcm9ncmFtc1twcm9ncmFtTmFtZV0gPSBwcm9ncmFtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29tcGlsZWRQcm9ncmFtcztcbiAgICAgICAgfSwge30pO1xuICAgIGNvbnNvbGUubG9nKGBDb21waWxlZCAke09iamVjdC5rZXlzKHByb2dyYW1zKS5sZW5ndGh9IHNoYWRlciBwcm9ncmFtc2ApO1xuXG4gICAgLy8gYXNzaWduIHByb2dyYW1zIHRvIG5vZGVzXG4gICAgbm9kZXNcbiAgICAgICAgLmZpbHRlcihub2RlID0+ICdzaGFkZXJQcm9ncmFtJyBpbiBub2RlKVxuICAgICAgICAuZm9yRWFjaChub2RlID0+IG5vZGUuc2hhZGVyUHJvZ3JhbSA9IHByb2dyYW1zW25vZGUuc2hhZGVyUHJvZ3JhbV0pO1xuXG4gICAgY29uc3Qgc2NlbmUgPSB7IG5vZGVzIH07XG4gICAgY29uc29sZS50aW1lRW5kKCdTY2VuZSBjcmVhdGlvbicpO1xuXG4gICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgIHJldHVybiBzY2VuZTtcbn1cblxuZnVuY3Rpb24gc3RhcnRSZW5kZXJMb29wKGNhbnZhcywgc2NlbmUsIHsgc2luZ2xlID0gZmFsc2UsIHVzZUhhY2sgPSBmYWxzZSB9KSB7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc0Jvb2xlYW4oc2luZ2xlKSk7XG4gICAgY29uc29sZS5sb2coYFN0YXJ0aW5nIHJlbmRlciBsb29wLi4uIChzaW5nbGUgPSAke3NpbmdsZX0pYCk7XG4gICAgbGV0IHRvdGFsVGltZUxhc3RGcmFtZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGFuaW1hdGlvbkZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUobG9vcCk7XG5cbiAgICBmdW5jdGlvbiBsb29wKHRvdGFsVGltZSkge1xuICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSB0b3RhbFRpbWUgLSB0b3RhbFRpbWVMYXN0RnJhbWU7XG5cbiAgICAgICAgR2Z4LnJlbmRlclNjZW5lKGNhbnZhcywgc2NlbmUsIHsgdG90YWw6IChzaW5nbGUgPyAwIDogdG90YWxUaW1lKSwgZGVsdGE6IGRlbHRhVGltZSB9LCB1c2VIYWNrKTtcbiAgICAgICAgdG90YWxUaW1lTGFzdEZyYW1lID0gdG90YWxUaW1lO1xuICAgICAgICBhbmltYXRpb25GcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuXG4gICAgICAgIGlmKHNpbmdsZSkge1xuICAgICAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUoYW5pbWF0aW9uRnJhbWVJZCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVuZGVyaW5nIHRvb2sgJHsocGVyZm9ybWFuY2Uubm93KCkgLSB0b3RhbFRpbWUpLnRvRml4ZWQoMSl9IG1zYCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJhbmRvbVZlYzMoZW5naW5lLCBtaW4sIG1heCkge1xuICAgIGNvbnN0IGRpc3RYID0gUmFuZG9tLnJlYWwobWluWzBdLCBtYXhbMF0sIHRydWUpO1xuICAgIGNvbnN0IGRpc3RZID0gUmFuZG9tLnJlYWwobWluWzFdLCBtYXhbMV0sIHRydWUpO1xuICAgIGNvbnN0IGRpc3RaID0gUmFuZG9tLnJlYWwobWluWzJdLCBtYXhbMl0sIHRydWUpO1xuICAgIHJldHVybiBWZWMzLmZyb21WYWx1ZXMoXG4gICAgICAgIGRpc3RYKGVuZ2luZSksXG4gICAgICAgIGRpc3RZKGVuZ2luZSksXG4gICAgICAgIGRpc3RaKGVuZ2luZSlcbiAgICApO1xufVxuXG5mdW5jdGlvbiBnZXRVcmxQYXJhbWV0ZXJzKGxvY2F0aW9uKSB7XG4gICAgY29uc29sZS5hc3NlcnQoJ2hhc2gnIGluIGxvY2F0aW9uKTtcblxuICAgIGNvbnN0IHBhcmFtZXRlcnMgPSAoZGVjb2RlVVJJQ29tcG9uZW50KGxvY2F0aW9uLmhhc2gpLm1hdGNoKC8oPz1bXiNdKVteJlxcc10rPVteJlxcc10rL2cpIHx8IFtdKVxuICAgICAgICAucmVkdWNlKChvYmplY3QsIG1hdGNoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBba2V5LCB2YWx1ZV0gPSBtYXRjaC5zcGxpdCgnPScpO1xuICAgICAgICAgICAgb2JqZWN0W2tleV0gPSBwYXJzZVN0cmluZyh2YWx1ZSk7XG5cbiAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgIH0sIHt9KTtcblxuICAgIHJldHVybiBwYXJhbWV0ZXJzO1xufVxuXG5mdW5jdGlvbiBwYXJzZUNvbG9yKHZhbHVlKSB7XG4gICAgaWYoVHlwZS5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIFZlYzQucGFyc2UoY29udmVydE5hbWVUb0NvbG9yKHZhbHVlKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFZlYzQucGFyc2UodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVN0cmluZyhzdHJpbmcpIHtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzU3RyaW5nKHN0cmluZykpO1xuXG4gICAgaWYoc3RyaW5nID09PSAnJykge1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH1cblxuICAgIGlmKHN0cmluZyA9PT0gJ3RydWUnKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmKHN0cmluZyA9PT0gJ2ZhbHNlJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoIWlzTmFOKHN0cmluZykpIHtcbiAgICAgICAgcmV0dXJuICtzdHJpbmc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZztcbn1cblxuZnVuY3Rpb24gY29udmVydE5hbWVUb0NvbG9yKGNvbG9yTmFtZSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LnN0eWxlLmNvbG9yID0gY29sb3JOYW1lO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBjb25zdCByYXdDb2xvciA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuY29sb3I7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblxuICAgIGNvbnN0IGNvbG9yID0gcmF3Q29sb3IubWF0Y2goL1xcZCsvZylcbiAgICAgICAgLm1hcChpdGVtID0+IHBhcnNlSW50KGl0ZW0pKVxuICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbSAvIDI1NSk7XG5cbiAgICByZXR1cm4gY29sb3I7XG59XG5cbi8qXG5mdW5jdGlvbiBsb2FkTW9kZWwobW9kZWwpIHtcbiAgICByZW5kZXIobW9kZWwpO1xufVxuXG5mdW5jdGlvbiByZXF1ZXN0TW9kZWxGaWxlKHBhdGgpIHtcbiAgICBjb25zdCBERUZBVUxUX01PREVMID0gJ21vZGVscy93ZWlyZC1jYW55b24zLmpzb24nO1xuXG4gICAgaWYocGF0aC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcGF0aCA9IERFRkFVTFRfTU9ERUw7XG4gICAgfVxuXG4gICAgcmVxdWVzdEZpbGUocGF0aClcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBsb2FkIG1vZGVsICcke3BhdGh9JzogJHtlcnJvcn1gKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYExvYWRpbmcgbW9kZWwgJyR7cGF0aH0nLi4uYCk7XG4gICAgICAgICAgICBsb2FkTW9kZWwoSlNPTi5wYXJzZShyZXNwb25zZSkpO1xuICAgICAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZShlKSB7XG4gICAgcmVxdWVzdE1vZGVsRmlsZShnZXRIYXNoQ29tcG9uZW50KGUudGFyZ2V0LmxvY2F0aW9uLmhhc2gpKTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdEZpbGUocGF0aCkge1xuICAgIGNvbnN0IFJFQURZX1NUQVRFID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgICAgIDA6ICdVTlNFTlQnLFxuICAgICAgICAxOiAnT1BFTkVEJyxcbiAgICAgICAgMjogJ0hFQURFUlNfUkVDRUlWRUQnLFxuICAgICAgICAzOiAnTE9BRElORycsXG4gICAgICAgIDQ6ICdET05FJ1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGV4ZWN1dG9yKTtcblxuICAgIGZ1bmN0aW9uIGV4ZWN1dG9yKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGhhbmRsZVJlYWR5U3RhdGVDaGFuZ2UpO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3Byb2dyZXNzJywgaGFuZGxlUHJvZ3Jlc3MpO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBoYW5kbGVMb2FkKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGhhbmRsZUVycm9yKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGhhbmRsZUFib3J0KTtcbiAgICAgICAgcmVxdWVzdC5vcGVuKCdHRVQnLCBwYXRoKTtcbiAgICAgICAgcmVxdWVzdC5zZW5kKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVhZHlTdGF0ZUNoYW5nZShlKSB7XG4gICAgICAgICAgICBjb25zdCByZWFkeVN0YXRlID0gUkVBRFlfU1RBVEVbZS50YXJnZXQucmVhZHlTdGF0ZV07XG4gICAgICAgICAgICBpZihyZWFkeVN0YXRlID09PSAnTE9BRElORycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3BhdGh9OiAke1JFQURZX1NUQVRFW2UudGFyZ2V0LnJlYWR5U3RhdGVdfSBbJHtlLnRhcmdldC5zdGF0dXN9XWApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlUHJvZ3Jlc3MoZSkge1xuICAgICAgICAgICAgY29uc3QgcmF0aW8gPSAoKGUubG9hZGVkIC8gZS50b3RhbCkgKiAxMDApLnRvRml4ZWQoMSk7XG4gICAgICAgICAgICBjb25zdCBwZXJjZW50Q29tcGxldGUgPSBlLmxlbmd0aENvbXB1dGFibGUgP1xuICAgICAgICAgICAgICAgIGAke3JhdGlvfSVgIDpcbiAgICAgICAgICAgICAgICAnPE4vQT4nO1xuXG4gICAgICAgICAgICBjb25zdCBsb2FkZWQgPSBieXRlc1RvSHVtYW5SZWFkYWJsZShlLmxvYWRlZCk7XG4gICAgICAgICAgICBjb25zdCB0b3RhbCA9IGJ5dGVzVG9IdW1hblJlYWRhYmxlKGUudG90YWwpO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwYXRofTogJHtwZXJjZW50Q29tcGxldGV9ICgke2xvYWRlZH0vJHt0b3RhbH0pIFske2UudGFyZ2V0LnN0YXR1c31dYCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVMb2FkKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3BhdGh9OiBMT0FEYCk7XG5cbiAgICAgICAgICAgIGlmKGUudGFyZ2V0LnN0YXR1cyA9PT0gMjAwIHx8IGUudGFyZ2V0LnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZS50YXJnZXQucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlLnRhcmdldC5zdGF0dXNUZXh0KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVFcnJvcihlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwYXRofTogRVJST1JgKTtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZS50YXJnZXQuc3RhdHVzVGV4dCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQWJvcnQoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cGF0aH06IEFCT1JUYCk7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGUudGFyZ2V0LnN0YXR1c1RleHQpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gYnl0ZXNUb0h1bWFuUmVhZGFibGUoYnl0ZXMpIHtcbiAgICBpZihieXRlcyA+IE1hdGgucG93KDEwMDAsIDIpKSB7XG4gICAgICAgIHJldHVybiBgJHsoYnl0ZXMvTWF0aC5wb3coMTAwMCwgMikpLnRvRml4ZWQoMil9TUJgO1xuICAgIH1cbiAgICBpZihieXRlcyA+IE1hdGgucG93KDEwMDAsIDEpKSB7XG4gICAgICAgIHJldHVybiBgJHsoYnl0ZXMvTWF0aC5wb3coMTAwMCwgMSkpLnRvRml4ZWQoMCl9a0JgO1xuICAgIH1cblxuICAgIHJldHVybiBgJHtieXRlc31CYDtcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2FudmFzU2l6ZSgpIHtcbiAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5wYXJlbnROb2RlLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IGNhbnZhcy5wYXJlbnROb2RlLmNsaWVudEhlaWdodDtcblxuICAgIGlmKGNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjb25zb2xlLmxvZyhgUmVzaXplZCBjYW52YXMgdG8gWyR7Y2FudmFzLndpZHRofSwgJHtjYW52YXMuaGVpZ2h0fV1gKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlcihtb2RlbCkge1xuICAgIHVwZGF0ZUNhbnZhc1NpemUoKTtcbiAgICBqc29uMmdmeChjYW52YXMsIG1vZGVsKTtcbn1cbiovXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9tYWluLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gUHJlcGFyZSBjc3NUcmFuc2Zvcm1hdGlvblxudmFyIHRyYW5zZm9ybTtcblxudmFyIG9wdGlvbnMgPSB7fVxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vc3JjL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9