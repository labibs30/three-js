var scene = new THREE.Scene();
var cam = new THREE.PerspectiveCamera(45, innerWidth / innerHeight, 1, 100);

cam.position.z = 5;
var renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);
document.body.appendChild(renderer.domElement);

var pLight = new THREE.PointLight(0xffffff, 1);
pLight.position.set(1, 1, 2);
scene.add(pLight);
scene.add(new THREE.PointLightHelper(pLight, 0.1, 0xff0000));

let loader = new THREE.GLTFLoader().load("texture/bed1.gltf", (result) => {
  scene.add(result.scene.children[0]);
});

window.addEventListener("resize", function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight);
  cam.aspect = this.window.innerWidth / this.window.innerHeight;
});

function update() {
  requestAnimationFrame(update);
  renderer.render(scene, cam);
}
update();
renderer.render(scene, cam);
