import { useEffect, useRef } from 'react';
import './App.scss';
import LandingSection from './LandingSection';

function App() {
    const containerRef = useRef(null);

    const updateWindowDimensions = () => {
        const height = window.innerHeight;

        containerRef.current.style.height = `${height}px`;
    }

    useEffect(() => {
        updateWindowDimensions();

        window.addEventListener('resize', updateWindowDimensions);

        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        }
    }, []);

    return (
        <div className="app-container" ref={containerRef}>
            <LandingSection />
        </div>
    );
}

export default App;
