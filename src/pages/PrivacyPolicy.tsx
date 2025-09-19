import React from 'react';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
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
              Политика конфиденциальности
            </h1>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              Дата последнего обновления: 15 января 2025 года
            </p>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Общие положения</h2>
              <p>
                Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки 
                персональных данных пользователей сайта ИП «Гидро МАКС СервиС» (далее — «Компания», «мы»).
              </p>
              <p>
                Используя наш сайт и предоставляя свои персональные данные, вы соглашаетесь с условиями 
                данной Политики конфиденциальности.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Какие данные мы собираем</h2>
              <p>Мы можем собирать следующие категории персональных данных:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Имя и фамилия</li>
                <li>Номер телефона</li>
                <li>Адрес электронной почты</li>
                <li>Информация о компании (для юридических лиц)</li>
                <li>Техническая информация (IP-адрес, тип браузера, операционная система)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Цели обработки данных</h2>
              <p>Мы используем ваши персональные данные для:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Связи с вами по вопросам оказания услуг</li>
                <li>Предоставления консультаций</li>
                <li>Выполнения договорных обязательств</li>
                <li>Улучшения качества наших услуг</li>
                <li>Соблюдения требований законодательства</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Правовые основания обработки</h2>
              <p>Обработка персональных данных осуществляется на основании:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Согласия субъекта персональных данных</li>
                <li>Необходимости исполнения договора</li>
                <li>Законных интересов оператора</li>
                <li>Требований законодательства РФ</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Передача данных третьим лицам</h2>
              <p>
                Мы не передаем ваши персональные данные третьим лицам, за исключением случаев, 
                предусмотренных законодательством РФ или с вашего явного согласия.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Защита персональных данных</h2>
              <p>
                Мы принимаем необходимые технические и организационные меры для защиты ваших 
                персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Ваши права</h2>
              <p>Вы имеете право:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Получать информацию об обработке ваших персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения данных</li>
                <li>Отзывать согласие на обработку персональных данных</li>
                <li>Обращаться в уполномоченный орган по защите прав субъектов персональных данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Контактная информация</h2>
              <p>По вопросам обработки персональных данных обращайтесь:</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>ИП «Гидро МАКС СервиС»</strong></p>
                <p>Адрес: г. Самара, г. Самара, ул. 3 я просека, 64</p>
                <p>Телефон: 8 (937) 999-23-36</p>
                <p>Email: gidromaxservice@yandex.ru</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Изменения в Политике</h2>
              <p>
                Мы оставляем за собой право вносить изменения в данную Политику конфиденциальности. 
                Актуальная версия всегда доступна на нашем сайте.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;