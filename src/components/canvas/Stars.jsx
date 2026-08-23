import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { sceneTheme } from './sceneTheme';

const StarLayer = ({ count, radiusMin, radiusMax, color, size, opacity, speed }) => {
    const ref = useRef();
    const positions = useMemo(() => {
        const points = new Float32Array(count * 3);
        for (let i = 0; i < count; i += 1) {
            const radius = radiusMin + Math.random() * (radiusMax - radiusMin);
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            points[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
            points[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            points[i * 3 + 2] = radius * Math.cos(phi);
        }
        return points;
    }, [count, radiusMin, radiusMax]);

    useFrame((state, delta) => {
        if (!ref.current) return;
        ref.current.rotation.y -= delta * speed;
        ref.current.rotation.x = Math.sin(state.clock.elapsedTime * sceneTheme.motion.floatFrequency * 0.35) * 0.025;
    });

    return (
        <Points ref={ref} positions={positions} stride={3} frustumCulled>
            <PointMaterial
                transparent
                color={color}
                size={size}
                sizeAttenuation
                depthWrite={false}
                opacity={opacity}
            />
        </Points>
    );
};

const StarsCanvas = () => (
    <div className="pointer-events-none fixed inset-0 z-0 opacity-65" aria-hidden="true">
        <Canvas
            camera={{ ...sceneTheme.camera, position: [0, 0, 1] }}
            dpr={sceneTheme.dpr}
            gl={{ antialias: false, powerPreference: "low-power", alpha: true }}
        >
            <StarLayer count={1500} radiusMin={1.6} radiusMax={4.8} color="#ffffff" size={0.011} opacity={0.24} speed={0.006} />
            <StarLayer count={450} radiusMin={2.1} radiusMax={4.4} color={sceneTheme.colors.violet} size={0.013} opacity={0.16} speed={0.0045} />
            <StarLayer count={350} radiusMin={2.4} radiusMax={4.6} color={sceneTheme.colors.blue} size={0.012} opacity={0.12} speed={0.0055} />
        </Canvas>
    </div>
);

export default StarsCanvas;
