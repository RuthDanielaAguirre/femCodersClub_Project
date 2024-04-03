import { useState } from 'react';
import axios from 'axios';
import { styles } from "../../../../style";

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
                {isDeleting ? 'Borrando...' : 'Borrar'}
            </button>
        </div>
    );
};

export default DeleteFaqModal;