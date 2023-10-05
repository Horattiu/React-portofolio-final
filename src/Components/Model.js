import React, { useRef } from "react";
import { useLoader, extend, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import "./coverimg.css";

extend({ OrbitControls });

const Model = ({ modelPath }) => {
  const gltf = useLoader(GLTFLoader, modelPath);
  const modelRef = useRef();

  const scale = 1;
  const { camera } = useThree();

  // Move the camera further away from the model
  camera.position.set(0, 0, 6.5); // Adjust the values base

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Rotates the model continuously
    }
  });

  return (
    <>
      <primitive
        object={gltf.scene}
        ref={modelRef}
        scale={[scale, scale, scale]}
        position={[0, -1, 0]} // Modelul este acum în mijlocul scenei
      />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <ambientLight intensity={2} />
      <OrbitControls
        enableZoom={true}
        enableRotate={true}
        enablePan={false}
        target={[0, 0, 0]} // Centrul de rotație al camerei este în mijlocul scenei
      />
    </>
  );
};

export default Model;
