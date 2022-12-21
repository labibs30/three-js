// Preparing the world
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xa0a0a0);
var cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 100);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
document.body.appendChild(renderer.domElement);

cam.position.z = 7;
cam.position.y = 1;
cam.position.x = -1;

// end of preparing the world

// texture
const ceramic = new THREE.TextureLoader().load("./texture/floor.jpg");
const wall = new THREE.TextureLoader().load("./texture/wall.jpg");
// ceramic.anisotropy = maxAnisotropy;
ceramic.wrapS = THREE.RepeatWrapping;
ceramic.wrapT = THREE.RepeatWrapping;
ceramic.repeat.set(8, 16);
ceramic.encoding = THREE.sRGBEncoding;
// end texture

// Ligthing

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 20, 0);
hemiLight.castShadow = true;
scene.add(hemiLight);

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(7, 1, -1);
light.castShadow = true; // default false
scene.add(light);

// const dirLight = new THREE.DirectionalLight(0xffffff);
// dirLight.position.set(-3, 10, -10);
// dirLight.castShadow = true;
// dirLight.shadow.camera.top = 2;
// dirLight.shadow.camera.bottom = -2;
// dirLight.shadow.camera.left = -2;
// dirLight.shadow.camera.right = 2;
// dirLight.shadow.camera.near = 0.1;
// dirLight.shadow.camera.far = 40;
// scene.add(dirLight);
// end lighting

// controls
// let clock = new THREE.Clock();
// let controls = new THREE.OrbitControls(cam, renderer.domElement);
// controls.lookSpeed = 0.1;

// controls.update();
// controls.enableRotate = true;
// end controls

