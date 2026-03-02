# TheDeed - Landing Page

Лендинг для IT-агентства TheDeed.

## Развёртывание на Vercel

### 1. Подготовка

1. Зарегистрируйтесь на [Vercel](https://vercel.com)
2. Подключите свой GitHub/GitLab/Bitbucket аккаунт

### 2. Настройка переменных окружения

В панели управления Vercel перейдите в **Settings → Environment Variables** и добавьте:

| Variable | Value | Description |
|----------|-------|-------------|
| `TELEGRAM_BOT_TOKEN` | `8133114774:AAH...` | Токен вашего Telegram-бота |
| `TELEGRAM_CHAT_ID` | `-4880414723` | ID чата для получения заявок |

### 3. Деплой

#### Вариант 1: Через Git
```bash
git init
git add .
git commit -m "Initial commit"
git push origin main
```
Затем импортируйте репозиторий в Vercel Dashboard.

#### Вариант 2: Через CLI
```bash
npm i -g vercel
vercel --prod
```

### 4. Получение TELEGRAM_CHAT_ID

1. Добавьте бота в группу или напишите ему лично
2. Отправьте тестовое сообщение
3. Перейдите по ссылке:
   ```
   https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/getUpdates
   ```
4. Найдите `"chat":{"id":-123456789` — это ваш CHAT_ID

## Структура проекта

```
├── api/                    # Serverless-функции
│   └── send-lead.ts       # Обработчик заявок
├── src/
│   ├── components/        # React-компоненты
│   ├── context/           # Контексты
│   ├── App.tsx
│   └── main.tsx
├── public/                # Статические файлы
├── dist/                  # Сборка (генерируется)
├── vercel.json            # Конфигурация Vercel
└── vite.config.ts         # Конфигурация Vite
```

## Локальная разработка

```bash
npm install
npm run dev
```

## Технологии

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Vercel Serverless Functions
