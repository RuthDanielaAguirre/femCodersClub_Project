import { useState } from 'react';
import axios from 'axios';
import { styles } from "../../../../style";
import SpinerModal from '../../../../components/SpinnerModal';

interface DeleteFaqFormProps {
    idFaq: number | undefined; 
}

const DeleteFaqModal = ({ idFaq }: DeleteFaqFormProps) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (idFaq === undefined) {
            console.error('La pregunta no existe');
            return; 
        }

        try {
            setIsDeleting(true);
            await axios.delete(`${import.meta.env.VITE_API_URL}/faq/${idFaq}`);
        } catch (error: unknown) { 
            console.error('Error al eliminar la pregunta frecuente:', error); 
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="flex flex-col gap-5 rounded-[16px] z-[10] bg-primary p-10">
        <h1 className="text-contrast text-xl font-semibold ">¿Estas segura que deseas borrar este registro?</h1>
        <p className="text-contrast">Haz click en aceptar para borrar el registro de forma permanente.</p>
        <button onClick={handleDelete} className={`${styles.cancelModalBtn} w-[200px] self-center`}>
            Aceptar
        </button>
        <SpinerModal isVisible={isDeleting} />
    </div>
    );
};

export default DeleteFaqModal;