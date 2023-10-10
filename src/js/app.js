import Viewer from "./viewer";
import { PhysicWorld, RandSpeheres } from "./sphereObjects";

export default class App {
  constructor() {
    const body = document.body;
    this.viewer = new Viewer(body);
    this.spheres = new RandSpeheres(this.viewer.scene);
    this.physicWorld = new PhysicWorld({ spheres: this.spheres, viewer: this.viewer });
  }
}
