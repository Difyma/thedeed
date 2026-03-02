import React from 'react';
import { Award, Clock, Users, TrendingUp, CheckCircle, Target } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const About: React.FC = () => {
  const { openModal } = useModal();

  const stats = [
    { number: '200+', label: 'Проектов', icon: <CheckCircle className="h-6 w-6 text-green-600" /> },
    { number: '50+', label: 'Клиентов', icon: <Users className="h-6 w-6 text-blue-600" /> },
    { number: '10', label: 'Лет опыта', icon: <Clock className="h-6 w-6 text-purple-600" /> },
    { number: '98%', label: 'Довольных клиентов', icon: <TrendingUp className="h-6 w-6 text-orange-600" /> }
  ];

  const advantages = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Индивидуальный подход',
      description: 'Каждый проект уникален. Мы изучаем ваш бизнес и создаем решения под конкретные задачи.'
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: 'Высокое качество',
      description: 'Используем лучшие практики разработки, code review и автоматизированное тестирование.'
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: 'Соблюдение сроков',
      description: 'Четкое планирование и agile-методология позволяют нам всегда укладываться в дедлайны.'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: 'Опытная команда',
      description: 'Senior-разработчики с опытом работы в крупных IT-компаниях и стартапах.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            IT-компания thedeed — заказная разработка ПО с 10-летним опытом
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            the<span className="text-blue-600">deed</span> — это команда профессиональных разработчиков, которая создает 
            инновационные IT-решения для бизнеса любого масштаба. Специализируемся на веб-разработке, 
            мобильных приложениях и автоматизации бизнес-процессов
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200"
            >
              <div className="flex justify-center mb-3">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Почему выбирают нас
            </h3>
            <div className="space-y-6">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex gap-4">
                  <div className="bg-gray-100 p-3 rounded-xl flex-shrink-0">
                    {advantage.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">
                      {advantage.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Наш процесс работы
            </h4>
            <div className="space-y-4">
              {[
                { step: '01', title: 'Анализ требований', desc: 'Изучаем ваш бизнес и техническое задание' },
                { step: '02', title: 'Планирование', desc: 'Создаем архитектуру и план разработки' },
                { step: '03', title: 'Разработка', desc: 'Итеративная разработка с еженедельными демо' },
                { step: '04', title: 'Тестирование', desc: 'Комплексное тестирование и оптимизация' },
                { step: '05', title: 'Запуск', desc: 'Деплой и настройка production среды' },
                { step: '06', title: 'Поддержка', desc: 'Техническая поддержка и развитие проекта' }
              ].map((process, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-gray-900 text-white w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {process.step}
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-1">{process.title}</h5>
                    <p className="text-sm text-gray-600">{process.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
            Готовы начать проект?
          </h3>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
            Получите бесплатную консультацию и оценку стоимости вашего проекта от наших экспертов
          </p>
          <div className="flex justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg font-semibold" onClick={() => openModal('About')}>
              Обсудить проект
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;