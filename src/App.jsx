import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { About, Contact, Journey, Hero, Navbar, Tech, Other, Projects } from './components';

const App = () => {
    const [isTechLoaded, setIsTechLoaded] = useState(false);

    const handleTechLoad = () => {
        setIsTechLoaded(true);
    };

    return (
        <BrowserRouter>
            <div className="relative z-0 bg-primary">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <About />
                <Journey />
                <Tech
                    onLoad={handleTechLoad}
                />
                {isTechLoaded ? <Other /> : <p className="text-white text-center">Loading Other Technologies...</p>}
                <Projects />
                <div className="relative z-0">
                    <Contact />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
