import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
            <HelpCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Dúvidas Frequentes</h2>
        </div>

        <div className="space-y-4">
            {FAQS.map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <button 
                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                        onClick={() => toggleFaq(index)}
                    >
                        <span className="font-semibold text-lg text-gray-800">{faq.question}</span>
                        {openIndex === index ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-gray-400" />}
                    </button>
                    {openIndex === index && (
                        <div className="px-6 pb-6 text-gray-600 animate-fadeIn">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;