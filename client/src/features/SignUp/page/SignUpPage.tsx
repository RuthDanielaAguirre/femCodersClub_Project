import { Layout } from "../../../components/Layout/Layout"
import FormWraper from "../components/FormWraper"
import bgSignup from '../../../../public/bgSignup.svg'

const SignUpPage = () => {
    return (
        <Layout>
            <section className="relative flex justify-start pl-[10%] w-full py-20">
                <img src={bgSignup} className='absolute top-0 right-0 z-[-1] h-full' alt="" />
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