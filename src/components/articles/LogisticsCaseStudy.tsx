import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Package, TrendingUp, BarChart3, CheckCircle, Target, Truck, Warehouse, ArrowRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LeadFormModal from '../LeadFormModal';
import Header from '../Header';
import Footer from '../Footer';

const LogisticsCaseStudy: React.FC = () => {
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
        <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-16" data-aos="fade-up">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                  <Truck className="h-12 w-12 text-white" />
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Кейс: Как мы разработали систему учета для логистической компании и сократили издержки на 30%
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-6 text-orange-100 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>5 января 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>12 мин чтения</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span>Анна Волкова</span>
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
                  Логистический бизнес — это сложный механизм, где каждая ошибка в учете ведет к прямым финансовым потерям. Хаос в Excel-таблицах, неразбериха на складе и отсутствие оперативной информации — типичные боли растущей компании.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  В этом кейсе мы расскажем, как с помощью индивидуальной разработки программного обеспечения мы помогли логистической компании навести порядок в процессах и выйти на новый уровень эффективности.
                </p>
              </div>

              {/* Problem Section */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Target className="h-8 w-8 text-red-600 mr-3" />
                  Проблема: ручной хаос и финансовые потери
                </h2>
                <div className="bg-red-50 border border-red-200 rounded-xl p-8 mb-8">
                  <p className="text-lg text-gray-700 mb-6">
                    Наш клиент — российская компания, предоставляющая услуги складского хранения и дистрибуции. Бизнес рос, но процессы оставались на прежнем уровне.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ключевые боли заказчика:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      icon: <Package className="h-8 w-8 text-red-600" />,
                      title: 'Учет вручную',
                      description: 'Все операции фиксировались в Excel. Версии файлов путались, возникали критичные ошибки в остатках.'
                    },
                    {
                      icon: <BarChart3 className="h-8 w-8 text-red-600" />,
                      title: 'Нулевая прозрачность',
                      description: 'Руководство не видело реальную картину со складом. Чтобы получить отчет, приходилось ждать 2-3 дня.'
                    },
                    {
                      icon: <Clock className="h-8 w-8 text-red-600" />,
                      title: 'Потери времени',
                      description: 'Сотрудники тратили большую часть дня не на прямые обязанности, а на пересчет товара.'
                    },
                    {
                      icon: <TrendingUp className="h-8 w-8 text-red-600" />,
                      title: 'Двойная работа',
                      description: 'Информацию из Excel приходилось вручную переносить в бухгалтерскую программу 1С.'
                    }
                  ].map((pain, index) => (
                    <div key={index} className="bg-white border border-red-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">{pain.icon}</div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-2">{pain.title}</h4>
                          <p className="text-gray-600">{pain.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">🎯 Цели проекта:</h3>
                  <ul className="space-y-3">
                    {[
                      'Автоматизировать складской и транспортный учет',
                      'Исключить ошибки, вызванные человеческим фактором',
                      'Обеспечить руководство оперативной отчетностью в режиме реального времени',
                      'Настроить бесперебойный обмен данными с 1С',
                      'Сократить общие операционные издержки не менее чем на 20%'
                    ].map((goal, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-gray-700">{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Solution Section */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="400">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                  <Warehouse className="h-8 w-8 text-green-600 mr-3" />
                  Решение: комплексная система управления складом (WMS)
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Мы предложили разработать с нуля индивидуальную систему, которая стала бы единым цифровым ядром для всех логистических операций.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">Что вошло в систему:</h3>
                <div className="space-y-6 mb-8">
                  {[
                    {
                      number: '1',
                      title: 'Модуль приемки товара',
                      features: [
                        'Работа через терминалы сбора данных (ТСД). Грузчики сканируют штрихкоды',
                        'Система сама подсказывает оптимальное место для хранения с учетом габаритов и спроса'
                      ]
                    },
                    {
                      number: '2',
                      title: 'Модуль обработки заказов',
                      features: [
                        'Формирование маршрутов для сборщиков по принципу кратчайшего пути',
                        'Интеграция с принтерами для печати этикеток и документов'
                      ]
                    },
                    {
                      number: '3',
                      title: 'Модуль отгрузки',
                      features: [
                        'Контроль комплектности заказа перед отгрузкой',
                        'Автоматическое оформление сопроводительных документов'
                      ]
                    },
                    {
                      number: '4',
                      title: 'Онлайн-дашборд',
                      features: [
                        'Руководство в реальном времени видит ключевые показатели',
                        'Формирование финансовых отчетов в один клик'
                      ]
                    },
                    {
                      number: '5',
                      title: 'Интеграция с 1С',
                      features: [
                        'Создан двусторонний обмен данными',
                        'Приемка на складе автоматически создает приходную накладную в 1С'
                      ]
                    }
                  ].map((module, index) => (
                    <div key={index} className="bg-green-50 border border-green-200 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                        <span className="bg-green-600 text-white w-8 h-8 rounded-full inline-flex items-center justify-center text-sm mr-3">
                          {module.number}
                        </span>
                        {module.title}
                      </h4>
                      <ul className="space-y-2">
                        {module.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">💻 Использованные технологии:</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      { label: 'Серверная часть', value: 'Python (Django)' },
                      { label: 'Интерфейс', value: 'React.js' },
                      { label: 'База данных', value: 'PostgreSQL' },
                      { label: 'Мобильное приложение', value: 'Kotlin' },
                      { label: 'Размещение', value: 'Yandex Cloud' }
                    ].map((tech, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                        <div className="text-sm text-gray-600 mb-1">{tech.label}</div>
                        <div className="font-semibold text-gray-900">{tech.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Development Process */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="500">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Как проходила разработка</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Мы разделили работу на четкие этапы, чтобы минимизировать риски для бизнеса заказчика.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      step: '1',
                      title: 'Погружение и анализ',
                      duration: '2 недели',
                      description: 'Изучили все бизнес-процессы, пообщавшись с кладовщиками, менеджерами и руководителями.'
                    },
                    {
                      step: '2',
                      title: 'Прототип и дизайн',
                      duration: '3 недели',
                      description: 'Создали и согласовали макет будущей системы. Это помогло избежать недоразумений на поздних стадиях.'
                    },
                    {
                      step: '3',
                      title: 'Разработка',
                      duration: '4 месяца',
                      description: 'Работа велась по гибкой методологии. Каждые две недели показывали рабочий функционал.'
                    },
                    {
                      step: '4',
                      title: 'Запуск и обучение',
                      duration: '2 недели',
                      description: 'Помогали внедрять систему на складе, проводили обучение сотрудников и сопровождали первые рабочие дни.'
                    }
                  ].map((phase, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {phase.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                          <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                            {phase.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Results Table */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="600">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Ключевые результаты</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Через три месяца после внедрения мы подвели итоги. Эффект превзошел ожидания.
                </p>
                <div className="overflow-x-auto mb-8">
                  <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
                    <thead className="bg-gradient-to-r from-orange-600 to-amber-600 text-white">
                      <tr>
                        <th className="p-4 text-left font-semibold">Показатель</th>
                        <th className="p-4 text-left font-semibold">Было</th>
                        <th className="p-4 text-left font-semibold">Стало</th>
                        <th className="p-4 text-left font-semibold">Результат</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          metric: 'Ошибки в учете остатков',
                          before: '≈ 5% в месяц',
                          after: 'Менее 0.1%',
                          result: 'Сокращение на 99%',
                          color: 'text-green-700'
                        },
                        {
                          metric: 'Скорость приемки товара',
                          before: '60 мин./паллет',
                          after: '35 мин./паллет',
                          result: 'Ускорение на 42%',
                          color: 'text-blue-700'
                        },
                        {
                          metric: 'Время на отчеты',
                          before: '2-3 рабочих дня',
                          after: '15 минут',
                          result: 'Ускорение на 99%',
                          color: 'text-purple-700'
                        },
                        {
                          metric: 'Заказов в день',
                          before: '15',
                          after: '22',
                          result: 'Рост на 47%',
                          color: 'text-indigo-700'
                        },
                        {
                          metric: 'Операционные расходы',
                          before: '—',
                          after: '—',
                          result: 'Сокращение на 30%',
                          color: 'text-orange-700'
                        }
                      ].map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="p-4 font-medium text-gray-900">{row.metric}</td>
                          <td className="p-4 text-gray-600">{row.before}</td>
                          <td className="p-4 text-gray-600">{row.after}</td>
                          <td className={`p-4 font-bold ${row.color}`}>{row.result}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-green-900 mb-4">💰 Финансовый итог:</h3>
                  <p className="text-lg text-green-800 leading-relaxed">
                    Разработанная система стала приносить компании <strong>ежегодную экономию в размере более 3.5 миллионов рублей</strong> за счет сокращения фонда оплаты труда, уменьшения ошибок и оптимизации рабочих процессов.
                  </p>
                </div>
              </section>

              {/* Client Testimonial */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="700">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Отзыв клиента</h2>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 relative">
                  <div className="absolute top-4 left-4 text-6xl text-blue-200 font-serif">"</div>
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic pl-8 mb-6">
                    Решение о заказной разработке далось нам нелегко. Мы опасались больших затрат и сложностей. Однако результат окупил все вложения в первый же год. Мы получили не просто программу, а <strong>новый уровень управления бизнесом</strong>. Теперь мы видим всю картину в реальном времени и можем принимать быстрые и точные решения. Это именно то, что было нам нужно.
                  </blockquote>
                  <div className="flex items-center gap-4 pl-8">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Генеральный директор</div>
                      <div className="text-gray-600">Логистическая компания</div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-lg text-gray-700 font-medium">
                    Индивидуальная разработка — это инвестиция в развитие и порядок в вашем бизнесе.
                  </p>
                </div>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-white text-center" data-aos="fade-up" data-aos-delay="800">
                <h2 className="text-2xl font-bold mb-4">Хотите узнать, как автоматизация поможет вашему бизнесу?</h2>
                <p className="text-orange-100 mb-6 leading-relaxed">
                  Мы проведем бесплатный анализ ваших процессов и рассчитаем потенциальную экономию.
                </p>
                <div className="flex justify-center">
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold flex items-center justify-center gap-2"
                  >
                    Получить бесплатную консультацию
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
      <Footer />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="LogisticsCaseStudy" />
    </div>
  );
};

export default LogisticsCaseStudy;