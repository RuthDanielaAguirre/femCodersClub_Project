// import React from 'react'
import { ChangeEvent, FormEvent, useState } from 'react';
import SignUpButton from './SignUpButton'
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { User, RegisterDto } from "../../../types/types";
import { register } from '../../../api/registerApi';
import TermsAndConditions from './TermsAndConditions';

const SignUpForm = () => {

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const mutationFn = async ({ name, lastname, email, password }: RegisterDto) => register(name, lastname, gender, phoneNumber, email, password);

    const mutation = useMutation<User, Error, RegisterDto>(
        {
            mutationFn,
            onSuccess: () => {
                // setShowSpiner(false)
                navigate('/');
            },
            onError: (error) => console.error('Error:', error)
        }
    );

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    };

    const onChangeGender= (e: ChangeEvent<HTMLSelectElement>) => {
        setGender(e.target.value);
    };

    const onChangePhoneNumber = (e: ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(e.target.value);
    };

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submit button clicked');
        // setShowSpiner(true);
        mutation.mutate({ name, lastname, gender, phoneNumber, email, password });
    };

    return (
        <>
            <form onSubmit={onSubmit} className="space-y-1" action="#" method="POST dropdown dropdown-end">

                <div>
                    <label htmlFor="name" className="block text-[16px] leading-6 rounded-[8px] text-contrast">Nombre:</label>
                    <div className="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={onChangeName}
                            required
                            className="block w-full h-[36px] rounded-[8px] border-0 py-1.5 text-gray-900 shadow-md shadow-accent/10 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-accent/50 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-[16px] leading-6 rounded-[18px] text-contrast">Apellido:</label>
                    <div className="mt-2">
                        <input
                            id="lastName"
                            name="lastName"
                            type="text"
                            value={lastname}
                            onChange={onChangeLastName}
                            required
                            className="block w-full h-[36px] rounded-[8px] border-0 py-1.5 text-gray-900 shadow-md shadow-accent/10 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-accent/50 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div className='flex gap-4 w-full m-0 p-0'>
                    <div className='w-[260px] h-[100] flex flex-col justify-between'>
                        <label htmlFor="gender" className="block text-[16px] leading-6 rounded-[18px] text-contrast">Género:</label>
                        <select id="gender" onChange={onChangeGender} className="block w-full h-[36px] rounded-[8px] bg-primary border-0 text-gray-600 shadow-md shadow-accent/10 text-[16px] py-0 focus:ring-accent/50 focus:border-accent">
                            <option >- seleccionar -</option>
                            <option value="Femenino">femenino</option>
                            <option value="Masculino">masculino</option>
                            <option value="NoBinario">no binario</option>
                            <option value="PrefieroNoDecir">prefiero no decir</option>
                        </select>
                        {/* <div className="mt-2">
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={lastname}
                                onChange={onChangeLastName}
                                required
                                className="block w-full h-[36px] rounded-[8px] border-0 py-1.5 text-gray-900 shadow-md shadow-accent/10 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-accent/50 sm:text-sm sm:leading-6" />
                        </div> */}
                    </div>

                    <div className='w-full'>
                        <label htmlFor="phone-number" className="block text-[16px] leading-6 rounded-[18px] text-contrast">Núm. de teléfono:</label>
                        <div className="mt-2">
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                value={phoneNumber}
                                onChange={onChangePhoneNumber}
                                required
                                className="block w-full h-[36px] rounded-[8px] border-0 py-1.5 text-gray-900 shadow-md shadow-accent/10 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-accent/50 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-[16px] leading-6 rounded-[18px] text-contrast">Correo:</label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={onChangeEmail}
                            required
                            className="block w-full h-[36px] rounded-[8px] border-0 py-1.5 text-gray-900 shadow-md shadow-accent/10 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-accent/50 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" className="block text-[16px] leading-6 rounded-[18px] text-contrast">Contraseña:</label>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={onChangePassword}
                            required
                            minLength={6} 
                            className="block w-full h-[36px] rounded-[8px] border-0 py-1.5 text-gray-900 shadow-md shadow-accent/10 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-accent/50 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <div>
                    <label htmlFor="password-confirmed" className="block text-[16px] leading-6 rounded-[18px] text-contrast">Confirmar contraseña:</label>
                    <div className="mt-2">
                        <input
                            // id="password"
                            // name="password"
                            type="password"
                            // value={password}
                            // onChange={onChangePassword}
                            required
                            minLength={6} 
                            className="block w-full h-[36px] rounded-[8px] border-0 py-1.5 text-gray-900 shadow-md shadow-accent/10 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-accent/50 sm:text-sm sm:leading-6" />
                    </div>
                </div>

                <TermsAndConditions />

                {/* <div className="flex justify-center flex-col w-full py-[16px]">
                    <button type="submit" className="text-primary bg-tertiary hover:text-contrast hover:bg-contrast/20 focus:ring-4 focus:ring-secondary-300 font-medium rounded-[8px] text-[18px] h-[40px] w-full shadow-lg border-b-2 border-contrast/5 shadow-accent/20 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Regístrarme</button>
                </div> */}
                <div className="py-[16px]">
                    <SignUpButton onSubmit={onSubmit} />
                </div>
            </form>
        </>
    )
}

export default SignUpForm