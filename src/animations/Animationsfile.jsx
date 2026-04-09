import './Animations.css';

function Animationsfile(){
    return(
        <div>
            <div className='fadein'>
            <h1>FADE IN</h1>
            <img src='https://imgd.aeplcdn.com/600x337/n/cw/ec/171777/kylaq-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80'alt='' style={{height: '200px', width: '300px'}}/>
            </div>

            <div className='fadeout'>
            <h1>FADE OUT</h1>
            <img src='https://imgd.aeplcdn.com/600x337/n/cw/ec/171777/kylaq-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80'alt='' style={{height: '200px', width: '300px'}}/>
            </div>

            <div className='slidein-left'>
            <h1>SLIDE IN FROM LEFT</h1>
            <img src='https://imgd.aeplcdn.com/600x337/n/cw/ec/171777/kylaq-exterior-right-front-three-quarter-10.jpeg?isig=0&q=80'alt='' style={{height: '200px', width: '300px'}}/>
            </div>
        </div>
    );
}
export default Animationsfile;