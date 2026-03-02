import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateContact = (value: string) => {
    const emailRegex = /^[\w-.]+@[\w-]+\.[a-z]{2,}$/i;
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

  if (!isOpen || typeof document === 'undefined') return null;
  
  const modal = (
    <div className="lead-modal-wrapper">
      <div className="lead-modal-overlay" onClick={onClose} />
      <div className="lead-modal-content">
        <button className="lead-modal-close" onClick={onClose}>×</button>
        <h3 className="lead-modal-title">Оставить заявку</h3>
        <form onSubmit={handleSubmit} className="lead-modal-form">
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            required 
            placeholder="Ваше имя" 
            className="lead-modal-input"
          />
          <input 
            name="contact" 
            value={form.contact} 
            onChange={handleChange} 
            required 
            placeholder="Телефон или Email" 
            className="lead-modal-input"
          />
          <textarea 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            rows={3}
            placeholder="Комментарий" 
            className="lead-modal-textarea"
          />
          <button type="submit" disabled={loading} className="lead-modal-submit">
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
        {success && <div className="lead-modal-success">✓ Заявка отправлена!</div>}
        {error && <div className="lead-modal-error">⚠ {error}</div>}
      </div>
      <style>{`
        .lead-modal-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
        }
        .lead-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          z-index: 1;
        }
        .lead-modal-content {
          position: relative;
          z-index: 2;
          background: white;
          border-radius: 16px;
          width: 100%;
          max-width: 400px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 24px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
          animation: lead-modal-fade-in 0.2s ease-out;
        }
        @keyframes lead-modal-fade-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .lead-modal-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f3f4f6;
          border: none;
          border-radius: 50%;
          cursor: pointer;
          font-size: 22px;
          color: #6b7280;
          line-height: 1;
        }
        .lead-modal-close:active {
          background: #e5e7eb;
        }
        .lead-modal-title {
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #111827;
          padding-right: 40px;
        }
        .lead-modal-form {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .lead-modal-input,
        .lead-modal-textarea {
          width: 100%;
          padding: 14px 16px;
          border: 1px solid #d1d5db;
          border-radius: 10px;
          font-size: 16px;
          outline: none;
          box-sizing: border-box;
          font-family: inherit;
        }
        .lead-modal-input:focus,
        .lead-modal-textarea:focus {
          border-color: #2563eb;
        }
        .lead-modal-textarea {
          resize: none;
          min-height: 80px;
        }
        .lead-modal-submit {
          width: 100%;
          padding: 16px;
          background: #2563eb;
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          margin-top: 4px;
        }
        .lead-modal-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        .lead-modal-submit:active {
          background: #1d4ed8;
        }
        .lead-modal-success,
        .lead-modal-error {
          margin-top: 16px;
          padding: 14px;
          border-radius: 10px;
          font-size: 14px;
          text-align: center;
        }
        .lead-modal-success {
          background: #dcfce7;
          color: #166534;
        }
        .lead-modal-error {
          background: #fee2e2;
          color: #991b1b;
        }
      `}</style>
    </div>
  );

  return createPortal(modal, document.body);
};

export default LeadFormModal;
