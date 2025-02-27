import { Contact, Call, Focus, Quote, CrawlSpaceServices, ProfessionalTwo } from '../components/components'

export default function CrawlSpace() {
    return (
        <div>
            <CrawlSpaceServices />
            <ProfessionalTwo />
            <Quote />
            <Focus />
            <Call />
            <Contact />
        </div>
    )
}