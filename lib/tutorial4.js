// Preparing the world
var scene = new THREE.Scene();
scene.background = new THREE.Color(0xa0a0a0);
var cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 100);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
document.body.appendChild(renderer.domElement);

cam.position.z = 10;
cam.position.y = 0;
// cam.position.x = 10;

// end of preparing the world

// texture
const ceramic = new THREE.TextureLoader().load("./texture/ceramic.jpg");
// ceramic.anisotropy = maxAnisotropy;
ceramic.wrapS = THREE.RepeatWrapping;
ceramic.wrapT = THREE.RepeatWrapping;
ceramic.repeat.set(8, 8);
ceramic.encoding = THREE.sRGBEncoding;
// end texture
// Ligthing

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

const dirLight = new THREE.DirectionalLight(0xffffff);
dirLight.position.set(-3, 10, -10);
dirLight.castShadow = true;
dirLight.shadow.camera.top = 2;
dirLight.shadow.camera.bottom = -2;
dirLight.shadow.camera.left = -2;
dirLight.shadow.camera.right = 2;
dirLight.shadow.camera.near = 0.1;
dirLight.shadow.camera.far = 40;
scene.add(dirLight);
// end lighting

// controls
// let clock = new THREE.Clock();
let controls = new THREE.OrbitControls(cam, renderer.domElement);
// controls.lookSpeed = 0.1;

controls.update();
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
  gltfScene.scene.children[0].position.y = -1 + 0.2;
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

let wcBase = new THREE.BoxGeometry(3, 5.3, 0.5);
let wcMesh = new THREE.Mesh(
  wcBase,
  new THREE.MeshPhongMaterial({
    map: ceramic,
    color: 0xffffff,
    shininess: 10,
    emissiveIntensity: 0.9,
  })
);

wcMesh.position.set(2.5, -1 + 0.25, 6.35);
wcMesh.rotation.x -= Math.PI / 2;
// wcMesh.rotation.y = Math.PI / 2;
scene.add(wcMesh);
// Resize the page
window.addEventListener("resize", function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight);
  cam.aspect = this.window.innerWidth / this.window.innerHeight;
});

// animate

function animate() {
  //   controls.update(clock.getDelta());

  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, cam);
}
// animation
animate();
// renderer.setClearColorHex(0xffffff, 1);
// renderer.background(0xffffff);
renderer.render(scene, cam);
