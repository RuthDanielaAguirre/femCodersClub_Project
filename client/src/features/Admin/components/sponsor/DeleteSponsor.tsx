import { styles } from "../../../../style"

const DeleteSponsor = () => {

    return (
        <div className="flex flex-col gap-5 rounded-[16px] z-[10] bg-primary p-10">
            <h1 className="text-contrast text-xl font-semibold ">¿Estas segura que deseas borrar este registro?</h1>
            <p className="text-contrast">Haz click en aceptar para borrar registro de forma permanente.</p>
            <button className={`${styles.cancelModalBtn} w-[200px] self-center`}>
                Aceptar
            </button>
        </div>
    )
}

export default DeleteSponsor