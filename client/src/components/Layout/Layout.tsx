
import Header from "../Header";
import FccFooter from "../Footer/Footer";

interface LayoutProps{
    children: React.ReactNode;
}
export const Layout = ({children}: LayoutProps) => {
  return (
    <>
    <Header />
    <main>
        {children}
    </main>
    <FccFooter/>
    </>
  )
}
