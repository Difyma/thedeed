import React from 'react';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Projects: React.FC = () => {
  const { openModal } = useModal();

  const projects = [
    {
      title: 'Чистые океаны',
      description: 'Глобальная инициатива по очистке мирового океана от пластикового мусора',
      image: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Тихий океан',
      participants: 2500,
      date: '2024-03-15',
      category: 'Экология',
      progress: 75
    },
    {
      title: 'Образование для всех',
      description: 'Строительство школ и обеспечение доступа к образованию в развивающихся странах',
      image: 'https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Африка',
      participants: 1800,
      date: '2024-02-20',
      category: 'Образование',
      progress: 60
    },
    {
      title: 'Помощь бездомным',
      description: 'Программа реабилитации и трудоустройства людей без постоянного места жительства',
      image: 'https://images.pexels.com/photos/6995334/pexels-photo-6995334.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Москва',
      participants: 450,
      date: '2024-01-10',
      category: 'Социальная помощь',
      progress: 40
    },
    {
      title: 'Зеленая энергия',
      description: 'Установка солнечных панелей в отдаленных деревнях для обеспечения чистой энергией',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Индия',
      participants: 920,
      date: '2024-04-05',
      category: 'Энергетика',
      progress: 85
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      'Экология': 'bg-green-100 text-green-800',
      'Образование': 'bg-blue-100 text-blue-800',
      'Социальная помощь': 'bg-purple-100 text-purple-800',
      'Энергетика': 'bg-orange-100 text-orange-800'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Активные проекты
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Исследуйте наши текущие инициативы и узнайте, как вы можете внести свой вклад
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-medium text-gray-800">
                    {project.progress}% завершено
                  </div>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    {project.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {project.participants} участников
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(project.date).toLocaleDateString('ru-RU')}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Прогресс</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                </div>

                <button className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105 font-semibold flex items-center justify-center gap-2" onClick={() => openModal('Projects')}>
                  Участвовать в проекте
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-200 hover:scale-105 font-semibold" onClick={() => openModal('Projects')}>
            Посмотреть все проекты
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;