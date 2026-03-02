import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Zap, ArrowLeft, Check, Bot, Workflow, Users, Clock, Star, Settings, MessageSquare } from 'lucide-react';
import LeadFormModal from '../LeadFormModal';
import Header from '../Header';
import Footer from '../Footer';

const AutomationService: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  // Автоматический скролл вверх при загрузке страницы
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const handleBackToServices = () => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('services');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Header */}
      <header className="bg-gray-900 text-white py-16 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button 
            onClick={handleBackToServices}
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад к услугам
          </button>
          
          <div className="flex items-center gap-4 mb-6" data-aos="fade-up">
            <div className="bg-yellow-600 p-3 rounded-xl">
              <Zap className="h-8 w-8" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">Автоматизация</h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Автоматизируем бизнес-процессы, создаем интеграции с внешними системами и разрабатываем чат-ботов для повышения эффективности
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Виды автоматизации</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-xl p-6" data-aos="zoom-in" data-aos-delay="100">
              <Bot className="h-8 w-8 text-yellow-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">RPA</h3>
              <p className="text-gray-600 text-sm">Роботизация повторяющихся процессов</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6" data-aos="zoom-in" data-aos-delay="200">
              <Settings className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">API интеграции</h3>
              <p className="text-gray-600 text-sm">Связываем разные системы</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6" data-aos="zoom-in" data-aos-delay="300">
              <Workflow className="h-8 w-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Workflow</h3>
              <p className="text-gray-600 text-sm">Настройка бизнес-процессов</p>
            </div>

            <div className="bg-gray-50 rounded-xl p-6" data-aos="zoom-in" data-aos-delay="400">
              <MessageSquare className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Чат-боты</h3>
              <p className="text-gray-600 text-sm">Автоматизация коммуникаций</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Преимущества автоматизации</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Экономия времени', description: 'Сокращение времени выполнения рутинных задач до 80%', icon: <Clock className="h-6 w-6" /> },
              { title: 'Снижение ошибок', description: 'Исключение человеческого фактора в повторяющихся процессах', icon: <Check className="h-6 w-6" /> },
              { title: 'Масштабируемость', description: 'Возможность обрабатывать больший объем задач без увеличения штата', icon: <Zap className="h-6 w-6" /> },
              { title: 'Круглосуточная работа', description: 'Автоматические процессы работают 24/7 без выходных', icon: <Bot className="h-6 w-6" /> }
            ].map((benefit, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-yellow-100 p-2 rounded-lg text-yellow-600">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                </div>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Стоимость автоматизации</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Базовая автоматизация</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">от ₽300,000</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Простые RPA скрипты
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Базовые интеграции
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Документация
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-600 text-white px-4 py-1 rounded-full text-sm font-medium">Популярно</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Комплексная автоматизация</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">от ₽800,000</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Workflow системы
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  API интеграции
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Чат-боты
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Enterprise автоматизация</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">от ₽1,500,000</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Сложные процессы
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  AI интеграция
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Мониторинг
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 rounded-2xl p-12 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Готовы автоматизировать бизнес?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и анализ процессов для автоматизации
          </p>
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-yellow-600 text-white px-8 py-4 rounded-lg hover:bg-yellow-700 transition-all duration-200 hover:scale-105 font-semibold"
          >
            Обсудить проект
          </button>
        </section>
      </main>

      <Footer />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="AutomationService" />
    </div>
  );
};

export default AutomationService;