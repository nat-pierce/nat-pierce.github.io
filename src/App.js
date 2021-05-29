import { useEffect, useRef, useState } from 'react';
import './App.scss';
import ContactSection from './ContactSection';
import LandingSection from './LandingSection';
import NavBar from './NavBar';
import ProfileSection from './ProfileSection';
import ProjectsSection from './ProjectsSection';

function App() {
    const containerRef = useRef(null);
    const [isMounted, setIsMounted] = useState(false);

    const updateWindowDimensions = () => {
        const height = window.innerHeight;

        containerRef.current.style.height = `${height}px`;

        setIsMounted(true);
    }

    useEffect(() => {
        updateWindowDimensions();

        window.addEventListener('resize', updateWindowDimensions);

        return () => {
            window.removeEventListener('resize', updateWindowDimensions);
        }
    }, []);

    return (
        <div className="app-container" id='app-container' ref={containerRef}>
            {isMounted &&
                <>
                    <NavBar />
                    <LandingSection />
                    <ProfileSection />
                    <ProjectsSection />
                    <ContactSection />
                </>
            }
        </div>
    );
}

export default App;
