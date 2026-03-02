import React, { useState, useEffect } from 'react';

interface LeadFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

const LeadFormModal: React.FC<LeadFormModalProps> = ({ isOpen, onClose, source }) => {
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  // Определяем мобильное устройство после монтирования
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Блокировка прокрутки body при открытом модальном окне и обработка клавиши Escape
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      
      // Обработчик клавиши Escape
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }
      };
      
      document.addEventListener('keydown', handleEscape);
      
      return () => {
        document.removeEventListener('keydown', handleEscape);
      };
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    }
    
    // Очистка при размонтировании компонента
    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.overflow = 'unset';
      document.body.style.touchAction = 'auto';
    };
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateContact = (value: string) => {
    // Простейшая email-валидация
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i;
    // Простейшая валидация мобильного (Россия, международный)
    const phoneRegex = /^((\+7|7|8)?\s?\(?\d{3}\)?\s?\d{3}[-\s]?\d{2}[-\s]?\d{2})$/;
    return emailRegex.test(value) || phoneRegex.test(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    
    if (!validateContact(form.contact)) {
      setError('Введите корректный мобильный телефон или email.');
      setLoading(false);
      return;
    }
    
    try {
      const res = await fetch('/api/send-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          contact: form.contact,
          message: form.message,
          source: source || 'Кнопка',
          formType: 'modal'
        })
      });
      
      if (res.ok) {
        setSuccess(true);
        setForm({ name: '', contact: '', message: '' });
      } else {
        setError('Ошибка отправки. Попробуйте позже.');
      }
    } catch {
      setError('Ошибка сети.');
    }
    setLoading(false);
  };

  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/50 modal-backdrop p-4 sm:p-6"
      onClick={onClose}
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        zIndex: 999999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl relative mx-auto animate-fadeIn p-6 sm:p-8 lead-form-modal"
        onClick={(e) => e.stopPropagation()}
        style={{ 
          maxHeight: 'calc(100vh - 2rem)',
          width: 'min(90vw, 28rem)',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all duration-200 text-xl font-bold z-10"
          aria-label="Закрыть модальное окно"
          style={{ touchAction: 'manipulation' }}
        >
          ×
        </button>
        <h3 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 pr-8">Оставить заявку</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            required 
            placeholder="Ваше имя" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
            style={{ fontSize: '16px' }} // Предотвращает zoom на iOS
          />
          <input 
            name="contact" 
            value={form.contact} 
            onChange={handleChange} 
            required 
            placeholder="Телефон или Email" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
            style={{ fontSize: '16px' }} // Предотвращает zoom на iOS
          />
          <textarea 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            rows={isMobile ? 3 : 4} 
            placeholder="Комментарий" 
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none" 
            style={{ fontSize: '16px' }} // Предотвращает zoom на iOS
          />
          <button 
            type="submit" 
            disabled={loading} 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
            style={{ touchAction: 'manipulation' }}
          >
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
        {success && <div className="mt-4 p-3 bg-green-50 text-green-700 rounded-lg border border-green-200">✓ Заявка отправлена!</div>}
        {error && <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg border border-red-200">⚠ {error}</div>}
      </div>
    </div>
  );
};

export default LeadFormModal;
