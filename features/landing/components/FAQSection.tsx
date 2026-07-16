"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What is ResumeRank?",
    answer:
      "ResumeRank is an AI-powered platform that analyzes your resume, provides ATS compatibility scores, identifies missing keywords, and suggests improvements to increase your chances of landing interviews.",
  },
  {
    question: "How does ATS scoring work?",
    answer:
      "Our AI evaluates your resume against modern Applicant Tracking System standards including formatting, keywords, readability, and section quality to generate an estimated ATS score.",
  },
  {
    question: "Is my resume stored securely?",
    answer:
      "Yes. Your resumes are securely stored and accessible only to your account. We prioritize privacy and data security.",
  },
  {
    question: "Can I analyze multiple resumes?",
    answer:
      "Yes. Free users can analyze a limited number of resumes, while Pro users will have unlimited analyses and version history.",
  },
  {
    question: "Does ResumeRank guarantee interviews?",
    answer:
      "No. ResumeRank helps optimize your resume and improve ATS compatibility, but interview outcomes also depend on your experience, skills, and the hiring process.",
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="border-t border-border px-4 py-24"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <span className="rounded-full border border-brand/20 bg-brand/10 px-4 py-1 text-sm font-medium text-brand">
            FAQ
          </span>

          <h2 className="mt-5 text-4xl font-bold sm:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="text-muted-foreground mt-5 text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        <Accordion className="space-y-4">
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.question}
              value={faq.question}
              className="rounded-2xl border px-6"
            >
              <AccordionTrigger className="text-left text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground leading-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}