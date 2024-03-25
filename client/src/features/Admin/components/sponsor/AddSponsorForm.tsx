import { styles } from "../../../../style"

const AddSponsorForm = () => {
    return (
        <>
        <h1 className={`${styles.heading4} mb-8` }>Llena el formulario para editar:</h1>
        <form action="#" method="POST" className="flex flex-col bg-accent/80 w-full h-fit rounded-[24px] p-8">
                <label htmlFor="name" className={`${styles.label2}`}>Nombre del sponsor:</label>
                <input id="email" type="email" name="email" required className={`${styles.input} mt-[10px]`}  />
                
                <label htmlFor="company"  className={`${styles.label2}`}>Entidad a la que pertenece:</label>
                <input type="password" id="password" name="password" required className={`${styles.input}`} />

                <label htmlFor="email"  className={`${styles.label2}`}>Correo:</label>
                <input type="password" id="password" name="password" required className={`${styles.input}`} />

                <label htmlFor="phone"  className={`${styles.label2}`}>Núm de teléfono:</label>
                <input type="password" id="password" name="password" required className={`${styles.input}`} />

                <label htmlFor="password"  className={`${styles.label2}`}>Contraseña</label>
                <input type="password" id="password" name="password" required className={`${styles.input}`} />
        </form>
        </>
    )
}

export default AddSponsorForm