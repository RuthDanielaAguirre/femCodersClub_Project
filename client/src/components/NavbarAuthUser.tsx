import { Link, useNavigate } from 'react-router-dom';
import avatarUser from "../../public/avatarUser.png"
import FemCodersClubLogo from '../../public/FemCodersClubLogo.png'
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Avatar, Dropdown } from "flowbite-react";

const NavbarAuthUser = () => {

  const [_, setCurrentUser] = useLocalStorage('user', '');
  const navigate = useNavigate();

  const handleLogout = () => {
    setCurrentUser("");
    navigate("/");
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-primary via-accent to-secondary">
        <div className="flex flex-wrap items-center justify-between w-full px-8 lg:px-16  ">

          <Link to="/"><img src={FemCodersClubLogo} className="w-24 flex items-center space-x-3 rtl:space-x-reverse" alt="Fem Coder Club Logo" /></Link>

          <Dropdown className='w-full'
            label=""
            renderTrigger={() => <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-tertiary" aria-controls="navbar-dropdown" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>}
            arrowIcon={false}
            inline>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base' to="/sobrenosotras">Sobre nosotras</Link></Dropdown.Item>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base' to="/equipo">Equipo</Link></Dropdown.Item>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base' to="/eventos">Eventos</Link></Dropdown.Item>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base' to="/contacto">Contacto</Link></Dropdown.Item>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base' to="/faqs">FAQs</Link></Dropdown.Item>
            <Dropdown.Item><Link className='font-bodyText text-contrast text-base' to="/usuario">Mi perfil</Link></Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>
              <button className="font-bodyText text-contrast text-base" onClick={handleLogout} >Salir de sesión</button>
            </Dropdown.Item>
          </Dropdown>

          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-headerText font-bold p-4 md:p-0 md:space-x-8 md:flex-row flex items-center ">
              <li className="flex items-center block px-3 text-primary rounded md:bg-transparent md:text-primary md:p-0 hover:text-tertiary">
                <Link to="/sobrenosotras">Sobre nosotras</Link>
              </li>
              <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-terciary md:p-0">
                <Link to="/equipo">Equipo</Link>
              </li>
              <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-terciary md:p-0">
                <Link to="/eventos">Eventos</Link>
              </li>
              <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-terciary md:p-0">
                <Link to="/contacto">Contacto</Link>
              </li>
              <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:terciary md:p-0">
                <Link to="/faqs">FAQs</Link>
              </li>
              <div>
                <Dropdown
                  label={<Avatar alt="User settings" img={avatarUser} rounded />}
                  arrowIcon={false}
                  inline>
                  <Dropdown.Item><Link className='font-bodyText text-contrast text-base' to="/usuario">Mi perfil</Link></Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <button className="font-bodyText text-contrast text-base" onClick={handleLogout} >Salir de sesión</button>
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarAuthUser