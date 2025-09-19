import React from 'react';
import { Phone, Search, FileText, Wrench, CheckCircle } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { scrollToSection } from '../utils/scrollToSection';

const Process = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  const steps = [
    {
      icon: Phone,
      title: 'Консультация',
      description: 'Наши специалисты проконсультируют вас по стоимости работ для объекта любой сложности',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'Осмотр объекта',
      description: 'Удобно для вас время сотрудник "Гидро МАКС СервиС" посетит объект для оценки технического состояния',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: FileText,
      title: 'Составление сметы',
      description: 'Мы составляем и согласуем смету, подписываем договор',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Wrench,
      title: 'Выполнение работ',
      description: 'Бригада специалистов "Гидро МАКС СервиС" оперативно осуществит работы на объекте',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: CheckCircle,
      title: 'Гарантия',
      description: 'На выполненные работы обеспечивается гарантия 7 лет',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="process" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Как мы <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">работаем</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Прозрачный и понятный процесс работы от первого звонка до гарантийного обслуживания
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-200 via-purple-200 via-green-200 via-orange-200 to-red-200 transform -translate-x-1/2 transition-all duration-2000 ${
            hasIntersected ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'
          }`} style={{ transformOrigin: 'top' }}></div>

          <div className="space-y-12 lg:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center lg:items-start gap-8 transition-all duration-1000 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } ${
                  hasIntersected ? 'opacity-100 translate-x-0' : `opacity-0 ${
                    index % 2 === 0 ? 'translate-x-10' : '-translate-x-10'
                  }`
                }`}
                style={{ transitionDelay: `${index * 300 + 400}ms` }}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} text-center lg:text-left`}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold mb-4 text-white bg-gradient-to-r ${step.color}`}>
                      Этап {index + 1}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg transform hover:scale-110 transition-all z-10 relative ${
                    hasIntersected ? 'animate-pulse' : ''
                  }`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Timeline Dot */}
                  <div className="hidden lg:block absolute top-1/2 left-1/2 w-4 h-4 bg-white border-4 border-gray-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
                </div>

                {/* Spacer */}
                <div className="flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Готовы начать?</h3>
            <p className="text-gray-600 mb-6">Свяжитесь с нами для получения бесплатной консультации</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
              >
                8 (937) 999-23-36
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-orange-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Заказать обратный звонок
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;