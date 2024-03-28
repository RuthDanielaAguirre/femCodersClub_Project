import { styles } from "../../../../style"
import { EditSponsorFormData, Sponsor } from "../../../../types/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateSponsor } from "../../../../api/sponsorApi"
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react"
import { SponsorContext } from "../../../../hooks/useSponsorContext"

const EditSponsorForm = () => {
    const [sponsorsName, setSponsorsName] = useState('');
	const [sponsorsCompany, setSponsorsCompany] = useState('');
    const [sponsorsTelephone, setSponsorsTelephone] = useState('');
    const [sponsorsEmail, setSponsorsEmail] = useState('');
    const sponsors = useContext(SponsorContext);

    useEffect( () => {
        if(sponsors !== undefined && sponsors?.sponsorsName !== undefined){
            setSponsorsName(sponsors.sponsorsName);
            setSponsorsCompany(sponsors.sponsorsCompany);
            setSponsorsTelephone(sponsors.sponsorsTelephone);
            setSponsorsEmail(sponsors.sponsorsEmail);
        }
    }, []);

    const mutationFn = async ({ idPotential_Sponsors, updatedSponsor:{sponsorsName, sponsorsCompany, sponsorsEmail, sponsorsTelephone} }: EditSponsorFormData) => updateSponsor(idPotential_Sponsors, {sponsorsName, sponsorsCompany, sponsorsEmail, sponsorsTelephone});

    const mutation = useMutation<Sponsor, Error, EditSponsorFormData>(
        {
            mutationFn,
            onSuccess: () => {
                // navigate('/');
            },
            onError: (error) => console.error('Error:', error),
        }
    );

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
		setSponsorsName(e.target.value);
    }

    const onChangeCompany = (e: ChangeEvent<HTMLInputElement>) => {
		setSponsorsCompany(e.target.value);
    }

    const onChangeTelephone = (e: ChangeEvent<HTMLInputElement>) => {
		setSponsorsTelephone(e.target.value);
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setSponsorsEmail(e.target.value);
    }

    const queryClient = useQueryClient();

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
        const idPotential_Sponsors = sponsors.idPotential_Sponsors; 
		mutation.mutate({ idPotential_Sponsors, updatedSponsor:{sponsorsName, sponsorsCompany, sponsorsEmail, sponsorsTelephone} })
        queryClient.invalidateQueries();
		await queryClient.refetchQueries();
    };

    return (
        <div className="z-[2] pl-4">
            <h1 className={`${styles.heading4} mb-8`}>¿Que te gustaria editar?</h1>
            <form onSubmit={onSubmit} action="#" method="POST" className="flex flex-col bg-accent/90 w-full h-fit rounded-[24px] p-8">

                <label htmlFor="name" className={`${styles.label2}`}>Nombre del sponsor:</label>
                <input 
                    onChange={onChangeName}
                    type="text"
                    aria-label='name'
                    value = {sponsorsName}
                    className={`${styles.input} mt-1 mb-4`} 
                />
                
                <label htmlFor="company"  className={`${styles.label2}`}>Entidad a la que pertenece:</label>
                <input 
                    onChange={onChangeCompany}
                    type="text" 
                    value = {sponsorsCompany}
                    className={`${styles.input} mt-1 mb-4`}
                />

                <label htmlFor="email"  className={`${styles.label2}`}>Correo:</label>
                <input
                    onChange={onChangeEmail}
                    type="text"
                    value = {sponsorsEmail}
                    className={`${styles.input} mt-1 mb-4`}
                />

                <label htmlFor="phone"  className={`${styles.label2}`}>Núm de teléfono:</label>
                <input 
                    onChange={onChangeTelephone}
                    type="text" 
                    value = {sponsorsTelephone}
                    className={`${styles.input} mt-1 mb-4`}
                />

                <button type='submit' className={`${styles.primaryBtn} w-[200px] self-center mt-5`}>
                    Guardar
                </button>
            </form>
        </div>
    )
}

export default EditSponsorForm