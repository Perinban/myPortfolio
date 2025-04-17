import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Earth = () => {
    const { scene } = useGLTF('./planet/scene.gltf');

    useEffect(() => () => {
        scene.traverse((child) => {
            if (child.isMesh) {
                child.geometry.dispose();
                if (Array.isArray(child.material)) {
                    child.material.forEach((m) => m.dispose());
                } else {
                    child.material.dispose();
                }
            }
        });
    }, [scene]);

    return <primitive object={scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const EarthCanvas = () => (
    <Canvas
        shadows
        frameloop="demand"
        dpr={[1, 2]}
        camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
            <Earth />
            <Preload all />
        </Suspense>
    </Canvas>
);

export default EarthCanvas;