import * as THREE from './node_modules/three/build/three.module.js';

const canvas = document.getElementById('canvas1');

const camera = new THREE.PerspectiveCamera(40, 2, 2.1, 10000);
const renderer = new THREE.WebGLRenderer({canvas: canvas});
const scene = new THREE.Scene();



const geom = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({color: 0xff0000});
const mesh = new THREE.Mesh(geom, material);
mesh.position.z = -10;
mesh.rotation.y = 45;

scene.add(mesh);
requestAnimationFrame(renderScene);


function renderScene() {
    renderer.render(scene, camera);
    requestAnimationFrame(renderScene);
    if(canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight) {
        renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
    }
}