import React, { useState } from 'react';

const faqData = [
  {
    question: 'Какие услуги предлагает ваша компания?',
    answer: 'Мы предоставляем полный цикл IT-услуг: web и мобильная разработка, backend, облачные решения, автоматизация, аудит, сопровождение.'
  },
  {
    question: 'Какие этапы работы включает создание сайта?',
    answer: 'Аналитика, бриф, прототип, дизайн, разработка, тестирование, запуск, поддержка.'
  },
  {
    question: 'Как можно получить контакты вашей компании?',
    answer: 'Контакты указаны в разделе "Связаться" и в футере сайта. Также доступна форма заявки.'
  },
  {
    question: 'Что такое бриф и почему он нужен?',
    answer: 'Бриф — это опросник для сбора требований к проекту. Он помогает точно определить задачи и ожидания.'
  },
  {
    question: 'Какие результаты поиска вы обеспечиваете?',
    answer: 'SEO-оптимизация, рост позиций в поисковых системах, увеличение трафика и конверсий.'
  },
  {
    question: 'Какие этапы включает разработка мобильного приложения?',
    answer: 'Аналитика, UX/UI, разработка, интеграция, тестирование, публикация, поддержка.'
  },
  {
    question: 'Можете ли вы предоставить портфолио выполненных работ?',
    answer: 'Да, портфолио доступно в соответствующем разделе сайта.'
  },
  {
    question: 'Какие услуги аудита вы предлагаете?',
    answer: 'Аудит сайтов, приложений, безопасности, SEO, UX/UI.'
  },
  {
    question: 'Какие условия оплаты у вас действуют?',
    answer: 'Оплата поэтапная, возможны аванс и постоплата, прозрачные условия.'
  },
  {
    question: 'Какие специалисты работают в вашей компании?',
    answer: 'В команде — разработчики, дизайнеры, аналитики, менеджеры, QA, DevOps.'
  },
  {
    question: 'Как можно связаться с вашим менеджером для обсуждения проекта?',
    answer: 'Оставьте заявку через форму или напишите на email/мессенджер, менеджер свяжется с вами.'
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Часто задаваемые вопросы</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Ответы на популярные вопросы о наших услугах и работе</p>
        </div>
        <div className="max-w-2xl mx-auto">
          {faqData.map((item, idx) => (
            <div key={idx} className="mb-4 border-b border-gray-200">
              <button
                className="w-full text-left py-4 px-2 flex justify-between items-center focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="font-semibold text-gray-900 text-lg">{item.question}</span>
                <span className={`ml-2 transition-transform duration-200 ${openIndex === idx ? 'rotate-90' : ''}`}>▶</span>
              </button>
              {openIndex === idx && (
                <div className="py-2 px-2 text-gray-700 text-base animate-fade-in">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
