import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Componente para cargar el modelo de la Tierra
const Earth = () => {
  const { scene } = useGLTF("./planet/scene.gltf"); // Ruta del archivo GLTF

  // Asegúrate de que el objeto tiene habilitado el casting de sombras si es necesario
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />;
};

// Componente principal que usa el Canvas de react-three/fiber
const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      {/* Luz ambiental */}
      <ambientLight intensity={0.5} />{" "}
      {/* Luz suave que ilumina toda la escena */}
      {/* Luz direccional */}
      <directionalLight intensity={1.5} position={[10, 10, 5]} castShadow />
      {/* Habilitar el control de órbita para navegar alrededor de la escena */}
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      {/* Suspense para cargar el modelo */}
      <Suspense fallback={<CanvasLoader />}>
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
