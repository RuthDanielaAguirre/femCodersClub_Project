import { styles } from "../../../style"

const UserProfile = () => {
    
    const user = localStorage.getItem('user');
    console.log(user);

    return (
        <div className="flex flex-col gap-4 lg:px-24 lg:py-10 bg-accent/15 rounded-[16px]">
            <div className="flex gap-4 text-contrast">
                <span className="font-semibold">Nombre:</span>
                <span>Maria</span>
            </div>
            <div className="flex gap-4 text-contrast">
                <span className="font-semibold">Apellido:</span>
                <span>Sanchez</span>
            </div>
            <div className="flex gap-4 text-contrast">
                <span className="font-semibold">Género:</span>
                <span>Femenino</span>
            </div>
            <div className="flex gap-4 text-contrast">
                <span className="font-semibold">Correo:</span>
                <span>MariaSanchez@gmail.com</span>
            </div>
            <div className="flex gap-4 text-contrast">
                <span className="font-semibold">Número de teléfono:</span>
                <span>61258963</span>
            </div>
            <button className={`${styles.primaryBtn} w-[150px] flex items-center justify-center self-end`}>Editar</button>
        </div>
    )
}

export default UserProfile