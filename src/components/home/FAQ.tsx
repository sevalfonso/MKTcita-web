'use client'

import { useState } from 'react'
import { FAQ as faqData } from '@/config/faq'
import { ChevronDown } from 'lucide-react'

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-heading font-bold text-2xl sm:text-4xl text-dark text-center mb-12">
          Preguntas frecuentes
        </h2>

        <div className="flex flex-col gap-2" role="list">
          {faqData.map(({ question, answer }, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className="border border-neutral-100 rounded-2xl overflow-hidden"
                role="listitem"
              >
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left hover:bg-neutral-50 transition-colors min-h-[56px]"
                >
                  <span className="font-medium text-dark text-sm sm:text-base leading-snug">{question}</span>
                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${i}`}
                    role="region"
                    aria-labelledby={`faq-question-${i}`}
                    className="px-5 pb-5 sm:px-6 sm:pb-6"
                  >
                    {answer.split('\n\n').map((paragraph, j) => (
                      <p key={j} className={`text-sm text-neutral-700 leading-relaxed ${j > 0 ? 'mt-3' : ''}`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
