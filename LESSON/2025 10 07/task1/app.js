import * as THREE from './node_modules/three/build/three.module.js'
import {OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js'
import {GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'

let container = document.querySelector('.container')

try {
    const controls = new OrbitControls(camera, renderer.domElement)
    container.innerHTML = 'LOREM IPSUM BUT NOT DOLOR THIS TIME'
} catch (error) {
    container.innerHTML = error
}
