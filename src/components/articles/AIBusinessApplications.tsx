import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Brain, Bot, BarChart3, FileText, Cog, TrendingUp, CheckCircle, Target, Lightbulb, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../Header';
import Footer from '../Footer';

const AIBusinessApplications: React.FC = () => {
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
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16" data-aos="fade-up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <Brain className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Искусственный интеллект в бизнесе: 5 практических применений помимо хайпа
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-purple-100 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>1 января 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>14 мин чтения</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>Елена Смирнова</span>
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
                  Сегодня словосочетание «искусственный интеллект» (ИИ) окружено невероятным ажиотажем. Кажется, что это нечто футуристическое, сложное и доступное только tech-гигантам.
                </p>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-8 mb-8">
                  <p className="text-lg text-purple-900 font-medium">
                    🧠 Но правда в том, что современный ИИ — это в первую очередь <strong>практичный инструмент</strong> для решения конкретных бизнес-задач здесь и сейчас.
                  </p>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Это не про роботов-гуманоидов, а про алгоритмы, которые уже сегодня могут считать быстрее, предсказывать точнее и работать круглосуточно, экономя ваши деньги и время. В этой статье мы отбросим хайп и покажем <strong>5 реальных способов применения ИИ</strong>, которые доступны бизнесу любого размера уже в 2025 году.
                </p>
              </div>

              {/* 5 AI Applications */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">5 практических применений ИИ в бизнесе</h2>
                
                <div className="space-y-12">
                  {/* Application 1 */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Target className="h-6 w-6 text-blue-600 mr-3" />
                          Персональные рекомендации и гипер-таргетирование в маркетинге
                        </h3>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">💡 Что это:</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Алгоритмы ИИ анализируют поведение каждого пользователя на вашем сайте, в приложении или в рассылках: что смотрят, что покупают, что игнорируют. На основе этого они автоматически формируют <strong>уникальные предложения</strong> для каждого человека.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white border border-blue-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🛒 Для интернет-магазина:</h4>
                            <p className="text-gray-700 text-sm">Система собирает индивидуальную витрину. Пример: "Пользователь X, купивший рюкзак, с большой вероятностью купит стильный ланчбокс и термос".</p>
                          </div>
                          <div className="bg-white border border-blue-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🎓 Для медиа/курсов:</h4>
                            <p className="text-gray-700 text-sm">ИИ рекомендует следующий материал или курс именно тем пользователям, которые с наибольшей вероятностью его приобретут.</p>
                          </div>
                        </div>
                        <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                          <p className="text-green-800 font-medium">
                            📈 <strong>Реальный результат:</strong> Рост конверсии на 15-30% и увеличение Lifetime Value (LTV) клиента за счет более релевантного взаимодействия.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application 2 */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Bot className="h-6 w-6 text-green-600 mr-3" />
                          AI-ассистенты и чат-боты нового поколения
                        </h3>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">💡 Что это:</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Это уже не глупые боты с заготовленными ответами «нажмите 1». Современные чат-боты на базе <strong>Natural Language Processing (NLP)</strong> понимают контекст, сленг и даже настроение клиента. Они учатся на каждом диалоге.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white border border-green-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🎧 Служба поддержки:</h4>
                            <p className="text-gray-700 text-sm">Бот обрабатывает до 80% типовых запросов (статус заказа, возврат, вопросы по доставке), освобождая живых операторов для сложных кейсов.</p>
                          </div>
                          <div className="bg-white border border-green-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">💼 Внутренний помощник:</h4>
                            <p className="text-gray-700 text-sm">Бот в корпоративном чате отвечает на вопросы сотрудников: "Сколько дней отпуска осталось?", "Напомни реквизиты компании".</p>
                          </div>
                        </div>
                        <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                          <p className="text-green-800 font-medium">
                            📈 <strong>Реальный результат:</strong> Снижение нагрузки на колл-центр до 40% и экономия на фонде оплаты труда.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application 3 */}
                  <div className="bg-gradient-to-r from-purple-50 to-violet-50 border border-purple-200 rounded-xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
                          Предиктивная аналитика и прогнозирование спроса
                        </h3>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">💡 Что это:</h4>
                          <p className="text-gray-700 leading-relaxed">
                            ИИ-модели анализируют огромные массивы данных: ваши продажи, сезонность, макроэкономические показатели, даже погоду и новостные тренды. Это позволяет <strong>не угадывать, а точно предсказывать</strong> будущий спрос.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white border border-purple-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🛍️ Розничная торговля:</h4>
                            <p className="text-gray-700 text-sm">Система прогнозирует, какой товар и в каком количестве будет пользоваться спросом в следующем месяце. Оптимизация закупок и складских запасов.</p>
                          </div>
                          <div className="bg-white border border-purple-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🚗 Сфера услуг:</h4>
                            <p className="text-gray-700 text-sm">Алгоритм предсказывает всплески спроса (праздники, плохая погода, концерты) и заранее подгоняет больше исполнителей в нужные районы.</p>
                          </div>
                        </div>
                        <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                          <p className="text-green-800 font-medium">
                            📈 <strong>Реальный результат:</strong> Сокращение затрат на логистику и хранение на 10-25%, увеличение оборачиваемости товаров.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application 4 */}
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <FileText className="h-6 w-6 text-orange-600 mr-3" />
                          Автоматизация документооборота и обработки данных
                        </h3>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">💡 Что это:</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Алгоритмы компьютерного зрения и NLP могут «читать», структурировать и извлекать данные из документов так же, как это делает человек, но в тысячи раз быстрее и без ошибок.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                          <div className="bg-white border border-orange-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">💰 Бухгалтерия:</h4>
                            <p className="text-gray-700 text-sm">Автоматическая обработка счетов, актов, накладных и занесение данных в учетную систему (1С, SAP).</p>
                          </div>
                          <div className="bg-white border border-orange-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">⚖️ Юриспруденция:</h4>
                            <p className="text-gray-700 text-sm">Анализ сотен договоров за минуты для поиска рискованных пунктов или несоответствий шаблону.</p>
                          </div>
                          <div className="bg-white border border-orange-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">👥 HR:</h4>
                            <p className="text-gray-700 text-sm">Парсинг резюме, автоматический отсев неподходящих кандидатов и ранжирование по релевантности.</p>
                          </div>
                        </div>
                        <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                          <p className="text-green-800 font-medium">
                            📈 <strong>Реальный результат:</strong> Скорость обработки документов увеличивается в десятки раз, количество ошибок стремится к нулю.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application 5 */}
                  <div className="bg-gradient-to-r from-indigo-50 to-blue-50 border border-indigo-200 rounded-xl p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">5</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Cog className="h-6 w-6 text-indigo-600 mr-3" />
                          Контроль качества и предсказательное обслуживание
                        </h3>
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3">💡 Что это:</h4>
                          <p className="text-gray-700 leading-relaxed">
                            Компьютерное зрение и анализ данных позволяют отслеживать качество продукции на производстве и предугадывать поломки оборудования до того, как они произойдут.
                          </p>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white border border-indigo-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🏭 Производство:</h4>
                            <p className="text-gray-700 text-sm">Камеры с ИИ-алгоритмами на конвейере в реальном времени обнаруживают дефекты продукции (трещины, сколы, неправильная окраска) с точностью, превышающей человеческую.</p>
                          </div>
                          <div className="bg-white border border-indigo-200 rounded-lg p-4">
                            <h4 className="font-semibold text-gray-900 mb-2">🚛 Логистика и транспорт:</h4>
                            <p className="text-gray-700 text-sm">Датчики собирают данные о вибрации, температуре, нагрузке. ИИ предупреждает о вероятной поломке заранее, позволяя провести техобслуживание.</p>
                          </div>
                        </div>
                        <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                          <p className="text-green-800 font-medium">
                            📈 <strong>Реальный результат:</strong> Снижение брака на 20-35% и сокращение затрат на внеплановый ремонт оборудования.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Implementation Guide */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="600">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Lightbulb className="h-8 w-8 text-yellow-600 mr-3" />
                  С чего начать внедрение ИИ?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Не пытайтесь внедрить всё и сразу. Начните с одной точечной и болезненной задачи.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Найдите «узкое горлышко»',
                      description: 'Где больше всего рутины, ошибок или потерь? Обработка заявок? Складской учет?',
                      color: 'bg-blue-600'
                    },
                    {
                      step: '2',
                      title: 'Соберите данные',
                      description: 'ИИ учится на данных. Убедитесь, что у вас есть оцифрованная информация для анализа.',
                      color: 'bg-green-600'
                    },
                    {
                      step: '3',
                      title: 'Начните с пилотного проекта',
                      description: 'Автоматизируйте один процесс и измерьте его эффективность. Например, внедрите умный чат-бот для ответа на частые вопросы.',
                      color: 'bg-purple-600'
                    },
                    {
                      step: '4',
                      title: 'Выбирайте готовые SaaS-решения',
                      description: 'Не обязательно разрабатывать ИИ с нуля. Часто можно использовать готовые сервисы с API-интеграцией.',
                      color: 'bg-orange-600'
                    }
                  ].map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 ${step.color} text-white rounded-full flex items-center justify-center font-bold text-lg`}>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Заключение</h2>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-xl p-8">
                  <div className="flex items-start gap-6">
                    <Brain className="h-12 w-12 text-purple-600 flex-shrink-0 mt-2" />
                    <div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        <strong>Искусственный интеллект</strong> перестал быть технологией будущего. Это практичный инструмент для оптимизации затрат и роста прибыли, который доступен уже сегодня.
                      </p>
                      <div className="bg-purple-100 border border-purple-300 rounded-lg p-6">
                        <p className="text-purple-800 text-lg font-medium text-center">
                          🎯 Главное — смотреть на него не как на магию, а как на <strong>мощный калькулятор для вашего бизнеса</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center" data-aos="fade-up" data-aos-delay="900">
                <h2 className="text-2xl font-bold mb-4">Хотите найти лучшее применение ИИ именно в вашем бизнесе?</h2>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  Наши эксперты проводят бесплатный аудит процессов и составляют roadmap по внедрению искусственного интеллекта с расчетом ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/#contact"
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center justify-center gap-2"
                  >
                    Получить бесплатный аудит
                    <Zap className="h-4 w-4" />
                  </Link>
                  <button className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-purple-600 transition-colors duration-200 font-semibold">
                    Скачать PDF-гид по внедрению ИИ
                  </button>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default AIBusinessApplications;