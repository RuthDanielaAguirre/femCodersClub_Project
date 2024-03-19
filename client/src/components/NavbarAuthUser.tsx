import React from 'react'
import { Link } from 'react-router-dom';


const NavbarAuth = () => {
  return (
    <>
      <nav className="bg-secondary">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-24">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link to="/"><img src="FemCodersClub-Logo.png" className="w-24" alt="Fem Coder Club Logo" /></Link>
          </a>
          <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg md:hidden hover:bg-tertiary" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
            <ul className="flex flex-col font-headerText font-bold p-4 md:p-0 md:space-x-8 md:flex-row flex items-center ">
              <li className="flex items-center block px-3 text-primary rounded md:bg-transparent md:text-primary md:p-0 hover:text-tertiary">
                <Link to="/sobrenosotras">Sobre nosotras</Link>
              </li>
              <li className="flex items-center">
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between py-2 px-3 text-primary rounded hover:bg-tertiary md:hover:bg-transparent md:border-0 md:hover:text-tertiary md:p-0 md:w-auto">Eventos <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg></button>

                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
                  <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link to="/eventos"><a href="#" className="block px-4 py-2 hover:bg-gray-100">Tecnología</a></Link>
                    </li>
                    <li>
                      <Link to="/eventos"><a href="#" className="block px-4 py-2 hover:bg-gray-100">Sensibilización</a></Link>
                    </li>
                    <li>
                      <Link to="/eventos"><a href="#" className="block px-4 py-2 hover:bg-gray-100">Entrevistas</a></Link>
                    </li>
                    <li>
                      <Link to="/eventos"><a href="#" className="block px-4 py-2 hover:bg-gray-100">Formación</a></Link>
                    </li>
                    <li>
                      <Link to="/eventos"><a href="#" className="block px-4 py-2 hover:bg-gray-100">Agenda</a></Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-terciary md:p-0">
                <Link to="/contacto">Contacto</Link>
              </li>
              <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:terciary md:p-0">
                <Link to="/faqs">FAQs</Link>
              </li>
              <div>

                <img id="avatarButton" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer" src="AvatarUser.png" alt="User dropdown" />


                <div id="userDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                  <ul className="py-2 text-sm text-contrast" aria-labelledby="avatarButton">
                    <li className="font-bodyText text-[16px] block px-4 py-2 hover:bg-gray-100">
                      <Link to="">Mi perfil</Link>
                    </li>
                    <li className="font-bodyText text-[16px] block px-4 py-2 hover:bg-gray-100 ">
                      <Link to="">Mis eventos</Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <a href="#" className="font-bodyText text-[16px] block px-4 py-2 text-sm text-contrast hover:bg-gray-100 ">Salir de sesión</a>
                  </div>
                </div>

              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarAuth