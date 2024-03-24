import SponsorTable from './SponsorTable'
import AddSponsorModal from './addSponsorModal'

const SponsorContainer = () => {
    return (
        <div>
            <div className="flex items-end flex-col w-full mb-5">
                <AddSponsorModal/>
            </div>
            <SponsorTable/>
        </div>
    )
}

export default SponsorContainer