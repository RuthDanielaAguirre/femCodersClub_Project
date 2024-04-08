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
         setLoading(false);
         setShowMessage(true);
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
       setLoading(true);
  
    }

  return (
   <> 
   {showMessage? (

    <div className="bg-primary z-[1] py-20 rounded-[24px]">
      <h1 className="text-center text-xl font-semibold text-contrast">Voluntario agregado con exito</h1>
    </div>
   ):(
    <> 
    <h1 className={`${styles.heading4} mb-8 pl-4 z-[10]`}>Agrega un voluntario:</h1>
      <div className="z-10 flex flex-col content-end bg-primary rounded-[24px]  "> 
        <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="flex flex-col bg-accent/90 w-full h-fit rounded-[24px] p-8">
          <label htmlFor="name" className={`${styles.label2}`}>Nombre:</label >
          <input {...register('volunteerName')} type="text" aria-label="name" className={`${styles.input}`} />

          <label htmlFor="lastName" className={`${styles.label2}`}>Apellido/s:</label>
          <input {...register('volunteerLastName')} type="text" className={`${styles.input} mt-1 mb-4`}  />

          <label htmlFor="email" className={`${styles.label2}`}>Correo Electrónico:</label>
          <input {...register('volunteerEmail')} type="text" className={`${styles.input} mt-1 mb-4`} />

          <label htmlFor="gender" className={`${styles.label2}`}>Género:</label>
          <select {...register('volunteerGender')} name="SelectedGender" id="gender" className={`${styles.input}`}>
            <option value="#">Selecciona una opción</option>
            <option value="Mujer">Mujer</option>
            <option value="Hombre">Hombre</option>
            <option value="No binario">No Binario</option>
            <option value="no-option">Prefiero no decirlo</option>
            <option value="Otro">Otro</option>
          </select>
  
          <div className="flex w-full justify-center mt-5 gap-2">
                    <button disabled={isSubmitting} onSubmit={handleSubmit(onSubmit)} className={`${styles.primaryBtn} w-[200px]`}>
                        {
                            isSubmitting? 'Cargando...' : 'Guardar'
                        }
                    </button>
                </div>
        </form> 
      </div> 
      <SpinerModal isVisible={loading} /> 
      </>
     
   )}
   </>
  )
}
