import { styles } from "../../../style";

type Props = {
    onSubmit: () => void,
    disabled: boolean,
}
const SignUpButton = ({onSubmit, disabled}: Props) => {
    return (
        <div className="flex justify-center flex-col w-full">
            <button type="submit" aria-label="signUpBtn" onSubmit={onSubmit} className={`${styles.primaryBtn}`}>
                {
                    disabled ? 'Loading...' : 'Regístrarme'
                }
                </button>
        </div>
    )
    }

export default SignUpButton