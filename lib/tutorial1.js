/*
    Scene
        - 3D world
    Camera
        - camera yang digunakan untuk melihat ke dalam 3D
    Renderer
        - yang menampilkan hasil dari camera ke layar
*/

var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 100);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;
document.body.appendChild(renderer.domElement);

cam.position.z = 5;

// var box = new THREE.SphereGeometry(1, 32, 32); //Box dengan ukuran 1, 1, 1
// var boxMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// var boxMesh = new THREE.Mesh(box, boxMat);
var box = new THREE.BoxGeometry(1, 1, 1);
var botxMath2 = new THREE.MeshPhongMaterial({
  color: 0xff0000,
});
var cube2 = new THREE.Mesh(box, botxMath2);
cube2.receiveShadow = true;
cube2.castShadow = true;
scene.add(cube2);

var plane = new THREE.PlaneGeometry(1000, 1000, 500, 500);
var planeMaterial = new THREE.MeshLambertMaterial({
  color: 0xaaffaa,
});
var planeMesh = new THREE.Mesh(plane, planeMaterial);
// planeMesh.receiveShadow = true;
planeMesh.position.set(0, -1, 0);
planeMesh.rotation.x = -Math.PI / 2;
scene.add(planeMesh);
// scene.add(boxMesh);
const geo_saya = new THREE.BoxGeometry(1, 1, 1);
const grass_texture = new THREE.TextureLoader().load("./texture/z.jpg");
const alpha_texture = new THREE.TextureLoader().load("./texture/a.jpg");
const brick_texture = new THREE.TextureLoader().load("./texture/b.png");
// let vertices = new Float32Array([
//   -1.0,
//   -1.0,
//   1.0, //0
//   1.0,
//   1.0,
//   1.0, //1
//   -1.0,
//   1.0,
//   1.0, //2
//   1.0,
//   -1.0,
//   1.0, //3
//   -1.0,
//   -1.0,
//   -1.0, //4
//   1.0,
//   1.0,
//   -1.0, //5
//   -1.0,
//   1.0,
//   -1.0, //6
//   1.0,
//   -1.0,
//   -1.0, //7
// ]);
// let colors = new Float32Array([
//   1.0,
//   0.0,
//   0.0, // vertex 0
//   1.0,
//   0.0,
//   0.0, // vertex 1
//   1.0,
//   1.0,
//   0.0, // vertex 2
//   1.0,
//   1.0,
//   0.0, // vertex 3
//   0.0,
//   1.0,
//   0.0, // vertex 4
//   0.0,
//   1.0,
//   0.0, // vertex 5
//   0.0,
//   0.0,
//   1.0, // vertex 6
//   0.0,
//   0.0,
//   1.0, // vertex 7
// ]);
// geo_saya.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
// geo_saya.setAttribute("color", new THREE.BufferAttribute(colors, 3));
// geo_saya.setIndex([
//   0, 3, 1, 1, 2, 0,
//   //
//   4, 6, 5, 5, 7, 4,
//   //
//   4, 0, 2, 2, 6, 4,
//   //
//   5, 1, 3, 3, 7, 5,
//   //
//   1, 5, 6, 6, 2, 1,
//   //
//   0, 4, 7, 7, 3, 0,
// ]);
const mat_saya = new THREE.MeshBasicMaterial({
  map: grass_texture,
});
let mesh_saya = new THREE.Mesh(geo_saya, mat_saya);
// scene.add(mesh_saya);
//box2
let light1 = new THREE.PointLight(0xffffff, 1);
light1.position.set(0, 3, 2);
scene.add(light1);
const mat_saya2 = new THREE.MeshLambertMaterial({
  map: grass_texture,
  emissive: 0x00ff00,
  emissiveIntensity: 0.9,
  emissiveMap: alpha_texture,
  transparent: true,
  side: THREE.DoubleSide,
});
let mesh_saya2 = new THREE.Mesh(geo_saya, mat_saya2);
mesh_saya2.position.set(2, 0, 0);
// scene.add(mesh_saya2);

//box 3

const mat_saya3 = new THREE.MeshPhongMaterial({
  map: grass_texture,
  shininess: 100,
  bumpMap: brick_texture,
  bumpScale: 0.01,
});
let mesh_saya3 = new THREE.Mesh(geo_saya, mat_saya3);
mesh_saya3.position.set(-2, 0, 0);
// scene.add(mesh_saya3);

window.addEventListener("resize", function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight);
  cam.aspect = this.window.innerWidth / this.window.innerHeight;
});

function draw() {
  requestAnimationFrame(draw);
  geo_saya.rotation.y += 0.01;
  renderer.render(scene, cam);
}
var ambient = new THREE.AmbientLight(0xffffff);
// scene.add(ambient);

var spotlight = new THREE.SpotLight(0x0000ff, 0.5, 2, Math.PI / 10);
spotlight.position.set(2, 4, 0);
spotlight.castShadow = true;
// scene.add(spotlight);
// scene.add(new THREE.SpotLightHelper(spotlight));

gsap.to(cube2.position, { x: 5, duration: 5 });
function update() {
  requestAnimationFrame(update);
  // mesh_saya.rotation.y += 0.01;
  // mesh_saya.rotation.x += 0.01;
  // mesh_saya2.rotation.y += 0.01;
  // mesh_saya2.rotation.x += 0.01;
  // mesh_saya3.rotation.y += 0.01;
  // mesh_saya3.rotation.x += 0.01;
  cube2.rotation.x += 0.01;
  cube2.rotation.y += 0.01;
  renderer.render(scene, cam);
}
update();
// draw();
renderer.render(scene, cam);
