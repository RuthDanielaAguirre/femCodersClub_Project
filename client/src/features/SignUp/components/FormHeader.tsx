import { styles } from "../../../style"

function FormHeader() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm w-full flex flex-col justify-venter items-center">
      <img src="../../../../public/FemCodersClub-Logo.png" className="w-[120px]"/>
      <h1 className={`${styles.headingForm} mb-8` }>Crear una cuenta</h1>
    </div>
  )
}

export default FormHeader