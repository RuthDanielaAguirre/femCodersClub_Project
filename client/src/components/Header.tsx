import { useLocalStorage } from '../hooks/useLocalStorage';
import NavbarAuthUser from './NavbarAuthUser';
import NavbarNoAuth from './NavbarNoAuth';
import NavbarAuthAdmin from './NavbarAuthAdmin';

const Header = () => {
  const[currentUser]= useLocalStorage("user","")

  if (currentUser?.token && currentUser?.role!=="admin"){
    return <NavbarAuthUser/>
  }

  if (currentUser?.token && currentUser?.role==="admin"){
    return <NavbarAuthAdmin/>
  }
  return (
    <NavbarNoAuth/>
  )
}

export default Header