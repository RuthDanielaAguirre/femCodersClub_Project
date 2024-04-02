import { useQuery } from '@tanstack/react-query';
import { getFaq } from '../../../api/faqApi';
import { Layout } from '../../../components/Layout/Layout'
import FaqAccordion from '../components/FaqAccordion';




const FaqsPage = () => {
  const { data } = useQuery({
    queryKey: ["faq"],
    queryFn: getFaq,
  });
  return (
    <Layout>
  
        <div>
            <div className="flex items-end flex-col w-full mb-5">
            <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold my-4">Preguntas Frecuentes</h1>
      {data ? <FaqAccordion faqs={data} /> : <p>Cargando...</p>}
    </div>
            </div>
            
        </div>
   
    </Layout>
  )
}

export default FaqsPage