var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 100);

cam.position.z = 5;
var renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

var Grid = new THREE.GridHelper(100, 100, 0x0a0a0a, 0x000000);
Grid.position.set(0, -0.5, 0);
scene.add(Grid);

let kendali = new Object();
kendali.x = 1;
kendali.y = 1;
kendali.z = 2;

let gui = new dat.GUI();
gui.add(kendali, "x", -4, 4, 0.1);
gui.add(kendali, "y", -4, 4, 0.1);
gui.add(kendali, "z", -4, 4, 0.1);

let rayCast = new THREE.Raycaster();
let mouse = {};
let selected;
let arrow = new THREE.ArrowHelper(
  rayCast.ray.direction,
  cam.position,
  10,
  0xff0000
);

scene.add(arrow);
addEventListener("mousedown", (e) => {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (e.clientY / window.innerHeight) * -2 + 1;
  //   console.log(e);

  rayCast.setFromCamera(mouse, cam);
  let items = rayCast.intersectObjects(scene.children);
  arrow.setDirection(rayCast.ray.direction);
  items.forEach((item) => {
    if (item.object.name != "") {
      console.log(item.object.name);
      selected = item.object;
    }
  });
});
var pLight = new THREE.PointLight(0xffffff, 1);
pLight.position.set(1, 1, 2);
scene.add(pLight);
scene.add(new THREE.PointLightHelper(pLight, 0.1, 0xff0000));

let cGeo = new THREE.BoxGeometry(1, 1, 1);
let cMat = new THREE.MeshLambertMaterial({ color: 0xff0000 });
let cMesh = new THREE.Mesh(cGeo, cMat);
cMesh.name = "labib";
cMesh.position.set(2, 0, 0);
scene.add(cMesh);

// let loader = new THREE.GLTFLoader().load("texture/bed.gltf", (result) => {
//   // result.position.set(-2, 0, 0);
//   scene.add(result.scene.children[0]);
// });
let gltfLoader = new THREE.GLTFLoader();
let gltfLoader1 = new THREE.GLTFLoader();
let gltfLoader2 = new THREE.GLTFLoader();
let gltfLoader3 = new THREE.GLTFLoader();
let gltfLoader4 = new THREE.GLTFLoader();
let gltfLoader5 = new THREE.GLTFLoader();
let gltfLoader6 = new THREE.GLTFLoader();
let gltfLoader7 = new THREE.GLTFLoader();
let gltfLoader8 = new THREE.GLTFLoader();
gltfLoader.load("assets/bed/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI / 2;
  gltfScene.scene.children[0].position.y = 0;
  gltfScene.scene.children[0].scale.set(0.05, 0.05, 0.05);
  scene.add(gltfScene.scene.children[0]);
});
gltfLoader1.load("assets/lockers/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI / 2;
  gltfScene.scene.children[0].position.y = 0;
  gltfScene.scene.children[0].position.x = 3;
  gltfScene.scene.children[0].scale.set(0.5, 0.5, 0.5);
  scene.add(gltfScene.scene.children[0]);
});

gltfLoader2.load("assets/chair/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI / 2;
  gltfScene.scene.children[0].position.y = 0;
  gltfScene.scene.children[0].position.x = 5;
  gltfScene.scene.children[0].scale.set(0.5, 0.5, 0.5);
  scene.add(gltfScene.scene.children[0]);
});

gltfLoader3.load("assets/table/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI / 2;
  gltfScene.scene.children[0].position.y = 0;
  gltfScene.scene.children[0].position.x = 7;
  gltfScene.scene.children[0].scale.set(0.02, 0.02, 0.02);
  scene.add(gltfScene.scene.children[0]);
});


gltfLoader4.load("assets/monitors/scene.gltf", (gltfScene) => {
  gltfScene.scene.children[0].rotation.z = Math.PI / 2;
  gltfScene.scene.children[0].position.y = 0;
  gltfScene.scene.children[0].position.x = 9;
  gltfScene.scene.children[0].scale.set(0.5, 0.5, 0.5);
  scene.add(gltfScene.scene.children[0]);
});
let cGeo2 = new THREE.BoxGeometry(1, 1, 1);
let cMat2 = new THREE.MeshLambertMaterial({ color: 0xff0000 });
let cMesh2 = new THREE.Mesh(cGeo2, cMat2);
cMesh2.name = "sarah";
cMesh2.position.set(-2, 0, 0);
scene.add(cMesh2);

let planeGo = new THREE.PlaneGeometry(100, 100);
let planeMesh = new THREE.Mesh(
  planeGo,
  new THREE.MeshBasicMaterial({ color: 0xffffff })
);
planeMesh.position.set(0, -1, 0);
planeMesh.rotation.x -= Math.PI / 2;
// planeMesh.rotation.y = 0.5;
scene.add(planeMesh);

let clock = new THREE.Clock();
// let controls = new THREE.OrbitControls(cam, renderer.domElement);
let controls = new THREE.FirstPersonControls(cam, renderer.domElement);

controls.lookSpeed = 0.1;

window.addEventListener("resize", function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight);
  cam.aspect = this.window.innerWidth / this.window.innerHeight;
});
// document.body.onkeydown = function (evt) {
//   console.log(evt);
//   if (evt.key == "a") {
//     cam.position.x += 0.03;
//   } else if (evt.key == "d") {
//     cam.position.x -= 0.03;
//   }
//   if (evt.key == "w") {
//     cam.position.y += 0.03;
//   } else if (evt.key == "s") {
//     cam.position.y -= 0.03;
//   }
// };
let keyboard = [];

document.body.onkeydown = function (evt) {
  keyboard[evt.key] = true;
};
document.body.onkeyup = function (evt) {
  keyboard[evt.key] = false;
};

function process_keyboard() {
  if (keyboard["a"]) {
    cam.position.x -= 0.03;
  } else if (keyboard["d"]) {
    cam.position.x += 0.03;
  }
  if (keyboard["s"]) {
    cam.position.z += 0.03;
  } else if (keyboard["w"]) {
    cam.position.z -= 0.03;
  }
}
// let t1 = gsap.timeline({ paused: true });
// t1.to(cMesh.position, { x: 5, duration: 1 });
// t1.to(cMesh.position, { z: 5, duration: 1 });
// t1.to(cMesh.position, { x: 0, duration: 1 });
// t1.to(cMesh.position, { z: 0, duration: 1 });
// t1.to(cMesh.scale, { x: 2, y: 2 });
// addEventListener("mousedown", (e) => {
//   t1.play();
// });
// gsap.to(cMesh.position, { x: 5, duration: 5 });
// gsap.to(cMesh.rotation, { x: 5, duration: 5 });

function update() {
  process_keyboard();
  controls.update(clock.getDelta());
  //   if (selected != undefined) {
  //     selected.rotation.x += 0.01;
  //   }
  // if (kursi) {
  //   // kursi.rotation.y -= 0.01;
  //   kursi.position.set(2, -1, 0);
  // }
  pLight.position.set(kendali.x, kendali.y, kendali.z);
  requestAnimationFrame(update);
  renderer.render(scene, cam);
}
update();
renderer.render(scene, cam);
