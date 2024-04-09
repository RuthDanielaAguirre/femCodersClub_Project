import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { styles } from "../../../../style";

interface FaqData {
    idFaq: number;
    faqAnswer: string;
    faqQuestion: string;
}

interface EditFaqFormProps {
    idFaq: number | undefined;
}

const EditFaqModal = ({ idFaq }: EditFaqFormProps) => {
    const { register, handleSubmit, setValue } = useForm<FaqData>();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isModalOpen] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<FaqData>(`${import.meta.env.VITE_API_URL}/faq/${idFaq}`);
                const faqData = response.data;
                setValue('idFaq', faqData.idFaq);
                setValue('faqQuestion', faqData.faqQuestion);
                setValue('faqAnswer', faqData.faqAnswer);
            } catch (error) {
                console.error('Error al obtener la pregunta frecuente:', error);
            }
        };

        if (idFaq !== undefined) {
            fetchData();
        }
    }, [idFaq, setValue]);

    const onSubmit = async (data: FaqData) => {
        setIsSubmitting(true);
        try {
            await axios.put(`https://femcodersclub-project.onrender.com/faq/${data.idFaq}`, data);
        } catch (error) {
            console.error('Error al editar la pregunta frecuente:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {isModalOpen && (
                <div className="z-[10]">
                    <h1 className={`${styles.heading4} mb-8`}>Edita la pregunta frecuente</h1>
                    <div className="z-[10] flex flex-col content-end bg-primary rounded-[24px]">
                        <form onSubmit={handleSubmit(onSubmit)} action="#" method="PUT" className="flex flex-col bg-secondary/80 w-full h-fit rounded-[24px] p-8">
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

                            <input 
                                type="hidden" 
                                {...register('idFaq')}
                            />

                            <div className="flex w-full justify-center mt-5 gap-2">
                                <button disabled={isSubmitting} className={`${styles.primaryBtn} w-[200px]`}>
                                    {isSubmitting? 'Cargando...' : 'Guardar'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default EditFaqModal;