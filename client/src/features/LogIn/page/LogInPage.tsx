import { Layout } from "../../../components/Layout/Layout"
import Login from "../components/Login"


const LogInPage = () => {
  return (
    <Layout>
       <section className="flex justify-start items-center pl-[20%] h-screen w-full py-20 bg-[url('../../../public/bg-login.svg')] bg-no-repeat bg-cover bg-right relative ">
       <div className='absolute left-0 top-0 w-[70%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
            <div className='absolute left-0 top-0 w-[60%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
            <div className='absolute left-0 top-0 w-[60%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
            <div className='absolute left-0 top-0 w-[60%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
            <div className='absolute left-0 top-0  w-[55%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
            <div className='absolute left-0 top-0  w-[55%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
           <Login />
           
        </section>
   
    </Layout>
  )
}

export default LogInPage