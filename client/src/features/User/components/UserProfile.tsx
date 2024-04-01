import { styles } from "../../../style"

const UserProfile = () => {
    const item = localStorage.getItem('user');
    const user = JSON.parse(item as string);

    console.log(user);

    const { name, lastName, email, gender, telephone} = user

    return (
        <div className="flex flex-col gap-4 lg:px-24 lg:py-10 bg-accent/15 rounded-[16px]">
            <div className="flex gap-4 text-contrast">
                <span className="font-semibold">Nombre:</span>
                <span>{name}</span>
            </div>
            <div className="flex gap-4 text-contrast">
                <span className="font-semibold">Apellido:</span>
                <span>{lastName}</span>
            </div>
            <div className="flex gap-4 text-contrast">
                <span className="font-semibold">Género:</span>
                <span>{gender}</span>
            </div>
            <div className="flex gap-4 text-contrast">
                <span className="font-semibold">Correo:</span>
                <span>{email}</span>
            </div>
            <div className="flex gap-4 text-contrast">
                <span className="font-semibold">Número de teléfono:</span>
                <span>{telephone}</span>
            </div>
            <button className={`${styles.primaryBtn} w-[150px] flex items-center justify-center self-end`}>Editar</button>
        </div>
    )
}

export default UserProfile