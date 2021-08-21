import React , {Suspense} from 'react'
import Skills from '../components/Skills'
import TwoColumn from '../components/TwoColumn'

const About = () => {
    return (
        <div>
            <TwoColumn/>
            <Skills/>
        </div>
    )
}

export default About
