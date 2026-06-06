import { useState, useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Journey, Hero, Navbar, Tech, Other, Projects, LinkedIn } from './components';
import { StarsCanvas } from './components/canvas';
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";

const App = () => {
    const [isTechLoaded, setIsTechLoaded] = useState(false);
    const container = useRef();

    const handleTechLoad = () => {
        setIsTechLoaded(true);
    };

    return (
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
            <div ref={container} className="relative z-0 bg-primary">
                <StarsCanvas />
                <div>
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Journey />
                <Tech onLoad={handleTechLoad} />
                {isTechLoaded ? <Other /> : <p className="text-white text-center">Loading Other Technologies...</p>}
                <Projects />
                <LinkedIn />
                <div className="relative z-0">
                    <Contact />
                </div>
                <Canvas
                    style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", pointerEvents: "none", zIndex: 1 }}
                    frameloop="always"
                    gl={{ powerPreference: "low-power", antialias: false }}
                    dpr={[1, 1.5]}
                    eventSource={container}
                >
                    <View.Port />
                </Canvas>
            </div>
        </BrowserRouter>
    );
}

export default App;