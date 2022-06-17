import React from 'react';
import '../styles/projects.css';
import marvel from '../assets/marvel.PNG';
import food from '../assets/landing.PNG';
import pizza from '../assets/pizza-app.PNG';
import vegallones from '../assets/vegallones.PNG';
import videoFood from '../assets/apiFood.mp4';
import videoMarvel from '../assets/marvel.mp4';

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
                        <p> E-commerce app designed to consume MarvelAPI, read about comics, and read online by a regular subscription with payment system integration.
                            Technologies: React- PostgreSQL- Express Js- Node Js- Redux- Auth0- Paypal.
                        </p>
                    </div>
                    <div className='btn-projects'>
                        <p className="me-p">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://github.com/MelisaF/Final-Project-marvel">
                                GitHub
                            </a>
                        </p>
                        <p className="me-p2">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href={videoMarvel}>
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
                        <p>
                            SPA designed to consume spoonacular API, save info in a database, create new recipe, and record it in the DB. Other features like filters, sorting, etc.
                            Technologies: React- PostgreSQL- Express Js- Node Js.
                        </p>
                    </div>
                    <div className='btn-projects'>
                        <p className="me-p">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://github.com/MelisaF/food-api">
                                GitHub
                            </a>
                        </p>
                        <p className="me-p2">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href={videoFood}>
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
                        <p> SPA designed to consume information loaded in firebase, select product, add to cart. <br/>
                            Technologies: React- JavaScript- Firebase- Bootstrap.
                        </p>
                    </div>
                    <div className='btn-projects'>
                        <p className="me-p">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://github.com/MelisaF/pizza-app">
                                GitHub
                            </a>
                        </p>
                        <p className="me-p2">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://drive.google.com/file/d/1LOAV9kiQ4Gh8s3RADUvrGRb51DolSSnB/view?usp=sharing">
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
                        <p>
                            Web site <br/>
                            Technologies: HTML- CSS- SCSS- Bootstrap.
                        </p>
                    </div>
                    <div className='btn-projects'>
                        <p className="me-p">
                        <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://github.com/MelisaF/Vegallones">
                            GitHub
                        </a>
                        </p>
                        <p className="me-p2">
                            <a rel="noreferrer" target="_blank" className="bg-about btn-about" href="https://melisaf.github.io/Vegallones/">
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