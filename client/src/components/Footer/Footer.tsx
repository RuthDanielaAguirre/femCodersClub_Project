
import { Footer } from 'flowbite-react';
import { BsInstagram, BsLinkedin, BsSpotify, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ApoyanosButton } from './ApoyanosButton';
import { styles } from '../../style';
import SlackButton from './SlackButton';
import PrivacyPolicyModal from './Modals/Privacidad';
import CookiePolicyModal from './Modals/Cookies';
import FemCodersClubLogo from '../../../public/FemCodersClubLogo.png'

const FccFooter = () => {
  return (

    <Footer className='w-full h-[250px] bg-gradient-to-r from-primary mx-auto via-accent to-secondary text-primary rounded-none flex flex-end  bottom-0 px-8' >
      <div className="w-full h-full mb-6 mt-6">
        <div className=" w-full mt-2 mx-auto px-4 justify-between sm:justify-between sm:flex sm:justify-between md:flex grid grid-cols-1 md:grid-cols-3 gap-4 container">
          <div className='items-center  flex flex-col justify-center align-center'>
            <a href="#" className="flex items-center space-x-3 justify-center align-center rtl:space-x-reverse">
              <Link to="/"><img src={FemCodersClubLogo} className="w-[140px]" alt="Fem Coders Club Logo" /></Link>
            </a>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center space-y-4 sm:mt-0 text-tertiary">
            <div>
              <p className='text-primary text-center text-bodyText'>Síguenos en:</p>
              <div className="flex mt-4 text-tertiary space-x-6">
                <Footer.Icon href="#" icon={BsSpotify} className={`${styles.hoverIcon} text-tertiary`} />
                <Footer.Icon href="#" icon={BsInstagram} className={`${styles.hoverIcon} text-tertiary`} />
                <Footer.Icon href="#" icon={BsLinkedin} className={`${styles.hoverIcon} text-tertiary`} />
                <Footer.Icon href="#" icon={BsYoutube} className={`${styles.hoverIcon} text-tertiary`} />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-primary text-center text-bodyText'>O también:</p>
              <SlackButton />
            </div>
          </div>
          <div className="flex flex-col md:grid-cols-1 text-align text-right mb-4">
            <CookiePolicyModal />
            <PrivacyPolicyModal />
            <p className='text-primary text-right text-bodyText py-2'>Apoya a FemCoders Club</p>
            <ApoyanosButton />
          </div>
        </div>
        <div className=' text-primary rounded-none pt-2'>
          <h2 className='text-primary text-center text-bodyText border-t py-2'>© 2024 FemCoders Club. Todos los derechos reservados.</h2>
        </div>
      </div>
    </Footer>
  );
}

export default FccFooter