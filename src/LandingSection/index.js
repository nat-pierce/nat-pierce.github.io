import Particles from "react-tsparticles";
import { particlesOptions } from "./ParticlesOptions";
import './LandingSection.scss';

export default function LandingSection() {
    return (
        <div className='landing-section' id='landing-section'>
            <Particles
                options={particlesOptions}
            />
            <div className='text-section'>
                <h1 className='name'>Natalie Pierce</h1>
                <h3 className='job-title'>Senior Front-end Software Engineer</h3>
            </div>
        </div>
    )
}