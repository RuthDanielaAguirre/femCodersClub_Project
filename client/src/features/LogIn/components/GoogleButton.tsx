import { styles } from "../../../style"

const GoogleButton = () => {
    return (
        <div className="flex justify-center flex-col w-full">
            <button type="button" className={`${styles.secondaryBtn}`}>
                <img src="../../../../public/icon-google.svg" alt="icon-google" className="w-5" />
                Iniciar sesión
            </button>
        </div>
    )
}

export default GoogleButton