import AdminModal from '../AdminModal'
import AddFaqForm from './AddFaqForm'


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
            
        </div>
    )
}

export default FaqContainer
