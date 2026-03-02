import React from 'react';

const Technologies: React.FC = () => {
  const technologies = [
    {
      category: 'Frontend',
      items: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'PHP', 'Java', 'C#', 'Go']
    },
    {
      category: 'Mobile',
      items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin', 'Ionic']
    },
    {
      category: 'Database',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch', 'Firebase']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform']
    },
    {
      category: 'Design & Tools',
      items: ['Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'Principle']
    }
  ];

  const partners = [
    { name: 'Microsoft', logo: 'MS' },
    { name: 'Яндекс Cloud', logo: 'YC' },
    { name: 'Amazon AWS', logo: 'AWS' },
    { name: 'Meta', logo: 'META' },
    { name: 'Salesforce', logo: 'SF' },
    { name: 'Oracle', logo: 'ORC' }
  ];

  return (
    <section id="technologies" className="py-20 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up" data-aos-delay="100">
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Технологии и партнеры
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Используем современный стек технологий и работаем с ведущими IT-компаниями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 hover:bg-gray-100 transition-all duration-200"
              data-aos="zoom-in"
              data-aos-delay={300 + index * 100}
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {tech.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="bg-white text-gray-700 px-3 py-1 rounded-lg text-sm font-medium border border-gray-200 hover:border-gray-300 transition-colors duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8" data-aos="zoom-in" data-aos-delay="500">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8" data-aos="fade-up" data-aos-delay="400">
            Наши партнеры
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 flex items-center justify-center hover:shadow-md transition-all duration-200 border border-gray-200"
                data-aos="fade-right"
                data-aos-delay={600 + index * 100}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-2 mx-auto">
                    <span className="text-white font-bold text-sm">{partner.logo}</span>
                  </div>
                  <span className="text-xs text-gray-600 font-medium">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;