let gltfLoader = new THREE.GLTFLoader();
gltfLoader.load("assets/bed/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = -Math.PI / 2;
  gltfScene.scene.children[0].position.y = -1;
  gltfScene.scene.children[0].position.x = 2.5 - 0.5;
  gltfScene.scene.children[0].position.z = -5 + 0.8;

  gltfScene.scene.children[0].scale.set(0.05, 0.045, 0.045);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader1 = new THREE.GLTFLoader();
gltfLoader1.load("assets/lockers/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = -Math.PI / 2;
  gltfScene.scene.children[0].position.y = -1;
  gltfScene.scene.children[0].position.x = -3.3 - 0.1;
  gltfScene.scene.children[0].position.z = -5 + 0.4;

  gltfScene.scene.children[0].scale.set(0.335, 0.535, 0.5);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader2 = new THREE.GLTFLoader();
gltfLoader1.load("assets/lockers/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = -Math.PI / 2;
  gltfScene.scene.children[0].position.y = -1;
  gltfScene.scene.children[0].position.x = -2.3 + 0.2;
  gltfScene.scene.children[0].position.z = -5 + 0.4;

  gltfScene.scene.children[0].scale.set(0.335, 0.535, 0.5);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader3 = new THREE.GLTFLoader();
gltfLoader1.load("assets/table/scene.gltf", (gltfScene) => {
  //   gltfScene.scene.children[0].rotation.z = -Math.PI / 2;
  gltfScene.scene.children[0].position.y = -1;
  gltfScene.scene.children[0].position.x = -3.3 + 0.1;
  gltfScene.scene.children[0].position.z = -1 + 0.5;

  gltfScene.scene.children[0].scale.set(0.03, 0.03, 0.03);
  gltfScene.scene.children[0].receiveShadow = true;
  gltfScene.scene.children[0].castShadow = true;
  scene.add(gltfScene.scene.children[0]);
});
let gltfLoader4 = new THREE.GLTFLoader();
gltfLoader1.load("assets/chair/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI;
  gltfScene.scene.children[0].position.y = 0 - 0.15;
  gltfScene.scene.children[0].position.x = -3.3 + 0.7;
  gltfScene.scene.children[0].position.z = -1 + 0.8;

  gltfScene.scene.children[0].scale.set(0.73, 0.73, 0.73);
  scene.add(gltfScene.scene.children[0]);
});
let gltfLoader5 = new THREE.GLTFLoader();
gltfLoader1.load("assets/table/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI;
  gltfScene.scene.children[0].position.y = -1;
  gltfScene.scene.children[0].position.x = 3 + 0.3;
  gltfScene.scene.children[0].position.z = 2 + 0.4;

  gltfScene.scene.children[0].scale.set(0.03, 0.03, 0.03);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader6 = new THREE.GLTFLoader();
gltfLoader1.load("assets/chair/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI * 2;
  gltfScene.scene.children[0].position.y = 0 - 0.15;
  gltfScene.scene.children[0].position.x = 3 - 0.3;
  gltfScene.scene.children[0].position.z = 2;

  gltfScene.scene.children[0].scale.set(0.73, 0.73, 0.73);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader7 = new THREE.GLTFLoader();
gltfLoader1.load("assets/rack/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI;
  gltfScene.scene.children[0].position.y = -1;
  gltfScene.scene.children[0].position.x = 3 + 0.8;
  gltfScene.scene.children[0].position.z = 2 - 1.8;

  gltfScene.scene.children[0].scale.set(1.3, 0.7, 0.99);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader8 = new THREE.GLTFLoader();
gltfLoader1.load("assets/galoon/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI / 2;
  gltfScene.scene.children[0].position.y = -1;
  gltfScene.scene.children[0].position.x = -3.3 + 0.1;
  gltfScene.scene.children[0].position.z = -1 + 3.6;

  gltfScene.scene.children[0].scale.set(1.3, 1.3, 0.99);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader9 = new THREE.GLTFLoader();
gltfLoader1.load("assets/mini_table/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI / 2;
  gltfScene.scene.children[0].position.y = -1 + 0.35;
  gltfScene.scene.children[0].position.x = -3.3 + 0.1;
  gltfScene.scene.children[0].position.z = -1 + 2.5;

  gltfScene.scene.children[0].scale.set(0.6, 0.3, 0.6);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader10 = new THREE.GLTFLoader();
gltfLoader1.load("assets/printer/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI / 2;
  gltfScene.scene.children[0].position.y = 0 - 0.2;
  gltfScene.scene.children[0].position.x = -3.3 + 0.1;
  gltfScene.scene.children[0].position.z = -1 + 2.5;

  gltfScene.scene.children[0].scale.set(0.1, 0.1, 0.1);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader11 = new THREE.GLTFLoader();
gltfLoader1.load("assets/plastic_storage/scene.gltf", (gltfScene) => {
  //   gltfScene.scene.children[0].rotation.z = -Math.PI / 2;
  gltfScene.scene.children[0].position.y = -1 + 0.25;
  gltfScene.scene.children[0].position.x = -3.3 + 0.1;
  gltfScene.scene.children[0].position.z = -1 - 1.4;

  gltfScene.scene.children[0].scale.set(9.03, 9.03, 9.03);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader12 = new THREE.GLTFLoader();
gltfLoader1.load("assets/shoes_rack/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = -Math.PI / 2;
  gltfScene.scene.children[0].position.y = -1 + 0.4;
  gltfScene.scene.children[0].position.x = -3.3 + 0.1;
  gltfScene.scene.children[0].position.z = -1 + 3.6 + 1.5;

  gltfScene.scene.children[0].scale.set(0.02, 0.02, 0.02);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader13 = new THREE.GLTFLoader();
gltfLoader1.load("assets/toilet/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = -Math.PI / 2;
  gltfScene.scene.children[0].position.y = -1 + 0.4;
  gltfScene.scene.children[0].position.x = 3.3 - 0.1;
  gltfScene.scene.children[0].position.z = 3.3 + 3.6 + 1.5 - 0.7;

  gltfScene.scene.children[0].scale.set(2.03, 2.03, 2.03);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader14 = new THREE.GLTFLoader();
gltfLoader1.load("assets/trash_can/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = -Math.PI / 2;
  gltfScene.scene.children[0].position.y = -1.4 + 0.4;
  gltfScene.scene.children[0].position.x = -3.3 + 0.1;
  gltfScene.scene.children[0].position.z = 0.3 + 3.6 + 1.5;

  gltfScene.scene.children[0].scale.set(0.005, 0.005, 0.005);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader15 = new THREE.GLTFLoader();
gltfLoader1.load("assets/carpet/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = -Math.PI / 2;
  gltfScene.scene.children[0].position.y = -1.3 + 0.4;
  gltfScene.scene.children[0].position.x = -0.3 + 0.1;
  gltfScene.scene.children[0].position.z = -7.0 + 3.6 + 1.5;

  gltfScene.scene.children[0].scale.set(1.5, 1.5, 1.5);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader16 = new THREE.GLTFLoader();
gltfLoader1.load("assets/laptops/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = -Math.PI;
  gltfScene.scene.children[0].position.y = 0.3;
  gltfScene.scene.children[0].position.x = -3.3 + 0.1;
  gltfScene.scene.children[0].position.z = -0.7 + 0.5;

  gltfScene.scene.children[0].scale.set(2.0, 2.0, 2.0);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader17 = new THREE.GLTFLoader();
gltfLoader1.load("assets/door/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = -2 * Math.PI;
  gltfScene.scene.children[0].position.y = 0 - 1;
  gltfScene.scene.children[0].position.x = 0 - 1;
  gltfScene.scene.children[0].position.z = 5 + 4;

  gltfScene.scene.children[0].scale.set(0.018, 0.018, 0.018);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader18 = new THREE.GLTFLoader();
gltfLoader1.load("assets/window/scene.gltf", (gltfScene) => {
  //   gltfScene.scene.children[0].rotation.z = -2 * Math.PI;
  gltfScene.scene.children[0].position.y = 0 + 0.3;
  gltfScene.scene.children[0].position.x = 0;
  gltfScene.scene.children[0].position.z = -4.15;

  gltfScene.scene.children[0].scale.set(0.3, 0.3, 0.3);
  scene.add(gltfScene.scene.children[0]);
});

// let gltfLoader20 = new THREE.GLTFLoader();
// gltfLoader1.load("assets/lightbulb/scene.gltf", (gltfScene) => {
//     gltfScene.scene.children[0].rotation.y =  Math.PI/2;
//   gltfScene.scene.children[0].position.y = 2.3;
//   gltfScene.scene.children[0].position.x = -4.0 + 0.1;
//   gltfScene.scene.children[0].position.z = -0.7 + 0.5;

//   gltfScene.scene.children[0].scale.set(3.3, 3.3, 3.3);
//   scene.add(gltfScene.scene.children[0]);
// });

let gltfLoader21 = new THREE.GLTFLoader();
gltfLoader1.load("assets/laptops/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = 2*Math.PI;
  gltfScene.scene.children[0].position.y = 0.3;
  gltfScene.scene.children[0].position.x = 3 + 0.3;
  gltfScene.scene.children[0].position.z = 2 ;

  gltfScene.scene.children[0].scale.set(2.0, 2.0, 2.0);
  scene.add(gltfScene.scene.children[0]);
});

// let gltfLoader22 = new THREE.GLTFLoader();

// gltfLoader1.load("assets/ukulele/scene.gltf", (gltfScene) => {
//   gltfScene.scene.children[0].rotation.z = Math.PI;
//   gltfScene.scene.children[0].position.y = -1;
//   gltfScene.scene.children[0].position.x = 2 + 0.3;
//   gltfScene.scene.children[0].position.z = 2.3 ;

//   gltfScene.scene.children[0].scale.set(-0.5, 0.5, 0.5);
//   scene.add(gltfScene.scene.children[0]);
// });
// create wall
// 1. wc wallS

let gltfLoader23 = new THREE.GLTFLoader();
gltfLoader1.load("assets/monitors/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI/4;
  gltfScene.scene.children[0].position.y = 0.3;
  gltfScene.scene.children[0].position.x = -3.3 + 0.1;
  gltfScene.scene.children[0].position.z = -1.7 + 0.5;

  gltfScene.scene.children[0].scale.set(.7, .7, .7);
  scene.add(gltfScene.scene.children[0]);
});

let gltfLoader24 = new THREE.GLTFLoader();
gltfLoader1.load("assets/stationary/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = 2*Math.PI;
  gltfScene.scene.children[0].position.y = 0.3;
  gltfScene.scene.children[0].position.x = 3 + 0.3;
  gltfScene.scene.children[0].position.z = 3 ;

  gltfScene.scene.children[0].scale.set(.1, .1, .1);
  scene.add(gltfScene.scene.children[0]);
});

let midWall = new THREE.BoxGeometry(4 - 0.2, 4, 0.3);
let mdMesh = new THREE.Mesh(
  midWall,
  new THREE.MeshPhongMaterial({
    map: ceramic,
    color: 0xffffff,
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);
mdMesh.position.set(2.5 - 0.4, 1, 6.35);

scene.add(mdMesh);

let midWall1 = new THREE.BoxGeometry(0.2, 3.5, 0.7);
let mdMesh1 = new THREE.Mesh(
  midWall1,
  new THREE.MeshPhongMaterial({
    map: wall,
    color: "#E1C142",
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);
mdMesh1.position.set(0.1, 1.5 - 0.25, 6.35);

scene.add(mdMesh1);

let midWall2 = new THREE.BoxGeometry(0.2, 5.3, 1);
let midMesh2 = new THREE.Mesh(
  midWall2,
  new THREE.MeshPhongMaterial({
    map: wall,
    color: "#E1C142",
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);

midMesh2.position.set(0.1, 4 - 0.5, 6.35);
midMesh2.rotation.x -= Math.PI / 2;
// midMesh2.rotation.y = Math.PI / 2;
scene.add(midMesh2);

let leftWall = new THREE.BoxGeometry(4, 4.5, 0.3);
let lwMesh = new THREE.Mesh(
  leftWall,
  new THREE.MeshPhongMaterial({
    map: wall,
    color: "#E1C142",
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);
lwMesh.position.set(2.5 - 0.5, 2 - 0.25, 6.35 - 2.5);

scene.add(lwMesh);

// let rightWall = new THREE.BoxGeometry(4 - 0.2, 3.3, 0.3);
// let rwMesh = new THREE.Mesh(
//   rightWall,
//   new THREE.MeshPhongMaterial({
//     map: ceramic,
//     color: 0xfffff,
//     shininess: 10,
//     emissiveIntensity: 0.9,
//   })
// );
// rwMesh.position.set(2.5 + 0.1, 1.15, 6.35 + 2.5);

// scene.add(rwMesh);
// base wall
let planeGo = new THREE.BoxGeometry(8, 14, 0.05);
let planeMesh = new THREE.Mesh(
  planeGo,
  new THREE.MeshPhongMaterial({
    map: ceramic,
    color: 0xffffff,
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);



planeMesh.position.set(0, -1, 2);
planeMesh.rotation.x -= Math.PI / 2;
// planeMesh.rotation.y = Math.PI / 2;
scene.add(planeMesh);

// top wall
let planeGo0 = new THREE.BoxGeometry(8, 14, 0.05);
let planeMesh0 = new THREE.Mesh(
  planeGo0,
  new THREE.MeshPhongMaterial({
    // map: ceramic,
    color: 0xffffff,
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);

planeMesh0.position.set(0, -1 + 5, 2);
planeMesh0.rotation.x -= Math.PI / 2;
// planeMesh.rotation.y = Math.PI / 2;
scene.add(planeMesh0);
// right wall
let planeGo1 = new THREE.BoxGeometry(5, 14, 0.05);
let planeMesh1 = new THREE.Mesh(
  planeGo1,
  new THREE.MeshPhongMaterial({
    map: wall,
    color: "#E1C142",
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);

planeMesh1.position.set(0 + 4, -1 + 2 + 0.5, 2);
planeMesh1.rotation.x -= Math.PI / 2;
planeMesh1.rotation.y = Math.PI / 2;
scene.add(planeMesh1);

//left wall

let planeGo2 = new THREE.BoxGeometry(5, 14, 0.05);
let planeMesh2 = new THREE.Mesh(
  planeGo2,
  new THREE.MeshPhongMaterial({
    map: wall,
    color: "#E1C142",
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);

planeMesh2.position.set(0 - 4, -1 + 2.5, 2);
planeMesh2.rotation.x -= Math.PI / 2;
planeMesh2.rotation.y = Math.PI / 2;
scene.add(planeMesh2);

// back wall
let planeGo3 = new THREE.BoxGeometry(8, 5, 0.05);
let planeMesh3 = new THREE.Mesh(
  planeGo3,
  new THREE.MeshPhongMaterial({
    map: wall,
    color: "#E1C142",
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);

planeMesh3.position.set(0, -1 + 2.5, -5);
scene.add(planeMesh3);
// window
let createWindow = new THREE.BoxGeometry(3, 5, 0.8);
let windowMesh = new THREE.Mesh(
  createWindow,
  new THREE.MeshPhongMaterial({
    map: wall,
    color: "#E1C142",
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);

windowMesh.position.set(0, -1 + 2.5, -9.5 + 5 - 0.1);
scene.add(windowMesh);
// front wall 1
let planeGo4 = new THREE.BoxGeometry(4, 5, 0.05);
let planeMesh4 = new THREE.Mesh(
  planeGo4,
  new THREE.MeshPhongMaterial({
    map: wall,
    color: "#E1C142",
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);

planeMesh4.position.set(0 + 2, -1 + 2.5, 8 + 1);
// planeMesh3.rotation.x -= Math.PI / 2;
// planeMesh3.rotation.y = Math.PI / 2;
scene.add(planeMesh4);

// frant wall 2
let planeGo5 = new THREE.BoxGeometry(2, 5, 0.05);
let planeMesh5 = new THREE.Mesh(
  planeGo5,
  new THREE.MeshPhongMaterial({
    map: wall,
    color: "#E1C142",
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);

planeMesh5.position.set(0 - 2.75 - 0.25, -1 + 2 + 0.5, 8 + 1);
// planeMesh3.rotation.x -= Math.PI / 2;
// planeMesh3.rotation.y = Math.PI / 2;
scene.add(planeMesh5);

// frant wall 3
let planeGo6 = new THREE.BoxGeometry(2, 1.25, 0.05);
let planeMesh6 = new THREE.Mesh(
  planeGo6,
  new THREE.MeshPhongMaterial({
    map: wall,
    color: "#E1C142",
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);

planeMesh6.position.set(0 - 1, -1 + 2 + 2.5 - 0.125, 8 + 1);
// planeMesh3.rotation.x -= Math.PI / 2;
// planeMesh3.rotation.y = Math.PI / 2;
scene.add(planeMesh6);

let wcBase = new THREE.BoxGeometry(4, 5.3, 0.5);
let wcMesh = new THREE.Mesh(
  wcBase,
  new THREE.MeshPhongMaterial({
    map: ceramic,
    color: 0xffffff,
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);

wcMesh.position.set(2.5 - 0.5, -1 + 0.25, 6.35);
wcMesh.rotation.x -= Math.PI / 2;
// wcMesh.rotation.y = Math.PI / 2;
scene.add(wcMesh);

// Resize the page
window.addEventListener("resize", function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight);
  cam.aspect = this.window.innerWidth / this.window.innerHeight;
});

// controls
let controls = new THREE.PointerLockControls(cam, renderer.domElement);
let clock = new THREE.Clock();

let btn = document.querySelector("#button1");
btn.addEventListener("click", () => {
  controls.lock();
});

controls.addEventListener("lock", () => {
  btn.innerHTML = "start";
});

controls.addEventListener("unlock", () => {
  btn.innerHTML = "Stop";
});
let keyboard = [];
addEventListener("keydown", (e) => {
  keyboard[e.key] = true;
});
addEventListener("keyup", (e) => {
  keyboard[e.key] = false;
});
function processKeyboard(delta) {
  let speed = 5;
  let actualSpeed = speed * delta;
  if (keyboard["w"]) {
    controls.moveForward(actualSpeed);
  }
  if (keyboard["s"]) {
    controls.moveForward(-actualSpeed);
  }
  if (keyboard["a"]) {
    controls.moveRight(-actualSpeed);
  }
  if (keyboard["d"]) {
    controls.moveRight(actualSpeed);
  }
  if (keyboard["q"]) {
    controls.getObject().position.y += actualSpeed;
  }
  if (keyboard["f"]) {
    cam.rotation.x = Math.PI / 2;
    cam.position.z = -2;
    cam.position.y = 0.5;
    cam.position.x = 3;
  }
  if (keyboard["g"]) {
    cam.rotation.x = -2 * Math.PI;
    cam.position.z = 7;
    cam.position.y = 1;
    cam.position.x = -1;
  }
}
// animate
function animate() {
  //   controls.update(clock.getDelta());
  let delta = clock.getDelta();
  processKeyboard(delta);
  requestAnimationFrame(animate);
  //   controls.update();
  renderer.render(scene, cam);
}
// animation
animate();
// renderer.setClearColorHex(0xffffff, 1);
// renderer.background(0xffffff);
renderer.render(scene, cam);

// video game di laptop

// let video = document.getElementById('video1')
// video.src = "assets/game/game.mp4"

// let videoTexture = new THREE.VideoTexture(video)

// let cubeGeo = new THREE.BoxGeometry(1,1,1)
// let cubeMat = new THREE.MeshBasicMaterial({map: videoTexture})
// let cube = new THREE.Mesh(cubeGeo, cubeMat);
// scene.add(cube);

// video.play()
