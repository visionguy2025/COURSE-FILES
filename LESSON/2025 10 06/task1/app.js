import * as THREE from 'https://unpkg.com/three@0.158.0/build/three.module.js'
// import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js'

// CREATE A SCENE
const scene = new THREE.Scene()

// CREATE A CAMERA
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerHeight/window.innerHeight,
    0.1,
    1000
)
camera.position.z = 5

// CREATE RENDERER
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// CREATE A CUBE
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshStandardMaterial({color: 0x0077ff})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

// ADD OWN 3D MODEL
// const loader = new OBJLoader()
// loader.load(
//     'path/to/your/model.obj',
//     function(object) {
//         scene.add(object)
//     },
//     function(xhr) {
//         console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
//     },
//     function(error) {
//         console.error('An error happened loading the OBJ: ', error)
//     }
// )
// let model
// loader.load(
//     'path/to/your/model.obj',
//     function(object) {
//         model = object
//         scene.add(model)
//     }
// )

// ADD A LIGHT
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(5,5,5).normalize()
scene.add(light)

// ANIMATE
function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
}
animate()
// function animate() {
//     requestAnimationFrame(animate)
//     if(model) {
//         model.rotation.y += 0.01
//         model.rotation.x += 0.01
//     }
//     renderer.render(scene, camera)
// }
// animate()
