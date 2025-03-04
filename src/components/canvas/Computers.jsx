import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// Función para validar las posiciones de la geometría
const validPositions = (geometry) => {
  const positions = geometry.attributes.position.array;
  return positions.every((val) => !isNaN(val));
};

// Componente que carga y muestra el modelo 3D del ordenador
const Computers = ({ isMobile }) => {
  const computer = useGLTF("./laptop/scene.gltf");

  // Validar las posiciones de los vértices
  computer.scene.traverse((child) => {
    if (child.isMesh && !validPositions(child.geometry)) {
      console.error("Invalid geometry found:", child);
      // Si la geometría es inválida, se oculta el objeto
      child.visible = false;
    } else {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={1.15} groundColor="black" />
      <spotLight
        position={[50, 80, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={20} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 1.3}
        position={isMobile ? [0, -1.5, 0] : [0, -2, -0.5]}
        rotation={[0, 2.9, 0]}
      />
    </mesh>
  );
};

// Componente principal que usa el Canvas de react-three/fiber
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Agregar un listener para detectar el tamaño de la pantalla
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    // Definir una función callback para manejar los cambios en la media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Añadir la función callback como listener para los cambios en la media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Eliminar el listener cuando el componente se desmonte
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
