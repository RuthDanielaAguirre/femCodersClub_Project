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

  return (
    <div className="container mx-auto">
      <div className="max-w-3xl mx-auto rounded overflow-hidden shadow-lg my-2">
        <div className="px-6 py-4">
          <div className="bg-secondary font-semibold text-primary text-[1em] ">{faq.faqQuestion}</div>
          <p className="text text-[1em] bg-accent/10">
            {faq.faqAnswer}
          </p>
          <div className="flex justify-between  items-center bg-accent/10">
            <div className="flex w-full justify-start gap-2 items-center">
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