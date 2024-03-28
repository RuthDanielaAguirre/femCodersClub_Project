import { useForm } from "react-hook-form"
import { AddVolunteerData } from "../../../../types/types"

export const AddVolunteerForm = () => {
    const {register, handleSubmit, formState: {isSubmitting}}= useForm<AddVolunteerData>();

   // const mutationFn = async ({volunteersNm})

  return (
    <div>AddVolunteerForm</div>
  )
}
