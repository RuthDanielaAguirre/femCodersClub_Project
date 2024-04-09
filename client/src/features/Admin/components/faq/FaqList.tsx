import { useEffect, useState } from "react";
import axios from 'axios';
import { Faq } from "../../../../types/types";
import FaqCard from "./Faq";
import Spinner from "../../../../components/Spinner";

export const FaqList = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [loading, setLoading] = useState<boolean>(true); 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Faq[]>(`${import.meta.env.VITE_API_URL}/faq`);
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
          <div className="flex justify-center items-center w-full">
            <Spinner />
          </div>
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