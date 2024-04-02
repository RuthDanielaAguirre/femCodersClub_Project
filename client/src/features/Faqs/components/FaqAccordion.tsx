
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { Faq } from "../../../types/types";

interface FAQProps {
  faqs: Faq[];
}

function FaqAccordion({ faqs }: FAQProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      {faqs.map((faq, index) => (
        <div key={index} className="border-b border-gray-200">
          <button
            className={`flex justify-between items-center w-full p-4 focus:outline-none ${
              activeIndex === index ? "bg-accent-80" : ""
            }`}
            onClick={() => toggleAccordion(index)}
          >
            <span>{faq.faqQuestion}</span>
            {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </button>
          {activeIndex === index && (
            <div className="p-4">
              <p>{faq.faqAnswer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default FaqAccordion