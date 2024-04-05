import { Layout } from "../../../components/Layout/Layout"
import Login from "../components/Login"
import bgLogin from '../../../../public/bgLogin.png'

const LogInPage = () => {
  return (
    <Layout>
      <section className="flex xl:justify-start justify-center items-center lg:px-[15%] px-[5%] h-fit py-20 w-full"
        style={{backgroundImage: `url(${bgLogin})`, backgroundSize: 'auto', backgroundRepeat:'no-repeat', backgroundPosition:'right'}}
      >
        <Login />
      </section>
    </Layout>
  )
}

export default LogInPage