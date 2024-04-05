import { Layout } from "../../../components/Layout/Layout"
import Login from "../components/Login"
import bgLogin from '../../../../public/bgLogin.png'

const LogInPage = () => {
  return (
    <Layout>
      <section className="relative flex xl:justify-start justify-center items-center lg:px-[15%] px-[5%] h-fit py-20 w-full"
        style={{backgroundImage: `url(${bgLogin})`, backgroundSize: 'auto', backgroundRepeat:'no-repeat', backgroundPosition:'right'}}
      >
        <div className='absolute left-0 top-0 w-[70%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
        <div className='absolute left-0 top-0 w-[60%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
        <div className='absolute left-0 top-0 w-[60%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
        <div className='absolute left-0 top-0 w-[60%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
        <Login />
      </section>
    </Layout>
  )
}

export default LogInPage