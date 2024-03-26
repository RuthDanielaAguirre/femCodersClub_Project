import AdminModal from '../AdminModal'
import AddSponsorForm from './AddSponsorForm'
import SponsorTable from './SponsorTable'

const SponsorContainer = () => {
    return (
        <div>
            <div className="flex items-end flex-col w-full mb-5">
                <AdminModal 
                    text = 'agregar'
                    width = '120px'
                    bg = 'tertiary'
                    children={<AddSponsorForm/>}
                />
            </div>
            <SponsorTable/>
        </div>
    )
}

export default SponsorContainer