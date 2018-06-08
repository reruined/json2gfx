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
exports.push([module.i, "html, body {\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    border: none;\n}\n\ncanvas {\n    display: block;\n    height: 100%;\n    width: 100%;\n    background: purple;\n}\n\n#options {\n    position: absolute;\n    right: 0;\n    top: 0;\n    background: lightgray;\n    padding: 15px;\n    border-radius: 15px;\n    margin: 5px;\n}\n\nselect {\n    display: block;\n}\n", ""]);

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
const options = {
    renderContinuously: true,
    scene: 'models/grassWall.json'
};
let animationFrameId = null;

initContentHmr();
init();

function init() {
    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('resize', handleResize);

    const canvas = document.querySelector('canvas');
    canvas.addEventListener('click', handleClick);

    const renderContinuouslyToggle = document.getElementById('render-continuously');
    renderContinuouslyToggle.checked = options.renderContinuously;
    renderContinuouslyToggle.addEventListener('change', e => {
        options.renderContinuously = e.target.checked;
        restart();
    });

    const sceneSelection = document.getElementById('scene-selection');
    sceneSelection.addEventListener('change', e => {
        options.scene = e.target.value;
        restart();
    });

    restart(renderContinuouslyToggle.checked);
}

function restart() {
    console.log('%cRestarting...', 'font-weight:bold');
    const canvas = document.querySelector('canvas');

    const urlParams = Object.assign({
        scene: options.scene,
        single: !options.renderContinuously
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

function handleClick(e) {
    restart();

    e.preventDefault();
    return false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTlmMWVhZjIzM2Q3YzA5YzZlNTciLCJ3ZWJwYWNrOi8vLy4vY29udGVudCBcXC4oanN8anNvbnx2ZXJ0fGZyYWd8cG5nfGpwZykkIiwid2VicGFjazovLy8uL2NvbnRlbnQvbW9kZWxzL2ZvcmVzdC5qc29uIiwid2VicGFjazovLy8uL2NvbnRlbnQvbW9kZWxzL2dyYXNzV2FsbC5qc29uIiwid2VicGFjazovLy8uL2NvbnRlbnQvbW9kZWxzL3RlcnJhaW4uanNvbiIsIndlYnBhY2s6Ly8vLi9jb250ZW50L21vZGVscy90ZXN0Mi5qc29uIiwid2VicGFjazovLy8uL2NvbnRlbnQvbW9kZWxzL3RyZWUuanNvbiIsIndlYnBhY2s6Ly8vLi9jb250ZW50L21vZGVscy93ZWlyZC1jYW55b24zLmpzb24iLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wcm9jZWR1cmFsL0N1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9wcm9jZWR1cmFsL0dyYXNzLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcHJvY2VkdXJhbC9HcmlkLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcHJvY2VkdXJhbC9RdWFkLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcHJvY2VkdXJhbC9UZXJyYWluLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvcHJvY2VkdXJhbC9UcmlhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3Byb2NlZHVyYWwvVHVybmluZ1RvcnNvLmpzIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2hhZGVycy9hbWJpZW50LmZyYWciLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaGFkZXJzL2FtYmllbnQudmVydCIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NoYWRlcnMvZGVidWctdXYuZnJhZyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NoYWRlcnMvZGVidWctdXYudmVydCIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NoYWRlcnMvcG9pbnRsaWdodC5mcmFnIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2hhZGVycy9wb2ludGxpZ2h0LnZlcnQiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaGFkZXJzL3NoYWRvdy5mcmFnIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2hhZGVycy9zaGFkb3cudmVydCIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NoYWRlcnMvc3VubGlnaHQtdGVycmFpbi5mcmFnIiwid2VicGFjazovLy8uL2NvbnRlbnQvc2hhZGVycy9zdW5saWdodC10ZXJyYWluLnZlcnQiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaGFkZXJzL3N1bmxpZ2h0LmZyYWciLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaGFkZXJzL3N1bmxpZ2h0LnZlcnQiLCJ3ZWJwYWNrOi8vLy4vY29udGVudC9zaGFkZXJzL3RlcnJhaW4uZnJhZyIsIndlYnBhY2s6Ly8vLi9jb250ZW50L3NoYWRlcnMvdGVycmFpbi52ZXJ0Iiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yYW5kb20tanMvbGliL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQXJyYXlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvR2Z4LmpzIiwid2VicGFjazovLy8uL3NyYy9HbE1lc2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWF0My5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWF0NC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvTWF0aFV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9NZXNoLmpzIiwid2VicGFjazovLy8uL3NyYy9TaGFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NoYWRlclByb2dyYW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZlYzMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1ZlYzQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz9iZDg0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRTs7Ozs7OztBQzNDQSxrQkFBa0IsaUJBQWlCLDZCQUE2QixtQkFBbUIsd0JBQXdCLFVBQVUsWUFBWSxlQUFlLGFBQWEsMENBQTBDLGdCQUFnQixpQ0FBaUMsVUFBVSxnQ0FBZ0Msc0JBQXNCLGFB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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzsrREFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLFNBQVM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsUUFBUTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxZQUFZO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsWUFB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QUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLG9EQUFvRCxXQUFXLGVBQWUsT0FBTztBQUNyRjtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbFpBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLHdCQUF3QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9COztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0EsS0FBSyxJQUFJO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ05BO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMERBQTBELHlFQUFvQjtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLFlBQVk7QUFDaEMsd0JBQXdCLGVBQWU7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3pLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsWUFBWTtBQUNoQyx3QkFBd0IsZUFBZTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxlQUFlLFFBQVE7QUFDdkI7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7QUM5VUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBOzt5REFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3pVQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsS0FBSztBQUMzRDs7QUFFQSxxQ0FBcUMsS0FBSztBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQSx1RUFBdUUsT0FBTztBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUMzQkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0VBQXNFO0FBQzdGO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN0REE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBELHlFQUFvQjtBQUM5RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqSkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDBEQUEwRCx5RUFBb0I7QUFDOUU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzQ0FBc0M7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QUFtQixNQUFNO0FBQ3pCOztBQUVBO0FBQ0E7O0FBRUEsMkJBQTJCLEtBQUssSUFBSSxnQkFBZ0IsSUFBSSxPQUFPLEdBQUcsTUFBTSxLQUFLLGdCQUFnQjtBQUM3Rjs7QUFFQTtBQUNBLDJCQUEyQixLQUFLOztBQUVoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsS0FBSztBQUNoQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHFDQUFxQztBQUN2RDtBQUNBO0FBQ0Esa0JBQWtCLHFDQUFxQztBQUN2RDs7QUFFQSxjQUFjLE1BQU07QUFDcEI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxhQUFhLElBQUksY0FBYztBQUN6RTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbmxCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLmpzXCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU5ZjFlYWYyMzNkN2MwOWM2ZTU3IiwidmFyIG1hcCA9IHtcblx0XCIuL21vZGVscy9mb3Jlc3QuanNvblwiOiBcIi4vY29udGVudC9tb2RlbHMvZm9yZXN0Lmpzb25cIixcblx0XCIuL21vZGVscy9ncmFzc1dhbGwuanNvblwiOiBcIi4vY29udGVudC9tb2RlbHMvZ3Jhc3NXYWxsLmpzb25cIixcblx0XCIuL21vZGVscy90ZXJyYWluLmpzb25cIjogXCIuL2NvbnRlbnQvbW9kZWxzL3RlcnJhaW4uanNvblwiLFxuXHRcIi4vbW9kZWxzL3Rlc3QyLmpzb25cIjogXCIuL2NvbnRlbnQvbW9kZWxzL3Rlc3QyLmpzb25cIixcblx0XCIuL21vZGVscy90cmVlLmpzb25cIjogXCIuL2NvbnRlbnQvbW9kZWxzL3RyZWUuanNvblwiLFxuXHRcIi4vbW9kZWxzL3dlaXJkLWNhbnlvbjMuanNvblwiOiBcIi4vY29udGVudC9tb2RlbHMvd2VpcmQtY2FueW9uMy5qc29uXCIsXG5cdFwiLi9wcm9jZWR1cmFsL0N1YmUuanNcIjogXCIuL2NvbnRlbnQvcHJvY2VkdXJhbC9DdWJlLmpzXCIsXG5cdFwiLi9wcm9jZWR1cmFsL0dyYXNzLmpzXCI6IFwiLi9jb250ZW50L3Byb2NlZHVyYWwvR3Jhc3MuanNcIixcblx0XCIuL3Byb2NlZHVyYWwvR3JpZC5qc1wiOiBcIi4vY29udGVudC9wcm9jZWR1cmFsL0dyaWQuanNcIixcblx0XCIuL3Byb2NlZHVyYWwvUXVhZC5qc1wiOiBcIi4vY29udGVudC9wcm9jZWR1cmFsL1F1YWQuanNcIixcblx0XCIuL3Byb2NlZHVyYWwvVGVycmFpbi5qc1wiOiBcIi4vY29udGVudC9wcm9jZWR1cmFsL1RlcnJhaW4uanNcIixcblx0XCIuL3Byb2NlZHVyYWwvVHJpYW5nbGUuanNcIjogXCIuL2NvbnRlbnQvcHJvY2VkdXJhbC9UcmlhbmdsZS5qc1wiLFxuXHRcIi4vcHJvY2VkdXJhbC9UdXJuaW5nVG9yc28uanNcIjogXCIuL2NvbnRlbnQvcHJvY2VkdXJhbC9UdXJuaW5nVG9yc28uanNcIixcblx0XCIuL3NoYWRlcnMvYW1iaWVudC5mcmFnXCI6IFwiLi9jb250ZW50L3NoYWRlcnMvYW1iaWVudC5mcmFnXCIsXG5cdFwiLi9zaGFkZXJzL2FtYmllbnQudmVydFwiOiBcIi4vY29udGVudC9zaGFkZXJzL2FtYmllbnQudmVydFwiLFxuXHRcIi4vc2hhZGVycy9kZWJ1Zy11di5mcmFnXCI6IFwiLi9jb250ZW50L3NoYWRlcnMvZGVidWctdXYuZnJhZ1wiLFxuXHRcIi4vc2hhZGVycy9kZWJ1Zy11di52ZXJ0XCI6IFwiLi9jb250ZW50L3NoYWRlcnMvZGVidWctdXYudmVydFwiLFxuXHRcIi4vc2hhZGVycy9wb2ludGxpZ2h0LmZyYWdcIjogXCIuL2NvbnRlbnQvc2hhZGVycy9wb2ludGxpZ2h0LmZyYWdcIixcblx0XCIuL3NoYWRlcnMvcG9pbnRsaWdodC52ZXJ0XCI6IFwiLi9jb250ZW50L3NoYWRlcnMvcG9pbnRsaWdodC52ZXJ0XCIsXG5cdFwiLi9zaGFkZXJzL3NoYWRvdy5mcmFnXCI6IFwiLi9jb250ZW50L3NoYWRlcnMvc2hhZG93LmZyYWdcIixcblx0XCIuL3NoYWRlcnMvc2hhZG93LnZlcnRcIjogXCIuL2NvbnRlbnQvc2hhZGVycy9zaGFkb3cudmVydFwiLFxuXHRcIi4vc2hhZGVycy9zdW5saWdodC10ZXJyYWluLmZyYWdcIjogXCIuL2NvbnRlbnQvc2hhZGVycy9zdW5saWdodC10ZXJyYWluLmZyYWdcIixcblx0XCIuL3NoYWRlcnMvc3VubGlnaHQtdGVycmFpbi52ZXJ0XCI6IFwiLi9jb250ZW50L3NoYWRlcnMvc3VubGlnaHQtdGVycmFpbi52ZXJ0XCIsXG5cdFwiLi9zaGFkZXJzL3N1bmxpZ2h0LmZyYWdcIjogXCIuL2NvbnRlbnQvc2hhZGVycy9zdW5saWdodC5mcmFnXCIsXG5cdFwiLi9zaGFkZXJzL3N1bmxpZ2h0LnZlcnRcIjogXCIuL2NvbnRlbnQvc2hhZGVycy9zdW5saWdodC52ZXJ0XCIsXG5cdFwiLi9zaGFkZXJzL3RlcnJhaW4uZnJhZ1wiOiBcIi4vY29udGVudC9zaGFkZXJzL3RlcnJhaW4uZnJhZ1wiLFxuXHRcIi4vc2hhZGVycy90ZXJyYWluLnZlcnRcIjogXCIuL2NvbnRlbnQvc2hhZGVycy90ZXJyYWluLnZlcnRcIlxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9jb250ZW50IHJlY3Vyc2l2ZSBcXFxcLihqc3xqc29ufHZlcnR8ZnJhZ3xwbmd8anBnKSRcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQgXFwuKGpzfGpzb258dmVydHxmcmFnfHBuZ3xqcGcpJFxuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50IHJlY3Vyc2l2ZSBcXC4oanN8anNvbnx2ZXJ0fGZyYWd8cG5nfGpwZykkXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1widGlueUdyYXNzTWVzaFwiOntcImZ1bmN0aW9uXCI6XCJHcmFzc1wiLFwicGFyYW1zXCI6e1wib3JpZ2luXCI6WzAsLTEsMF19fSxcIm1lZGl1bUdyYXNzR2VvbWV0cnlcIjp7XCJzaGFwZXNcIjp7XCJ0ZW1wbGF0ZVwiOntcInNoYXBlXCI6XCJjdWJlXCJ9LFwicG9zaXRpb25cIjp7XCJtaW5cIjpbLTEuNSwwLjUsLTEuNV0sXCJtYXhcIjpbMS41LDAuNSwxLjVdfSxcIm9yaWVudGF0aW9uXCI6e1wibWluXCI6WzAsLTE4MCwwXSxcIm1heFwiOlswLDE4MCwwXX0sXCJzY2FsZVwiOntcIm1pblwiOlswLjIsMSwwXSxcIm1heFwiOlswLjIsOSwwXX0sXCJjb3VudFwiOjQ1LFwic2VlZFwiOjB9fSxcInRyZWVNZXNoXCI6e1wiZnVuY3Rpb25cIjpcIlR1cm5pbmdUb3Jzb1wiLFwicGFyYW1zXCI6e1wib3JpZ2luXCI6WzAsMCwwXSxcInNjYWxlXCI6WzAuOSwwLjksMC45XSxcInNlZ21lbnRzXCI6MzAsXCJ0d2lzdFwiOjUsXCJzaHJpbmtcIjowLjE1LFwiaGVpZ2h0XCI6OH19LFwiZmxvb3JcIjp7XCJzaGFkb3dcIjpmYWxzZSxcIm9yaWVudGF0aW9uXCI6WzAsMCwwXSxcImFsYmVkb1wiOlwiI0I4NkEyMlwiLFwibWVzaFwiOntcImZ1bmN0aW9uXCI6XCJRdWFkXCIsXCJwYXJhbXNcIjp7XCJwb3NpdGlvblwiOlswLC0wLjAwMSwwXSxcIm9yaWVudGF0aW9uXCI6Wy05MCwwLDBdLFwic2NhbGVcIjpbNzUsNTAsMV19fX0sXCJ0aW55R3Jhc3NGaWVsZFwiOntcInBhcmVudFwiOlwiQGZsb29yXCIsXCJjaGlsZHJlblwiOntcInRlbXBsYXRlXCI6e1wiYWxiZWRvXCI6XCIjRTk4NDJDXCIsXCJtZXNoXCI6XCJAdGlueUdyYXNzTWVzaFwifSxcInBvc2l0aW9uXCI6e1wibWluXCI6Wy03NSwwLC01MF0sXCJtYXhcIjpbNzUsMCw1MF19LFwib3JpZW50YXRpb25cIjp7XCJtaW5cIjpbMCwtMTgwLDBdLFwibWF4XCI6WzAsMTgwLDBdfSxcInNjYWxlXCI6e1wibWluXCI6WzAuMiwwLjEsMC4yXSxcIm1heFwiOlsxLDAuMywxXX0sXCJjb3VudFwiOjQwMDB9fSxcIm1lZGl1bUdyYXNzRmllbGRcIjp7XCJwYXJlbnRcIjpcIkBmbG9vclwiLFwiY2hpbGRyZW5cIjp7XCJ0ZW1wbGF0ZVwiOntcImFsYmVkb1wiOlwic2FuZHlicm93blwiLFwiZ2VvbWV0cnlcIjpcIkBtZWRpdW1HcmFzc0dlb21ldHJ5XCJ9LFwicG9zaXRpb25cIjp7XCJtaW5cIjpbLTc1LDAsLTUwXSxcIm1heFwiOls3NSwwLDUwXX0sXCJvcmllbnRhdGlvblwiOntcIm1pblwiOlswLC00NSwwXSxcIm1heFwiOlswLDQ1LDBdfSxcImNvdW50XCI6NTAsXCJzZWVkXCI6MTIxMX19LFwidHJlZUZpZWxkXCI6e1wicGFyZW50XCI6XCJAZmxvb3JcIixcImNoaWxkcmVuXCI6e1widGVtcGxhdGVcIjp7XCJhbGJlZG9cIjpcImJyb3duXCIsXCJtZXNoXCI6XCJAdHJlZU1lc2hcIn0sXCJwb3NpdGlvblwiOntcIm1pblwiOlstNzUsMCwtNTBdLFwibWF4XCI6Wzc1LDAsNTBdfSxcIm9yaWVudGF0aW9uXCI6e1wibWluXCI6Wy01LC0xODAsLTVdLFwibWF4XCI6WzUsMTgwLDVdfSxcInNjYWxlXCI6e1wibWluXCI6WzAuOSwwLjUsMC45XSxcIm1heFwiOlsxLjEsMS4yLDEuMV19LFwiY291bnRcIjo1MCxcInNlZWRcIjoxMjExfX0sXCJzdW5cIjp7XCJsaWdodFwiOntcInR5cGVcIjpcImRpcmVjdGlvbmFsXCIsXCJjb2xvclwiOlwid2hpdGVcIixcImludGVuc2l0eVwiOjAuNSxcImRpcmVjdGlvblwiOlsxLC0xLC0wLjhdfX0sXCJjYW1lcmFcIjp7XCJmb3ZcIjo5MCxcIm5lYXJcIjowLjEsXCJmYXJcIjoxMDAsXCJwb3NpdGlvblwiOls0LDEwLDUwXSxcImxvb2thdFwiOls2LDIuOCwwXSxcImNsZWFyQ29sb3JcIjpcInNreWJsdWVcIn19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L21vZGVscy9mb3Jlc3QuanNvblxuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L21vZGVscy9mb3Jlc3QuanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImZsb29yR2VvbWV0cnlcIjp7XCJzaGFwZXNcIjpbe1wic2hhcGVcIjpcInF1YWRcIixcIm9yaWVudGF0aW9uXCI6Wy05MCwwLDBdLFwic2NhbGVcIjpbNjIsNjIsMV19XX0sXCJ0aGluR3Jhc3NHZW9tZXRyeVwiOntcInNoYXBlc1wiOntcInRlbXBsYXRlXCI6e1wic2hhcGVcIjpcImN1YmVcIn0sXCJwb3NpdGlvblwiOntcIm1pblwiOlstNS41LDAuNSwtNS41XSxcIm1heFwiOls1LjUsMC41LDUuNV19LFwib3JpZW50YXRpb25cIjp7XCJtaW5cIjpbLTUsLTI1LC01XSxcIm1heFwiOls1LDI1LDVdfSxcInNjYWxlXCI6e1wibWluXCI6WzAuMSwxLDBdLFwibWF4XCI6WzAuMTUsMSwwXX0sXCJjb3VudFwiOjIwLFwic2VlZFwiOjB9fSxcIm1lZGl1bUdyYXNzR2VvbWV0cnlcIjp7XCJzaGFwZXNcIjp7XCJ0ZW1wbGF0ZVwiOntcInNoYXBlXCI6XCJjdWJlXCJ9LFwicG9zaXRpb25cIjp7XCJtaW5cIjpbLTMsMC41LC0zXSxcIm1heFwiOlszLDAuNSwzXX0sXCJvcmllbnRhdGlvblwiOntcIm1pblwiOlstNSwtMjUsLTVdLFwibWF4XCI6WzUsMjUsNV19LFwic2NhbGVcIjp7XCJtaW5cIjpbMC43LDEsMF0sXCJtYXhcIjpbMC44LDEsMF19LFwiY291bnRcIjoxMCxcInNlZWRcIjowfX0sXCJzbWFsbEdyYXNzR2VvbWV0cnlcIjp7XCJzaGFwZXNcIjp7XCJ0ZW1wbGF0ZVwiOntcInNoYXBlXCI6XCJjdWJlXCJ9LFwicG9zaXRpb25cIjp7XCJtaW5cIjpbLTMsMC41LC0zXSxcIm1heFwiOlszLDAuNSwzXX0sXCJvcmllbnRhdGlvblwiOntcIm1pblwiOlstNSwtMjUsLTVdLFwibWF4XCI6WzUsMjUsNV19LFwic2NhbGVcIjp7XCJtaW5cIjpbMC43LDEsMF0sXCJtYXhcIjpbMC44LDEsMF19LFwiY291bnRcIjoxNSxcInNlZWRcIjowfX0sXCJmbG9vclwiOntcInNoYWRvd1wiOmZhbHNlLFwiZ2VvbWV0cnlcIjpcIkBmbG9vckdlb21ldHJ5XCIsXCJhbGJlZG9cIjpcIiNCODZBMjJcIixcInBvc2l0aW9uXCI6WzAsLTAuMDEsMF19LFwidGFsbEdyYXNzXCI6e1wicGFyZW50XCI6XCJAZmxvb3JcIixcInBvc2l0aW9uXCI6WzAsMCwwXSxcIm9yaWVudGF0aW9uXCI6WzAsMCwwXSxcImNoaWxkcmVuXCI6e1widGVtcGxhdGVcIjp7XCJzaGFkb3dcIjpmYWxzZSxcImFsYmVkb1wiOlwiI0U5ODQyQ1wiLFwiZ2VvbWV0cnlcIjpcIkB0aGluR3Jhc3NHZW9tZXRyeVwifSxcInBvc2l0aW9uXCI6e1wibWluXCI6Wy0zMCwwLC0zMF0sXCJtYXhcIjpbMzAsMCwwXX0sXCJvcmllbnRhdGlvblwiOntcIm1pblwiOlstMSwtNDUsLTFdLFwibWF4XCI6WzEsNDUsMV19LFwic2NhbGVcIjp7XCJtaW5cIjpbMSw1LDFdLFwibWF4XCI6WzEsMTAsMV19LFwiY291bnRcIjoxNjAsXCJzZWVkXCI6NTAyfX0sXCJtZWRpdW1HcmFzc1wiOntcInBhcmVudFwiOlwiQGZsb29yXCIsXCJwb3NpdGlvblwiOlswLDAsMF0sXCJvcmllbnRhdGlvblwiOlswLDAsMF0sXCJjaGlsZHJlblwiOntcInRlbXBsYXRlXCI6e1wic2hhZG93XCI6ZmFsc2UsXCJhbGJlZG9cIjpcIiM3NzVCRDRcIixcImdlb21ldHJ5XCI6XCJAbWVkaXVtR3Jhc3NHZW9tZXRyeVwifSxcInBvc2l0aW9uXCI6e1wibWluXCI6Wy0zMCwwLC01XSxcIm1heFwiOlszMCwwLDIwXX0sXCJvcmllbnRhdGlvblwiOntcIm1pblwiOlstMSwtNDUsLTFdLFwibWF4XCI6WzEsNDUsMV19LFwic2NhbGVcIjp7XCJtaW5cIjpbMSwzLDFdLFwibWF4XCI6WzEsNSwxXX0sXCJjb3VudFwiOjE2MCxcInNlZWRcIjo4ODJ9fSxcInNtYWxsR3Jhc3NcIjp7XCJwYXJlbnRcIjpcIkBmbG9vclwiLFwicG9zaXRpb25cIjpbMCwwLDBdLFwib3JpZW50YXRpb25cIjpbMCwwLDBdLFwiY2hpbGRyZW5cIjp7XCJ0ZW1wbGF0ZVwiOntcInNoYWRvd1wiOnRydWUsXCJhbGJlZG9cIjpcInRvbWF0b1wiLFwiZ2VvbWV0cnlcIjpcIkBzbWFsbEdyYXNzR2VvbWV0cnlcIn0sXCJwb3NpdGlvblwiOntcIm1pblwiOlstMzAsMCwyMF0sXCJtYXhcIjpbMzAsMCwzMF19LFwib3JpZW50YXRpb25cIjp7XCJtaW5cIjpbLTEsLTQ1LC0xXSxcIm1heFwiOlsxLDQ1LDFdfSxcInNjYWxlXCI6e1wibWluXCI6WzEsMSwxXSxcIm1heFwiOlsxLDIsMV19LFwiY291bnRcIjoyNjAsXCJzZWVkXCI6ODI2Nzh9fSxcInN1blwiOntcImxpZ2h0XCI6e1widHlwZVwiOlwiZGlyZWN0aW9uYWxcIixcImNvbG9yXCI6XCJ3aGl0ZVwiLFwiaW50ZW5zaXR5XCI6MC41LFwiZGlyZWN0aW9uXCI6WzEsLTEsLTAuOF19fSxcImNhbWVyYVwiOntcImZvdlwiOjEyMCxcIm5lYXJcIjowLjEsXCJmYXJcIjoxMDAsXCJwb3NpdGlvblwiOlstMTAsMjAsNDBdLFwibG9va2F0XCI6Wy01LDAsMF19fVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9tb2RlbHMvZ3Jhc3NXYWxsLmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9tb2RlbHMvZ3Jhc3NXYWxsLmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJ0ZXJyYWluTWVzaFwiOntcImZ1bmN0aW9uXCI6XCJDdWJlXCIsXCJwYXJhbXNcIjp7fX0sXCJ0ZXJyYWluTWVzaDJcIjp7XCJmdW5jdGlvblwiOlwiVGVycmFpblwiLFwicGFyYW1zXCI6e1wib3JpZW50YXRpb25cIjpbLTkwLDAsMF0sXCJwb3NpdGlvblwiOlswLDEsMF0sXCJzY2FsZVwiOlsxLjIsMS4yLDFdfX0sXCJ0ZXJyYWluXCI6e1wic2hhZG93XCI6ZmFsc2UsXCJzaGFkZXJQcm9ncmFtXCI6XCJ0ZXJyYWluXCIsXCJtZXNoXCI6XCJAdGVycmFpbk1lc2hcIixcInBvc2l0aW9uXCI6WzAsMCwtN119LFwidGVycmFpbjJcIjp7XCJzaGFkb3dcIjpmYWxzZSxcInNoYWRlclByb2dyYW1cIjpcInRlcnJhaW5cIixcIm1lc2hcIjpcIkB0ZXJyYWluTWVzaDJcIn0sXCJzdW5cIjp7XCJzaGFkZXJQcm9ncmFtXCI6XCJzdW5saWdodC10ZXJyYWluXCIsXCJsaWdodFwiOntcInR5cGVcIjpcImRpcmVjdGlvbmFsXCIsXCJjb2xvclwiOlwid2hpdGVcIixcImludGVuc2l0eVwiOjAuNSxcImRpcmVjdGlvblwiOlsxLC0xLC0wLjhdfX0sXCJjYW1lcmFcIjp7XCJmb3ZcIjo3MCxcIm5lYXJcIjowLjEsXCJmYXJcIjoxMDAsXCJwb3NpdGlvblwiOlstMC41LDMsMl0sXCJsb29rYXRcIjpbMCwxLDBdfX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvbW9kZWxzL3RlcnJhaW4uanNvblxuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L21vZGVscy90ZXJyYWluLmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSB7XCJmbG9vckdlb21ldHJ5XCI6e1wic2hhcGVzXCI6W3tcInNoYXBlXCI6XCJxdWFkXCIsXCJvcmllbnRhdGlvblwiOlstOTAsMCwwXSxcInNjYWxlXCI6WzYyLDYyLDFdfV19LFwiZ3Jhc3NDbHVzdGVyR2VvbWV0cnlcIjp7XCJzaGFwZXNcIjp7XCJ0ZW1wbGF0ZVwiOntcInNoYXBlXCI6XCJjdWJlXCJ9LFwicG9zaXRpb25cIjp7XCJtaW5cIjpbLTEsMC41LC0xXSxcIm1heFwiOlsxLDAuNSwxXX0sXCJvcmllbnRhdGlvblwiOntcIm1pblwiOlswLC0yNSwwXSxcIm1heFwiOlswLDI1LDBdfSxcInNjYWxlXCI6e1wibWluXCI6WzEsMSwwXSxcIm1heFwiOlsxLDEsMF19LFwiY291bnRcIjoxNSxcInNlZWRcIjowfX0sXCJib3hHZW9tZXRyeVwiOntcInNoYXBlc1wiOlt7XCJzaGFwZVwiOlwiY3ViZVwifV19LFwiZmxvb3JcIjp7XCJzaGFkb3dcIjpmYWxzZSxcImdlb21ldHJ5XCI6XCJAZmxvb3JHZW9tZXRyeVwiLFwiYWxiZWRvXCI6XCIjQjg2QTIyXCIsXCJwb3NpdGlvblwiOlswLC0wLjAxLDBdfSxcImJyb3duR3Jhc3NcIjp7XCJwYXJlbnRcIjpcIkBmbG9vclwiLFwicG9zaXRpb25cIjpbMCwwLDBdLFwib3JpZW50YXRpb25cIjpbMCwwLDBdLFwiY2hpbGRyZW5cIjp7XCJ0ZW1wbGF0ZVwiOntcImFsYmVkb1wiOlwiI0U5ODQyQ1wiLFwiZ2VvbWV0cnlcIjpcIkBncmFzc0NsdXN0ZXJHZW9tZXRyeVwifSxcInBvc2l0aW9uXCI6e1wibWluXCI6Wy0zMCwwLC0zMF0sXCJtYXhcIjpbMzAsMCwzMF19LFwib3JpZW50YXRpb25cIjp7XCJtaW5cIjpbMCwtOTAsMF0sXCJtYXhcIjpbMCw5MCwwXX0sXCJzY2FsZVwiOntcIm1pblwiOlsxLDEsMV0sXCJtYXhcIjpbMSwxLDFdfSxcImNvdW50XCI6MTYwLFwic2VlZFwiOjUwMn19LFwicHVycGxlR3Jhc3NcIjp7XCJwYXJlbnRcIjpcIkBmbG9vclwiLFwicG9zaXRpb25cIjpbMCwwLDBdLFwib3JpZW50YXRpb25cIjpbMCw5MCwwXSxcImNoaWxkcmVuXCI6e1widGVtcGxhdGVcIjp7XCJhbGJlZG9cIjpcIiM3NzVCRDRcIixcImdlb21ldHJ5XCI6XCJAZ3Jhc3NDbHVzdGVyR2VvbWV0cnlcIn0sXCJwb3NpdGlvblwiOntcIm1pblwiOlstMzAsMCwtMzBdLFwibWF4XCI6WzMwLDAsMzBdfSxcIm9yaWVudGF0aW9uXCI6e1wibWluXCI6WzAsLTkwLDBdLFwibWF4XCI6WzAsOTAsMF19LFwic2NhbGVcIjp7XCJtaW5cIjpbMSwxLDFdLFwibWF4XCI6WzEsMSwxXX0sXCJjb3VudFwiOjgwLFwic2VlZFwiOjUwMn19LFwic3VuXCI6e1wibGlnaHRcIjp7XCJ0eXBlXCI6XCJkaXJlY3Rpb25hbFwiLFwiY29sb3JcIjpcIndoaXRlXCIsXCJpbnRlbnNpdHlcIjowLjUsXCJkaXJlY3Rpb25cIjpbMSwtMSwtMC44XX19LFwiY2FtZXJhXCI6e1wiZm92XCI6OTAsXCJuZWFyXCI6MC4xLFwiZmFyXCI6MTAwLFwicG9zaXRpb25cIjpbMCwyMCw0MF0sXCJsb29rYXRcIjpbMCwwLDBdfX1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvbW9kZWxzL3Rlc3QyLmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9tb2RlbHMvdGVzdDIuanNvblxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHtcImZsb29yR2VvbWV0cnlcIjp7XCJzaGFwZXNcIjpbe1wic2hhcGVcIjpcInF1YWRcIixcInNjYWxlXCI6WzQsNCwxXSxcIm9yaWVudGF0aW9uXCI6Wy05MCwwLDBdLFwicG9zaXRpb25cIjpbMCwtMC4wMSwwXX1dfSxcImZsb29yMVwiOntcInNoYWRvd1wiOmZhbHNlLFwicG9zaXRpb25cIjpbLTcsMCwtMTBdLFwiZ2VvbWV0cnlcIjpcIkBmbG9vckdlb21ldHJ5XCJ9LFwidHJlZTFcIjp7XCJwYXJlbnRcIjpcIkBmbG9vcjFcIixcImdlb21ldHJ5XCI6e1wic2hhcGVzXCI6W3tcInNoYXBlXCI6XCJjdWJlXCIsXCJwb3NpdGlvblwiOlswLDAuNSwwXX0se1wic2hhcGVcIjpcImN1YmVcIixcInBvc2l0aW9uXCI6WzAsMS41LDBdLFwib3JpZW50YXRpb25cIjpbMCwxNSwwXSxcInNjYWxlXCI6WzAuOCwwLjgsMC44XX0se1wic2hhcGVcIjpcImN1YmVcIixcInBvc2l0aW9uXCI6WzAsMi41LDBdLFwib3JpZW50YXRpb25cIjpbMCwzMCwwXSxcInNjYWxlXCI6WzAuNiwwLjYsMC42XX0se1wic2hhcGVcIjpcImN1YmVcIixcInBvc2l0aW9uXCI6WzAsMy41LDBdLFwib3JpZW50YXRpb25cIjpbMCw0NSwwXSxcInNjYWxlXCI6WzAuNCwwLjQsMC40XX1dfX0sXCJmbG9vcjJcIjp7XCJzaGFkb3dcIjpmYWxzZSxcImFsYmVkb1wiOlwiZGFya3JlZFwiLFwiZ2VvbWV0cnlcIjpcIkBmbG9vckdlb21ldHJ5XCJ9LFwicHJvY2VkdXJhbFRyZWVcIjp7XCJzaGFkb3dcIjp0cnVlLFwibWVzaFwiOntcImZ1bmN0aW9uXCI6XCJUdXJuaW5nVG9yc29cIixcInBhcmFtc1wiOntcIm9yaWdpblwiOlswLDAsMF0sXCJzY2FsZVwiOlswLjksMC45LDAuOV0sXCJzZWdtZW50c1wiOjIwLFwidHdpc3RcIjo1LFwic2hyaW5rXCI6MC4wNCxcImhlaWdodFwiOjV9fX0sXCJzdW5cIjp7XCJsaWdodFwiOntcInR5cGVcIjpcImRpcmVjdGlvbmFsXCIsXCJjb2xvclwiOlwid2hpdGVcIixcImludGVuc2l0eVwiOjAuNSxcImRpcmVjdGlvblwiOlsxLC0xLC0wLjhdfX0sXCJjYW1lcmFcIjp7XCJmb3ZcIjozNSxcIm5lYXJcIjowLjEsXCJmYXJcIjoxMDAsXCJwb3NpdGlvblwiOlswLjUsMTcsMTddLFwibG9va2F0XCI6WzAsOCwwXX19XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L21vZGVscy90cmVlLmpzb25cbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9tb2RlbHMvdHJlZS5qc29uXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0ge1wiZ2VvbWV0cmllc1wiOntcInRlc3RcIjp7XCJzaGFwZVwiOlwidHJpYW5nbGVcIixcImFsYmVkb1wiOlwiLi9zYW5kLmpwZ1wiLFwicG9zaXRpb25cIjpbMCwwLjUsMF0sXCJzY2FsZVwiOjF9LFwidGVzdDJcIjp7XCJzaGFwZVwiOlwicXVhZFwiLFwiYWxiZWRvXCI6XCIuL2Zpc3QuanBnXCIsXCJwb3NpdGlvblwiOlswLDEsMF0sXCJzY2FsZVwiOjIsXCJ1dlNjYWxlXCI6Mn0sXCJncm91bmRcIjp7XCJzaGFwZVwiOlwicXVhZFwiLFwiYWxiZWRvXCI6XCIuL3NhbmQyLmpwZ1wiLFwib3JpZW50YXRpb25cIjpbLTkwLDAsMF0sXCJzY2FsZVwiOjQwMCxcInV2U2NhbGVcIjoxMDB9LFwicm9hZFwiOntcInNoYXBlXCI6XCJwbGFuZVwiLFwiYWxiZWRvXCI6XCJuYXZham93aGl0ZVwiLFwib3JpZW50YXRpb25cIjpbLTkwLDAsMF0sXCJzY2FsZVwiOlsyLDAsMjAwXX0sXCJjbGlmZjFcIjp7XCJzaGFwZVwiOlwiY3ViZVwiLFwiYWxiZWRvXCI6XCJ3aGl0ZVwiLFwicG9zaXRpb25cIjpbMCwxLjUsMF0sXCJzY2FsZVwiOlsxLDMsMV19LFwiY2xpZmYyXCI6e1wic2hhcGVcIjpcImN1YmVcIixcImFsYmVkb1wiOlwic2FuZHlicm93blwiLFwic2NhbGVcIjpbNSwxMCwxXSxcInBvc2l0aW9uXCI6WzAsNSwwXX0sXCJyb2NrXCI6e1wic2hhcGVcIjpcImN1YmVcIixcImFsYmVkb1wiOlwibmF2YWpvd2hpdGVcIixcInNjYWxlXCI6WzAuMiwwLjIsMC4yXSxcInBvc2l0aW9uXCI6WzAsMC4xLDBdfSxcImJpZ3JvY2tcIjp7XCJzaGFwZVwiOlwiY3ViZVwiLFwiYWxiZWRvXCI6XCJuYXZham93aGl0ZVwiLFwic2NhbGVcIjpbMC44LDAuNSwwLjhdLFwicG9zaXRpb25cIjpbMCwwLjE1LDBdfX0sXCJ0ZW1wbGF0ZXNcIjp7XCJyb2NrXCI6e1wic2hhZG93XCI6ZmFsc2UsXCJnZW9tZXRyeVwiOlwiQGdlb21ldHJpZXMucm9ja1wifSxcImJpZ3JvY2tcIjp7XCJzaGFkb3dcIjpmYWxzZSxcImdlb21ldHJ5XCI6XCJAZ2VvbWV0cmllcy5iaWdyb2NrXCJ9fSxcInNjZW5lXCI6e1widGVzdFwiOntcImdlb21ldHJ5XCI6XCJAZ2VvbWV0cmllcy50ZXN0XCIsXCJwb3NpdGlvblwiOlstMywwLDhdLFwib3JpZW50YXRpb25cIjpbMCwtODAsMF19LFwidGVzdDJcIjp7XCJnZW9tZXRyeVwiOlwiQGdlb21ldHJpZXMudGVzdDJcIixcInBvc2l0aW9uXCI6Wy00LDAsMl0sXCJvcmllbnRhdGlvblwiOlstMy41LC05MCwwXX0sXCJncm91bmRcIjp7XCJzaGFkb3dcIjpmYWxzZSxcImdlb21ldHJ5XCI6XCJAZ2VvbWV0cmllcy5ncm91bmRcIixcInBvc2l0aW9uXCI6WzAsMCwwXSxcImNoaWxkcmVuXCI6e1wiY2FtZXJhXCI6e1wicG9zaXRpb25cIjpbLTYsMiwxMF0sXCJsb29rQXRcIjpbMiwxLDBdLFwicHJvamVjdGlvblwiOlwicGVyc3BlY3RpdmVcIixcImZvdlwiOjgwLFwibmVhclwiOjAuMSxcImZhclwiOjEwMH0sXCJyb2FkXCI6e1wiZ2VvbWV0cnlcIjpcIkBnZW9tZXRyaWVzLnJvYWRcIixcInBvc2l0aW9uXCI6Wy01LDAuMDEsMF0sXCJzaGFkb3dcIjpmYWxzZX0sXCJjbGlmZjFcIjp7XCJnZW9tZXRyeVwiOlwiQGdlb21ldHJpZXMuY2xpZmYxXCIsXCJwb3NpdGlvblwiOlstMSwwLDddLFwic2hhZG93XCI6dHJ1ZX0sXCJjbGlmZjJcIjp7XCJzaGFkb3dcIjp0cnVlLFwiZ2VvbWV0cnlcIjpcIkBnZW9tZXRyaWVzLmNsaWZmMlwiLFwicG9zaXRpb25cIjpbMTAsMCwtMTVdfSxcInJvY2tzLWxlZnRcIjp7XCJnZW5lcmF0b3JcIjp7XCJ0ZW1wbGF0ZVwiOlwiQHRlbXBsYXRlcy5yb2NrXCIsXCJtaW5cIjp7XCJwb3NpdGlvblwiOlstMzAsMCwtMjAwXSxcIm9yaWVudGF0aW9uXCI6WzAsMCwwXX0sXCJtYXhcIjp7XCJwb3NpdGlvblwiOlstNi4zLDAsNTBdLFwib3JpZW50YXRpb25cIjpbMjcwLDI3MCwyNzBdfSxcImNvdW50XCI6MTAwMCxcInNlZWRcIjo5NzI5fX0sXCJyb2Nrcy1yaWdodFwiOntcImdlbmVyYXRvclwiOntcInRlbXBsYXRlXCI6XCJAdGVtcGxhdGVzLnJvY2tcIixcIm1pblwiOntcInBvc2l0aW9uXCI6Wy00LDAsLTIwMF0sXCJvcmllbnRhdGlvblwiOlswLDAsMF19LFwibWF4XCI6e1wicG9zaXRpb25cIjpbNTAsMCw1MF0sXCJvcmllbnRhdGlvblwiOlsyNzAsMjcwLDI3MF19LFwiY291bnRcIjoyMDAwLFwic2VlZFwiOjgyOTR9fSxcImJpZ3JvY2tzLXJpZ2h0XCI6e1wiZ2VuZXJhdG9yXCI6e1widGVtcGxhdGVcIjpcIkB0ZW1wbGF0ZXMuYmlncm9ja1wiLFwibWluXCI6e1wicG9zaXRpb25cIjpbLTQsMCwtMjAwXSxcIm9yaWVudGF0aW9uXCI6WzAsMCwwXX0sXCJtYXhcIjp7XCJwb3NpdGlvblwiOls1MCwwLDUwXSxcIm9yaWVudGF0aW9uXCI6WzI3MCwyNzAsMjcwXX0sXCJjb3VudFwiOjUwMCxcInNlZWRcIjoyMjI2fX0sXCJzdW5cIjp7XCJsaWdodFwiOntcInR5cGVcIjpcImRpcmVjdGlvbmFsXCIsXCJjb2xvclwiOlwid2hpdGVcIixcImludGVuc2l0eVwiOjAuNSxcImRpcmVjdGlvblwiOlsxLC0xLDAuNF19fX19fSxcImV4cG9ydFwiOlwiQHNjZW5lXCIsXCJjYW1lcmFcIjpcIkBzY2VuZS5ncm91bmQuY2hpbGRyZW4uY2FtZXJhXCIsXCJiYWNrQ29sb3JcIjpcInNreWJsdWVcIn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvbW9kZWxzL3dlaXJkLWNhbnlvbjMuanNvblxuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L21vZGVscy93ZWlyZC1jYW55b24zLmpzb25cbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IE1hdGhVdGlscyBmcm9tICcuLi8uLi9zcmMvTWF0aFV0aWxzLmpzJztcbmltcG9ydCBNZXNoIGZyb20gJy4uLy4uL3NyYy9NZXNoLmpzJztcbmltcG9ydCBNYXQzIGZyb20gJy4uLy4uL3NyYy9NYXQzLmpzJztcbmltcG9ydCBWZWMzIGZyb20gJy4uLy4uL3NyYy9WZWMzLmpzJztcbmltcG9ydCBRdWFkIGZyb20gJy4vUXVhZC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG9yaWdpbiA9IFZlYzMuemVybygpLFxuICAgICAgICBwb3NpdGlvbiA9IFZlYzMuemVybygpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IFZlYzMuemVybygpLFxuICAgICAgICBzY2FsZSA9IFZlYzMub25lKClcbiAgICB9ID0gcGFyYW1zO1xuXG4gICAgY29uc3QgbWVzaCA9IE1lc2gubWVyZ2UoXG4gICAgICAgIFF1YWQoe1xuICAgICAgICAgICAgcG9zaXRpb246IFswLCAwLCAxXSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBbMCwgMCwgMF1cbiAgICAgICAgfSksXG4gICAgICAgIFF1YWQoe1xuICAgICAgICAgICAgcG9zaXRpb246IFsxLCAwLCAwXSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBbMCwgOTAsIDBdXG4gICAgICAgIH0pLFxuICAgICAgICBRdWFkKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgMCwgLTFdLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFswLCAxODAsIDBdXG4gICAgICAgIH0pLFxuICAgICAgICBRdWFkKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbLTEsIDAsIDBdLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFswLCAtOTAsIDBdXG4gICAgICAgIH0pLFxuICAgICAgICBRdWFkKHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgMSwgMF0sXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogWy05MCwgMCwgMF1cbiAgICAgICAgfSksXG4gICAgICAgIFF1YWQoe1xuICAgICAgICAgICAgcG9zaXRpb246IFswLCAtMSwgMF0sXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogWzkwLCAwLCAwXVxuICAgICAgICB9KVxuICAgICk7XG5cbiAgICBNZXNoLmFwcGx5U2NhbGUobWVzaCwgc2NhbGUpO1xuICAgIE1lc2guYXBwbHlSb3RhdGlvbihtZXNoLCBNYXQzLmZyb21FdWxlckFuZ2xlcyhvcmllbnRhdGlvbi5tYXAoTWF0aFV0aWxzLmRlZ1RvUmFkKSkpO1xuICAgIE1lc2guYXBwbHlUcmFuc2xhdGlvbihtZXNoLCBwb3NpdGlvbik7XG4gICAgTWVzaC5hcHBseU9yaWdpbihtZXNoLCBvcmlnaW4pO1xuICAgIE1lc2guY2FsY3VsYXRlTm9ybWFscyhtZXNoKTtcblxuICAgIHJldHVybiBtZXNoO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L3Byb2NlZHVyYWwvQ3ViZS5qc1xuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3Byb2NlZHVyYWwvQ3ViZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgQXJyYXlVdGlscyBmcm9tICcuLi8uLi9zcmMvQXJyYXlVdGlscy5qcyc7XG5pbXBvcnQgTWF0aFV0aWxzIGZyb20gJy4uLy4uL3NyYy9NYXRoVXRpbHMuanMnO1xuaW1wb3J0IE1lc2ggZnJvbSAnLi4vLi4vc3JjL01lc2guanMnO1xuaW1wb3J0IFZlYzMgZnJvbSAnLi4vLi4vc3JjL1ZlYzMuanMnO1xuaW1wb3J0IE1hdDMgZnJvbSAnLi4vLi4vc3JjL01hdDMuanMnO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gJy4vVHJpYW5nbGUuanMnO1xuaW1wb3J0IFF1YWQgZnJvbSAnLi9RdWFkLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgb3JpZ2luID0gVmVjMy56ZXJvKCksXG4gICAgICAgIHBvc2l0aW9uID0gVmVjMy56ZXJvKCksXG4gICAgICAgIG9yaWVudGF0aW9uID0gVmVjMy56ZXJvKCksXG4gICAgICAgIHNjYWxlID0gVmVjMy5vbmUoKSxcbiAgICB9ID0gcGFyYW1zO1xuXG4gICAgbGV0IG1lc2ggPSBNZXNoLm1lcmdlKFxuICAgICAgICBUd29TaWRlZFRyaWFuZ2xlKCksXG4gICAgICAgIFR3b1NpZGVkVHJpYW5nbGUoeyBvcmllbnRhdGlvbjogWzAsIDQ1LCAwXSB9KSxcbiAgICAgICAgVHdvU2lkZWRUcmlhbmdsZSh7IG9yaWVudGF0aW9uOiBbMCwgOTAsIDBdIH0pLFxuICAgICAgICBUd29TaWRlZFRyaWFuZ2xlKHsgb3JpZW50YXRpb246IFswLCAxMzUsIDBdIH0pXG4gICAgKTtcblxuICAgIE1lc2guYXBwbHlTY2FsZShtZXNoLCBzY2FsZSk7XG4gICAgTWVzaC5hcHBseVJvdGF0aW9uKG1lc2gsIE1hdDMuZnJvbUV1bGVyQW5nbGVzKG9yaWVudGF0aW9uLm1hcChNYXRoVXRpbHMuZGVnVG9SYWQpKSk7XG4gICAgTWVzaC5hcHBseVRyYW5zbGF0aW9uKG1lc2gsIHBvc2l0aW9uKTtcbiAgICBNZXNoLmFwcGx5T3JpZ2luKG1lc2gsIG9yaWdpbik7XG5cbiAgICByZXR1cm4gbWVzaDtcbn07XG5cbmZ1bmN0aW9uIFR3b1NpZGVkVHJpYW5nbGUocGFyYW1zID0ge30pIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG9yaWdpbiA9IFZlYzMuemVybygpLFxuICAgICAgICBwb3NpdGlvbiA9IFZlYzMuemVybygpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IFZlYzMuemVybygpLFxuICAgICAgICBzY2FsZSA9IFZlYzMub25lKCksXG4gICAgfSA9IHBhcmFtcztcblxuICAgIGNvbnN0IG1lc2ggPSBNZXNoLm1lcmdlKFxuICAgICAgICBUcmlhbmdsZSgpLFxuICAgICAgICBUcmlhbmdsZSh7IG9yaWVudGF0aW9uOiBbMCwgMTgwLCAwXSB9KVxuICAgICk7XG5cbiAgICBNZXNoLmFwcGx5U2NhbGUobWVzaCwgc2NhbGUpO1xuICAgIE1lc2guYXBwbHlSb3RhdGlvbihtZXNoLCBNYXQzLmZyb21FdWxlckFuZ2xlcyhvcmllbnRhdGlvbi5tYXAoTWF0aFV0aWxzLmRlZ1RvUmFkKSkpO1xuICAgIE1lc2guYXBwbHlUcmFuc2xhdGlvbihtZXNoLCBwb3NpdGlvbik7XG4gICAgTWVzaC5hcHBseU9yaWdpbihtZXNoLCBvcmlnaW4pO1xuXG4gICAgcmV0dXJuIG1lc2g7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvcHJvY2VkdXJhbC9HcmFzcy5qc1xuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3Byb2NlZHVyYWwvR3Jhc3MuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IE1hdGhVdGlscyBmcm9tICcuLi8uLi9zcmMvTWF0aFV0aWxzLmpzJztcbmltcG9ydCBWZWMzIGZyb20gJy4uLy4uL3NyYy9WZWMzLmpzJztcbmltcG9ydCBNYXQzIGZyb20gJy4uLy4uL3NyYy9NYXQzLmpzJztcbmltcG9ydCBNZXNoIGZyb20gJy4uLy4uL3NyYy9NZXNoLmpzJztcbmltcG9ydCBRdWFkIGZyb20gJy4vUXVhZC5qcyc7XG5cbmNvbnN0IFBPU0lUSU9OUyA9IE9iamVjdC5mcmVlemUoW1xuICAgIFstMSwgLTEsIDBdLFxuICAgIFsxLCAtMSwgMF0sXG4gICAgWzEsIDEsIDBdLFxuXG4gICAgWzEsIDEsIDBdLFxuICAgIFstMSwgMSwgMF0sXG4gICAgWy0xLCAtMSwgMF0sXG5dKTtcblxuY29uc3QgTk9STUFMUyA9IE9iamVjdC5mcmVlemUoW1xuICAgIFswLCAwLCAxXSxcbiAgICBbMCwgMCwgMV0sXG4gICAgWzAsIDAsIDFdLFxuXG4gICAgWzAsIDAsIDFdLFxuICAgIFswLCAwLCAxXSxcbiAgICBbMCwgMCwgMV0sXG5dKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHBhcmFtcykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgc2NhbGUgPSBWZWMzLm9uZSgpLFxuICAgICAgICBvcmlnaW4gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgcG9zaXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgY2VsbHMgPSAyMFxuICAgIH0gPSBwYXJhbXMgfHwge307XG5cbiAgICBjb25zdCBoYWxmR3JpZFNpemUgPSAxLjA7XG4gICAgY29uc3QgaGFsZkNlbGxTaXplID0gaGFsZkdyaWRTaXplIC8gY2VsbHM7XG4gICAgY29uc3QgY2VsbFNpemUgPSBoYWxmQ2VsbFNpemUgKiAyLjA7XG4gICAgY29uc3Qgc3RhcnRQb3MgPSBbLWhhbGZHcmlkU2l6ZSArIGhhbGZDZWxsU2l6ZSwgLWhhbGZHcmlkU2l6ZSArIGhhbGZDZWxsU2l6ZSwgMF07XG5cbiAgICBjb25zdCBtZXNoZXMgPSBbXTtcbiAgICBmb3IobGV0IHggPSAwOyB4IDwgY2VsbHM7IHgrKykge1xuICAgICAgICBmb3IobGV0IHkgPSAwOyB5IDwgY2VsbHM7IHkrKykge1xuICAgICAgICAgICAgbWVzaGVzLnB1c2goUXVhZCh7XG4gICAgICAgICAgICAgICAgc2NhbGU6IFtoYWxmQ2VsbFNpemUsIGhhbGZDZWxsU2l6ZSwgMV0sXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IFZlYzMuYWRkKHN0YXJ0UG9zLCBbY2VsbFNpemUgKiB4LCBjZWxsU2l6ZSAqIHksIDBdKVxuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgbWVzaCA9IE1lc2gubWVyZ2UoLi4ubWVzaGVzKTtcblxuICAgIE1lc2guYXBwbHlTY2FsZShtZXNoLCBzY2FsZSk7XG4gICAgTWVzaC5hcHBseVJvdGF0aW9uKG1lc2gsIE1hdDMuZnJvbUV1bGVyQW5nbGVzKG9yaWVudGF0aW9uLm1hcChNYXRoVXRpbHMuZGVnVG9SYWQpKSk7XG4gICAgTWVzaC5hcHBseVRyYW5zbGF0aW9uKG1lc2gsIHBvc2l0aW9uKTtcbiAgICBNZXNoLmFwcGx5T3JpZ2luKG1lc2gsIG9yaWdpbik7XG5cbiAgICByZXR1cm4gbWVzaDtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9wcm9jZWR1cmFsL0dyaWQuanNcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9wcm9jZWR1cmFsL0dyaWQuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IE1hdGhVdGlscyBmcm9tICcuLi8uLi9zcmMvTWF0aFV0aWxzLmpzJztcbmltcG9ydCBWZWMzIGZyb20gJy4uLy4uL3NyYy9WZWMzLmpzJztcbmltcG9ydCBNYXQzIGZyb20gJy4uLy4uL3NyYy9NYXQzLmpzJztcbmltcG9ydCBNZXNoIGZyb20gJy4uLy4uL3NyYy9NZXNoLmpzJztcblxuY29uc3QgUE9TSVRJT05TID0gT2JqZWN0LmZyZWV6ZShbXG4gICAgWy0xLCAtMSwgMF0sXG4gICAgWzEsIC0xLCAwXSxcbiAgICBbMSwgMSwgMF0sXG5cbiAgICBbMSwgMSwgMF0sXG4gICAgWy0xLCAxLCAwXSxcbiAgICBbLTEsIC0xLCAwXSxcbl0pO1xuXG5jb25zdCBOT1JNQUxTID0gT2JqZWN0LmZyZWV6ZShbXG4gICAgWzAsIDAsIDFdLFxuICAgIFswLCAwLCAxXSxcbiAgICBbMCwgMCwgMV0sXG5cbiAgICBbMCwgMCwgMV0sXG4gICAgWzAsIDAsIDFdLFxuICAgIFswLCAwLCAxXSxcbl0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBzY2FsZSA9IFZlYzMub25lKCksXG4gICAgICAgIG9yaWdpbiA9IFZlYzMuemVybygpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IFZlYzMuemVybygpLFxuICAgICAgICBwb3NpdGlvbiA9IFZlYzMuemVybygpLFxuICAgIH0gPSBwYXJhbXMgfHwge307XG5cbiAgICBjb25zdCBtZXNoID0ge1xuICAgICAgICBwb3NpdGlvbnM6IFBPU0lUSU9OUyxcbiAgICAgICAgbm9ybWFsczogTk9STUFMUyxcbiAgICAgICAgbW9kZTogJ1RSSUFOR0xFUydcbiAgICB9O1xuXG4gICAgTWVzaC5hcHBseVNjYWxlKG1lc2gsIHNjYWxlKTtcbiAgICBNZXNoLmFwcGx5Um90YXRpb24obWVzaCwgTWF0My5mcm9tRXVsZXJBbmdsZXMob3JpZW50YXRpb24ubWFwKE1hdGhVdGlscy5kZWdUb1JhZCkpKTtcbiAgICBNZXNoLmFwcGx5VHJhbnNsYXRpb24obWVzaCwgcG9zaXRpb24pO1xuICAgIE1lc2guYXBwbHlPcmlnaW4obWVzaCwgb3JpZ2luKTtcblxuICAgIHJldHVybiBtZXNoO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L3Byb2NlZHVyYWwvUXVhZC5qc1xuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3Byb2NlZHVyYWwvUXVhZC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgTWF0aFV0aWxzIGZyb20gJy4uLy4uL3NyYy9NYXRoVXRpbHMuanMnO1xuaW1wb3J0IFZlYzMgZnJvbSAnLi4vLi4vc3JjL1ZlYzMuanMnO1xuaW1wb3J0IE1hdDMgZnJvbSAnLi4vLi4vc3JjL01hdDMuanMnO1xuaW1wb3J0IE1lc2ggZnJvbSAnLi4vLi4vc3JjL01lc2guanMnO1xuaW1wb3J0IEdyaWQgZnJvbSAnLi9HcmlkLmpzJztcblxuY29uc3QgUE9TSVRJT05TID0gT2JqZWN0LmZyZWV6ZShbXG4gICAgWy0xLCAtMSwgMF0sXG4gICAgWzEsIC0xLCAwXSxcbiAgICBbMSwgMSwgMF0sXG5cbiAgICBbMSwgMSwgMF0sXG4gICAgWy0xLCAxLCAwXSxcbiAgICBbLTEsIC0xLCAwXSxcbl0pO1xuXG5jb25zdCBOT1JNQUxTID0gT2JqZWN0LmZyZWV6ZShbXG4gICAgWzAsIDAsIDFdLFxuICAgIFswLCAwLCAxXSxcbiAgICBbMCwgMCwgMV0sXG5cbiAgICBbMCwgMCwgMV0sXG4gICAgWzAsIDAsIDFdLFxuICAgIFswLCAwLCAxXSxcbl0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBzY2FsZSA9IFZlYzMub25lKCksXG4gICAgICAgIG9yaWdpbiA9IFZlYzMuemVybygpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IFZlYzMuemVybygpLFxuICAgICAgICBwb3NpdGlvbiA9IFZlYzMuemVybygpLFxuICAgIH0gPSBwYXJhbXMgfHwge307XG5cbiAgICBjb25zdCBtZXNoID0gR3JpZCgpO1xuXG4gICAgTWVzaC5hcHBseVNjYWxlKG1lc2gsIHNjYWxlKTtcbiAgICBNZXNoLmFwcGx5Um90YXRpb24obWVzaCwgTWF0My5mcm9tRXVsZXJBbmdsZXMob3JpZW50YXRpb24ubWFwKE1hdGhVdGlscy5kZWdUb1JhZCkpKTtcbiAgICBNZXNoLmFwcGx5VHJhbnNsYXRpb24obWVzaCwgcG9zaXRpb24pO1xuICAgIE1lc2guYXBwbHlPcmlnaW4obWVzaCwgb3JpZ2luKTtcblxuICAgIG1lc2gucG9zaXRpb25zID0gbWVzaC5wb3NpdGlvbnMubWFwKHBvc2l0aW9uID0+IHtcbiAgICAgICAgcG9zaXRpb24gPSBWZWMzLmNsb25lKHBvc2l0aW9uKTtcbiAgICAgICAgcG9zaXRpb25bMV0gKj0gTWF0aC5zaW4oKChNYXRoVXRpbHMuY2xhbXAocG9zaXRpb25bMF0sIC0xLjAsIDEuMCkgKyAxLjApIC8gMi4wKSAqIE1hdGguUEkpO1xuICAgICAgICBwb3NpdGlvblsxXSAqPSBNYXRoLnNpbigoKE1hdGhVdGlscy5jbGFtcChwb3NpdGlvblsyXSwgLTEuMCwgMS4wKSArIDEuMCkgLyAyLjApICogTWF0aC5QSSk7XG4gICAgICAgIHBvc2l0aW9uWzFdID0gMS4wIC0gcG9zaXRpb25bMV0gKiAxLjk7XG5cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9uO1xuICAgIH0pO1xuXG4gICAgTWVzaC5jYWxjdWxhdGVOb3JtYWxzKG1lc2gpO1xuXG4gICAgcmV0dXJuIG1lc2g7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvcHJvY2VkdXJhbC9UZXJyYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvcHJvY2VkdXJhbC9UZXJyYWluLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBBcnJheVV0aWxzIGZyb20gJy4uLy4uL3NyYy9BcnJheVV0aWxzLmpzJztcbmltcG9ydCBNYXRoVXRpbHMgZnJvbSAnLi4vLi4vc3JjL01hdGhVdGlscy5qcyc7XG5pbXBvcnQgVmVjMyBmcm9tICcuLi8uLi9zcmMvVmVjMy5qcyc7XG5pbXBvcnQgTWF0MyBmcm9tICcuLi8uLi9zcmMvTWF0My5qcyc7XG5cbmNvbnN0IFBPU0lUSU9OUyA9IE9iamVjdC5mcmVlemUoW1xuICAgIFswLCAxLCAwXSxcbiAgICBbLTEsIC0xLCAwXSxcbiAgICBbMSwgLTEsIDBdLFxuXSk7XG5cbmNvbnN0IE5PUk1BTFMgPSBPYmplY3QuZnJlZXplKFtcbiAgICBbMCwgMCwgMV0sXG4gICAgWzAsIDAsIDFdLFxuICAgIFswLCAwLCAxXSxcbl0pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBzY2FsZSA9IFZlYzMub25lKCksXG4gICAgICAgIG9yaWdpbiA9IFZlYzMuemVybygpLFxuICAgICAgICBvcmllbnRhdGlvbiA9IFZlYzMuemVybygpLFxuICAgICAgICBwb3NpdGlvbiA9IFZlYzMuemVybygpLFxuICAgIH0gPSBwYXJhbXMgfHwge307XG5cbiAgICBjb25zdCBvcmllbnRhdGlvbkluUmFkaWFucyA9IG9yaWVudGF0aW9uLm1hcChNYXRoVXRpbHMuZGVnVG9SYWQpO1xuXG4gICAgY29uc3Qgcm90YXRpb25NYXRyaXggPSBNYXQzLmZyb21FdWxlckFuZ2xlcyhvcmllbnRhdGlvbkluUmFkaWFucyk7XG4gICAgY29uc3Qgb3JpZ2luTG9jYWxQb3NpdGlvbnMgPSBQT1NJVElPTlNcbiAgICAgICAgLm1hcCh2ID0+IFZlYzMubXVsdGlwbHkodiwgc2NhbGUpKVxuICAgICAgICAubWFwKHYgPT4gVmVjMy50cmFuc2Zvcm0odiwgcm90YXRpb25NYXRyaXgpKVxuICAgICAgICAubWFwKHYgPT4gVmVjMy5hZGQodiwgcG9zaXRpb24pKTtcblxuICAgIGNvbnN0IGV4dGVudHMgPSBjYWxjdWxhdGVFeHRlbnRzKG9yaWdpbkxvY2FsUG9zaXRpb25zKTtcbiAgICBjb25zdCB1bm5vcm1hbGl6ZWRPcmlnaW4gPSBWZWMzLm11bHRpcGx5KG9yaWdpbiwgZXh0ZW50cyk7XG4gICAgY29uc3QgcG9zaXRpb25zID0gb3JpZ2luTG9jYWxQb3NpdGlvbnMubWFwKHYgPT4gVmVjMy5zY2FsZUFuZEFkZCh2LCB1bm5vcm1hbGl6ZWRPcmlnaW4sIC0wLjUpKTtcbiAgICBjb25zdCBub3JtYWxzID0gTk9STUFMUy5tYXAodiA9PiBWZWMzLnRyYW5zZm9ybSh2LCByb3RhdGlvbk1hdHJpeCkpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcG9zaXRpb25zLFxuICAgICAgICBub3JtYWxzLFxuICAgICAgICBtb2RlOiAnVFJJQU5HTEVTJ1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZUV4dGVudHMocG9pbnRzKSB7XG4gICAgY29uc3QgbWluID0gcG9pbnRzLnJlZHVjZSgocmVzdWx0LCBwb2ludCkgPT4gVmVjMy5taW4ocmVzdWx0LCBwb2ludCksIFZlYzMubGFyZ2VzdCgpKTtcbiAgICBjb25zdCBtYXggPSBwb2ludHMucmVkdWNlKChyZXN1bHQsIHBvaW50KSA9PiBWZWMzLm1heChyZXN1bHQsIHBvaW50KSwgVmVjMy5zbWFsbGVzdCgpKTtcbiAgICByZXR1cm4gVmVjMy5zdWIobWF4LCBtaW4pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L3Byb2NlZHVyYWwvVHJpYW5nbGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9wcm9jZWR1cmFsL1RyaWFuZ2xlLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBBcnJheVV0aWxzIGZyb20gJy4uLy4uL3NyYy9BcnJheVV0aWxzLmpzJztcbmltcG9ydCBNYXRoVXRpbHMgZnJvbSAnLi4vLi4vc3JjL01hdGhVdGlscy5qcyc7XG5pbXBvcnQgTWVzaCBmcm9tICcuLi8uLi9zcmMvTWVzaC5qcyc7XG5pbXBvcnQgVmVjMyBmcm9tICcuLi8uLi9zcmMvVmVjMy5qcyc7XG5pbXBvcnQgTWF0MyBmcm9tICcuLi8uLi9zcmMvTWF0My5qcyc7XG5pbXBvcnQgQ3ViZSBmcm9tICcuL0N1YmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBvcmlnaW4gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgcG9zaXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgb3JpZW50YXRpb24gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgc2NhbGUgPSBWZWMzLm9uZSgpLFxuXG4gICAgICAgIHNlZ21lbnRzID0gMjAsXG4gICAgICAgIHR3aXN0ID0gNSxcbiAgICAgICAgc2hyaW5rID0gMC4wNCxcbiAgICAgICAgaGVpZ2h0ID0gNVxuICAgIH0gPSBwYXJhbXM7XG5cbiAgICBjb25zdCBtZXNoZXMgPSBbXTtcbiAgICBBcnJheVV0aWxzLnJhbmdlKHNlZ21lbnRzKS5mb3JFYWNoKGkgPT4ge1xuICAgICAgICBjb25zdCB0b3RhbFNpemUgPSBtZXNoZXMubGVuZ3RoID4gMCA/XG4gICAgICAgICAgICBNZXNoLmdldEV4dGVudHMoTWVzaC5tZXJnZSguLi5tZXNoZXMpKSA6XG4gICAgICAgICAgICBWZWMzLnplcm8oKTtcblxuICAgICAgICBtZXNoZXMucHVzaChDdWJlKHtcbiAgICAgICAgICAgIG9yaWdpbjogWzAsIC0xLCAwXSxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBbMCwgdG90YWxTaXplWzFdLCAwXSxcbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiBbMCwgdHdpc3QgKiBpLCAwXSxcbiAgICAgICAgICAgIHNjYWxlOiBbMSAvIChzaHJpbmsgKiBpICsgMSksIGhlaWdodCAvIHNlZ21lbnRzLCAxIC8gKHNocmluayAqIGkgKyAxKV1cbiAgICAgICAgfSkpO1xuXG4gICAgfSk7XG5cblxuICAgIGxldCBtZXNoID0gTWVzaC5tZXJnZSguLi5tZXNoZXMpO1xuICAgIG1lc2gucG9zaXRpb25zID0gbWVzaC5wb3NpdGlvbnMubWFwKHBvcyA9PiB7XG4gICAgICAgIHJldHVybiBWZWMzLnRyYW5zZm9ybShwb3MsIE1hdDMuZnJvbUV1bGVyQW5nbGVzKFswLCBNYXRoVXRpbHMuZGVnVG9SYWQodHdpc3QgKiBwb3NbMV0pLCAwXSkpO1xuICAgIH0pO1xuICAgIG1lc2gubm9ybWFscyA9IG1lc2gubm9ybWFscy5tYXAoKG5vcm1hbCwgaSkgPT4ge1xuICAgICAgICByZXR1cm4gVmVjMy50cmFuc2Zvcm0obm9ybWFsLCBNYXQzLmZyb21FdWxlckFuZ2xlcyhbMCwgTWF0aFV0aWxzLmRlZ1RvUmFkKHR3aXN0ICogbWVzaC5wb3NpdGlvbnNbaV1bMV0pLCAwXSkpO1xuICAgIH0pO1xuXG4gICAgLypcbiAgICBtZXNoID0gTWVzaC5tZXJnZShtZXNoLCBDdWJlKHtcbiAgICAgICAgb3JpZ2luOiBbMCwgLTEsIDBdLFxuICAgICAgICBwb3NpdGlvbjogWzAsIE1lc2guZ2V0RXh0ZW50cyhNZXNoLm1lcmdlKC4uLm1lc2hlcykpWzFdLCAwXSxcbiAgICAgICAgc2NhbGU6IFsyLjUsIDIuNSwgMi41XVxuICAgIH0pKTtcbiAgICAqL1xuXG4gICAgTWVzaC5hcHBseVNjYWxlKG1lc2gsIHNjYWxlKTtcbiAgICBNZXNoLmFwcGx5Um90YXRpb24obWVzaCwgTWF0My5mcm9tRXVsZXJBbmdsZXMob3JpZW50YXRpb24ubWFwKE1hdGhVdGlscy5kZWdUb1JhZCkpKTtcbiAgICBNZXNoLmFwcGx5VHJhbnNsYXRpb24obWVzaCwgcG9zaXRpb24pO1xuICAgIE1lc2guYXBwbHlPcmlnaW4obWVzaCwgb3JpZ2luKTtcblxuICAgIHJldHVybiBtZXNoO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9wcm9jZWR1cmFsL1R1cm5pbmdUb3Jzby5qc1xuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3Byb2NlZHVyYWwvVHVybmluZ1RvcnNvLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG5cXG51bmlmb3JtIHZlYzQgYWxiZWRvO1xcbnVuaWZvcm0gdmVjNCBhbWJpZW50O1xcbi8vIHVuaWZvcm0gc2FtcGxlcjJEIGFsYmVkb1NhbXBsZXI7XFxuLy8gdW5pZm9ybSBmbG9hdCB1dlNjYWxlO1xcblxcbnZhcnlpbmcgdmVjMiBzdXJmYWNlVXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICAvLyBnbF9GcmFnQ29sb3IgPSB2ZWM0KChhbGJlZG8ueHl6ICsgdGV4dHVyZTJEKGFsYmVkb1NhbXBsZXIsIHN1cmZhY2VVdiAqIHV2U2NhbGUpLnh5eikgKiAwLjcsIDEpO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGFsYmVkby54eXogKiAwLjcsIDEpO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9zaGFkZXJzL2FtYmllbnQuZnJhZ1xuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3NoYWRlcnMvYW1iaWVudC5mcmFnXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXG51bmlmb3JtIG1hdDQgdmlldztcXG51bmlmb3JtIG1hdDQgd29ybGQ7XFxudW5pZm9ybSBmbG9hdCB0b3RhbFRpbWU7XFxuXFxuYXR0cmlidXRlIHZlYzQgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgdXY7XFxuXFxudmFyeWluZyB2ZWMyIHN1cmZhY2VVdjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHN1cmZhY2VVdiA9IHV2O1xcblxcbiAgICB2ZWM0IHdvcmxkUG9zID0gd29ybGQgKiBwb3NpdGlvbjtcXG4gICAgZmxvYXQgYW1wbGl0dWRlID0gKHNpbigtd29ybGRQb3MueCAvIDE2LjAgKyAodG90YWxUaW1lLzEwMDAuMCkpICsgMS4wKSAvIDIuMDtcXG4gICAgZmxvYXQgc3dheSA9IHNpbih0b3RhbFRpbWUvMTAwMC4wKSAqIHBvc2l0aW9uLnkgKiBhbXBsaXR1ZGU7XFxuICAgIHZlYzQgc3VyZmFjZVBvc2l0aW9uID0gd29ybGRQb3MgKyB2ZWM0KHN3YXksIDAsIDAsIDApO1xcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogc3VyZmFjZVBvc2l0aW9uO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9zaGFkZXJzL2FtYmllbnQudmVydFxuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3NoYWRlcnMvYW1iaWVudC52ZXJ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJwcmVjaXNpb24gbWVkaXVtcCBmbG9hdDtcXG5cXG51bmlmb3JtIHNhbXBsZXIyRCBzYW1wbGVyO1xcbnZhcnlpbmcgdmVjMiBzdXJmYWNlVXY7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICAvLyBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQoc2FtcGxlciwgc3VyZmFjZVV2KTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChzdXJmYWNlVXYueCwgc3VyZmFjZVV2LnksIDAsIDEpO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9zaGFkZXJzL2RlYnVnLXV2LmZyYWdcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9zaGFkZXJzL2RlYnVnLXV2LmZyYWdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInVuaWZvcm0gbWF0NCBwcm9qZWN0aW9uO1xcbnVuaWZvcm0gbWF0NCB2aWV3O1xcbnVuaWZvcm0gbWF0NCB3b3JsZDtcXG5cXG5hdHRyaWJ1dGUgdmVjNCBwb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5cXG52YXJ5aW5nIHZlYzIgc3VyZmFjZVV2O1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgc3VyZmFjZVV2ID0gdXY7XFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiB3b3JsZCAqIHBvc2l0aW9uO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9zaGFkZXJzL2RlYnVnLXV2LnZlcnRcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9zaGFkZXJzL2RlYnVnLXV2LnZlcnRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcblxcbnVuaWZvcm0gdmVjNCBjb2xvcjtcXG51bmlmb3JtIHZlYzQgbGlnaHRDb2xvcjtcXG51bmlmb3JtIHZlYzMgbGlnaHRQb3M7XFxudW5pZm9ybSBmbG9hdCBsaWdodExpbmVhclRlcm07XFxudW5pZm9ybSBmbG9hdCBsaWdodFF1YWRyYXRpY1Rlcm07XFxudW5pZm9ybSBmbG9hdCBsaWdodFJhZGl1cztcXG51bmlmb3JtIGZsb2F0IGxpZ2h0Q3V0b2ZmO1xcbnVuaWZvcm0gZmxvYXQgbGlnaHRJbnRlbnNpdHk7XFxuXFxudmFyeWluZyB2ZWMzIHN1cmZhY2VQb3M7XFxudmFyeWluZyB2ZWMzIHN1cmZhY2VOb3JtYWw7XFxuXFxuZmxvYXQgZ2V0QXR0ZW51YXRpb24oZmxvYXQgY29uc3RhbnQsIGZsb2F0IGxpbmVhciwgZmxvYXQgcXVhZHJhdGljLCBmbG9hdCBkaXN0KSB7XFxuICAgIHJldHVybiAxLjAgLyAoY29uc3RhbnQgKyBsaW5lYXIgKiBkaXN0ICsgcXVhZHJhdGljICogKGRpc3QqZGlzdCkpO1xcbn1cXG5cXG4vLyBodHRwczovL2ltZG9pbmdpdHdyb25nLndvcmRwcmVzcy5jb20vMjAxMS8wMS8zMS9saWdodC1hdHRlbnVhdGlvbi9cXG5mbG9hdCBnZXRBdHRlbnVhdGlvbjIoZmxvYXQgcmFkaXVzLCBmbG9hdCBpbnRlbnNpdHksIGZsb2F0IGN1dG9mZiwgZmxvYXQgZGlzdCkge1xcbiAgICBmbG9hdCBkID0gbWF4KGRpc3QgLSByYWRpdXMsIDAuMCk7XFxuICAgIGZsb2F0IGRlbm9tID0gZC9yYWRpdXMgKyAxLjA7XFxuICAgIGZsb2F0IGF0dGVudWF0aW9uID0gMC4wO1xcbiAgICBhdHRlbnVhdGlvbiA9IGludGVuc2l0eSAvIChkZW5vbSpkZW5vbSk7XFxuICAgIGF0dGVudWF0aW9uID0gKGF0dGVudWF0aW9uIC0gY3V0b2ZmKSAvICgxLjAgLSBjdXRvZmYpO1xcbiAgICBhdHRlbnVhdGlvbiA9IG1heChhdHRlbnVhdGlvbiwgMC4wKTtcXG4gICAgcmV0dXJuIGF0dGVudWF0aW9uO1xcbn1cXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIHZlYzMgc3VyZmFjZVRvTGlnaHQgPSBsaWdodFBvcyAtIHN1cmZhY2VQb3M7XFxuICAgIGZsb2F0IGRpc3QgPSBsZW5ndGgoc3VyZmFjZVRvTGlnaHQpO1xcbiAgICBmbG9hdCBmYWNpbmcgPSBtYXgoZG90KG5vcm1hbGl6ZShzdXJmYWNlVG9MaWdodCksIG5vcm1hbGl6ZShzdXJmYWNlTm9ybWFsKSksIDAuMCk7XFxuXFxuICAgIGZsb2F0IGF0dGVudWF0aW9uID0gZ2V0QXR0ZW51YXRpb24yKGxpZ2h0UmFkaXVzLCBsaWdodEludGVuc2l0eSwgbGlnaHRDdXRvZmYsIGRpc3QpO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLnh5eiAqIGxpZ2h0Q29sb3IueHl6ICogZmFjaW5nICogYXR0ZW51YXRpb24sIDEpO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9zaGFkZXJzL3BvaW50bGlnaHQuZnJhZ1xuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3NoYWRlcnMvcG9pbnRsaWdodC5mcmFnXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXG51bmlmb3JtIG1hdDQgdmlldztcXG51bmlmb3JtIG1hdDQgd29ybGQ7XFxuXFxuYXR0cmlidXRlIHZlYzQgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzMgbm9ybWFsO1xcbnZhcnlpbmcgdmVjMyBzdXJmYWNlUG9zO1xcbnZhcnlpbmcgdmVjMyBzdXJmYWNlTm9ybWFsO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgc3VyZmFjZU5vcm1hbCA9IChtYXQzKHdvcmxkKSAqIG5vcm1hbCk7XFxuICAgIHN1cmZhY2VQb3MgPSAod29ybGQgKiBwb3NpdGlvbikueHl6O1xcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogd29ybGQgKiBwb3NpdGlvbjtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvc2hhZGVycy9wb2ludGxpZ2h0LnZlcnRcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9zaGFkZXJzL3BvaW50bGlnaHQudmVydFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwicHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDAuMCk7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L3NoYWRlcnMvc2hhZG93LmZyYWdcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9zaGFkZXJzL3NoYWRvdy5mcmFnXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXG51bmlmb3JtIG1hdDQgdmlldztcXG51bmlmb3JtIG1hdDQgd29ybGQ7XFxuXFxuYXR0cmlidXRlIHZlYzQgcG9zaXRpb247XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogd29ybGQgKiBwb3NpdGlvbjtcXG4gICAgZ2xfUG9zaXRpb24ueiAtPSAwLjAwMTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvc2hhZGVycy9zaGFkb3cudmVydFxuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3NoYWRlcnMvc2hhZG93LnZlcnRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcblxcbnVuaWZvcm0gdmVjNCBsaWdodENvbG9yO1xcbnVuaWZvcm0gdmVjMyBsaWdodERpcmVjdGlvbjtcXG51bmlmb3JtIGZsb2F0IGxpZ2h0SW50ZW5zaXR5O1xcbnVuaWZvcm0gc2FtcGxlcjJEIGxheWVyVGV4dHVyZTtcXG5cXG52YXJ5aW5nIHZlYzMgd29ybGROb3JtYWw7XFxudmFyeWluZyB2ZWMzIGxvY2FsUG9zaXRpb247XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBjb25zdCBmbG9hdCBvZmZzZXQgPSAxLjU7XFxuICAgIGNvbnN0IGZsb2F0IGFtcCA9IDAuMDE7XFxuICAgIGNvbnN0IGZsb2F0IGZyZXEgPSAxMC4wO1xcbiAgICBmbG9hdCB1ID0gKChsb2NhbFBvc2l0aW9uLnkgKyAxLjApIC8gMi4wKSArIHNpbigobG9jYWxQb3NpdGlvbi54ICsgbG9jYWxQb3NpdGlvbi56KSAqIGZyZXEgKyBvZmZzZXQpICogYW1wO1xcbiAgICB2ZWMzIGNvbG9yID0gdGV4dHVyZTJEKGxheWVyVGV4dHVyZSwgdmVjMigxLjAgLSB1LCAwLjUpKS5yZ2I7XFxuXFxuICAgIHZlYzMgc3VyZmFjZUNvbG9yID0gY29sb3IueHl6O1xcbiAgICBmbG9hdCBmYWNpbmcgPSBtYXgoZG90KG5vcm1hbGl6ZSgtbGlnaHREaXJlY3Rpb24pLCBub3JtYWxpemUod29ybGROb3JtYWwpKSwgMC4wKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChzdXJmYWNlQ29sb3IgKiBsaWdodENvbG9yLnJnYiAqIGZhY2luZyAqIGxpZ2h0SW50ZW5zaXR5LCAxLjApO1xcbn1cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9zaGFkZXJzL3N1bmxpZ2h0LXRlcnJhaW4uZnJhZ1xuLy8gbW9kdWxlIGlkID0gLi9jb250ZW50L3NoYWRlcnMvc3VubGlnaHQtdGVycmFpbi5mcmFnXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXG51bmlmb3JtIG1hdDQgdmlldztcXG51bmlmb3JtIG1hdDQgd29ybGQ7XFxuXFxuYXR0cmlidXRlIHZlYzQgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzMgbm9ybWFsO1xcblxcbnZhcnlpbmcgdmVjMyBsb2NhbFBvc2l0aW9uO1xcbnZhcnlpbmcgdmVjMyB3b3JsZE5vcm1hbDtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGxvY2FsUG9zaXRpb24gPSBwb3NpdGlvbi54eXo7XFxuICAgIHdvcmxkTm9ybWFsID0gbWF0Myh3b3JsZCkgKiBub3JtYWw7XFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiB3b3JsZCAqIHZlYzQobG9jYWxQb3NpdGlvbiwgcG9zaXRpb24udyk7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L3NoYWRlcnMvc3VubGlnaHQtdGVycmFpbi52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvc2hhZGVycy9zdW5saWdodC10ZXJyYWluLnZlcnRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcblxcbnVuaWZvcm0gdmVjNCBhbGJlZG87XFxudW5pZm9ybSB2ZWM0IGxpZ2h0Q29sb3I7XFxudW5pZm9ybSB2ZWMzIGxpZ2h0RGlyZWN0aW9uO1xcbnVuaWZvcm0gZmxvYXQgbGlnaHRJbnRlbnNpdHk7XFxuXFxudmFyeWluZyB2ZWMzIHN1cmZhY2VOb3JtYWw7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICB2ZWMzIHN1cmZhY2VDb2xvciA9IGFsYmVkby54eXo7XFxuICAgIGZsb2F0IGZhY2luZyA9IG1heChkb3Qobm9ybWFsaXplKC1saWdodERpcmVjdGlvbiksIG5vcm1hbGl6ZShzdXJmYWNlTm9ybWFsKSksIDAuMCk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoc3VyZmFjZUNvbG9yICogbGlnaHRDb2xvci5yZ2IgKiBmYWNpbmcgKiBsaWdodEludGVuc2l0eSwgMS4wKTtcXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvc2hhZGVycy9zdW5saWdodC5mcmFnXG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvc2hhZGVycy9zdW5saWdodC5mcmFnXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCJ1bmlmb3JtIG1hdDQgcHJvamVjdGlvbjtcXG51bmlmb3JtIG1hdDQgdmlldztcXG51bmlmb3JtIG1hdDQgd29ybGQ7XFxudW5pZm9ybSBmbG9hdCB0b3RhbFRpbWU7XFxuXFxuYXR0cmlidXRlIHZlYzQgcG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzMgbm9ybWFsO1xcblxcbnZhcnlpbmcgdmVjMyBzdXJmYWNlTm9ybWFsO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgc3VyZmFjZU5vcm1hbCA9IG1hdDMod29ybGQpICogbm9ybWFsO1xcblxcbiAgICB2ZWM0IHdvcmxkUG9zID0gd29ybGQgKiBwb3NpdGlvbjtcXG4gICAgZmxvYXQgYW1wbGl0dWRlID0gKHNpbigtd29ybGRQb3MueCAvIDE2LjAgKyAodG90YWxUaW1lLzEwMDAuMCkpICsgMS4wKSAvIDIuMDtcXG4gICAgZmxvYXQgc3dheSA9IHNpbih0b3RhbFRpbWUvMTAwMC4wKSAqIHBvc2l0aW9uLnkgKiBhbXBsaXR1ZGU7XFxuICAgIHZlYzQgc3VyZmFjZVBvc2l0aW9uID0gd29ybGRQb3MgKyB2ZWM0KHN3YXksIDAsIDAsIDApO1xcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb24gKiB2aWV3ICogc3VyZmFjZVBvc2l0aW9uO1xcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vY29udGVudC9zaGFkZXJzL3N1bmxpZ2h0LnZlcnRcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9zaGFkZXJzL3N1bmxpZ2h0LnZlcnRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcInByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xcblxcbnVuaWZvcm0gc2FtcGxlcjJEIGxheWVyVGV4dHVyZTtcXG52YXJ5aW5nIHZlYzMgbG9jYWxQb3NpdGlvbjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGNvbnN0IGZsb2F0IG9mZnNldCA9IDEuNTtcXG4gICAgY29uc3QgZmxvYXQgYW1wID0gMC4wMTtcXG4gICAgY29uc3QgZmxvYXQgZnJlcSA9IDEwLjA7XFxuICAgIGZsb2F0IHUgPSAoKGxvY2FsUG9zaXRpb24ueSArIDEuMCkgLyAyLjApICsgc2luKChsb2NhbFBvc2l0aW9uLnggKyBsb2NhbFBvc2l0aW9uLnopICogZnJlcSArIG9mZnNldCkgKiBhbXA7XFxuICAgIHZlYzMgY29sb3IgPSB0ZXh0dXJlMkQobGF5ZXJUZXh0dXJlLCB2ZWMyKDEuMCAtIHUsIDAuNSkpLnJnYiAqIDAuNTtcXG5cXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwgMS4wKTtcXG59XFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2NvbnRlbnQvc2hhZGVycy90ZXJyYWluLmZyYWdcbi8vIG1vZHVsZSBpZCA9IC4vY29udGVudC9zaGFkZXJzL3RlcnJhaW4uZnJhZ1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwidW5pZm9ybSBtYXQ0IHByb2plY3Rpb247XFxudW5pZm9ybSBtYXQ0IHZpZXc7XFxudW5pZm9ybSBtYXQ0IHdvcmxkO1xcbnVuaWZvcm0gZmxvYXQgdG90YWxUaW1lO1xcblxcbmF0dHJpYnV0ZSB2ZWM0IHBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMzIG5vcm1hbDtcXG5hdHRyaWJ1dGUgdmVjMiB1djtcXG5cXG52YXJ5aW5nIHZlYzMgbG9jYWxQb3NpdGlvbjtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGxvY2FsUG9zaXRpb24gPSBwb3NpdGlvbi54eXo7XFxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbiAqIHZpZXcgKiB3b3JsZCAqIHZlYzQobG9jYWxQb3NpdGlvbiwgcG9zaXRpb24udyk7XFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9jb250ZW50L3NoYWRlcnMvdGVycmFpbi52ZXJ0XG4vLyBtb2R1bGUgaWQgPSAuL2NvbnRlbnQvc2hhZGVycy90ZXJyYWluLnZlcnRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh1bmRlZmluZWQpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCwgYm9keSB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmNhbnZhcyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kOiBwdXJwbGU7XFxufVxcblxcbiNvcHRpb25zIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyYXk7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICAgIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5zZWxlY3Qge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlciEuL3NyYy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zcmMvc3R5bGUuY3NzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKmpzaGludCBlcW51bGw6dHJ1ZSovXG4oZnVuY3Rpb24gKHJvb3QpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIEdMT0JBTF9LRVkgPSBcIlJhbmRvbVwiO1xuXG4gIHZhciBpbXVsID0gKHR5cGVvZiBNYXRoLmltdWwgIT09IFwiZnVuY3Rpb25cIiB8fCBNYXRoLmltdWwoMHhmZmZmZmZmZiwgNSkgIT09IC01ID9cbiAgICBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgdmFyIGFoID0gKGEgPj4+IDE2KSAmIDB4ZmZmZjtcbiAgICAgIHZhciBhbCA9IGEgJiAweGZmZmY7XG4gICAgICB2YXIgYmggPSAoYiA+Pj4gMTYpICYgMHhmZmZmO1xuICAgICAgdmFyIGJsID0gYiAmIDB4ZmZmZjtcbiAgICAgIC8vIHRoZSBzaGlmdCBieSAwIGZpeGVzIHRoZSBzaWduIG9uIHRoZSBoaWdoIHBhcnRcbiAgICAgIC8vIHRoZSBmaW5hbCB8MCBjb252ZXJ0cyB0aGUgdW5zaWduZWQgdmFsdWUgaW50byBhIHNpZ25lZCB2YWx1ZVxuICAgICAgcmV0dXJuIChhbCAqIGJsKSArICgoKGFoICogYmwgKyBhbCAqIGJoKSA8PCAxNikgPj4+IDApIHwgMDtcbiAgICB9IDpcbiAgICBNYXRoLmltdWwpO1xuXG4gIHZhciBzdHJpbmdSZXBlYXQgPSAodHlwZW9mIFN0cmluZy5wcm90b3R5cGUucmVwZWF0ID09PSBcImZ1bmN0aW9uXCIgJiYgXCJ4XCIucmVwZWF0KDMpID09PSBcInh4eFwiID9cbiAgICBmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgcmV0dXJuIHgucmVwZWF0KHkpO1xuICAgIH0gOiBmdW5jdGlvbiAocGF0dGVybiwgY291bnQpIHtcbiAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgd2hpbGUgKGNvdW50ID4gMCkge1xuICAgICAgICBpZiAoY291bnQgJiAxKSB7XG4gICAgICAgICAgcmVzdWx0ICs9IHBhdHRlcm47XG4gICAgICAgIH1cbiAgICAgICAgY291bnQgPj49IDE7XG4gICAgICAgIHBhdHRlcm4gKz0gcGF0dGVybjtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG5cbiAgZnVuY3Rpb24gUmFuZG9tKGVuZ2luZSkge1xuICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBSYW5kb20pKSB7XG4gICAgICByZXR1cm4gbmV3IFJhbmRvbShlbmdpbmUpO1xuICAgIH1cblxuICAgIGlmIChlbmdpbmUgPT0gbnVsbCkge1xuICAgICAgZW5naW5lID0gUmFuZG9tLmVuZ2luZXMubmF0aXZlTWF0aDtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBlbmdpbmUgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGVuZ2luZSB0byBiZSBhIGZ1bmN0aW9uLCBnb3QgXCIgKyB0eXBlb2YgZW5naW5lKTtcbiAgICB9XG4gICAgdGhpcy5lbmdpbmUgPSBlbmdpbmU7XG4gIH1cbiAgdmFyIHByb3RvID0gUmFuZG9tLnByb3RvdHlwZTtcblxuICBSYW5kb20uZW5naW5lcyA9IHtcbiAgICBuYXRpdmVNYXRoOiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gKE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMCkgfCAwO1xuICAgIH0sXG4gICAgbXQxOTkzNzogKGZ1bmN0aW9uIChJbnQzMkFycmF5KSB7XG4gICAgICAvLyBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01lcnNlbm5lX3R3aXN0ZXJcbiAgICAgIGZ1bmN0aW9uIHJlZnJlc2hEYXRhKGRhdGEpIHtcbiAgICAgICAgdmFyIGsgPSAwO1xuICAgICAgICB2YXIgdG1wID0gMDtcbiAgICAgICAgZm9yICg7XG4gICAgICAgICAgKGsgfCAwKSA8IDIyNzsgayA9IChrICsgMSkgfCAwKSB7XG4gICAgICAgICAgdG1wID0gKGRhdGFba10gJiAweDgwMDAwMDAwKSB8IChkYXRhWyhrICsgMSkgfCAwXSAmIDB4N2ZmZmZmZmYpO1xuICAgICAgICAgIGRhdGFba10gPSBkYXRhWyhrICsgMzk3KSB8IDBdIF4gKHRtcCA+Pj4gMSkgXiAoKHRtcCAmIDB4MSkgPyAweDk5MDhiMGRmIDogMCk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKDtcbiAgICAgICAgICAoayB8IDApIDwgNjIzOyBrID0gKGsgKyAxKSB8IDApIHtcbiAgICAgICAgICB0bXAgPSAoZGF0YVtrXSAmIDB4ODAwMDAwMDApIHwgKGRhdGFbKGsgKyAxKSB8IDBdICYgMHg3ZmZmZmZmZik7XG4gICAgICAgICAgZGF0YVtrXSA9IGRhdGFbKGsgLSAyMjcpIHwgMF0gXiAodG1wID4+PiAxKSBeICgodG1wICYgMHgxKSA/IDB4OTkwOGIwZGYgOiAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRtcCA9IChkYXRhWzYyM10gJiAweDgwMDAwMDAwKSB8IChkYXRhWzBdICYgMHg3ZmZmZmZmZik7XG4gICAgICAgIGRhdGFbNjIzXSA9IGRhdGFbMzk2XSBeICh0bXAgPj4+IDEpIF4gKCh0bXAgJiAweDEpID8gMHg5OTA4YjBkZiA6IDApO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiB0ZW1wZXIodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgXj0gdmFsdWUgPj4+IDExO1xuICAgICAgICB2YWx1ZSBePSAodmFsdWUgPDwgNykgJiAweDlkMmM1NjgwO1xuICAgICAgICB2YWx1ZSBePSAodmFsdWUgPDwgMTUpICYgMHhlZmM2MDAwMDtcbiAgICAgICAgcmV0dXJuIHZhbHVlIF4gKHZhbHVlID4+PiAxOCk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIHNlZWRXaXRoQXJyYXkoZGF0YSwgc291cmNlKSB7XG4gICAgICAgIHZhciBpID0gMTtcbiAgICAgICAgdmFyIGogPSAwO1xuICAgICAgICB2YXIgc291cmNlTGVuZ3RoID0gc291cmNlLmxlbmd0aDtcbiAgICAgICAgdmFyIGsgPSBNYXRoLm1heChzb3VyY2VMZW5ndGgsIDYyNCkgfCAwO1xuICAgICAgICB2YXIgcHJldmlvdXMgPSBkYXRhWzBdIHwgMDtcbiAgICAgICAgZm9yICg7XG4gICAgICAgICAgKGsgfCAwKSA+IDA7IC0taykge1xuICAgICAgICAgIGRhdGFbaV0gPSBwcmV2aW91cyA9ICgoZGF0YVtpXSBeIGltdWwoKHByZXZpb3VzIF4gKHByZXZpb3VzID4+PiAzMCkpLCAweDAwMTk2NjBkKSkgKyAoc291cmNlW2pdIHwgMCkgKyAoaiB8IDApKSB8IDA7XG4gICAgICAgICAgaSA9IChpICsgMSkgfCAwO1xuICAgICAgICAgICsrajtcbiAgICAgICAgICBpZiAoKGkgfCAwKSA+IDYyMykge1xuICAgICAgICAgICAgZGF0YVswXSA9IGRhdGFbNjIzXTtcbiAgICAgICAgICAgIGkgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaiA+PSBzb3VyY2VMZW5ndGgpIHtcbiAgICAgICAgICAgIGogPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGsgPSA2MjM7XG4gICAgICAgICAgKGsgfCAwKSA+IDA7IC0taykge1xuICAgICAgICAgIGRhdGFbaV0gPSBwcmV2aW91cyA9ICgoZGF0YVtpXSBeIGltdWwoKHByZXZpb3VzIF4gKHByZXZpb3VzID4+PiAzMCkpLCAweDVkNTg4YjY1KSkgLSBpKSB8IDA7XG4gICAgICAgICAgaSA9IChpICsgMSkgfCAwO1xuICAgICAgICAgIGlmICgoaSB8IDApID4gNjIzKSB7XG4gICAgICAgICAgICBkYXRhWzBdID0gZGF0YVs2MjNdO1xuICAgICAgICAgICAgaSA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGFbMF0gPSAweDgwMDAwMDAwO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBtdDE5OTM3KCkge1xuICAgICAgICB2YXIgZGF0YSA9IG5ldyBJbnQzMkFycmF5KDYyNCk7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHZhciB1c2VzID0gMDtcblxuICAgICAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIGlmICgoaW5kZXggfCAwKSA+PSA2MjQpIHtcbiAgICAgICAgICAgIHJlZnJlc2hEYXRhKGRhdGEpO1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGFbaW5kZXhdO1xuICAgICAgICAgIGluZGV4ID0gKGluZGV4ICsgMSkgfCAwO1xuICAgICAgICAgIHVzZXMgKz0gMTtcbiAgICAgICAgICByZXR1cm4gdGVtcGVyKHZhbHVlKSB8IDA7XG4gICAgICAgIH1cbiAgICAgICAgbmV4dC5nZXRVc2VDb3VudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiB1c2VzO1xuICAgICAgICB9O1xuICAgICAgICBuZXh0LmRpc2NhcmQgPSBmdW5jdGlvbiAoY291bnQpIHtcbiAgICAgICAgICB1c2VzICs9IGNvdW50O1xuICAgICAgICAgIGlmICgoaW5kZXggfCAwKSA+PSA2MjQpIHtcbiAgICAgICAgICAgIHJlZnJlc2hEYXRhKGRhdGEpO1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB3aGlsZSAoKGNvdW50IC0gaW5kZXgpID4gNjI0KSB7XG4gICAgICAgICAgICBjb3VudCAtPSA2MjQgLSBpbmRleDtcbiAgICAgICAgICAgIHJlZnJlc2hEYXRhKGRhdGEpO1xuICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpbmRleCA9IChpbmRleCArIGNvdW50KSB8IDA7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG4gICAgICAgIG5leHQuc2VlZCA9IGZ1bmN0aW9uIChpbml0aWFsKSB7XG4gICAgICAgICAgdmFyIHByZXZpb3VzID0gMDtcbiAgICAgICAgICBkYXRhWzBdID0gcHJldmlvdXMgPSBpbml0aWFsIHwgMDtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgNjI0OyBpID0gKGkgKyAxKSB8IDApIHtcbiAgICAgICAgICAgIGRhdGFbaV0gPSBwcmV2aW91cyA9IChpbXVsKChwcmV2aW91cyBeIChwcmV2aW91cyA+Pj4gMzApKSwgMHg2YzA3ODk2NSkgKyBpKSB8IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIGluZGV4ID0gNjI0O1xuICAgICAgICAgIHVzZXMgPSAwO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuICAgICAgICBuZXh0LnNlZWRXaXRoQXJyYXkgPSBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgICAgbmV4dC5zZWVkKDB4MDEyYmQ2YWEpO1xuICAgICAgICAgIHNlZWRXaXRoQXJyYXkoZGF0YSwgc291cmNlKTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcbiAgICAgICAgbmV4dC5hdXRvU2VlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gbmV4dC5zZWVkV2l0aEFycmF5KFJhbmRvbS5nZW5lcmF0ZUVudHJvcHlBcnJheSgpKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtdDE5OTM3O1xuICAgIH0odHlwZW9mIEludDMyQXJyYXkgPT09IFwiZnVuY3Rpb25cIiA/IEludDMyQXJyYXkgOiBBcnJheSkpLFxuICAgIGJyb3dzZXJDcnlwdG86ICh0eXBlb2YgY3J5cHRvICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIEludDMyQXJyYXkgPT09IFwiZnVuY3Rpb25cIikgPyAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGRhdGEgPSBudWxsO1xuICAgICAgdmFyIGluZGV4ID0gMTI4O1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaW5kZXggPj0gMTI4KSB7XG4gICAgICAgICAgaWYgKGRhdGEgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgSW50MzJBcnJheSgxMjgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKGRhdGEpO1xuICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkYXRhW2luZGV4KytdIHwgMDtcbiAgICAgIH07XG4gICAgfSgpKSA6IG51bGxcbiAgfTtcblxuICBSYW5kb20uZ2VuZXJhdGVFbnRyb3B5QXJyYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGFycmF5ID0gW107XG4gICAgdmFyIGVuZ2luZSA9IFJhbmRvbS5lbmdpbmVzLm5hdGl2ZU1hdGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBhcnJheVtpXSA9IGVuZ2luZSgpIHwgMDtcbiAgICB9XG4gICAgYXJyYXkucHVzaChuZXcgRGF0ZSgpLmdldFRpbWUoKSB8IDApO1xuICAgIHJldHVybiBhcnJheTtcbiAgfTtcblxuICBmdW5jdGlvbiByZXR1cm5WYWx1ZSh2YWx1ZSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIC8vIFstMHg4MDAwMDAwMCwgMHg3ZmZmZmZmZl1cbiAgUmFuZG9tLmludDMyID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgIHJldHVybiBlbmdpbmUoKSB8IDA7XG4gIH07XG4gIHByb3RvLmludDMyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBSYW5kb20uaW50MzIodGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIC8vIFswLCAweGZmZmZmZmZmXVxuICBSYW5kb20udWludDMyID0gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgIHJldHVybiBlbmdpbmUoKSA+Pj4gMDtcbiAgfTtcbiAgcHJvdG8udWludDMyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBSYW5kb20udWludDMyKHRoaXMuZW5naW5lKTtcbiAgfTtcblxuICAvLyBbMCwgMHgxZmZmZmZmZmZmZmZmZl1cbiAgUmFuZG9tLnVpbnQ1MyA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgICB2YXIgaGlnaCA9IGVuZ2luZSgpICYgMHgxZmZmZmY7XG4gICAgdmFyIGxvdyA9IGVuZ2luZSgpID4+PiAwO1xuICAgIHJldHVybiAoaGlnaCAqIDB4MTAwMDAwMDAwKSArIGxvdztcbiAgfTtcbiAgcHJvdG8udWludDUzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBSYW5kb20udWludDUzKHRoaXMuZW5naW5lKTtcbiAgfTtcblxuICAvLyBbMCwgMHgyMDAwMDAwMDAwMDAwMF1cbiAgUmFuZG9tLnVpbnQ1M0Z1bGwgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBoaWdoID0gZW5naW5lKCkgfCAwO1xuICAgICAgaWYgKGhpZ2ggJiAweDIwMDAwMCkge1xuICAgICAgICBpZiAoKGhpZ2ggJiAweDNmZmZmZikgPT09IDB4MjAwMDAwICYmIChlbmdpbmUoKSB8IDApID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIDB4MjAwMDAwMDAwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsb3cgPSBlbmdpbmUoKSA+Pj4gMDtcbiAgICAgICAgcmV0dXJuICgoaGlnaCAmIDB4MWZmZmZmKSAqIDB4MTAwMDAwMDAwKSArIGxvdztcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIHByb3RvLnVpbnQ1M0Z1bGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFJhbmRvbS51aW50NTNGdWxsKHRoaXMuZW5naW5lKTtcbiAgfTtcblxuICAvLyBbLTB4MjAwMDAwMDAwMDAwMDAsIDB4MWZmZmZmZmZmZmZmZmZdXG4gIFJhbmRvbS5pbnQ1MyA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgICB2YXIgaGlnaCA9IGVuZ2luZSgpIHwgMDtcbiAgICB2YXIgbG93ID0gZW5naW5lKCkgPj4+IDA7XG4gICAgcmV0dXJuICgoaGlnaCAmIDB4MWZmZmZmKSAqIDB4MTAwMDAwMDAwKSArIGxvdyArIChoaWdoICYgMHgyMDAwMDAgPyAtMHgyMDAwMDAwMDAwMDAwMCA6IDApO1xuICB9O1xuICBwcm90by5pbnQ1MyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUmFuZG9tLmludDUzKHRoaXMuZW5naW5lKTtcbiAgfTtcblxuICAvLyBbLTB4MjAwMDAwMDAwMDAwMDAsIDB4MjAwMDAwMDAwMDAwMDBdXG4gIFJhbmRvbS5pbnQ1M0Z1bGwgPSBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBoaWdoID0gZW5naW5lKCkgfCAwO1xuICAgICAgaWYgKGhpZ2ggJiAweDQwMDAwMCkge1xuICAgICAgICBpZiAoKGhpZ2ggJiAweDdmZmZmZikgPT09IDB4NDAwMDAwICYmIChlbmdpbmUoKSB8IDApID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIDB4MjAwMDAwMDAwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBsb3cgPSBlbmdpbmUoKSA+Pj4gMDtcbiAgICAgICAgcmV0dXJuICgoaGlnaCAmIDB4MWZmZmZmKSAqIDB4MTAwMDAwMDAwKSArIGxvdyArIChoaWdoICYgMHgyMDAwMDAgPyAtMHgyMDAwMDAwMDAwMDAwMCA6IDApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbiAgcHJvdG8uaW50NTNGdWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBSYW5kb20uaW50NTNGdWxsKHRoaXMuZW5naW5lKTtcbiAgfTtcblxuICBmdW5jdGlvbiBhZGQoZ2VuZXJhdGUsIGFkZGVuZCkge1xuICAgIGlmIChhZGRlbmQgPT09IDApIHtcbiAgICAgIHJldHVybiBnZW5lcmF0ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlKGVuZ2luZSkgKyBhZGRlbmQ7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIFJhbmRvbS5pbnRlZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBpc1Bvd2VyT2ZUd29NaW51c09uZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuICgodmFsdWUgKyAxKSAmIHZhbHVlKSA9PT0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBiaXRtYXNrKG1hc2tpbmcpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgICAgIHJldHVybiBlbmdpbmUoKSAmIG1hc2tpbmc7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvd25zY2FsZVRvTG9vcENoZWNrZWRSYW5nZShyYW5nZSkge1xuICAgICAgdmFyIGV4dGVuZGVkUmFuZ2UgPSByYW5nZSArIDE7XG4gICAgICB2YXIgbWF4aW11bSA9IGV4dGVuZGVkUmFuZ2UgKiBNYXRoLmZsb29yKDB4MTAwMDAwMDAwIC8gZXh0ZW5kZWRSYW5nZSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgdmFsdWUgPSBlbmdpbmUoKSA+Pj4gMDtcbiAgICAgICAgfSB3aGlsZSAodmFsdWUgPj0gbWF4aW11bSk7XG4gICAgICAgIHJldHVybiB2YWx1ZSAlIGV4dGVuZGVkUmFuZ2U7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvd25zY2FsZVRvUmFuZ2UocmFuZ2UpIHtcbiAgICAgIGlmIChpc1Bvd2VyT2ZUd29NaW51c09uZShyYW5nZSkpIHtcbiAgICAgICAgcmV0dXJuIGJpdG1hc2socmFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRvd25zY2FsZVRvTG9vcENoZWNrZWRSYW5nZShyYW5nZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNFdmVubHlEaXZpc2libGVCeU1heEludDMyKHZhbHVlKSB7XG4gICAgICByZXR1cm4gKHZhbHVlIHwgMCkgPT09IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBzY2FsZVdpdGhIaWdoTWFza2luZyhtYXNraW5nKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgICAgICB2YXIgaGlnaCA9IGVuZ2luZSgpICYgbWFza2luZztcbiAgICAgICAgdmFyIGxvdyA9IGVuZ2luZSgpID4+PiAwO1xuICAgICAgICByZXR1cm4gKGhpZ2ggKiAweDEwMDAwMDAwMCkgKyBsb3c7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwc2NhbGVUb0xvb3BDaGVja2VkUmFuZ2UoZXh0ZW5kZWRSYW5nZSkge1xuICAgICAgdmFyIG1heGltdW0gPSBleHRlbmRlZFJhbmdlICogTWF0aC5mbG9vcigweDIwMDAwMDAwMDAwMDAwIC8gZXh0ZW5kZWRSYW5nZSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgICAgICB2YXIgcmV0ID0gMDtcbiAgICAgICAgZG8ge1xuICAgICAgICAgIHZhciBoaWdoID0gZW5naW5lKCkgJiAweDFmZmZmZjtcbiAgICAgICAgICB2YXIgbG93ID0gZW5naW5lKCkgPj4+IDA7XG4gICAgICAgICAgcmV0ID0gKGhpZ2ggKiAweDEwMDAwMDAwMCkgKyBsb3c7XG4gICAgICAgIH0gd2hpbGUgKHJldCA+PSBtYXhpbXVtKTtcbiAgICAgICAgcmV0dXJuIHJldCAlIGV4dGVuZGVkUmFuZ2U7XG4gICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwc2NhbGVXaXRoaW5VNTMocmFuZ2UpIHtcbiAgICAgIHZhciBleHRlbmRlZFJhbmdlID0gcmFuZ2UgKyAxO1xuICAgICAgaWYgKGlzRXZlbmx5RGl2aXNpYmxlQnlNYXhJbnQzMihleHRlbmRlZFJhbmdlKSkge1xuICAgICAgICB2YXIgaGlnaFJhbmdlID0gKChleHRlbmRlZFJhbmdlIC8gMHgxMDAwMDAwMDApIHwgMCkgLSAxO1xuICAgICAgICBpZiAoaXNQb3dlck9mVHdvTWludXNPbmUoaGlnaFJhbmdlKSkge1xuICAgICAgICAgIHJldHVybiB1cHNjYWxlV2l0aEhpZ2hNYXNraW5nKGhpZ2hSYW5nZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB1cHNjYWxlVG9Mb29wQ2hlY2tlZFJhbmdlKGV4dGVuZGVkUmFuZ2UpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwc2NhbGVXaXRoaW5JNTNBbmRMb29wQ2hlY2sobWluLCBtYXgpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgICAgIHZhciByZXQgPSAwO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgdmFyIGhpZ2ggPSBlbmdpbmUoKSB8IDA7XG4gICAgICAgICAgdmFyIGxvdyA9IGVuZ2luZSgpID4+PiAwO1xuICAgICAgICAgIHJldCA9ICgoaGlnaCAmIDB4MWZmZmZmKSAqIDB4MTAwMDAwMDAwKSArIGxvdyArIChoaWdoICYgMHgyMDAwMDAgPyAtMHgyMDAwMDAwMDAwMDAwMCA6IDApO1xuICAgICAgICB9IHdoaWxlIChyZXQgPCBtaW4gfHwgcmV0ID4gbWF4KTtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtaW4sIG1heCkge1xuICAgICAgbWluID0gTWF0aC5mbG9vcihtaW4pO1xuICAgICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xuICAgICAgaWYgKG1pbiA8IC0weDIwMDAwMDAwMDAwMDAwIHx8ICFpc0Zpbml0ZShtaW4pKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiRXhwZWN0ZWQgbWluIHRvIGJlIGF0IGxlYXN0IFwiICsgKC0weDIwMDAwMDAwMDAwMDAwKSk7XG4gICAgICB9IGVsc2UgaWYgKG1heCA+IDB4MjAwMDAwMDAwMDAwMDAgfHwgIWlzRmluaXRlKG1heCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJFeHBlY3RlZCBtYXggdG8gYmUgYXQgbW9zdCBcIiArIDB4MjAwMDAwMDAwMDAwMDApO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmFuZ2UgPSBtYXggLSBtaW47XG4gICAgICBpZiAocmFuZ2UgPD0gMCB8fCAhaXNGaW5pdGUocmFuZ2UpKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZShtaW4pO1xuICAgICAgfSBlbHNlIGlmIChyYW5nZSA9PT0gMHhmZmZmZmZmZikge1xuICAgICAgICBpZiAobWluID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIFJhbmRvbS51aW50MzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGFkZChSYW5kb20uaW50MzIsIG1pbiArIDB4ODAwMDAwMDApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHJhbmdlIDwgMHhmZmZmZmZmZikge1xuICAgICAgICByZXR1cm4gYWRkKGRvd25zY2FsZVRvUmFuZ2UocmFuZ2UpLCBtaW4pO1xuICAgICAgfSBlbHNlIGlmIChyYW5nZSA9PT0gMHgxZmZmZmZmZmZmZmZmZikge1xuICAgICAgICByZXR1cm4gYWRkKFJhbmRvbS51aW50NTMsIG1pbik7XG4gICAgICB9IGVsc2UgaWYgKHJhbmdlIDwgMHgxZmZmZmZmZmZmZmZmZikge1xuICAgICAgICByZXR1cm4gYWRkKHVwc2NhbGVXaXRoaW5VNTMocmFuZ2UpLCBtaW4pO1xuICAgICAgfSBlbHNlIGlmIChtYXggLSAxIC0gbWluID09PSAweDFmZmZmZmZmZmZmZmZmKSB7XG4gICAgICAgIHJldHVybiBhZGQoUmFuZG9tLnVpbnQ1M0Z1bGwsIG1pbik7XG4gICAgICB9IGVsc2UgaWYgKG1pbiA9PT0gLTB4MjAwMDAwMDAwMDAwMDAgJiYgbWF4ID09PSAweDIwMDAwMDAwMDAwMDAwKSB7XG4gICAgICAgIHJldHVybiBSYW5kb20uaW50NTNGdWxsO1xuICAgICAgfSBlbHNlIGlmIChtaW4gPT09IC0weDIwMDAwMDAwMDAwMDAwICYmIG1heCA9PT0gMHgxZmZmZmZmZmZmZmZmZikge1xuICAgICAgICByZXR1cm4gUmFuZG9tLmludDUzO1xuICAgICAgfSBlbHNlIGlmIChtaW4gPT09IC0weDFmZmZmZmZmZmZmZmZmICYmIG1heCA9PT0gMHgyMDAwMDAwMDAwMDAwMCkge1xuICAgICAgICByZXR1cm4gYWRkKFJhbmRvbS5pbnQ1MywgMSk7XG4gICAgICB9IGVsc2UgaWYgKG1heCA9PT0gMHgyMDAwMDAwMDAwMDAwMCkge1xuICAgICAgICByZXR1cm4gYWRkKHVwc2NhbGVXaXRoaW5JNTNBbmRMb29wQ2hlY2sobWluIC0gMSwgbWF4IC0gMSksIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHVwc2NhbGVXaXRoaW5JNTNBbmRMb29wQ2hlY2sobWluLCBtYXgpO1xuICAgICAgfVxuICAgIH07XG4gIH0oKSk7XG4gIHByb3RvLmludGVnZXIgPSBmdW5jdGlvbiAobWluLCBtYXgpIHtcbiAgICByZXR1cm4gUmFuZG9tLmludGVnZXIobWluLCBtYXgpKHRoaXMuZW5naW5lKTtcbiAgfTtcblxuICAvLyBbMCwgMV0gKGZsb2F0aW5nIHBvaW50KVxuICBSYW5kb20ucmVhbFplcm9Ub09uZUluY2x1c2l2ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgICByZXR1cm4gUmFuZG9tLnVpbnQ1M0Z1bGwoZW5naW5lKSAvIDB4MjAwMDAwMDAwMDAwMDA7XG4gIH07XG4gIHByb3RvLnJlYWxaZXJvVG9PbmVJbmNsdXNpdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFJhbmRvbS5yZWFsWmVyb1RvT25lSW5jbHVzaXZlKHRoaXMuZW5naW5lKTtcbiAgfTtcblxuICAvLyBbMCwgMSkgKGZsb2F0aW5nIHBvaW50KVxuICBSYW5kb20ucmVhbFplcm9Ub09uZUV4Y2x1c2l2ZSA9IGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgICByZXR1cm4gUmFuZG9tLnVpbnQ1MyhlbmdpbmUpIC8gMHgyMDAwMDAwMDAwMDAwMDtcbiAgfTtcbiAgcHJvdG8ucmVhbFplcm9Ub09uZUV4Y2x1c2l2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUmFuZG9tLnJlYWxaZXJvVG9PbmVFeGNsdXNpdmUodGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIFJhbmRvbS5yZWFsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBtdWx0aXBseShnZW5lcmF0ZSwgbXVsdGlwbGllcikge1xuICAgICAgaWYgKG11bHRpcGxpZXIgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlO1xuICAgICAgfSBlbHNlIGlmIChtdWx0aXBsaWVyID09PSAwKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgICAgICAgIHJldHVybiBnZW5lcmF0ZShlbmdpbmUpICogbXVsdGlwbGllcjtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGxlZnQsIHJpZ2h0LCBpbmNsdXNpdmUpIHtcbiAgICAgIGlmICghaXNGaW5pdGUobGVmdCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJFeHBlY3RlZCBsZWZ0IHRvIGJlIGEgZmluaXRlIG51bWJlclwiKTtcbiAgICAgIH0gZWxzZSBpZiAoIWlzRmluaXRlKHJpZ2h0KSkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkV4cGVjdGVkIHJpZ2h0IHRvIGJlIGEgZmluaXRlIG51bWJlclwiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhZGQoXG4gICAgICAgIG11bHRpcGx5KFxuICAgICAgICAgIGluY2x1c2l2ZSA/IFJhbmRvbS5yZWFsWmVyb1RvT25lSW5jbHVzaXZlIDogUmFuZG9tLnJlYWxaZXJvVG9PbmVFeGNsdXNpdmUsXG4gICAgICAgICAgcmlnaHQgLSBsZWZ0KSxcbiAgICAgICAgbGVmdCk7XG4gICAgfTtcbiAgfSgpKTtcbiAgcHJvdG8ucmVhbCA9IGZ1bmN0aW9uIChtaW4sIG1heCwgaW5jbHVzaXZlKSB7XG4gICAgcmV0dXJuIFJhbmRvbS5yZWFsKG1pbiwgbWF4LCBpbmNsdXNpdmUpKHRoaXMuZW5naW5lKTtcbiAgfTtcblxuICBSYW5kb20uYm9vbCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gaXNMZWFzdEJpdFRydWUoZW5naW5lKSB7XG4gICAgICByZXR1cm4gKGVuZ2luZSgpICYgMSkgPT09IDE7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbGVzc1RoYW4oZ2VuZXJhdGUsIHZhbHVlKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgICAgICByZXR1cm4gZ2VuZXJhdGUoZW5naW5lKSA8IHZhbHVlO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9iYWJpbGl0eShwZXJjZW50YWdlKSB7XG4gICAgICBpZiAocGVyY2VudGFnZSA8PSAwKSB7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZShmYWxzZSk7XG4gICAgICB9IGVsc2UgaWYgKHBlcmNlbnRhZ2UgPj0gMSkge1xuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWUodHJ1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgc2NhbGVkID0gcGVyY2VudGFnZSAqIDB4MTAwMDAwMDAwO1xuICAgICAgICBpZiAoc2NhbGVkICUgMSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBsZXNzVGhhbihSYW5kb20uaW50MzIsIChzY2FsZWQgLSAweDgwMDAwMDAwKSB8IDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBsZXNzVGhhbihSYW5kb20udWludDUzLCBNYXRoLnJvdW5kKHBlcmNlbnRhZ2UgKiAweDIwMDAwMDAwMDAwMDAwKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKG51bWVyYXRvciwgZGVub21pbmF0b3IpIHtcbiAgICAgIGlmIChkZW5vbWluYXRvciA9PSBudWxsKSB7XG4gICAgICAgIGlmIChudW1lcmF0b3IgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBpc0xlYXN0Qml0VHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvYmFiaWxpdHkobnVtZXJhdG9yKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChudW1lcmF0b3IgPD0gMCkge1xuICAgICAgICAgIHJldHVybiByZXR1cm5WYWx1ZShmYWxzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAobnVtZXJhdG9yID49IGRlbm9taW5hdG9yKSB7XG4gICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZXNzVGhhbihSYW5kb20uaW50ZWdlcigwLCBkZW5vbWluYXRvciAtIDEpLCBudW1lcmF0b3IpO1xuICAgICAgfVxuICAgIH07XG4gIH0oKSk7XG4gIHByb3RvLmJvb2wgPSBmdW5jdGlvbiAobnVtZXJhdG9yLCBkZW5vbWluYXRvcikge1xuICAgIHJldHVybiBSYW5kb20uYm9vbChudW1lcmF0b3IsIGRlbm9taW5hdG9yKSh0aGlzLmVuZ2luZSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gdG9JbnRlZ2VyKHZhbHVlKSB7XG4gICAgdmFyIG51bWJlciA9ICt2YWx1ZTtcbiAgICBpZiAobnVtYmVyIDwgMCkge1xuICAgICAgcmV0dXJuIE1hdGguY2VpbChudW1iZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcihudW1iZXIpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnZlcnRTbGljZUFyZ3VtZW50KHZhbHVlLCBsZW5ndGgpIHtcbiAgICBpZiAodmFsdWUgPCAwKSB7XG4gICAgICByZXR1cm4gTWF0aC5tYXgodmFsdWUgKyBsZW5ndGgsIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTWF0aC5taW4odmFsdWUsIGxlbmd0aCk7XG4gICAgfVxuICB9XG4gIFJhbmRvbS5waWNrID0gZnVuY3Rpb24gKGVuZ2luZSwgYXJyYXksIGJlZ2luLCBlbmQpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuICAgIHZhciBzdGFydCA9IGJlZ2luID09IG51bGwgPyAwIDogY29udmVydFNsaWNlQXJndW1lbnQodG9JbnRlZ2VyKGJlZ2luKSwgbGVuZ3RoKTtcbiAgICB2YXIgZmluaXNoID0gZW5kID09PSB2b2lkIDAgPyBsZW5ndGggOiBjb252ZXJ0U2xpY2VBcmd1bWVudCh0b0ludGVnZXIoZW5kKSwgbGVuZ3RoKTtcbiAgICBpZiAoc3RhcnQgPj0gZmluaXNoKSB7XG4gICAgICByZXR1cm4gdm9pZCAwO1xuICAgIH1cbiAgICB2YXIgZGlzdHJpYnV0aW9uID0gUmFuZG9tLmludGVnZXIoc3RhcnQsIGZpbmlzaCAtIDEpO1xuICAgIHJldHVybiBhcnJheVtkaXN0cmlidXRpb24oZW5naW5lKV07XG4gIH07XG4gIHByb3RvLnBpY2sgPSBmdW5jdGlvbiAoYXJyYXksIGJlZ2luLCBlbmQpIHtcbiAgICByZXR1cm4gUmFuZG9tLnBpY2sodGhpcy5lbmdpbmUsIGFycmF5LCBiZWdpbiwgZW5kKTtcbiAgfTtcblxuICBmdW5jdGlvbiByZXR1cm5VbmRlZmluZWQoKSB7XG4gICAgcmV0dXJuIHZvaWQgMDtcbiAgfVxuICB2YXIgc2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG4gIFJhbmRvbS5waWNrZXIgPSBmdW5jdGlvbiAoYXJyYXksIGJlZ2luLCBlbmQpIHtcbiAgICB2YXIgY2xvbmUgPSBzbGljZS5jYWxsKGFycmF5LCBiZWdpbiwgZW5kKTtcbiAgICBpZiAoIWNsb25lLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHJldHVyblVuZGVmaW5lZDtcbiAgICB9XG4gICAgdmFyIGRpc3RyaWJ1dGlvbiA9IFJhbmRvbS5pbnRlZ2VyKDAsIGNsb25lLmxlbmd0aCAtIDEpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZW5naW5lKSB7XG4gICAgICByZXR1cm4gY2xvbmVbZGlzdHJpYnV0aW9uKGVuZ2luZSldO1xuICAgIH07XG4gIH07XG5cbiAgUmFuZG9tLnNodWZmbGUgPSBmdW5jdGlvbiAoZW5naW5lLCBhcnJheSwgZG93blRvKSB7XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoKSB7XG4gICAgICBpZiAoZG93blRvID09IG51bGwpIHtcbiAgICAgICAgZG93blRvID0gMDtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAobGVuZ3RoIC0gMSkgPj4+IDA7IGkgPiBkb3duVG87IC0taSkge1xuICAgICAgICB2YXIgZGlzdHJpYnV0aW9uID0gUmFuZG9tLmludGVnZXIoMCwgaSk7XG4gICAgICAgIHZhciBqID0gZGlzdHJpYnV0aW9uKGVuZ2luZSk7XG4gICAgICAgIGlmIChpICE9PSBqKSB7XG4gICAgICAgICAgdmFyIHRtcCA9IGFycmF5W2ldO1xuICAgICAgICAgIGFycmF5W2ldID0gYXJyYXlbal07XG4gICAgICAgICAgYXJyYXlbal0gPSB0bXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFycmF5O1xuICB9O1xuICBwcm90by5zaHVmZmxlID0gZnVuY3Rpb24gKGFycmF5KSB7XG4gICAgcmV0dXJuIFJhbmRvbS5zaHVmZmxlKHRoaXMuZW5naW5lLCBhcnJheSk7XG4gIH07XG5cbiAgUmFuZG9tLnNhbXBsZSA9IGZ1bmN0aW9uIChlbmdpbmUsIHBvcHVsYXRpb24sIHNhbXBsZVNpemUpIHtcbiAgICBpZiAoc2FtcGxlU2l6ZSA8IDAgfHwgc2FtcGxlU2l6ZSA+IHBvcHVsYXRpb24ubGVuZ3RoIHx8ICFpc0Zpbml0ZShzYW1wbGVTaXplKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJFeHBlY3RlZCBzYW1wbGVTaXplIHRvIGJlIHdpdGhpbiAwIGFuZCB0aGUgbGVuZ3RoIG9mIHRoZSBwb3B1bGF0aW9uXCIpO1xuICAgIH1cblxuICAgIGlmIChzYW1wbGVTaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgdmFyIGNsb25lID0gc2xpY2UuY2FsbChwb3B1bGF0aW9uKTtcbiAgICB2YXIgbGVuZ3RoID0gY2xvbmUubGVuZ3RoO1xuICAgIGlmIChsZW5ndGggPT09IHNhbXBsZVNpemUpIHtcbiAgICAgIHJldHVybiBSYW5kb20uc2h1ZmZsZShlbmdpbmUsIGNsb25lLCAwKTtcbiAgICB9XG4gICAgdmFyIHRhaWxMZW5ndGggPSBsZW5ndGggLSBzYW1wbGVTaXplO1xuICAgIHJldHVybiBSYW5kb20uc2h1ZmZsZShlbmdpbmUsIGNsb25lLCB0YWlsTGVuZ3RoIC0gMSkuc2xpY2UodGFpbExlbmd0aCk7XG4gIH07XG4gIHByb3RvLnNhbXBsZSA9IGZ1bmN0aW9uIChwb3B1bGF0aW9uLCBzYW1wbGVTaXplKSB7XG4gICAgcmV0dXJuIFJhbmRvbS5zYW1wbGUodGhpcy5lbmdpbmUsIHBvcHVsYXRpb24sIHNhbXBsZVNpemUpO1xuICB9O1xuXG4gIFJhbmRvbS5kaWUgPSBmdW5jdGlvbiAoc2lkZUNvdW50KSB7XG4gICAgcmV0dXJuIFJhbmRvbS5pbnRlZ2VyKDEsIHNpZGVDb3VudCk7XG4gIH07XG4gIHByb3RvLmRpZSA9IGZ1bmN0aW9uIChzaWRlQ291bnQpIHtcbiAgICByZXR1cm4gUmFuZG9tLmRpZShzaWRlQ291bnQpKHRoaXMuZW5naW5lKTtcbiAgfTtcblxuICBSYW5kb20uZGljZSA9IGZ1bmN0aW9uIChzaWRlQ291bnQsIGRpZUNvdW50KSB7XG4gICAgdmFyIGRpc3RyaWJ1dGlvbiA9IFJhbmRvbS5kaWUoc2lkZUNvdW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgcmVzdWx0Lmxlbmd0aCA9IGRpZUNvdW50O1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWVDb3VudDsgKytpKSB7XG4gICAgICAgIHJlc3VsdFtpXSA9IGRpc3RyaWJ1dGlvbihlbmdpbmUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICB9O1xuICBwcm90by5kaWNlID0gZnVuY3Rpb24gKHNpZGVDb3VudCwgZGllQ291bnQpIHtcbiAgICByZXR1cm4gUmFuZG9tLmRpY2Uoc2lkZUNvdW50LCBkaWVDb3VudCkodGhpcy5lbmdpbmUpO1xuICB9O1xuXG4gIC8vIGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW5pdmVyc2FsbHlfdW5pcXVlX2lkZW50aWZpZXJcbiAgUmFuZG9tLnV1aWQ0ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiB6ZXJvUGFkKHN0cmluZywgemVyb0NvdW50KSB7XG4gICAgICByZXR1cm4gc3RyaW5nUmVwZWF0KFwiMFwiLCB6ZXJvQ291bnQgLSBzdHJpbmcubGVuZ3RoKSArIHN0cmluZztcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKGVuZ2luZSkge1xuICAgICAgdmFyIGEgPSBlbmdpbmUoKSA+Pj4gMDtcbiAgICAgIHZhciBiID0gZW5naW5lKCkgfCAwO1xuICAgICAgdmFyIGMgPSBlbmdpbmUoKSB8IDA7XG4gICAgICB2YXIgZCA9IGVuZ2luZSgpID4+PiAwO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICB6ZXJvUGFkKGEudG9TdHJpbmcoMTYpLCA4KSArXG4gICAgICAgIFwiLVwiICtcbiAgICAgICAgemVyb1BhZCgoYiAmIDB4ZmZmZikudG9TdHJpbmcoMTYpLCA0KSArXG4gICAgICAgIFwiLVwiICtcbiAgICAgICAgemVyb1BhZCgoKChiID4+IDQpICYgMHgwZmZmKSB8IDB4NDAwMCkudG9TdHJpbmcoMTYpLCA0KSArXG4gICAgICAgIFwiLVwiICtcbiAgICAgICAgemVyb1BhZCgoKGMgJiAweDNmZmYpIHwgMHg4MDAwKS50b1N0cmluZygxNiksIDQpICtcbiAgICAgICAgXCItXCIgK1xuICAgICAgICB6ZXJvUGFkKCgoYyA+PiA0KSAmIDB4ZmZmZikudG9TdHJpbmcoMTYpLCA0KSArXG4gICAgICAgIHplcm9QYWQoZC50b1N0cmluZygxNiksIDgpKTtcbiAgICB9O1xuICB9KCkpO1xuICBwcm90by51dWlkNCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gUmFuZG9tLnV1aWQ0KHRoaXMuZW5naW5lKTtcbiAgfTtcblxuICBSYW5kb20uc3RyaW5nID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBoYXMgMioqeCBjaGFycywgZm9yIGZhc3RlciB1bmlmb3JtIGRpc3RyaWJ1dGlvblxuICAgIHZhciBERUZBVUxUX1NUUklOR19QT09MID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ekFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaMDEyMzQ1Njc4OV8tXCI7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHBvb2wpIHtcbiAgICAgIGlmIChwb29sID09IG51bGwpIHtcbiAgICAgICAgcG9vbCA9IERFRkFVTFRfU1RSSU5HX1BPT0w7XG4gICAgICB9XG5cbiAgICAgIHZhciBsZW5ndGggPSBwb29sLmxlbmd0aDtcbiAgICAgIGlmICghbGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkV4cGVjdGVkIHBvb2wgbm90IHRvIGJlIGFuIGVtcHR5IHN0cmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGRpc3RyaWJ1dGlvbiA9IFJhbmRvbS5pbnRlZ2VyKDAsIGxlbmd0aCAtIDEpO1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChlbmdpbmUsIGxlbmd0aCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICAgIHZhciBqID0gZGlzdHJpYnV0aW9uKGVuZ2luZSk7XG4gICAgICAgICAgcmVzdWx0ICs9IHBvb2wuY2hhckF0KGopO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9O1xuICAgIH07XG4gIH0oKSk7XG4gIHByb3RvLnN0cmluZyA9IGZ1bmN0aW9uIChsZW5ndGgsIHBvb2wpIHtcbiAgICByZXR1cm4gUmFuZG9tLnN0cmluZyhwb29sKSh0aGlzLmVuZ2luZSwgbGVuZ3RoKTtcbiAgfTtcblxuICBSYW5kb20uaGV4ID0gKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgTE9XRVJfSEVYX1BPT0wgPSBcIjAxMjM0NTY3ODlhYmNkZWZcIjtcbiAgICB2YXIgbG93ZXJIZXggPSBSYW5kb20uc3RyaW5nKExPV0VSX0hFWF9QT09MKTtcbiAgICB2YXIgdXBwZXJIZXggPSBSYW5kb20uc3RyaW5nKExPV0VSX0hFWF9QT09MLnRvVXBwZXJDYXNlKCkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh1cHBlcikge1xuICAgICAgaWYgKHVwcGVyKSB7XG4gICAgICAgIHJldHVybiB1cHBlckhleDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb3dlckhleDtcbiAgICAgIH1cbiAgICB9O1xuICB9KCkpO1xuICBwcm90by5oZXggPSBmdW5jdGlvbiAobGVuZ3RoLCB1cHBlcikge1xuICAgIHJldHVybiBSYW5kb20uaGV4KHVwcGVyKSh0aGlzLmVuZ2luZSwgbGVuZ3RoKTtcbiAgfTtcblxuICBSYW5kb20uZGF0ZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgaWYgKCEoc3RhcnQgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIHN0YXJ0IHRvIGJlIGEgRGF0ZSwgZ290IFwiICsgdHlwZW9mIHN0YXJ0KTtcbiAgICB9IGVsc2UgaWYgKCEoZW5kIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBlbmQgdG8gYmUgYSBEYXRlLCBnb3QgXCIgKyB0eXBlb2YgZW5kKTtcbiAgICB9XG4gICAgdmFyIGRpc3RyaWJ1dGlvbiA9IFJhbmRvbS5pbnRlZ2VyKHN0YXJ0LmdldFRpbWUoKSwgZW5kLmdldFRpbWUoKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlbmdpbmUpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShkaXN0cmlidXRpb24oZW5naW5lKSk7XG4gICAgfTtcbiAgfTtcbiAgcHJvdG8uZGF0ZSA9IGZ1bmN0aW9uIChzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIFJhbmRvbS5kYXRlKHN0YXJ0LCBlbmQpKHRoaXMuZW5naW5lKTtcbiAgfTtcblxuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFJhbmRvbTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiByZXF1aXJlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IFJhbmRvbTtcbiAgfSBlbHNlIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9sZEdsb2JhbCA9IHJvb3RbR0xPQkFMX0tFWV07XG4gICAgICBSYW5kb20ubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcm9vdFtHTE9CQUxfS0VZXSA9IG9sZEdsb2JhbDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9O1xuICAgIH0oKSk7XG4gICAgcm9vdFtHTE9CQUxfS0VZXSA9IFJhbmRvbTtcbiAgfVxufSh0aGlzKSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvcmFuZG9tLWpzL2xpYi9yYW5kb20uanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3JhbmRvbS1qcy9saWIvcmFuZG9tLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbihzZWxlY3Rvcikge1xuXHRcdGlmICh0eXBlb2YgbWVtb1tzZWxlY3Rvcl0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdG1lbW9bc2VsZWN0b3JdID0gZm4uY2FsbCh0aGlzLCBzZWxlY3Rvcik7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1lbW9bc2VsZWN0b3JdXG5cdH07XG59KShmdW5jdGlvbiAodGFyZ2V0KSB7XG5cdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldClcbn0pO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcblx0aWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IC4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHJhbmdlXG59O1xuXG5mdW5jdGlvbiByYW5nZShudW1iZXIpIHtcbiAgICByZXR1cm4gQXJyYXkobnVtYmVyKS5maWxsKDApLm1hcCgoXywgaW5kZXgpID0+IGluZGV4KTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0FycmF5VXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL0FycmF5VXRpbHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgTG9nIGZyb20gJy4vTG9nLmpzJztcbmltcG9ydCBUeXBlIGZyb20gJy4vVHlwZS5qcyc7XG5pbXBvcnQgTWF0aFV0aWxzIGZyb20gJy4vTWF0aFV0aWxzLmpzJztcbmltcG9ydCBNYXQzIGZyb20gJy4vTWF0My5qcyc7XG5pbXBvcnQgTWF0NCBmcm9tICcuL01hdDQuanMnO1xuaW1wb3J0IFZlYzMgZnJvbSAnLi9WZWMzLmpzJztcbmltcG9ydCBWZWM0IGZyb20gJy4vVmVjNC5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICByZW5kZXJTY2VuZSxcbiAgICBnZXRHbENvbnRleHQsXG4gICAgZ2V0R2xvYmFsVHJhbnNmb3JtXG59O1xuXG5mdW5jdGlvbiByZW5kZXJTY2VuZShjYW52YXMsIHNjZW5lLCB0aW1lLCBlbmFibGVIYWNrKSB7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc09iamVjdCh0aW1lKSk7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc051bWJlcih0aW1lLnRvdGFsKSk7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc051bWJlcih0aW1lLmRlbHRhKSk7XG4gICAgLy8gY29uc29sZS5ncm91cCgnR2Z4Jyk7XG5cbiAgICB1cGRhdGVDYW52YXNTaXplKGNhbnZhcyk7XG4gICAgTG9nLnZlcmJvc2UoYHJlc2l6ZWQgY2FudmFzIHRvIFske2NhbnZhcy53aWR0aC50b0ZpeGVkKDApfSwgJHtjYW52YXMuaGVpZ2h0LnRvRml4ZWQoMCl9XWApO1xuXG4gICAgY29uc3QgZ2wgPSBnZXRHbENvbnRleHQoY2FudmFzKTtcbiAgICBnbC5lbmFibGUoZ2wuREVQVEhfVEVTVCk7XG4gICAgZ2wuZGVwdGhGdW5jKGdsLkxFUVVBTCk7XG4gICAgZ2wuZW5hYmxlKGdsLkNVTExfRkFDRSk7XG4gICAgZ2wudmlld3BvcnQoMCwgMCwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcblxuICAgIGNvbnN0IGNhbWVyYSA9IGdldEFjdGl2ZUNhbWVyYShzY2VuZSk7XG4gICAgY2FtZXJhLnByb2plY3Rpb24gPSBnZXRQcm9qZWN0aW9uTWF0cml4KGNhbWVyYSwgZ2wuY2FudmFzLndpZHRoIC8gZ2wuY2FudmFzLmhlaWdodCk7XG5cbiAgICBjb25zdCBjbGVhckNvbG9yID0gZ2V0Q2xlYXJDb2xvcihjYW1lcmEpO1xuICAgIGNsZWFyKGdsLCBjbGVhckNvbG9yKTtcbiAgICBMb2cudmVyYm9zZShgY2xlYXJlZCBjYW52YXMgd2l0aCBjb2xvcjogWyR7Y2xlYXJDb2xvci5tYXAobnVtID0+IG51bS50b0ZpeGVkKDApKS5qb2luKCcsICcpfV1gKTtcblxuICAgIExvZy52ZXJib3NlKCdjb250ZXh0OicsIGdsKTtcbiAgICBMb2cudmVyYm9zZSgnY2FtZXJhOicsIGNhbWVyYSk7XG4gICAgTG9nLnZlcmJvc2UoJ3NjZW5lOicsIHNjZW5lKTtcblxuICAgIGNvbnN0IHZpc2libGVOb2RlcyA9IHNjZW5lLm5vZGVzLmZpbHRlcihpc1Zpc2libGUpO1xuICAgIGNvbnN0IG1lc2hOb2RlcyA9IHZpc2libGVOb2Rlcy5maWx0ZXIoaGFzTWVzaCk7XG4gICAgY29uc3QgbGlnaHROb2RlcyA9IHZpc2libGVOb2Rlcy5maWx0ZXIoaGFzTGlnaHQpO1xuXG4gICAgaWYoZW5hYmxlSGFjaykge1xuICAgICAgICBIQUNLX2xvYWRUZXh0dXJlKGdsKTtcbiAgICB9XG5cbiAgICBtZXNoTm9kZXMuZm9yRWFjaChtZXNoTm9kZSA9PiB7XG4gICAgICAgIExvZy52ZXJib3NlKGByZW5kZXJpbmcgbWVzaCBub2RlOiAke21lc2hOb2RlLmtleX1gKTtcbiAgICAgICAgcmVuZGVyTm9kZShnbCwgbWVzaE5vZGUsIGNhbWVyYSwgdGltZSk7XG4gICAgfSk7XG5cbiAgICBsaWdodE5vZGVzLmZvckVhY2gobGlnaHROb2RlID0+IHtcbiAgICAgICAgTG9nLnZlcmJvc2UoYHJlbmRlcmluZyBsaWdodCBub2RlOiAke2xpZ2h0Tm9kZS5rZXl9YCk7XG4gICAgICAgIHJlbmRlckxpZ2h0KGdsLCBsaWdodE5vZGUsIG1lc2hOb2RlcywgY2FtZXJhLCB0aW1lKTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbn1cblxuZnVuY3Rpb24gSEFDS19sb2FkVGV4dHVyZShnbCkge1xuICAgIGNvbnN0IHRleGVscyA9IG5ldyBVaW50OEFycmF5KFtcbiAgICAgICAgMTk5LCAxODcsIDIwOSxcbiAgICAgICAgMjE1LCAxNTcsIDE1NSxcbiAgICAgICAgMjI0LCAxNDEsIDExMSxcbiAgICAgICAgMjI0LCAxNDEsIDExMSxcbiAgICAgICAgMTMyLCA0MCwgMzUsXG4gICAgICAgIDEzMiwgNDAsIDM1LFxuICAgIF0pO1xuICAgIC8qXG4gICAgY29uc3QgdGV4ZWxzID0gbmV3IFVpbnQ4QXJyYXkoW1xuICAgICAgICA4NSwgOTIsIDEwMixcbiAgICAgICAgMjM0LCAyMDgsIDE2OCxcbiAgICAgICAgMTMyLCA0MCwgMzUsXG4gICAgICAgIDEzMiwgNDAsIDM1LFxuICAgICAgICAxMzIsIDQwLCAzNSxcbiAgICAgICAgMTMyLCA0MCwgMzUsXG4gICAgICAgIDEzMiwgNDAsIDM1LFxuICAgICAgICAxMzIsIDQwLCAzNSxcbiAgICAgICAgMTMyLCA0MCwgMzUsXG4gICAgICAgIDEzMiwgNDAsIDM1LFxuICAgICAgICAyNTUsIDAsIDAsXG4gICAgICAgIDI1NSwgMCwgMCxcbiAgICAgICAgMjU1LCAwLCAwLFxuICAgIF0pO1xuICAgICovXG4gICAgY29uc3Qgd2lkdGggPSB0ZXhlbHMubGVuZ3RoIC8gMztcbiAgICBjb25zdCBoZWlnaHQgPSAxO1xuXG4gICAgY29uc3QgbGF5ZXJUZXh0dXJlID0gZ2wuY3JlYXRlVGV4dHVyZSgpO1xuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIGxheWVyVGV4dHVyZSk7XG4gICAgZ2wudGV4SW1hZ2UyRChnbC5URVhUVVJFXzJELCAwLCBnbC5SR0IsIHdpZHRoLCBoZWlnaHQsIDAsIGdsLlJHQiwgZ2wuVU5TSUdORURfQllURSwgdGV4ZWxzKTtcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTkVBUkVTVCk7XG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xuICAgIGdsLmFjdGl2ZVRleHR1cmUoZ2wuVEVYVFVSRTApO1xufVxuXG5mdW5jdGlvbiBjbGVhcihnbCwgY29sb3IpIHtcbiAgICBnbC5jbGVhckNvbG9yKC4uLmNvbG9yKTtcbiAgICBnbC5jbGVhcihnbC5DT0xPUl9CVUZGRVJfQklUIHwgZ2wuREVQVEhfQlVGRkVSX0JJVCk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlck5vZGUoZ2wsIG5vZGUsIGNhbWVyYSwgdGltZSkge1xuICAgIGNvbnNvbGUuYXNzZXJ0KGhhc01lc2gobm9kZSkpO1xuXG4gICAgaWYoaGFzTWVzaChub2RlKSkge1xuICAgICAgICBkcmF3TWVzaChnbCwgbm9kZS5tZXNoLCB7XG4gICAgICAgICAgICBzaGFkZXJQcm9ncmFtOiBub2RlLnNoYWRlclByb2dyYW0sXG4gICAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgICAgIHByb2plY3Rpb246IGNhbWVyYS5wcm9qZWN0aW9uLFxuICAgICAgICAgICAgICAgIHZpZXc6IE1hdDQuaW52ZXJzZShjYW1lcmEuZ2xvYmFsVHJhbnNmb3JtKSxcbiAgICAgICAgICAgICAgICB3b3JsZDogbm9kZS5nbG9iYWxUcmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgYWxiZWRvOiBnZXRBbGJlZG8obm9kZSksXG4gICAgICAgICAgICAgICAgdG90YWxUaW1lOiB0aW1lLnRvdGFsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdGVkU2hhZG93KGdsLCBsaWdodCwgcHJvcHMgPSB7fSkge1xuICAgIGxldCBsaWdodFBvcyA9IFZlYzMucGFyc2UobGlnaHQuZGlyZWN0aW9uKTtcbiAgICBsaWdodFBvcyA9IFZlYzMubm9ybWFsaXplKGxpZ2h0UG9zKTtcbiAgICBsaWdodFBvcyA9IFZlYzMuc2NhbGUobGlnaHRQb3MsIC0xKTtcbiAgICBsaWdodFBvcyA9IFZlYzMuc2NhbGUobGlnaHRQb3MsIE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKTtcbiAgICBsZXQgbGlnaHRNYXRyaXggPSBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgbGlnaHRQb3NbMV0sICAwLCAgICAgICAgICAgIDAsICAgICAgICAgICAwLFxuICAgICAgICAtbGlnaHRQb3NbMF0sIDAsIC1saWdodFBvc1syXSwgICAgICAgICAgLTEsXG4gICAgICAgIDAsICAgICAgICAgICAgMCwgIGxpZ2h0UG9zWzFdLCAgICAgICAgICAgMCxcbiAgICAgICAgMCwgICAgICAgICAgICAwLCAgICAgICAgICAgIDAsIGxpZ2h0UG9zWzFdLFxuICAgIF0pO1xuXG4gICAgbGV0IHQgPSBNYXQ0LmlkZW50aXR5KCk7XG4gICAgdCA9IE1hdDQubXVsdGlwbHkobGlnaHRNYXRyaXgsIHQpO1xuICAgIHQgPSBNYXQ0Lm11bHRpcGx5KHByb3BzLnNoYWRvd0Nhc3Rlci5nbG9iYWxUcmFuc2Zvcm0sIHQpO1xuXG4gICAgZHJhd01lc2goZ2wsIHByb3BzLnNoYWRvd0Nhc3Rlci5tZXNoLCB7XG4gICAgICAgIHNoYWRlclByb2dyYW06IHByb3BzLnNoYWRvd0Nhc3Rlci5zaGFkZXJQcm9ncmFtLFxuICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgd29ybGQ6IHQsXG4gICAgICAgICAgICB2aWV3OiBwcm9wcy51bmlmb3Jtcy52aWV3LFxuICAgICAgICAgICAgcHJvamVjdGlvbjogcHJvcHMudW5pZm9ybXMucHJvamVjdGlvbixcbiAgICAgICAgICAgIGFsYmVkbzogbmV3IEZsb2F0MzJBcnJheShWZWM0Lnplcm8oKSksXG4gICAgICAgICAgICB0b3RhbFRpbWU6IHByb3BzLnVuaWZvcm1zLnRvdGFsVGltZVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpZ2h0KGdsLCBsaWdodE5vZGUsIG1lc2hOb2RlcywgY2FtZXJhLCB0aW1lKSB7XG4gICAgY29uc29sZS5hc3NlcnQoZ2wpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KGhhc0xpZ2h0KGxpZ2h0Tm9kZSkpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNBcnJheShtZXNoTm9kZXMpKTtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzT2JqZWN0KGNhbWVyYSkpO1xuXG4gICAgZ2wuY29sb3JNYXNrKGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlKTtcbiAgICBtZXNoTm9kZXNcbiAgICAgICAgLmZpbHRlcihpc1NoYWRvd0Nhc3RlcilcbiAgICAgICAgLmZvckVhY2goc2hhZG93Q2FzdGVyID0+IHtcbiAgICAgICAgICAgIHJlbmRlclByb2plY3RlZFNoYWRvdyhnbCwgbGlnaHROb2RlLmxpZ2h0LCB7XG4gICAgICAgICAgICAgICAgc2hhZG93Q2FzdGVyOiBzaGFkb3dDYXN0ZXIsXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmlldzogTWF0NC5pbnZlcnNlKGNhbWVyYS5nbG9iYWxUcmFuc2Zvcm0pLFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiBjYW1lcmEucHJvamVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgdG90YWxUaW1lOiB0aW1lLnRvdGFsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIGdsLmNvbG9yTWFzayh0cnVlLCB0cnVlLCB0cnVlLCB0cnVlKTtcblxuICAgIGdsLmJsZW5kRnVuYyhnbC5PTkUsIGdsLk9ORSk7XG4gICAgZ2wuZW5hYmxlKGdsLkJMRU5EKTtcbiAgICBtZXNoTm9kZXMuZm9yRWFjaChtZXNoTm9kZSA9PiB7XG4gICAgICAgIGRyYXdNZXNoKGdsLCBtZXNoTm9kZS5tZXNoLCB7XG4gICAgICAgICAgICBzaGFkZXJQcm9ncmFtOiBsaWdodE5vZGUuc2hhZGVyUHJvZ3JhbSxcbiAgICAgICAgICAgIHVuaWZvcm1zOiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbjogY2FtZXJhLnByb2plY3Rpb24sXG4gICAgICAgICAgICAgICAgdmlldzogTWF0NC5pbnZlcnNlKGNhbWVyYS5nbG9iYWxUcmFuc2Zvcm0pLFxuICAgICAgICAgICAgICAgIHdvcmxkOiBtZXNoTm9kZS5nbG9iYWxUcmFuc2Zvcm0sXG4gICAgICAgICAgICAgICAgYWxiZWRvOiBnZXRBbGJlZG8obWVzaE5vZGUpLFxuICAgICAgICAgICAgICAgIGxpZ2h0Q29sb3I6IG5ldyBGbG9hdDMyQXJyYXkoWzEsIDEsIDEsIDFdKSxcbiAgICAgICAgICAgICAgICBsaWdodERpcmVjdGlvbjogbmV3IEZsb2F0MzJBcnJheShsaWdodE5vZGUubGlnaHQuZGlyZWN0aW9uKSxcbiAgICAgICAgICAgICAgICBsaWdodEludGVuc2l0eTogbGlnaHROb2RlLmxpZ2h0LmludGVuc2l0eSxcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWU6IHRpbWUudG90YWxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgZ2wuZGlzYWJsZShnbC5CTEVORCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdNZXNoKGdsLCBtZXNoLCB7c2hhZGVyUHJvZ3JhbSwgdW5pZm9ybXN9KSB7XG4gICAgY29uc29sZS5hc3NlcnQoZ2wpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KHNoYWRlclByb2dyYW0pO1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNPYmplY3QobWVzaCkpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KCdsYXlvdXQnIGluIG1lc2gpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KCd2ZXJ0ZXhDb3VudCcgaW4gbWVzaCk7XG4gICAgY29uc29sZS5hc3NlcnQoJ21vZGUnIGluIG1lc2gpO1xuXG4gICAgZ2wudXNlUHJvZ3JhbShzaGFkZXJQcm9ncmFtKTtcbiAgICBiaW5kTGF5b3V0KGdsLCBzaGFkZXJQcm9ncmFtLCBtZXNoLmxheW91dCk7XG5cbiAgICB1cGxvYWRVbmlmb3JtcyhnbCwgc2hhZGVyUHJvZ3JhbSwgdW5pZm9ybXMpO1xuICAgIGdsLmRyYXdBcnJheXMobWVzaC5tb2RlLCAwLCBtZXNoLnZlcnRleENvdW50KTtcblxuICAgIHVuYmluZExheW91dChtZXNoLmxheW91dCk7XG4gICAgZ2wudXNlUHJvZ3JhbShudWxsKTtcbn1cblxuZnVuY3Rpb24gdXBsb2FkVW5pZm9ybXMoZ2wsIHByb2dyYW0sIHVuaWZvcm1zKSB7XG4gICAgY29uc29sZS5hc3NlcnQoJ3VuaWZvcm1Mb2NhdGlvbnMnIGluIHByb2dyYW0pO1xuXG4gICAgT2JqZWN0XG4gICAgICAgIC5rZXlzKHVuaWZvcm1zKVxuICAgICAgICAubWFwKGtleSA9PiAoe1xuICAgICAgICAgICAgbG9jYXRpb246IHByb2dyYW0udW5pZm9ybUxvY2F0aW9uc1trZXldLFxuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdW5pZm9ybXNba2V5XVxuICAgICAgICB9KSlcbiAgICAgICAgLmZvckVhY2godHJpcGxlID0+IHtcbiAgICAgICAgICAgIGlmKCF0cmlwbGUubG9jYXRpb24pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4oYE1pc3NpbmcgdW5pZm9ybSAnJHt0cmlwbGUua2V5fScgaW4gc2hhZGVyICcke3NoYWRlcn0nYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21taXRVbmlmb3JtKGdsLCB0cmlwbGUubG9jYXRpb24sIHRyaXBsZS52YWx1ZSwgdHJpcGxlLmtleSk7XG4gICAgICAgIH0pO1xufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmZ1bmN0aW9uIGNvbW1pdFVuaWZvcm0oZ2wsIGxvY2F0aW9uLCB2YWx1ZSwga2V5KSB7XG4gICAgY29uc29sZS5hc3NlcnQobG9jYXRpb24pO1xuICAgIGNvbnNvbGUuYXNzZXJ0KCFUeXBlLmlzVW5kZWZpbmVkKHZhbHVlKSk7XG4gICAgY29uc29sZS5hc3NlcnQoIVR5cGUuaXNOdWxsKHZhbHVlKSk7XG5cbiAgICBpZihUeXBlLmlzTnVtYmVyKHZhbHVlKSkge1xuICAgICAgICAvLyBpZihOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSAmJiBrZXkgIT0gJ3V2U2NhbGUnKSB7XG4gICAgICAgIC8vZ2wudW5pZm9ybTFpKGxvY2F0aW9uLCB2YWx1ZSk7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gZWxzZSB7XG4gICAgICAgIGdsLnVuaWZvcm0xZihsb2NhdGlvbiwgdmFsdWUpO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIGlmKHZhbHVlLmxlbmd0aCA9PT0gMTYpIHtcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdihsb2NhdGlvbiwgZmFsc2UsIHZhbHVlKTtcbiAgICB9XG4gICAgaWYodmFsdWUubGVuZ3RoID09PSA0KSB7XG4gICAgICAgIGdsLnVuaWZvcm00ZnYobG9jYXRpb24sIHZhbHVlKTtcbiAgICB9XG4gICAgaWYodmFsdWUubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIGdsLnVuaWZvcm0zZnYobG9jYXRpb24sIHZhbHVlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRMYXlvdXQoZ2wsIHByb2dyYW0sIGxheW91dCkge1xuICAgIGNvbnNvbGUuYXNzZXJ0KGdsKTtcbiAgICBjb25zb2xlLmFzc2VydChwcm9ncmFtKTtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzQXJyYXkobGF5b3V0KSk7XG5cbiAgICBsYXlvdXQuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgbG9jYXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCBpdGVtLmtleSk7XG4gICAgICAgIGlmKGxvY2F0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGl0ZW0uYnVmZmVyKTtcbiAgICAgICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoXG4gICAgICAgICAgICAgICAgbG9jYXRpb24sXG4gICAgICAgICAgICAgICAgaXRlbS5lbGVtZW50TGVuZ3RoLFxuICAgICAgICAgICAgICAgIGl0ZW0udHlwZSxcbiAgICAgICAgICAgICAgICBpdGVtLm5vcm1hbGl6ZSxcbiAgICAgICAgICAgICAgICBpdGVtLnN0cmlkZSxcbiAgICAgICAgICAgICAgICBpdGVtLm9mZnNldFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGxvY2F0aW9uKTtcbiAgICAgICAgICAgIGdsLmJpbmRCdWZmZXIoZ2wuQVJSQVlfQlVGRkVSLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB1bmJpbmRMYXlvdXQoKSB7XG5cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2FudmFzU2l6ZShjYW52YXMpIHtcbiAgICBjb25zdCB3aWR0aCA9IGNhbnZhcy5wYXJlbnROb2RlLmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IGNhbnZhcy5wYXJlbnROb2RlLmNsaWVudEhlaWdodDtcblxuICAgIGlmKGNhbnZhcy53aWR0aCAhPT0gd2lkdGggfHwgY2FudmFzLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNWaXNpYmxlKG9iamVjdCkge1xuICAgIGNvbnN0IHBhcmVudFZpc2libGUgPSAncGFyZW50JyBpbiBvYmplY3QgPyBpc1Zpc2libGUob2JqZWN0LnBhcmVudCkgOiB0cnVlO1xuICAgIGNvbnN0IHZpc2libGUgPSAndmlzaWJsZScgaW4gb2JqZWN0ID8gb2JqZWN0LnZpc2libGUgOiB0cnVlO1xuXG4gICAgcmV0dXJuIHBhcmVudFZpc2libGUgJiYgdmlzaWJsZTtcbn1cblxuZnVuY3Rpb24gaXNTaGFkb3dDYXN0ZXIob2JqZWN0KSB7XG4gICAgcmV0dXJuICdzaGFkb3cnIGluIG9iamVjdCA/IG9iamVjdC5zaGFkb3cgOiB0cnVlO1xufVxuXG5mdW5jdGlvbiBoYXNNZXNoKG9iamVjdCkge1xuICAgIHJldHVybiAnbWVzaCcgaW4gb2JqZWN0O1xufVxuXG5mdW5jdGlvbiBoYXNMaWdodChvYmplY3QpIHtcbiAgICByZXR1cm4gJ2xpZ2h0JyBpbiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIGdldEFjdGl2ZUNhbWVyYShzY2VuZSkge1xuICAgIHJldHVybiBzY2VuZS5ub2Rlcy5maW5kKG5vZGUgPT4gbm9kZS5rZXkgPT09ICdjYW1lcmEnKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q2xlYXJDb2xvcihvYmplY3QpIHtcbiAgICByZXR1cm4gJ2NsZWFyQ29sb3InIGluIG9iamVjdCA/IG9iamVjdC5jbGVhckNvbG9yIDogWzAuMiwgMC4yLCAwLjIsIDFdO1xufVxuXG5mdW5jdGlvbiBnZXRHbENvbnRleHQoY2FudmFzKSB7XG4gICAgY29uc3QgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcbiAgICByZXR1cm4gZ2w7XG59XG5cbmZ1bmN0aW9uIGdldExvY2FsUm90YXRpb25NYXRyaXgob2JqZWN0KSB7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc09iamVjdChvYmplY3QpKTtcblxuICAgIGNvbnN0IGFuZ2xlcyA9IFZlYzMucGFyc2Uob2JqZWN0Lm9yaWVudGF0aW9uKTtcbiAgICByZXR1cm4gTWF0My5mcm9tRXVsZXJBbmdsZXMoYW5nbGVzKTtcbn1cblxuZnVuY3Rpb24gZ2V0TG9jYWxQb3NpdGlvbihvYmplY3QpIHtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzT2JqZWN0KG9iamVjdCkpO1xuICAgIHJldHVybiBWZWMzLnBhcnNlKG9iamVjdC5wb3NpdGlvbik7XG59XG5cbmZ1bmN0aW9uIGdldEdsb2JhbFNjYWxlTWF0cml4KG9iamVjdCkge1xuICAgIGlmKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIE1hdDMuaWRlbnRpdHkoKTtcbiAgICB9XG5cbiAgICBpZignc2NhbGUnIGluIG9iamVjdCkge1xuICAgICAgICByZXR1cm4gTWF0My5zY2FsZShWZWMzLnBhcnNlKG9iamVjdC5zY2FsZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBNYXQzLmlkZW50aXR5KCk7XG59XG5cbmZ1bmN0aW9uIGdldEdsb2JhbFJvdGF0aW9uTWF0cml4KG9iamVjdCkge1xuICAgIGlmKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIE1hdDMuaWRlbnRpdHkoKTtcbiAgICB9XG5cbiAgICBpZignbG9va2F0JyBpbiBvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIE1hdDMubG9va0F0KGdldEdsb2JhbFBvc2l0aW9uKG9iamVjdCksIG9iamVjdC5sb29rYXQsIFswLCAxLCAwXSk7XG4gICAgfVxuXG4gICAgY29uc3QgZ2xvYmFsUGFyZW50Um90YXRpb24gPSBnZXRHbG9iYWxSb3RhdGlvbk1hdHJpeChvYmplY3QucGFyZW50KTtcbiAgICBjb25zdCBsb2NhbFJvdGF0aW9uID0gZ2V0TG9jYWxSb3RhdGlvbk1hdHJpeChvYmplY3QpO1xuICAgIHJldHVybiBNYXQzLm11bHRpcGx5KGdsb2JhbFBhcmVudFJvdGF0aW9uLCBsb2NhbFJvdGF0aW9uKTtcbn1cblxuZnVuY3Rpb24gZ2V0R2xvYmFsVHJhbnNmb3JtKG9iamVjdCkge1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNPYmplY3Qob2JqZWN0KSk7XG5cbiAgICBjb25zdCBzY2FsZSA9IGdldEdsb2JhbFNjYWxlTWF0cml4KG9iamVjdCk7XG4gICAgY29uc3Qgcm90YXRpb24gPSBnZXRHbG9iYWxSb3RhdGlvbk1hdHJpeChvYmplY3QpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gZ2V0R2xvYmFsUG9zaXRpb24ob2JqZWN0KTtcbiAgICByZXR1cm4gTWF0NC5tdWx0aXBseShcbiAgICAgICAgTWF0NC5mcm9tTWF0MyhzY2FsZSksXG4gICAgICAgIE1hdDQuZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24ocm90YXRpb24sIHBvc2l0aW9uKVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldEdsb2JhbFBvc2l0aW9uKG9iamVjdCkge1xuICAgIGlmKCFvYmplY3QpIHtcbiAgICAgICAgcmV0dXJuIFZlYzMuemVybygpO1xuICAgIH1cblxuICAgIGNvbnN0IGdsb2JhbFBhcmVudFBvc2l0aW9uID0gZ2V0R2xvYmFsUG9zaXRpb24ob2JqZWN0LnBhcmVudCk7XG4gICAgY29uc3QgZ2xvYmFsUGFyZW50Um90YXRpb24gPSBnZXRHbG9iYWxSb3RhdGlvbk1hdHJpeChvYmplY3QucGFyZW50KTtcbiAgICBjb25zdCBsb2NhbFBvc2l0aW9uID0gZ2V0TG9jYWxQb3NpdGlvbihvYmplY3QpO1xuXG4gICAgcmV0dXJuIFZlYzMuYWRkKFxuICAgICAgICBnbG9iYWxQYXJlbnRQb3NpdGlvbixcbiAgICAgICAgVmVjMy50cmFuc2Zvcm0obG9jYWxQb3NpdGlvbiwgZ2xvYmFsUGFyZW50Um90YXRpb24pXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvamVjdGlvbk1hdHJpeChjYW1lcmEsIGFyKSB7XG4gICAgY29uc3QgbmVhciA9ICduZWFyJyBpbiBjYW1lcmEgPyBjYW1lcmEubmVhciA6IDAuMTtcbiAgICBjb25zdCBmYXIgPSAnZmFyJyBpbiBjYW1lcmEgPyBjYW1lcmEuZmFyIDogMTAwMDtcbiAgICBjb25zdCB0eXBlID0gJ3BlcnNwZWN0aXZlJztcbiAgICBjb25zdCBmb3YgPSBNYXRoVXRpbHMuZGVnVG9SYWQoJ2ZvdicgaW4gY2FtZXJhID8gY2FtZXJhLmZvdiA6IDkwKTtcbiAgICBjb25zdCBoRm92ID0gMiAqIE1hdGguYXRhbihNYXRoLnRhbihmb3YgLyAyKSAvIGFyKTtcblxuICAgIHJldHVybiBNYXQ0LnBlcnNwZWN0aXZlKGFyLCBoRm92LCBuZWFyLCBmYXIpO1xufVxuXG5mdW5jdGlvbiBnZXRBbGJlZG8ob2JqZWN0KSB7XG4gICAgcmV0dXJuICdhbGJlZG8nIGluIG9iamVjdD8gb2JqZWN0LmFsYmVkbyA6IFsxLCAxLCAxLCAxXTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0dmeC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvR2Z4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmcm9tTWVzaCxcbn07XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oLi4uYXJyYXlzKSB7XG4gICAgcmV0dXJuIGFycmF5cy5yZWR1Y2UoKHJlc3VsdCwgaXRlbSkgPT4ge1xuICAgICAgICByZXN1bHQucHVzaCguLi5pdGVtKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBbXSk7XG59XG5cbmZ1bmN0aW9uIGZyb21NZXNoKGdsLCBtZXNoKSB7XG4gICAgY29uc29sZS5hc3NlcnQoZ2wpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNPYmplY3QobWVzaCkpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNBcnJheShtZXNoLnBvc2l0aW9ucykpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KCdtb2RlJyBpbiBtZXNoKTtcblxuICAgIGNvbnN0IGNvbXBvbmVudHMgPSBPYmplY3Qua2V5cyhtZXNoKVxuICAgICAgICAubWFwKGtleSA9PiAoeyBrZXksIHZhbHVlOiBtZXNoW2tleV0gfSkpXG4gICAgICAgIC5maWx0ZXIocGFpciA9PiBUeXBlLmlzQXJyYXkocGFpci52YWx1ZSkpXG4gICAgICAgIC5tYXAocGFpciA9PiAoe1xuICAgICAgICAgICAga2V5OiBwYWlyLmtleSxcbiAgICAgICAgICAgIGRhdGE6IG5ldyBGbG9hdDMyQXJyYXkoZmxhdHRlbiguLi5wYWlyLnZhbHVlKSksXG4gICAgICAgICAgICBpdGVtTGVuZ3RoOiBwYWlyLnZhbHVlWzBdLmxlbmd0aFxuICAgICAgICB9KSk7XG5cbiAgICAvKlxuICAgIC8vIHNlcGFyYXRlIHZlcnRleCBjb21wb25lbnRzIGludG8gMWQgYXJyYXlzXG4gICAgY29uc3QgY29tcG9uZW50cyA9IG1lc2gudmVydGljZXMucmVkdWNlKChvYmplY3QsIHZlcnRleCkgPT4ge1xuICAgICAgICBPYmplY3Qua2V5cyh2ZXJ0ZXgpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgICAgIGlmKGtleSBpbiBvYmplY3QgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgb2JqZWN0W2tleV0gPSB7IGRhdGE6IFtdLCBpdGVtTGVuZ3RoOiB2ZXJ0ZXhba2V5XS5sZW5ndGggfTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQodmVydGV4W2tleV0ubGVuZ3RoID09PSBvYmplY3Rba2V5XS5pdGVtTGVuZ3RoKTtcbiAgICAgICAgICAgIG9iamVjdFtrZXldLmRhdGEucHVzaCguLi52ZXJ0ZXhba2V5XSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgfSwge30pO1xuICAgICovXG5cblxuICAgIGNvbnN0IGxheW91dCA9IGNvbXBvbmVudHNcbiAgICAgICAgLm1hcChjb21wb25lbnQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5hc3NlcnQoY29tcG9uZW50LmRhdGEgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXkpO1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XG4gICAgICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcbiAgICAgICAgICAgIGdsLmJ1ZmZlckRhdGEoZ2wuQVJSQVlfQlVGRkVSLCBjb21wb25lbnQuZGF0YSwgZ2wuU1RBVElDX0RSQVcpO1xuICAgICAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIG51bGwpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC8vIHN0cmlwIHRyYWlsaW5nICdzJyBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIHNoYWRlciBpZGVudGlmaWVyXG4gICAgICAgICAgICAgICAga2V5OiBjb21wb25lbnQua2V5LnN1YnN0cigwLCBjb21wb25lbnQua2V5Lmxlbmd0aCAtIDEpLFxuICAgICAgICAgICAgICAgIGJ1ZmZlcjogYnVmZmVyLFxuICAgICAgICAgICAgICAgIHR5cGU6IGdsLkZMT0FULFxuICAgICAgICAgICAgICAgIGVsZW1lbnRMZW5ndGg6IGNvbXBvbmVudC5pdGVtTGVuZ3RoLFxuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3RyaWRlOiAwLFxuICAgICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGF5b3V0OiBsYXlvdXQsXG4gICAgICAgIHZlcnRleENvdW50OiBjb21wb25lbnRzWzBdLmRhdGEubGVuZ3RoIC8gY29tcG9uZW50c1swXS5pdGVtTGVuZ3RoLFxuICAgICAgICBtb2RlOiBnbFttZXNoLm1vZGVdXG4gICAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0dsTWVzaC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvR2xNZXNoLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB2ZXJib3NlXG59O1xuXG5mdW5jdGlvbiB2ZXJib3NlKC4uLnBhcmFtcykge1xuICAgIC8vY29uc29sZS5sb2coLi4ucGFyYW1zKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL0xvZy5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvTG9nLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZS5qcyc7XG5pbXBvcnQgVmVjMyBmcm9tICcuL1ZlYzMuanMnO1xuXG5jb25zdCBST1dTID0gMztcbmNvbnN0IENPTFVNTlMgPSAzO1xuXG5jb25zdCBST1dfTEVOR1RIID0gQ09MVU1OUztcbmNvbnN0IEVMRU1FTlRTID0gUk9XUyAqIENPTFVNTlM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwYXJzZSxcbiAgICBpZGVudGl0eSxcbiAgICBmcm9tRXVsZXJBbmdsZXMsXG4gICAgbXVsdGlwbHksXG4gICAgZ2V0Q29sdW1uLFxuICAgIGdldENvbHVtbkZhc3QsXG4gICAgcm90YXRpb25YLFxuICAgIHJvdGF0aW9uWSxcbiAgICByb3RhdGlvblosXG4gICAgc2NhbGUsXG4gICAgbG9va0F0XG59O1xuXG5mdW5jdGlvbiBwYXJzZSh2YWx1ZSkge1xuICAgIGlmKFR5cGUuaXNBcnJheSh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAzKSB7XG4gICAgICAgIHJldHVybiBmcm9tRXVsZXJBbmdsZXMoLi4udmFsdWUpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBGYWlsZWQgdG8gcGFyc2UgdmFsdWUgb2YgdHlwZSAnJHtUeXBlLmdldE5hbWUodmFsdWUpfScgaW50byBhIE1hdDNgKTtcbn1cblxuZnVuY3Rpb24gaWRlbnRpdHkoKSB7XG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAxLCAwLCAwLFxuICAgICAgICAwLCAxLCAwLFxuICAgICAgICAwLCAwLCAxXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIGZyb21FdWxlckFuZ2xlcyhhbmdsZXMpIHtcbiAgICAvL2NvbnNvbGUuYXNzZXJ0KFR5cGUuaXNBcnJheShhbmdsZXMpKTtcblxuICAgIGNvbnN0IGhlYWRpbmcgPSByb3RhdGlvblkoYW5nbGVzWzFdKTtcbiAgICBjb25zdCBwaXRjaCA9IHJvdGF0aW9uWChhbmdsZXNbMF0pO1xuICAgIGNvbnN0IGJhbmsgPSByb3RhdGlvblooYW5nbGVzWzJdKTtcblxuICAgIHJldHVybiBtdWx0aXBseShiYW5rLCBwaXRjaCwgaGVhZGluZyk7XG59XG5cbmxldCBfbXVsdGlwbHlfbTJjb2wgPSBudWxsO1xubGV0IF9tdWx0aXBseV9tMXJvdyA9IG51bGw7XG5mdW5jdGlvbiBtdWx0aXBseShtMSwgbTIsIC4uLm1hdHJpY2VzKSB7XG4gICAgaWYoX211bHRpcGx5X20yY29sID09PSBudWxsKSB7XG4gICAgICAgIF9tdWx0aXBseV9tMmNvbCA9IFZlYzMuemVybygpO1xuICAgICAgICBfbXVsdGlwbHlfbTFyb3cgPSBWZWMzLnplcm8oKTtcbiAgICB9XG5cbiAgICBpZighbTIpIHtcbiAgICAgICAgcmV0dXJuIG0xO1xuICAgIH1cblxuICAgIF9tdWx0aXBseV9tMmNvbFswXSA9IDA7XG4gICAgX211bHRpcGx5X20yY29sWzFdID0gMDtcbiAgICBfbXVsdGlwbHlfbTJjb2xbMl0gPSAwO1xuXG4gICAgX211bHRpcGx5X20xcm93WzBdID0gMDtcbiAgICBfbXVsdGlwbHlfbTFyb3dbMV0gPSAwO1xuICAgIF9tdWx0aXBseV9tMXJvd1syXSA9IDA7XG4gICAgY29uc3QgbTFyb3cgPSBfbXVsdGlwbHlfbTFyb3c7XG4gICAgY29uc3QgbTJjb2wgPSBfbXVsdGlwbHlfbTJjb2w7XG4gICAgbGV0IHJlc3VsdCA9IG5ldyBGbG9hdDMyQXJyYXkoRUxFTUVOVFMpO1xuICAgIGZvcihsZXQgcm93ID0gMDsgcm93IDwgUk9XUzsgcm93KyspIHtcbiAgICAgICAgZm9yKGxldCBjb2wgPSAwOyBjb2wgPCBDT0xVTU5TOyBjb2wrKykge1xuICAgICAgICAgICAgZ2V0Um93RmFzdChtMXJvdywgbTEsIHJvdyk7XG4gICAgICAgICAgICBnZXRDb2x1bW5GYXN0KG0yY29sLCBtMiwgY29sKTtcbiAgICAgICAgICAgIHJlc3VsdFtyb3cgKiBST1dfTEVOR1RIICsgY29sXSA9IFZlYzMuZG90KG0xcm93LCBtMmNvbCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXVsdGlwbHkocmVzdWx0LCAuLi5tYXRyaWNlcyk7XG59XG5cbmZ1bmN0aW9uIHJvdGF0aW9uWChhbmdsZSkge1xuICAgIGNvbnN0IHl5ID0gTWF0aC5jb3MoYW5nbGUpO1xuICAgIGNvbnN0IHl6ID0gTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgY29uc3QgenkgPSAtTWF0aC5zaW4oYW5nbGUpO1xuICAgIGNvbnN0IHp6ID0gTWF0aC5jb3MoYW5nbGUpO1xuXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAxLCAwLCAwLFxuICAgICAgICAwLCB5eSwgeXosXG4gICAgICAgIDAsIHp5LCB6eixcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gcm90YXRpb25ZKGFuZ2xlKSB7XG4gICAgY29uc3QgeHggPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgY29uc3QgeHogPSAtTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgY29uc3QgenggPSBNYXRoLnNpbihhbmdsZSk7XG4gICAgY29uc3QgenogPSBNYXRoLmNvcyhhbmdsZSk7XG5cbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIHh4LCAwLCB4eixcbiAgICAgICAgMCwgMSwgMCxcbiAgICAgICAgengsIDAsIHp6LFxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiByb3RhdGlvblooYW5nbGUpIHtcbiAgICBjb25zdCB4eCA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICBjb25zdCB4eSA9IE1hdGguc2luKGFuZ2xlKTtcblxuICAgIGNvbnN0IHl4ID0gLU1hdGguc2luKGFuZ2xlKTtcbiAgICBjb25zdCB5eSA9IE1hdGguY29zKGFuZ2xlKTtcblxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgeHgsIHh5LCAwLFxuICAgICAgICB5eCwgeXksIDAsXG4gICAgICAgIDAsIDAsIDEsXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIGdldFJvdyhtLCByb3cpIHtcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgbS5idWZmZXIsXG4gICAgICAgIHJvdyAqIFJPV19MRU5HVEggKiBtLkJZVEVTX1BFUl9FTEVNRU5ULFxuICAgICAgICBST1dfTEVOR1RIXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0Um93RmFzdChvdXQsIG0sIHJvdykge1xuICAgIG91dFswXSA9IG1bcm93ICogUk9XX0xFTkdUSCArIDBdO1xuICAgIG91dFsxXSA9IG1bcm93ICogUk9XX0xFTkdUSCArIDFdO1xuICAgIG91dFsyXSA9IG1bcm93ICogUk9XX0xFTkdUSCArIDJdO1xufVxuXG5mdW5jdGlvbiBnZXRDb2x1bW4obSwgY29sKSB7XG4gICAgcmV0dXJuIFZlYzMuZnJvbVZhbHVlcyhcbiAgICAgICAgbVswICogUk9XX0xFTkdUSCArIGNvbF0sXG4gICAgICAgIG1bMSAqIFJPV19MRU5HVEggKyBjb2xdLFxuICAgICAgICBtWzIgKiBST1dfTEVOR1RIICsgY29sXVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGdldENvbHVtbkZhc3Qob3V0LCBtLCBjb2wpIHtcbiAgICBvdXRbMF0gPSBtWzAgKiBST1dfTEVOR1RIICsgY29sXTtcbiAgICBvdXRbMV0gPSBtWzEgKiBST1dfTEVOR1RIICsgY29sXTtcbiAgICBvdXRbMl0gPSBtWzIgKiBST1dfTEVOR1RIICsgY29sXTtcbn1cblxuZnVuY3Rpb24gc2NhbGUodikge1xuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgdlswXSwgMCwgMCxcbiAgICAgICAgMCwgdlsxXSwgMCxcbiAgICAgICAgMCwgMCwgdlsyXSxcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gbG9va0F0KGV5ZSwgdGFyZ2V0LCB1cCkge1xuICAgIGNvbnN0IGZvcndhcmQgPSBWZWMzLm5vcm1hbGl6ZShWZWMzLnN1YihleWUsIHRhcmdldCkpO1xuICAgIGNvbnN0IHJpZ2h0ID0gVmVjMy5jcm9zcyh1cCwgZm9yd2FyZCk7XG4gICAgdXAgPSBWZWMzLmNyb3NzKGZvcndhcmQsIHJpZ2h0KTtcblxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLi4ucmlnaHQsXG4gICAgICAgIC4uLnVwLFxuICAgICAgICAuLi5mb3J3YXJkLFxuICAgIF0pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTWF0My5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvTWF0My5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgVHlwZSBmcm9tICcuL1R5cGUuanMnO1xuaW1wb3J0IFZlYzMgZnJvbSAnLi9WZWMzLmpzJztcbmltcG9ydCBWZWM0IGZyb20gJy4vVmVjNC5qcyc7XG5cbmNvbnN0IFJPV1MgPSA0O1xuY29uc3QgUk9XX0xFTkdUSCA9IDQ7XG5jb25zdCBDT0xVTU5TID0gNDtcbmNvbnN0IEVMRU1FTlRTID0gUk9XUyAqIENPTFVNTlM7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpZGVudGl0eSxcbiAgICBmcm9tRXVsZXJBbmdsZXMsXG4gICAgZnJvbU1hdDMsXG4gICAgZnJvbVJvdGF0aW9uVHJhbnNsYXRpb24sXG4gICAgbXVsdGlwbHksXG4gICAgdHJhbnNsYXRpb24sXG4gICAgbG9va0F0LFxuICAgIHNldFRyYW5zbGF0aW9uLFxuICAgIG9ydGhvZ3JhcGhpYyxcbiAgICBwZXJzcGVjdGl2ZSxcbiAgICByb3RhdGlvblksXG4gICAgaW52ZXJzZSxcbn07XG5cbmZ1bmN0aW9uIHBlcnNwZWN0aXZlKGFyLCBmb3YsIG5lYXIsIGZhcikge1xuICAgIGNvbnNvbGUuYXNzZXJ0KGZhciA+IG5lYXIpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KGZvdiA+IDApO1xuICAgIGNvbnNvbGUuYXNzZXJ0KGZvdiA8IE1hdGguUEkgKiAyKTtcbiAgICBjb25zb2xlLmFzc2VydChhciA+IDApO1xuXG4gICAgY29uc3QgZiA9IDEuMCAvIE1hdGgudGFuKGZvdiAqIDAuNSk7XG5cbiAgICBsZXQgbSA9IGlkZW50aXR5KCk7XG4gICAgbVswXSA9IGYgLyBhcjtcbiAgICBtWzVdID0gZjtcbiAgICBtWzEwXSA9IChmYXIgKyBuZWFyKSAvIChuZWFyIC0gZmFyKTtcbiAgICBtWzExXSA9IC0xLjA7XG4gICAgbVsxNF0gPSAoMi4wICogZmFyICogbmVhcikgLyAobmVhciAtIGZhcik7XG4gICAgbVsxNV0gPSAwLjA7XG5cbiAgICByZXR1cm4gbTtcbn1cblxuZnVuY3Rpb24gc2V0VHJhbnNsYXRpb24obSwgdikge1xuICAgIG1bMTJdID0gdlswXTtcbiAgICBtWzEzXSA9IHZbMV07XG4gICAgbVsxNF0gPSB2WzJdO1xuXG4gICAgcmV0dXJuIG07XG59XG5cbmZ1bmN0aW9uIGZyb21NYXQzKG0pIHtcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIG1bMF0sIG1bMV0sIG1bMl0sIDAsXG4gICAgICAgIG1bM10sIG1bNF0sIG1bNV0sIDAsXG4gICAgICAgIG1bNl0sIG1bN10sIG1bOF0sIDAsXG4gICAgICAgIDAsICAgICAgIDAsICAgIDAsIDEsXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIGZyb21Sb3RhdGlvblRyYW5zbGF0aW9uKHJvdCwgdHJhbnMpIHtcbiAgICByZXR1cm4gc2V0VHJhbnNsYXRpb24oZnJvbU1hdDMocm90KSwgdHJhbnMpO1xufVxuXG5mdW5jdGlvbiBsb29rQXQoZXllLCB0YXJnZXQsIHVwKSB7XG4gICAgY29uc3QgZm9yd2FyZCA9IFZlYzMubm9ybWFsaXplKFZlYzMuc3ViKGV5ZSwgdGFyZ2V0KSk7XG4gICAgY29uc3QgcmlnaHQgPSBWZWMzLmNyb3NzKHVwLCBmb3J3YXJkKTtcbiAgICB1cCA9IFZlYzMuY3Jvc3MoZm9yd2FyZCwgcmlnaHQpO1xuXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAuLi5yaWdodCwgMCxcbiAgICAgICAgLi4udXAsIDAsXG4gICAgICAgIC4uLmZvcndhcmQsIDAsXG4gICAgICAgIC4uLmV5ZSwgMVxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiBpZGVudGl0eSgpIHtcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDEsIDAsIDAsIDAsXG4gICAgICAgIDAsIDEsIDAsIDAsXG4gICAgICAgIDAsIDAsIDEsIDAsXG4gICAgICAgIDAsIDAsIDAsIDFcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRpb24odikge1xuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMSwgMCwgMCwgMCxcbiAgICAgICAgMCwgMSwgMCwgMCxcbiAgICAgICAgMCwgMCwgMSwgMCxcbiAgICAgICAgdlswXSwgdlsxXSwgdlsyXSwgMVxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiBmcm9tRXVsZXJBbmdsZXMoYW5nbGVzKSB7XG4gICAgY29uc3QgaGVhZGluZyA9IHJvdGF0aW9uWShhbmdsZXNbMV0pO1xuICAgIGNvbnN0IHBpdGNoID0gcm90YXRpb25YKGFuZ2xlc1swXSk7XG4gICAgY29uc3QgYmFuayA9IHJvdGF0aW9uWihhbmdsZXNbMl0pO1xuXG4gICAgcmV0dXJuIG11bHRpcGx5KGJhbmssIHBpdGNoLCBoZWFkaW5nKTtcbn1cblxuZnVuY3Rpb24gcm90YXRpb25YKGFuZ2xlKSB7XG4gICAgY29uc3QgeXkgPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgY29uc3QgeXogPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICBjb25zdCB6eSA9IC1NYXRoLnNpbihhbmdsZSk7XG4gICAgY29uc3QgenogPSBNYXRoLmNvcyhhbmdsZSk7XG5cbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDEsIDAsIDAsIDAsXG4gICAgICAgIDAsIHl5LCB5eiwgMCxcbiAgICAgICAgMCwgenksIHp6LCAwLFxuICAgICAgICAwLCAwLCAwLCAxLFxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiByb3RhdGlvblkoYW5nbGUpIHtcbiAgICBjb25zdCB4eCA9IE1hdGguY29zKGFuZ2xlKTtcbiAgICBjb25zdCB4eiA9IC1NYXRoLnNpbihhbmdsZSk7XG5cbiAgICBjb25zdCB6eCA9IE1hdGguc2luKGFuZ2xlKTtcbiAgICBjb25zdCB6eiA9IE1hdGguY29zKGFuZ2xlKTtcblxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgeHgsIDAsIHh6LCAwLFxuICAgICAgICAwLCAxLCAwLCAwLFxuICAgICAgICB6eCwgMCwgenosIDAsXG4gICAgICAgIDAsIDAsIDAsIDFcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gcm90YXRpb25aKGFuZ2xlKSB7XG4gICAgY29uc3QgeHggPSBNYXRoLmNvcyhhbmdsZSk7XG4gICAgY29uc3QgeHkgPSBNYXRoLnNpbihhbmdsZSk7XG5cbiAgICBjb25zdCB5eCA9IC1NYXRoLnNpbihhbmdsZSk7XG4gICAgY29uc3QgeXkgPSBNYXRoLmNvcyhhbmdsZSk7XG5cbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIHh4LCB4eSwgMCwgMCxcbiAgICAgICAgeXgsIHl5LCAwLCAwLFxuICAgICAgICAwLCAwLCAxLCAwLFxuICAgICAgICAwLCAwLCAwLCAxXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5KG0xLCBtMiwgLi4ubWF0cmljZXMpIHtcbiAgICBpZighbTIpIHtcbiAgICAgICAgcmV0dXJuIG0xO1xuICAgIH1cbiAgICBjb25zb2xlLmFzc2VydChtMS5sZW5ndGggPT09IDE2KTtcbiAgICBjb25zb2xlLmFzc2VydChtMi5sZW5ndGggPT09IDE2KTtcblxuICAgIGxldCByZXN1bHQgPSBuZXcgRmxvYXQzMkFycmF5KEVMRU1FTlRTKTtcbiAgICBmb3IobGV0IHJvdyA9IDA7IHJvdyA8IFJPV1M7IHJvdysrKSB7XG4gICAgICAgIGZvcihsZXQgY29sID0gMDsgY29sIDwgQ09MVU1OUzsgY29sKyspIHtcbiAgICAgICAgICAgIGNvbnN0IG0xcm93ID0gZ2V0Um93KG0xLCByb3cpO1xuICAgICAgICAgICAgY29uc3QgbTJjb2wgPSBnZXRDb2x1bW4obTIsIGNvbCk7XG4gICAgICAgICAgICByZXN1bHRbcm93ICogUk9XX0xFTkdUSCArIGNvbF0gPSBWZWM0LmRvdChtMXJvdywgbTJjb2wpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG11bHRpcGx5KHJlc3VsdCwgLi4ubWF0cmljZXMpO1xufVxuXG5mdW5jdGlvbiBnZXRSb3cobSwgcm93KSB7XG4gICAgcmV0dXJuIFZlYzQuZnJvbVZhbHVlcyhcbiAgICAgICAgbVtyb3cgKiBST1dfTEVOR1RIICsgMF0sXG4gICAgICAgIG1bcm93ICogUk9XX0xFTkdUSCArIDFdLFxuICAgICAgICBtW3JvdyAqIFJPV19MRU5HVEggKyAyXSxcbiAgICAgICAgbVtyb3cgKiBST1dfTEVOR1RIICsgM11cbiAgICApO1xufVxuXG5mdW5jdGlvbiBnZXRDb2x1bW4obSwgY29sKSB7XG4gICAgcmV0dXJuIFZlYzQuZnJvbVZhbHVlcyhcbiAgICAgICAgbVswICogUk9XX0xFTkdUSCArIGNvbF0sXG4gICAgICAgIG1bMSAqIFJPV19MRU5HVEggKyBjb2xdLFxuICAgICAgICBtWzIgKiBST1dfTEVOR1RIICsgY29sXSxcbiAgICAgICAgbVszICogUk9XX0xFTkdUSCArIGNvbF1cbiAgICApO1xufVxuXG5mdW5jdGlvbiBvcnRob2dyYXBoaWMobGVmdCwgcmlnaHQsIGJvdHRvbSwgdG9wLCBuZWFyLCBmYXIpIHtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzTnVtYmVyKGxlZnQpKTtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzTnVtYmVyKHJpZ2h0KSk7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc051bWJlcihib3R0b20pKTtcbiAgICBjb25zb2xlLmFzc2VydChUeXBlLmlzTnVtYmVyKHRvcCkpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNOdW1iZXIobmVhcikpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNOdW1iZXIoZmFyKSk7XG5cbiAgICBjb25zdCB3aWR0aCA9IHJpZ2h0IC0gbGVmdDtcbiAgICBjb25zdCBoZWlnaHQgPSB0b3AgLSBib3R0b207XG4gICAgY29uc3QgZGVwdGggPSBmYXIgLSBuZWFyO1xuXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAyIC8gd2lkdGgsIDAsIDAsIDAsXG4gICAgICAgIDAsIDIgLyBoZWlnaHQsIDAsIDAsXG4gICAgICAgIDAsIDAsIC0yIC8gZGVwdGgsIDAsXG4gICAgICAgIC0oKHJpZ2h0ICsgbGVmdCkgLyB3aWR0aCksIC0oKHRvcCArIGJvdHRvbSkgLyBoZWlnaHQpLCAtKChmYXIgKyBuZWFyKSAvIGRlcHRoKSwgMSxcbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gaW52ZXJzZShtKSB7XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBkZXQgPSAwO1xuICAgIGxldCBpbnYgPSBuZXcgQXJyYXkoMTYpO1xuICAgIGxldCByZXN1bHQgPSBuZXcgQXJyYXkoMTYpO1xuXG4gICAgaW52WzBdID0gbVs1XSAgKiBtWzEwXSAqIG1bMTVdIC1cbiAgICAgICAgbVs1XSAgKiBtWzExXSAqIG1bMTRdIC1cbiAgICAgICAgbVs5XSAgKiBtWzZdICAqIG1bMTVdICtcbiAgICAgICAgbVs5XSAgKiBtWzddICAqIG1bMTRdICtcbiAgICAgICAgbVsxM10gKiBtWzZdICAqIG1bMTFdIC1cbiAgICAgICAgbVsxM10gKiBtWzddICAqIG1bMTBdO1xuXG4gICAgaW52WzRdID0gLW1bNF0gICogbVsxMF0gKiBtWzE1XSArXG4gICAgICAgIG1bNF0gICogbVsxMV0gKiBtWzE0XSArXG4gICAgICAgIG1bOF0gICogbVs2XSAgKiBtWzE1XSAtXG4gICAgICAgIG1bOF0gICogbVs3XSAgKiBtWzE0XSAtXG4gICAgICAgIG1bMTJdICogbVs2XSAgKiBtWzExXSArXG4gICAgICAgIG1bMTJdICogbVs3XSAgKiBtWzEwXTtcblxuICAgIGludls4XSA9IG1bNF0gICogbVs5XSAqIG1bMTVdIC1cbiAgICAgICAgbVs0XSAgKiBtWzExXSAqIG1bMTNdIC1cbiAgICAgICAgbVs4XSAgKiBtWzVdICogbVsxNV0gK1xuICAgICAgICBtWzhdICAqIG1bN10gKiBtWzEzXSArXG4gICAgICAgIG1bMTJdICogbVs1XSAqIG1bMTFdIC1cbiAgICAgICAgbVsxMl0gKiBtWzddICogbVs5XTtcblxuICAgIGludlsxMl0gPSAtbVs0XSAgKiBtWzldICogbVsxNF0gK1xuICAgICAgICBtWzRdICAqIG1bMTBdICogbVsxM10gK1xuICAgICAgICBtWzhdICAqIG1bNV0gKiBtWzE0XSAtXG4gICAgICAgIG1bOF0gICogbVs2XSAqIG1bMTNdIC1cbiAgICAgICAgbVsxMl0gKiBtWzVdICogbVsxMF0gK1xuICAgICAgICBtWzEyXSAqIG1bNl0gKiBtWzldO1xuXG4gICAgaW52WzFdID0gLW1bMV0gICogbVsxMF0gKiBtWzE1XSArXG4gICAgICAgIG1bMV0gICogbVsxMV0gKiBtWzE0XSArXG4gICAgICAgIG1bOV0gICogbVsyXSAqIG1bMTVdIC1cbiAgICAgICAgbVs5XSAgKiBtWzNdICogbVsxNF0gLVxuICAgICAgICBtWzEzXSAqIG1bMl0gKiBtWzExXSArXG4gICAgICAgIG1bMTNdICogbVszXSAqIG1bMTBdO1xuXG4gICAgaW52WzVdID0gbVswXSAgKiBtWzEwXSAqIG1bMTVdIC1cbiAgICAgICAgbVswXSAgKiBtWzExXSAqIG1bMTRdIC1cbiAgICAgICAgbVs4XSAgKiBtWzJdICogbVsxNV0gK1xuICAgICAgICBtWzhdICAqIG1bM10gKiBtWzE0XSArXG4gICAgICAgIG1bMTJdICogbVsyXSAqIG1bMTFdIC1cbiAgICAgICAgbVsxMl0gKiBtWzNdICogbVsxMF07XG5cbiAgICBpbnZbOV0gPSAtbVswXSAgKiBtWzldICogbVsxNV0gK1xuICAgICAgICBtWzBdICAqIG1bMTFdICogbVsxM10gK1xuICAgICAgICBtWzhdICAqIG1bMV0gKiBtWzE1XSAtXG4gICAgICAgIG1bOF0gICogbVszXSAqIG1bMTNdIC1cbiAgICAgICAgbVsxMl0gKiBtWzFdICogbVsxMV0gK1xuICAgICAgICBtWzEyXSAqIG1bM10gKiBtWzldO1xuXG4gICAgaW52WzEzXSA9IG1bMF0gICogbVs5XSAqIG1bMTRdIC1cbiAgICAgICAgbVswXSAgKiBtWzEwXSAqIG1bMTNdIC1cbiAgICAgICAgbVs4XSAgKiBtWzFdICogbVsxNF0gK1xuICAgICAgICBtWzhdICAqIG1bMl0gKiBtWzEzXSArXG4gICAgICAgIG1bMTJdICogbVsxXSAqIG1bMTBdIC1cbiAgICAgICAgbVsxMl0gKiBtWzJdICogbVs5XTtcblxuICAgIGludlsyXSA9IG1bMV0gICogbVs2XSAqIG1bMTVdIC1cbiAgICAgICAgbVsxXSAgKiBtWzddICogbVsxNF0gLVxuICAgICAgICBtWzVdICAqIG1bMl0gKiBtWzE1XSArXG4gICAgICAgIG1bNV0gICogbVszXSAqIG1bMTRdICtcbiAgICAgICAgbVsxM10gKiBtWzJdICogbVs3XSAtXG4gICAgICAgIG1bMTNdICogbVszXSAqIG1bNl07XG5cbiAgICBpbnZbNl0gPSAtbVswXSAgKiBtWzZdICogbVsxNV0gK1xuICAgICAgICBtWzBdICAqIG1bN10gKiBtWzE0XSArXG4gICAgICAgIG1bNF0gICogbVsyXSAqIG1bMTVdIC1cbiAgICAgICAgbVs0XSAgKiBtWzNdICogbVsxNF0gLVxuICAgICAgICBtWzEyXSAqIG1bMl0gKiBtWzddICtcbiAgICAgICAgbVsxMl0gKiBtWzNdICogbVs2XTtcblxuICAgIGludlsxMF0gPSBtWzBdICAqIG1bNV0gKiBtWzE1XSAtXG4gICAgICAgIG1bMF0gICogbVs3XSAqIG1bMTNdIC1cbiAgICAgICAgbVs0XSAgKiBtWzFdICogbVsxNV0gK1xuICAgICAgICBtWzRdICAqIG1bM10gKiBtWzEzXSArXG4gICAgICAgIG1bMTJdICogbVsxXSAqIG1bN10gLVxuICAgICAgICBtWzEyXSAqIG1bM10gKiBtWzVdO1xuXG4gICAgaW52WzE0XSA9IC1tWzBdICAqIG1bNV0gKiBtWzE0XSArXG4gICAgICAgIG1bMF0gICogbVs2XSAqIG1bMTNdICtcbiAgICAgICAgbVs0XSAgKiBtWzFdICogbVsxNF0gLVxuICAgICAgICBtWzRdICAqIG1bMl0gKiBtWzEzXSAtXG4gICAgICAgIG1bMTJdICogbVsxXSAqIG1bNl0gK1xuICAgICAgICBtWzEyXSAqIG1bMl0gKiBtWzVdO1xuXG4gICAgaW52WzNdID0gLW1bMV0gKiBtWzZdICogbVsxMV0gK1xuICAgICAgICBtWzFdICogbVs3XSAqIG1bMTBdICtcbiAgICAgICAgbVs1XSAqIG1bMl0gKiBtWzExXSAtXG4gICAgICAgIG1bNV0gKiBtWzNdICogbVsxMF0gLVxuICAgICAgICBtWzldICogbVsyXSAqIG1bN10gK1xuICAgICAgICBtWzldICogbVszXSAqIG1bNl07XG5cbiAgICBpbnZbN10gPSBtWzBdICogbVs2XSAqIG1bMTFdIC1cbiAgICAgICAgbVswXSAqIG1bN10gKiBtWzEwXSAtXG4gICAgICAgIG1bNF0gKiBtWzJdICogbVsxMV0gK1xuICAgICAgICBtWzRdICogbVszXSAqIG1bMTBdICtcbiAgICAgICAgbVs4XSAqIG1bMl0gKiBtWzddIC1cbiAgICAgICAgbVs4XSAqIG1bM10gKiBtWzZdO1xuXG4gICAgaW52WzExXSA9IC1tWzBdICogbVs1XSAqIG1bMTFdICtcbiAgICAgICAgbVswXSAqIG1bN10gKiBtWzldICtcbiAgICAgICAgbVs0XSAqIG1bMV0gKiBtWzExXSAtXG4gICAgICAgIG1bNF0gKiBtWzNdICogbVs5XSAtXG4gICAgICAgIG1bOF0gKiBtWzFdICogbVs3XSArXG4gICAgICAgIG1bOF0gKiBtWzNdICogbVs1XTtcblxuICAgIGludlsxNV0gPSBtWzBdICogbVs1XSAqIG1bMTBdIC1cbiAgICAgICAgbVswXSAqIG1bNl0gKiBtWzldIC1cbiAgICAgICAgbVs0XSAqIG1bMV0gKiBtWzEwXSArXG4gICAgICAgIG1bNF0gKiBtWzJdICogbVs5XSArXG4gICAgICAgIG1bOF0gKiBtWzFdICogbVs2XSAtXG4gICAgICAgIG1bOF0gKiBtWzJdICogbVs1XTtcblxuICAgIGRldCA9IG1bMF0gKiBpbnZbMF0gKyBtWzFdICogaW52WzRdICsgbVsyXSAqIGludls4XSArIG1bM10gKiBpbnZbMTJdO1xuXG4gICAgY29uc29sZS5hc3NlcnQoZGV0ICE9IDApO1xuXG4gICAgZGV0ID0gMS4wIC8gZGV0O1xuXG4gICAgZm9yIChpID0gMDsgaSA8IDE2OyBpKyspIHtcbiAgICAgICAgcmVzdWx0W2ldID0gaW52W2ldICogZGV0O1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9NYXQ0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9NYXQ0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZWdUb1JhZCxcbiAgICBjbGFtcCxcbn07XG5cbmZ1bmN0aW9uIGRlZ1RvUmFkKGRlZ3JlZXMpIHtcbiAgICByZXR1cm4gZGVncmVlcyAqIChNYXRoLlBJIC8gMTgwKTtcbn1cblxuZnVuY3Rpb24gY2xhbXAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGgubWF4KE1hdGgubWluKHZhbHVlLCBtYXgpLCBtaW4pO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTWF0aFV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9NYXRoVXRpbHMuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlLmpzJztcbmltcG9ydCBWZWMzIGZyb20gJy4vVmVjMy5qcyc7XG5pbXBvcnQgTWF0MyBmcm9tICcuL01hdDMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZnJvbUdlb21ldHJ5LFxuICAgIGdldEV4dGVudHMsXG4gICAgYXBwbHlPcmlnaW4sXG4gICAgYXBwbHlUcmFuc2xhdGlvbixcbiAgICBhcHBseVJvdGF0aW9uLFxuICAgIGFwcGx5U2NhbGUsXG4gICAgY2FsY3VsYXRlTm9ybWFscyxcbiAgICBtZXJnZVxufTtcblxuY29uc3QgUE9TSVRJT05TID0ge1xuICAgIHRyaWFuZ2xlOiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMC4wLCAwLjUsIDAsXG4gICAgICAgIC0wLjUsIC0wLjUsIDAsXG4gICAgICAgIDAuNSwgLTAuNSwgMCxcbiAgICBdKSxcbiAgICBxdWFkOiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgLTAuNSwgLTAuNSwgMCxcbiAgICAgICAgMC41LCAtMC41LCAwLFxuICAgICAgICAwLjUsIDAuNSwgMCxcblxuICAgICAgICAwLjUsIDAuNSwgMCxcbiAgICAgICAgLTAuNSwgMC41LCAwLFxuICAgICAgICAtMC41LCAtMC41LCAwLFxuICAgIF0pLFxuICAgIGN1YmU6IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyAreiAxXG4gICAgICAgIC0wLjUsIC0wLjUsIDAuNSxcbiAgICAgICAgMC41LCAtMC41LCAwLjUsXG4gICAgICAgIDAuNSwgMC41LCAwLjUsXG5cbiAgICAgICAgLy8gK3ogMlxuICAgICAgICAwLjUsIDAuNSwgMC41LFxuICAgICAgICAtMC41LCAwLjUsIDAuNSxcbiAgICAgICAgLTAuNSwgLTAuNSwgMC41LFxuXG4gICAgICAgIC8vIC14IDFcbiAgICAgICAgLTAuNSwgLTAuNSwgLTAuNSxcbiAgICAgICAgLTAuNSwgLTAuNSwgMC41LFxuICAgICAgICAtMC41LCAwLjUsIDAuNSxcblxuICAgICAgICAvLyAteCAyXG4gICAgICAgIC0wLjUsIDAuNSwgMC41LFxuICAgICAgICAtMC41LCAwLjUsIC0wLjUsXG4gICAgICAgIC0wLjUsIC0wLjUsIC0wLjUsXG5cbiAgICAgICAgLy8gK3kgMVxuICAgICAgICAtMC41LCAwLjUsIDAuNSxcbiAgICAgICAgMC41LCAwLjUsIDAuNSxcbiAgICAgICAgMC41LCAwLjUsIC0wLjUsXG5cbiAgICAgICAgLy8gK3kgMlxuICAgICAgICAwLjUsIDAuNSwgLTAuNSxcbiAgICAgICAgLTAuNSwgMC41LCAtMC41LFxuICAgICAgICAtMC41LCAwLjUsIDAuNSxcblxuICAgICAgICAvLyAreCAxXG4gICAgICAgIDAuNSwgLTAuNSwgMC41LFxuICAgICAgICAwLjUsIC0wLjUsIC0wLjUsXG4gICAgICAgIDAuNSwgMC41LCAtMC41LFxuXG4gICAgICAgIC8vICt4IDJcbiAgICAgICAgMC41LCAwLjUsIC0wLjUsXG4gICAgICAgIDAuNSwgMC41LCAwLjUsXG4gICAgICAgIDAuNSwgLTAuNSwgMC41LFxuXG4gICAgICAgIC8vIC16IDFcbiAgICAgICAgMC41LCAtMC41LCAtMC41LFxuICAgICAgICAtMC41LCAtMC41LCAtMC41LFxuICAgICAgICAtMC41LCAwLjUsIC0wLjUsXG5cbiAgICAgICAgLy8gLXogMlxuICAgICAgICAtMC41LCAwLjUsIC0wLjUsXG4gICAgICAgIDAuNSwgMC41LCAtMC41LFxuICAgICAgICAwLjUsIC0wLjUsIC0wLjUsXG5cbiAgICAgICAgLy8gLXkgMVxuICAgICAgICAtMC41LCAtMC41LCAtMC41LFxuICAgICAgICAwLjUsIC0wLjUsIC0wLjUsXG4gICAgICAgIDAuNSwgLTAuNSwgMC41LFxuXG4gICAgICAgIC8vIC15IDJcbiAgICAgICAgMC41LCAtMC41LCAwLjUsXG4gICAgICAgIC0wLjUsIC0wLjUsIDAuNSxcbiAgICAgICAgLTAuNSwgLTAuNSwgLTAuNSxcbiAgICBdKSxcbn07XG5cbmNvbnN0IE5PUk1BTFMgPSB7XG4gICAgdHJpYW5nbGU6IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAwLCAwLCAxLFxuICAgICAgICAwLCAwLCAxLFxuICAgICAgICAwLCAwLCAxXG4gICAgXSksXG4gICAgcXVhZDogbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIDAsIDAsIDEsXG4gICAgICAgIDAsIDAsIDEsXG4gICAgICAgIDAsIDAsIDEsXG5cbiAgICAgICAgMCwgMCwgMSxcbiAgICAgICAgMCwgMCwgMSxcbiAgICAgICAgMCwgMCwgMVxuICAgIF0pLFxuICAgIGN1YmU6IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICAvLyAreiAxXG4gICAgICAgIDAsIDAsIDEsXG4gICAgICAgIDAsIDAsIDEsXG4gICAgICAgIDAsIDAsIDEsXG5cbiAgICAgICAgLy8gK3ogMlxuICAgICAgICAwLCAwLCAxLFxuICAgICAgICAwLCAwLCAxLFxuICAgICAgICAwLCAwLCAxLFxuXG4gICAgICAgIC8vIC14IDFcbiAgICAgICAgLTEsIDAsIDAsXG4gICAgICAgIC0xLCAwLCAwLFxuICAgICAgICAtMSwgMCwgMCxcblxuICAgICAgICAvLyAteCAyXG4gICAgICAgIC0xLCAwLCAwLFxuICAgICAgICAtMSwgMCwgMCxcbiAgICAgICAgLTEsIDAsIDAsXG5cbiAgICAgICAgLy8gK3kgMVxuICAgICAgICAwLCAxLCAwLFxuICAgICAgICAwLCAxLCAwLFxuICAgICAgICAwLCAxLCAwLFxuXG4gICAgICAgIC8vICt5IDJcbiAgICAgICAgMCwgMSwgMCxcbiAgICAgICAgMCwgMSwgMCxcbiAgICAgICAgMCwgMSwgMCxcblxuICAgICAgICAvLyAreCAxXG4gICAgICAgIDEsIDAsIDAsXG4gICAgICAgIDEsIDAsIDAsXG4gICAgICAgIDEsIDAsIDAsXG5cbiAgICAgICAgLy8gK3ggMlxuICAgICAgICAxLCAwLCAwLFxuICAgICAgICAxLCAwLCAwLFxuICAgICAgICAxLCAwLCAwLFxuXG4gICAgICAgIC8vIC16IDFcbiAgICAgICAgMCwgMCwgLTEsXG4gICAgICAgIDAsIDAsIC0xLFxuICAgICAgICAwLCAwLCAtMSxcblxuICAgICAgICAvLyAteiAyXG4gICAgICAgIDAsIDAsIC0xLFxuICAgICAgICAwLCAwLCAtMSxcbiAgICAgICAgMCwgMCwgLTEsXG5cbiAgICAgICAgLy8gLXkgMVxuICAgICAgICAwLCAtMSwgMCxcbiAgICAgICAgMCwgLTEsIDAsXG4gICAgICAgIDAsIC0xLCAwLFxuXG4gICAgICAgIC8vIC15IDJcbiAgICAgICAgMCwgLTEsIDAsXG4gICAgICAgIDAsIC0xLCAwLFxuICAgICAgICAwLCAtMSwgMCxcbiAgICBdKVxufTtcblxuZnVuY3Rpb24gZnJvbUdlb21ldHJ5KGdlb21ldHJ5KSB7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc09iamVjdChnZW9tZXRyeSkpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNBcnJheShnZW9tZXRyeS5zaGFwZXMpKTtcblxuICAgIGNvbnN0IHZlcnRleEFycmF5cyA9IGdlb21ldHJ5LnNoYXBlcy5tYXAoc2hhcGUgPT4ge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9ICdvcmllbnRhdGlvbicgaW4gc2hhcGUgPyBzaGFwZS5vcmllbnRhdGlvbiA6IFZlYzMuemVybygpO1xuICAgICAgICBjb25zdCBzY2FsZSA9ICdzY2FsZScgaW4gc2hhcGUgPyBzaGFwZS5zY2FsZSA6IFsxLCAxLCAxXTtcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSAncG9zaXRpb24nIGluIHNoYXBlID8gc2hhcGUucG9zaXRpb246IFZlYzMuemVybygpO1xuXG4gICAgICAgIC8vY29uc3Qgcm90YXRpb24gPSBNYXQzLm11bHRpcGx5KE1hdDMuc2NhbGUoc2NhbGUpLCBNYXQzLmZyb21FdWxlckFuZ2xlcyhvcmllbnRhdGlvbikpO1xuICAgICAgICBjb25zdCByb3RhdGlvbiA9IE1hdDMuZnJvbUV1bGVyQW5nbGVzKG9yaWVudGF0aW9uKTtcbiAgICAgICAgY29uc3Qgc2NhbGVNYXRyaXggPSBNYXQzLnNjYWxlKHNjYWxlKTtcbiAgICAgICAgY29uc3QgdmVydGljZXMgPSBnZXRWZXJ0aWNlcyhzaGFwZS5zaGFwZSlcbiAgICAgICAgICAgIC5tYXAodiA9PiB0cmFuc2Zvcm1WZXJ0ZXgodiwgcG9zaXRpb24sIHJvdGF0aW9uLCBzY2FsZU1hdHJpeCkpO1xuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9KTtcblxuICAgIGNvbnN0IHZlcnRpY2VzID0gQXJyYXkoKS5jb25jYXQoLi4udmVydGV4QXJyYXlzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9uczogdmVydGljZXMubWFwKHYgPT4gdi5wb3NpdGlvbiksXG4gICAgICAgIG5vcm1hbHM6IHZlcnRpY2VzLm1hcCh2ID0+IHYubm9ybWFsKSxcbiAgICAgICAgbW9kZTogJ1RSSUFOR0xFUycsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VmVydGljZXMoc2hhcGUpIHtcbiAgICBjb25zb2xlLmFzc2VydChzaGFwZSBpbiBQT1NJVElPTlMpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KHNoYXBlIGluIE5PUk1BTFMpO1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFBPU0lUSU9OU1tzaGFwZV07XG4gICAgY29uc3Qgbm9ybWFscyA9IE5PUk1BTFNbc2hhcGVdO1xuXG4gICAgcmV0dXJuIEFycmF5KHBvc2l0aW9ucy5sZW5ndGggLyAzKS5maWxsKG51bGwpXG4gICAgICAgIC5tYXAoKF8sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbnMuc2xpY2UoaW5kZXggKiAzLCBpbmRleCAqIDMgKyAzKSxcbiAgICAgICAgICAgICAgICBub3JtYWw6IG5vcm1hbHMuc2xpY2UoaW5kZXggKiAzLCBpbmRleCAqIDMgKyAzKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRyYW5zZm9ybVZlcnRleCh2ZXJ0ZXgsIHRyYW5zbGF0aW9uLCByb3RhdGlvbiwgc2NhbGUpIHtcbiAgICBjb25zdCBuZXdWZXJ0ZXggPSB7fTtcbiAgICBpZigncG9zaXRpb24nIGluIHZlcnRleCkge1xuICAgICAgICBuZXdWZXJ0ZXgucG9zaXRpb24gPSBWZWMzLmNsb25lKHZlcnRleC5wb3NpdGlvbik7XG4gICAgICAgIG5ld1ZlcnRleC5wb3NpdGlvbiA9IFZlYzMudHJhbnNmb3JtKG5ld1ZlcnRleC5wb3NpdGlvbiwgc2NhbGUpO1xuICAgICAgICBuZXdWZXJ0ZXgucG9zaXRpb24gPSBWZWMzLnRyYW5zZm9ybShuZXdWZXJ0ZXgucG9zaXRpb24sIHJvdGF0aW9uKTtcbiAgICAgICAgbmV3VmVydGV4LnBvc2l0aW9uID0gVmVjMy5hZGQobmV3VmVydGV4LnBvc2l0aW9uLCB0cmFuc2xhdGlvbik7XG4gICAgfVxuICAgIGlmKCdub3JtYWwnIGluIHZlcnRleCkge1xuICAgICAgICBuZXdWZXJ0ZXgubm9ybWFsID0gVmVjMy50cmFuc2Zvcm0odmVydGV4Lm5vcm1hbCwgcm90YXRpb24pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3VmVydGV4O1xufVxuXG5cbmZ1bmN0aW9uIGdldFRyaWFuZ2xlVXZzKCkge1xuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMC41LCAxLFxuICAgICAgICAwLCAwLFxuICAgICAgICAxLCAwXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIGdldFBsYW5lVXZzKCkge1xuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcbiAgICAgICAgMCwgMCxcbiAgICAgICAgMSwgMCxcbiAgICAgICAgMSwgMSxcblxuICAgICAgICAxLCAxLFxuICAgICAgICAwLCAxLFxuICAgICAgICAwLCAwLFxuICAgIF0pO1xufVxuXG5mdW5jdGlvbiBhcHBseVNjYWxlKG1lc2gsIHNjYWxlKSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gbWVzaC5wb3NpdGlvbnNcbiAgICAgICAgLm1hcChwb3NpdGlvbiA9PiBWZWMzLm11bHRpcGx5KHBvc2l0aW9uLCBzY2FsZSkpO1xuICAgIG1lc2gucG9zaXRpb25zID0gcG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBhcHBseVJvdGF0aW9uKG1lc2gsIHRyYW5zZm9ybSkge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IG1lc2gucG9zaXRpb25zXG4gICAgICAgIC5tYXAocG9zaXRpb24gPT4gVmVjMy50cmFuc2Zvcm0ocG9zaXRpb24sIHRyYW5zZm9ybSkpO1xuXG4gICAgY29uc3Qgbm9ybWFscyA9IG1lc2gubm9ybWFsc1xuICAgICAgICAubWFwKG5vcm1hbCA9PiBWZWMzLnRyYW5zZm9ybShub3JtYWwsIHRyYW5zZm9ybSkpO1xuXG4gICAgbWVzaC5wb3NpdGlvbnMgPSBwb3NpdGlvbnM7XG4gICAgbWVzaC5ub3JtYWxzID0gbm9ybWFscztcbn1cblxuZnVuY3Rpb24gYXBwbHlUcmFuc2xhdGlvbihtZXNoLCB0cmFuc2xhdGlvbikge1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNPYmplY3QobWVzaCkpO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gbWVzaC5wb3NpdGlvbnNcbiAgICAgICAgLm1hcChwb3NpdGlvbiA9PiBWZWMzLmFkZChwb3NpdGlvbiwgdHJhbnNsYXRpb24pKTtcbiAgICBtZXNoLnBvc2l0aW9ucyA9IHBvc2l0aW9ucztcbn1cblxuZnVuY3Rpb24gYXBwbHlPcmlnaW4obWVzaCwgbm9ybWFsaXplZE9yaWdpbikge1xuICAgIGNvbnNvbGUuYXNzZXJ0KG5vcm1hbGl6ZWRPcmlnaW4ubGVuZ3RoID09PSAzKTtcbiAgICBjb25zb2xlLmFzc2VydCgtMSA+PSBub3JtYWxpemVkT3JpZ2luWzBdIDw9IDEpO1xuICAgIGNvbnNvbGUuYXNzZXJ0KC0xID49IG5vcm1hbGl6ZWRPcmlnaW5bMV0gPD0gMSk7XG4gICAgY29uc29sZS5hc3NlcnQoLTEgPj0gbm9ybWFsaXplZE9yaWdpblsyXSA8PSAxKTtcbiAgICBjb25zb2xlLmFzc2VydCgncG9zaXRpb25zJyBpbiBtZXNoKTtcblxuICAgIGNvbnN0IGV4dGVudHMgPSBnZXRFeHRlbnRzKG1lc2gpO1xuICAgIGNvbnN0IHVubm9ybWFsaXplZE9yaWdpbiA9IFZlYzMubXVsdGlwbHkobm9ybWFsaXplZE9yaWdpbiwgZXh0ZW50cyk7XG4gICAgY29uc3QgcG9zaXRpb25zID0gbWVzaC5wb3NpdGlvbnMubWFwKHBvc2l0aW9uID0+IFZlYzMuc2NhbGVBbmRBZGQocG9zaXRpb24sIHVubm9ybWFsaXplZE9yaWdpbiwgLTAuNSkpO1xuICAgIG1lc2gucG9zaXRpb25zID0gcG9zaXRpb25zO1xufVxuXG5mdW5jdGlvbiBnZXRFeHRlbnRzKG1lc2gpIHtcbiAgICBjb25zb2xlLmFzc2VydCgncG9zaXRpb25zJyBpbiBtZXNoKTtcbiAgICBjb25zdCBtaW4gPSBtZXNoLnBvc2l0aW9ucy5yZWR1Y2UoKHJlc3VsdCwgcG9zKSA9PiBWZWMzLm1pbihyZXN1bHQsIHBvcyksIFZlYzMubGFyZ2VzdCgpKTtcbiAgICBjb25zdCBtYXggPSBtZXNoLnBvc2l0aW9ucy5yZWR1Y2UoKHJlc3VsdCwgcG9zKSA9PiBWZWMzLm1heChyZXN1bHQsIHBvcyksIFZlYzMuc21hbGxlc3QoKSk7XG4gICAgcmV0dXJuIFZlYzMuc3ViKG1heCwgbWluKTtcbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlTm9ybWFscyhtZXNoKSB7XG4gICAgY29uc29sZS5hc3NlcnQoJ3Bvc2l0aW9ucycgaW4gbWVzaCk7XG5cbiAgICBjb25zdCBub3JtYWxzID0gbWVzaC5wb3NpdGlvbnNcbiAgICAgICAgLy8gc3BsaXQgdmVydGljZXMgaW50byB0cmlhbmdsZXNcbiAgICAgICAgLnJlZHVjZSgodHJpYW5nbGVzLCB2ZXJ0ZXgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZihpbmRleCAlIDMgPT09IDApIHtcbiAgICAgICAgICAgICAgICB0cmlhbmdsZXMucHVzaChbXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyaWFuZ2xlc1t0cmlhbmdsZXMubGVuZ3RoIC0gMV0ucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICAgICAgcmV0dXJuIHRyaWFuZ2xlcztcbiAgICAgICAgfSwgW10pXG4gICAgICAgIC8vIGNhbGN1bGF0ZSBub3JtYWxzIHBlciB0cmlhbmdsZVxuICAgICAgICAubWFwKHRyaWFuZ2xlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UzID0gVmVjMy5zdWIodHJpYW5nbGVbMV0sIHRyaWFuZ2xlWzBdKTtcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UxID0gVmVjMy5zdWIodHJpYW5nbGVbMl0sIHRyaWFuZ2xlWzFdKTtcbiAgICAgICAgICAgIHJldHVybiBWZWMzLm5vcm1hbGl6ZShWZWMzLmNyb3NzKGVkZ2UzLCBlZGdlMSkpO1xuICAgICAgICB9KVxuICAgICAgICAvLyB0cmlwbGljYXRlIG5vcm1hbHNcbiAgICAgICAgLnJlZHVjZSgodmVydGV4Tm9ybWFscywgdHJpYW5nbGVOb3JtYWwpID0+IHtcbiAgICAgICAgICAgIHZlcnRleE5vcm1hbHMucHVzaCh0cmlhbmdsZU5vcm1hbCwgdHJpYW5nbGVOb3JtYWwsIHRyaWFuZ2xlTm9ybWFsKTtcbiAgICAgICAgICAgIHJldHVybiB2ZXJ0ZXhOb3JtYWxzO1xuICAgICAgICB9LCBbXSk7XG4gICAgbWVzaC5ub3JtYWxzID0gbm9ybWFscztcbn1cblxuZnVuY3Rpb24gbWVyZ2UoLi4ubWVzaGVzKSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gQXJyYXkoKS5jb25jYXQoLi4ubWVzaGVzLm1hcChtZXNoID0+IG1lc2gucG9zaXRpb25zKSk7XG4gICAgY29uc3Qgbm9ybWFscyA9IEFycmF5KCkuY29uY2F0KC4uLm1lc2hlcy5tYXAobWVzaCA9PiBtZXNoLm5vcm1hbHMpKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHBvc2l0aW9ucyxcbiAgICAgICAgbm9ybWFscyxcbiAgICAgICAgbW9kZTogbWVzaGVzWzBdLm1vZGVcbiAgICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvTWVzaC5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvTWVzaC5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcGlsZSxcbiAgICBkZXN0cm95XG59O1xuXG5mdW5jdGlvbiBjb21waWxlKGdsLCB0eXBlLCBzb3VyY2UpIHtcbiAgICBjb25zdCBnbFNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcbiAgICBnbC5zaGFkZXJTb3VyY2UoZ2xTaGFkZXIsIHNvdXJjZSk7XG4gICAgZ2wuY29tcGlsZVNoYWRlcihnbFNoYWRlcik7XG5cbiAgICBpZighZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKGdsU2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcbiAgICAgICAgY29uc3QgaW5mbyA9IGdsLmdldFNoYWRlckluZm9Mb2coZ2xTaGFkZXIpO1xuICAgICAgICBnbC5kZWxldGVTaGFkZXIoZ2xTaGFkZXIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBjb21waWxlIHNoYWRlcjpcXG4ke2luZm99YCk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coYFNoYWRlci5jb21waWxlKCR7dHlwZX0sIC4uLikgc3VjY2VlZGVkYCk7XG4gICAgcmV0dXJuIGdsU2hhZGVyO1xufVxuXG5mdW5jdGlvbiBkZXN0cm95KGdsLCBzaGFkZXIpIHtcbiAgICBpZighZ2wuaXNTaGFkZXIoc2hhZGVyKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBBdHRlbXB0ZWQgdG8gZGVzdHJveSBub24tc2hhZGVyIG9iamVjdCAnJHtzaGFkZXJ9J2ApO1xuICAgIH1cblxuICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xuICAgIHJldHVybiBudWxsO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2hhZGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9TaGFkZXIuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEFycmF5VXRpbHMgZnJvbSAnLi9BcnJheVV0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBpbGVcbn07XG5cbmZ1bmN0aW9uIGNvbXBpbGUoZ2wsIC4uLnNoYWRlcnMpIHtcbiAgICBjb25zb2xlLmFzc2VydChnbCBpbnN0YW5jZW9mIFdlYkdMUmVuZGVyaW5nQ29udGV4dCk7XG5cbiAgICBjb25zdCBwcm9ncmFtID0gZ2wuY3JlYXRlUHJvZ3JhbSgpO1xuICAgIHNoYWRlcnMuZm9yRWFjaChzaGFkZXIgPT4ge1xuICAgICAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgc2hhZGVyKTtcbiAgICB9KTtcbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcblxuICAgIGlmKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkxJTktfU1RBVFVTKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBsb2FkIHNoYWRlciBwcm9ncmFtIFwiJXNcIjogJXMnLFxuICAgICAgICAgICAgbmFtZSwgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBwcm9ncmFtLmF0dHJpYnV0ZXMgPSB7fTtcbiAgICBwcm9ncmFtLmF0dHJpYnV0ZXMudmVydGV4UG9zaXRpb24gPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYVZlcnRleFBvc2l0aW9uJyk7XG5cbiAgICBjb25zdCBhY3RpdmVVbmlmb3JtQ291bnQgPSBnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHByb2dyYW0sIGdsLkFDVElWRV9VTklGT1JNUyk7XG4gICAgcHJvZ3JhbS51bmlmb3JtTG9jYXRpb25zID0gQXJyYXlVdGlscy5yYW5nZShhY3RpdmVVbmlmb3JtQ291bnQpXG4gICAgICAgIC5tYXAoaW5kZXggPT4gZ2wuZ2V0QWN0aXZlVW5pZm9ybShwcm9ncmFtLCBpbmRleCkpXG4gICAgICAgIC5tYXAoaW5mbyA9PiAoeyBrZXk6IGluZm8ubmFtZSwgbG9jYXRpb246IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCBpbmZvLm5hbWUpIH0pKVxuICAgICAgICAucmVkdWNlKChvYmplY3QsIHBhaXIpID0+IHtcbiAgICAgICAgICAgIG9iamVjdFtwYWlyLmtleV0gPSBwYWlyLmxvY2F0aW9uO1xuICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfSwge30pO1xuXG4gICAgcmV0dXJuIHByb2dyYW07XG59XG5cbi8qXG5jb25zdCBTaGFkZXJQcm9ncmFtID0gT2JqZWN0LmZyZWV6ZSh7XG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmFzc2VydCh0aGlzLmlzVmFsaWQoKSk7XG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLmdsUHJvZ3JhbSk7XG4gICAgICAgIHRoaXMuZ2xQcm9ncmFtID0gbnVsbDtcbiAgICB9LFxuXG4gICAgaXNWYWxpZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZighdGhpcy5nbFByb2dyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdsLmlzUHJvZ3JhbSh0aGlzLmdsUHJvZ3JhbSk7XG4gICAgfVxufSk7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGdsKSB7XG4gICAgY29uc29sZS5hc3NlcnQoZ2wgaW5zdGFuY2VvZiBXZWJHTFJlbmRlcmluZ0NvbnRleHQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlLFxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGUoLi4uc2hhZGVycykge1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShTaGFkZXJQcm9ncmFtKSwge1xuICAgICAgICAgICAgZ2wsXG4gICAgICAgICAgICBnbFByb2dyYW06IGNvbXBpbGVQcm9ncmFtKHNoYWRlcnMpXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY29tcGlsZVByb2dyYW0oW3ZzLCBmc10pIHtcbiAgICAgICAgY29uc3QgcHJvZ3JhbSA9IGdsLmNyZWF0ZVByb2dyYW0oKTtcbiAgICAgICAgdnMgPSB2cy5nbFNoYWRlcjtcbiAgICAgICAgZnMgPSBmcy5nbFNoYWRlcjtcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIHZzKTtcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZzKTtcbiAgICAgICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XG5cbiAgICAgICAgaWYoIWdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0ZhaWxlZCB0byBsb2FkIHNoYWRlciBwcm9ncmFtIFwiJXNcIjogJXMnLFxuICAgICAgICAgICAgICAgIG5hbWUsIGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvZ3JhbS5hdHRyaWJ1dGVzID0ge307XG4gICAgICAgIHByb2dyYW0uYXR0cmlidXRlcy52ZXJ0ZXhQb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhVmVydGV4UG9zaXRpb24nKTtcblxuICAgICAgICBwcm9ncmFtLnVuaWZvcm1zID0ge307XG4gICAgICAgIHByb2dyYW0udW5pZm9ybXMud29ybGQgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VXb3JsZCcpO1xuICAgICAgICBwcm9ncmFtLnVuaWZvcm1zLnZpZXcgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VWaWV3Jyk7XG4gICAgICAgIHByb2dyYW0udW5pZm9ybXMucHJvamVjdGlvbiA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndVByb2plY3Rpb24nKTtcblxuICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICB9XG59XG4qL1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvU2hhZGVyUHJvZ3JhbS5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvU2hhZGVyUHJvZ3JhbS5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZ2V0TmFtZSxcbiAgICBpc1N0cmluZyxcbiAgICBpc0FycmF5LFxuICAgIGlzRnVuY3Rpb24sXG4gICAgaXNVbmRlZmluZWQsXG4gICAgaXNOdWxsLFxuICAgIGlzT2JqZWN0LFxuICAgIGlzTnVtYmVyLFxuICAgIGlzQm9vbGVhbixcbn07XG5cbmZ1bmN0aW9uIGdldE5hbWUodmFsdWUpIHtcbiAgICBpZihpc051bGwodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAnbnVsbCc7XG4gICAgfVxuXG4gICAgaWYoaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzTnVsbCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0KHZhbHVlKSA9PT0gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL1R5cGUuanNcbi8vIG1vZHVsZSBpZCA9IC4vc3JjL1R5cGUuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFR5cGUgZnJvbSAnLi9UeXBlLmpzJztcbmltcG9ydCBNYXQzIGZyb20gJy4vTWF0My5qcyc7XG5pbXBvcnQgQXJyYXlVdGlscyBmcm9tICcuL0FycmF5VXRpbHMuanMnO1xuXG5jb25zdCBWRUNUT1JfTEVOR1RIID0gMztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHBhcnNlLFxuICAgIGZyb21WYWx1ZXMsXG4gICAgYWRkLFxuICAgIHN1YixcbiAgICBtdWx0aXBseSxcbiAgICBub3JtYWxpemUsXG4gICAgZG90LFxuICAgIGNyb3NzLFxuICAgIHplcm8sXG4gICAgb25lLFxuICAgIHRyYW5zZm9ybSxcbiAgICBzY2FsZSxcbiAgICBjbG9uZSxcbiAgICBsYXJnZXN0LFxuICAgIHNtYWxsZXN0LFxuICAgIG1pbixcbiAgICBtYXgsXG4gICAgc2NhbGVBbmRBZGRcbn07XG5cbmZ1bmN0aW9uIHNjYWxlQW5kQWRkKHYxLCB2Miwgc2NhbGFyKSB7XG4gICAgcmV0dXJuIGFkZCh2MSwgc2NhbGUodjIsIHNjYWxhcikpO1xufVxuXG5mdW5jdGlvbiBtaW4odjEsIHYyKSB7XG4gICAgcmV0dXJuIEFycmF5VXRpbHMucmFuZ2UoVkVDVE9SX0xFTkdUSClcbiAgICAgICAgLm1hcChpID0+IE1hdGgubWluKHYxW2ldLCB2MltpXSkpO1xufVxuXG5mdW5jdGlvbiBtYXgodjEsIHYyKSB7XG4gICAgcmV0dXJuIEFycmF5VXRpbHMucmFuZ2UoVkVDVE9SX0xFTkdUSClcbiAgICAgICAgLm1hcChpID0+IE1hdGgubWF4KHYxW2ldLCB2MltpXSkpO1xufVxuXG5mdW5jdGlvbiBsYXJnZXN0KCkge1xuICAgIHJldHVybiBmcm9tVmFsdWVzKFxuICAgICAgICBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFksXG4gICAgICAgIE51bWJlci5QT1NJVElWRV9JTkZJTklUWSxcbiAgICAgICAgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLFxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHNtYWxsZXN0KCkge1xuICAgIHJldHVybiBmcm9tVmFsdWVzKFxuICAgICAgICBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFksXG4gICAgICAgIE51bWJlci5ORUdBVElWRV9JTkZJTklUWSxcbiAgICAgICAgTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICAgICk7XG59XG5cbmZ1bmN0aW9uIG11bHRpcGx5KHYxLCB2Mikge1xuICAgIHJldHVybiBBcnJheVV0aWxzLnJhbmdlKDMpXG4gICAgICAgIC5tYXAoaSA9PiB2MVtpXSAqIHYyW2ldKTtcbn1cblxuZnVuY3Rpb24gY2xvbmUodikge1xuICAgIHJldHVybiBmcm9tVmFsdWVzKC4uLnYpO1xufVxuXG5mdW5jdGlvbiBwYXJzZSh2YWx1ZSkge1xuICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgpO1xuICAgIH1cblxuICAgIGlmKFR5cGUuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZyb21WYWx1ZXMoLi4udmFsdWUpO1xuICAgIH1cblxuICAgIGlmKFR5cGUuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmcm9tVmFsdWVzKHZhbHVlLCB2YWx1ZSwgdmFsdWUpO1xuICAgIH1cblxuXG4gICAgaWYoVHlwZS5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHplcm8oKTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBGYWlsZWQgdG8gcGFyc2UgdmFsdWUgb2YgdHlwZSAnJHtUeXBlLmdldE5hbWUodmFsdWUpfScgaW50byBhIFZlYzNgKTtcbn1cblxuZnVuY3Rpb24gY3Jvc3ModjEsIHYyKSB7XG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgICAgICB2MVsxXSAqIHYyWzJdIC0gdjFbMl0gKiB2MlsxXSxcbiAgICAgICAgdjFbMl0gKiB2MlswXSAtIHYxWzBdICogdjJbMl0sXG4gICAgICAgIHYxWzBdICogdjJbMV0gLSB2MVsxXSAqIHYyWzBdXG4gICAgXSk7XG59XG5cbmZ1bmN0aW9uIGFkZCh2MSwgdjIpIHtcbiAgICByZXR1cm4gZnJvbVZhbHVlcyhcbiAgICAgICAgdjFbMF0gKyB2MlswXSxcbiAgICAgICAgdjFbMV0gKyB2MlsxXSxcbiAgICAgICAgdjFbMl0gKyB2MlsyXVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIHN1Yih2MSwgdjIpIHtcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXG4gICAgICAgIHYxWzBdIC0gdjJbMF0sXG4gICAgICAgIHYxWzFdIC0gdjJbMV0sXG4gICAgICAgIHYxWzJdIC0gdjJbMl1cbiAgICBdKTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplKHYpIHtcbiAgICByZXR1cm4gc2NhbGUodiwgMSAvIGxlbmd0aCh2KSk7XG59XG5cbmZ1bmN0aW9uIHNjYWxlKHYsIHNjYWxhcikge1xuICAgIHJldHVybiB2Lm1hcChlbGVtZW50ID0+IGVsZW1lbnQgKiBzY2FsYXIpO1xufVxuXG5mdW5jdGlvbiBsZW5ndGgodikge1xuICAgIHJldHVybiBNYXRoLnNxcnQodlswXSAqIHZbMF0gKyB2WzFdICogdlsxXSArIHZbMl0gKiB2WzJdKTtcbn1cblxuZnVuY3Rpb24gZnJvbVZhbHVlcyh4ID0gMCwgeSA9IDAsIHogPSAwKSB7XG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW3gsIHksIHpdKTtcbn1cblxuZnVuY3Rpb24gemVybygpIHtcbiAgICByZXR1cm4gZnJvbVZhbHVlcygwLCAwLCAwKTtcbn1cblxuZnVuY3Rpb24gb25lKCkge1xuICAgIHJldHVybiBmcm9tVmFsdWVzKDEsIDEsIDEpO1xufVxuXG5mdW5jdGlvbiBkb3QodjEsIHYyKSB7XG4gICAgcmV0dXJuIHYxWzBdICogdjJbMF0gKyB2MVsxXSAqIHYyWzFdICsgdjFbMl0gKiB2MlsyXTtcbn1cblxuZnVuY3Rpb24gdHJhbnNmb3JtKHYsIG0pIHtcbiAgICByZXR1cm4gZnJvbVZhbHVlcyhcbiAgICAgICAgZG90KHYsIE1hdDMuZ2V0Q29sdW1uKG0sIDApKSxcbiAgICAgICAgZG90KHYsIE1hdDMuZ2V0Q29sdW1uKG0sIDEpKSxcbiAgICAgICAgZG90KHYsIE1hdDMuZ2V0Q29sdW1uKG0sIDIpKVxuICAgICk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9WZWMzLmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9WZWMzLmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBUeXBlIGZyb20gJy4vVHlwZS5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBmcm9tVmFsdWVzLFxuICAgIGRvdCxcbiAgICBwYXJzZSxcbiAgICB6ZXJvXG59O1xuXG5mdW5jdGlvbiBwYXJzZSh2YWx1ZSkge1xuICAgIGlmKHZhbHVlIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZS5zbGljZSgpO1xuICAgIH1cblxuICAgIGlmKFR5cGUuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGZyb21WYWx1ZXMoLi4udmFsdWUpO1xuICAgIH1cblxuICAgIGlmKFR5cGUuaXNOdW1iZXIodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmcm9tVmFsdWVzKHZhbHVlLCB2YWx1ZSwgdmFsdWUsIDEpO1xuICAgIH1cblxuICAgIGlmKFR5cGUuaXNVbmRlZmluZWQodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiB6ZXJvKCk7XG4gICAgfVxuXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHZhbHVlIG9mIHR5cGUgJyR7VHlwZS5nZXROYW1lKHZhbHVlKX0nIGludG8gYSBWZWM0YCk7XG59XG5cbmZ1bmN0aW9uIGZyb21WYWx1ZXMoeCA9IDAsIHkgPSAwLCB6ID0gMCwgdyA9IDEpIHtcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbeCwgeSwgeiwgd10pO1xufVxuXG5mdW5jdGlvbiBkb3QodjEsIHYyKSB7XG4gICAgcmV0dXJuIHYxWzBdICogdjJbMF0gKyB2MVsxXSAqIHYyWzFdICsgdjFbMl0gKiB2MlsyXSArIHYxWzNdICogdjJbM107XG59XG5cbmZ1bmN0aW9uIHplcm8oKSB7XG4gICAgcmV0dXJuIGZyb21WYWx1ZXMoMCwgMCwgMCwgMCk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9WZWM0LmpzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9WZWM0LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgTWF0aFV0aWxzIGZyb20gJy4vTWF0aFV0aWxzLmpzJztcbmltcG9ydCBSYW5kb20gZnJvbSAncmFuZG9tLWpzJztcbmltcG9ydCBUeXBlIGZyb20gJy4vVHlwZS5qcyc7XG5pbXBvcnQgR2Z4IGZyb20gJy4vR2Z4LmpzJztcbmltcG9ydCBHbE1lc2ggZnJvbSAnLi9HbE1lc2guanMnO1xuaW1wb3J0IE1lc2ggZnJvbSAnLi9NZXNoLmpzJztcbmltcG9ydCBTaGFkZXIgZnJvbSAnLi9TaGFkZXIuanMnO1xuaW1wb3J0IFNoYWRlclByb2dyYW0gZnJvbSAnLi9TaGFkZXJQcm9ncmFtLmpzJztcbmltcG9ydCBWZWMzIGZyb20gJy4vVmVjMy5qcyc7XG5pbXBvcnQgVmVjNCBmcm9tICcuL1ZlYzQuanMnO1xuXG5jb25zdCBtb2R1bGVzID0ge307XG5jb25zdCBvcHRpb25zID0ge1xuICAgIHJlbmRlckNvbnRpbnVvdXNseTogdHJ1ZSxcbiAgICBzY2VuZTogJ21vZGVscy9ncmFzc1dhbGwuanNvbidcbn07XG5sZXQgYW5pbWF0aW9uRnJhbWVJZCA9IG51bGw7XG5cbmluaXRDb250ZW50SG1yKCk7XG5pbml0KCk7XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBoYW5kbGVIYXNoQ2hhbmdlKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgaGFuZGxlUmVzaXplKTtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2NhbnZhcycpO1xuICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcblxuICAgIGNvbnN0IHJlbmRlckNvbnRpbnVvdXNseVRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZW5kZXItY29udGludW91c2x5Jyk7XG4gICAgcmVuZGVyQ29udGludW91c2x5VG9nZ2xlLmNoZWNrZWQgPSBvcHRpb25zLnJlbmRlckNvbnRpbnVvdXNseTtcbiAgICByZW5kZXJDb250aW51b3VzbHlUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIG9wdGlvbnMucmVuZGVyQ29udGludW91c2x5ID0gZS50YXJnZXQuY2hlY2tlZDtcbiAgICAgICAgcmVzdGFydCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgc2NlbmVTZWxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2NlbmUtc2VsZWN0aW9uJyk7XG4gICAgc2NlbmVTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgIG9wdGlvbnMuc2NlbmUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgcmVzdGFydCgpO1xuICAgIH0pO1xuXG4gICAgcmVzdGFydChyZW5kZXJDb250aW51b3VzbHlUb2dnbGUuY2hlY2tlZCk7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgY29uc29sZS5sb2coJyVjUmVzdGFydGluZy4uLicsICdmb250LXdlaWdodDpib2xkJyk7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignY2FudmFzJyk7XG5cbiAgICBjb25zdCB1cmxQYXJhbXMgPSBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgc2NlbmU6IG9wdGlvbnMuc2NlbmUsXG4gICAgICAgIHNpbmdsZTogIW9wdGlvbnMucmVuZGVyQ29udGludW91c2x5XG4gICAgfSwgZ2V0VXJsUGFyYW1ldGVycyh3aW5kb3cubG9jYXRpb24pKTtcbiAgICBjb25zdCBzY2VuZSA9IGxvYWRTY2VuZShjYW52YXMsIHVybFBhcmFtcyk7XG5cbiAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcbiAgICBzdGFydFJlbmRlckxvb3AoY2FudmFzLCBzY2VuZSwgdXJsUGFyYW1zKTtcbn1cblxuZnVuY3Rpb24gaW5pdENvbnRlbnRIbXIoKSB7XG4gICAgbGV0IGNvbnRleHQgPSByZXF1aXJlLmNvbnRleHQoJy4uL2NvbnRlbnQnLCB0cnVlLCAvXFwuKGpzfGpzb258dmVydHxmcmFnfHBuZ3xqcGcpJC8pO1xuICAgIGZvcihjb25zdCBrZXkgb2YgY29udGV4dC5rZXlzKCkpIHtcbiAgICAgICAgbW9kdWxlc1trZXldID0gY29udGV4dChrZXkpO1xuICAgIH1cblxuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoY29udGV4dC5pZCwgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbmV3Q29udGV4dCA9IHJlcXVpcmUuY29udGV4dCgnLi4vY29udGVudCcsIHRydWUsIC9cXC4oanN8anNvbnx2ZXJ0fGZyYWd8cG5nfGpwZykkLyk7XG4gICAgICAgICAgICBjb25zdCBjaGFuZ2VkTW9kdWxlcyA9IG5ld0NvbnRleHQua2V5cygpXG4gICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gKHsga2V5OiBrZXksICdtb2R1bGUnOiBuZXdDb250ZXh0KGtleSkgfSkpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihwYWlyID0+IG1vZHVsZXNbcGFpci5rZXldICE9PSBwYWlyLm1vZHVsZSk7XG5cbiAgICAgICAgICAgIGNoYW5nZWRNb2R1bGVzLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgICAgICAgICAgbW9kdWxlc1twYWlyLmtleV0gPSBwYWlyLm1vZHVsZTtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIGlmKGdldEhhc2hDb21wb25lbnQod2luZG93LmxvY2F0aW9uLmhhc2gpID09PSBwYWlyLmtleS5yZXBsYWNlKC9eXFwuXFwvLywgJycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbG9hZE1vZGVsKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdSZWxvYWRlZCcsIHBhaXIua2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOb3QgcmVsb2FkZWQnLCBwYWlyLmtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJlc3RhcnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gICAgcmVzdGFydCgpO1xuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlSGFzaENoYW5nZSgpIHtcbiAgICByZXN0YXJ0KCk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZVJlc2l6ZSgpIHtcbiAgICByZXN0YXJ0KCk7XG59XG5cbmZ1bmN0aW9uIGV4cGFuZFRlbXBsYXRlcyhvYmplY3QpIHtcbiAgICBPYmplY3Qua2V5cyhvYmplY3QpXG4gICAgICAgIC5tYXAoa2V5ID0+ICh7IGtleToga2V5LCB2YWx1ZTogb2JqZWN0W2tleV0gfSkpXG4gICAgICAgIC5maWx0ZXIocGFpciA9PiBpc1RlbXBsYXRlKHBhaXIudmFsdWUpKVxuICAgICAgICAuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuYXNzZXJ0KGlzVGVtcGxhdGUocGFpci52YWx1ZSkpO1xuXG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbWluOiBwb3NpdGlvbk1pbiA9IFZlYzMuemVybygpLFxuICAgICAgICAgICAgICAgICAgICBtYXg6IHBvc2l0aW9uTWF4ID0gVmVjMy56ZXJvKCksXG4gICAgICAgICAgICAgICAgfSA9IHt9LFxuICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbjogb3JpZW50YXRpb25NaW4gPSBWZWMzLnplcm8oKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBvcmllbnRhdGlvbk1heCA9IFZlYzMuemVybygpLFxuICAgICAgICAgICAgICAgIH0gPSB7fSxcbiAgICAgICAgICAgICAgICBzY2FsZToge1xuICAgICAgICAgICAgICAgICAgICBtaW46IHNjYWxlTWluID0gVmVjMy5vbmUoKSxcbiAgICAgICAgICAgICAgICAgICAgbWF4OiBzY2FsZU1heCA9IFZlYzMub25lKCksXG4gICAgICAgICAgICAgICAgfSA9IHt9LFxuICAgICAgICAgICAgICAgIHNlZWQgPSAwLFxuICAgICAgICAgICAgICAgIGNvdW50ID0gMSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZVxuICAgICAgICAgICAgfSA9IHBhaXIudmFsdWU7XG5cbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uUmFuZG9tRW5naW5lID0gUmFuZG9tLmVuZ2luZXMubXQxOTkzNygpLnNlZWQoc2VlZCk7XG4gICAgICAgICAgICBjb25zdCBvcmllbnRhdGlvblJhbmRvbUVuZ2luZSA9IFJhbmRvbS5lbmdpbmVzLm10MTk5MzcoKS5zZWVkKHNlZWQpO1xuICAgICAgICAgICAgY29uc3Qgc2NhbGVSYW5kb21FbmdpbmUgPSBSYW5kb20uZW5naW5lcy5tdDE5OTM3KCkuc2VlZChzZWVkKTtcbiAgICAgICAgICAgIG9iamVjdFtwYWlyLmtleV0gPSBBcnJheShjb3VudCkuZmlsbChudWxsKVxuICAgICAgICAgICAgICAgIC5tYXAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgdGVtcGxhdGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByYW5kb21WZWMzKHBvc2l0aW9uUmFuZG9tRW5naW5lLCBwb3NpdGlvbk1pbiwgcG9zaXRpb25NYXgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3JpZW50YXRpb246IHJhbmRvbVZlYzMob3JpZW50YXRpb25SYW5kb21FbmdpbmUsIG9yaWVudGF0aW9uTWluLCBvcmllbnRhdGlvbk1heCksXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2FsZTogcmFuZG9tVmVjMyhzY2FsZVJhbmRvbUVuZ2luZSwgc2NhbGVNaW4sIHNjYWxlTWF4KSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgT2JqZWN0LnZhbHVlcyhvYmplY3QpXG4gICAgICAgIC5maWx0ZXIoVHlwZS5pc09iamVjdClcbiAgICAgICAgLmZpbHRlcih2YWx1ZSA9PiAhVHlwZS5pc0FycmF5KHZhbHVlKSlcbiAgICAgICAgLmZvckVhY2goZXhwYW5kVGVtcGxhdGVzKTtcbn1cblxuZnVuY3Rpb24gZXZhbHVhdGVGdW5jdGlvbnMob2JqZWN0KSB7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc09iamVjdChvYmplY3QpKTtcblxuICAgIE9iamVjdC5rZXlzKG9iamVjdClcbiAgICAgICAgLm1hcChrZXkgPT4gKHsga2V5OiBrZXksIHZhbHVlOiBvYmplY3Rba2V5XSB9KSlcbiAgICAgICAgLmZpbHRlcihwYWlyID0+IGlzUHJvY2VkdXJhbEZ1bmN0aW9uKHBhaXIudmFsdWUpKVxuICAgICAgICAuZm9yRWFjaChwYWlyID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZU5hbWUgPSBgLi9wcm9jZWR1cmFsLyR7cGFpci52YWx1ZS5mdW5jdGlvbn0uanNgO1xuICAgICAgICAgICAgaWYobW9kdWxlTmFtZSBpbiBtb2R1bGVzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IGV2YWx1YXRlIGZ1bmN0aW9uICcke21vZHVsZU5hbWV9J2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgICAgICAgIGNvbnN0IGZ1bmMgPSBtb2R1bGVzW21vZHVsZU5hbWVdLmRlZmF1bHQ7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmdW5jKHBhaXIudmFsdWUucGFyYW1zKTtcbiAgICAgICAgICAgIGNvbnN0IHQxID0gcGVyZm9ybWFuY2Uubm93KCk7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQcm9jZWR1cmUgJyR7cGFpci52YWx1ZS5mdW5jdGlvbn0nIGV2YWx1YXRlZCB0byAnJHtUeXBlLmdldE5hbWUocmVzdWx0KX0nICgkeyh0MSAtIHQwKS50b0ZpeGVkKDEpfSBtcyk6YCwgcmVzdWx0KTtcbiAgICAgICAgICAgIG9iamVjdFtwYWlyLmtleV0gPSByZXN1bHQ7XG4gICAgICAgIH0pO1xuXG4gICAgT2JqZWN0LnZhbHVlcyhvYmplY3QpXG4gICAgICAgIC5maWx0ZXIoVHlwZS5pc09iamVjdClcbiAgICAgICAgLmZvckVhY2goZXZhbHVhdGVGdW5jdGlvbnMpO1xufVxuXG5mdW5jdGlvbiBpc1Byb2NlZHVyYWxGdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmKCFUeXBlLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYoJ2Z1bmN0aW9uJyBpbiB2YWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpc1RlbXBsYXRlKHZhbHVlKSB7XG4gICAgaWYoIVR5cGUuaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZihUeXBlLmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZigndGVtcGxhdGUnIGluIHZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnREZWdyZWVzVG9SYWRpYW5zKG9iamVjdCkge1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNPYmplY3Qob2JqZWN0KSk7XG5cbiAgICBPYmplY3Qua2V5cyhvYmplY3QpXG4gICAgICAgIC5tYXAoa2V5ID0+ICh7IGtleToga2V5LCB2YWx1ZTogb2JqZWN0W2tleV0gfSkpXG4gICAgICAgIC5maWx0ZXIocGFpciA9PiBwYWlyLmtleS5tYXRjaCgvb3JpZW50YXRpb258cm90YXRpb24vKSlcbiAgICAgICAgLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgICAgICBvYmplY3RbcGFpci5rZXldID0gcGFpci52YWx1ZS5tYXAoTWF0aFV0aWxzLmRlZ1RvUmFkKTtcbiAgICAgICAgfSk7XG5cbiAgICBPYmplY3Qua2V5cyhvYmplY3QpXG4gICAgICAgIC5tYXAoa2V5ID0+ICh7IGtleToga2V5LCB2YWx1ZTogb2JqZWN0W2tleV0gfSkpXG4gICAgICAgIC5maWx0ZXIocGFpciA9PiBUeXBlLmlzT2JqZWN0KHBhaXIudmFsdWUpKVxuICAgICAgICAuZm9yRWFjaChwYWlyID0+IGNvbnZlcnREZWdyZWVzVG9SYWRpYW5zKHBhaXIudmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gY29udmVydENvbG9yc1RvUkdCQShvYmplY3QpIHtcbiAgICBPYmplY3Qua2V5cyhvYmplY3QpXG4gICAgICAgIC5tYXAoa2V5ID0+ICh7IGtleToga2V5LCB2YWx1ZTogb2JqZWN0W2tleV0gfSkpXG4gICAgICAgIC5maWx0ZXIocGFpciA9PiBwYWlyLmtleS5tYXRjaCgvYWxiZWRvfGNsZWFyQ29sb3IvKSlcbiAgICAgICAgLmZvckVhY2gocGFpciA9PiBvYmplY3RbcGFpci5rZXldID0gcGFyc2VDb2xvcihwYWlyLnZhbHVlKSk7XG5cbiAgICBPYmplY3Qua2V5cyhvYmplY3QpXG4gICAgICAgIC5tYXAoa2V5ID0+ICh7IGtleToga2V5LCB2YWx1ZTogb2JqZWN0W2tleV0gfSkpXG4gICAgICAgIC5maWx0ZXIocGFpciA9PiBUeXBlLmlzT2JqZWN0KHBhaXIudmFsdWUpKVxuICAgICAgICAuZm9yRWFjaChwYWlyID0+IGNvbnZlcnRDb2xvcnNUb1JHQkEocGFpci52YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBsb2FkU2NlbmUoY2FudmFzLCB7IHNjZW5lOiBzY2VuZVBhdGggfSkge1xuICAgIGNvbnNvbGUuZ3JvdXAoYExvYWRpbmcgc2NlbmUgJyR7c2NlbmVQYXRofSdgKTtcblxuICAgIGNvbnN0IG1vZGVsID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtb2R1bGVzW2AuLyR7c2NlbmVQYXRofWBdKSk7XG4gICAgY29uc3QgcmVzb3VyY2VzID0gbW9kdWxlcztcbiAgICBjb25zdCBnbCA9IEdmeC5nZXRHbENvbnRleHQoY2FudmFzKTtcblxuICAgIGNvbnNvbGUudGltZSgnU2NlbmUgY3JlYXRpb24nKTtcblxuICAgIC8vIGNvbnZlcnQgYWxiZWRvcyB0byBSR0JBXG4gICAgY29uc29sZS50aW1lKCdDb252ZXJ0IGNvbG9ycyB0byBSR0JBJyk7XG4gICAgY29udmVydENvbG9yc1RvUkdCQShtb2RlbCk7XG4gICAgY29uc29sZS50aW1lRW5kKCdDb252ZXJ0IGNvbG9ycyB0byBSR0JBJyk7XG5cbiAgICAvLyBleHBhbmQgdGVtcGxhdGVzXG4gICAgY29uc29sZS50aW1lKCdFeHBhbmQgdGVtcGxhdGVzJyk7XG4gICAgZXhwYW5kVGVtcGxhdGVzKG1vZGVsKTtcbiAgICBjb25zb2xlLnRpbWVFbmQoJ0V4cGFuZCB0ZW1wbGF0ZXMnKTtcblxuICAgIC8vIGV2YWx1YXRlIGZ1bmN0aW9uc1xuICAgIGNvbnNvbGUudGltZSgnRXZhbHVhdGUgZnVuY3Rpb25zJyk7XG4gICAgZXZhbHVhdGVGdW5jdGlvbnMobW9kZWwpO1xuICAgIGNvbnNvbGUudGltZUVuZCgnRXZhbHVhdGUgZnVuY3Rpb25zJyk7XG5cbiAgICAvLyBjb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFuc1xuICAgIGNvbnNvbGUudGltZSgnQ29udmVydCBkZWdyZWVzIHRvIHJhZGlhbnMnKTtcbiAgICBjb252ZXJ0RGVncmVlc1RvUmFkaWFucyhtb2RlbCk7XG4gICAgY29uc29sZS50aW1lRW5kKCdDb252ZXJ0IGRlZ3JlZXMgdG8gcmFkaWFucycpO1xuXG4gICAgLy8gZXh0cmFjdCBub2RlcyBmcm9tICdjaGlsZHJlbicgYXJyYXlzXG4gICAgY29uc29sZS50aW1lKCdFeHRyYWN0IG5vZGVzIGZyb20gXFwnY2hpbGRyZW5cXCcgYXJyYXlzJyk7XG4gICAgT2JqZWN0LmtleXMobW9kZWwpXG4gICAgICAgIC5tYXAoa2V5ID0+ICh7IGtleToga2V5LCB2YWx1ZTogbW9kZWxba2V5XSB9KSlcbiAgICAgICAgLmZpbHRlcihwYWlyID0+ICdjaGlsZHJlbicgaW4gcGFpci52YWx1ZSlcbiAgICAgICAgLmZvckVhY2gocGFpciA9PiB7XG4gICAgICAgICAgICBwYWlyLnZhbHVlLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLnBhcmVudCA9IGBAJHtwYWlyLmtleX1gO1xuICAgICAgICAgICAgICAgIG1vZGVsW2Ake3BhaXIua2V5fS4ke2luZGV4fWBdID0gY2hpbGQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlbGV0ZSBwYWlyLnZhbHVlLmNoaWxkcmVuO1xuICAgICAgICB9KTtcbiAgICBjb25zb2xlLnRpbWVFbmQoJ0V4dHJhY3Qgbm9kZXMgZnJvbSBcXCdjaGlsZHJlblxcJyBhcnJheXMnKTtcblxuICAgIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiBub2Rlcywgd2l0aCBrZXlzLCBmcm9tIHRoZSBzb3VyY2Ugb2JqZWN0XG4gICAgY29uc3QgdDAgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjb25zdCBub2RlcyA9IE9iamVjdFxuICAgICAgICAua2V5cyhtb2RlbClcbiAgICAgICAgLy8gY3JlYXRlIGtleS12YWx1ZSBwYWlyc1xuICAgICAgICAubWFwKGtleSA9PiAoeyBrZXk6IGtleSwgdmFsdWU6IG1vZGVsW2tleV0gfSkpXG4gICAgICAgIC8vIG1lcmdlIGtleSBhbmQgdmFsdWUgaW50byBhIG5ldyBub2RlXG4gICAgICAgIC5tYXAocGFpciA9PiBPYmplY3QuYXNzaWduKHt9LCBwYWlyLnZhbHVlLCB7IGtleTogcGFpci5rZXkgfSkpO1xuICAgIGNvbnNvbGUubG9nKGBDcmVhdGVkICR7bm9kZXMubGVuZ3RofSBub2RlcyAoJHsocGVyZm9ybWFuY2Uubm93KCkgLSB0MCkudG9GaXhlZCgxKX0gbXMpYCk7XG5cbiAgICAvLyByZXNvbHZlIHJlZmVyZW5jZXNcbiAgICBub2Rlc1xuICAgICAgICAuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKG5vZGUpXG4gICAgICAgICAgICAgICAgLmZpbHRlcihrZXkgPT4gVHlwZS5pc1N0cmluZyhub2RlW2tleV0pKVxuICAgICAgICAgICAgICAgIC5maWx0ZXIoa2V5ID0+IG5vZGVba2V5XS5zdGFydHNXaXRoKCdAJykpXG4gICAgICAgICAgICAgICAgLm1hcChrZXkgPT4gKHsga2V5OiBrZXksIHJlZjogbm9kZVtrZXldLnN1YnN0cigxKSB9KSlcbiAgICAgICAgICAgICAgICAuZm9yRWFjaChwYWlyID0+IG5vZGVbcGFpci5rZXldID0gbm9kZXMuZmluZChpdGVtID0+IGl0ZW0ua2V5ID09PSBwYWlyLnJlZikpO1xuICAgICAgICB9KTtcblxuICAgIC8vIHJlc29sdmUgcGFyZW50c1xuICAgIG5vZGVzXG4gICAgICAgIC5maWx0ZXIobm9kZSA9PiBUeXBlLmlzU3RyaW5nKG5vZGUucGFyZW50KSlcbiAgICAgICAgLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBub2Rlcy5maW5kKGl0ZW0gPT4gaXRlbS5rZXkgPT09IG5vZGUucGFyZW50LnN1YnN0cigxKSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgfSk7XG5cbiAgICAvLyBjYWxjdWxhdGUgZ2xvYmFsVHJhbnNmb3JtIGZvciBhbGwgbm9kZXNcbiAgICBjb25zb2xlLnRpbWUoJ0NhbGN1bGF0ZWQgZ2xvYmFsIHRyYW5zZm9ybScpO1xuICAgIG5vZGVzLmZvckVhY2gobm9kZSA9PiBub2RlLmdsb2JhbFRyYW5zZm9ybSA9IEdmeC5nZXRHbG9iYWxUcmFuc2Zvcm0obm9kZSkpO1xuICAgIGNvbnNvbGUudGltZUVuZCgnQ2FsY3VsYXRlZCBnbG9iYWwgdHJhbnNmb3JtJyk7XG5cbiAgICAvLyBjcmVhdGUgbWVzaGVzIGZyb20gZ2VvbWV0cmllc1xuICAgIGxldCBtZXNoQ291bnQgPSAwO1xuICAgIGNvbnN0IG1lc2hlcyA9IG5vZGVzXG4gICAgICAgIC5maWx0ZXIobm9kZSA9PiAnZ2VvbWV0cnknIGluIG5vZGUpXG4gICAgICAgIC5tYXAobm9kZSA9PiBub2RlLmdlb21ldHJ5KVxuICAgICAgICAucmVkdWNlKChtZXNoZXMsIGdlb21ldHJ5KSA9PiB7XG4gICAgICAgICAgICBpZighbWVzaGVzLmdldChnZW9tZXRyeSkpIHtcbiAgICAgICAgICAgICAgICBtZXNoZXMuc2V0KGdlb21ldHJ5LCBNZXNoLmZyb21HZW9tZXRyeShnZW9tZXRyeSkpO1xuICAgICAgICAgICAgICAgIG1lc2hDb3VudCsrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWVzaGVzO1xuICAgICAgICB9LCBuZXcgV2Vha01hcCgpKTtcbiAgICBjb25zb2xlLmxvZyhgQ3JlYXRlZCAke21lc2hDb3VudH0gbWVzaGVzYCk7XG5cbiAgICAvLyBhc3NpZ24gbWVzaGVzIHRvIG5vZGVzXG4gICAgbm9kZXNcbiAgICAgICAgLmZpbHRlcihub2RlID0+ICdnZW9tZXRyeScgaW4gbm9kZSlcbiAgICAgICAgLmZvckVhY2gobm9kZSA9PiBub2RlLm1lc2ggPSBtZXNoZXMuZ2V0KG5vZGUuZ2VvbWV0cnkpKTtcblxuICAgIGxldCBnbE1lc2hDb3VudCA9IDA7XG4gICAgY29uc3QgZ2xNZXNoZXMgPSBub2Rlc1xuICAgICAgICAuZmlsdGVyKG5vZGUgPT4gJ21lc2gnIGluIG5vZGUpXG4gICAgICAgIC5tYXAobm9kZSA9PiBub2RlLm1lc2gpXG4gICAgICAgIC5yZWR1Y2UoKGdsTWVzaGVzLCBtZXNoKSA9PiB7XG4gICAgICAgICAgICBpZighZ2xNZXNoZXMuZ2V0KG1lc2gpKSB7XG4gICAgICAgICAgICAgICAgZ2xNZXNoZXMuc2V0KG1lc2gsIEdsTWVzaC5mcm9tTWVzaChnbCwgbWVzaCkpO1xuICAgICAgICAgICAgICAgIGdsTWVzaENvdW50Kys7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBnbE1lc2hlcztcbiAgICAgICAgfSwgbmV3IFdlYWtNYXAoKSk7XG4gICAgY29uc29sZS5sb2coYENyZWF0ZWQgJHtnbE1lc2hDb3VudH0gR2xNZXNoYCk7XG5cbiAgICAvLyBhc3NpZ24gbWVzaGVzIHRvIG5vZGVzXG4gICAgbm9kZXNcbiAgICAgICAgLmZpbHRlcihub2RlID0+ICdtZXNoJyBpbiBub2RlKVxuICAgICAgICAuZm9yRWFjaChub2RlID0+IG5vZGUubWVzaCA9IGdsTWVzaGVzLmdldChub2RlLm1lc2gpKTtcblxuICAgIC8vIGRlbGV0ZSBnZW9tZXRyeSBmcm9tIGFsbCBub2RlcyB3aXRoIGEgbWVzaFxuICAgIG5vZGVzXG4gICAgICAgIC5maWx0ZXIobm9kZSA9PiAnbWVzaCcgaW4gbm9kZSlcbiAgICAgICAgLmZvckVhY2gobm9kZSA9PiBkZWxldGUgbm9kZS5nZW9tZXRyeSk7XG5cbiAgICAvLyBhc3NpZ24gZGVmYXVsdCBwcm9ncmFtIG5hbWVzIHRvIGFsbCBub2Rlc1xuICAgIG5vZGVzXG4gICAgICAgIC5maWx0ZXIobm9kZSA9PiAnbWVzaCcgaW4gbm9kZSlcbiAgICAgICAgLmZvckVhY2gobm9kZSA9PiBub2RlLnNoYWRlclByb2dyYW0gPSBub2RlLnNoYWRlclByb2dyYW0gfHwgJ2FtYmllbnQnKTtcbiAgICBub2Rlc1xuICAgICAgICAuZmlsdGVyKG5vZGUgPT4gJ2xpZ2h0JyBpbiBub2RlKVxuICAgICAgICAuZm9yRWFjaChub2RlID0+IG5vZGUuc2hhZGVyUHJvZ3JhbSA9IG5vZGUuc2hhZGVyUHJvZ3JhbSB8fCAnc3VubGlnaHQnKTtcblxuICAgIC8vIGNvbXBpbGUgdW5pcXVlIHByb2dyYW1zXG4gICAgY29uc3QgcHJvZ3JhbXMgPSBub2Rlc1xuICAgICAgICAuZmlsdGVyKG5vZGUgPT4gJ3NoYWRlclByb2dyYW0nIGluIG5vZGUpXG4gICAgICAgIC5tYXAobm9kZSA9PiBub2RlLnNoYWRlclByb2dyYW0pXG4gICAgICAgIC5yZWR1Y2UoKGNvbXBpbGVkUHJvZ3JhbXMsIHByb2dyYW1OYW1lKSA9PiB7XG4gICAgICAgICAgICBpZihwcm9ncmFtTmFtZSBpbiBjb21waWxlZFByb2dyYW1zID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZzU3JjID0gcmVzb3VyY2VzW2AuL3NoYWRlcnMvJHtwcm9ncmFtTmFtZX0udmVydGBdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZzU3JjID0gcmVzb3VyY2VzW2AuL3NoYWRlcnMvJHtwcm9ncmFtTmFtZX0uZnJhZ2BdO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZzID0gU2hhZGVyLmNvbXBpbGUoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIHZzU3JjKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmcyA9IFNoYWRlci5jb21waWxlKGdsLCBnbC5GUkFHTUVOVF9TSEFERVIsIGZzU3JjKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmFtID0gU2hhZGVyUHJvZ3JhbS5jb21waWxlKGdsLCB2cywgZnMpO1xuICAgICAgICAgICAgICAgIGNvbXBpbGVkUHJvZ3JhbXNbcHJvZ3JhbU5hbWVdID0gcHJvZ3JhbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbXBpbGVkUHJvZ3JhbXM7XG4gICAgICAgIH0sIHt9KTtcbiAgICBjb25zb2xlLmxvZyhgQ29tcGlsZWQgJHtPYmplY3Qua2V5cyhwcm9ncmFtcykubGVuZ3RofSBzaGFkZXIgcHJvZ3JhbXNgKTtcblxuICAgIC8vIGFzc2lnbiBwcm9ncmFtcyB0byBub2Rlc1xuICAgIG5vZGVzXG4gICAgICAgIC5maWx0ZXIobm9kZSA9PiAnc2hhZGVyUHJvZ3JhbScgaW4gbm9kZSlcbiAgICAgICAgLmZvckVhY2gobm9kZSA9PiBub2RlLnNoYWRlclByb2dyYW0gPSBwcm9ncmFtc1tub2RlLnNoYWRlclByb2dyYW1dKTtcblxuICAgIGNvbnN0IHNjZW5lID0geyBub2RlcyB9O1xuICAgIGNvbnNvbGUudGltZUVuZCgnU2NlbmUgY3JlYXRpb24nKTtcblxuICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICByZXR1cm4gc2NlbmU7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0UmVuZGVyTG9vcChjYW52YXMsIHNjZW5lLCB7IHNpbmdsZSA9IGZhbHNlLCB1c2VIYWNrID0gZmFsc2UgfSkge1xuICAgIGNvbnNvbGUuYXNzZXJ0KFR5cGUuaXNCb29sZWFuKHNpbmdsZSkpO1xuICAgIGNvbnNvbGUubG9nKGBTdGFydGluZyByZW5kZXIgbG9vcC4uLiAoc2luZ2xlID0gJHtzaW5nbGV9KWApO1xuICAgIGxldCB0b3RhbFRpbWVMYXN0RnJhbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBhbmltYXRpb25GcmFtZUlkID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuXG4gICAgZnVuY3Rpb24gbG9vcCh0b3RhbFRpbWUpIHtcbiAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdG90YWxUaW1lIC0gdG90YWxUaW1lTGFzdEZyYW1lO1xuXG4gICAgICAgIEdmeC5yZW5kZXJTY2VuZShjYW52YXMsIHNjZW5lLCB7IHRvdGFsOiAoc2luZ2xlID8gMCA6IHRvdGFsVGltZSksIGRlbHRhOiBkZWx0YVRpbWUgfSwgdXNlSGFjayk7XG4gICAgICAgIHRvdGFsVGltZUxhc3RGcmFtZSA9IHRvdGFsVGltZTtcbiAgICAgICAgYW5pbWF0aW9uRnJhbWVJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShsb29wKTtcblxuICAgICAgICBpZihzaW5nbGUpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKGFuaW1hdGlvbkZyYW1lSWQpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbmRlcmluZyB0b29rICR7KHBlcmZvcm1hbmNlLm5vdygpIC0gdG90YWxUaW1lKS50b0ZpeGVkKDEpfSBtc2ApO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByYW5kb21WZWMzKGVuZ2luZSwgbWluLCBtYXgpIHtcbiAgICBjb25zdCBkaXN0WCA9IFJhbmRvbS5yZWFsKG1pblswXSwgbWF4WzBdLCB0cnVlKTtcbiAgICBjb25zdCBkaXN0WSA9IFJhbmRvbS5yZWFsKG1pblsxXSwgbWF4WzFdLCB0cnVlKTtcbiAgICBjb25zdCBkaXN0WiA9IFJhbmRvbS5yZWFsKG1pblsyXSwgbWF4WzJdLCB0cnVlKTtcbiAgICByZXR1cm4gVmVjMy5mcm9tVmFsdWVzKFxuICAgICAgICBkaXN0WChlbmdpbmUpLFxuICAgICAgICBkaXN0WShlbmdpbmUpLFxuICAgICAgICBkaXN0WihlbmdpbmUpXG4gICAgKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXJsUGFyYW1ldGVycyhsb2NhdGlvbikge1xuICAgIGNvbnNvbGUuYXNzZXJ0KCdoYXNoJyBpbiBsb2NhdGlvbik7XG5cbiAgICBjb25zdCBwYXJhbWV0ZXJzID0gKGRlY29kZVVSSUNvbXBvbmVudChsb2NhdGlvbi5oYXNoKS5tYXRjaCgvKD89W14jXSlbXiZcXHNdKz1bXiZcXHNdKy9nKSB8fCBbXSlcbiAgICAgICAgLnJlZHVjZSgob2JqZWN0LCBtYXRjaCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gbWF0Y2guc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIG9iamVjdFtrZXldID0gcGFyc2VTdHJpbmcodmFsdWUpO1xuXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgICAgICB9LCB7fSk7XG5cbiAgICByZXR1cm4gcGFyYW1ldGVycztcbn1cblxuZnVuY3Rpb24gcGFyc2VDb2xvcih2YWx1ZSkge1xuICAgIGlmKFR5cGUuaXNTdHJpbmcodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBWZWM0LnBhcnNlKGNvbnZlcnROYW1lVG9Db2xvcih2YWx1ZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBWZWM0LnBhcnNlKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdHJpbmcoc3RyaW5nKSB7XG4gICAgY29uc29sZS5hc3NlcnQoVHlwZS5pc1N0cmluZyhzdHJpbmcpKTtcblxuICAgIGlmKHN0cmluZyA9PT0gJycpIHtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICB9XG5cbiAgICBpZihzdHJpbmcgPT09ICd0cnVlJykge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZihzdHJpbmcgPT09ICdmYWxzZScpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCFpc05hTihzdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiArc3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnROYW1lVG9Db2xvcihjb2xvck5hbWUpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZWxlbWVudC5zdHlsZS5jb2xvciA9IGNvbG9yTmFtZTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgY29uc3QgcmF3Q29sb3IgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmNvbG9yO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XG5cbiAgICBjb25zdCBjb2xvciA9IHJhd0NvbG9yLm1hdGNoKC9cXGQrL2cpXG4gICAgICAgIC5tYXAoaXRlbSA9PiBwYXJzZUludChpdGVtKSlcbiAgICAgICAgLm1hcChpdGVtID0+IGl0ZW0gLyAyNTUpO1xuXG4gICAgcmV0dXJuIGNvbG9yO1xufVxuXG4vKlxuZnVuY3Rpb24gbG9hZE1vZGVsKG1vZGVsKSB7XG4gICAgcmVuZGVyKG1vZGVsKTtcbn1cblxuZnVuY3Rpb24gcmVxdWVzdE1vZGVsRmlsZShwYXRoKSB7XG4gICAgY29uc3QgREVGQVVMVF9NT0RFTCA9ICdtb2RlbHMvd2VpcmQtY2FueW9uMy5qc29uJztcblxuICAgIGlmKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHBhdGggPSBERUZBVUxUX01PREVMO1xuICAgIH1cblxuICAgIHJlcXVlc3RGaWxlKHBhdGgpXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gbG9hZCBtb2RlbCAnJHtwYXRofSc6ICR7ZXJyb3J9YCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBMb2FkaW5nIG1vZGVsICcke3BhdGh9Jy4uLmApO1xuICAgICAgICAgICAgbG9hZE1vZGVsKEpTT04ucGFyc2UocmVzcG9uc2UpKTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUhhc2hDaGFuZ2UoZSkge1xuICAgIHJlcXVlc3RNb2RlbEZpbGUoZ2V0SGFzaENvbXBvbmVudChlLnRhcmdldC5sb2NhdGlvbi5oYXNoKSk7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RGaWxlKHBhdGgpIHtcbiAgICBjb25zdCBSRUFEWV9TVEFURSA9IE9iamVjdC5mcmVlemUoe1xuICAgICAgICAwOiAnVU5TRU5UJyxcbiAgICAgICAgMTogJ09QRU5FRCcsXG4gICAgICAgIDI6ICdIRUFERVJTX1JFQ0VJVkVEJyxcbiAgICAgICAgMzogJ0xPQURJTkcnLFxuICAgICAgICA0OiAnRE9ORSdcbiAgICB9KTtcblxuICAgIHJldHVybiBuZXcgUHJvbWlzZShleGVjdXRvcik7XG5cbiAgICBmdW5jdGlvbiBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCBoYW5kbGVSZWFkeVN0YXRlQ2hhbmdlKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdwcm9ncmVzcycsIGhhbmRsZVByb2dyZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgaGFuZGxlTG9hZCk7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCBoYW5kbGVFcnJvcik7XG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBoYW5kbGVBYm9ydCk7XG4gICAgICAgIHJlcXVlc3Qub3BlbignR0VUJywgcGF0aCk7XG4gICAgICAgIHJlcXVlc3Quc2VuZCgpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlYWR5U3RhdGVDaGFuZ2UoZSkge1xuICAgICAgICAgICAgY29uc3QgcmVhZHlTdGF0ZSA9IFJFQURZX1NUQVRFW2UudGFyZ2V0LnJlYWR5U3RhdGVdO1xuICAgICAgICAgICAgaWYocmVhZHlTdGF0ZSA9PT0gJ0xPQURJTkcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwYXRofTogJHtSRUFEWV9TVEFURVtlLnRhcmdldC5yZWFkeVN0YXRlXX0gWyR7ZS50YXJnZXQuc3RhdHVzfV1gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZVByb2dyZXNzKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJhdGlvID0gKChlLmxvYWRlZCAvIGUudG90YWwpICogMTAwKS50b0ZpeGVkKDEpO1xuICAgICAgICAgICAgY29uc3QgcGVyY2VudENvbXBsZXRlID0gZS5sZW5ndGhDb21wdXRhYmxlID9cbiAgICAgICAgICAgICAgICBgJHtyYXRpb30lYCA6XG4gICAgICAgICAgICAgICAgJzxOL0E+JztcblxuICAgICAgICAgICAgY29uc3QgbG9hZGVkID0gYnl0ZXNUb0h1bWFuUmVhZGFibGUoZS5sb2FkZWQpO1xuICAgICAgICAgICAgY29uc3QgdG90YWwgPSBieXRlc1RvSHVtYW5SZWFkYWJsZShlLnRvdGFsKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cGF0aH06ICR7cGVyY2VudENvbXBsZXRlfSAoJHtsb2FkZWR9LyR7dG90YWx9KSBbJHtlLnRhcmdldC5zdGF0dXN9XWApO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlTG9hZChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtwYXRofTogTE9BRGApO1xuXG4gICAgICAgICAgICBpZihlLnRhcmdldC5zdGF0dXMgPT09IDIwMCB8fCBlLnRhcmdldC5zdGF0dXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKGUudGFyZ2V0LnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoZS50YXJnZXQuc3RhdHVzVGV4dCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlRXJyb3IoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7cGF0aH06IEVSUk9SYCk7XG4gICAgICAgICAgICByZWplY3QobmV3IEVycm9yKGUudGFyZ2V0LnN0YXR1c1RleHQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUFib3J0KGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3BhdGh9OiBBQk9SVGApO1xuICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihlLnRhcmdldC5zdGF0dXNUZXh0KSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGJ5dGVzVG9IdW1hblJlYWRhYmxlKGJ5dGVzKSB7XG4gICAgaWYoYnl0ZXMgPiBNYXRoLnBvdygxMDAwLCAyKSkge1xuICAgICAgICByZXR1cm4gYCR7KGJ5dGVzL01hdGgucG93KDEwMDAsIDIpKS50b0ZpeGVkKDIpfU1CYDtcbiAgICB9XG4gICAgaWYoYnl0ZXMgPiBNYXRoLnBvdygxMDAwLCAxKSkge1xuICAgICAgICByZXR1cm4gYCR7KGJ5dGVzL01hdGgucG93KDEwMDAsIDEpKS50b0ZpeGVkKDApfWtCYDtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7Ynl0ZXN9QmA7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNhbnZhc1NpemUoKSB7XG4gICAgY29uc3Qgd2lkdGggPSBjYW52YXMucGFyZW50Tm9kZS5jbGllbnRXaWR0aDtcbiAgICBjb25zdCBoZWlnaHQgPSBjYW52YXMucGFyZW50Tm9kZS5jbGllbnRIZWlnaHQ7XG5cbiAgICBpZihjYW52YXMud2lkdGggIT09IHdpZHRoIHx8IGNhbnZhcy5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgY29uc29sZS5sb2coYFJlc2l6ZWQgY2FudmFzIHRvIFske2NhbnZhcy53aWR0aH0sICR7Y2FudmFzLmhlaWdodH1dYCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW5kZXIobW9kZWwpIHtcbiAgICB1cGRhdGVDYW52YXNTaXplKCk7XG4gICAganNvbjJnZngoY2FudmFzLCBtb2RlbCk7XG59XG4qL1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvbWFpbi5qc1xuLy8gbW9kdWxlIGlkID0gLi9zcmMvbWFpbi5qc1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIFByZXBhcmUgY3NzVHJhbnNmb3JtYXRpb25cbnZhciB0cmFuc2Zvcm07XG5cbnZhciBvcHRpb25zID0ge31cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL3N0eWxlLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAuL3NyYy9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==