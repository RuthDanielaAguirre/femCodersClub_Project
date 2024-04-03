import { styles } from '../../../style'
import ContactForm from './ContactForm'



const FormWrapper = () => {
  return (
    <div className='flex xl:flex-row flex-col-reverse justify-between items-center px-[200px] py-[100px] gap-24'>
        <ContactForm/>
        <div className='flex flex-col items-center gap-5'>
            <h1 className="text-primary text-4xl font-semibold text-center leading-10 max-w-[550px]">¿Te gustaria ser parte de <span className='text-tertiary font-bold text-6xl'>femCoders Club?</span></h1>
            <h1 className='text-primary text-3xl font-semibold'>¿tienes una duda? </h1>
            <p className={`${styles.heading5} text-center max-w-[500px]`}>Preguntanos lo que quieras llenando este formulario y nos contactaremos contigo lo antes posible.</p>
        </div>
    </div>
  )
}

export default FormWrapper