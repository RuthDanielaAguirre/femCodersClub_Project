import { useState } from 'react';
import AdminModal from "../AdminModal";
import DeleteFaqModal from "./DeleteFaqModal";
import EditFaqModal from "./UpdateFaqForm";

interface FaqProps {
  faq: {
    idFaq: number;
    faqQuestion: string;
    faqAnswer: string;
  };
}

const FaqCard = ({ faq }: FaqProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };



  return (
    <div className="container mx-auto">
      <div className="max-w-3xl mx-auto rounded overflow-hidden shadow-lg my-2">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{faq.faqQuestion}</div>
          <p className="text text-base">
            {faq.faqAnswer}
          </p>
          <div className="flex justify-between  items-center mt-4">
            <div className="flex  items-center">
              <AdminModal 
                text='editar'
                width='120px'
                bg='tertiary'
                children={<EditFaqModal idFaq={faq.idFaq} />}
              />
              <AdminModal 
                text='eliminar'
                width='120px'
                bg='secondary'
                children={<DeleteFaqModal  idFaq={faq.idFaq} />}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCard;