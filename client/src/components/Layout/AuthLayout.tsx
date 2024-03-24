
import { AuthProvider } from "../../hooks/useAuthContext";
import FccFooter from "../Footer/Footer";
import Header from "../Header";


interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({children}: LayoutProps) =>
(
<AuthProvider>
  <Header />
    <main>
      {children}
    </main>
    <FccFooter/>
 
</AuthProvider>
  )


export default AuthLayout;