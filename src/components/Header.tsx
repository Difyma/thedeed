import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToHome = () => {
    if (location.pathname === '/') {
      // Если уже на главной странице, прокручиваем к началу
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Если на другой странице, переходим на главную
      navigate('/');
    }
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      // Если не на главной странице, сначала переходим на главную
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Если на главной странице, просто скроллим
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity duration-200" onClick={navigateToHome}>
            <div className="bg-gray-900 p-2 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-mono font-bold">
                <span className="text-blue-600">&gt;_</span>
              </span>
            </div>
            <span className="text-xl font-bold text-gray-900">
              the<span className="text-blue-600">deed</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Главная
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Услуги
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Наши работы
            </button>
            <button
              onClick={() => scrollToSection('technologies')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Технологии
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              О компании
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium"
            >
              Связаться
            </button>
            <button
              onClick={() => openModal('Desktop Header')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium"
            >
              Оставить заявку
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
            <nav className="px-4 py-6 space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
              >
                Главная
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
              >
                Услуги
              </button>
              <button
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
              >
                Наши работы
              </button>
              <button
                onClick={() => scrollToSection('technologies')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
              >
                Технологии
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-600 hover:text-gray-900 transition-colors duration-200 font-medium py-2"
              >
                О компании
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-left py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                Связаться
              </button>
              <button
                onClick={() => {
                  openModal('Mobile Menu');
                  setIsMenuOpen(false);
                }}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium mt-4"
              >
                Оставить заявку
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;