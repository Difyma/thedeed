import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowLeft, Download, FileText, CheckCircle, Target, Users } from 'lucide-react';
import LeadFormModal from '../LeadFormModal';
import Header from '../Header';
import Footer from '../Footer';

const TechnicalSpecificationGuide: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    // Автоматический скролл вверх при загрузке страницы
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

    // Инициализация AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <article className="bg-white">
        <header className="bg-gray-900 text-white py-16 pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Назад к блогу
            </Link>
            
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Веб-разработка
                </span>
                <span className="text-gray-300 text-sm">28 декабря 2024</span>
                <span className="text-gray-300 text-sm">• 16 мин чтения</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Техническое задание на разработку ПО: как составить идеальное ТЗ для подрядчика
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Структура идеального ТЗ: цели, функциональные требования, прототипы. Шаблон и чек-лист для самостоятельного заполнения.
              </p>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">

              {/* Введение */}
              <section className="mb-12" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Target className="h-8 w-8 text-blue-600" />
                  Введение
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Качественное техническое задание (ТЗ) — это фундамент успешного проекта. От того, насколько точно и подробно вы опишете свои требования, зависит итоговый результат, сроки и бюджет разработки. По статистике, 60% проблем в IT-проектах возникают из-за неточного или неполного ТЗ.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  В этом руководстве мы разберем, как составить техническое задание, которое поможет подрядчику создать именно то решение, которое нужно вашему бизнесу.
                </p>
              </section>

              {/* Что такое ТЗ */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Что такое техническое задание и зачем оно нужно?</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Техническое задание — это документ, который максимально детально описывает требования к разрабатываемому программному продукту. Это своеобразный "чертеж" будущей системы.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold text-blue-900 mb-3">Почему ТЗ критически важно:</h3>
                  <ul className="space-y-2 text-blue-800">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Избежание недопониманий:</strong> Заказчик и подрядчик понимают задачу одинаково</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Точная оценка:</strong> Подрядчик может корректно рассчитать сроки и бюджет</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Контроль качества:</strong> ТЗ служит критерием приемки работ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Юридическая защита:</strong> ТЗ — часть договора</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Структура ТЗ */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="200">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Структура идеального технического задания</h2>
                
                <div className="space-y-8">
                  {/* 1. Общие сведения */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. Общие сведения о проекте</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Название проекта:</strong> Краткое, понятное название</li>
                      <li><strong>Цель проекта:</strong> Зачем создается система, какую бизнес-задачу решает</li>
                      <li><strong>Целевая аудитория:</strong> Кто будет пользоваться системой</li>
                      <li><strong>Планируемые сроки:</strong> Когда планируется запуск</li>
                      <li><strong>Бюджетные ориентиры:</strong> Примерный бюджет проекта</li>
                    </ul>
                  </div>

                  {/* 2. Описание текущей ситуации */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. Описание текущей ситуации</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Существующие процессы:</strong> Как сейчас решаются задачи</li>
                      <li><strong>Проблемы и "боли":</strong> Что не устраивает в текущем подходе</li>
                      <li><strong>Существующие системы:</strong> Какое ПО уже используется</li>
                      <li><strong>Требования к интеграции:</strong> С какими системами нужно связать новое ПО</li>
                    </ul>
                  </div>

                  {/* 3. Функциональные требования */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. Функциональные требования</h3>
                    <p className="text-gray-700 mb-4">Детально опишите, что система должна уметь делать:</p>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Основные функции:</strong> Список ключевых возможностей</li>
                      <li><strong>Пользовательские роли:</strong> Кто и что может делать в системе</li>
                      <li><strong>Бизнес-процессы:</strong> Как должны выполняться рабочие операции</li>
                      <li><strong>Отчетность:</strong> Какие отчеты нужны и в каком виде</li>
                      <li><strong>Уведомления:</strong> Когда и кому приходят уведомления</li>
                    </ul>
                  </div>

                  {/* 4. Нефункциональные требования */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. Нефункциональные требования</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Производительность:</strong> Количество пользователей, скорость работы</li>
                      <li><strong>Безопасность:</strong> Требования к защите данных</li>
                      <li><strong>Надежность:</strong> Допустимое время простоя</li>
                      <li><strong>Совместимость:</strong> Браузеры, операционные системы</li>
                      <li><strong>Масштабируемость:</strong> Возможность роста нагрузки</li>
                    </ul>
                  </div>

                  {/* 5. Требования к дизайну */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. Требования к дизайну и UX</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Фирменный стиль:</strong> Логотип, цвета, шрифты</li>
                      <li><strong>Примеры интерфейсов:</strong> Ссылки на понравившиеся решения</li>
                      <li><strong>Адаптивность:</strong> Требования к мобильной версии</li>
                      <li><strong>Accessibility:</strong> Доступность для людей с ограниченными возможностями</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Советы по написанию */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="300">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Советы по написанию эффективного ТЗ</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center gap-2">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      Что ДЕЛАТЬ
                    </h3>
                    <ul className="space-y-2 text-green-800">
                      <li>• Используйте конкретные формулировки</li>
                      <li>• Добавляйте примеры и скриншоты</li>
                      <li>• Указывайте приоритеты функций</li>
                      <li>• Привлекайте к написанию конечных пользователей</li>
                      <li>• Описывайте исключительные ситуации</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center gap-2">
                      <Users className="h-6 w-6 text-red-600" />
                      Чего НЕ делать
                    </h3>
                    <ul className="space-y-2 text-red-800">
                      <li>• Использовать размытые формулировки</li>
                      <li>• Описывать технические решения</li>
                      <li>• Забывать про интеграции</li>
                      <li>• Игнорировать вопросы безопасности</li>
                      <li>• Писать ТЗ без участия пользователей</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Чек-лист */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="400">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Чек-лист готовности ТЗ</h2>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <p className="text-gray-700 mb-6">Убедитесь, что ваше ТЗ содержит все необходимые элементы:</p>
                  
                  <div className="space-y-3">
                    {[
                      'Четко сформулированы цели и задачи проекта',
                      'Описаны все пользовательские роли и их права',
                      'Детализированы основные бизнес-процессы',
                      'Указаны требования к интеграции с внешними системами',
                      'Прописаны нефункциональные требования',
                      'Приложены примеры интерфейсов или mockup\'ы',
                      'Определены критерии приемки',
                      'Указаны ограничения и исключения',
                      'Описаны требования к безопасности',
                      'Приведены примеры тестовых сценариев'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-400 rounded mt-0.5"></div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Примеры формулировок */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="500">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Примеры правильных формулировок</h2>
                
                <div className="space-y-6">
                  <div className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-100 px-6 py-3">
                      <h4 className="font-semibold text-gray-900">❌ Неправильно</h4>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 italic">"Система должна быть удобной и быстрой"</p>
                    </div>
                  </div>
                  
                  <div className="border border-green-200 rounded-lg overflow-hidden">
                    <div className="bg-green-100 px-6 py-3">
                      <h4 className="font-semibold text-green-900">✅ Правильно</h4>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700">
                        "Система должна обрабатывать запросы пользователей не более чем за 2 секунды при одновременной работе до 100 пользователей. Все основные операции должны выполняться не более чем в 3 клика."
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Заключение */}
              <section className="mb-12" data-aos="fade-up" data-aos-delay="600">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Заключение</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Качественное техническое задание — это инвестиция в успех проекта. Время, потраченное на его подготовку, окупается многократно за счет сокращения переделок, точного попадания в сроки и бюджет.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Помните: идеальное ТЗ — это результат совместной работы заказчика и подрядчика. Не стесняйтесь обращаться к экспертам за помощью в составлении технического задания.
                </p>
              </section>

              {/* Скачать памятку */}
              <section className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center mb-12" data-aos="fade-up" data-aos-delay="700">
                <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Скачайте готовый шаблон ТЗ
                </h3>
                <p className="text-blue-800 mb-6 leading-relaxed">
                  Подробная памятка с шаблоном технического задания, примерами и чек-листами для самостоятельного заполнения.
                </p>
                <a 
                  href="/pamyatka-kak-sostavit-tekhnicheskoe-zadanie-tz.docx"
                  download
                  className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold shadow-lg hover:shadow-xl"
                >
                  <Download className="h-5 w-5" />
                  Скачать памятку «Как составить ТЗ»
                </a>
              </section>

              {/* CTA Section */}
              <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white text-center" data-aos="fade-up" data-aos-delay="800">
                <h2 className="text-2xl font-bold mb-4">Нужна помощь с составлением ТЗ?</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Наши аналитики помогут структурировать ваши требования и составить техническое задание, которое гарантирует успешную реализацию проекта.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setModalOpen(true)}
                    className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold"
                  >
                    Получить консультацию по ТЗ
                  </button>
                  <Link 
                    to="/#portfolio"
                    className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 font-semibold"
                  >
                    Посмотреть наши проекты
                  </Link>
                </div>
              </section>

            </div>
          </div>
        </div>
      </article>
      
      <Footer />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="TechnicalSpecificationGuide" />
    </div>
  );
};

export default TechnicalSpecificationGuide;