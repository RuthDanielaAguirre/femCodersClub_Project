import { SubmitHandler, useForm } from "react-hook-form"
import { styles } from "../../../../style"
import { AddSponsorFormData, Sponsor } from "../../../../types/types"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addSponsor } from "../../../../api/sponsorApi"

import { useState } from "react"
import SpinerModal from "../../../../components/SpinnerModal"

const AddSponsorForm = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [showMessage, setShowMessage] = useState<boolean>(false);
    
    const {register, handleSubmit, formState: { isSubmitting }} = useForm<AddSponsorFormData>()
    
    const mutationFn = async ({ sponsorsName, sponsorsCompany, sponsorsEmail, sponsorsTelephone }: AddSponsorFormData) => addSponsor(sponsorsName, sponsorsCompany, sponsorsEmail, sponsorsTelephone);
    
    const queryClient = useQueryClient();
    
    const mutation = useMutation<Sponsor, Error, AddSponsorFormData>(
        {
            mutationFn,
            onSuccess: async () => {
                queryClient.invalidateQueries();
                await queryClient.refetchQueries();
                setLoading(false);
                setShowMessage(true);
            },
            onError: (error) => console.error('Error:', error),
        }
    );

    const onSubmit: SubmitHandler<AddSponsorFormData> = async (data) => {
        const sponsorsName = data.sponsorsName;
        const sponsorsCompany = data.sponsorsCompany;
        const sponsorsEmail = data.sponsorsEmail;
        const sponsorsTelephone = data.sponsorsTelephone;

        mutation.mutate({ sponsorsName, sponsorsCompany, sponsorsEmail, sponsorsTelephone });
    
        setLoading(true);
    }

    return (
            <>
            {showMessage ? (
                <div className="bg-primary z-[1] py-20 rounded-[24px]">
                    <h1 className="text-center text-xl font-semibold text-contrast">¡Sponsor agregado con exito!</h1>
                </div>
            ):(
                <>
                <h1 className={`${styles.heading4} mb-8 pl-4 z-[10]`}>LLena el formulario para agregar un Sponsor</h1>
                <div className="z-[10] flex flex-col content-end bg-primary rounded-[24px]">
                <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="flex flex-col bg-secondary/80 w-full h-fit rounded-[24px] p-8">
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
                <SpinerModal isVisible={loading} />
                </>
            )}
            </>
    )
}

export default AddSponsorForm