import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { CTAButton } from '../shared/CTAButton';

interface FAQItemProps {
  question: string;
  answer: string;
}

const faqs: FAQItemProps[] = [
  {
    question: 'É possível utilizar a Planilha e os materiais pelo celular?',
    answer: 'Sim. Você pode utilizar em qualquer dispositivo móvel e computador.',
  },
  {
    question: 'Tem Garantia?',
    answer: 'Sim. Garantia de 7 dias, caso não fique satisfeito reembolsamos 100% do valor.',
  },
  {
    question: 'Essa planilha é diferente das outras?',
    answer: 'Sim. Ela vem com videoaula ensinando como utilizar, Assistente Financeiro 24hrs e 128 livros em PDF focados em organização financeira...',
  },
  {
    question: 'É fácil de usar?',
    answer: 'Sim. A planilha foi criada para quem nunca consegue se organizar, mesmo sem experiência com finanças ou planilhas.',
  },
  {
    question: 'Vou receber o material na hora?',
    answer: 'Sim. O acesso é enviado automaticamente para o seu e-mail logo após a confirmação da compra.',
  },
  {
    question: 'Preciso pagar mensalidade?',
    answer: 'Não. O pagamento é feito apenas uma vez, sem cobranças mensais.',
  },
];

function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left bg-white"
      >
        <span className="text-base md:text-lg font-semibold text-gray-900 pr-4">{question}</span>
        <div className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 bg-primary-100 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-primary-600" />
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48' : 'max-h-0'}`}>
        <div className="p-4 md:p-5 pt-0 bg-white">
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section className="py-8 md:py-5 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-primary-100 rounded-2xl mb-4 md:mb-5">
            <HelpCircle className="w-6 h-6 md:w-7 md:h-7 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Questions Fréquentes
          </h2>
        </div>

        <div className="space-y-3 mb-8 md:mb-10">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>

        <div className="text-center">
          <a href="#pricing">
    <CTAButton>JE VEUX ACCÉDER MAINTENANT</CTAButton>
  </a>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 text-gray-500 text-xs">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              <span>Achat 100% sécurisé</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              <span>Garantie 14 jours</span>
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>Accès immédiat par e-mail</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
