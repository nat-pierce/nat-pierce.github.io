import './ProfileSection.scss';
import me from '../Resources/Images/me2.jpg';

export default function ProfileSection() {
    return (
        <div className='profile-section' id='profile-section'>
            <div className='text-section'>
                <h1>Hi, I'm Nat.</h1>
                <div>I'm a full-stack software engineer who enjoys writing clean code and building beautiful apps.</div>
                <div>The intersection between art and technology constantly inspires me to learn new skills, technologies, and art forms.</div>
                <div>When I'm not coding, you can find me in the dance studio, playing games, or hanging with my Corgi, Gunter.</div>
            </div>
            <img className='me' src={me} alt='me' />
        </div>
    )
}