'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Stockology?',
    answer:
      "Stockology is a cutting-edge stock market platform that provides real-time data, insights, and analysis to help investors make informed decisions. Our goal is to simplify trading and investing for everyone.",
  },
  {
    question: 'How does Stockology provide stock market insights?',
    answer:
      "Stockology gathers data from multiple reliable sources, processes it using advanced algorithms, and presents it in an easy-to-understand format. We offer market trends, technical analysis, and expert opinions to help users make the best decisions.",
  },
  {
    question: 'Is Stockology free to use?',
    answer:
      "Yes, Stockology offers a free plan with essential market insights. However, we also have premium subscriptions that provide advanced features, including in-depth analysis, personalized alerts, and exclusive reports.",
  },
  {
    question: 'How accurate are the stock predictions on Stockology?',
    answer:
      "While no prediction can be 100% accurate, Stockology uses cutting-edge AI and machine learning models to analyze market patterns and historical data, providing highly reliable insights and trend forecasts.",
  },
  {
    question: 'How can I subscribe to premium features?',
    answer: 'You can subscribe to our premium plans directly through the Stockology website. Simply choose a plan that suits your needs, complete the payment process, and gain access to exclusive stock market insights and tools.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[url('/leftsideimg.jpg')] bg-cover bg-no-repeat bg-fixed  text-black py-16 px-4 sm:px-6 lg:px-8 w-full flex justify-center">
      <div className="max-w-3xl w-full">
        <header className="mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-green-500">FAQs</h2>
          <p className="text-lg text-gray-800 mt-2">Answers to the most frequently asked questions.</p>
        </header>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-900 pb-4">
              <button
                className="w-full flex text-green-600  justify-between items-center text-lg font-medium focus:outline-none py-2"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`w-6 h-6 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <p className="text-white text-base rounded-lg py-1 bg-green-700 leading-relaxed px-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
