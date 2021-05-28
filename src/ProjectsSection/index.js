import './ProjectsSection.scss';
import piqrQr from '../Resources/Images/piqr-qr.png';

export default function ProjectsSection() {
    return (
        <div className='projects-section' id='projects-section'>
            <div className='project korio'>
                <iframe 
                    height="100%" 
                    src="https://www.youtube.com/embed/ZwS21DYQLCE" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
                <div className='text-section'>
                    <a href="https://korio.studio" target="_blank" rel="noreferrer">korio.studio</a>
                    <div className='subtitle'>The music player for dancers</div>
                </div>
            </div>
            <div className='project piqr'>
                <img src={piqrQr} alt='piqr.me' />
                <div className='text-section'>
                    <a href="https://piqr.me" target="_blank" rel="noreferrer">piqr.me</a>
                    <div className='subtitle'>Photo sharing made safe</div>
                </div>
            </div>
            <div className='project whats-your-list'>Project 3</div>
        </div>
    )
}