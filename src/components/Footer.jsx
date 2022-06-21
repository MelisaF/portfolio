import React from "react";
import "../styles/footer.css";
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

function Footer() {
    return (
        <div id='footer' className="footer">
            <div className="socialMedia">
                <a href="https://github.com/MelisaF" target="_blank" rel="noreferrer"> <BsGithub className="icon"/> </a>
                <a href="https://www.linkedin.com/in/melisa-ferreyra/" target="_blank" rel="noreferrer"> <BsLinkedin /> </a>
                <a href = "mailto: ferreyramelisa91@gmail.com" target="_blank" rel="noreferrer"> <MdEmail /> </a> 
            </div>
            <p> &copy; 2022 Melisa Ferreyra</p>
        </div>
    );
}

export default Footer;