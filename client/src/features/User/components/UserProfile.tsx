import { useLocalStorage } from "../../../hooks/useLocalStorage";
import AdminModal from "../../Admin/components/AdminModal";
import EditProfileForm from "./EditProfileForm";

const UserProfile = () => {
    const[currentUser, ] = useLocalStorage('user', '');

    const { name, lastName, email, gender, telephone} = currentUser;

    return (
        <div className="flex flex-col gap-4 lg:px-24 lg:py-10 p-5 bg-accent/15 rounded-[16px]">
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
            <div className="flex w-full justify-end">
                <AdminModal
                    text = 'Editar'
                    width = '120px'
                    fontColor = 'tertiary'
                    fonthover= 'primary'
                    bg = 'primary'
                >
                    <EditProfileForm/>
                </AdminModal>
            </div>
        </div>
    )
}

export default UserProfile