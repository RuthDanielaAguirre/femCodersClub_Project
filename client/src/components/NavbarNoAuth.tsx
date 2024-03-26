
import { Link } from 'react-router-dom'

const NavbarNoAuth = () => {
  return (
    <nav className="bg-gradient-to-r from-primary via-accent to-secondary">
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
          <ul className="flex flex-col font-headerText font-bold p-4 md:p-0 md:space-x-8 md:flex-row flex items-center">
            <li className="flex items-center block px-3 text-primary rounded md:bg-transparent md:text-primary md:p-0 hover:text-tertiary sm: my-4">
              <Link to="/sobrenosotras">Sobre nosotras</Link>
            </li>
            <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-terciary md:p-0 sm: my-4">
              <Link to="/equipo">Equipo</Link>
            </li>
            <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-terciary md:p-0 sm: my-4">
              <Link to="/eventos">Eventos</Link>
            </li>
            <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:text-terciary md:p-0 sm: my-4">
              <Link to="/contacto">Contacto</Link>
            </li>
            <li className="flex items-center block px-3 text-primary bg-transparent hover:text-tertiary md:hover:bg-transparent md:border-0 md:hover:terciary md:p-0 sm: my-4">
              <Link to="/faqs">FAQs</Link>
            </li>
            <div>
              <Link to="/login"><button type="button" className="text-primary bg-tertiary hover:bg-[#CC5D3D] font-headerText font-bold rounded-lg text-sm px-5 py-2 me-2 sm: my-4">Iniciar sesión</button></Link>
              <Link to="/signup"><button type="button" className="text-white border hover:bg-accent font-headerText font-bold rounded-lg text-sm px-5 py-2 me-2 sm: my-4">Registrarse</button></Link>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarNoAuth