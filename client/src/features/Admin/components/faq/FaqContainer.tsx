import AdminModal from '../AdminModal'
import AddFaqForm from './AddFaqForm'
import FaqList from './FaqList'


const FaqContainer = () => {
    return (
        <div>
            <div className="flex items-end flex-col w-full mb-5">
                <AdminModal 
                    text = 'agregar'
                    width = '120px'
                    bg = 'tertiary'
                    children={<AddFaqForm/>}
                />
            </div>
            <FaqList/>
        </div>
    )
}

export default FaqContainer
