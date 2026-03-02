import React, { useState } from 'react';
import { Mail, Phone, Send, MessageCircle, Calendar } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { openModal } = useModal();

  const validateEmail = (email: string) => {
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    if (!validateEmail(formData.email)) {
      setError('Введите корректный email.');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          contact: formData.email,
          email: formData.email,
          company: formData.company,
          budget: formData.budget,
          message: formData.message,
          formType: 'contact'
        })
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', company: '', budget: '', message: '' });
      } else {
        setError('Ошибка отправки. Попробуйте позже.');
      }
    } catch {
      setError('Ошибка сети.');
    }
    setLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Обсудим ваш проект и предложим оптимальное решение
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Расскажите о вашем проекте
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Компания
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Название компании"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Бюджет проекта
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Выберите бюджет</option>
                      <option value="100-500k">₽100,000 - ₽500,000</option>
                      <option value="500k-1m">₽500,000 - ₽1,000,000</option>
                      <option value="1m-3m">₽1,000,000 - ₽3,000,000</option>
                      <option value="3m+">₽3,000,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Описание проекта *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Расскажите подробнее о вашем проекте, целях и требованиях..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group w-full bg-gray-900 text-white py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 hover:scale-105 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                  {loading ? 'Отправка...' : 'Отправить заявку'}
                </button>

                {success && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.</p>
                  </div>
                )}

                {error && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium">{error}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Контактная информация
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email</div>
                    <div className="text-gray-600">hello@theded.ru</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="bg-green-50 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">WhatsApp</div>
                    <a href="https://wa.me/79891514500" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 transition-colors">
                      +7 989 151-45-00
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6 text-white">
              <h4 className="text-lg font-semibold mb-4">
                Быстрая связь
              </h4>
              <div className="space-y-3">
                <a 
                  href="https://t.me/thedeed_bot" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-white/10 hover:bg-white/20 rounded-lg p-3 flex items-center gap-3 transition-all duration-200 text-white no-underline"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Telegram чат</span>
                </a>
                <button 
                  className="w-full bg-white/10 hover:bg-white/20 rounded-lg p-3 flex items-center gap-3 transition-all duration-200"
                  onClick={() => openModal('Contact - Записаться на встречу')}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Записаться на встречу</span>
                </button>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Время ответа
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                Мы отвечаем на все заявки в течение 2 часов в рабочее время 
                (пн-пт, 9:00-18:00 МСК)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
