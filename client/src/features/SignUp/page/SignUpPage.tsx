import { Layout } from "../../../components/Layout/Layout"
import FormWraper from "../components/FormWraper"

const SignUpPage = () => {
    return (
        <Layout>
            <section className="relative flex justify-start pl-[10%] w-full py-20 bg-[url('../../../public/bg-signup.svg')] bg-no-repeat bg-cover bg-right">
                <div className='absolute left-0 top-0 w-[70%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
                <div className='absolute left-0 top-0 w-[60%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
                <div className='absolute left-0 top-0 w-[60%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
                <div className='absolute left-0 top-0 w-[60%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
                <div className='absolute left-0 top-0  w-[55%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
                <div className='absolute left-0 top-0  w-[55%] h-[100%] bg-gradient-to-r from-primary to-transparent z-[1]'/>
                <FormWraper />
            </section>
        </Layout>
    )
}

export default SignUpPage