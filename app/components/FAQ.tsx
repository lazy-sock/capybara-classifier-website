import React, { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "Was ist BWKI?",
    answer:
      "BWKI steht für 'Bundeswettbewerb Künstliche Intelligenz' und ist ein Wettbewerb, finanziert durch das Bundesministerium für Bildung und Forschung, für Schülerinnen und Schüler bei denen die Teilnehmer eigene KI-Projekte zu gesellschaftlich relevanten Themen entwickeln. ",
  },
  {
    question: "Wie nutze ich Capybara?",
    answer:
      "Um den Capybara Classifier zu verwenden, laden Sie einfach Ihre Bilder hoch und lassen Sie sie von der KI analysieren. Diese klassifiziert die Bilder auf Grundlage des trainierten Modells. Sie können die CapybaraCam auch selbst in Ihrem eigenen Vogelhaus verwenden. Alle erforderlichen Dateien und Informationen finden Sie entweder hier oder auf GitHub. Beachten Sie jedoch, dass dies etwas komplexer ist.",
  },
  {
    question: "Wie kann ich bei dem Projekt mitwirken?",
    answer:
      "Wenn du mithelfen möchtest Capybara zu verbessern, oder einfach nur mehr Information über unser Projekt haben möchtest, dann besuche uns auf unserem Github Repository.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mx-auto mb-5 max-w-3xl p-4">
      <h2 className="mb-7 text-center text-[2rem] font-bold lg:text-[3rem]">
        Not so Frequently Asked Questions
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
