import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import { SceneLights, sceneTheme } from './sceneTheme';

const { violet, blue, cyan, green } = sceneTheme.colors;

const BoxNode = ({ position, scale = [1, 1, 1], color = violet, emissive = '#24123f', rotation = [0, 0, 0] }) => (
    <mesh position={position} scale={scale} rotation={rotation}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} emissive={emissive} emissiveIntensity={0.55} metalness={0.65} roughness={0.28} />
    </mesh>
);

const MetaXudaScene = () => {
    const pulse = useRef();

    useFrame(({ clock }) => {
        if (!pulse.current) return;
        pulse.current.position.x = -1.25 + ((clock.elapsedTime * 0.7) % 2.5);
        pulse.current.scale.setScalar(0.85 + Math.sin(clock.elapsedTime * 4) * 0.12);
    });

    return (
        <group rotation={[0.12, -0.22, 0]}>
            <BoxNode position={[-1.55, 0, 0]} scale={[1.6, 1.15, 0.32]} color={blue} emissive="#082f49" />
            <BoxNode position={[1.55, 0, 0]} scale={[1.6, 1.15, 0.32]} color={green} emissive="#064e3b" />
            <Line points={[[-0.75, 0, 0], [0.75, 0, 0]]} color={cyan} lineWidth={2.2} transparent opacity={0.72} />
            <mesh ref={pulse} position={[-1.25, 0, 0.08]}>
                <sphereGeometry args={[0.12, 20, 20]} />
                <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={1.8} />
            </mesh>
            <mesh position={[-1.55, 0, 0.28]}>
                <torusGeometry args={[0.34, 0.035, 12, 56]} />
                <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={1.1} />
            </mesh>
            <mesh position={[1.55, 0, 0.28]} rotation={[Math.PI / 2, 0, 0]}>
                <torusKnotGeometry args={[0.28, 0.055, 80, 12]} />
                <meshStandardMaterial color={green} emissive={green} emissiveIntensity={0.9} metalness={0.35} />
            </mesh>
        </group>
    );
};

const ClounarScene = () => {
    const group = useRef();
    const nodes = useMemo(() => [
        [2.0, 0.1, 0.2],
        [1.05, 1.55, -0.25],
        [-1.0, 1.45, 0.15],
        [-2.0, -0.15, -0.1],
        [-0.9, -1.5, 0.2],
        [1.15, -1.45, -0.2],
    ], []);

    useFrame(({ clock }) => {
        if (!group.current) return;
        group.current.rotation.z = Math.sin(clock.elapsedTime * 0.22) * 0.08;
    });

    return (
        <group ref={group} rotation={[0.08, -0.18, 0]}>
            <mesh>
                <icosahedronGeometry args={[0.76, 2]} />
                <meshStandardMaterial color={violet} emissive="#3b1764" emissiveIntensity={0.7} metalness={0.7} roughness={0.22} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.05, 0.035, 12, 72]} />
                <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={0.8} transparent opacity={0.8} />
            </mesh>
            {nodes.map((node, index) => (
                <group key={index}>
                    <Line points={[[0, 0, 0], node]} color={index % 2 ? blue : violet} lineWidth={1.1} transparent opacity={0.45} />
                    <mesh position={node} scale={0.18}>
                        <sphereGeometry args={[1, 20, 20]} />
                        <meshStandardMaterial color={index % 2 ? blue : violet} emissive={index % 2 ? '#0b4a6f' : '#4c1d95'} emissiveIntensity={0.8} />
                    </mesh>
                </group>
            ))}
        </group>
    );
};

const AxonScene = () => {
    const stack = useRef();
    const slabs = useMemo(() => Array.from({ length: 7 }, (_, index) => index), []);

    useFrame(({ clock }) => {
        if (!stack.current) return;
        stack.current.rotation.y = -0.38 + Math.sin(clock.elapsedTime * 0.25) * 0.11;
    });

    return (
        <group ref={stack} rotation={[0.12, -0.38, -0.04]}>
            {slabs.map((index) => {
                const y = (index - 3) * 0.38;
                const active = index === 2 || index === 4;
                return (
                    <BoxNode
                        key={index}
                        position={[0, y, index * -0.055]}
                        scale={[3.1 - Math.abs(index - 3) * 0.12, 0.22, 1.35]}
                        color={active ? blue : violet}
                        emissive={active ? '#0b4a6f' : '#2e1065'}
                    />
                );
            })}
            <mesh position={[0, 0, 0.85]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.55, 0.055, 16, 96, Math.PI * 1.45]} />
                <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={1.25} />
            </mesh>
            <mesh position={[0.75, -0.15, 1.0]}>
                <sphereGeometry args={[0.13, 20, 20]} />
                <meshStandardMaterial color={cyan} emissive={cyan} emissiveIntensity={1.8} />
            </mesh>
        </group>
    );
};

const Scene = ({ variant }) => {
    const root = useRef();

    useFrame((state, delta) => {
        if (!root.current) return;
        root.current.rotation.y += delta * sceneTheme.motion.drift;
        root.current.position.y = Math.sin(state.clock.elapsedTime * sceneTheme.motion.floatFrequency) * sceneTheme.motion.floatAmplitude;
    });

    return (
        <group ref={root}>
            {variant === 'metaxuda' && <MetaXudaScene />}
            {variant === 'clounar' && <ClounarScene />}
            {variant === 'axon' && <AxonScene />}
        </group>
    );
};

const FlagshipVisual = ({ variant }) => (
    <div className="h-full w-full">
        <Canvas
            camera={sceneTheme.camera}
            dpr={sceneTheme.dpr}
            gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
        >
            <SceneLights />
            <Scene variant={variant} />
        </Canvas>
    </div>
);

export default FlagshipVisual;
