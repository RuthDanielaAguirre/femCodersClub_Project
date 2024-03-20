import SignUpButton from './SignUpButton'
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { User, SignUpFormData } from "../../../types/types";
import { registerUser } from '../../../api/registerApi';
import TermsAndConditions from './TermsAndConditions';
import { styles } from '../../../style';
// import { z, ZodType} from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod'

const SignUpForm = () => {
    const navigate = useNavigate();

    // const schema: ZodType<SignUpFormData> = z.object({
    //     name: z.string().max(30),
    //     lastName: z.string().min(2).max(30),
    //     phoneNumber: z.string().min(9),
    //     email: z.string().email(),
    //     password: z.string().min(8).max(14),
    //     confirmPassword: z.string().min(8).max(14),
    // }).refine((data) => data.password === data.confirmPassword, {
    //     message: "las contraseñas no cohinciden",
    //     path: ["confirmPassword"],
    // });

    const {register, handleSubmit, formState: { errors, isSubmitting }} = useForm<SignUpFormData>()

    const mutationFn = async ({ name, lastName, gender, phoneNumber, email, password }: SignUpFormData) => registerUser(name, lastName, gender, phoneNumber, email, password);

    // const mutationFn = async ({ name, lastName, email, password }: SignUpFormData) => registerUser(name, lastName, email, password);

    const mutation = useMutation<User, Error, SignUpFormData>(
        {
            mutationFn,
            onSuccess: () => {
                navigate('/');
            },
            onError: (error) => console.error('Error:', error),
        }
    );

    const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {

        console.log(data);

        const  name = data.name;
        const lastName = data.lastName;
        const gender = data.gender;
        const phoneNumber = data.phoneNumber;
        const email = data.email;
        const password = data.password;

        mutation.mutate({ name, lastName, gender, phoneNumber, email, password });
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-1" action="#" method="POST dropdown dropdown-end">

                <div>
                    <label htmlFor="name" role='label' aria-label='name' className={`${styles.label}`}>Nombre:</label>
                    <div className="mt-2">
                        <input
                            {...register('name', {required: 'Nombre no puede estar vacio', minLength:3})}
                            type="text"
                            className={`${styles.input}`} />
                            {errors.name && <span className='text-[14px] text-[#FF0000]'>{errors.name.message}</span>}
                    </div>
                </div>

                <div>
                    <label htmlFor="lastName" role='label' aria-label='lastName' className={`${styles.label}`}>Apellido:</label>
                    <div className="mt-2">
                        <input
                            {...register('lastName', {required: 'Apellido no puede estar vacio', minLength:2})}
                            type="text"
                            className={`${styles.input}`} />
                            {errors.lastName && <span className='text-[14px] text-[#FF0000]'>{errors.lastName.message}</span>}
                    </div>
                </div>

                <div className='flex gap-4 w-full m-0 p-0'>
                    <div className='w-[260px] h-[100] flex flex-col justify-between'>
                        <label htmlFor="gender" className={`${styles.label}`}>Género:</label>
                        <select id="gender" {...register('gender')}  className="block w-full h-[36px] rounded-[8px] bg-primary border-0 text-gray-600 shadow-md shadow-accent/10 text-[16px] py-0 focus:ring-accent/50 focus:border-accent">
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
                                {...register('phoneNumber')}
                                type="text"
                                className={`${styles.input}`} />
                        </div>
                    </div>
                </div>
                {errors.phoneNumber && <span className='text-[14px] text-[#FF0000] flex justify-end'>{errors.phoneNumber.message}</span>}

                <div>
                    <label htmlFor="email" role='label' aria-label='email' className={`${styles.label}`}>Correo:</label>
                    <div className="mt-2">
                        <input
                            {...register('email', {required: 'Correo no puede estar vacio', validate: (value) => {
                                if (!value.includes('@')){
                                    return 'Debe introducir un correo valido'
                                }
                                return true;
                                }
                            })}
                            type="email"
                            className={`${styles.input}`} />
                        {errors.email && <span className='text-[14px] text-[#FF0000]'>{errors.email.message}</span>}
                    </div>
                </div>

                <div>
                    <label htmlFor="password" role='label' aria-label='password' className={`${styles.label}`}>Contraseña:</label>
                    <div className="mt-2">
                        <input
                            {...register('password', {required: 'Contraseña no puede estar vacio', minLength:{
                                value: 8,
                                message: 'La contraseña debe contener al menos 8 caracteres'
                            }})}
                            type="password"
                            className={`${styles.input}`} />
                        {errors.password && <span className='text-[14px] text-[#FF0000]'>{errors.password.message}</span>}
                    </div>
                </div>

                <div>
                    <label htmlFor="password-confirmed" className={`${styles.label}`}>Confirmar contraseña:</label>
                    <div className="mt-2">
                        <input
                            type="password"
                            {...register('confirmPassword')}
                            className={`${styles.input}`} />
                        {errors.confirmPassword && <span className='text-[14px] text-[#FF0000]'>{errors.confirmPassword.message}</span>}
                    </div>
                </div>

                <TermsAndConditions />
                
                <div className="py-[16px]">
                    <SignUpButton disabled={isSubmitting} onSubmit={onSubmit} />
                </div>
            </form>
        </>
    )
}

export default SignUpForm