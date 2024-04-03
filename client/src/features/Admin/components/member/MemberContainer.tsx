import AdminModal from "../AdminModal"
import AddMember from "./AddMember"
import CardMember from "./CardMember"


export const MemberContainer = () => {
  return (
    <div className="flex items-end flex-col w-full mb-5">
    <AdminModal 
        text = 'agregar'
        width = '120px'
        bg = 'tertiary'
        children={<AddMember/>}
    />
    <CardMember/>
</div>
  )
}

export default MemberContainer