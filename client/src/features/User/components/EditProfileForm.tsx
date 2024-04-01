import { styles } from "../../../style"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import SpinerModal from "../../../components/SpinnerModal"
import { updateUser } from "../../../api/userApi"
import { EditUserFormData, User } from "../../../types/types"

const EditProfileForm = () => {
    const [idUser, setIdUser] = useState('');
    const [userName, setUserName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userGender, setUserGender] = useState('');
    const [userTelephone, setUserTelephone] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    const [showMessage, setShowMessage] = useState<boolean>(false);

    const item = localStorage.getItem('user');
    const user = JSON.parse(item as string);

    console.log(user);

    const { id, name, lastName, email, gender, telephone} = user
    
    useEffect(() => {
        if(user !== null){
            setIdUser(id);
            setUserName(name);
            setUserLastName(lastName);
            setUserEmail(email);
            setUserGender(gender);
            setUserTelephone(telephone);
        }
    },[])

    const mutationFn = async ({ idUser, updatedUser:{userName, userLastName, userGender, userEmail, userTelephone}}:EditUserFormData) => updateUser(idUser, {userName, userLastName, userGender, userEmail, userTelephone});
    
    const queryClient = useQueryClient();

    const mutation = useMutation<User, Error, EditUserFormData>(
        {
            mutationFn,
            onSuccess: async() => {
                queryClient.invalidateQueries();
                await queryClient.refetchQueries();
                setLoading(false);
                setShowMessage(true);
            },
            onError: (error) => console.error('Error:', error),
        }
    );

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
		setUserName(e.target.value);
    }

    const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
		setUserLastName(e.target.value);
    }

    const onChangeGender = (e: ChangeEvent<HTMLInputElement>) => {
        setUserGender(e.target.value);
    }

    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
		setUserEmail(e.target.value);
    }


    const onChangeTelephone= (e: ChangeEvent<HTMLInputElement>) => {
		setUserTelephone(e.target.value);
    }

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		mutation.mutate({ idUser, updatedUser:{userName, userLastName, userGender, userEmail, userTelephone} })
    
        setLoading(true);
    };

    return (
        <>
        {showMessage ? (
            <div className="bg-primary z-[1] py-20 rounded-[24px]">
                <h1 className="text-center text-xl font-semibold text-contrast">Perfil editado con exito!</h1>
            </div>
        ):(
            <>
            <h1 className={`${styles.heading4} mb-8 z-[10]`}>¿Que te gustaria editar?</h1>
            <div className="z-[10] flex flex-col content-end bg-primary rounded-[24px]">
            <form onSubmit={onSubmit} action="#" method="POST" className="flex flex-col bg-accent/90 w-full h-fit rounded-[24px] p-8">

                <label htmlFor="name" className={`${styles.label2}`}>Nombre:</label>
                <input 
                    onChange={onChangeName}
                    type="text"
                    aria-label='name'
                    value = {userName}
                    className={`${styles.input} mt-1 mb-4`} 
                />
                
                <label htmlFor="company"  className={`${styles.label2}`}>Apellido:</label>
                <input 
                    onChange={onChangeLastName}
                    type="text" 
                    value = {userLastName}
                    className={`${styles.input} mt-1 mb-4`}
                />

                <label htmlFor="phone"  className={`${styles.label2}`}>Género:</label>
                <input 
                    onChange={onChangeGender}
                    type="text" 
                    value = {userGender}
                    className={`${styles.input} mt-1 mb-4`}
                />

                <label htmlFor="email"  className={`${styles.label2}`}>Correo:</label>
                <input
                    onChange={onChangeEmail}
                    type="text"
                    value = {userEmail}
                    className={`${styles.input} mt-1 mb-4`}
                />

                <label htmlFor="phone"  className={`${styles.label2}`}>Núm de teléfono:</label>
                <input 
                    onChange={onChangeTelephone}
                    type="text" 
                    value = {userTelephone}
                    className={`${styles.input} mt-1 mb-4`}
                />

                <button type='submit' className={`${styles.primaryBtn} w-[200px] self-center mt-5`}>
                    Guardar
                </button>
            </form>
        </div>
        <SpinerModal isVisible={loading} />
        </>
        )}
        </>
    )
}

export default EditProfileForm;