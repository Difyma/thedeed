import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, CheckCircle, AlertTriangle, Users, Code, Shield, MessageSquare, FileText, Settings } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LeadFormModal from '../LeadFormModal';
import Header from '../Header';
import Footer from '../Footer';

const ContractorSelectionGuide: React.FC = () => {
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
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-16" data-aos="fade-up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Как выбрать подрядчика для заказной разработки: 10 критериев от практиков
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-emerald-100 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>8 января 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>8 мин чтения</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>Сергей Козлов</span>
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
                  Решение о заказной разработке software — это только полдела. Второй, и не менее важный, — выбор правильной команды. Ошибка на этом этапе может стоить вам месяцев нервов, переделок и сотен тысяч, а то и миллионов рублей.
                </p>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
                  <p className="text-lg text-red-800 font-medium">
                    ⚠️ По нашему опыту, <strong>80% провальных проектов</strong> терпят крах не из-за плохой идеи, а из-за неверного выбора исполнителя.
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Эта статья — не теоретическое руководство, а сборник <strong>практических критериев выбора подрядчика</strong>, составленный на основе нашего многолетнего опыта работы с десятками IT-компаний.
                </p>
              </div>

              {/* 10 Criteria */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">10 критериев выбора подрядчика</h2>
                
                <div className="space-y-8">
                  {/* Criterion 1 */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="bg-blue-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm mr-3">1</span>
                      <FileText className="h-6 w-6 text-blue-600 mr-3" />
                      Портфолио и релевантный опыт
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">👀 Что смотреть:</h4>
                        <p className="text-gray-700">Наличие в портфолио решений в вашей или смежной нише. Разработка для финтеха и фудшеринга — это разный опыт.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">❓ Что спрашивать:</h4>
                        <blockquote className="text-gray-700 italic border-l-4 border-blue-400 pl-4">
                          "Покажите 2-3 самых похожих на наш проект. С какими challenges вы столкнулись именно в нашей тематике?"
                        </blockquote>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-700 mb-3">⚠️ Опасность:</h4>
                        <p className="text-gray-700">Компания, которая вчера делала сайты-визитки, вряд ли справится с высоконагруженным маркетплейсом.</p>
                      </div>
                    </div>
                  </div>

                  {/* Criterion 2 */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="bg-green-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm mr-3">2</span>
                      <MessageSquare className="h-6 w-6 text-green-600 mr-3" />
                      Отзывы и кейсы
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">👀 Что смотреть:</h4>
                        <p className="text-gray-700 mb-4">Развернутые кейсы с цифрами и деталями на сайте. Отзывы на независимых платформах ценнее собственных.</p>
                        <blockquote className="text-gray-700 italic border-l-4 border-green-400 pl-4">
                          "Можем ли мы пообщаться с одним из ваших прошлых клиентов, чей проект похож на наш?"
                        </blockquote>
                      </div>
                      <div>
                        <div className="bg-red-100 border border-red-200 rounded-lg p-4">
                          <h4 className="font-semibold text-red-700 mb-2">⚠️ Красный флаг:</h4>
                          <p className="text-red-700 text-sm">Отсутствие детальных кейсов или предложение пообщаться только с "самыми довольными" клиентами.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Criterion 3 */}
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <span className="bg-purple-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm mr-3">3</span>
                      <Code className="h-6 w-6 text-purple-600 mr-3" />
                      Технологический стек и экспертиза
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">🔍 Важно:</h4>
                        <p className="text-gray-700 mb-4">Не сам список технологий важен, а глубина expertise в них.</p>
                        <blockquote className="text-gray-700 italic border-l-4 border-purple-400 pl-4">
                          "Почему для нашего проекта вы рекомендуете именно этот стек, а не другой? Какие плюсы и минусы?"
                        </blockquote>
                      </div>
                      <div>
                        <div className="bg-yellow-100 border border-yellow-200 rounded-lg p-4">
                          <h4 className="font-semibold text-yellow-700 mb-2">⚠️ Внимание:</h4>
                          <p className="text-yellow-700 text-sm">Подрядчик может предлагать тот стек, который знает он, а не тот, который оптимален для вашего продукта.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Criterion 4-6 in compact grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <span className="bg-orange-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">4</span>
                        <Settings className="h-5 w-5 text-orange-600 mr-2" />
                        Процессы управления
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">Четкое понимание методологии: Agile, Scrum, Kanban. Этапы проектирования, тестирования и передачи.</p>
                      <blockquote className="text-xs text-gray-600 italic border-l-2 border-orange-400 pl-3">
                        "Как будет выглядеть наш типичный спринт? Как часто мы будем видеть рабочие версии?"
                      </blockquote>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <span className="bg-teal-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">5</span>
                        <Users className="h-5 w-5 text-teal-600 mr-2" />
                        Команда проекта
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">Кто конкретно будет работать? Запросите CV ключевых специалистов и познакомьтесь лично.</p>
                      <blockquote className="text-xs text-gray-600 italic border-l-2 border-teal-400 pl-3">
                        "Можем ли мы встретиться с тимлидом и архитектором?"
                      </blockquote>
                    </div>
                    
                    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                      <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                        <span className="bg-indigo-600 text-white w-6 h-6 rounded-full inline-flex items-center justify-center text-xs mr-2">6</span>
                        <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                        Прозрачность цен
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">Что входит в стоимость? Прописаны ли этапы, сроки, критерии приемки?</p>
                      <blockquote className="text-xs text-gray-600 italic border-l-2 border-indigo-400 pl-3">
                        "Time & Material или фиксированная цена? Когда возможны доплаты?"
                      </blockquote>
                    </div>
                  </div>

                  {/* Criteria 7-10 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 border border-rose-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="bg-rose-600 text-white w-7 h-7 rounded-full inline-flex items-center justify-center text-sm mr-3">7</span>
                        Подход к проектированию
                      </h3>
                      <p className="text-gray-700 mb-3">Готовность погрузиться в ваш бизнес, а не просто брать ТЗ и писать код.</p>
                      <div className="bg-red-100 border border-red-200 rounded p-3">
                        <p className="text-red-800 text-sm">⚠️ Подрядчик, который не задает уточняющих вопросов, скорее всего, ничего не понял.</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border border-amber-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="bg-amber-600 text-white w-7 h-7 rounded-full inline-flex items-center justify-center text-sm mr-3">8</span>
                        Качество коммуникации
                      </h3>
                      <p className="text-gray-700 mb-3">Быстро ли отвечают? Задают ли вопросы? Говорят ли понятным языком?</p>
                      <div className="bg-yellow-100 border border-yellow-200 rounded p-3">
                        <p className="text-yellow-800 text-sm">💡 Плохая коммуникация на старте гарантированно усугубится во время проекта.</p>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="bg-cyan-600 text-white w-7 h-7 rounded-full inline-flex items-center justify-center text-sm mr-3">9</span>
                        <Shield className="h-5 w-5 text-cyan-600 mr-2" />
                        Тестирование и качество
                      </h3>
                      <p className="text-gray-700 mb-3">Обязательно наличие отдельного QA-инженера. Политика исправления багов.</p>
                      <blockquote className="text-cyan-700 text-sm italic border-l-2 border-cyan-400 pl-3">
                        "Как организован процесс тестирования? Кто имеет доступ к тестовому окружению?"
                      </blockquote>
                    </div>

                    <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="bg-violet-600 text-white w-7 h-7 rounded-full inline-flex items-center justify-center text-sm mr-3">10</span>
                        Поддержка и сопровождение
                      </h3>
                      <p className="text-gray-700 mb-3">Условия послепусковой поддержки. Готовность передать исходный код.</p>
                      <div className="bg-violet-100 border border-violet-200 rounded p-3">
                        <p className="text-violet-800 text-sm">⚠️ Можете оказаться в пожизненной зависимости от подрядчика.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Checklist */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="600">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Чек-лист для первой встречи с подрядчиком</h2>
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      'Спросили про релевантный опыт и посмотрели кейсы',
                      'Познакомились с будущей командой проекта',
                      'Обсудили методологию управления и коммуникации',
                      'Уточнили подход к аналитике и тестированию',
                      'Получили понятное КП с детализацией',
                      'Обсудили условия пост-релизной поддержки'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 border-2 border-emerald-600 rounded flex-shrink-0 mt-1 flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                        </div>
                        <p className="text-gray-700">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="800">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Заключение</h2>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Выбор подрядчика — это не лотерея, а взвешенное решение, основанное на жестких критериях. Не стесняйтесь задавать неудобные вопросы и глубоко погружаться в детали.
                  </p>
                  <div className="bg-emerald-100 border border-emerald-300 rounded-lg p-6 mb-6">
                    <p className="text-emerald-800 font-medium text-lg">
                      💡 Помните: вы выбираете не просто исполнителя, а <strong>стратегического партнера</strong> на долгие годы.
                    </p>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Правильный выбор окупится сторицей в виде надежного, качественного продукта, который будет работать на рост вашего бизнеса.
                  </p>
                  <div className="mt-6 text-center">
                    <p className="text-2xl font-bold text-emerald-700">
                      Не доверяйте словам — доверяйте фактам и процессу.
                    </p>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center" data-aos="fade-up" data-aos-delay="900">
                <h2 className="text-2xl font-bold mb-4">Хотите быть на 100% уверены в выборе?</h2>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  Мы подготовили <strong>детальный чек-лист с 50+ вопросами</strong> для собеседования с подрядчиком. Скачайте его бесплатно и приходите на первые встречи во всеоружии.
                </p>
                <div className="flex justify-center">
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
                  >
                    Получить консультацию по выбору
                  </button>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
      <Footer />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="ContractorSelectionGuide" />
    </div>
  );
};

export default ContractorSelectionGuide;