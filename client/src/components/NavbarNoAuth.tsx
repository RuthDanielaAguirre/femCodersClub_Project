
import { Link } from 'react-router-dom'
import FemCodersClubLogo from '../../public/FemCodersClubLogo.png'
import { styles } from '../style'
import {  Dropdown } from "flowbite-react";

const NavbarNoAuth = () => {
  return (
    <nav className="bg-gradient-to-r from-primary via-accent to-secondary">
      <div className="flex flex-wrap items-center justify-between w-full px-16">
       
          <Link to="/"><img src={FemCodersClubLogo} className="w-24 flex items-center space-x-3 rtl:space-x-reverse" alt="Fem Coder Club Logo" /></Link>

          <Dropdown className='w-full z-20'
            label=""
            renderTrigger={() => <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-tertiary" aria-controls="navbar-dropdown" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>}
            arrowIcon={false}
            inline>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base w-full text-left' to="/sobrenosotras">Sobre nosotras</Link></Dropdown.Item>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base w-full text-left' to="/equipo">Equipo</Link></Dropdown.Item>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base w-full text-left' to="/eventos">Eventos</Link></Dropdown.Item>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base w-full text-left' to="/contacto">Contacto</Link></Dropdown.Item>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base w-full text-left' to="/faqs">FAQs</Link></Dropdown.Item>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base w-full text-left' to="/admin">Panel de control</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base w-full text-left' to="/login">Iniciar sesión</Link></Dropdown.Item>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base w-full text-left' to="/signup">Registrarse</Link></Dropdown.Item>
          
          </Dropdown>
     
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col font-headerText font-bold p-4 md:p-0 md:space-x-8 md:flex-row flex items-center">
            <li className="flex items-center block px-3 text-[18px] font-semibold text-bodyTexttext-primary rounded md:bg-transparent md:text-primary md:p-0 hover:text-tertiary sm: my-4">
              <Link to="/sobrenosotras">Sobre nosotras</Link>
            </li>
            <li className="flex items-center block px-3 text-[18px] font-semibold text-bodyText text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-terciary md:p-0 sm: my-4">
              <Link to="/equipo">Equipo</Link>
            </li>
            <li className="flex items-center block px-3 text-[18px] font-semibold text-bodyText text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-terciary md:p-0 sm: my-4">
              <Link to="/eventos">Eventos</Link>
            </li>
            <li className="flex items-center block px-3 text-[18px] font-semibold text-bodyText text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-terciary md:p-0 sm: my-4">
              <Link to="/contacto">Contacto</Link>
            </li>
            <li className="flex items-center block px-3 text-[18px] font-semibold text-bodyText text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:terciary md:p-0 sm: my-4">
              <Link to="/faqs">FAQs</Link>
            </li>
            <div className='flex gap-4'>
              <Link to="/login"><button className={`${styles.primaryBtn} w-[150px] h-[40px]`}>Iniciar sesión</button></Link>
              <Link to="/signup"><button className={`${styles.outlineBtn} w-[150px] h-[40px]`}>Registrarse</button></Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarNoAuth