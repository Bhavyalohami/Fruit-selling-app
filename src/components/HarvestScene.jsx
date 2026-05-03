import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HarvestScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0.35, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const fruitMaterial = new THREE.MeshStandardMaterial({
      color: 0xffb22e,
      roughness: 0.58,
      metalness: 0.04,
    });
    const fruit = new THREE.Mesh(new THREE.SphereGeometry(1.12, 48, 48), fruitMaterial);
    fruit.scale.set(0.82, 1.34, 0.82);
    group.add(fruit);

    const diamondMaterial = new THREE.MeshStandardMaterial({
      color: 0x7e5a23,
      roughness: 0.62,
      metalness: 0,
    });
    for (let y = -1.15; y <= 1.15; y += 0.34) {
      const radius = 0.74 * Math.sqrt(Math.max(0.08, 1 - (y / 1.36) ** 2));
      const count = Math.max(6, Math.floor(radius * 16));
      for (let i = 0; i < count; i += 1) {
        const angle = (i / count) * Math.PI * 2 + y * 1.7;
        const diamond = new THREE.Mesh(new THREE.OctahedronGeometry(0.055, 0), diamondMaterial);
        diamond.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
        diamond.rotation.set(0.8, angle, 0.6);
        diamond.scale.set(1, 0.6, 1);
        group.add(diamond);
      }
    }

    const leafMaterial = new THREE.MeshStandardMaterial({
      color: 0x2f8f53,
      roughness: 0.45,
      side: THREE.DoubleSide,
    });
    for (let i = 0; i < 14; i += 1) {
      const angle = (i / 14) * Math.PI * 2;
      const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.16, 1.05, 4), leafMaterial);
      leaf.position.set(Math.cos(angle) * 0.32, 1.58, Math.sin(angle) * 0.32);
      leaf.rotation.set(0.92, angle, 0.15 + (i % 3) * 0.18);
      leaf.scale.set(0.75 + (i % 2) * 0.25, 1, 0.75);
      group.add(leaf);
    }

    const orbitMaterial = new THREE.MeshStandardMaterial({
      color: 0xf15f3d,
      emissive: 0x4a1006,
      roughness: 0.5,
    });
    const orbiters = [];
    for (let i = 0; i < 5; i += 1) {
      const orbiter = new THREE.Mesh(new THREE.SphereGeometry(0.16, 24, 24), orbitMaterial);
      scene.add(orbiter);
      orbiters.push(orbiter);
    }

    scene.add(new THREE.HemisphereLight(0xfffff2, 0x6abf9b, 2.5));
    const key = new THREE.DirectionalLight(0xffffff, 3.2);
    key.position.set(3.5, 4, 4);
    scene.add(key);
    const rim = new THREE.PointLight(0x70d6ff, 1.6, 12);
    rim.position.set(-3, 1.5, 3);
    scene.add(rim);

    const resize = () => {
      const width = mount.clientWidth || 640;
      const height = mount.clientHeight || 560;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    let frameId;
    const clock = new THREE.Clock();
    const animate = () => {
      const time = clock.getElapsedTime();
      group.rotation.y = time * 0.34;
      group.rotation.x = Math.sin(time * 0.55) * 0.08;
      group.position.y = Math.sin(time * 1.1) * 0.1;

      orbiters.forEach((orbiter, index) => {
        const angle = time * (0.55 + index * 0.05) + index * 1.25;
        orbiter.position.set(Math.cos(angle) * 2.35, Math.sin(angle * 1.25) * 0.72, Math.sin(angle) * 1.45);
      });

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(frameId);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) object.material.dispose();
      });
    };
  }, []);

  return <div ref={mountRef} className="harvest-scene" aria-label="Animated 3D pineapple harvest scene" />;
};

export default HarvestScene;
