import React from 'react';
import { Globe, Smartphone, Database, Cloud, Zap, ArrowRight, CheckCircle } from 'lucide-react';
import { useModal } from '../context/ModalContext';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const { openModal } = useModal();
  const navigate = useNavigate();

  const services = [
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: 'Веб-разработка',
      description: 'Создание современных веб-приложений с использованием React, Vue.js, Angular',
      features: ['SPA приложения', 'E-commerce', 'CMS системы', 'PWA'],
      price: 'от ₽400,000',
      detailsPath: '/service/web-development'
    },
    {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: 'Мобильная разработка',
      description: 'Нативные и кроссплатформенные мобильные приложения для iOS и Android',
      features: ['React Native', 'Flutter', 'iOS/Android', 'UI/UX дизайн'],
      price: 'от ₽1,000,000',
      detailsPath: '/service/mobile-development'
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: 'Backend разработка',
      description: 'Серверные решения, API, базы данных и микросервисная архитектура',
      features: ['REST API', 'GraphQL', 'Микросервисы', 'DevOps'],
      price: 'от ₽800,000',
      detailsPath: '/service/backend-development'
    },
    {
      icon: <Cloud className="h-8 w-8 text-indigo-600" />,
      title: 'Облачные решения',
      description: 'Развертывание и масштабирование приложений в облаке',
      features: ['AWS', 'Google Cloud', 'Azure', 'Kubernetes'],
      price: 'от ₽300,000',
      detailsPath: '/service/cloud-solutions'
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-600" />,
      title: 'Автоматизация бизнеса',
      description: 'Внедрение систем автоматизации для повышения эффективности',
      features: ['RPA', 'Workflow', 'Интеграции', 'Аналитика'],
      price: 'от ₽500,000',
      detailsPath: '/service/automation'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Полный спектр услуг по разработке программного обеспечения для вашего бизнеса
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>

              <div className="mb-6">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 mb-4">{service.price}</div>
                <button
                  onClick={() => navigate(service.detailsPath)}
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 group"
                >
                  Подробнее
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12" data-aos="fade-up">
          <button
            onClick={() => openModal('services')}
            className="bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 inline-flex items-center gap-2"
          >
            Получить консультацию
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;