// IMPORT MODULE
import * as THREE from 'https://unpkg.com/three@0.158.0/build/three.module.js'
import { OBJLoader } from 'https://unpkg.com/three@0.136.0/examples/jsm/loaders/OBJLoader.js'
// import * as THREE from './node_modules/three/build/three.module.js'
// import {OBJLoader} from './node_modules/three/examples/jsm/loaders/OBJLoader.js'

// CREATE A SCENE
const scene = new THREE.Scene()

// CREATE A CAMERA
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerHeight / window.innerHeight,
    0.1,
    1000
)
camera.position.z = 5

// CREATE RENDERER
const renderer = new THREE.WebGLRenderer({antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// ADD OWN 3D MODEL
const loader = new OBJLoader()
let model
loader.load(
    './New folder/untitled.obj',
    function(object) {
        model = object
        scene.add(model)
    },
    function(xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
    },
    function(error) {
        console.error('An error happened loading the OBJ: ', error)
    }
)

// ADD A LIGHT
const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(5,5,5).normalize()
scene.add(light)

// ANIMATE
function animate() {
    requestAnimationFrame(animate)
    if(model) {
        model.rotation.y += 0.01
        model.rotation.x += 0.01
    }
    renderer.render(scene, camera)
}
animate()
