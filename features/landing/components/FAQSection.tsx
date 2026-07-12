'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How does the ATS score work?',
      answer:
        'Our AI analyzes your resume against common ATS systems and job descriptions to calculate a compatibility score. It looks at keyword matching, formatting, structure, and content optimization.',
    },
    {
      question: 'Is my data secure?',
      answer:
        'Yes. All your data is encrypted using industry-standard encryption. We never share your information with third parties, and you can delete your data anytime.',
    },
    {
      question: 'How accurate are the AI suggestions?',
      answer:
        'Our AI is trained on thousands of successful resumes and job descriptions. While suggestions are highly accurate, they&apos;re meant to guide you—ultimately you should personalize recommendations to your experience.',
    },
    {
      question: 'Can I use this for multiple resumes?',
      answer:
        'Absolutely. You can upload and analyze multiple resumes. The free plan includes 3 analyses per month across all resumes.',
    },
    {
      question: 'What file formats do you support?',
      answer:
        'We support PDF and DOCX formats. Make sure your resume is properly formatted for best results.',
    },
    {
      question: 'Do you offer refunds?',
      answer:
        'Yes. If you&apos;re not satisfied within 30 days, we offer a full refund. No questions asked.',
    },
  ];

  return (
    <section id="faq" className="border-t border-border px-4 py-20 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to know about ResumeRank
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between gap-4 p-4 hover:bg-muted/40 transition-colors text-left"
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`size-5 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {openIndex === index && (
                  <div className="px-4 py-3 border-t border-border bg-muted/20">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
