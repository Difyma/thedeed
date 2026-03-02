import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, CheckCircle, Zap, TrendingUp, Target, Settings } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LeadFormModal from '../LeadFormModal';
import Header from '../Header';
import Footer from '../Footer';

const BusinessAutomationGuide: React.FC = () => {
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
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16" data-aos="fade-up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Как автоматизировать бизнес-процессы: 7 рабочих схем для малого и среднего бизнеса
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-orange-100 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>12 января 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>15 мин чтения</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>Мария Петрова</span>
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
                  Ваши сотрудники тонут в рутине? Высокооплачиваемые специалисты тратят время на пересылку писем, заполнение таблиц и поиск информации в чатах? Если вы узнали свою компанию, эта статья для вас.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Автоматизация бизнес-процессов</strong> — это не прерогатива крупных корпораций с миллионными бюджетами. Сегодня это доступный инструмент, который позволяет малому и среднему бизнесу <strong>сократить издержки на 30%</strong>, <strong>ускорить выполнение задач в 2 раза</strong> и освободить время для роста.
                </p>
              </div>

              {/* Benefits */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Что такое автоматизация бизнес-процессов и зачем она вам?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Проще говоря, это передача рутинных, повторяющихся задач под управление программного обеспечения. Робот не устает, не ошибается из-за невнимательности и работает 24/7.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
                      title: 'Экономия денег',
                      description: 'Снижение фонда оплаты труда за счет исключения низкоквалифицированных операций'
                    },
                    {
                      icon: <Clock className="h-8 w-8 text-blue-600" />,
                      title: 'Экономия времени',
                      description: 'Высвобождение до 20% рабочего времени ключевых сотрудников'
                    },
                    {
                      icon: <Target className="h-8 w-8 text-purple-600" />,
                      title: 'Снижение ошибок',
                      description: 'Исключение «человеческого фактора» в критичных операциях'
                    },
                    {
                      icon: <Zap className="h-8 w-8 text-yellow-600" />,
                      title: 'Повышение скорости',
                      description: 'Мгновенное выполнение задач, которые раньше занимали часы'
                    },
                    {
                      icon: <Settings className="h-8 w-8 text-indigo-600" />,
                      title: 'Масштабируемость',
                      description: 'Выстроенные процессы легко повторяются при росте бизнеса'
                    }
                  ].map((benefit, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                      <div className="mb-4">{benefit.icon}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 7 Automation Schemes */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="400">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">7 рабочих схем автоматизации для вашего бизнеса</h2>
                <p className="text-lg text-gray-600 mb-8">Вот конкретные решения, которые работают прямо сейчас.</p>
                
                <div className="space-y-8">
                  {/* Scheme 1 */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm mr-3">1</span>
                      Автоматизация входящих лидов и CRM
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-700 mb-3">❌ Проблема:</h4>
                        <p className="text-gray-700 mb-4">Менеджер пропускает заявки с сайта, долго перезванивает, теряет клиентов в огромной таблице Excel.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">✅ Решение:</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Заявка автоматически попадает в CRM-систему</li>
                          <li>• Мгновенное уведомление менеджеру в Telegram</li>
                          <li>• Автоматическая постановка сроков обработки</li>
                          <li>• Эскалация руководителю при просрочке</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-green-100 rounded-lg">
                      <p className="text-green-800 font-medium">📈 Результат: Скорость обработки заявок вырастает в 3 раза, ни один лид не теряется.</p>
                    </div>
                  </div>

                  {/* Scheme 2 */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      <span className="bg-green-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm mr-3">2</span>
                      Автоматизация онлайн-продаж (E-commerce)
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-700 mb-3">❌ Проблема:</h4>
                        <p className="text-gray-700 mb-4">Владелец интернет-магазина вручную обрабатывает заказы, формирует этикетки и меняет остатки на сайте.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">✅ Решение:</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Заказ автоматически попадает в систему учета</li>
                          <li>• Автоматическое резервирование товара</li>
                          <li>• Печать этикеток и чеков</li>
                          <li>• SMS и email с трек-номером</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-green-100 rounded-lg">
                      <p className="text-green-800 font-medium">📈 Результат: Возможность обрабатывать в 10 раз больше заказов без расширения штата.</p>
                    </div>
                  </div>

                  {/* Scheme 3 */}
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      <span className="bg-purple-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm mr-3">3</span>
                      Автоматизация финансового учета и отчетности
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-700 mb-3">❌ Проблема:</h4>
                        <p className="text-gray-700 mb-4">Бухгалтер тратит дни на сверку счетов, актов и накладных, возможны ошибки в расчетах.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">✅ Решение:</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Внедрение системы ЭДО</li>
                          <li>• Автоматическое формирование документов</li>
                          <li>• Импорт данных из банк-клиента</li>
                          <li>• Автоматические финансовые отчеты</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-green-100 rounded-lg">
                      <p className="text-green-800 font-medium">📈 Результат: Сокращение времени на рутинные операции бухгалтерии на 80%.</p>
                    </div>
                  </div>

                  {/* Scheme 4 */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      <span className="bg-orange-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm mr-3">4</span>
                      Автоматизация поддержки клиентов
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-red-700 mb-3">❌ Проблема:</h4>
                        <p className="text-gray-700 mb-4">Менеджеры отвечают на одни и те же вопросы в соцсетях, мессенджерах и на почте.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-700 mb-3">✅ Решение:</h4>
                        <ul className="text-gray-700 space-y-2">
                          <li>• Чатовый бот на сайт и в Telegram</li>
                          <li>• Ответы на частые вопросы</li>
                          <li>• Передача сложных вопросов менеджеру</li>
                          <li>• Триггерные email-рассылки</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-green-100 rounded-lg">
                      <p className="text-green-800 font-medium">📈 Результат: Снижение нагрузки на менеджеров на 50%, ответ клиентам 24/7.</p>
                    </div>
                  </div>

                  {/* Schemes 5-7 in compact format */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        <span className="bg-teal-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">5</span>
                        Работа с поставщиками
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">Автоматический контроль остатков и формирование заказов поставщикам</p>
                      <div className="text-xs text-green-700 bg-green-50 p-2 rounded">
                        ✅ Отсутствие простоя из-за нехватки товара
                      </div>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        <span className="bg-indigo-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">6</span>
                        Внутренние процессы
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">Корпоративный портал для постановки задач и контроля исполнения</p>
                      <div className="text-xs text-green-700 bg-green-50 p-2 rounded">
                        ✅ Рост производительности на 15-25%
                      </div>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-3">
                        <span className="bg-pink-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">7</span>
                        Маркетинг и продажи
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">Email-маркетинг, сегментация клиентов и автоматические предложения</p>
                      <div className="text-xs text-green-700 bg-green-50 p-2 rounded">
                        ✅ Рост LTV клиента на 20-40%
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Step-by-step Plan */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="600">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">С чего начать автоматизацию? Пошаговый план</h2>
                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Найдите «бутылочное горлышко»',
                      description: 'Спросите себя: на какую рутину сотрудники тратят больше всего времени? Что вызывает больше всего ошибок?'
                    },
                    {
                      step: '2',
                      title: 'Выберите 1 процесс',
                      description: 'Не пытайтесь автоматизировать все и сразу. Начните с самого болезненного и простого для автоматизации процесса.'
                    },
                    {
                      step: '3',
                      title: 'Протестируйте на демо-версиях',
                      description: 'Большинство сервисов дают бесплатный пробный период. Протестируйте схему вживую.'
                    },
                    {
                      step: '4',
                      title: 'Обучите команду',
                      description: 'Успех автоматизации на 50% зависит от готовности команды работать по-новому.'
                    },
                    {
                      step: '5',
                      title: 'Анализируйте и улучшайте',
                      description: 'После запуска отслеживайте метрики: время обработки заявки, количество ошибок.'
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="800">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Заключение</h2>
                <div className="bg-gray-50 border-l-4 border-orange-600 p-8 rounded-r-lg">
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    <strong>Автоматизация бизнес-процессов</strong> — это не про то, чтобы заменить людей роботами. Это про то, чтобы освободить людей от рутины и позволить им заниматься тем, что действительно приносит деньги: креативом, стратегией, переговорами и построением отношений с клиентами.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Не откладывайте эффективность на потом. Выберите одну схему из семи и начните ее внедрение на следующей неделе. Ваша будущая прибыль скажет вам «спасибо».
                  </p>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center" data-aos="fade-up" data-aos-delay="900">
                <h2 className="text-2xl font-bold mb-4">Не знаете, с чего начать?</h2>
                <p className="text-orange-100 mb-6 leading-relaxed">
                  Специалисты <strong>thedeed</strong> проведут <strong>бесплатный аудит</strong> ваших бизнес-процессов и подготовят персональный план автоматизации, который окупится уже в первые месяцы.
                </p>
                <div className="flex justify-center">
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
                  >
                    Получить бесплатный аудит
                  </button>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
      <Footer />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="BusinessAutomationGuide" />
    </div>
  );
};

export default BusinessAutomationGuide;