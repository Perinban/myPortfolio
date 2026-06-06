import { useRef } from 'react';
import { saveAs } from 'file-saver';
import { motion } from 'framer-motion';
import { View } from "@react-three/drei";
import { useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial } from '@react-three/drei';
import { canvasColors } from '../../constants';

const WobbleButton = () => {
    const mesh = useRef();

    useFrame((state) => {
        mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
        mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    });

    return (
        <>
            <ambientLight intensity={0.8} />
            <directionalLight position={[3, 3, 3]} intensity={1} />
            <mesh ref={mesh} scale={[2.8, 0.9, 0.25]}>
                <boxGeometry args={[1, 1, 1]} />
                <MeshWobbleMaterial
                    color={canvasColors.accent}
                    factor={0.03}
                    speed={1.5}
                    metalness={0.4}
                    roughness={0.3}
                />
            </mesh>
        </>
    );
};

const ResumeCanvas = () => {
    const downloadPdf = async () => {
        const pdfUrl = "https://media.licdn.com/dms/document/media/v2/D562DAQHnZMKYkNtyIg/profile-treasury-document-pdf-analyzed/B56ZWj6XJuHEAc-/0/1742211753118?e=1743638400&v=beta&t=mlqK6Aat7KVjQQ3QbdXxdUAF70m6ZyDJxW_i8G5A8Rs";
        const response = await fetch(pdfUrl);
        const blob = await response.blob();
        saveAs(blob, 'cv.pdf');
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={downloadPdf}
            style={{ cursor: 'pointer', position: 'relative', width: '160px', height: '48px' }}
        >
            <View style={{ position: 'absolute', inset: 0 }}>
                <WobbleButton />
            </View>
            <span style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px',
                fontFamily: 'Poppins, sans-serif',
                pointerEvents: 'none',
                gap: '8px'
            }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 4v12M12 16l-4-4M12 16l4-4"/><path d="M4 20h16"/>
                </svg>
                Download CV
            </span>
        </motion.div>
    );
};

export default ResumeCanvas;