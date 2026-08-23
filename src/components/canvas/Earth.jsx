import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import { SceneLights, sceneTheme } from './sceneTheme';

const { violet, blue, cyan } = sceneTheme.colors;

const Globe = () => {
    const group = useRef();
    const meridians = useMemo(() => Array.from({ length: 9 }, (_, index) => (index / 9) * Math.PI), []);
    const latitudes = useMemo(() => [-1.0, -0.62, -0.28, 0.28, 0.62, 1.0], []);

    useFrame((state, delta) => {
        if (!group.current) return;
        group.current.rotation.y += delta * sceneTheme.motion.drift;
        group.current.rotation.x = -0.1 + Math.sin(state.clock.elapsedTime * sceneTheme.motion.floatFrequency) * 0.035;
        group.current.position.y = Math.sin(state.clock.elapsedTime * sceneTheme.motion.floatFrequency) * sceneTheme.motion.floatAmplitude;
    });

    return (
        <group ref={group} rotation={[-0.08, -0.35, 0.04]} scale={1.08}>
            <mesh>
                <sphereGeometry args={[1.55, 64, 64]} />
                <meshStandardMaterial color="#101b2d" emissive="#08111e" emissiveIntensity={0.6} metalness={0.5} roughness={0.34} transparent opacity={0.82} />
            </mesh>
            <mesh scale={1.012}>
                <sphereGeometry args={[1.55, 28, 28]} />
                <meshStandardMaterial color={blue} wireframe transparent opacity={0.16} depthWrite={false} />
            </mesh>

            {meridians.map((rotationY, index) => (
                <mesh key={`m-${index}`} rotation={[0, rotationY, 0]}>
                    <torusGeometry args={[1.56, 0.009, 8, 96]} />
                    <meshBasicMaterial color={index % 2 === 0 ? violet : blue} transparent opacity={0.24} />
                </mesh>
            ))}

            {latitudes.map((y, index) => {
                const radius = Math.sqrt(Math.max(1.56 ** 2 - y ** 2, 0.1));
                return (
                    <mesh key={`l-${index}`} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
                        <torusGeometry args={[radius, 0.008, 8, 96]} />
                        <meshBasicMaterial color={index % 2 === 0 ? blue : violet} transparent opacity={0.2} />
                    </mesh>
                );
            })}

            <mesh position={[0.34, 0.88, 1.18]} scale={0.07}>
                <sphereGeometry args={[1, 20, 20]} />
                <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={1.8} />
            </mesh>
            <Line points={[[0.34, 0.88, 1.18], [1.35, 1.42, 1.45]]} color={cyan} lineWidth={1.2} transparent opacity={0.6} />
            <mesh position={[1.35, 1.42, 1.45]} scale={[0.38, 0.045, 0.045]} rotation={[0, 0, 0.2]}>
                <boxGeometry />
                <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={0.75} />
            </mesh>
        </group>
    );
};

const EarthCanvas = () => (
    <div className="relative h-full min-h-[230px] w-full">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_58%_46%,rgba(88,166,255,0.11),transparent_48%),radial-gradient(circle_at_35%_60%,rgba(167,139,250,0.09),transparent_52%)]" />
        <Canvas
            camera={sceneTheme.camera}
            dpr={sceneTheme.dpr}
            gl={{ antialias: true, powerPreference: "high-performance", alpha: true }}
        >
            <SceneLights />
            <Globe />
        </Canvas>
    </div>
);

export default EarthCanvas;
