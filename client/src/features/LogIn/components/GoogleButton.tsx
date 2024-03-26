import { styles } from "../../../style"
import iconGoogle from '../../../../public/iconGoogle.svg'

const GoogleButton = () => {
    return (
        <div className="flex justify-center flex-col w-full">
            <button type="button" className={`${styles.secondaryBtn}`}>
                <img src={iconGoogle} alt="icon-google" className="w-5" />
                Iniciar sesión
            </button>
        </div>
    )
}

export default GoogleButton