import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Globe, Code, Smartphone, Database, Cloud, Zap, CheckCircle, ArrowRight, Star, Users, Clock, DollarSign } from 'lucide-react';
import LeadFormModal from '../LeadFormModal';
import Header from '../Header';
import Footer from '../Footer';

const WebDevelopmentService: React.FC = () => {
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

  const features = [
    'Современные технологии (React, Vue.js, Angular)',
    'Адаптивный дизайн для всех устройств',
    'SEO-оптимизация и быстрая загрузка',
    'Интеграция с CRM и платежными системами',
    'Безопасность и защита данных',
    'Техническая поддержка и обновления'
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', description: 'Современная библиотека для создания интерактивных интерфейсов' },
    { name: 'Vue.js', icon: '💚', description: 'Прогрессивный фреймворк для построения пользовательских интерфейсов' },
    { name: 'Angular', icon: '🅰️', description: 'Полнофункциональный фреймворк для крупных приложений' },
    { name: 'Node.js', icon: '🟢', description: 'Серверная платформа для быстрой разработки' },
    { name: 'TypeScript', icon: '🔷', description: 'Типизированный JavaScript для надежного кода' },
    { name: 'Tailwind CSS', icon: '🎨', description: 'Утилитарный CSS-фреймворк для быстрого дизайна' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Анализ требований',
      description: 'Изучаем ваши бизнес-процессы и формируем техническое задание'
    },
    {
      step: '02',
      title: 'Проектирование',
      description: 'Создаем архитектуру, дизайн и прототипы будущего сайта'
    },
    {
      step: '03',
      title: 'Разработка',
      description: 'Пишем код, создаем функционал и интегрируем системы'
    },
    {
      step: '04',
      title: 'Тестирование',
      description: 'Проверяем качество, исправляем ошибки и оптимизируем'
    },
    {
      step: '05',
      title: 'Запуск',
      description: 'Развертываем сайт, обучаем команду и передаем в эксплуатацию'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6" data-aos="zoom-in" data-aos-delay="100">
              <Globe className="h-10 w-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Веб-разработка
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed">
              Создаем современные веб-сайты и веб-приложения, которые привлекают клиентов и увеличивают продажи
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Получить консультацию
              </button>
              <Link
                to="/#portfolio"
                className="border border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Посмотреть кейсы
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Что мы предлагаем
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Полный спектр услуг по созданию веб-решений для вашего бизнеса
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CheckCircle className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-800 font-medium">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Технологии
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Используем современный стек технологий для создания быстрых и надежных решений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Процесс работы
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Прозрачный и понятный процесс разработки от идеи до запуска
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="flex gap-8 mb-12 last:mb-0"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Стоимость услуг
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Гибкие тарифы в зависимости от сложности и объема работ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Лендинг</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">от ₽150,000</div>
              <ul className="text-gray-600 mb-8 space-y-2">
                <li>• Одностраничный сайт</li>
                <li>• Адаптивный дизайн</li>
                <li>• Форма обратной связи</li>
                <li>• SEO-оптимизация</li>
                <li>• Срок: 2-3 недели</li>
              </ul>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Заказать
              </button>
            </div>

            <div className="bg-blue-600 text-white rounded-2xl p-8 border-2 border-blue-600 text-center transform scale-105" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-4">Корпоративный сайт</h3>
              <div className="text-4xl font-bold mb-6">от ₽400,000</div>
              <ul className="mb-8 space-y-2">
                <li>• Многостраничный сайт</li>
                <li>• CMS система</li>
                <li>• Блог и новости</li>
                <li>• Аналитика и SEO</li>
                <li>• Срок: 1-2 месяца</li>
              </ul>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Заказать
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Веб-приложение</h3>
              <div className="text-4xl font-bold text-blue-600 mb-6">от ₽800,000</div>
              <ul className="text-gray-600 mb-8 space-y-2">
                <li>• Сложная логика</li>
                <li>• База данных</li>
                <li>• API интеграции</li>
                <li>• Админ-панель</li>
                <li>• Срок: 2-4 месяца</li>
              </ul>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                Заказать
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6" data-aos="fade-up">
            Готовы создать современный веб-сайт?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Получите бесплатную консультацию и техническое задание для вашего проекта
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Начать проект
          </button>
        </div>
      </section>

      <Footer />
      
      <LeadFormModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        source="Web Development Service" 
      />
    </div>
  );
};

export default WebDevelopmentService;