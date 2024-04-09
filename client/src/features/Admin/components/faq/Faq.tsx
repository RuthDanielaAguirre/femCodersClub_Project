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
      <div className="max-w-3xl mx-auto rounded overflow-hidden shadow-lg mb-12 rounded-2xl">
          <h1 className="bg-secondary font-semibold text-primary text-xl py-3 px-6">
            {faq.faqQuestion}
          </h1>
          <p className="text text-[1em] bg-accent/10 px-6 py-4">
            {faq.faqAnswer}
          </p>
          <div className="flex w-full justify-end items-center px-6 pb-6 gap-4 bg-accent/10">
            <AdminModal 
              text='Editar'
              width='120px'
              fontColor = 'tertiary'
              fonthover= 'primary'
              bg = 'primary'
              children={<EditFaqModal idFaq={faq.idFaq} />}
            />
            <AdminModal 
              text='Borrar'
              width='120px'
              fontColor = 'secondary'
              fonthover= 'primary'
              bg = 'primary'
              children={<DeleteFaqModal  idFaq={faq.idFaq} />}
            />
          </div>
        </div>
    </div>
  );
};

export default FaqCard;