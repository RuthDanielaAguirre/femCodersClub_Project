import { Link, useNavigate } from 'react-router-dom';
import avatarAdmin from '../../public/avatrAdmin.png'
import FemCodersClubLogo from '../../public/FemCodersClubLogo.png'
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Avatar, Dropdown } from "flowbite-react";

const NavbarAuthAdmin = () => {

    const [, setCurrentUser] = useLocalStorage('user', '');
    const navigate = useNavigate();
  
    const handleLogout = () => {
      setCurrentUser("");
      navigate("/");
    };
  
    return (
        <>
          <nav className="bg-gradient-to-r from-primary via-accent to-secondary">
            <div className="flex flex-wrap items-center justify-between w-full px-4 lg:px-16  ">

              <Link to="/"><img src={FemCodersClubLogo} className="w-24 flex items-center space-x-3 rtl:space-x-reverse" alt="Fem Coder Club Logo" /></Link>

              <Dropdown className='w-full z-20 bg-gradient-to-r from-accent to-secondary'
                label=""
                renderTrigger={() => <button type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-tertiary" aria-controls="navbar-dropdown" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
                </button>}
                arrowIcon={false}
                inline>
                <Dropdown.Item className="hover:bg-primary/10"><Link className='font-bodyText text-primary hover:text-tertiary text-base w-full text-left' to="/sobrenosotras">Sobre nosotras</Link></Dropdown.Item>
                <Dropdown.Item className="hover:bg-primary/10"><Link className='font-bodyText text-primary hover:text-tertiary text-base w-full text-left' to="/equipo">Equipo</Link></Dropdown.Item>
                <Dropdown.Item className="hover:bg-primary/10"><Link className='font-bodyText text-primary hover:text-tertiary text-base w-full text-left' to="/eventos">Eventos</Link></Dropdown.Item>
                <Dropdown.Item className="hover:bg-primary/10"><Link className='font-bodyText text-primary hover:text-tertiary text-base w-full text-left' to="/contacto">Contacto</Link></Dropdown.Item>
                <Dropdown.Item className="hover:bg-primary/10"><Link className='font-bodyText text-primary hover:text-tertiary text-base w-full text-left' to="/faqs">FAQs</Link></Dropdown.Item>
                <Dropdown.Item className="hover:bg-primary/10"><Link className='font-bodyText text-primary hover:text-tertiary text-base w-full text-left' to="/admin">Panel de control</Link></Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item className="hover:bg-primary/10">
                  <button className="font-bodyText text-primary hover:text-tertiary text-base w-full text-left" onClick={handleLogout} >Salir de sesión</button>
                </Dropdown.Item>
              </Dropdown>

              <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                <ul className="flex flex-col font-headerText font-bold p-4 md:p-0 md:space-x-4 lg:space-x-8 md:flex-row flex items-center ">
                  <li className="flex items-center block px-3 text-primary rounded md:bg-transparent md:text-primary md:p-0 hover:text-tertiary">
                    <Link to="/sobrenosotras">Sobre nosotras</Link>
                  </li>
                  <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-tertiary md:p-0">
                    <Link to="/equipo">Equipo</Link>
                  </li>
                  <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-tertiary md:p-0">
                    <Link to="/eventos">Eventos</Link>
                  </li>
                  <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-tertiary md:p-0">
                    <Link to="/contacto">Contacto</Link>
                  </li>
                  <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:tertiary md:p-0">
                    <Link to="/faqs">FAQs</Link>
                  </li>
                  <div>
                    <Dropdown
                      label={<Avatar alt="User settings" img={avatarAdmin} rounded />}
                      arrowIcon={false}
                      inline>
                      <Dropdown.Item><Link className='font-bodyText text-contrast text-base w-full text-left font-normal' to="/admin">Panel de control</Link></Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item>
                        <button className="font-bodyText text-contrast text-base w-full text-left font-normal" onClick={handleLogout} >Salir de sesión</button>
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
export default NavbarAuthAdmin