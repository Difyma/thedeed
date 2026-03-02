import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, DollarSign, PieChart, TrendingUp, Calculator, CheckCircle, AlertCircle, Lightbulb, Target } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LeadFormModal from '../LeadFormModal';
import Header from '../Header';
import Footer from '../Footer';

const DevelopmentCostGuide: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  // Автоматический скролл вверх при загрузке страницы
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  useEffect(() => {
    // Прокрутка к началу страницы при загрузке
    window.scrollTo(0, 0);
    
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/blog" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Назад к блогу</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="bg-gray-900 p-2 rounded-lg flex items-center justify-center">
                <img src="/_logo_thedeed.png" alt="thedeed" className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">the<span className="text-blue-600">deed</span></span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16" data-aos="fade-up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <Calculator className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Сколько стоит заказная разработка программного обеспечения в 2025 году? [Разбор с примерами]
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-blue-100 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>3 января 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>10 мин чтения</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>Игорь Морозов</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12" data-aos="fade-up" data-aos-delay="200">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Один из самых частых и главных вопросов, который задают нам клиенты: «Сколько стоит разработка программного обеспечения?». Однозначного ответа нет, и именно это смущает.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Цена может варьироваться от нескольких сотен тысяч до десятков миллионов рублей. В 2025 году на стоимость влияет не только сложность, но и новые факторы: интеграция искусственного интеллекта, кибербезопасность и сложная архитектура.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <p className="text-blue-800 font-medium">
                    💡 В этой статье мы разложим по полочкам ценообразование и приведем конкретные примеры расчетов, чтобы вы могли прикинуть бюджет своего проекта.
                  </p>
                </div>
              </div>

              {/* Why No Fixed Price */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Почему нельзя назвать точную цену сразу?</h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Разработка ПО с нуля — это не покупка товара с ценником, а скорее <strong>строительство дома по индивидуальному проекту</strong>. Стоимость зависит от:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      icon: <Target className="h-8 w-8 text-blue-600" />,
                      title: 'Размера и сложности «дома»',
                      description: 'Функционал, технологии, интеграции'
                    },
                    {
                      icon: <User className="h-8 w-8 text-green-600" />,
                      title: 'Опыта «строителей»',
                      description: 'Команда, студия, фрилансеры'
                    },
                    {
                      icon: <Clock className="h-8 w-8 text-orange-600" />,
                      title: 'Сроков сдачи',
                      description: 'Срочность всегда дороже'
                    },
                    {
                      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
                      title: '«Отделки и умного дома»',
                      description: 'Дизайн, анимации, интеграция AI'
                    }
                  ].map((factor, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">{factor.icon}</div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{factor.title}</h3>
                          <p className="text-gray-600">{factor.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                  <p className="text-yellow-800">
                    ⚠️ Прежде чем назвать цену, надежный подрядчик проведет глубокий аудит и составит техническое задание (ТЗ).
                  </p>
                </div>
              </section>

              {/* Cost Structure */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="400">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <PieChart className="h-8 w-8 text-blue-600 mr-3" />
                  Из чего складывается стоимость разработки?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Чтобы понимать, за что вы платите, разберем структуру затрат любой студии:
                </p>
                <div className="space-y-6">
                  {[
                    {
                      stage: 'Аналитика и проектирование',
                      percentage: '10-15%',
                      color: 'bg-blue-600',
                      description: 'Самый важный этап. Аналитики изучают ваши бизнес-процессы, проектируют архитектуру системы, продумывают пользовательские сценарии.'
                    },
                    {
                      stage: 'Дизайн',
                      percentage: '10-20%',
                      color: 'bg-purple-600',
                      description: 'Разработка UI/UX дизайна: прототипы, визуальный стиль, адаптация под все устройства, анимации.'
                    },
                    {
                      stage: 'Непосредственно разработка',
                      percentage: '40-60%',
                      color: 'bg-green-600',
                      description: 'Самая затратная часть. Работа frontend, backend, мобильных разработчиков, DevOps-инженеров.'
                    },
                    {
                      stage: 'Тестирование и QA',
                      percentage: '15-20%',
                      color: 'bg-orange-600',
                      description: 'Гарантия качества. Тестировщики проверяют функционал, безопасность, удобство и производительность системы.'
                    },
                    {
                      stage: 'Внедрение и поддержка',
                      percentage: '5-10%+',
                      color: 'bg-indigo-600',
                      description: 'Запуск проекта на рабочих серверах, обучение сотрудников. Далее — ежегодная техническая поддержка (15-25% от стоимости разработки в год).'
                    }
                  ].map((stage, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-4 h-4 ${stage.color} rounded-full`}></div>
                        <h3 className="text-lg font-semibold text-gray-900">{stage.stage}</h3>
                        <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                          {stage.percentage} бюджета
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{stage.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Price Examples */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="500">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                  Примеры цен на заказную разработку в 2025 году
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Цены указаны в рублях для студии среднего ценового сегмента с опытом.
                </p>
                <div className="space-y-8">
                  {[
                    {
                      title: '1. Корпоративный сайт или лендинг',
                      includes: 'Современный дизайн, система управления контентом (CMS), адаптивная верстка, базовые формы заявок.',
                      timeline: '1-2 месяца',
                      cost: 'от 500 000 до 1 200 000 ₽',
                      color: 'from-blue-50 to-indigo-50',
                      borderColor: 'border-blue-200'
                    },
                    {
                      title: '2. Интернет-магазин средней сложности',
                      includes: 'Каталог товаров, корзина, интеграция с эквайрингом (онлайн-оплата), личный кабинет, базовая CRM для управления заказами, интеграция с 1С.',
                      timeline: '3-5 месяцев',
                      cost: 'от 1 500 000 до 3 000 000 ₽',
                      color: 'from-green-50 to-emerald-50',
                      borderColor: 'border-green-200'
                    },
                    {
                      title: '3. Мобильное приложение (одна платформа: iOS ИЛИ Android)',
                      includes: 'Нативное приложение с современным дизайном, работа с сервером (бэкенд), панель администратора.',
                      timeline: '4-6 месяцев',
                      cost: 'от 1 800 000 до 3 500 000 ₽',
                      color: 'from-purple-50 to-violet-50',
                      borderColor: 'border-purple-200'
                    },
                    {
                      title: '4. Комплексная CRM/ERP-система',
                      includes: 'Система управления клиентами, складской учет, аналитика и отчетность, финансовый модуль, интеграция с телефонией, почтой и прочими сервисами.',
                      timeline: '6-12+ месяцев',
                      cost: 'от 4 000 000 до 10 000 000+ ₽',
                      color: 'from-orange-50 to-amber-50',
                      borderColor: 'border-orange-200'
                    }
                  ].map((example, index) => (
                    <div key={index} className={`bg-gradient-to-r ${example.color} border ${example.borderColor} rounded-xl p-8`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{example.title}</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">📋 Что входит:</h4>
                          <p className="text-gray-700 text-sm leading-relaxed">{example.includes}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">⏰ Сроки:</h4>
                          <p className="text-gray-700 text-sm">{example.timeline}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">💰 Стоимость:</h4>
                          <p className="text-2xl font-bold text-gray-900">{example.cost}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cost Factors */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="600">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Что серьезно влияет на рост стоимости?</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Помимо базового функционала, есть факторы, которые могут удорожить проект на 30-100%:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    'Интеграция с внешними системами (1С, SAP, сервисы доставки, платежные шлюзы, госуслуги)',
                    'Нестандартный, сложный дизайн с уникальной анимацией и кастомными элементами',
                    'Высокие требования к безопасности (например, для финтех или медтех проектов)',
                    'Внедрение элементов искусственного интеллекта (AI): чат-боты с NLP, рекомендательные системы',
                    'Разработка под несколько платформ (iOS + Android + Веб-админка)',
                    'Срочность и сжатые сроки разработки'
                  ].map((factor, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white border border-red-200 rounded-lg p-4">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-gray-700">{factor}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pricing Models */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="700">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Как формируется цена: 2 основных модели</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-red-900 mb-4">1. Фиксированная цена (Fixed Price)</h3>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Как работает:</h4>
                      <p className="text-gray-700 text-sm mb-4">Вы приходите с готовым и неизменным ТЗ, подрядчик называет точную сумму и срок.</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-1">✅ Плюсы:</h4>
                        <p className="text-gray-700 text-sm">Вы знаете точный бюджет</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-1">❌ Минусы:</h4>
                        <p className="text-gray-700 text-sm">Нет гибкости. Любые изменения требуют отдельного согласования и доплат.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                    <h3 className="text-xl font-bold text-green-900 mb-4">2. Time & Material («Время и материалы»)</h3>
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Как работает:</h4>
                      <p className="text-gray-700 text-sm mb-4">Вы платите за фактически потраченное время команды. Бюджет и сроки ориентировочные.</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-green-700 mb-1">✅ Плюсы:</h4>
                        <p className="text-gray-700 text-sm">Максимальная гибкость. Можете менять требования в процессе.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-700 mb-1">⚠️ Минусы:</h4>
                        <p className="text-gray-700 text-sm">Требует большего доверия и вовлеченности от заказчика.</p>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-green-100 rounded">
                      <p className="text-green-800 text-sm font-medium">
                        🏆 Актуальнее в 2025: Time & Material доминирует, так как позволяет гибко реагировать на изменения.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cost Reduction Tips */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="800">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Lightbulb className="h-8 w-8 text-yellow-600 mr-3" />
                  Как снизить стоимость разработки без потери качества?
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Начните с MVP',
                      description: 'Создайте минимальную рабочую версию продукта с ключевым функционалом. Это позволит быстрее выйти на рынок и проверить гипотезу.'
                    },
                    {
                      title: 'Используйте готовые решения',
                      description: 'Для некритичных частей проекта (например, блог на сайте) используйте WordPress или другие CMS.'
                    },
                    {
                      title: 'Готовьте ТЗ силами своей команды',
                      description: 'Чем детальнее вы опишете требования, тем точнее будет оценка и меньше доработок.'
                    },
                    {
                      title: 'Выбирайте аутсорс в регионах России',
                      description: 'Стоимость часа разработки в Москве и в Екатеринбурге может отличаться на 20-40%.'
                    }
                  ].map((tip, index) => (
                    <div key={index} className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                      <div className="flex items-start gap-4">
                        <CheckCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                          <p className="text-gray-700">{tip.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="900">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Заключение: окупается ли это?</h2>
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Заказная разработка ПО — это <strong>крупная инвестиция, а не статья расходов</strong>. Правильно реализованный проект окупается за счет:
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      'Сокращения операционных издержек (автоматизация рутины)',
                      'Увеличения прибыли (за счет новых клиентов и продаж)',
                      'Создания фундамента для масштабирования бизнеса'
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="bg-blue-100 border border-blue-300 rounded-lg p-6">
                    <p className="text-blue-800 text-lg font-medium text-center">
                      💡 В 2025 году вопрос уже не в том, «дорого ли это», а в том, «сколько бизнес теряет без современного цифрового инструмента».
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center" data-aos="fade-up" data-aos-delay="1000">
                <h2 className="text-2xl font-bold mb-4">Не знаете, как оценить свой проект?</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Ответьте на 5 простых вопросов о вашем проекте, и наш lead-менеджер бесплатно подготовит предварительную оценку бюджета и сроков.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
                  >
                    Рассчитать стоимость моего проекта
                  </button>
                  <a 
                    href="/pamyatka-kak-sostavit-tekhnicheskoe-zadanie-tz.docx"
                    download="Памятка - Как составить техническое задание (ТЗ).docx"
                    className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold inline-block text-center"
                  >
                    Скачать памятку «Как составить ТЗ»
                  </a>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
      <Footer />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="DevelopmentCostGuide" />
    </div>
  );
};

export default DevelopmentCostGuide;