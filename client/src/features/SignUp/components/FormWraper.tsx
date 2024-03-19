// import React from 'react'

import SignUpForm from "../components/SignUpForm"
import FormHeader from "./FormHeader"
import GoogleButton from "./GoogleButton"

const SignUpPage = () => {
    return (
        <div className="flex-wrap max-w-[550px] flex justify-center rounded-[24px] dropdown border-accent/10 border-2">
            <div className="flex-1 flex-col justify-center w-[520px] my-[25px] rounded-[10px]">
                <FormHeader />
                <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
                    <SignUpForm /> 
                    <p className="w-full text-center mb-2">- ó -</p>
                    <GoogleButton />
                    <p className="mt-4 text-end text-sm text-contrast/70">
                        ¿Ya tienes cuenta? <a href="#" className="font-semibold leading-6 text-tertiary hover:text-[#fd8c82]">Iniciar sesión</a>
                    </p>
                </div> 
            </div>
        </div>
    )
}

export default SignUpPage