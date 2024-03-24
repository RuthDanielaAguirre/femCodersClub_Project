import { Link } from 'react-router-dom';
import { styles } from "../../style";

export const ApoyanosButton = () => {
    return (
        <div className="flex justify-center flex-col w-full">
            <Link to="/contacto">
                <div className="w-full px-4 mt-4">
                <button type="button" aria-label="ApoyanosBtn" className={`${styles.primaryBtn}`}>
                    Apóyanos
                </button>
                </div>
            </Link>
        </div>
    )
    }