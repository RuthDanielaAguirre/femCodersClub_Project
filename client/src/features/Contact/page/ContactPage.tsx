import { Layout } from "../../../components/Layout/Layout"
import FormWrapper from "../components/FormWrapper"
import bgContact from '../../../../public/bgContact.svg'

const ContactPage = () => {
  return (
    <Layout>
      <div style={{backgroundImage: `url(${bgContact})`, backgroundSize: 'cover', backgroundPosition: 'right', backgroundRepeat: 'no-repeat'}}>
        <FormWrapper/>
      </div>
    </Layout>
  )
}

export default ContactPage