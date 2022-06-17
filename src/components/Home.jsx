import React from "react";
import "../styles/home.css";


function Home() {
    return (
        <>
            <div className="container-me" id="top">
                <div className="container-text">
                    <h1> Hi, my name is <span className="myName">Melisa Ferreyra</span>
                        <br/>
                        I'm Full Stack Developer.
                    </h1>
                    <p className="me-p">
                        <a rel="noreferrer" className="bg-about btn-about" href="#about">
                            Know more
                        </a>
                    </p>
                </div>
            </div>


      
            {/* <h2> Skills</h2>
                <div className="container-front">

                    <div className='shadow'>
                        <p>HTML</p>
                    </div>
                    <div className='shadow'>
                        <p>CSS</p>
                    </div>
                    <div className='shadow'>
                        <p>JAVASCRIPT</p>
                    </div>
                    <div className='shadow'>
                        <p>NODE</p>
                    </div>
                    <div className='shadow'>
                        <p>REACT</p>
                    </div>
                    <div className='shadow'>
                        <p>REDUX</p>
                    </div>
                    <div className='shadow'>
                        <p>GIT</p>
                    </div>
                    <div className='shadow'>
                        <p>GITHUB</p>
                    </div>
                </div>
                <div className="container-back">
                    <div className='shadow'>  
                        <p>POSTGRES SQL</p>
                    </div>
                    <div className='shadow'>  
                        <p>SEQUELIZE</p>
                    </div>
                    <div className='shadow'>  
                        <p>POSTMAN</p>
                    </div>
                </div> */}
            
        </>
    );
}

export default Home;