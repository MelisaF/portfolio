import React from 'react';
import me from '../assets/image.png';
import '../styles/about.css';
import CV from '../assets/cvIngles.pdf';

const About = () => {
    return (
        <div id='about'>
            <div className='container-about'>
                <h2 className='title-about'>About me</h2>
                <div className='about_wrapper row'>
                    <div>
                        <div className='container__img-me'>
                            <img src={me} alt="me" className='img-me' />
                        </div>
                    </div>
                    <div>
                        <div className='about-text'>
                            <p>Hi, I'm Melisa, nice to meet you!</p>
                            <p> I dedicate my time to expanding my knowledge, 
                                learning and teaching, developing my skills and enhancing
                                interpersonal relationships.
                            </p>
                            <p>
                                I am a creative, organized and disciplined person,
                                efficient when managing tasks and managing time.
                            </p>
                            <p>
                                I learn in an agile and autonomous way. 
                                I easily adapt to changes that arise.
                            </p>
                            <span className='btn-resume'>
                                <a rel='noreferrer' target='_blank' href={CV}>
                                    View Resume
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About