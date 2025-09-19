import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Logo className="w-12 h-12" />
              <div>
                <h3 className="text-xl font-bold">Гидро МАКС СервиС</h3>
                <p className="text-sm text-gray-400">Профессиональная гидроизоляция</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Надежный партнер в сфере гидроизоляции с 24-летним опытом работы. 
              Качество, проверенное временем.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Гидроизоляция фундамента</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Инъектирование трещин</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Гидрофобизация</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ремонт кровли</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Герметизация</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">О компании</a></li>
              <li><a href="#advantages" className="hover:text-white transition-colors">Преимущества</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Как мы работаем</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Отзывы</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Контакты</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 mt-1 text-blue-400" />
                <div>
                  <p>8 (937) 999-23-36</p>
                  <p>+7 (937) 999-23-36</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <p>gidromaxservice@yandex.ru</p>
              </div>
              
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-blue-400" />
                <div>
                  <p>г. Самара,</p>
                  <p>г. Самара, ул. 3 я просека, 64</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1 text-blue-400" />
                <div>
                  <p>Ежедневно</p>
                  <p>с 8:30 до 17:30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 ИП "Гидро МАКС СервиС". Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="/user-agreement" className="text-sm text-gray-400 hover:text-white transition-colors">
                Пользовательское соглашение
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;