import { styles } from "../../../style"

const SignUpButton = ({onSubmit, disabled}) => {
    return (
        <div className="flex justify-center flex-col w-full">
            <button type="submit" aria-label="signUpBtn" onSubmit={onSubmit} className={`${styles.primaryBtn}`}>
                {
                    disabled ? 'Cargando...' : 'Regístrarme'
                }
                </button>
        </div>
    )
    }

export default SignUpButton