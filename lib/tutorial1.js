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
document.body.appendChild(renderer.domElement);
cam.position.z = 5;

// var box = new THREE.SphereGeometry(2, 32, 32); //Box dengan ukuran 1, 1, 1
// var boxMat = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// var boxMesh = new THREE.Mesh(box, boxMat);

// scene.add(boxMesh);
const geo_saya = new THREE.BufferGeometry();


window.addEventListener("resize", function () {
  renderer.setSize(this.window.innerWidth, this.window.innerHeight);
  cam.aspect = this.window.innerWidth / this.window.innerHeight;
});
function draw() {
  requestAnimationFrame(draw);
  boxMesh.rotation.y += 0.01;
  renderer.render(scene, cam);
}
draw();
renderer.render(scene, cam);
