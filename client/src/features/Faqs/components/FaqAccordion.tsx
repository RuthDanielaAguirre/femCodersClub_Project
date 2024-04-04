import { useQuery } from '@tanstack/react-query';
import { getFaq } from '../../../api/faqApi';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";


function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  
  const { data } = useQuery({
    queryKey: ["faq"],
    queryFn: getFaq,
  });


  return (
    <div className='z-10'>
      {data ?.map((faq, index) => (
        <div key={index} className="border-b border-4 border-transparent max-w-[800px]">
          <div className={`${activeIndex === index ? "bg-primary rounded-t-xl": "bg-primary rounded-xl"}`}>
            <button
              className={`flex justify-between items-center w-full px-8 text-primary 
                ${activeIndex === index ? "bg-gradient-to-r text-start from-accent/80 to-tertiary/80 font-bold text-xl py-6 rounded-t-xl" : "bg-accent/80 text-xl py-4 rounded-xl"}`}
              onClick={() => toggleAccordion(index)}
            >
              {faq.faqQuestion}
              {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
          </div>
          {activeIndex === index && (
            <div className='bg-primary rounded-b-xl'>
            <div className="px-4 pb-4 bg-gradient-to-r from-accent/80 to-tertiary/80 rounded-b-xl">
              <p className='bg-primary rounded-[24px] p-8 mx-4 mb-4'>{faq.faqAnswer}</p>
            </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default FaqAccordion