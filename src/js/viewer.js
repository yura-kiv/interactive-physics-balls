import * as THREE from "three";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import backgroundHDR from "/industrial_sunset_puresky_2k.hdr?url";

export default class Viewer {
  constructor(domElement) {
    this.scene = this.getScene();
    this.camera = this.getCamera();
    this.renderer = this.getRenderer(domElement);
    this.controls = this.getControls();
    this.getLight(this.scene);
    this.getResize();
    this.getBackground(this.scene);
    this.animate(this.scene, this.camera, this.renderer, this.controls);
  }

  getScene() {
    const scene = new THREE.Scene();
    return scene;
  }

  getBackground(scene) {
    new RGBELoader().loadAsync(backgroundHDR).then((background) => {
      background.mapping = THREE.EquirectangularReflectionMapping;
      scene.background = background;
      scene.environment = background;
    });
  }

  getCamera() {
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 25);
    camera.position.set(0, 0, -10);
    this.addToResizeQueue("resize_camera", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    });
    return camera;
  }

  getRenderer(domElement) {
    if (this.renderer) {
      this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      this.renderer.dispose();
    }
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      pixelRatio: window.devicePixelRatio,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    domElement.appendChild(renderer.domElement);
    this.addToResizeQueue("resize_renderer", () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
    return renderer;
  }

  getControls() {
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;
    controls.screenSpacePanning = false;
    return controls;
  }

  getLight(scene) {}

  animationQueue = {};
  resizeQueue = {};

  addToAnimationQueue(key, action) {
    this.animationQueue[key] = action;
  }

  deleteFromAnimationQueue(key) {
    delete this.animationQueue[key];
  }

  getResize() {
    window.addEventListener("resize", () => {
      for (var key in this.resizeQueue) this.resizeQueue[key]();
    });
  }

  addToResizeQueue(key, action) {
    this.resizeQueue[key] = action;
  }

  deleteFromResizeQueue(key) {
    delete this.resizeQueue[key];
  }

  animate(scene, camera, renderer, controls) {
    renderer.render(scene, camera);
    controls.update();
    for (const key in this.animationQueue) this.animationQueue[key]();
    requestAnimationFrame(() => this.animate(scene, camera, renderer, controls));
  }
}
