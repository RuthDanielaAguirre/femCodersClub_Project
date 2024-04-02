import { useQuery } from "@tanstack/react-query"
import { getVolunteers } from "../../../../api/volunteerApi"
import { styles } from "../../../../style"
import { IoTransgender } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"
import AdminModal from "../AdminModal"
import { EditVolunteerForm } from "./EditVolunteerForm"
import { DeleteVolunteer } from "./DeleteVolunteer"
import { VolunteerContext } from "../../../../hooks/useVolunteerContext"


export const CardVolunteer = () => {

  const { data } = useQuery(
    {
      queryKey: ['volunteer'],
      queryFn: getVolunteers
    })

  return (
    <>
      <div className="flex flex-wrap">
        {data?.map((volunteer) => (
          <div key={volunteer.idVolunteer} className={`${styles.cards} relative bg-white flex flex-col items-center m-4 max-w-[24rem] w-[260px] h-[300px] overflow-hidden`} >
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-tertiary opacity-50"></div>
            <img src="\imgUser.png" alt="avatar image" className="w-[100px] relative z-10 mt-4" />
            <div className="flex flex-col mt-4">
              <h5 className={`${styles.text}relative z-10 flex items-center gap-2`} ><FaUser />{volunteer.volunteerName} {volunteer.volunteerLastName}</h5>
              <p className="relative z-10 flex items-center gap-2 "><IoIosMail />{volunteer.volunteerEmail}</p>
              <p className="relative z-10 flex items-center gap-2 "><IoTransgender />{volunteer.volunteerGender}</p>
            </div>
            <div className="z-10 mt-5 space-x-2 ">
              <VolunteerContext.Provider value={volunteer}>
                <AdminModal
                  text='Editar'
                  width='120px'
                  bg='tertiary'
                >
                  <EditVolunteerForm />
                </AdminModal>
                <AdminModal
                  text='Borrar'
                  width='120px'
                  bg='secondary'
                >
                  <DeleteVolunteer />
                </AdminModal>
              </VolunteerContext.Provider>

            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export default CardVolunteer