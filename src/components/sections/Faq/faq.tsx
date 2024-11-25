"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "Apakah program ini cocok untuk pemula?",
    answer: "Absolutely! Program ini dirancang untuk semua level, dari beginner sampai advanced. Seperti yang Iman Gadzhi katakan, 'Everyone starts at zero.' Kami punya sistem yang proven untuk membimbingmu step-by-step dari nol sampai jadi expert. Yang penting kamu punya mindset yang benar dan mau all-in untuk sukses! 🚀"
  },
  {
    question: "Berapa waktu yang dibutuhkan untuk melihat hasil?",
    answer: "Here&apos;s the truth: Hasil setiap orang berbeda-beda, tergantung dedication dan action yang diambil. Tapi rata-rata member kami mulai melihat breakthrough dalam 3-6 bulan pertama. Remember what Andrew Tate says: 'Success is not about motivation, it&apos;s about dedication.' Yang pasti, sistem yang kami ajarkan adalah proven system yang sudah menghasilkan ratusan success stories! 💪"
  },
  {
    question: "Apakah ada garansi keberhasilan?",
    answer: "Real talk: Kami tidak bisa menjamin kesuksesan kamu karena itu 100% tergantung pada effort yang kamu berikan. Tapi yang bisa kami jamin adalah kamu akan mendapatkan full support, mentoring, dan akses ke sistem yang sudah terbukti berhasil. The game-changer is YOU! Siap untuk mengubah hidupmu? 🎯"
  },
  {
    question: "Bagaimana dengan support system-nya?",
    answer: "This is what makes us different! Kamu akan dapat akses ke private community exclusive yang isinya para high-achievers. Plus, weekly coaching calls, 1-on-1 mentoring, dan 24/7 support dari team kami. Ini bukan sekedar program, tapi satu ecosystem untuk kesuksesanmu! 🌟"
  },
  {
    question: "Apakah bisa diikuti sambil kerja full-time?",
    answer: "100% bisa! Program ini didesign untuk busy professionals yang ingin build their empire sambil tetap kerja. Semua materi bisa diakses kapan saja, di mana saja. Remember: 'Your current job is funding your future empire.' Time management? We got you covered with our proven productivity system! 💼"
  },
  {
    question: "Apa yang membedakan program ini dengan yang lain?",
    answer: "Straight facts: Kami bukan cuma kasih theory, tapi actual blueprint yang sudah proven works! Plus, kamu dapat:\n\n• Real-time support dari successful mentors\n• Access ke private network high-level entrepreneurs\n• Weekly live sessions untuk accelerate progress\n• Exclusive tools & templates worth 150jt+\n\nThis is not just a course, it&apos;s your complete business system! 🚀"
  }
];

export function Faq() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header - adjusted spacing and text sizes for mobile */}
          <div className="text-left mb-8 md:mb-12">
            <div className="text-blue-600/80 text-lg md:text-xl mb-4 md:mb-6 font-serif tracking-widest">/06</div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 text-blue-600 font-serif leading-snug tracking-tight">
              Frequently Asked
              <br />
              Questions
            </h2>
            <p className="text-lg md:text-2xl text-blue-600/70 max-w-3xl font-light leading-relaxed">
              Get answers to the most common questions about our program
            </p>
          </div>

          {/* FAQ Accordion - adjusted padding and text sizes for mobile */}
          <div className="mt-8 md:mt-12">
            <Accordion type="single" collapsible className="space-y-4 md:space-y-6">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-blue-200/30 rounded-xl px-4 md:px-6 py-3 md:py-4 bg-blue-50/30"
                >
                  <AccordionTrigger className="text-lg md:text-xl font-semibold text-blue-800 hover:text-blue-600 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base md:text-lg text-blue-600/70 leading-relaxed pt-3 md:pt-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom CTA - adjusted spacing and text sizes for mobile */}
          <div className="mt-12 md:mt-16 text-center">
            <p className="text-xl md:text-2xl text-blue-600/70 mb-6 md:mb-8">
              Still have questions? We&apos;re here to help!
            </p>
            <button className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 