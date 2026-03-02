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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Блокировка прокрутки body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [isOpen]);

  // Обработка Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
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

  if (!isOpen || !mounted) return null;
  
  const modalContent = (
    <div 
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        zIndex: 2147483647,
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '400px',
          maxHeight: 'calc(100vh - 32px)',
          overflowY: 'auto',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          padding: '24px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#f3f4f6',
            border: 'none',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '22px',
            color: '#6b7280',
            lineHeight: 1,
          }}
          aria-label="Закрыть"
        >
          ×
        </button>
        
        <h3 style={{
          fontSize: '22px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#111827',
          paddingRight: '40px',
        }}>
          Оставить заявку
        </h3>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <input 
            name="name" 
            value={form.name} 
            onChange={handleChange} 
            required 
            placeholder="Ваше имя" 
            style={{
              width: '100%',
              padding: '14px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '10px',
              fontSize: '16px',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <input 
            name="contact" 
            value={form.contact} 
            onChange={handleChange} 
            required 
            placeholder="Телефон или Email" 
            style={{
              width: '100%',
              padding: '14px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '10px',
              fontSize: '16px',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <textarea 
            name="message" 
            value={form.message} 
            onChange={handleChange} 
            rows={3}
            placeholder="Комментарий" 
            style={{
              width: '100%',
              padding: '14px 16px',
              border: '1px solid #d1d5db',
              borderRadius: '10px',
              fontSize: '16px',
              outline: 'none',
              resize: 'none',
              minHeight: '80px',
              boxSizing: 'border-box',
            }}
          />
          <button 
            type="submit" 
            disabled={loading}
            style={{
              width: '100%',
              padding: '16px',
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              marginTop: '4px',
            }}
          >
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
        
        {success && (
          <div style={{
            marginTop: '16px',
            padding: '14px',
            backgroundColor: '#dcfce7',
            borderRadius: '10px',
            color: '#166534',
            fontSize: '14px',
            textAlign: 'center',
          }}>
            ✓ Заявка отправлена!
          </div>
        )}
        
        {error && (
          <div style={{
            marginTop: '16px',
            padding: '14px',
            backgroundColor: '#fee2e2',
            borderRadius: '10px',
            color: '#991b1b',
            fontSize: '14px',
            textAlign: 'center',
          }}>
            ⚠ {error}
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default LeadFormModal;
