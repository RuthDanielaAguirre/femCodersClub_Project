import { FormEvent, useRef, useState } from 'react';

import emailjs from '@emailjs/browser';
import { styles } from '../../../style';
import SpinerModal from '../../../components/SpinnerModal';


const ContactForm = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [showMessage, setShowMessage] = useState<boolean>(false);

  const form = useRef<HTMLFormElement | null>(null);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const serviceId = 'service_xx2o8l7';
    const templateId = 'template_pr7h1l8';
    const apiKey = 'TBmjF3GSLrwvZGnc5';

    if (!form.current) {
      throw new Error("The form element is not found");
    }

    emailjs.sendForm(serviceId, templateId, form.current, apiKey)
    .then(result => {
      console.log(result.text)
      setLoading(false);
      setShowMessage(true);
    })
    .catch(error => console.log(error))
	}

    return (
        <>
        {showMessage ? (
          <div className="bg-primary z-[1] py-20 rounded-[24px]">
              <h1 className="text-center text-xl font-semibold text-contrast">Mensaje enviado!</h1>
          </div>
        ):(
          <>
            <div className="z-[10] flex flex-col content-end bg-primary rounded-[24px] md:w-[550px] lg:min-w-[500px] sm:w-[400px] w-[360px]">
            <form ref={form} onSubmit={handleSubmit} action="#" method="POST" className="flex flex-col bg-accent/90 w-full h-fit rounded-[24px] p-8">

                <label htmlFor="name" className={`${styles.label2}`}>Nombre:</label>
                <input 
                  required
                  type="text"
                  aria-label='name'
                  name = 'userName'
                  placeholder = 'Escribe tu nombre aqui'
                  className={`${styles.input} mt-1 mb-4`} 
                />

                <label htmlFor="email"  className={`${styles.label2}`}>Correo:</label>
                <input
                  required
                  type="text"
                  aria-label='correo'
                  name = 'userEmail'
                  placeholder = 'Ej: ejemplo@gmail.com'
                  className={`${styles.input} mt-1 mb-4`}
                />

                <label htmlFor="asunto" className={`${styles.label2}`}>Asunto:</label>
                <input
                  required
                  type="text"
                  aria-label='correo'
                  name = 'asunto'
                  placeholder = 'Ej: quiero ser voluntari@'
                  className={`${styles.input} mt-1 mb-4`}
                />

                <label htmlFor="phone"  className={`${styles.label2}`}>Mensage:</label>
                <textarea 
                  required 
                  name = 'message'
                  placeholder = 'Escribe tu mensage aqui'
                  className="block w-full h-[200px] rounded-[8px] border-0 py-1.5 text-gray-900 shadow-md shadow-accent/10 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-accent/50 sm:text-sm sm:leading-6 mt-1 mb-4"
                />

                <button type='submit' className={`${styles.primaryBtn} w-[200px] self-center mt-5`}>
                  Enviar
                </button>
            </form>
        </div>
        <SpinerModal isVisible={loading} />
        </>
        )}
        </>
    )
}



export default ContactForm;