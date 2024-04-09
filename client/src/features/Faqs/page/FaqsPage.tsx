import { Layout } from '../../../components/Layout/Layout';
import { styles } from '../../../style';
import FaqAccordion from '../components/FaqAccordion';
import bgFaqs from '../../../../public/bgFaqs.svg'

const FaqsPage = () => {
  return (
    <Layout>
            <div className="w-full flex flex-col items-center md:py-[100px] xl:py-[150px] py-10 bg-cover "
                    style={{backgroundImage: `url(${bgFaqs})`,backgroundRepeat:'no-repeat'}}
            >
              <h1 className={`${styles.heading3} font-headerText md:my-24 my-16 text-center`}>Preguntas Frecuentes</h1>
              <FaqAccordion /> 
          </div>
    </Layout>
  )
}

export default FaqsPage;