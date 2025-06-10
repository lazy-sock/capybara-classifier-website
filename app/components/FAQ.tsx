import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day money-back guarantee with no questions asked.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping typically takes 5–7 business days within the US.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto max-w-2xl p-4">
      <h2 className="mb-6 text-center text-[2rem] font-bold lg:text-[3rem]">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-xl border p-4 shadow-sm">
            <button
              onClick={() => toggle(index)}
              className="flex w-full items-center justify-between text-left text-lg font-semibold"
            >
              {faq.question}
              <span className="ml-2">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
