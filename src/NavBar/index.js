import { useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.scss';

export default function NavBar() {
    const [shouldShowBackground, setShouldShowBackground] = useState(false);

    const onActiveHome = () => {
        setShouldShowBackground(false);
    }

    const onInactiveHome = () => {
        setShouldShowBackground(true);
    }

    return (
        <div className={`nav-bar ${shouldShowBackground ? 'background' : ''}`}>
            <Link 
                onSetActive={onActiveHome}
                onSetInactive={onInactiveHome} 
                containerId='app-container' 
                activeClass="active" 
                to="landing-section" 
                spy={true} 
                smooth={true} 
                duration={1000}>
                Home
            </Link>
            <Link containerId='app-container' activeClass="active" to="profile-section" spy={true} smooth={true} duration={1000}>
                About Me
            </Link>
            <Link containerId='app-container' activeClass="active" to="projects-section" spy={true} smooth={true} duration={1000}>
                Projects
            </Link>
            <Link containerId='app-container' activeClass="active" to="contact-section" spy={true} smooth={true} duration={1000}>
                Contact
            </Link>
        </div>
    )
}