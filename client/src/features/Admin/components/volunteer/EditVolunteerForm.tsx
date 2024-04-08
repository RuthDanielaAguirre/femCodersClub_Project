import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { VolunteerContext } from "../../../../hooks/useVolunteerContext";
import { updateVolunteer } from "../../../../api/volunteerApi";
import { EditVolunteerData, Volunteer } from "../../../../types/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { styles } from "../../../../style";
import SpinerModal from "../../../../components/SpinnerModal";

export const EditVolunteerForm = () => {
  const [volunteerName, setVolunteerName] = useState('');
  const [volunteerLastName, setVolunteerLastName] = useState('');
  const [volunteerEmail, setVolunteerEmail] = useState('');
  const [volunteerGender, setVolunteerGender] = useState('');
  const volunteer = useContext(VolunteerContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  useEffect(() => {
    if (volunteer !== undefined && volunteer?.volunteerName !== undefined) {
      setVolunteerName(volunteer.volunteerName);
      setVolunteerLastName(volunteer.volunteerLastName);
      setVolunteerEmail(volunteer.volunteerEmail);
      setVolunteerGender(volunteer.volunteerGender);
    }
  }, []);

  const mutationFn = async ({ idVolunteer, updatedVolunteer: { volunteerName, volunteerLastName, volunteerEmail, volunteerGender } }: EditVolunteerData) => updateVolunteer(idVolunteer, { volunteerName, volunteerLastName, volunteerEmail, volunteerGender });

  const queryClient = useQueryClient();
  const mutation = useMutation<Volunteer, Error, EditVolunteerData>({
    mutationFn,
    onSuccess: async () => {
      queryClient.invalidateQueries();
      await queryClient.refetchQueries();
      setLoading(false);
      setShowMessage(true);
    },
    onError: (error) => console.error('Error', error),
  })

  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setVolunteerName(e.target.value);
  }

  const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setVolunteerLastName(e.target.value);
  }

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setVolunteerEmail(e.target.value);
  }

  const onChangeGender = (e: ChangeEvent<HTMLSelectElement>) => {
    setVolunteerGender(e.target.value);
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const idVolunteer = volunteer.idVolunteer;
    mutation.mutate({ idVolunteer, updatedVolunteer: { volunteerName, volunteerLastName, volunteerEmail, volunteerGender } });
    setLoading(true);
  }
  return (
    <>
      {showMessage ? (
        <div className="bg-primary z-[1] py-20 rounded-[24px]">
          <h1 className="text-center text-xl font-semibold text-contrast">Voluntario editado con exito!</h1>
        </div>
      ) : (
        <>
          <h1 className={`${styles.heading4} mb-8 z-[10]`} >¿Qué te gustaría editar?</h1>
          <div className="z-[10] flex flex-col content-end bg-primary rounded-[24px]">
            <form action="" onSubmit={onSubmit} className="flex flex-col bg-secondary/80 w-full h-fit rounded-[24px] p-8">

              <label htmlFor="name" className={`${styles.label2}`}>Nombre:</label>
              <input
                onChange={onChangeName}
                type="text"
                aria-label='name'
                value={volunteerName}
                className={`${styles.input} mt-1 mb-4`}
              />

              <label htmlFor="last name" className={`${styles.label2}`}>Apellido/s:</label>
              <input
                onChange={onChangeLastName}
                type="text"
                value={volunteerLastName}
                className={`${styles.input} mt-1 mb-4`}
              />

              <label htmlFor="email" className={`${styles.label2}`}>Correo Electrónico:</label>
              <input
                onChange={onChangeEmail}
                type="text"
                value={volunteerEmail}
                className={`${styles.input} mt-1 mb-4`}
              />

              <label htmlFor="gender" className={`${styles.label2}`}>Género</label>
              <select
                onChange={onChangeGender}
                value={volunteerGender}
                className={`${styles.input} mt-1 mb-4`}
              >
                <option value="Mujer">Mujer</option>
            <option value="Hombre">Hombre</option>
            <option value="No binario">No Binario</option>
            <option value="Prefiero no decirlo">Prefiero no decirlo</option>
            <option value="Otro">Otro</option>
              </select>

              <button type='submit' className={`${styles.primaryBtn} w-[200px] self-center mt-5`}>
                Guardar
              </button>
            </form>
          </div>
          <SpinerModal isVisible={loading} />
        </>
      )}
    </>
  )
}
