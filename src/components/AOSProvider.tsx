import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface AOSProviderProps {
  children: React.ReactNode;
}

const AOSProvider: React.FC<AOSProviderProps> = ({ children }) => {
  useEffect(() => {
    // Инициализация AOS с улучшенными настройками
    AOS.init({
      duration: 600, // Увеличиваем длительность для более плавных анимаций
      once: true, // Анимация срабатывает только один раз
      easing: 'ease-out-cubic', // Более плавная функция анимации
      offset: 50, // Отступ от верха экрана перед срабатыванием
      delay: 0, // Убираем задержку
      anchorPlacement: 'top-bottom', // Анимация срабатывает когда элемент появляется снизу
      // Отключаем анимации на мобильных устройствах для лучшей производительности
      disable: window.innerWidth < 768,
      // Улучшенные настройки для предотвращения проблем с скроллом
      throttleDelay: 99, // Троттлинг для лучшей производительности
      // Отключаем анимации для элементов с overflow: hidden
      disableMutationObserver: false,
    });

    // Обработчик изменения размера окна
    const handleResize = () => {
      if (window.innerWidth < 768) {
        AOS.refreshHard(); // Принудительное обновление AOS
      } else {
        AOS.refresh(); // Обычное обновление для больших экранов
      }
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      // Очистка AOS при размонтировании
      AOS.refresh();
    };
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
