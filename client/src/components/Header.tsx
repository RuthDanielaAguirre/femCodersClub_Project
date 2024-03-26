
import { useLocalStorage } from '../hooks/useLocalStorage'
import NavbarAuthUser from './NavbarAuthUser'
import NavbarNoAuth from './NavbarNoAuth'


const Header = () => {
  const[currentUser]= useLocalStorage("user","")
  console.log(currentUser)
  /**
   * Validar roles usuario cliente e incluir dentro del contexto
   *  y usuario admin tambien dentro del contexto
   * agregar a lado del token && el rol, seria esta autenticado y es usuario cliente
   * 
   */
  if (currentUser?.token){
    return <NavbarAuthUser/>
  }
  /**
   * Aqui se pintaria la navbar admin cuando se verifique el rol de admin
   * seria token && el rol, usuario autenticado que es admin
   */
  // if (currentUser?.token){
  //   return <NavbarAuthAdmin/>
  // }
  return (
    <NavbarNoAuth/>
  )
}

export default Header