
import { Footer } from 'flowbite-react';
import { BsInstagram, BsLinkedin, BsSpotify, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ApoyanosButton } from './ApoyanosButton';
import SlackButton from './SlackButton';
import PrivacyPolicyModal from './Modals/Privacidad';
import CookiePolicyModal from './Modals/Cookies';
import FemCodersClubLogo from '../../../public/FemCodersClubLogo.png'

const FccFooter = () => {
  return (

    <Footer className='w-full h-fit bg-gradient-to-r from-primary mx-auto via-accent to-secondary text-primary rounded-none flex flex-end  bottom-0 px-4 lg:px-16' >
      <div className="w-full h-full mb-2 md:mb-6 md:mt-6">
        <div className=" w-full mt-2 mx-auto justify-between sm:justify-between sm:flex sm:justify-between md:flex grid grid-cols-1 md:grid-cols-3 sm:gap-4 gap-1">
          <div className='items-center  flex flex-col justify-center align-center'>
            <a href="#" className="flex items-center space-x-3 justify-center align-center rtl:space-x-reverse hidden md:block">
              <Link to="/"><img src={FemCodersClubLogo} className="w-[8.75rem]" alt="Fem Coders Club Logo" /></Link>
            </a>
          </div>
          <div className="mt-4 flex flex-col items-center justify-center space-y-4 sm:mt-0 text-tertiary">
            <div>
              <p className='text-primary text-center text-bodyText'>Síguenos en:</p>
              <div className="flex mt-4 text-tertiary space-x-6 mb-2">
                <Footer.Icon href="https://open.spotify.com/user/31wgl44unbqdv6nh4igsgw5pp6t4?si=29d0152b29404e44" icon={BsSpotify} className="text-tertiary hover:text-contrast" />
                <Footer.Icon href="https://www.instagram.com/femcoders_club/" icon={BsInstagram} className="text-tertiary hover:text-contrast" />
                <Footer.Icon href="https://www.linkedin.com/company/fem-coders-club/" icon={BsLinkedin} className="text-tertiary hover:text-contrast" />
                <Footer.Icon href="https://www.youtube.com/@FemcodersClub" icon={BsYoutube} className="text-tertiary hover:text-contrast" />
              </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
              <p className='text-primary text-center text-bodyText'>O también:</p>
              <SlackButton />
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-col text-align sm:items-end justify-center text-right mb-2">
            <div className="flex flex-row md:flex-col gap-1 border-t sm:border-none mt-2 px-4 md:px-0">
              <CookiePolicyModal />
              <PrivacyPolicyModal />
            </div>
            <p className='text-primary text-right text-bodyText py-2 hidden sm:block'>Apoya a FemCoders Club</p>
            <ApoyanosButton />
          </div>
        </div>
        <div className=' text-primary rounded-none sm:pt-2'>
          <h2 className='text-primary text-center text-bodyText sm:border-t py-2'>© 2024 FemCoders Club. Todos los derechos reservados.</h2>
        </div>
      </div>
    </Footer>
  );
}

export default FccFooter