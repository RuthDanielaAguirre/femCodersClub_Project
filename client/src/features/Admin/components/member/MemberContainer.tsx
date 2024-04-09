import AdminModal from "../AdminModal";
import AddMember from "./AddMember";
import CardMember from "./CardMember";

export const MemberContainer = () => {
  return (
    <>
    <div className="flex items-end flex-col w-full mb-5">
      <AdminModal 
          text = 'Agregar'
          width = '120px'
          bg = 'tertiary'
          children={<AddMember/>}
      />
    </div>
    <CardMember/>
    </>
  )
}

export default MemberContainer;