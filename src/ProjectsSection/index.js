import './ProjectsSection.scss';
import piqrQr from '../Resources/Images/piqr-qr.png';
import WhatsYourListLogo from './WhatsYourListLogo';

export default function ProjectsSection() {
    return (
        <div className='projects-section' id='projects-section'>
            <div className='top-row'>
                <div className='project korio'>
                    <div className='left'>
                        <iframe 
                            src="https://www.youtube.com/embed/ZwS21DYQLCE" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                    <div className='right'>
                        <a href="https://korio.studio" target="_blank" rel="noreferrer">Korio.studio</a>
                        <div className='subtitle'>The music player for dancers</div>
                    </div>
                </div>
                <div className='project piqr'>
                    <div className='left'>
                        <img src={piqrQr} alt='piqr.me' />
                    </div>
                    <div className='right'>
                        <a href="https://piqr.me" target="_blank" rel="noreferrer">Piqr.me</a>
                        <div className='subtitle'>Photo sharing made safe</div>
                    </div>
                </div>
            </div>
            <div className='bottom-row'>
                <div className='project whats-your-list'>
                    <div className='left'>
                        <WhatsYourListLogo shouldAnimate={true} animationSpeed={1500} sizeScale={0.5} />
                    </div>
                    <div className='right'>
                        <a href="https://whatsyourlist.com" target="_blank" rel="noreferrer">WhatsYourList.com</a>
                        <div className='subtitle'>Share and compare your favorite movies with friends</div>
                    </div>
                </div>
                <div className='project keety'>
                    <div className='left'> </div>
                    <div className='right'>
                        <a href="https://apps.apple.com/us/app/keety/id1131054781" target="_blank" rel="noreferrer">Keety</a>
                        <div className='subtitle'>Arcade action shooter based on cat memes</div>
                    </div>
                </div>
            </div>
        </div>
    )
}