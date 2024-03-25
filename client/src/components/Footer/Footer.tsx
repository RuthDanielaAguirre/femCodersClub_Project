
import { Footer } from 'flowbite-react';
import { BsInstagram, BsLinkedin, BsSpotify, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ApoyanosButton } from './ApoyanosButton';
import { styles } from '../../style';
import SlackButton from './SlackButton';
import PrivacyPolicyModal from './Modals/Privacidad';
import CookiePolicyModal from './Modals/Cookies';


const FccFooter = () => {
  return (

    <Footer className='w-full h-[300px] bg-gradient-to-r from-primary mx-auto via-accent to-secondary text-primary rounded-none flex flex-end  bottom-0' >
      <div className="w-full h-full">
        <div className=" w-full mt-2 mx-auto px-4 justify-between sm:flex sm:justify-between md:flex grid grid-cols-1 md:grid-cols-3 gap-4 container">

          <div className='items-center  flex flex-col justify-center align-center'>
            <a href="#" className="flex items-center space-x-3 justify-center align-center rtl:space-x-reverse">
              <Link to="/"><img src="FemCodersClub-Logo.png" className="w-24" alt="Fem Coders Club Logo" /></Link>
            </a>
          </div>

          <div className="mt-4 flex flex-col space-y-4 sm:mt-0 sm:justify-center text-tertiary">
            <div>
              <Footer.Title className='text-primary' title="Síguenos en:" />
              <div className="flex mt-4 text-tertiary space-x-6">
                <Footer.Icon href="#" icon={BsSpotify} className={`${styles.hoverIcon} text-tertiary`}/>
                <Footer.Icon href="#" icon={BsInstagram} className={`${styles.hoverIcon} text-tertiary`} />
                <Footer.Icon href="#" icon={BsLinkedin} className={`${styles.hoverIcon} text-tertiary`} />
                <Footer.Icon href="#" icon={BsYoutube} className={`${styles.hoverIcon} text-tertiary`} />
              </div>
            </div>
            <div>
              <Footer.Title className='text-primary' title="O también:" />
              <SlackButton />
            </div>
          </div>
          <div className="flex flex-col md:grid-cols-1 items-start">
            <CookiePolicyModal />
            <PrivacyPolicyModal />
            <Footer.Title className='text-primary font-bold' title="Apoya a FemCoders Club" />
            <ApoyanosButton />
          </div>

        </div>
        <Footer.Divider />
        <div className='w-full flex flex flex-col bg-gradient-to-r from-primary mx-auto via-accent to-secondary text-primary rounded-none'>
          <h2 className='text-primary text-center'>© 2024 FemCoders Club. Todos los derechos reservados.</h2>
        </div>
      </div>
    </Footer>
  );
}


export default FccFooter