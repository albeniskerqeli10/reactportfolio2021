import React from 'react'
import '../styles/twocolumn.scss';
import personal from '../assets/images/profilepic1.webp';
const TwoColumn = () => {
    return (
        <section className="twocolumn">
        <div className="twocolumn__row">
            <div className="twocolumn__details">
 <h1>
I’m Albenis a Software Engineer based in Kosovo
 </h1>
 {/* <p>I bring ideas into life through code. I specialize in front-end web development, doing everything from scratch.</p> */}
 <p>Professionally connected with the web development industry and information technology for many years.
Interested in the entire frontend spectrum and working on ambitious projects with positive people.</p>
<div className="twocolumn__buttons">
    <a href="/about">Download CV</a>
</div>
            </div>
            <div className="twocolumn__photo">
                <img loading="lazy" src={personal} alt="" />
            </div>
        </div>
            
        </section>
    )
}

export default TwoColumn
