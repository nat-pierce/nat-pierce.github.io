import Particles from "react-tsparticles";
import { particlesOptions } from "./ParticlesOptions";
import './LandingSection.scss';

export default function LandingSection() {
    return (
        <div className='landing-section' id='landing-section'>
            <Particles
                className='particles'
                options={particlesOptions}
            />
            <div className='text-section'>
                <h1 className='name'>Natalie Pierce</h1>
                <h3 className='job-title'>Creative Coder | Software Engineering Manager</h3>
            </div>
        </div>
    )
}