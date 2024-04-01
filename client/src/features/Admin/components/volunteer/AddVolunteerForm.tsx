import { SubmitHandler, useForm } from "react-hook-form"
import { AddVolunteerData, Volunteer } from "../../../../types/types"
import { addVolunteer } from "../../../../api/volunteerApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { styles } from "../../../../style";
import { useState } from "react";
import SpinerModal from "../../../../components/SpinnerModal";

export const AddVolunteerForm = () => {

    const [loading, setLoading]= useState<boolean>(false);
    const [showMessage, setShowMessage] = useState<boolean>(false);
    const {register, handleSubmit, formState: {isSubmitting}}= useForm<AddVolunteerData>();

    const mutationFn = async ({volunteerName, volunteerLastName, volunteerEmail, volunteerGender}: AddVolunteerData) => addVolunteer(volunteerName, volunteerLastName, volunteerEmail, volunteerGender);

    const queryClient = useQueryClient();
    const mutation = useMutation<Volunteer, Error, AddVolunteerData>({
      mutationFn, 
      onSuccess: async () =>{
        queryClient.invalidateQueries();
        await queryClient.refetchQueries();
        // setLoading(false);
        // setShowMessage(true);
        console.log(mutation)
      }, 
      onError: (error) => console.log('Error', error)
    })

    const onSubmit: SubmitHandler<AddVolunteerData>= async (data) =>{  
      console.log(data)
      const volunteerName = data.volunteerName;
      const volunteerLastName= data.volunteerLastName;
      const volunteerEmail= data.volunteerEmail;
      const volunteerGender= data.volunteerGender;
     
      mutation.mutate({volunteerName, volunteerLastName, volunteerEmail, volunteerGender});
      // setLoading(true);
  
    }

  return (
   <> 
   {/* {showMessage? (

    <div>
      <h1>Voluntario agregado con exito</h1>
    </div>
   ):( */}
    <>
      <div className="z-10">
        <h1>Agrega un voluntario:</h1>
        <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST">
          <label htmlFor="name">Nombre:</label>
          <input {...register('volunteerName')} type="text" aria-label="name" className={`${styles.input}`} />

          <label htmlFor="lastName">Apellido/s:</label>
          <input {...register('volunteerLastName')} type="text" />

          <label htmlFor="email">Correo Electrónico:</label>
          <input {...register('volunteerEmail')} type="text" />

          <label htmlFor="gender">Género:</label>
          <select {...register('volunteerGender')} name="SelectedGender" id="gender">
            <option value="Mujer">Mujer</option>
            <option value="Hombre">Hombre</option>
            <option value="No binario">No Binario</option>
            <option value="no-option">Prefiero no decirlo</option>
            <option value="Otro">Otro</option>
          </select>
          {/* <input {...register('volunteerGender')} type="text"  /> */}
          <div>
            <button disabled={isSubmitting} onSubmit={handleSubmit(onSubmit)} className={`${styles.primaryBtn}`}>
              {
                isSubmitting ? 'Cargando...' : 'Guardar'
              }
            </button>
          </div>
        </form> 
      </div> 
      {/* <SpinerModal isVisible={loading} />  */}
      </>
     
   {/* )} */}
   </>
  )
}
