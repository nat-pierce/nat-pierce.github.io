import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './NavBar.scss';

export default function NavBar() {
    const [shouldShowBackground, setShouldShowBackground] = useState(false);

    const onScroll = () => {
        if (window.scrollY > 0 && !shouldShowBackground) {
            setShouldShowBackground(true);
        } else if (window.scrollY === 0 && shouldShowBackground) {
            setShouldShowBackground(false);
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        }
    });

    return (
        <div className={`nav-bar ${shouldShowBackground ? 'background' : ''}`}>
            <Link activeClass="active" to="landing-section" spy={true} smooth={true} duration={1000}>
                Home
            </Link>
            <Link activeClass="active" to="profile-section" spy={true} smooth={true} duration={1000}>
                About Me
            </Link>
            <Link activeClass="active" to="projects-section" spy={true} smooth={true} duration={1000}>
                Projects
            </Link>
        </div>
    )
}