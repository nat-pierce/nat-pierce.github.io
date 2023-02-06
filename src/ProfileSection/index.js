import './ProfileSection.scss';
import me from '../Resources/Images/meWithBg.JPG';

export default function ProfileSection() {
    return (
        <div className='profile-section' id='profile-section'>
            <div className='text-section'>
                <h1>Hi, I'm Nat.</h1>
                <div>I'm a front-end software engineer that likes writing clean code and building beautiful user interfaces.</div>
                <div>The intersection between art and technology constantly inspires me to learn new skills, technologies, and artforms.</div>
                <div>When I'm not coding, you can find me in the dance studio or playing with my Corgi, Gunter.</div>
            </div>
            <img className='me' src={me} alt='me' />
        </div>
    )
}