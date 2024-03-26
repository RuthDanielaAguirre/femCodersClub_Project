import { useState } from 'react';
import axios from 'axios';
import { styles } from "../../../../style";

interface DeleteFaqFormProps {
    idFaq: number | undefined; // Cambiado a número o undefined
}

const DeleteFaqModal = ({ idFaq }: DeleteFaqFormProps) => {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (idFaq === undefined) {
            console.error('El ID de la pregunta frecuente es undefined');
            return; // Detener la ejecución si id es undefined
        }

        try {
            setIsDeleting(true);
            await axios.delete(`https://femcodersclub-project.onrender.com/faq/${idFaq}`);
        } catch (error: unknown) { 
            console.error('Error al eliminar la pregunta frecuente:', error); 
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <div className="z-[10]">
            <h1 className={`${styles.heading4} mb-8`}>Eliminar Pregunta Frecuente</h1>
            <button onClick={handleDelete} disabled={isDeleting} className={`${styles.secondaryBtn} w-[200px]`}>
                {isDeleting ? 'Eliminando...' : 'Eliminar'}
            </button>
        </div>
    );
};

export default DeleteFaqModal;