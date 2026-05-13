import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ scale, position }) => {
  const computer = useGLTF("./laptop/scene.gltf");

  computer.scene.traverse((child) => {
    if (child.isMesh) {
      const positions = child.geometry.attributes.position?.array;
      if (positions && positions.some((v) => isNaN(v))) {
        child.visible = false;
      } else {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    }
  });

  return (
    <mesh>
      <hemisphereLight intensity={1.2} groundColor="black" />
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
        scale={scale}
        position={position}
        rotation={[0, 2.9, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 450) setScreenSize("xs");
      else if (w < 640) setScreenSize("sm");
      else if (w < 1024) setScreenSize("md");
      else setScreenSize("desktop");
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const config = {
    xs:      { scale: 0.55, position: [0, -1.5,  0]   },
    sm:      { scale: 1.2,  position: [0, -2,   -0.5] },
    md:      { scale: 1.8,  position: [0, -2.2, -0.5] },
    desktop: { scale: 2.5,  position: [0, -2.5, -0.5] },
  }[screenSize];

  return (
    <Canvas
      frameloop="always"
      shadows
      dpr={[1, 2]}
      camera={{ position: [13, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.6}
        />
        <Computers scale={config.scale} position={config.position} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
