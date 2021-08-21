import React from 'react'
import '../styles/project.scss';
const Project = (props) => {
    return (
        <div className="project">
            <div className="project__image">
                <img loading="lazy" src={props.img} alt="" />
            </div>
            <div className="project__info">
            <div className="project__text">
            <h1>{props.name}</h1>
            <p>{props.tools}</p>
            </div>

            <div className="project__desc">
                <p>{props.desc}</p>
                <div className="project__buttons">
    <a className="project__btn" href={props.site}>Demo</a>
    <a className="project__btn" href={props.site}>Code</a>
                </div>
            </div>
            </div>
           
        </div>
    )
}

export default Project;
