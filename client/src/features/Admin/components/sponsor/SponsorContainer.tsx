import GlobalModal from '../../../../components/AdminModal'
import AddSponsorForm from './AddSponsorForm'
import SponsorTable from './SponsorTable'

const SponsorContainer = () => {
    return (
        <div>
            <div className="flex items-end flex-col w-full mb-5">
                <GlobalModal 
                    text= 'Agregar'
                    textHover='primary'
                    fontColor = 'primary'
                    width = '180px'
                    bg = 'gradient-to-r'
                    from = 'tertiary'
                    to = 'accent'
                    bgHover = 'gradient-to-l'
                    
                    children={<AddSponsorForm/>}/>
            </div>
            <SponsorTable/>
        </div>
    )
}

export default SponsorContainer