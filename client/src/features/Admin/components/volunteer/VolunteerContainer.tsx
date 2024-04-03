import AdminModal from "../AdminModal"
import { AddVolunteerForm } from "./AddVolunteerForm"
import CardVolunteer from "./CardVolunteer"

export const VolunteerContainer = () => {
  return (
    <div className="flex  items-start flex-col w-full mb-5">
    <AdminModal 
        text = 'agregar'
        width = '120px'
        bg = 'tertiary'
        children={<AddVolunteerForm/>}
    />
    <CardVolunteer/>
</div>
  )
}
