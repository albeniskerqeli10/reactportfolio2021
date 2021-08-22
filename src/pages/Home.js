import React, {Suspense} from 'react'
import Hero from '../components/Hero.js';
import Projects from '../components/Projects.js';
const Home = React.memo(() => {
    return (
<Suspense fallback={null}>
<Hero/>
  <Projects/>
</Suspense>
    )
}
)

export default Home;
