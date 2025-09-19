import React from 'react';
import { Star, Quote } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Reviews = () => {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  const reviews = [
    {
      name: 'Александр Петров',
      company: 'ИП "СтройИнвест"',
      rating: 5,
      text: 'Отличная работа! Гидроизоляция фундамента выполнена качественно и в срок. Рекомендую Гидро МАКС СервиС как надежного подрядчика.',
      date: '15 января 2025',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200'
    },
    {
      name: 'Мария Сидорова',
      company: 'Частный заказчик',
      rating: 5,
      text: 'Спасибо за профессиональную работу по устранению протечек в подвале. Все сделано аккуратно, с гарантией. Очень довольна результатом!',
      date: '8 января 2025',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200'
    },
    {
      name: 'Дмитрий Козлов',
      company: 'ЖК "Новый город"',
      rating: 5,
      text: 'Работали с Гидро МАКС СервиС по гидроизоляции паркинга. Все выполнено на высшем уровне, соблюдены все технологии. Будем сотрудничать дальше.',
      date: '22 декабря 2024',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200'
    },
    {
      name: 'Елена Волкова',
      company: 'Частный заказчик',
      rating: 5,
      text: 'Быстро приехали на осмотр, составили подробную смету, выполнили работы точно в срок. Качество отличное, цены адекватные.',
      date: '18 декабря 2024',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200'
    },
    {
      name: 'Сергей Морозов',
      company: 'ИП "ТехСтрой"',
      rating: 5,
      text: 'Профессиональный подход к делу. Гидроизоляция кровли выполнена с использованием качественных материалов. Рекомендую!',
      date: '10 декабря 2024',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200'
    },
    {
      name: 'Анна Кузнецова',
      company: 'Частный заказчик',
      rating: 5,
      text: 'Очень довольна работой специалистов Гидро МАКС СервиС. Инъектирование трещин выполнено качественно, проблема решена полностью.',
      date: '5 декабря 2024',
      avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Отзывы <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">клиентов</span>
          </h2>
          <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${
            hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Мнения наших клиентов о качестве выполненных работ
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100 relative transition-all duration-1000 ${
                hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="absolute top-6 right-6 text-blue-200">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.company}</p>
                  <div className="flex mt-2">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                "{review.text}"
              </p>
              
              <p className="text-sm text-gray-500">{review.date}</p>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
          hasIntersected ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Хотите оставить отзыв?</h3>
            <p className="text-gray-600 mb-6">Поделитесь своим опытом работы с нами</p>
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg">
              Написать отзыв
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;