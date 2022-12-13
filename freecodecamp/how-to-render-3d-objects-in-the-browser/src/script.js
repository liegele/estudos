import './style.css';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

//Creating a Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x333333);

//Canvas
const canvas = document.querySelector('canvas.webgl');

//Sizes of screen
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//Add a cube to the scene (Geometry + Material = Mesh)
const geometry = new THREE.BoxGeometry(3, 1, 3); // width, height, depth
const material = new THREE.MeshLambertMaterial({ color: 0xfb8e00 });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, 0);
scene.add(mesh);

//Setup the lights

//Ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
scene.add(ambientLight);

//Directional light
const dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
dirLight.position.set(10, 20, 0); // x, y, z
scene.add(dirLight);

//Setup camera

//Perspective camera
const aspect = sizes.width / sizes.height;
const camera = new THREE.PerspectiveCamera(45, aspect, 1, 100);

/* //Orthographic camera
const width = 10;
const height = width * (window.innerHeight / window.innerWidth);
const camera = new THREE.OrthographicCamera(
  width / -2, // left
  width / 2, // right
  height / 2, // top
  height / -2 // bottom
); */
camera.position.set(4, 4, 4);
camera.lookAt(0, 0, 0);

//Renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//Add it to html
document.body.appendChild(renderer.domElement);

//Updating renderer after window resized.
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
