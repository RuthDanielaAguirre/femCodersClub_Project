import React from 'react'
import { ChangeEvent, FormEvent, useState } from 'react';
import SignUpButton from './SignUpButton'
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { User, RegisterDto, SignUpFormData } from "../../../types/types";
import {    registerUser } from '../../../api/registerApi';
import TermsAndConditions from './TermsAndConditions';
import { styles } from '../../../style';

import { z, ZodType} from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

const SignUpForm = () => {

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();

    const schema: ZodType<SignUpFormData> = z.object({
        name: z.string().min(2).max(30),
        lastName: z.string().min(2).max(30),
        phoneNumber: z.string().min(10).max(13),
        email: z.string().email(),
        password: z.string().min(5).max(20),
        confirmPassword: z.string().min(5).max(20),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "las contraseñas no cohinciden",
        path: ["confirmPassword"],
    });

    const {register, handleSubmit} = useForm<SignUpFormData>({resolver: zodResolver(schema)})

    const mutationFn = async ({ name, lastname, email, password }: RegisterDto) => registerUser(name, lastname, gender, phoneNumber, email, password);

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

    const prueba = async (data: SignUpFormData) => {
        console.log(data);
        mutation.mutate({ name, lastname, gender, phoneNumber, email, password });
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submit button clicked');
        // setShowSpiner(true);
        // mutation.mutate({ name, lastname, gender, phoneNumber, email, password });
        handleSubmit(prueba)(e);
    };

    return (
        <>
            <form onSubmit={onSubmit} className="space-y-1" action="#" method="POST dropdown dropdown-end">

                <div>
                    <label htmlFor="name" role='label' aria-label='name' className={`${styles.label}`}>Nombre:</label>
                    <div className="mt-2">
                        <input
                            id="name"
                            {...register('name')}
                            name="name"
                            type="text"
                            value={name}
                            onChange={onChangeName}
                            required
                            className={`${styles.input}`} />
                    </div>
                </div>

                <div>
                    <label htmlFor="lastName" role='label' aria-label='lastName' className={`${styles.label}`}>Apellido:</label>
                    <div className="mt-2">
                        <input
                            id="lastName"
                            {...register('lastName')}
                            name="lastName"
                            type="text"
                            value={lastname}
                            onChange={onChangeLastName}
                            required
                            className={`${styles.input}`} />
                    </div>
                </div>

                <div className='flex gap-4 w-full m-0 p-0'>
                    <div className='w-[260px] h-[100] flex flex-col justify-between'>
                        <label htmlFor="gender" className={`${styles.label}`}>Género:</label>
                        <select id="gender" onChange={onChangeGender} className="block w-full h-[36px] rounded-[8px] bg-primary border-0 text-gray-600 shadow-md shadow-accent/10 text-[16px] py-0 focus:ring-accent/50 focus:border-accent">
                            <option >- seleccionar -</option>
                            <option value="Femenino">femenino</option>
                            <option value="Masculino">masculino</option>
                            <option value="NoBinario">no binario</option>
                            <option value="PrefieroNoDecir">prefiero no decir</option>
                        </select>
                    </div>

                    <div className='w-full'>
                        <label htmlFor="phone-number" role='label' aria-label='phone' className={`${styles.label}`}>Núm. de teléfono:</label>
                        <div className="mt-2">
                            <input
                                id="phoneNumber"
                                {...register('phoneNumber')}
                                name="phoneNumber"
                                type="text"
                                value={phoneNumber}
                                onChange={onChangePhoneNumber}
                                required
                                className={`${styles.input}`} />
                        </div>
                    </div>
                </div>

                <div>
                    <label htmlFor="email" role='label' aria-label='email' className={`${styles.label}`}>Correo:</label>
                    <div className="mt-2">
                        <input
                            id="email"
                            {...register('email')}
                            name="email"
                            type="email"
                            value={email}
                            onChange={onChangeEmail}
                            required
                            className={`${styles.input}`} />
                    </div>
                </div>

                <div>
                    <label htmlFor="password" role='label' aria-label='password' className={`${styles.label}`}>Contraseña:</label>
                    <div className="mt-2">
                        <input
                            id="password"
                            {...register('password')}
                            name="password"
                            type="password"
                            value={password}
                            onChange={onChangePassword}
                            required
                            minLength={6} 
                            className={`${styles.input}`} />
                    </div>
                </div>

                <div>
                    <label htmlFor="password-confirmed" className={`${styles.label}`}>Confirmar contraseña:</label>
                    <div className="mt-2">
                        <input
                            type="password"
                            {...register('confirmPassword')}
                            required
                            minLength={6} 
                            className={`${styles.input}`} />
                    </div>
                </div>

                <TermsAndConditions />
                
                <div className="py-[16px]">
                    <SignUpButton onSubmit={onSubmit} />
                </div>
            </form>
        </>
    )
}

export default SignUpForm