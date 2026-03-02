import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Cloud, ArrowLeft, Check, Server, Shield, Zap, Users, Clock, Star, Globe, Database } from 'lucide-react';
import LeadFormModal from '../LeadFormModal';
import Header from '../Header';
import Footer from '../Footer';

const CloudSolutionsService: React.FC = () => {
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
            <div className="bg-indigo-600 p-3 rounded-xl">
              <Cloud className="h-8 w-8" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">Облачные решения</h1>
          </div>
          
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            Миграция в облако, настройка инфраструктуры и автоматизация процессов для повышения эффективности бизнеса
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Overview */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Облачные сервисы</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6" data-aos="zoom-in" data-aos-delay="100">
              <Cloud className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Миграция в облако</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  AWS, Azure, GCP
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Оценка инфраструктуры
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Поэтапная миграция
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6" data-aos="zoom-in" data-aos-delay="200">
              <Server className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">DevOps</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Docker, Kubernetes
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  CI/CD пайплайны
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Infrastructure as Code
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6" data-aos="zoom-in" data-aos-delay="300">
              <Shield className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Безопасность</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Шифрование данных
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  VPN настройка
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Мониторинг безопасности
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Стоимость услуг</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Консультация</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">от ₽500,000</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Аудит инфраструктуры
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  План миграции
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Оценка стоимости
                </li>
              </ul>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-8 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">Популярно</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Миграция</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">от ₽1,200,000</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Полная миграция
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Настройка CI/CD
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  3 месяца поддержки
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">от ₽2,500,000</div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Мульти-облако
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  Высокая доступность
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600" />
                  12 месяцев поддержки
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-900 rounded-2xl p-12 text-center text-white" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">Готовы к миграции в облако?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Получите бесплатную консультацию и аудит вашей текущей инфраструктуры
          </p>
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition-all duration-200 hover:scale-105 font-semibold"
          >
            Обсудить проект
          </button>
        </section>
      </main>

      <Footer />
      <LeadFormModal isOpen={modalOpen} onClose={() => setModalOpen(false)} source="CloudSolutionsService" />
    </div>
  );
};

export default CloudSolutionsService;