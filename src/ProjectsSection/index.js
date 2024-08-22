import './ProjectsSection.scss';
import piqrQr from '../Resources/Images/piqr-qr.png';
import WhatsYourListLogo from './WhatsYourListLogo';
import KeetyImg from '../Resources/Images/keety.png';
import BlumaLogo from '../Resources/Images/With_mascot.gif';

export default function ProjectsSection() {
    return (
        <div className='projects-section' id='projects-section'>
            <div className='project bluma'>
                <div className='top'>
                    <img src={BlumaLogo} alt='Bluma Logo' />
                </div>
                <div className='bottom'>
                    <a href="https://store.steampowered.com/app/3032520/BLUMA/" target="_blank" rel="noreferrer">BLUMA</a>
                    <div className='subtitle'>Cozy puzzle-platforming adventure</div>
                </div>
            </div>
            <div className='project keety'>
                <div className='top'>
                    <img src={KeetyImg} alt='Keety Logo' />
                </div>
                <div className='bottom'>
                    <a href="https://apps.apple.com/us/app/keety/id1131054781" target="_blank" rel="noreferrer">Keety</a>
                    <div className='subtitle'>Arcade action shooter based on cat memes</div>
                </div>
            </div>
            <div className='project korio'>
                <div className='top'>
                    <iframe 
                        src="https://www.youtube.com/embed/ZwS21DYQLCE" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                </div>
                <div className='bottom'>
                    <a href="https://korio.studio" target="_blank" rel="noreferrer">Korio.Studio</a>
                    <div className='subtitle'>The music player for dancers</div>
                </div>
            </div>
            <div className='project whats-your-list'>
                <div className='top'>
                    <WhatsYourListLogo shouldAnimate={true} animationSpeed={1500} sizeScale={0.5} />
                </div>
                <div className='bottom'>
                    <a href="https://whatsyourlist.com" target="_blank" rel="noreferrer">WhatsYourList.com</a>
                    <div className='subtitle'>Share and compare your favorite movies with friends</div>
                </div>
            </div>
            <div className='project piqr'>
                <div className='top'>
                    <img src={piqrQr} alt='piqr.me' />
                </div>
                <div className='bottom'>
                    <a href="https://piqr.me" target="_blank" rel="noreferrer">piqr.me</a>
                    <div className='subtitle'>Photo sharing made safe</div>
                </div>
            </div>
        </div>
    )
}