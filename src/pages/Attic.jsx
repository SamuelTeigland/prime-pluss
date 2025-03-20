import { Contact, Call, Focus, Quote, AtticServices, Professional } from '../components/components'
import {Helmet} from "react-helmet";

function Attic() {

  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Prime Pluss Services - Attic Cleaning Near Me!</title>
        <link rel="canonical" href="http://www.primepluss.com/attic-cleaning-near-me" />
      </Helmet>
      <AtticServices />
      <Professional />
      <Quote />
      <Focus />
      <Call />
      <Contact />
    </div>
  )
}

export default Attic