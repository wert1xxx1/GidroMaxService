import React, { useState, useEffect } from 'react';
import { Award, Clock, Users, Shield, Wrench, Star } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

const Advantages = () => {
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    guarantee: 0
  });

  const targetCounts = {
    experience: 24,
    projects: 400,
    clients: 300,
    guarantee: 5
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepTime = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounts({
        experience: Math.floor(targetCounts.experience * progress),
        projects: Math.floor(targetCounts.projects * progress),
        clients: Math.floor(targetCounts.clients * progress),
        guarantee: Math.floor(targetCounts.guarantee * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounts(targetCounts);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  const advantages = [
    {
      icon: Award,
      title: 'Выполнение работ в соответствии с ГОСТ, СНиП',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Shield,
      title: 'Допуск СРО',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Гарантия на выполненные работы - 7 лет',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Wrench,
      title: 'Чистота и порядок на объектах в процессе работы',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: Clock,
      title: 'Оперативный выезд на оценку объекта: 1-2 рабочих дня',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Star,
      title: 'Выезд по Самаре и ближайшим районам области - БЕСПЛАТНО',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const stats = [
    {
      number: counts.experience,
      suffix: '+',
      title: 'Лет опыта',
      subtitle: 'работы с 2015 года',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: counts.projects,
      suffix: '+',
      title: 'Проектов',
      subtitle: 'выполнено объектов',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: counts.clients,
      suffix: '+',
      title: 'Клиентов',
      subtitle: 'довольных заказчиков',
      color: 'from-green-500 to-green-600'
    },
    {
      number: counts.guarantee,
      suffix: '',
      title: 'Лет гарантии',
      subtitle: 'на все работы',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="advantages" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Преимущества <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Гидро МАКС СервиС</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Надежный партнер в сфере гидроизоляции с многолетним опытом и безупречной репутацией
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
                <div className={`text-4xl lg:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}{stat.suffix}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{stat.title}</h3>
                <p className="text-sm text-gray-600">{stat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${advantage.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <advantage.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{advantage.title}</h3>
              <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${advantage.color}`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Нужна консультация?</h3>
            <p className="text-gray-600 mb-6">Наши специалисты готовы ответить на все ваши вопросы</p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advantages;