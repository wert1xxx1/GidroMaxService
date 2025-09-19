import React from 'react';
import { ArrowLeft } from 'lucide-react';

const UserAgreement = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
          <div className="flex items-center mb-8">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center text-blue-600 hover:text-blue-700 transition-colors mr-4"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Назад
            </button>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Пользовательское соглашение
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              Дата последнего обновления: 15 января 2025 года
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Общие положения</h2>
              <p>
                Настоящее Пользовательское соглашение (далее — «Соглашение») регулирует отношения 
                между ИП «Гидро МАКС СервиС» (далее — «Компания») и пользователями сайта (далее — «Пользователь»).
              </p>
              <p>
                Использование сайта означает полное согласие с условиями данного Соглашения.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Предмет соглашения</h2>
              <p>
                Компания предоставляет Пользователю доступ к информации о услугах гидроизоляции 
                и возможность связаться с представителями Компании для получения консультаций 
                и заказа услуг.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Права и обязанности Пользователя</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Пользователь имеет право:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получать информацию об услугах Компании</li>
                <li>Обращаться за консультациями</li>
                <li>Заказывать услуги в соответствии с условиями договора</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Пользователь обязуется:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Предоставлять достоверную информацию</li>
                <li>Не использовать сайт в противоправных целях</li>
                <li>Соблюдать требования законодательства РФ</li>
                <li>Не нарушать права третьих лиц</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Права и обязанности Компании</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Компания имеет право:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Изменять содержание сайта без предварительного уведомления</li>
                <li>Ограничивать доступ к сайту при нарушении условий Соглашения</li>
                <li>Обрабатывать персональные данные в соответствии с Политикой конфиденциальности</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Компания обязуется:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Предоставлять актуальную информацию об услугах</li>
                <li>Обеспечивать конфиденциальность персональных данных</li>
                <li>Отвечать на обращения Пользователей в разумные сроки</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Ответственность сторон</h2>
              <p>
                Компания не несет ответственности за временную недоступность сайта, 
                связанную с техническими работами или иными объективными причинами.
              </p>
              <p>
                Пользователь несет полную ответственность за достоверность предоставляемой информации.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Интеллектуальная собственность</h2>
              <p>
                Все материалы сайта (тексты, изображения, дизайн) являются объектами интеллектуальной 
                собственности Компании и защищены законодательством РФ.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Заключительные положения</h2>
              <p>
                Настоящее Соглашение регулируется законодательством Российской Федерации. 
                Все споры разрешаются в соответствии с действующим законодательством РФ.
              </p>
              <p>
                Компания оставляет за собой право изменять условия данного Соглашения. 
                Актуальная версия всегда доступна на сайте.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Контактная информация</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>ИП «Гидро МАКС СервиС»</strong></p>
                <p>Адрес: г. Самара, г. Самара, ул. 3 я просека, 64</p>
                <p>Телефон: 8 (937) 999-23-36</p>
                <p>Email: gidromaxservice@yandex.ru</p>
                <p>Время работы: Ежедневно с 8:30 до 17:30</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAgreement;