import { Link } from "react-router-dom"
import SignUpForm from "../components/SignUpForm"
import FormHeader from "./FormHeader"
import GoogleButton from "./GoogleButton"

const SignUpPage = () => {
    return (
        <div className="flex-wrap z-[10] w-[550px] flex justify-center rounded-[24px] border-accent/10 border-2 bg-primary">
            <div className="flex-1 flex-col justify-center my-[25px] w-full rounded-[10px]">
                <FormHeader />
                <div className="mt-2 lg:px-[32px] px-5 w-full">
                    <SignUpForm /> 
                    <p className="w-full text-center mb-2">- ó -</p>
                    <GoogleButton />
                    <p className="mt-4 text-end text-sm text-contrast/70">
                        ¿Ya tienes cuenta? <a href="#" className="font-bold leading-6 text-tertiary hover:text-contrast/80 text-[16px]"><Link to="/login">Iniciar sesión</Link></a>
                    </p>
                </div> 
            </div>
        </div>
    )
}

export default SignUpPage