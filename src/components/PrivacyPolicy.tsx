import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Shield, User, Lock, FileText } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import Footer from './Footer';

const PrivacyPolicy: React.FC = () => {
  const location = useLocation();

  // Автоматический скролл вверх при загрузке страницы
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [location.pathname]);

  useEffect(() => {
    // Прокрутка к началу страницы при загрузке
    window.scrollTo(0, 0);
    
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Назад на главную</span>
            </Link>
            <div className="flex items-center gap-3">
              <div className="bg-gray-900 p-2 rounded-lg flex items-center justify-center">
                <img src="/_logo_thedeed.png" alt="thedeed" className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">the<span className="text-blue-600">deed</span></span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4">
                <Shield className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Политика в отношении обработки персональных данных
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Мы серьезно относимся к защите ваших персональных данных и соблюдаем все требования российского законодательства
            </p>
          </div>
        </div>
      </div>

      {/* Policy Content */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Section 1 */}
            <section className="mb-12" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FileText className="h-6 w-6 text-blue-600 mr-3" />
                  1. Общие положения
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4">
                  <p>
                    Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006. №152-ФЗ «О персональных данных» (далее - Закон о персональных данных) и определяет порядок обработки персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые <strong>ИП Фырфа Дмитрий Игоревич</strong> (далее – Оператор).
                  </p>
                  <p>
                    <strong>1.1.</strong> Оператор ставит своей важнейшей целью и условием осуществления своей деятельности соблюдение прав и свобод человека и гражданина при обработке его персональных данных, в том числе защиты прав на неприкосновенность частной жизни, личную и семейную тайну.
                  </p>
                  <p>
                    <strong>1.2.</strong> Настоящая политика Оператора в отношении обработки персональных данных (далее – Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта <a href="https://thedeed.ru" className="text-blue-600 hover:text-blue-700">https://thedeed.ru</a>.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section className="mb-12" data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <User className="h-6 w-6 text-blue-600 mr-3" />
                  2. Основные понятия, используемые в Политике
                </h2>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    {
                      term: "2.1. Автоматизированная обработка персональных данных",
                      definition: "обработка персональных данных с помощью средств вычислительной техники."
                    },
                    {
                      term: "2.2. Блокирование персональных данных",
                      definition: "временное прекращение обработки персональных данных (за исключением случаев, если обработка необходима для уточнения персональных данных)."
                    },
                    {
                      term: "2.3. Веб-сайт",
                      definition: "совокупность графических и информационных материалов, а также программ для ЭВМ и баз данных, обеспечивающих их доступность в сети интернет по сетевому адресу https://thedeed.ru."
                    },
                    {
                      term: "2.4. Информационная система персональных данных",
                      definition: "совокупность содержащихся в базах данных персональных данных, и обеспечивающих их обработку информационных технологий и технических средств."
                    },
                    {
                      term: "2.5. Обезличивание персональных данных",
                      definition: "действия, в результате которых невозможно определить без использования дополнительной информации принадлежность персональных данных конкретному Пользователю или иному субъекту персональных данных."
                    },
                    {
                      term: "2.6. Обработка персональных данных",
                      definition: "любое действие (операция) или совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных."
                    },
                    {
                      term: "2.7. Оператор",
                      definition: "государственный орган, муниципальный орган, юридическое или физическое лицо, самостоятельно или совместно с другими лицами организующие и (или) осуществляющие обработку персональных данных, а также определяющие цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными."
                    },
                    {
                      term: "2.8. Персональные данные",
                      definition: "любая информация, относящаяся прямо или косвенно к определенному или определяемому Пользователю веб-сайта https://thedeed.ru."
                    },
                    {
                      term: "2.10. Пользователь",
                      definition: "любой посетитель веб-сайта https://thedeed.ru."
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2">{item.term}</h4>
                      <p className="text-gray-700">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section className="mb-12" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Lock className="h-6 w-6 text-blue-600 mr-3" />
                  3. Основные права и обязанности Оператора
                </h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">3.1. Оператор имеет право:</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        получать от субъекта персональных данных достоверные информацию и/или документы, содержащие персональные данные;
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        в случае отзыва субъектом персональных данных согласия на обработку персональных данных Оператор вправе продолжить обработку персональных данных без согласия субъекта персональных данных при наличии оснований, указанных в Законе о персональных данных;
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        самостоятельно определять состав и перечень мер, необходимых и достаточных для обеспечения выполнения обязанностей, предусмотренных Законом о персональных данных и принятыми в соответствии с ним нормативными правовыми актами, если иное не предусмотрено Законом о персональных данных или другими федеральными законами.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">3.2. Оператор обязан:</h3>
                    <ul className="space-y-2 text-green-800">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        предоставлять субъекту персональных данных по его просьбе информацию, касающуюся обработки его персональных данных;
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        организовывать обработку персональных данных в порядке, установленном действующим законодательством РФ;
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        отвечать на обращения и запросы субъектов персональных данных и их законных представителей в соответствии с требованиями Закона о персональных данных;
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        принимать правовые, организационные и технические меры для защиты персональных данных от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, предоставления, распространения персональных данных, а также от иных неправомерных действий в отношении персональных данных;
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        публиковать или иным образом обеспечивать неограниченный доступ к настоящей Политике в отношении обработки персональных данных.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className="mb-12" data-aos="fade-up" data-aos-delay="500">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Основные права и обязанности субъектов персональных данных</h2>
                <div className="space-y-6">
                  <div className="bg-indigo-50 rounded-lg p-6 border border-indigo-200">
                    <h3 className="text-xl font-semibold text-indigo-900 mb-4">4.1. Субъекты персональных данных имеют право:</h3>
                    <ul className="space-y-2 text-indigo-800">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        получать информацию, касающуюся обработки его персональных данных;
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        требовать от оператора уточнения его персональных данных, их блокирования или уничтожения;
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        на отзыв согласия на обработку персональных данных;
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        обжаловать в уполномоченный орган по защите прав субъектов персональных данных или в судебном порядке неправомерные действия или бездействие Оператора.
                      </li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
                    <h3 className="text-xl font-semibold text-orange-900 mb-4">4.2. Субъекты персональных данных обязаны:</h3>
                    <ul className="space-y-2 text-orange-800">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        предоставлять Оператору достоверные данные о себе;
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        сообщать Оператору об уточнении (обновлении, изменении) своих персональных данных.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section className="mb-12" data-aos="fade-up" data-aos-delay="600">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Персональные данные, которые может обрабатывать Оператор</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">Обрабатываемые данные:</h3>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Фамилия, имя, отчество
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Электронный адрес
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Номера телефонов
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                        Обезличенные данные (cookies)
                      </li>
                    </ul>
                  </div>
                  <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">Сервисы сбора данных:</h3>
                    <ul className="space-y-2 text-green-800">
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Яндекс.Метрика
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Google Analytics
                      </li>
                      <li className="flex items-center">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Другие сервисы аналитики
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">
                    <strong>Важно:</strong> Обработка специальных категорий персональных данных, касающихся расовой, национальной принадлежности, политических взглядов, религиозных или философских убеждений, интимной жизни, Оператором не осуществляется.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section className="mb-12" data-aos="fade-up" data-aos-delay="700">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Цели обработки персональных данных</h2>
                <div className="space-y-4">
                  <p className="text-gray-700"><strong>7.1. Цель обработки персональных данных Пользователя:</strong></p>
                  <ul className="space-y-3 text-gray-700 ml-6">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      информирование Пользователя посредством отправки электронных писем;
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      заключение, исполнение и прекращение гражданско-правовых договоров;
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      предоставление доступа Пользователю к сервисам, информации и/или материалам, содержащимся на веб-сайте https://thedeed.ru.
                    </li>
                  </ul>
                  <div className="bg-blue-50 rounded-lg p-6 border border-blue-200 mt-6">
                    <p className="text-blue-800">
                      <strong>7.2.</strong> Также Оператор имеет право направлять Пользователю уведомления о новых продуктах и услугах, специальных предложениях и различных событиях. Пользователь всегда может отказаться от получения информационных сообщений, направив Оператору письмо на адрес электронной почты <a href="mailto:hello@theded.ru" className="text-blue-600 hover:text-blue-700 underline">hello@theded.ru</a> с пометкой «Отказ от уведомлений о новых продуктах и услугах и специальных предложениях».
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section className="mb-12" data-aos="fade-up" data-aos-delay="800">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-2xl font-bold mb-4">Есть вопросы по обработке персональных данных?</h2>
                <p className="text-blue-100 mb-6 leading-relaxed">
                  Вы можете получить любые разъяснения по интересующим вопросам, касающимся обработки ваших персональных данных, обратившись к Оператору
                </p>
                <a 
                  href="mailto:hello@theded.ru"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold inline-flex items-center gap-2"
                >
                  <User className="h-5 w-5" />
                  Связаться с нами
                </a>
                <div className="mt-6 text-sm text-blue-200">
                  <p>Актуальная версия Политики доступна по адресу: <span className="font-mono">https://thedeed.ru/privacy</span></p>
                  <p className="mt-2">Дата последнего обновления: 3 января 2025 года</p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;