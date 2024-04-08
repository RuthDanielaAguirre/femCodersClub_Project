import { Link } from 'react-router-dom';
import { styles } from "../../style";

export const ApoyanosButton = () => {
    return (
        <div className="flex justify-center items-center md:items-end flex-col w-full  ">
            <Link to="/contacto">
                <div className="w-full   ">
                <button type="button" aria-label="ApoyanosBtn" className={`${styles.primaryBtn} w-[180px] w-[210px] h-[35px] mb-4`}>
                    Apóyanos
                </button>
                </div>
            </Link>
        </div>
    )
    }