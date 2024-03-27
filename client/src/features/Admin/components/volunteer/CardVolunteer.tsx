import { useQuery } from "@tanstack/react-query"
import { getVolunteers } from "../../../../api/volunteerApi"


export  const CardVolunteer = () => {

  const {data} = useQuery(
    {
    queryKey:['volunteers'],
    queryFn: getVolunteers
  })
  console.log(data)
  return (
    <>
      <div className="bg-white flex ">
      {data?.map((volunteer) => (
        <div key={volunteer.idVolunteer} className="flex flex-col m-4 max-m-[24rem] overflow-hidden bg-red">
          <h2>{volunteer.volunteerName} {volunteer.volunteerLastName}</h2>
          <p> {volunteer.volunteerEmail}</p>
          <p> {volunteer.volunteerGender}</p>
        </div>
      ))}
    </div>
    </>
  )
}
export default CardVolunteer