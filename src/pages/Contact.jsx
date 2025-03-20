import { Contact as ContactUs } from '../components/components'
import {Helmet} from "react-helmet";

export default function Contact() {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Prime Pluss Services - Contact Prime Pluss Today!</title>
                <link rel="canonical" href="http://www.primepluss.com/contact-us" />
            </Helmet>
            <ContactUs />
        </div>
    )
}