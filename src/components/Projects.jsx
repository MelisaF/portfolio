import React from 'react';
import '../styles/projects.css';
import marvel from '../assets/marvel.PNG';
import food from '../assets/landing.PNG';
import pizza from '../assets/pizza-app.PNG';
import vegallones from '../assets/vegallones.PNG';
import marvelVideo from '../assets/marvel.mp4'

const Projects = () => {
    return (
        <div id='projects'>
            <div className='container-projects'>
                <h2>Projects</h2>
            </div>
            <div className='container__projects'>
                <div className="projects--h3">
                    <div>
                        <h3>Project Marvel</h3>
                    </div>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic provident itaque ut. Expedita maiores veniam quod dicta iste obcaecati quae.</p>
                    </div>
                    <div className='btn-projects'>
                        <p className="me-p">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://github.com/MelisaF/Final-Project-marvel">
                                GitHub
                            </a>
                        </p>
                        <p className="me-p2">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="../assets/marvel.mp4">
                                Demo
                            </a>  
                        </p>
                    </div>
                    
                </div>
                <div>
                    <img src={marvel} alt="marvel" className='img-project'/>
                </div>
            </div>
            <div className='container__projects'>
                <div className="projects--h3">
                    <div>
                        <h3>Project Food</h3>
                    </div>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic provident itaque ut. Expedita maiores veniam quod dicta iste obcaecati quae.</p>
                    </div>
                    <div className='btn-projects'>
                        <p className="me-p">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://github.com/MelisaF/food-api">
                                GitHub
                            </a>
                        </p>
                        <p className="me-p2">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://github.com/MelisaF/Vegallones">
                                Demo
                            </a>
                        </p>
                    </div>
                </div>
                <div className='container-food'>
                    <img src={food} alt="food" className='img-project'/>
                </div>
            </div>
            <div className='container__projects'>
                <div className="projects--h3">
                    <div>
                        <h3>Project Pizza</h3>
                    </div>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic provident itaque ut. Expedita maiores veniam quod dicta iste obcaecati quae.</p>
                    </div>
                    <div className='btn-projects'>
                        <p className="me-p">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://github.com/MelisaF/pizza-app">
                                GitHub
                            </a>
                        </p>
                        <p className="me-p2">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://github.com/MelisaF/Vegallones">
                                Demo
                            </a>
                        </p>
                    </div>
                </div>
                <div>
                    <img src={pizza} alt="pizza" className='img-project'/>
                </div>
            </div>
            
            <div className='container__projects'>
                <div className="projects--h3">
                    <div>
                        <h3>Project Vegallones</h3>
                    </div>
                    <div>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic provident itaque ut. Expedita maiores veniam quod dicta iste obcaecati quae.</p>
                    </div>
                    <div className='btn-projects'>
                        <p className="me-p">
                        <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://github.com/MelisaF/Vegallones">
                            GitHub
                        </a>
                        </p>
                        <p className="me-p2">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://github.com/MelisaF/Vegallones">
                                Demo
                            </a>
                        </p>
                    </div>
                </div>
                <div>
                    <img src={vegallones} alt="vegallones" className='img-project'/>
                </div>
            </div>
        </div>
    )
}

export default Projects