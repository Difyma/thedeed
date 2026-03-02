import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Brain, Target, Bot, BarChart3, FileText, Cog, TrendingUp, CheckCircle, Download, Zap } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LeadFormModal from '../LeadFormModal';
import Header from '../Header';
import Footer from '../Footer';

const AIBusinessGuide2025: React.FC = () => {
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
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16" data-aos="fade-up">
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
              <div className="flex flex-wrap items-center justify-center gap-6 text-indigo-100 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>3 января 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>12 мин чтения</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>Алексей Михайлов</span>
                </div>
              </div>
              <p className="text-xl text-indigo-100 leading-relaxed">
                Как использовать искусственный интеллект в бизнесе уже сегодня? Реальные кейсы применения AI для автоматизации, аналитики и роста прибыли без лишнего шума.
              </p>
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
                <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 mb-8">
                  <div className="flex items-start gap-4">
                    <Brain className="h-8 w-8 text-indigo-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-lg text-indigo-900 font-medium mb-2">
                        Но правда в том, что современный ИИ — это в первую очередь <strong>практичный инструмент</strong> для решения конкретных бизнес-задач здесь и сейчас.
                      </p>
                      <p className="text-indigo-800">
                        Это не про роботов-гуманоидов, а про алгоритмы, которые уже сегодня могут считать быстрее, предсказывать точнее и работать круглосуточно, экономя ваши деньги и время.
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  В этой статье мы отбросим хайп и покажем <strong>5 реальных способов применения ИИ</strong>, которые доступны бизнесу любого размера уже в 2025 году.
                </p>
              </div>

              {/* 5 AI Applications */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">5 практических применений ИИ в бизнесе</h2>
                
                <div className="space-y-8">
                  {/* Application 1 */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">1</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Target className="h-6 w-6 text-blue-600 mr-3" />
                          Персональные рекомендации и гипер-таргетирование в маркетинге
                        </h3>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Что это:
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            Алгоритмы ИИ анализируют поведение каждого пользователя на вашем сайте, в приложении или в рассылках: что смотрят, что покупают, что игнорируют. На основе этого они автоматически формируют <strong>уникальные предложения</strong> для каждого человека.
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                            Как это работает на практике:
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <h5 className="font-semibold text-blue-900 mb-2 flex items-center">
                                🛒 Для интернет-магазина:
                              </h5>
                              <p className="text-blue-800 text-sm">
                                Система не просто показывает «похожие товары», а собирает индивидуальную витрину. Например: «Пользователь X, который купил у вас рюкзак, с большой вероятностью купит стильный ланчбокс и термос». Это увеличивает средний чек.
                              </p>
                            </div>
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                              <h5 className="font-semibold text-blue-900 mb-2 flex items-center">
                                🎓 Для медиа или онлайн-курсов:
                              </h5>
                              <p className="text-blue-800 text-sm">
                                ИИ рекомендует следующий материал или курс именно тем пользователям, которые с наибольшей вероятностью его приобретут, основываясь на истории их просмотров.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                          <p className="text-green-800 font-medium flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2" />
                            <strong>Реальный результат:</strong> Рост конверсии на 15-30% и увеличение Lifetime Value (LTV) клиента за счет более релевантного взаимодействия.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application 2 */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">2</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Bot className="h-6 w-6 text-green-600 mr-3" />
                          AI-ассистенты и чат-боты нового поколения
                        </h3>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Что это:
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            Это уже не глупые боты с заготовленными ответами «нажмите 1». Современные чат-боты на базе <strong>Natural Language Processing (NLP)</strong> понимают контекст, сленг и даже настроение клиента. Они учатся на каждом диалоге.
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            Как это работает на практике:
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <h5 className="font-semibold text-green-900 mb-2">
                                🎧 Служба поддержки:
                              </h5>
                              <p className="text-green-800 text-sm">
                                Бот обрабатывает до 80% типовых запросов (статус заказа, возврат, вопросы по доставке), освобождая живых операторов для решения сложных кейсов.
                              </p>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <h5 className="font-semibold text-green-900 mb-2">
                                💼 Внутренний помощник:
                              </h5>
                              <p className="text-green-800 text-sm">
                                Бот в корпоративном чате (например, Telegram или Slack) может отвечать на вопросы сотрудников: «Сколько дней отпуска у меня осталось?», «Напомни реквизиты компании», «Закажи канцелярию».
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                          <p className="text-green-800 font-medium flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2" />
                            <strong>Реальный результат:</strong> Снижение нагрузки на колл-центр до 40% и экономия на фонде оплаты труда.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application 3 */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">3</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <BarChart3 className="h-6 w-6 text-purple-600 mr-3" />
                          Предиктивная аналитика и прогнозирование спроса
                        </h3>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            Что это:
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            ИИ-модели анализируют огромные массивы данных: ваши продажи, сезонность, макроэкономические показатели, даже погоду и новостные тренды. Это позволяет <strong>не угадывать, а точно предсказывать</strong> будущий спрос.
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                            Как это работает на практике:
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                              <h5 className="font-semibold text-purple-900 mb-2">
                                🛍️ Розничная торговля:
                              </h5>
                              <p className="text-purple-800 text-sm">
                                Система прогнозирует, какой товар и в каком количестве будет пользоваться спросом в следующем месяце. Это позволяет оптимизировать закупки и складские запасы, избегая затоваривания или недопоставок.
                              </p>
                            </div>
                            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                              <h5 className="font-semibold text-purple-900 mb-2">
                                🚗 Сфера услуг:
                              </h5>
                              <p className="text-purple-800 text-sm">
                                Алгоритм предсказывает всплески спроса (праздники, плохая погода, концерты) и заранее подгоняет больше исполнителей в нужные районы (такси, доставка еды).
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                          <p className="text-green-800 font-medium flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2" />
                            <strong>Реальный результат:</strong> Сокращение затрат на логистику и хранение на 10-25%, увеличение оборачиваемости товаров.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application 4 */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">4</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <FileText className="h-6 w-6 text-orange-600 mr-3" />
                          Автоматизация документооборота и обработки данных
                        </h3>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                            Что это:
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            Алгоритмы компьютерного зрения и NLP могут «читать», структурировать и извлекать данные из документов так же, как это делает человек, но в тысячи раз быстрее и без ошибок.
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                            Как это работает на практике:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                              <h5 className="font-semibold text-orange-900 mb-2">
                                💰 Бухгалтерия и финансы:
                              </h5>
                              <p className="text-orange-800 text-sm">
                                ИИ автоматически обрабатывает счета, акты, накладные и заносит данные в учетную систему (1С, SAP). Он находит несоответствия и подозрительные операции.
                              </p>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                              <h5 className="font-semibold text-orange-900 mb-2">
                                ⚖️ Юриспруденция:
                              </h5>
                              <p className="text-orange-800 text-sm">
                                Алгоритм анализирует сотни договоров за минуты, чтобы найти рискованные пункты или несоответствия шаблону.
                              </p>
                            </div>
                            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                              <h5 className="font-semibold text-orange-900 mb-2">
                                👥 HR:
                              </h5>
                              <p className="text-orange-800 text-sm">
                                Парсит резюме, автоматически отсеивает неподходящих кандидатов и ранжирует остальных по релевантности.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                          <p className="text-green-800 font-medium flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2" />
                            <strong>Реальный результат:</strong> Скорость обработки документов увеличивается в десятки раз, а количество ошибок из-за «человеческого фактора» стремится к нулю.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Application 5 */}
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">5</div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                          <Cog className="h-6 w-6 text-indigo-600 mr-3" />
                          Контроль качества и предсказательное обслуживание
                        </h3>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                            Что это:
                          </h4>
                          <p className="text-gray-700 leading-relaxed">
                            Компьютерное зрение и анализ данных позволяют отслеживать качество продукции на производстве и предугадывать поломки оборудования до того, как они произойдут.
                          </p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                            <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                            Как это работает на практике:
                          </h4>
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                              <h5 className="font-semibold text-indigo-900 mb-2">
                                🏭 Производство:
                              </h5>
                              <p className="text-indigo-800 text-sm">
                                Камеры с ИИ-алгоритмами на конвейере в реальном времени обнаруживают дефекты продукции (трещины, сколы, неправильная окраска) с точностью, превышающей человеческую.
                              </p>
                            </div>
                            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                              <h5 className="font-semibold text-indigo-900 mb-2">
                                🚛 Логистика и транспорт:
                              </h5>
                              <p className="text-indigo-800 text-sm">
                                Датчики на грузовиках или станках собирают данные о вибрации, температуре, нагрузке. ИИ анализирует их и предупреждает, что конкретная деталь вероятнее всего выйдет из строя через 2 недели.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                          <p className="text-green-800 font-medium flex items-center">
                            <TrendingUp className="h-5 w-5 mr-2" />
                            <strong>Реальный результат:</strong> Снижение брака на 20-35% и сокращение затрат на внеплановый ремонт оборудования.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Implementation Guide */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="500">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">С чего начать внедрение ИИ?</h2>
                <p className="text-lg text-gray-600 mb-8 text-center">
                  Не пытайтесь внедрить всё и сразу. Начните с одной точечной и болезненной задачи.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      step: '1',
                      title: 'Найдите «узкое горлышко»',
                      description: 'Где больше всего рутины, ошибок или потерь? Обработка заявок? Складской учет?',
                      icon: Target,
                      color: 'bg-blue-500'
                    },
                    {
                      step: '2',
                      title: 'Соберите данные',
                      description: 'ИИ учится на данных. Убедитесь, что у вас есть оцифрованная информация для анализа.',
                      icon: BarChart3,
                      color: 'bg-green-500'
                    },
                    {
                      step: '3',
                      title: 'Начните с пилотного проекта',
                      description: 'Автоматизируйте один процесс и измерьте его эффективность. Например, внедрите умный чат-бот для ответа на частые вопросы.',
                      icon: Bot,
                      color: 'bg-purple-500'
                    },
                    {
                      step: '4',
                      title: 'Выбирайте готовые SaaS-решения',
                      description: 'Не обязательно разрабатывать ИИ с нуля. Часто можно использовать готовые сервисы с API-интеграцией.',
                      icon: Cog,
                      color: 'bg-orange-500'
                    }
                  ].map((step, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 ${step.color} text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                          {step.step}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <step.icon className="h-6 w-6 text-gray-600" />
                            <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                          </div>
                          <p className="text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="600">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Заключение</h2>
                  <div className="flex items-start gap-6">
                    <Brain className="h-12 w-12 text-indigo-600 flex-shrink-0 mt-2" />
                    <div>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        <strong>Искусственный интеллект</strong> перестал быть технологией будущего. Это практичный инструмент для оптимизации затрат и роста прибыли, который доступен уже сегодня.
                      </p>
                      <div className="bg-indigo-100 border border-indigo-300 rounded-lg p-6">
                        <p className="text-indigo-800 text-lg font-medium text-center">
                          🎯 Главное — смотреть на него не как на магию, а как на <strong>мощный калькулятор для вашего бизнеса</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center" data-aos="fade-up" data-aos-delay="700">
                <Brain className="h-16 w-16 mx-auto mb-6 text-white" />
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">Хотите найти лучшее применение ИИ именно в вашем бизнесе?</h2>
                <p className="text-indigo-100 mb-8 leading-relaxed text-lg">
                  Наши эксперты проводят бесплатный аудит процессов и составляют roadmap по внедрению искусственного интеллекта с расчетом ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="bg-white text-indigo-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center justify-center gap-2 text-lg"
                  >
                    Получить бесплатный аудит
                    <Zap className="h-5 w-5" />
                  </button>
                  <a
                    href="/pdf-gid-po-vnedreniyu-ii-v-biznes.pdf"
                    download="PDF-гид по внедрению ИИ в бизнес.pdf"
                    className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-indigo-600 transition-colors duration-200 font-semibold flex items-center justify-center gap-2 text-lg"
                  >
                    <Download className="h-5 w-5" />
                    Скачать PDF-гид по внедрению ИИ
                  </a>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
      <Footer />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="AIBusinessGuide2025" />
    </div>
  );
};

export default AIBusinessGuide2025;