import { styles } from '../../../style'
import ContactForm from './ContactForm'



const FormWrapper = () => {
  return (
    <div className='flex wrap xl:flex-row flex-col-reverse justify-center items-center py-[100px] xxl:gap-[300px] xl:gap-[100px] lg:gap-4 lg:px-[50px] gap-8 px-[30px]'>
        <ContactForm/>
        <div className='flex flex-col items-center gap-5'>
            <h1 className="text-primary text-4xl font-semibold text-center leading-10 max-w-[550px]">¿Te gustaría ser parte de <span className='text-tertiary font-bold md:text-6xl text-5xl'>femCoders Club?</span></h1>
            <h1 className='text-primary text-3xl font-semibold'>¿Tienes una duda? </h1>
            <p className={`${styles.heading5} text-center max-w-[500px]`}>Preguntanos lo que quieras llenando este formulario y nos contactaremos contigo lo antes posible.</p>
        </div>
    </div>
  )
}

export default FormWrapper