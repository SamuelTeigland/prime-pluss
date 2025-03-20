import { Contact, AboutUs, Energy, Why } from '../components/components'
import {Helmet} from "react-helmet";

function About() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Prime Pluss Services - Why Prime Pluss?</title>
        <link rel="canonical" href="http://www.primepluss.com/about-us" />
      </Helmet>
      <AboutUs />
      <Why />
      <Energy />
      <Contact />
    </div>
  )
}

export default About