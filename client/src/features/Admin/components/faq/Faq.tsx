import DeleteFaqModal from "./DeleteFaqModal";
import UpdateFaqForm from "./UpdateFaqForm";


interface FaqProps {
  faq: {
    idFaq: number;
    faqQuestion: string;
    faqAnswer: string;
  };
}

const Faq = ({ faq }: FaqProps) => {
  return (
    <div className="container mx-auto">
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2 mx-auto">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{faq.faqQuestion}</div>
          <p className="text-gray-700 text-base">{faq.faqAnswer}</p>
          <div className="">
            <DeleteFaqModal/>
            <UpdateFaqForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;