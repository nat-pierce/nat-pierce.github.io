import { Link } from 'react-scroll';
import './NavBar.scss';

export default function NavBar() {
    return (
        <div className='nav-bar'>
            <Link activeClass="active" to="landing-section" spy={true} smooth={true} duration={1000}>
                Home
            </Link>
            <Link activeClass="active" to="profile-section" spy={true} smooth={true} duration={1000}>
                About Me
            </Link>
        </div>
    )
}