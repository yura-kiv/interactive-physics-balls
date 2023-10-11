import * as THREE from "three";
import * as RAPIER from "@dimforge/rapier3d";

export class RandSpeheres {
  constructor(scene) {
    this.spheresCount = 10;
    this.centersOfSpheres = this.getRandCentersOfSpheres(this.spheresCount);
    this.radiusesOfSpheres = this.getRandRadiusesOfSpheres(this.spheresCount);
    this.spheresArr = this.getRandSpheres(this.centersOfSpheres, this.radiusesOfSpheres, scene);
  }

  getRandCentersOfSpheres(count) {
    return new Array(count)
      .fill(0)
      .map(
        () => new THREE.Vector3(Math.random() * 6 - 3, Math.random() * 6 - 3, Math.random() * 6 - 3)
      );
  }

  getRandRadiusesOfSpheres(count) {
    return new Array(count).fill(0).map(() => Math.random() + 0.5);
  }

  getRandSpheres = (centers, radiuses, scene) => {
    const spheresArr = centers.map((center, idx) => {
      const geometry = new THREE.SphereGeometry(radiuses[idx], 64, 32);
      const material = new THREE.MeshStandardMaterial({
        roughness: 0,
        metalness: 1,
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.clone;
      sphere.position.copy(center);
      scene.add(sphere);
      return sphere;
    });
    return spheresArr;
  };
}

export class PhysicWorld {
  constructor({ spheres, viewer }) {
    this.world = new RAPIER.World(new THREE.Vector3());
    this.worldBodies = [];
    this.worldBodies.push(...this.addSpheresToWorld(spheres, this.world));
    this.animateWorld(viewer, this.worldBodies, this.world);
  }

  addSpheresToWorld(spheres, world) {
    const bodiesOfSpheres = spheres.centersOfSpheres.map((center, idx) => {
      const bodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(center.x, center.y, center.z);
      const sphereBody = world.createRigidBody(bodyDesc);
      sphereBody.mass = (4 / 3) * Math.PI * spheres.radiusesOfSpheres[idx];
      const collaiderDesc = RAPIER.ColliderDesc.ball(spheres.radiusesOfSpheres[idx]);
      world.createCollider(collaiderDesc, sphereBody);
      return { body: sphereBody, mesh: spheres.spheresArr[idx] };
    });
    return bodiesOfSpheres;
  }

  animateWorld(viewer, bodiesArr, world) {
    let forceWay = -0.3;
    window.addEventListener("mousedown", () => (forceWay = 0.15));
    window.addEventListener("mouseup", () => (forceWay = -0.3));
    window.addEventListener("touchstart", () => (forceWay = 0.15));
    window.addEventListener("touchend", () => (forceWay = -0.3));

    viewer.addToAnimationQueue("animate-world", () => {
      world.step();
      bodiesArr.forEach(({ body, mesh }) => {
        mesh.position.copy(body.translation());
        body.applyImpulse(mesh.position.clone().multiplyScalar(forceWay));
      });
    });
  }
}
