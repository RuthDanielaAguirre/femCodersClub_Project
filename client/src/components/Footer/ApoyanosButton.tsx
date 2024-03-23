import { Link } from 'react-router-dom';
import { styles } from "../../style";

export const ApoyanosButton = () => {
    return (
        <div className="flex justify-center flex-col w-full">
            <Link to="/contacto">
                <button type="button" aria-label="ApoyanosBtn" className={`${styles.primaryBtn} text-[8px] h-[20px]`}>
                    Apóyanos
                </button>
            </Link>
        </div>
    )
    }