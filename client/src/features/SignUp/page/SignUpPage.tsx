import { Layout } from "../../../components/Layout/Layout";
import FormWraper from "../components/FormWraper";
import bgSignup from '../../../../public/bgSign.svg';

const SignUpPage = () => {
    return (
        <Layout>
        <section className="relative flex xl:justify-start justify-center items-center lg:px-[15%] px-[5%] h-fit py-14 w-full"
                style={{backgroundImage: `url(${bgSignup})`, backgroundSize: 'auto', backgroundRepeat:'no-repeat', backgroundPosition:'right'}}
            >
            <div className='absolute left-0 top-0 w-[75%] h-[100%] bg-gradient-to-r from-primary to-transparent'/>
            <div className='absolute left-0 top-0 w-[70%] h-[100%] bg-gradient-to-r from-primary to-transparent '/>
            <div className='absolute left-0 top-0 w-[70%] h-[100%] bg-gradient-to-r from-primary to-transparent '/>
            <div className='absolute left-0 top-0 w-[70%] h-[100%] bg-gradient-to-r from-primary to-transparent '/>
            <div className='absolute left-0 top-0 w-[70%] h-[100%] bg-gradient-to-r from-primary to-transparent '/>
                <FormWraper />
            </section>
        </Layout>
    )
}

export default SignUpPage;