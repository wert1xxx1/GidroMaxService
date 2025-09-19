const express = require('express');
const cors = require('cors');
const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Telegram Bot
const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });

// Форматирование сообщения для Telegram
const formatTelegramMessage = (data) => {
  let message = '🔔 *Новая заявка с сайта Гидро МАКС СервиС*\n\n';
  
  if (data.name) message += `👤 *Имя:* ${data.name}\n`;
  if (data.phone) message += `📞 *Телефон:* ${data.phone}\n`;
  if (data.email) message += `📧 *Email:* ${data.email}\n`;
  if (data.message) message += `💬 *Сообщение:* ${data.message}\n`;
  if (data.service) message += `🔧 *Услуга:* ${data.service}\n`;
  
  message += `\n⏰ *Время:* ${new Date().toLocaleString('ru-RU')}`;
  
  return message;
};

// Endpoint для отправки заявок
app.post('/api/send-form', async (req, res) => {
  try {
    const { name, phone, email, message, service } = req.body;
    
    // Валидация обязательных полей
    if (!name || !phone) {
      return res.status(400).json({ 
        success: false, 
        error: 'Имя и телефон обязательны для заполнения' 
      });
    }
    
    const telegramMessage = formatTelegramMessage({
      name, phone, email, message, service
    });
    
    // Отправка в Telegram
    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, telegramMessage, {
      parse_mode: 'Markdown'
    });
    
    res.json({ 
      success: true, 
      message: 'Заявка успешно отправлена!' 
    });
    
  } catch (error) {
    console.error('Ошибка отправки в Telegram:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Ошибка отправки заявки. Попробуйте позже.' 
    });
  }
});

// Endpoint для быстрых звонков
app.post('/api/callback', async (req, res) => {
  try {
    const { phone, name } = req.body;
    
    if (!phone) {
      return res.status(400).json({ 
        success: false, 
        error: 'Номер телефона обязателен' 
      });
    }
    
    const message = `🔔 *Заказ обратного звонка*\n\n📞 *Телефон:* ${phone}${name ? `\n👤 *Имя:* ${name}` : ''}\n\n⏰ *Время:* ${new Date().toLocaleString('ru-RU')}`;
    
    await bot.sendMessage(process.env.TELEGRAM_CHAT_ID, message, {
      parse_mode: 'Markdown'
    });
    
    res.json({ 
      success: true, 
      message: 'Заявка на обратный звонок отправлена!' 
    });
    
  } catch (error) {
    console.error('Ошибка отправки заявки на звонок:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Ошибка отправки заявки. Попробуйте позже.' 
    });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});