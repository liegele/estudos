import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'lil-gui';

const imageSource = '/image.png';

//Color parameter
const parameters = {
  color: 0xffffff,
  /* spin: () => {
    gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 });
  }, */
};

//Scene
const scene = new THREE.Scene();

//Debug UI
// const gui = new dat.GUI();

//Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

//Getting canvas element in HTML
const canvas = document.querySelector('canvas.webgl');

//LoadingManager and TextureLoader
const loadingManager = new THREE.LoadingManager();
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('/textures/door/color.jpg');

const doorColorTexture = textureLoader.load('/textures/door/color.jpg');
// const colorTexture = textureLoader.load('/textures/checkerboard-8x8.png');
/* const colorTexture = textureLoader.load('/textures/minecraft.png');
colorTexture.wrapS = THREE.RepeatWrapping;
colorTexture.wrapT = THREE.RepeatWrapping;
 */
// colorTexture.minFilter = THREE.NearestFilter;
// colorTexture.magFilter = THREE.LinearFilter;
/* colorTexture.generateMipmaps = false;
colorTexture.magFilter = THREE.NearestFilter; */

// colorTexture.offset.y = 0.5;
// colorTexture.wrapS = THREE.MirroredRepeatWrapping;
// colorTexture.wrapT = THREE.MirroredRepeatWrapping;

// colorTexture.rotation = Math.PI * 0.25;
// colorTexture.center.x = 0.5;
// colorTexture.center.y = 0.5;

const alphaTexture = textureLoader.load('/textures/door/alpha.jpg');
const heightTexture = textureLoader.load('/textures/door/height.jpg');
const normalTexture = textureLoader.load('/textures/door/normal.jpg');
const ambientOcclusionTexture = textureLoader.load(
  '/textures/door/ambientOcclusion.jpg'
);
const metalnessTexture = textureLoader.load('/textures/door/metalness.jpg');
const roughnessTexture = textureLoader.load('/textures/door/roughness.jpg');
const matcapTexture = textureLoader.load('/textures/matcaps/3.png');
const gradientTexture = textureLoader.load('/textures/gradients/3.jpg');

//Object

const material = new THREE.MeshMatcapMaterial();
// material.map = doorColorTexture;
// material.color = new THREE.Color(0xff0000);
// material.wireframe = true;
// material.transparent = true;
// material.alphaMap = doorColorTexture;
// material.opacity = 0.5;
// material.side = THREE.DoubleSide;
material.flatShading = true;
material.matcap = matcapTexture;

const sphere = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 16), material);
sphere.position.x = -1.5;

const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);

const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 16, 32),
  material
);
torus.position.x = 1.5;

scene.add(sphere, plane, torus);

/* const geometry = new THREE.BoxGeometry(1, 1, 1);
// const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshBasicMaterial({
  map: colorTexture,
  // color: parameters.color,
  wireframe: false,
});
const mesh = new THREE.Mesh(geometry, material);

//Adding object to the scene
scene.add(mesh);
 */
/* //Creating 3 Objects and putting all in a Group.
const group = new THREE.Group();
group.scale.y = 1;
group.rotation.z = 0.25;
scene.add(group);

const cube1 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube1.position.x = -1.5;
group.add(cube1);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube2.position.x = 0;
group.add(cube2);

const cube3 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
cube3.position.x = 1.5;
group.add(cube3); */

//Sizes
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

//Handle resizing screen
window.addEventListener('resize', () => {
  //Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //Upate camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  //Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//Handle fullscreen
window.addEventListener('dblclick', () => {
  const fullscreenElement =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreenElement) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

//Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

// console.log(window.devicePixelRatio);

/* const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  100
); */
// /*
camera.position.z = 4;
// camera.lookAt(torus.position);
scene.add(camera);

//Cursor

/* const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
  console.log(cursor.x, cursor.y);
}); */

//Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

let clock = new THREE.Clock();

//Debug UI elements

/* gui.add(mesh.position, 'x', -3, 3, 0.01);
gui.add(mesh.position, 'y', -3, 3, 0.01);
gui.add(mesh.position, 'z', -3, 3, 0.01);

gui.add(mesh, 'visible');
gui.add(material, 'wireframe');

gui.addColor(parameters, 'color').onChange(() => {
  material.color.set(parameters.color);
});

gui.add(parameters, 'spin');
gui.add(colorTexture.offset, 'x').name('offset x').min(-1).max(1).step(0.01);
gui.add(colorTexture.offset, 'y').name('offset y').min(-1).max(1).step(0.01);
gui.add(colorTexture.repeat, 'x').name('repeat x').min(1).max(10).step(1);
gui.add(colorTexture.repeat, 'y').name('repeat y').min(1).max(10).step(1); */

//Animate

// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });

const tick = () => {
  //Time
  const elapseTime = clock.getElapsedTime();

  //Update object rotation
  /*   mesh.position.x = Math.cos(elapseTime);
  mesh.position.y = Math.sin(elapseTime);
  camera.lookAt(mesh.position); */

  /* //Update camera
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
  camera.position.y = cursor.y * 3; */
  // camera.position.x = cursor.x * 5;
  // camera.position.y = cursor.y * 5;
  // camera.lookAt(mesh.position);

  /* //Redefining Target property
  controls.target.y = -2;
  controls.update(); */

  sphere.rotation.y = 0.1 * elapseTime;
  plane.rotation.y = 0.1 * elapseTime;
  torus.rotation.y = 0.1 * elapseTime;

  sphere.rotation.x = 0.1 * elapseTime;
  plane.rotation.x = 0.1 * elapseTime;
  torus.rotation.x = 0.1 * elapseTime;

  controls.update();

  //Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
