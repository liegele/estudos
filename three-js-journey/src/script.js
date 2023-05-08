import * as THREE from 'three';
import gsap from 'gsap';

//Scene
const scene = new THREE.Scene();

//Axes helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper);

//Getting canvas element in HTML
const canvas = document.querySelector('canvas.webgl');

//Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);

//Adding object to the scene
scene.add(mesh);

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
  width: 800,
  height: 600,
};

//Camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  1,
  100
);

/* const aspectRatio = sizes.width / sizes.height;
const camera = new THREE.OrthographicCamera(
  -1 * aspectRatio,
  1 * aspectRatio,
  1,
  -1,
  0.1,
  100
); */
camera.position.z = 3;
camera.lookAt(mesh.position);
scene.add(camera);

//Cursor

const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener('mousemove', (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = -(event.clientY / sizes.height - 0.5);
  console.log(cursor.x, cursor.y);
});

//Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

let clock = new THREE.Clock();

//Animate

// gsap.to(mesh.position, { duration: 1, delay: 1, x: 2 });

const tick = () => {
  //Time
  const elapseTime = clock.getElapsedTime();

  /* //Update object rotation
  mesh.position.x = Math.cos(elapseTime);
  mesh.position.y = Math.sin(elapseTime); */
  // camera.lookAt(mesh.position);

  //Update camera
  camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
  camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
  camera.position.y = cursor.y * 3;
  // camera.position.x = cursor.x * 5;
  // camera.position.y = cursor.y * 5;
  camera.lookAt(mesh.position);

  //Render
  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
