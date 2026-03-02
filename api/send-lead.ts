import type { VercelRequest, VercelResponse } from '@vercel/node';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

interface LeadData {
  name: string;
  contact: string;
  message?: string;
  source?: string;
  email?: string;
  company?: string;
  budget?: string;
  formType: 'modal' | 'contact';
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Разрешаем только POST-запросы
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Проверяем наличие необходимых переменных окружения
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const data: LeadData = req.body;

    // Валидация обязательных полей
    if (!data.name || !data.contact) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Формируем текст сообщения в зависимости от типа формы
    let text: string;

    if (data.formType === 'contact') {
      text = `🔔 Новая заявка с формы "Расскажите о вашем проекте"

👤 Имя: ${data.name}
📧 Email: ${data.contact}
🏢 Компания: ${data.company || 'Не указана'}
💰 Бюджет: ${data.budget || 'Не указан'}
📝 Сообщение: ${data.message || 'Не указано'}`;
    } else {
      text = `🔔 Новая заявка с сайта

📍 Источник: ${data.source || 'Кнопка'}
👤 Имя: ${data.name}
📞 Контакт: ${data.contact}
📝 Комментарий: ${data.message || 'Не указан'}`;
    }

    // Отправляем в Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error('Telegram API error:', errorData);
      return res.status(500).json({ error: 'Failed to send message' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error processing lead:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
