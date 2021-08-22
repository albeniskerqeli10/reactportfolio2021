import React , {Suspense} from 'react'
import Skills from '../components/Skills'
import TwoColumn from '../components/TwoColumn'

const About = React.memo(() => {
    return (
        <Suspense fallback={null}>
        <div>
            <TwoColumn/>
            <Skills/>
            
        </div>
        </Suspense>
    )
}
)

export default About;
