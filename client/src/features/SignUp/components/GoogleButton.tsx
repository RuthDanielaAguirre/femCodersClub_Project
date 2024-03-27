import { styles } from "../../../style";
import iconGoogle from '../../../../public/iconGoogle.svg'

const GoogleButton = () => {
    
    return (
        <div className="flex justify-center flex-col w-full">
            <a href="https://femcodersclub-project.onrender.com/auth/google/login">
                <button type="button" className={`${styles.secondaryBtn}`}>
                    <img src={iconGoogle} alt="icon-google" className="w-5" />
                    Registrarme con Google
                </button>
            </a>
        </div>
    )
}

export default GoogleButton