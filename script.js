particlesJS("particles-js", {

particles: {

number: {

value: 80

},

size: {

value: 3

},

move: {

speed: 2

},

line_linked: {

enable: true,
distance: 150,
color: "#00d9ff",
opacity: 0.4

}

}

});
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth/window.innerHeight,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({alpha:true});
renderer.setSize(window.innerWidth,500);

document.getElementById("drone3D").appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(2,0.4,2);
const material = new THREE.MeshBasicMaterial({color:0x00d9ff,wireframe:true});
const drone = new THREE.Mesh(geometry,material);

scene.add(drone);

camera.position.z = 5;

function animate(){

requestAnimationFrame(animate);

drone.rotation.x += 0.01;
drone.rotation.y += 0.02;

renderer.render(scene,camera);

}

animate();