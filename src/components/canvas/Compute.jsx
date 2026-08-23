import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { SceneLights, sceneTheme } from './sceneTheme';

const { violet, blue, cyan } = sceneTheme.colors;

const ComputeCore = () => {
    const group = useRef();
    const nodes = useMemo(() => [
        [2.0, 0.25, 0.1], [-1.9, -0.45, 0.35], [0.55, 1.65, -0.7],
        [-0.7, -1.55, -0.5], [1.25, -1.05, 1.0], [-1.45, 1.05, 0.65],
    ], []);

    useFrame((state, delta) => {
        if (!group.current) return;
        group.current.rotation.y += delta * sceneTheme.motion.drift;
        group.current.rotation.x = Math.sin(state.clock.elapsedTime * sceneTheme.motion.floatFrequency) * 0.09;
        group.current.position.y = Math.sin(state.clock.elapsedTime * sceneTheme.motion.floatFrequency) * sceneTheme.motion.floatAmplitude;
    });

    return (
        <group ref={group} rotation={[0.06, -0.2, 0]}>
            <mesh>
                <torusKnotGeometry args={[1.05, 0.22, 160, 24]} />
                <meshStandardMaterial color={violet} emissive="#34166b" emissiveIntensity={0.55} metalness={0.72} roughness={0.24} wireframe />
            </mesh>
            <mesh scale={0.62}>
                <icosahedronGeometry args={[1, 2]} />
                <meshStandardMaterial color={blue} emissive="#0b4a6f" emissiveIntensity={0.45} wireframe transparent opacity={0.62} />
            </mesh>

            {nodes.map((position, index) => (
                <group key={index}>
                    <Line points={[[0, 0, 0], position]} color={index % 2 === 0 ? violet : blue} lineWidth={0.85} transparent opacity={0.26} />
                    <mesh position={position} scale={0.12}>
                        <sphereGeometry args={[1, 20, 20]} />
                        <meshStandardMaterial
                            color={index % 2 === 0 ? violet : blue}
                            emissive={index % 2 === 0 ? '#4c1d95' : '#0b4a6f'}
                            emissiveIntensity={0.75}
                            metalness={0.45}
                            roughness={0.26}
                        />
                    </mesh>
                </group>
            ))}

            <mesh position={[0, 0, 1.1]} scale={0.08}>
                <sphereGeometry args={[1, 18, 18]} />
                <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={1.5} />
            </mesh>
        </group>
    );
};

const ComputeCanvas = () => (
    <div className="relative h-[280px] w-full sm:h-[320px] lg:h-[340px]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.10),transparent_58%)]" />
        <Canvas
            camera={sceneTheme.camera}
            dpr={sceneTheme.dpr}
            gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
        >
            <SceneLights />
            <ComputeCore />
        </Canvas>
    </div>
);

export default ComputeCanvas;
