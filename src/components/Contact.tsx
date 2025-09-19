import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { sendForm, requestCallback } from '../services/api';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    
    try {
      await sendForm({
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        service: 'Заявка с формы обратной связи'
      });
      
      setSubmitMessage('Заявка отправлена! Мы свяжемся с вами в ближайшее время.');
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error) {
      setSubmitMessage('Ошибка отправки. Попробуйте позвонить нам напрямую.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      details: [
        '8 (987) 159-64-89',
        '8 (937) 999-23-36',
      ],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['gidromaxservice@yandex.ru'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      details: ['г. Самара,', 'ул. 3 я просека, 64'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Время работы',
      details: ['Ежедневно', 'с 8:30-17:30'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Остались вопросы? <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Свяжитесь с нами!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Наши специалисты готовы ответить на все ваши вопросы и предоставить профессиональную консультацию
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Контактная информация</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center mb-4`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{info.title}</h4>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8 rounded-2xl text-white">
              <h4 className="text-2xl font-bold mb-4">Нужна срочная консультация?</h4>
              <p className="text-blue-100 mb-6">
                Звоните прямо сейчас! Наши специалисты готовы ответить на все ваши вопросы
              </p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                <Phone className="inline-block w-5 h-5 mr-2" />
                8 (937) 999-23-36
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Оставьте заявку</h3>
            <p className="text-gray-600 mb-6">
              Заполните форму ниже, и мы свяжемся с вами в ближайшее время
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ваше имя *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Расскажите о вашем проекте..."
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5 mr-2" />
                {isSubmitting ? 'Отправляем...' : 'Отправить заявку'}
              </button>
            </form>
            
            {submitMessage && (
              <div className={`mt-4 p-3 rounded-lg text-sm text-center ${
                submitMessage.includes('Ошибка') 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-green-100 text-green-700'
              }`}>
                {submitMessage}
              </div>
            )}
            
            <p className="text-xs text-gray-500 mt-4 text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;