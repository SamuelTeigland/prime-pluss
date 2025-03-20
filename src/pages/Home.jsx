import { Hero, Focus, Quote, About, Contact } from '../components/components'
import {Helmet} from "react-helmet";

function Home() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Prime Pluss Services - Insulation and Energy Services Company - Delaware, Maryland, and Pennsylvania</title>
        <link rel="canonical" href="http://www.primepluss.com" />
      </Helmet>
      <Hero />
      <Focus />
      <About />
      <Quote />
      <Contact />
    </div>
  )
}

export default Home