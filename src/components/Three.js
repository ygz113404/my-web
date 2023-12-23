import React, { useRef, useEffect, useState } from 'react';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three';
import Model from '../assests/react_logo.glb'
function ThreeScene() {
  const sceneRef = useRef();
  const model = useRef(); 

  useEffect(() => {
 
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(1, 1, 1);
    const camera = new THREE.PerspectiveCamera(75, 500 / 500, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(500, 500);
    sceneRef.current.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load(Model, (gltf) => {
      model.current = gltf.scene; // model.current'i güncelleyin
      scene.add(model.current); // model.current'i kullanın
    });

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      if (model.current) { // model yüklenmişse
        model.current.rotation.x += 0.01;
        model.current.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();
  });

  return <div ref={sceneRef} />;
}

export default ThreeScene;