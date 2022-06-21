import React from 'react';
import '../styles/contact.css';

const Contact = () => {
    return (
        <div id='contact'>
            <div className='container-contact'>
                <div className='contact-p'>
                    <h2>Contact</h2>
                    <p>Submit the form below or shoot me an email</p>
                    <p> ferreyramelisa91@gmail.com</p>
                </div>
                <form method='POST' action="https://getform.io/f/d71d5fd7-d37c-4305-b2d7-651bafffbb3a">
                    <div>
                        <input type="text" name='name' placeholder='Name'/>
                        <input type="email" name='email' placeholder='Email'/>
                        <textarea type="text" name="message" rows="10"  placeholder='Message'></textarea>
                    </div>
                    <button className='btn-form'>
                        Contact me
                    </button>
                </form>
            </div>
            
        </div>
    )
}

export default Contact