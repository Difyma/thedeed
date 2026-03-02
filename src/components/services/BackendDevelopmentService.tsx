import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Database, Code, Globe, Zap, CheckCircle, ArrowRight, Star, Users, Clock, DollarSign } from 'lucide-react';
import LeadFormModal from '../LeadFormModal';
import Header from '../Header';
import Footer from '../Footer';

const BackendDevelopmentService: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Автоматический скролл вверх при загрузке страницы
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  const features = [
    'REST API и GraphQL разработка',
    'Микросервисная архитектура',
    'Базы данных и кэширование',
    'Интеграция с внешними сервисами',
    'Безопасность и аутентификация',
    'Масштабирование и производительность'
  ];

  const technologies = [
    { name: 'Node.js', icon: '🟢', description: 'Серверная платформа на JavaScript' },
    { name: 'Python', icon: '🐍', description: 'Универсальный язык для backend разработки' },
    { name: 'PostgreSQL', icon: '🐘', description: 'Мощная реляционная база данных' },
    { name: 'MongoDB', icon: '🍃', description: 'NoSQL база данных для гибких схем' },
    { name: 'Redis', icon: '🔴', description: 'Быстрое кэширование и хранение данных' },
    { name: 'Docker', icon: '🐳', description: 'Контейнеризация приложений' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Анализ требований',
      description: 'Изучаем бизнес-логику и определяем архитектуру системы'
    },
    {
      step: '02',
      title: 'Проектирование',
      description: 'Создаем схему базы данных и API endpoints'
    },
    {
      step: '03',
      title: 'Разработка',
      description: 'Пишем код, создаем API и настраиваем базу данных'
    },
    {
      step: '04',
      title: 'Тестирование',
      description: 'Проверяем функциональность и производительность'
    },
    {
      step: '05',
      title: 'Развертывание',
      description: 'Настраиваем сервер и запускаем в production'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6" data-aos="zoom-in" data-aos-delay="100">
              <Database className="h-10 w-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Backend разработка
            </h1>
            <p className="text-xl sm:text-2xl text-purple-100 mb-8 leading-relaxed">
              Создаем надежные серверные решения для ваших веб и мобильных приложений
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Получить консультацию
              </button>
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
              Полный спектр услуг по созданию серверной части приложений
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-purple-300 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CheckCircle className="h-8 w-8 text-purple-600 mb-4" />
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
              Используем современные технологии для создания надежных backend решений
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
              Прозрачный и понятный процесс разработки backend системы
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
                  <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
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
              Гибкие тарифы в зависимости от сложности backend системы
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Простой API</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">от ₽600,000</div>
              <ul className="text-gray-600 mb-8 space-y-2">
                <li>• REST API</li>
                <li>• База данных</li>
                <li>• Базовая аутентификация</li>
                <li>• Документация API</li>
                <li>• Срок: 2-3 месяца</li>
              </ul>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-200"
              >
                Заказать
              </button>
            </div>

            <div className="bg-purple-600 text-white rounded-2xl p-8 border-2 border-purple-600 text-center transform scale-105" data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-2xl font-bold mb-4">Средний backend</h3>
              <div className="text-4xl font-bold mb-6">от ₽1,200,000</div>
              <ul className="mb-8 space-y-2">
                <li>• REST + GraphQL API</li>
                <li>• Микросервисы</li>
                <li>• Кэширование</li>
                <li>• Мониторинг</li>
                <li>• Срок: 3-5 месяцев</li>
              </ul>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Заказать
              </button>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-gray-200 text-center" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Сложный backend</h3>
              <div className="text-4xl font-bold text-purple-600 mb-6">от ₽2,000,000</div>
              <ul className="text-gray-600 mb-8 space-y-2">
                <li>• Высоконагруженная система</li>
                <li>• Множественные интеграции</li>
                <li>• AI/ML компоненты</li>
                <li>• Автомасштабирование</li>
                <li>• Срок: 5-8 месяцев</li>
              </ul>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-200"
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
            Готовы создать надежный backend?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Получите бесплатную консультацию и техническое задание для вашего проекта
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-purple-700 transition-colors duration-200 text-lg"
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
        source="Backend Development Service" 
      />
    </div>
  );
};

export default BackendDevelopmentService;