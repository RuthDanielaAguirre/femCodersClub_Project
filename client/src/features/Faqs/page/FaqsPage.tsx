
import { Layout } from '../../../components/Layout/Layout'
import { styles } from '../../../style';
import FaqAccordion from '../components/FaqAccordion';
import bgFaqs from '../../../../public/bgFaqs.svg'

const FaqsPage = () => {

  return (
    <Layout>
            <div className="w-full flex flex-col items-center md:py-[100px] xl:py-[150px] bg-cover"
                    style={{backgroundImage: `url(${bgFaqs})`, backgroundPositionX:'left', backgroundPositionY:'top',backgroundRepeat:'no-repeat'}}
            >
              <h1 className={`${styles.heading3} my-24`}>Preguntas Frecuentes</h1>
              <FaqAccordion /> 
          </div>
    </Layout>
  )
}

export default FaqsPage