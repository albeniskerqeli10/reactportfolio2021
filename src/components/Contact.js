import React from 'react'
import '../styles/contact.scss';
import {FaLinkedin , FaGithub , FaTwitter , FaInstagram , FaFacebook } from 'react-icons/fa'
const Contact = () => {
    return (
        <section className="contact">
            <h1 className="text">I can help :)</h1>
        
<p>I’m currently available for a office or freelance job<br/>
If you have a project that you want to get started or any job  position related to my skills,<br/> you can contact me on  social media accounts</p>
{/* <div className="contact__email">
<i className="far fa-envelope"></i>
<h4>albeniskerqeli5@gmail.com</h4>
</div> */}
<div className="contact__icons">
<i className="contact__icon"><FaLinkedin/></i>
<i className="contact__icon"><FaGithub/></i>
<i className="contact__icon"><FaTwitter/></i>
<i className="contact__icon"><FaInstagram/></i>
<i className="contact__icon"><FaFacebook/></i>

</div>
        </section>
    )
}

export default Contact
