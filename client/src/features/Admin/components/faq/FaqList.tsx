import { useEffect, useState } from "react";
import axios from 'axios';
import { Faq } from "../../../../types/types";
import FaqCard from "./Faq";
import SpinnerModal from "../../../../components/SpinnerModal";


export const FaqList = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Faq[]>('https://femcodersclub-project.onrender.com/faq');
        console.log('Respuesta del servidor:', response.data);
        setFaqs(response.data);
        setLoading(false); 
      } catch (error) {
        console.error('Error al obtener datos:', error);
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  return (
    <>
        {loading ? ( 
          <SpinnerModal isVisible={loading} />
        ) : (
          faqs.map((faq) => (
            <div className="col-lg-3" key={faq.idFaq} >
              <FaqCard faq={faq} />
            </div>
          ))
        )}
    </>
  );
};

export default FaqList;