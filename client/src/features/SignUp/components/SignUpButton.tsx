import { styles } from "../../../style"

const SignUpButton = ({onSubmit}) => {
    return (
        <div className="flex justify-center flex-col w-full">
            <button type="submit" aria-label="signUpBtn" onSubmit={onSubmit} className={`${styles.primaryBtn}`}>Regístrarme</button>
        </div>
    )
    }

export default SignUpButton