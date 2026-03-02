import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Portfolio: React.FC = () => {
  const { openModal } = useModal();

  const projects = [
    {
      title: 'Газпромнефть Шельфпроект - Система развития компетенций',
      description: 'Корпоративная платформа для развития профессиональных компетенций сотрудников с модулями обучения, оценки и карьерного планирования',
      image: '/967045605.png',
      technologies: ['React', 'Node.js', 'GO', 'PostgreSQL', 'Docker'],
      category: 'Корпоративные системы',
      duration: '9 месяцев',
      team: '12 человек',
      status: 'Завершен'
    },
    {
      title: 'AIO - AI приложение',
      description: 'Универсальное AI-приложение с модулями: создание логотипов и изображений, решение учебных задач, синтез голоса (4 варианта), генерация контента и слоганов, создание резюме и бизнес-планов, исправление кода',
      image: '/Cover.png',
      technologies: ['React Native', 'Python', 'TensorFlow', 'OpenAI'],
      category: 'Искусственный интеллект',
      duration: '8 месяцев',
      team: '10 человек',
      status: 'Завершен'
    },
    {
      title: 'Новостной портал для Алтайского края',
      description: 'Региональный информационный портал с системой публикации новостей, рубриками и пользовательскими комментариями',
      image: '/167846283.png',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      category: 'Медиа',
      duration: '4 месяца',
      team: '5 человек',
      status: 'Завершен'
    },
    {
      title: 'Облачное решение для малого бизнеса',
      description: 'Масштабируемая SaaS-платформа для автоматизации бизнес-процессов с модулями CRM, учета и аналитики',
      image: '/271205230.png',
      technologies: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
      category: 'Облачные решения',
      duration: '8 месяцев',
      team: '10 человек',
      status: 'Завершен'
    },
    {
      title: 'Приложение iOS/Android для фитнес марафона',
      description: 'Мобильное приложение для организации фитнес-челленджей с трекингом активности, рейтингами и социальными функциями',
      image: '/316668363.png',
      technologies: ['React Native', 'Node.js', 'Firebase', 'Redux'],
      category: 'Мобильные приложения',
      duration: '6 месяцев',
      team: '6 человек',
      status: 'Завершен'
    },
    {
      title: 'Приложение интернет магазин Letique App',
      description: 'Мобильное приложение премиум интернет-магазина с каталогом товаров, корзиной, оплатой и доставкой',
      image: '/332838039.jpg',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Stripe'],
      category: 'E-commerce',
      duration: '5 месяцев',
      team: '8 человек',
      status: 'Завершен'
    },
    {
      title: 'Приложение покупки без кассиров в офлайн',
      description: 'Инновационное мобильное решение для самообслуживания покупателей с QR-сканированием, оплатой и контролем товаров',
      image: '/434997112.jpg',
      technologies: ['React Native', 'Python', 'PostgreSQL', 'AI/ML'],
      category: 'Ритейл',
      duration: '7 месяцев',
      team: '9 человек',
      status: 'Завершен'
    },
    {
      title: 'MasterKit - Приложение для проработки своих целей',
      description: 'Персональное мобильное приложение для постановки и достижения целей с трекингом прогресса, мотивационными механиками и аналитикой',
      image: '/516921117.jpg',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Firebase'],
      category: 'Продуктивность',
      duration: '5 месяцев',
      team: '7 человек',
      status: 'Завершен'
    },
    {
      title: 'Дизайн для Offer Letter',
      description: 'Разработка современного дизайна системы для создания и отправки персонализированных предложений о работе с брендингом компании',
      image: '/595941248.png',
      technologies: ['Figma', 'React', 'TypeScript', 'PDF.js'],
      category: 'UI/UX Дизайн',
      duration: '2 месяца',
      team: '4 человека',
      status: 'Завершен'
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Завершен' 
      ? 'bg-green-100 text-green-800' 
      : 'bg-blue-100 text-blue-800';
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="100">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Портфолио проектов — заказная разработка веб и мобильных приложений
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Примеры успешно реализованных решений для различных отраслей: React, React Native, 
            Node.js, Python, AI/ML проекты и корпоративные системы
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200"
              data-aos="zoom-in" data-aos-delay={300 + index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} проект на ${project.technologies.join(', ')}`}
                  title={`${project.title} - ${project.category}`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {project.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {project.team}
                  </div>
                </div>


              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 font-semibold" onClick={() => openModal('Portfolio')}>
            Заказать проект
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;