import React from 'react'
import Skills from '../components/Skills'
import TwoColumn from '../components/TwoColumn'

const About = React.memo(() => {
    return (
        <div>
            <TwoColumn/>
            <Skills/>
            
        </div>
    )
}
)

export default About;
