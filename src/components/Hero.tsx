import React from 'react';
import { ArrowRight, Play, Star, Globe, Smartphone } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Hero: React.FC = () => {
  const { openModal } = useModal();

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="py-20 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left relative" data-aos="fade-up" data-aos-delay="100">
          {/* Горизонтальная полоса иконок технологий над текстом */}
          <div className="flex justify-center lg:justify-start gap-6 mb-8">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React — фреймворк для веб-разработки" title="React" className="h-8 w-8 opacity-80" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript — язык программирования" title="TypeScript" className="h-8 w-8 opacity-80" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js — серверная платформа" title="Node.js" className="h-8 w-8 opacity-80" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python — язык программирования" title="Python" className="h-8 w-8 opacity-80" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker — контейнеризация" title="Docker" className="h-8 w-8 opacity-80" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript — язык программирования" title="JavaScript" className="h-8 w-8 opacity-80" />
            <img src="/ai-icon.png" alt="AI — искусственный интеллект" title="AI" className="h-8 w-8 opacity-80" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
          </div>
          <div className="text-center mb-16 pt-12">
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-6">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">ИТ компания современных решений, 10 лет опыта</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Заказная разработка веб и мобильных приложений
              <span className="block text-gray-600">
                для автоматизации вашего бизнеса
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              Создаем веб-приложения на React, мобильные приложения на React Native, 
              корпоративные системы на Node.js и Python с использованием современных технологий 
              и лучших практик разработки для автоматизации бизнес-процессов
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="group bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 shadow-lg font-semibold flex items-center gap-2" onClick={() => openModal('Hero')}>
                Обсудить проект
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <button className="group bg-white text-gray-900 px-8 py-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:scale-105 shadow-sm font-semibold flex items-center gap-2" onClick={scrollToPortfolio}>
                <Play className="h-5 w-5" />
                Посмотреть кейсы
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center gap-8 relative" data-aos="zoom-in" data-aos-delay="200">
          {/* Примеры интерфейсов веб-приложения */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-lg w-full max-w-md flex flex-col items-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2"><Globe className="h-5 w-5 text-blue-600" /> Веб-интерфейс</h3>
            <img src="/5db921ffdbd28a94f32526b97ff47d86.jpg" alt="Веб-интерфейс React приложения — пример заказной разработки веб-сайта" title="Веб-интерфейс React приложения" className="rounded-xl mb-2 w-full h-56 object-cover" />
            <p className="text-gray-600 text-sm">Реальный пример современного веб-приложения с адаптивным дизайном.</p>
          </div>
          {/* Примеры интерфейсов мобильного приложения */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-lg w-full max-w-md flex flex-col items-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2"><Smartphone className="h-5 w-5 text-green-600" /> Мобильный интерфейс</h3>
            <img src="/63b59d5fdb25cff19f0c18c8a1a25148.jpg" alt="Мобильный интерфейс React Native приложения — пример заказной разработки для iOS и Android" title="Мобильный интерфейс React Native приложения" className="rounded-xl mb-2 w-32 h-56 object-cover" />
            <p className="text-gray-600 text-sm">Реальный пример мобильного приложения для iOS/Android с современным UI.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;