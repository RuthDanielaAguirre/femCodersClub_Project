import { Layout } from "../../../components/Layout/Layout"
import Login from "../components/Login"


const LogInPage = () => {
  return (
    <Layout>
       <section className="flex justify-start items-center pl-[20%] h-screen w-full py-20 bg-[url('../../../public/bg-login.svg')] bg-no-repeat bg-cover bg-right">
           <Login />
           
        </section>
   
    </Layout>
  )
}

export default LogInPage