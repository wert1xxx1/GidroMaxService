import React from 'react';
import { Target, Eye, Users } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            О <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">компании</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://avatars.mds.yandex.net/get-altay/13461681/2a00000192bcfb8bbaddc26b53982871415e/XXXL"
                alt="Строительные работы"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-r from-orange-500 to-orange-600 p-6 rounded-2xl text-white shadow-xl">
              <div className="text-3xl font-bold">24+</div>
              <div className="text-sm">лет на рынке</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Гидроизоляция от ИП "Гидро МАКС СервиС" - надежного партнера в сфере услуг
            </h3>
            
            <div className="space-y-6 mb-8 text-gray-600 leading-relaxed">
              <p>
                Компания <strong>ИП "Гидро МАКС СервиС"</strong> является одним из успешных и надежных поставщиков 
                уникальных специализированных материалов. Мы занимаемся их продажей и осуществляем 
                полный спектр работ по гидроизоляции, защиты от коррозии и теплоизоляции объектов.
              </p>
              
              <p>
                Наши клиенты это крупные строительные компании, застройщики, ремонтные бригады и 
                частные отделочники. Наша компания располагает теплым, охраняемым складом. Мы 
                являемся дилерами известных брендов в Поволжье, поэтому можем предоставить выгодные 
                условия и цены на все материалы.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: Target,
                  title: 'Миссия',
                  description: 'Обеспечить качественную защиту зданий'
                },
                {
                  icon: Eye,
                  title: 'Видение',
                  description: 'Быть лидером в сфере гидроизоляции'
                },
                {
                  icon: Users,
                  title: 'Ценности',
                  description: 'Качество, надежность, профессионализм'
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all transform hover:scale-105 shadow-lg"
            >
              Узнать больше
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;