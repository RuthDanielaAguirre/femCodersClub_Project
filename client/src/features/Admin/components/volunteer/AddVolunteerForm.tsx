import { SubmitHandler, useForm } from "react-hook-form"
import { AddVolunteerData, Volunteer } from "../../../../types/types"
import { addVolunteer } from "../../../../api/volunteerApi";
import { useMutation } from "@tanstack/react-query";
import { styles } from "../../../../style";

export const AddVolunteerForm = () => {
    const {register, handleSubmit, formState: {isSubmitting}}= useForm<AddVolunteerData>();

    const mutationFn = async ({volunteersName, volunteersLastname, volunteersEmail, volunteersGender}: AddVolunteerData) => addVolunteer(volunteersName, volunteersLastname, volunteersEmail, volunteersGender);

    const mutation = useMutation<Volunteer, Error, AddVolunteerData>({
      mutationFn, 
      onSuccess: () =>{
        
      }, 
      onError: (error) => console.log('Error', error)
    })

    const onSubmit: SubmitHandler<AddVolunteerData>= async(data) =>{
      const volunteersName = data.volunteersName;
      const volunteersLastname= data.volunteersLastname;
      const volunteersEmail= data.volunteersEmail;
      const volunteersGender= data.volunteersGender;

      mutation.mutate({volunteersName, volunteersLastname, volunteersEmail, volunteersGender})
    }

  return (
   <>
      <div className="z-10">
        <h1>Agrega un voluntario:</h1>
        <form action="#">
          <label htmlFor="name">Nombre:</label>
          <input {...register('volunteersName')} type="text" aria-label="name" className={`${styles.input}`} />

          <label htmlFor="lastName">Apellido/s:</label>
          <input {...register('volunteersLastname')} type="text" />

          <label htmlFor="email">Correo Electrónico:</label>
          <input {...register('volunteersEmail')} type="text" />

          <label htmlFor="gender">Género:</label>
          <select {...register('volunteersGender')} name="SelectedGender" id="gender">
            <option value="mujer">Mujer</option>
            <option value="hombre">Hombre</option>
            <option value="nobinario">No Binario</option>
            <option value="no-option">Prefiero no decirlo</option>
            <option value="otro">Otro</option>
          </select>
          <div>
            <button disabled={isSubmitting} onSubmit={handleSubmit(onSubmit)} className={`${styles.primaryBtn}`}>
              {
                isSubmitting ? 'Cargando...' : 'Guardar'
              }
            </button>
          </div>
        </form>
      </div>
   </>
  )
}
