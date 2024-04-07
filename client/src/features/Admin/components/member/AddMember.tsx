import { SubmitHandler, useForm } from "react-hook-form"
import { styles } from "../../../../style"

import { useMutation, useQueryClient } from "@tanstack/react-query"


import { useState } from "react"
import SpinerModal from "../../../../components/SpinnerModal"
import { addMember } from "../../../../api/memberApi"
import { AddMemberFormData, Member } from "../../../../types/types"

const AddMember = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [showMessage, setShowMessage] = useState<boolean>(false);
    
    const {register, handleSubmit, formState: { isSubmitting }} = useForm<AddMemberFormData>()
    
    const mutationFn = async ({ memberName, memberLastName, memberDescription, memberRole, memberImage, memberLinkedin }: AddMemberFormData) => addMember(memberName, memberLastName,memberDescription, memberRole, memberImage, memberLinkedin);
    
    const queryClient = useQueryClient();
    
    const mutation = useMutation<Member, Error, AddMemberFormData>(
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

    const onSubmit: SubmitHandler<AddMemberFormData> = async (data) => {
        const memberName = data.memberName;
        const memberLastName = data.memberLastName;
        const memberDescription = data.memberDescription;
        const memberRole = data.memberRole;
        const memberImage = data.memberImage;
        const memberLinkedin = data.memberLinkedin;

        mutation.mutate({ memberName, memberLastName, memberDescription, memberRole, memberImage, memberLinkedin });
    
        setLoading(true);
    }

    return (
            <>
            {showMessage ? (
                <div className="bg-primary z-[1] py-20 rounded-[24px]">
                    <h1 className="text-center text-xl font-semibold text-contrast">Integrante agregada con exito!</h1>
                </div>
            ):(
                <>
                <h1 className={`${styles.heading4} mb-8 pl-4 z-[10]`}>LLena el formulario para agregar Integrante</h1>
                <div className="z-[10] flex flex-col content-end bg-primary rounded-[24px]">
                <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="flex flex-col bg-accent/90 w-full h-fit rounded-[24px] p-8">
                    <label htmlFor="name" className={`${styles.label2}`}>Nombre:</label>
                    <input 
                        {...register('memberName')}
                        type="text"
                        aria-label='name'
                        className={`${styles.input} mt-1 mb-4`} 
                    />
                    
                    <label htmlFor="lastName"  className={`${styles.label2}`}>Apellido:</label>
                    <input 
                        {...register('memberLastName')}
                        type="text" 
                        className={`${styles.input} mt-1 mb-4`}
                    />

                    <label htmlFor="description"  className={`${styles.label2}`}>Descripción:</label>
                    <input
                        {...register('memberDescription')}
                        type="text"
                        className={`${styles.input} mt-1 mb-4`}
                    />

                    <label htmlFor="role"  className={`${styles.label2}`}>Rol que desempeña:</label>
                    <input 
                        {...register('memberRole')}
                        type="text" 
                        className={`${styles.input} mt-1 mb-4`}
                    />

                    <label htmlFor="image"  className={`${styles.label2}`}>URL de la imagen</label>
                    <input 
                        {...register('memberImage')}
                        type="text" 
                        className={`${styles.input} mt-1 mb-4`}
                    />

                    <label htmlFor="Linkedin"  className={`${styles.label2}`}>URL del Linkedin</label>
                    <input 
                        {...register('memberLinkedin')}
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

export default AddMember