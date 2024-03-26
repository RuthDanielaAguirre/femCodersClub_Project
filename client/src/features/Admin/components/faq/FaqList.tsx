import { useEffect, useState } from "react";
import Faq from "./Faq";
import axios from 'axios';
import AddFaqForm from "./AddFaqForm";

interface Faq {
  idFaq: number;
  faqQuestion: string;
  faqAnswer: string;
}

export const FaqList = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('');
        setFaqs(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="">
        <AddFaqForm/>
        {faqs.map((faq) => (
          <div className="col-1" key={faq.idFaq}>
            <Faq faq={faq} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqList;