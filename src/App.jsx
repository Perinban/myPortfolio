import { lazy, Suspense } from 'react';
import { About, Contact, Journey, Hero, Navbar, Tech, FlagshipShowcase, Projects, LinkedIn } from './components';

const StarsCanvas = lazy(() => import('./components/canvas/Stars'));

const App = () => (
    <div className="relative min-h-screen bg-primary text-secondary">
        <Suspense fallback={null}>
            <StarsCanvas />
        </Suspense>
        <div className="relative z-10">
            <Navbar />
            <Hero />
            <About />
            <Journey />
            <Tech />
            <FlagshipShowcase />
            <Projects />
            <LinkedIn />
            <Contact />
        </div>
    </div>
);

export default App;
