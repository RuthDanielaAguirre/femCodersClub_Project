import { useQuery } from "@tanstack/react-query"
import { getVolunteers } from "../../../../api/volunteerApi"
import { styles } from "../../../../style"
import { IoTransgender } from "react-icons/io5"
import { FaUser } from "react-icons/fa"
import { IoIosMail } from "react-icons/io"


export  const CardVolunteer = () => {

  const {data} = useQuery(
    {
    queryKey:['volunteers'],
    queryFn: getVolunteers
  })
 
  return (
    <>
    <div className="flex">
  {data?.map((volunteer) => (
    <div key={volunteer.idVolunteer} className={`${styles.cards} relative bg-white flex flex-col items-center m-4 max-w-[24rem] w-[250px] h-[300px] overflow-hidden`} >
      <div className="absolute inset-0 bg-gradient-to-br from-accent to-tertiary opacity-50"></div>
      <img src="\imgUser.png" alt="avatar image" className="w-[100px] relative z-10 mt-4"  />
      <div className="flex flex-col mt-4">
      <h5 className={`${styles.text}relative z-10 flex items-center gap-2`} ><FaUser />{volunteer.volunteerName} {volunteer.volunteerLastName}</h5>
      <p className="relative z-10 flex items-center gap-2 "><IoIosMail />{volunteer.volunteerEmail}</p>
      <p className="relative z-10 flex items-center gap-2 "><IoTransgender />{volunteer.volunteerGender}</p>
      </div>
    </div>
  ))}
</div>
    </>
  )
}
export default CardVolunteer