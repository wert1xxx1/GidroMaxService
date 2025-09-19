import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Logo from './Logo';
import { scrollToSection } from '../utils/scrollToSection';
import { requestCallback } from '../services/api';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [callbackPhone, setCallbackPhone] = useState('');
  const [isSubmittingCallback, setIsSubmittingCallback] = useState(false);
  const [callbackMessage, setCallbackMessage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallbackRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingCallback(true);
    setCallbackMessage('');
    
    try {
      await requestCallback({ phone: callbackPhone });
      setCallbackMessage('Заявка отправлена! Мы перезвоним в ближайшее время.');
      setCallbackPhone('');
      setTimeout(() => {
        setShowCallbackModal(false);
        setCallbackMessage('');
      }, 2000);
    } catch (error) {
      setCallbackMessage('Ошибка отправки. Попробуйте позвонить напрямую.');
    } finally {
      setIsSubmittingCallback(false);
    }
  };

  const menuItems = [
    { label: 'Услуги', href: '#services' },
    { label: 'Процесс', href: '#process' },
    { label: 'Преимущества', href: '#advantages' },
    { label: 'О компании', href: '#about' },
    { label: 'Отзывы', href: '#reviews' },
    { label: 'Контакты', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Logo className="w-12 h-12" />
            <div>
              <h1 className={`text-2xl font-bold transition-colors ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Гидро МАКС СервиС
              </h1>
              <p className={`text-sm transition-colors ${
                isScrolled ? 'text-gray-600' : 'text-blue-100'
              }`}>
                Профессиональная гидроизоляция
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className={`text-right transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}>
              <p className="text-sm font-medium">8 (937) 999-23-36</p>
              <p className="text-xs opacity-75">Ежедневно 8:30-17:30</p>
            </div>
            <button 
              onClick={() => setShowCallbackModal(true)}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Заказать звонок
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white/95 backdrop-blur-md rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 font-medium px-4 py-2 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-4 py-2 border-t border-gray-200 mt-4">
                <p className="text-gray-700 font-medium">8 (937) 999-23-36</p>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    setShowCallbackModal(true);
                  }}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg font-semibold mt-2"
                >
                  Заказать звонок
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* Callback Modal */}
      {showCallbackModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Заказать обратный звонок</h3>
            <p className="text-gray-600 mb-6">Оставьте номер телефона и мы перезвоним в течение 15 минут</p>
            
            <form onSubmit={handleCallbackRequest}>
              <input
                type="tel"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all mb-4"
                placeholder="+7 (___) ___-__-__"
                value={callbackPhone}
                onChange={(e) => setCallbackPhone(e.target.value)}
              />
              
              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isSubmittingCallback}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all disabled:opacity-50"
                >
                  {isSubmittingCallback ? 'Отправляем...' : 'Заказать звонок'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCallbackModal(false);
                    setCallbackMessage('');
                    setCallbackPhone('');
                  }}
                  className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-all"
                >
                  Отмена
                </button>
              </div>
            </form>
            
            {callbackMessage && (
              <div className={`mt-4 p-3 rounded-lg text-sm text-center ${
                callbackMessage.includes('Ошибка') 
                  ? 'bg-red-100 text-red-700' 
                  : 'bg-green-100 text-green-700'
              }`}>
                {callbackMessage}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;