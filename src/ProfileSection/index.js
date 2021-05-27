import './ProfileSection.scss';
import me from '../Resources/Images/meWithBg.JPG';

export default function ProfileSection() {
    return (
        <div className='profile-section' id='profile-section'>
            <img className='me' src={me} alt='me' />
            <div className='text-section'>
                <h1>Hi, I'm Nat.</h1>
                <div>I'm a front-end software engineer. I like writing clean code and building beautiful user interfaces.</div>
                <div>When I'm not coding, you can find me in the dance studio or playing with my Corgi, Gunter.</div>
            </div>
        </div>
    )
}