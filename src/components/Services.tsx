import React, { useState } from 'react';
import { Droplets, Hammer, Shield, Wrench } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: Droplets,
      title: 'Гидроизоляция фундамента',
      description: 'Комплексная защита фундамента от грунтовых вод и влаги с использованием современных материалов.',
      features: ['Битумные мастики', 'Рулонные материалы', 'Проникающая изоляция', 'гарантия 7 лет'],
      image: 'https://avatars.mds.yandex.net/get-ydo/14411439/2a00000195f6e746e89d76d5f8a212af0812/diploma'
    },
    {
      icon: Hammer,
      title: 'Инъектирование трещин',
      description: 'Устранение трещин в бетоне методом инъектирования специальных составов под давлением.',
      features: ['Полиуретановые смолы', 'Эпоксидные составы', 'Микроцементы', 'Точечная диагностика'],
      image: 'https://nbuilder.ru/wp-content/uploads/inektirovaniye-1284x535.jpg'
    },
    {
      icon: Shield,
      title: 'Гидрофобизация',
      description: 'Обработка поверхностей водоотталкивающими составами для защиты от атмосферных воздействий.',
      features: ['Силиконовые пропитки', 'Акриловые составы', 'Органосиликаты', 'Долгосрочная защита'],
      image: 'https://i.pinimg.com/originals/5a/4b/99/5a4b992532ca7919629bbcd4f70f1244.png'
    },
    {
      icon: Wrench,
      title: 'Ремонт кровли',
      description: 'Профессиональный ремонт и гидроизоляция кровельных покрытий любой сложности.',
      features: ['Мембранная кровля', 'Рулонные покрытия', 'Мастичная изоляция', 'Аварийный ремонт'],
      image: 'https://dom.mosreg.ru/sites/default/files/pictures/news_img/23754_51df10688a890a67f3cd822d608e0f918bd5aebb.jpg'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Наши <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Услуги</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр услуг по гидроизоляции и защите строительных конструкций
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl cursor-pointer transition-all transform ${
                  activeService === index
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-2xl scale-105'
                    : 'bg-white text-gray-800 hover:shadow-lg hover:scale-102 shadow-md'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    activeService === index 
                      ? 'bg-white/20' 
                      : 'bg-gradient-to-r from-blue-600 to-blue-700'
                  }`}>
                    <service.icon className={`w-6 h-6 ${
                      activeService === index ? 'text-white' : 'text-white'
                    }`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className={`text-sm leading-relaxed ${
                      activeService === index ? 'text-blue-100' : 'text-gray-600'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Detail */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="h-64 overflow-hidden">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover transition-transform hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {services[activeService].title}
              </h3>
              <p className="text-gray-600 mb-6">
                {services[activeService].description}
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Используемые материалы:</h4>
                {services[activeService].features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105"
              >
                Узнать стоимость
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;