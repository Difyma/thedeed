import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Globe, Smartphone, Database, Cloud, Zap, Clock, Calendar, User, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  author: string;
  image: string;
  tags: string[];
}

const Blog: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const navigate = useNavigate();
  const location = useLocation();

  // Автоматический скролл вверх при загрузке страницы
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  const categories = [
    { id: 'all', name: 'Все статьи', icon: <Globe className="h-5 w-5" /> },
    { id: 'web-development', name: 'Веб-разработка', icon: <Globe className="h-5 w-5" /> },
    { id: 'mobile-development', name: 'Мобильная разработка', icon: <Smartphone className="h-5 w-5" /> },
    { id: 'backend-development', name: 'Backend разработка', icon: <Database className="h-5 w-5" /> },
    { id: 'cloud-solutions', name: 'Облачные решения', icon: <Cloud className="h-5 w-5" /> },
    { id: 'automation', name: 'Автоматизация', icon: <Zap className="h-5 w-5" /> }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 'custom-development-guide-2025',
      title: 'Полное руководство по заказной разработке в 2025 году',
      excerpt: 'Все, что нужно знать о создании индивидуального программного обеспечения для вашего бизнеса',
      category: 'web-development',
      readTime: '8 мин',
      author: 'Команда thedeed',
      image: '/5db921ffdbd28a94f32526b97ff47d86.jpg',
      tags: ['Заказная разработка', 'Веб-приложения', '2025']
    },
    {
      id: 'business-automation-guide-2025',
      title: 'Автоматизация бизнеса в 2025: полное руководство',
      excerpt: 'Как внедрить автоматизацию в ваш бизнес и повысить эффективность в 2-3 раза',
      category: 'automation',
      readTime: '12 мин',
      author: 'Команда thedeed',
      image: '/434997112.jpg',
      tags: ['Автоматизация', 'Бизнес-процессы', '2025']
    },
    {
      id: 'custom-vs-ready-comparison-2025',
      title: 'Заказная разработка vs готовые решения в 2025',
      excerpt: 'Детальное сравнение подходов к разработке программного обеспечения',
      category: 'web-development',
      readTime: '10 мин',
      author: 'Команда thedeed',
      image: '/516921117.jpg',
      tags: ['Заказная разработка', 'Готовые решения', 'Сравнение']
    },
    {
      id: 'contractor-selection-guide-2025',
      title: 'Как выбрать подрядчика для разработки в 2025',
      excerpt: 'Пошаговое руководство по выбору надежной команды разработчиков',
      category: 'web-development',
      readTime: '15 мин',
      author: 'Команда thedeed',
      image: '/595941248.png',
      tags: ['Выбор подрядчика', 'Разработка', 'Советы']
    },
    {
      id: 'logistics-case-study-2025',
      title: 'Кейс: автоматизация логистики для e-commerce',
      excerpt: 'Реальный пример внедрения системы автоматизации в логистической компании',
      category: 'automation',
      readTime: '7 мин',
      author: 'Команда thedeed',
      image: '/63b59d5fdb25cff19f0c18c8a1a25148.jpg',
      tags: ['Логистика', 'E-commerce', 'Кейс']
    },
    {
      id: 'development-cost-guide-2025',
      title: 'Сколько стоит разработка в 2025 году',
      excerpt: 'Актуальные цены на разработку программного обеспечения и факторы влияния',
      category: 'web-development',
      readTime: '9 мин',
      author: 'Команда thedeed',
      image: '/167846283.png',
      tags: ['Стоимость', 'Разработка', '2025']
    },
    {
      id: 'ai-business-applications-2025',
      title: 'AI в бизнесе: практические применения в 2025',
      excerpt: 'Как искусственный интеллект может трансформировать ваш бизнес',
      category: 'automation',
      readTime: '11 мин',
      author: 'Команда thedeed',
      image: '/271205230.png',
      tags: ['ИИ', 'Бизнес', 'Автоматизация']
    },
    {
      id: 'ai-business-guide-2025',
      title: 'Полное руководство по внедрению AI в бизнес 2025',
      excerpt: 'Пошаговый план интеграции искусственного интеллекта в ваши бизнес-процессы',
      category: 'automation',
      readTime: '14 мин',
      author: 'Команда thedeed',
      image: '/316668363.png',
      tags: ['AI', 'Бизнес', 'Внедрение']
    },
    {
      id: 'technical-specification-guide-2025',
      title: 'Как составить техническое задание в 2025',
      excerpt: 'Подробное руководство по созданию качественного ТЗ для разработки',
      category: 'web-development',
      readTime: '13 мин',
      author: 'Команда thedeed',
      image: '/332838039.jpg',
      tags: ['ТЗ', 'Техническое задание', 'Разработка']
    }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : <Globe className="h-5 w-5" />;
  };

  const getCategoryName = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Разработка';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Блог
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Полезные статьи и руководства по разработке программного обеспечения, 
              автоматизации бизнеса и современным технологиям
            </p>
          </div>
        </div>
      </header>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3" data-aos="fade-up">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 blog-grid">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer blog-card"
                onClick={() => navigate(`/blog/${post.id}`)}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/Cover.png'; // Fallback изображение
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {getCategoryName(post.category)}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {post.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="w-full bg-gray-900 text-white px-4 py-2 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2 group">
                    Читать
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Статьи не найдены
              </h3>
              <p className="text-gray-600 mb-6">
                Попробуйте выбрать другую категорию или вернуться к общему списку
              </p>
              <button
                onClick={() => setSelectedCategory('all')}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200"
              >
                Показать все статьи
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;