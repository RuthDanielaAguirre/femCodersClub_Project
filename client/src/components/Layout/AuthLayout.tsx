
import { AuthProvider } from "../../hooks/useAuthContext";
import Footer from "../Footer";
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
    <Footer/>
 
</AuthProvider>
  )


export default AuthLayout;