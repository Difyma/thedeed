import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, CheckCircle, Globe, Code, Smartphone, Database, Cloud, Zap, TrendingUp, Target, Shield, Users, Star, ArrowRight } from 'lucide-react';
import LeadFormModal from '../LeadFormModal';
import Header from '../Header';
import Footer from '../Footer';

const CustomDevelopmentGuide: React.FC = () => {
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
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: 'Индивидуальный подход',
      description: 'Каждое решение создается специально под ваши задачи'
    },
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: 'Безопасность',
      description: 'Защита данных и соответствие стандартам безопасности'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-600" />,
      title: 'Масштабируемость',
      description: 'Система растет вместе с вашим бизнесом'
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: 'Поддержка',
      description: 'Техническая поддержка и обновления 24/7'
    }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️', category: 'Frontend', description: 'Современная библиотека для создания интерактивных интерфейсов' },
    { name: 'Node.js', icon: '🟢', category: 'Backend', description: 'Серверная платформа для быстрой разработки' },
    { name: 'React Native', icon: '📱', category: 'Mobile', description: 'Кроссплатформенная мобильная разработка' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database', description: 'Надежная реляционная база данных' },
    { name: 'AWS', icon: '☁️', category: 'Cloud', description: 'Облачная инфраструктура для масштабирования' },
    { name: 'Docker', icon: '🐳', category: 'DevOps', description: 'Контейнеризация и развертывание' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Анализ требований',
      description: 'Изучаем ваши бизнес-процессы и формируем техническое задание',
      icon: <Target className="h-6 w-6" />
    },
    {
      step: '02',
      title: 'Проектирование',
      description: 'Создаем архитектуру, дизайн и прототипы будущего решения',
      icon: <Code className="h-6 w-6" />
    },
    {
      step: '03',
      title: 'Разработка',
      description: 'Пишем код, создаем функционал и интегрируем системы',
      icon: <Globe className="h-6 w-6" />
    },
    {
      step: '04',
      title: 'Тестирование',
      description: 'Проверяем качество, исправляем ошибки и оптимизируем',
      icon: <CheckCircle className="h-6 w-6" />
    },
    {
      step: '05',
      title: 'Внедрение',
      description: 'Развертываем систему, обучаем команду и передаем в эксплуатацию',
      icon: <Zap className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Enhanced Header */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/blog" 
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span>Назад к блогу</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="bg-white/10 p-2 rounded-lg flex items-center justify-center backdrop-blur-sm">
                <img src="/_logo_thedeed.png" alt="thedeed" className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">the<span className="text-blue-400">deed</span></span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm" data-aos="zoom-in" data-aos-delay="100">
              <Code className="h-10 w-10" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight" data-aos="fade-up" data-aos-delay="200">
              Полное руководство по заказной разработке в 2025 году
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-10" data-aos="fade-up" data-aos-delay="300">
              Все, что нужно знать о создании индивидуального программного обеспечения для вашего бизнеса
            </p>
            
            {/* Enhanced Article Meta */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100" data-aos="fade-up" data-aos-delay="400">
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Clock className="h-5 w-5" />
                <span className="font-medium">8 минут чтения</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Calendar className="h-5 w-5" />
                <span className="font-medium">15 января 2025</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <User className="h-5 w-5" />
                <span className="font-medium">Команда thedeed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Ключевые преимущества
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Почему заказная разработка — это правильный выбор для вашего бизнеса
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* What is Custom Development */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 p-3 rounded-xl">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Что такое заказная разработка?</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Заказная разработка — это создание программного обеспечения специально под ваши бизнес-задачи. 
                В отличие от готовых решений, заказное ПО разрабатывается с нуля с учетом всех ваших требований, 
                процессов и специфики работы.
              </p>
            </div>

            {/* Advantages */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-xl">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Преимущества заказной разработки</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Полное соответствие вашим бизнес-процессам',
                  'Масштабируемость и гибкость',
                  'Уникальность решения',
                  'Полный контроль над функционалом',
                  'Интеграция с существующими системами',
                  'Высокая производительность'
                ].map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* When to Choose */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Когда стоит выбирать заказную разработку?</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Заказная разработка подходит, когда:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Готовые решения не покрывают ваши потребности',
                  'У вас уникальные бизнес-процессы',
                  'Нужна интеграция с множеством систем',
                  'Требуется высокая производительность',
                  'Важна безопасность и конфиденциальность',
                  'Нужна гибкость в развитии системы'
                ].map((reason, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-orange-100 p-3 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Этапы разработки</h2>
              </div>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start gap-6">
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-blue-600">{step.icon}</div>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  <Code className="h-8 w-8 text-indigo-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Технологии</h2>
              </div>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Мы используем современный стек технологий для создания надежных и масштабируемых решений:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-colors duration-200">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl">{tech.icon}</span>
                      <div>
                        <h4 className="font-bold text-gray-900">{tech.name}</h4>
                        <span className="text-sm text-blue-600 font-medium">{tech.category}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cost Section */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-yellow-100 p-3 rounded-xl">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Стоимость разработки</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Стоимость зависит от сложности проекта, количества функций и сроков разработки. 
                Простой веб-сайт может стоить от 400,000 рублей, а сложная система — от 2,000,000 рублей.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 rounded-xl p-6 text-center border border-blue-200">
                  <h4 className="font-bold text-blue-900 mb-2">Простой проект</h4>
                  <p className="text-2xl font-bold text-blue-600 mb-2">от 400,000 ₽</p>
                  <p className="text-blue-700 text-sm">Веб-сайт, лендинг</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 text-center border border-green-200">
                  <h4 className="font-bold text-green-900 mb-2">Средний проект</h4>
                  <p className="text-2xl font-bold text-green-600 mb-2">от 1,000,000 ₽</p>
                  <p className="text-green-700 text-sm">Веб-приложение, CRM</p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6 text-center border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2">Сложный проект</h4>
                  <p className="text-2xl font-bold text-purple-600 mb-2">от 2,000,000 ₽</p>
                  <p className="text-purple-700 text-sm">Корпоративная система</p>
                </div>
              </div>
            </div>

            {/* How to Start */}
            <div className="bg-white rounded-2xl p-8 mb-12 shadow-sm border border-gray-100" data-aos="fade-up">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <Zap className="h-8 w-8 text-emerald-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Как начать проект?</h2>
              </div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Для начала работы над проектом:
              </p>
              <div className="space-y-4">
                {[
                  'Опишите вашу задачу и требования',
                  'Получите бесплатную консультацию от экспертов',
                  'Обсудите техническое задание и архитектуру',
                  'Получите детальное коммерческое предложение',
                  'Подпишите договор и начинайте разработку'
                ].map((step, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-emerald-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 text-lg">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
              <Users className="h-10 w-10" />
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Готовы обсудить ваш проект?
            </h3>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
              Получите бесплатную консультацию, техническое задание и коммерческое предложение для вашего проекта
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setModalOpen(true)}
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
              >
                <ArrowRight className="h-5 w-5" />
                Получить консультацию
              </button>
              <Link
                to="/#portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                Посмотреть кейсы
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      <LeadFormModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        source="Custom Development Guide" 
      />
    </div>
  );
};

export default CustomDevelopmentGuide;