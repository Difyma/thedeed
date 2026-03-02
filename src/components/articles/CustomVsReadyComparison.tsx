import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, CheckCircle, XCircle, DollarSign, Zap, Shield, TrendingUp, Settings, Target } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LeadFormModal from '../LeadFormModal';
import Header from '../Header';
import Footer from '../Footer';

const CustomVsReadyComparison: React.FC = () => {
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
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16" data-aos="fade-up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Заказная разработка против готовых решений: что выгоднее для вашего бизнеса в 2025 году?
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-purple-100 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>10 января 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>10 мин чтения</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>Дмитрий Сидоров</span>
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
                  Перед каждым бизнесом, который сталкивается с необходимостью digital-трансформации, встает ключевой вопрос: разрабатывать собственное программное обеспечение с нуля или купить готовое решение?
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Это стратегический выбор, который определит вашу эффективность, гибкость и бюджет на годы вперед. В 2025 году этот выбор стал еще сложнее из-за обилия SaaS-сервисов и доступности разработки под ключ.
                </p>
              </div>

              {/* Quick Summary */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Краткая суть: два разных пути</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-4">
                      📦 Готовое решение (SaaS)
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Универсальный программный продукт, созданный для массового рынка. Вы арендуете его по подписке и подстраиваете свои процессы под его логику.
                    </p>
                    <div className="text-sm text-blue-800">
                      <strong>Примеры:</strong> Salesforce, Tilda, типовая 1С
                    </div>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-purple-900 mb-4">
                      🛠️ Заказная разработка
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Эксклюзивное ПО, созданное специально под уникальные задачи вашей компании. Программа идеально подстраивается под вас.
                    </p>
                    <div className="text-sm text-purple-800">
                      <strong>Результат:</strong> Владение на 100%, полная кастомизация
                    </div>
                  </div>
                </div>
              </section>

              {/* Comparison Table */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="400">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Сравнительная таблица: Заказное ПО vs Готовое решение</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
                    <thead className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
                      <tr>
                        <th className="p-4 text-left font-semibold">Критерий</th>
                        <th className="p-4 text-left font-semibold">Готовое решение</th>
                        <th className="p-4 text-left font-semibold">Заказная разработка</th>
                        <th className="p-4 text-left font-semibold">Победитель для...</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t border-gray-200">
                        <td className="p-4 font-medium text-gray-900 bg-gray-50">
                          <DollarSign className="inline h-4 w-4 mr-2" />
                          Стоимость
                        </td>
                        <td className="p-4 text-gray-600">Низкий стартовый взнос, но ежемесячные платежи. Со временем сумма растет.</td>
                        <td className="p-4 text-gray-600">Высокие разовые инвестиции. Далее только поддержка.</td>
                        <td className="p-4 text-sm">
                          <div className="text-blue-700 mb-1">✅ Готовое: Короткий горизонт</div>
                          <div className="text-purple-700">✅ Заказное: Долгосрочная перспектива</div>
                        </td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">
                          <Zap className="inline h-4 w-4 mr-2" />
                          Сроки внедрения
                        </td>
                        <td className="p-4 text-gray-600">Очень быстро. Можно начать работать в день покупки.</td>
                        <td className="p-4 text-gray-600">Долго. Требуются месяцы на разработку и тестирование.</td>
                        <td className="p-4 text-sm">
                          <div className="text-blue-700">✅ Готовое: "Здесь и сейчас"</div>
                        </td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="p-4 font-medium text-gray-900 bg-gray-50">
                          <Settings className="inline h-4 w-4 mr-2" />
                          Гибкость
                        </td>
                        <td className="p-4 text-gray-600">Сильно ограничена. Только то, что заложил разработчик.</td>
                        <td className="p-4 text-gray-600">Полная. Вы получаете именно то, что хотите.</td>
                        <td className="p-4 text-sm">
                          <div className="text-purple-700">✅ Заказное: Уникальные процессы</div>
                        </td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">
                          <TrendingUp className="inline h-4 w-4 mr-2" />
                          Масштабируемость
                        </td>
                        <td className="p-4 text-gray-600">Зависит от тарифа. Лимиты и возрастающая стоимость.</td>
                        <td className="p-4 text-gray-600">Полная. Система масштабируется когда нужно.</td>
                        <td className="p-4 text-sm">
                          <div className="text-purple-700">✅ Заказное: Быстрорастущий бизнес</div>
                        </td>
                      </tr>
                      <tr className="border-t border-gray-200">
                        <td className="p-4 font-medium text-gray-900 bg-gray-50">
                          <Shield className="inline h-4 w-4 mr-2" />
                          Безопасность
                        </td>
                        <td className="p-4 text-gray-600">Данные на серверах провайдера. Зависимость от его политики.</td>
                        <td className="p-4 text-gray-600">Полный контроль. Вы сами выбираете, где хранить данные.</td>
                        <td className="p-4 text-sm">
                          <div className="text-purple-700">✅ Заказное: Высокие требования безопасности</div>
                        </td>
                      </tr>
                      <tr className="border-t border-gray-200 bg-gray-50">
                        <td className="p-4 font-medium text-gray-900">
                          <Target className="inline h-4 w-4 mr-2" />
                          Конкуренция
                        </td>
                        <td className="p-4 text-gray-600">Нулевое преимущество. Конкуренты используют то же самое.</td>
                        <td className="p-4 text-gray-600">Ключевое преимущество. Уникальные фишки недоступны другим.</td>
                        <td className="p-4 text-sm">
                          <div className="text-purple-700">✅ Заказное: Инновации и лидерство</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* When to Choose Ready Solutions */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="500">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Кому и когда выбирать готовое решение?</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-6">📦 Готовое ПО — идеальный выбор, если:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      'Вы только начинаете. Бюджет ограничен, процессы не устоялись.',
                      'Нужно решение «здесь и сейчас». Нет времени ждать месяцы.',
                      'Ваши процессы стандартны. Розничная торговля, типовые услуги.',
                      'Нет технических специалистов и желания искать подрядчика.'
                    ].map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                    <p className="text-blue-800">
                      <strong>💡 Пример:</strong> Небольшому интернет-магазину одежды на старте вполне хватит Shopify или Tilda + стандартная CRM.
                    </p>
                  </div>
                </div>
              </section>

              {/* When to Choose Custom Development */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="600">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Кому и когда выбирать заказную разработку?</h2>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-purple-900 mb-6">🛠️ Заказное ПО — стратегическая необходимость, если:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      'Ваши бизнес-процессы уникальны и являются конкурентным преимуществом.',
                      'Вы переросли возможности готовых решений по функционалу или нагрузке.',
                      'Критически важна безопасность и полный контроль над данными.',
                      'Планируете масштабироваться и не хотите упираться в лимиты SaaS.',
                      'Хотите создать новый цифровой продукт без аналогов на рынке.'
                    ].map((point, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                        <p className="text-gray-700">{point}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-purple-100 rounded-lg">
                    <p className="text-purple-800">
                      <strong>💡 Пример:</strong> Производителю мебели на заказ с индивидуальным циклом сборки, сложной логистикой и уникальным расчетом стоимости нужна собственная ERP-система.
                    </p>
                  </div>
                </div>
              </section>

              {/* Hidden Costs */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Скрытые costs: о чем важно помнить</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-red-900 mb-4">
                      <XCircle className="inline h-5 w-5 mr-2" />
                      Скрытые costs готовых решений
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Цена за дополнительных пользователей</li>
                      <li>• Расширенная техподдержка</li>
                      <li>• Доступ к API</li>
                      <li>• Превышение лимитов трафика/места</li>
                    </ul>
                    <div className="mt-4 p-3 bg-red-100 rounded">
                      <p className="text-red-800 text-sm">
                        <strong>⚠️ Внимание:</strong> За 3-5 лет общая сумма подписки может многократно превысить стоимость собственного решения.
                      </p>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-yellow-900 mb-4">
                      <XCircle className="inline h-5 w-5 mr-2" />
                      Скрытые costs заказной разработки
                    </h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Цена ошибки при выборе подрядчика</li>
                      <li>• Некачественное ТЗ</li>
                      <li>• Плохой код или неверный тех. стек</li>
                      <li>• Дополнительные расходы на переделку</li>
                    </ul>
                    <div className="mt-4 p-3 bg-yellow-100 rounded">
                      <p className="text-yellow-800 text-sm">
                        <strong>💡 Вывод:</strong> Выбор исполнителя — ключевой этап, от которого зависит успех проекта.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Decision Algorithm */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="800">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Что выбрать в 2025 году? Алгоритм решения</h2>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-8">
                  <div className="space-y-6">
                    {[
                      {
                        step: '1',
                        title: 'Проведите аудит процессов',
                        description: 'Поймите, насколько ваши операции уникальны и отличаются от конкурентов.'
                      },
                      {
                        step: '2',
                        title: 'Рассчитайте TCO (Total Cost of Ownership)',
                        description: 'Посчитайте совокупную стоимость владения готовым решением на 3-5 лет вперед.'
                      },
                      {
                        step: '3',
                        title: 'Спроектируйте будущее',
                        description: 'Где вы хотите быть через 3 года? Готовое решение может стать тормозом для роста.'
                      }
                    ].map((step, index) => (
                      <div key={index} className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                            {step.step}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-8 bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-indigo-900 mb-4">🎯 Универсальный совет 2025 года</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Часто лучшей стратегией является <strong>гибридный подход</strong>. Используйте готовые SaaS-решения для стандартных задач (почта, мессенджеры), но ключевые, уникальные процессы, которые приносят деньги, автоматизируйте с помощью <strong>заказной разработки</strong>.
                  </p>
                </div>
              </section>

              {/* Conclusion */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="900">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Заключение</h2>
                <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-200 rounded-xl p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Выбор между готовым и заказным ПО — это выбор между тактической экономией и стратегическими инвестициями.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Готовое решение</h4>
                        <p className="text-gray-600">Тактический инструмент для быстрого решения стандартных задач</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-purple-900 mb-2">Заказная разработка</h4>
                        <p className="text-gray-600">Стратегическое вложение в уникальность, эффективность и масштабируемость</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mt-6">
                    В 2025 году конкурентное преимущество получают те, кто не боится инвестировать в технологии, идеально заточенные под свои нужды.
                  </p>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center" data-aos="fade-up" data-aos-delay="1000">
                <h2 className="text-2xl font-bold mb-4">Затрудняетесь с выбором?</h2>
                <p className="text-purple-100 mb-6 leading-relaxed">
                  Мы поможем провести бесплатный аудит ваших процессов и сделать точный расчет совокупной стоимости владения (TCO) для обоих вариантов. Узнайте, какой путь принесет вашей компании больше выгоды.
                </p>
                <div className="flex justify-center">
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
                  >
                    Получить бесплатную консультацию
                  </button>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
      <Footer />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="CustomVsReadyComparison" />
    </div>
  );
};

export default CustomVsReadyComparison;