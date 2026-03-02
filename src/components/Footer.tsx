import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white mt-auto w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-blue-600 text-2xl font-bold">&gt;_</span>
              <span className="text-2xl font-bold">the<span className="text-blue-600">deed</span></span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Профессиональная разработка веб-приложений, мобильных приложений 
              и корпоративных систем для бизнеса любого масштаба.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                hello@theded.ru
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <a href="https://wa.me/79891514500" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +7 989 151-45-00
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Услуги</h3>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Веб-разработка
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Мобильные приложения
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Backend разработка
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                UI/UX дизайн
              </a>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Компания</h3>
            <nav className="space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Портфолио
              </button>
              {/* <a href="#" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Карьера
              </a> */}
              <Link to="/blog" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Блог
              </Link>
              <Link to="/privacy" className="block text-gray-300 hover:text-white transition-colors duration-200">
                Политика конфиденциальности
              </Link>
            </nav>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>Москва, Россия • Работаем по всему миру</span>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-gray-400 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors duration-200">
                Политика конфиденциальности
              </Link>
              <span className="hidden sm:inline">•</span>
              <span>© 2015-2025 the<span className="text-blue-600">deed</span>. Все права защищены.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;