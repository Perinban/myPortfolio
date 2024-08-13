import React, { Suspense, useMemo, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture, MeshDistortMaterial } from "@react-three/drei";
import CanvasLoader from '../Loader';

const GlobalCylinderGeometry = React.memo((props) => (
    <cylinderGeometry args={[1, 1, 0.2, 64]} {...props} />
));

const GlobalMeshMatcapMaterial = React.memo((props) => (
    <meshMatcapMaterial color="#ffffff" metalness={0.8} roughness={0.4} {...props} />
));

const Coin = React.memo(({ imgUrl }) => {
    const decal = useTexture(imgUrl);

    const memoizedDecal = useMemo(() => {
        return (
            decal && (
                <Decal
                    position={[0, 0.2, 0]}
                    rotation={[Math.PI / 2, Math.PI, Math.PI]}
                    scale={[1.5, 1.5, 1]}
                    map={decal}
                />
            )
        );
    }, [decal]);

    useEffect(() => {
        return () => {
            if (decal) decal.dispose();
        };
    }, [decal]);

    return (
        <Float
            speed={2}
            rotationIntensity={2}
            floatIntensity={4}
        >
            <ambientLight
                intensity={0.6}
                color="#ffffff"
            />
            <directionalLight
                position={[-2, 2, 5]}
                intensity={1.2}
            />
            <directionalLight
                position={[2, -2, -5]}
                intensity={0.5}
                color="#ff8c00"
            />
            <mesh
                scale={2.5}
                rotation={[Math.PI / 2, 0, 0]}
            >
                <GlobalCylinderGeometry />
                <MeshDistortMaterial
                    color="#ffaa00"
                    distort={0.2}
                    speed={2}
                    roughness={0.5}
                    metalness={0.9}
                />
                {memoizedDecal}
            </mesh>
        </Float>
    );
});

const CoinCanvas = React.memo(({ icon }) => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Canvas
                frameloop="demand"
                gl={{ preserveDrawingBuffer: false }}
                className="w-full h-full">
                <Suspense
                    fallback={<CanvasLoader />}
                >
                    <OrbitControls
                        enableZoom={false}
                        enableRotate={true}
                    />
                    <Coin
                        imgUrl={icon}
                    />
                </Suspense>
                <Preload
                    textures
                />
            </Canvas>
        </div>
    );
});

export default CoinCanvas;
