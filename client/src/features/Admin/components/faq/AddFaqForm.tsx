import { SubmitHandler, useForm } from "react-hook-form";
import { styles } from "../../../../style";
import { useMutation,  } from "@tanstack/react-query"; 
import { addFaq } from "../../../../api/faqApi";
import { AddFaqFormData, Faq } from "../../../../types/types";

const AddFaqForm = () => {
    const { register, handleSubmit, formState: { isSubmitting } } = useForm<AddFaqFormData>();

    const mutationFn = async ({ faqQuestion, faqAnswer }: AddFaqFormData) => addFaq(faqQuestion, faqAnswer);

    const mutation = useMutation<Faq, Error, AddFaqFormData >(
        {
            mutationFn,
            onSuccess: () => {
            },
            onError: (error) => console.error('Error:', error),
        }
    );

    const onSubmit: SubmitHandler<AddFaqFormData> = async (data) => {
        console.log(data);
        const faqQuestion = data.faqQuestion;
        const faqAnswer = data.faqAnswer;

        mutation.mutate({faqQuestion, faqAnswer});
    }

    return (
        <div className="z-[10]">
            <h1 className={`${styles.heading4} mb-8`}>Agrega la pregunta frecuente:</h1>
            <div className="z-[10] flex flex-col content-end bg-primary rounded-[24px]">
            <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="flex flex-col bg-secondary/80 w-full h-fit rounded-[24px] p-8">
                <label htmlFor="question" className={`${styles.label2}`}>Pregunta:</label>
                <input 
                    {...register('faqQuestion')}
                    type="text"
                    aria-label='question'
                    className={`${styles.input} mt-1 mb-4`} 
                />
                
                <label htmlFor="answer"  className={`${styles.label2}`}>Respuesta:</label>
                <input 
                    {...register('faqAnswer')}
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
        </div>
    )
}

export default AddFaqForm;