import { useContext, useEffect, useState } from "react";
import { VolunteerContext } from "../../../../hooks/useVolunteerContext";
import { deleteVolunteer } from "../../../../api/volunteerApi";
import { DeleteVolunteerData, Volunteer } from "../../../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { styles } from "../../../../style";
import SpinerModal from "../../../../components/SpinnerModal";

const DeleteVolunteer = () => {
  const [idVolunteer,setIdVolunteer] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const volunteer = useContext(VolunteerContext);

  useEffect(()=>{
    if(volunteer !== undefined && volunteer?.idVolunteer !== undefined){
      setIdVolunteer(volunteer.idVolunteer);
    }
  }, []);

  const mutationFn = async ({idVolunteer}: DeleteVolunteerData) => deleteVolunteer(idVolunteer);

  const queryClient = useQueryClient();

  const mutation = useMutation<Volunteer, Error, DeleteVolunteerData>(
    {
      mutationFn,
      onSuccess: async () =>{
        queryClient.invalidateQueries();
        await queryClient.refetchQueries();
        setLoading(false);
      },
      onError: (error) => console.error('Error', error),
    }
  )

  const handleClick = () =>{
    mutation.mutate({idVolunteer});
    setLoading(true);
  }
  return (
    <>
      <div className="flex flex-col gap-5 rounded-[16px] z-[10] bg-primary p-10">
            <h1 className="text-contrast text-xl font-semibold ">¿Estás segura que deseas borrar este registro?</h1>
            <p className="text-contrast">Haz click en aceptar para borrar el registro de forma permanente.</p>
            <button onClick={handleClick} className={`${styles.cancelModalBtn} w-[200px] self-center`}>
                Aceptar
            </button>
            <SpinerModal isVisible={loading} />
        </div>
    </>
  )
}

export default DeleteVolunteer;