import { SubmitHandler, useForm } from "react-hook-form"
import { styles } from "../../../../style"
import { AddSponsorFormData, Sponsor } from "../../../../types/types"
import { useMutation } from "@tanstack/react-query"
import { addSponsor } from "../../../../api/sponsorApi"

const AddSponsorForm = () => {

    const {register, handleSubmit, formState: { isSubmitting }} = useForm<AddSponsorFormData>()

    const mutationFn = async ({ sponsorsName, sponsorsCompany, sponsorsEmail, sponsorsTelephone }: AddSponsorFormData) => addSponsor(sponsorsName, sponsorsCompany, sponsorsEmail, sponsorsTelephone);

    const mutation = useMutation<Sponsor, Error, AddSponsorFormData>(
        {
            mutationFn,
            onSuccess: () => {
                // navigate('/');
            },
            onError: (error) => console.error('Error:', error),
        }
    );

    const onSubmit: SubmitHandler<AddSponsorFormData> = async (data) => {

        console.log(data);

        const sponsorsName = data.sponsorsName;
        const sponsorsCompany = data.sponsorsCompany;
        const sponsorsEmail = data.sponsorsEmail;
        const sponsorsTelephone = data.sponsorsTelephone;

        mutation.mutate({ sponsorsName, sponsorsCompany, sponsorsEmail, sponsorsTelephone });
    }

    return (
        <div className="z-[10]">
        <h1 className={`${styles.heading4} mb-8 pl-4`}>LLena el formulario para agregar Sponsor</h1>
        <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="flex flex-col bg-accent/90 w-full h-fit rounded-[24px] p-8">
            <label htmlFor="name" className={`${styles.label2}`}>Nombre del sponsor:</label>
            <input 
                {...register('sponsorsName')}
                type="text"
                aria-label='name'
                className={`${styles.input} mt-1 mb-4`} 
            />
            
            <label htmlFor="company"  className={`${styles.label2}`}>Entidad a la que pertenece:</label>
            <input 
                {...register('sponsorsCompany')}
                type="text" 
                className={`${styles.input} mt-1 mb-4`}
            />

            <label htmlFor="email"  className={`${styles.label2}`}>Correo:</label>
            <input
                {...register('sponsorsEmail')}
                type="text"
                className={`${styles.input} mt-1 mb-4`}
            />

            <label htmlFor="phone"  className={`${styles.label2}`}>Núm de teléfono:</label>
            <input 
                {...register('sponsorsTelephone')}
                type="text" 
                className={`${styles.input} mt-1 mb-4`}
            />

            <div className="flex w-full justify-center mt-5 gap-2">
                <button disabled={isSubmitting} onSubmit={handleSubmit(onSubmit)} className={`${styles.primaryBtn} w-[200px]`}>
                    {
                        isSubmitting? 'Cargando...' : 'Guardar'
                    }
                </button>
            </div>
        </form>
        </div>
    )
}

export default AddSponsorForm