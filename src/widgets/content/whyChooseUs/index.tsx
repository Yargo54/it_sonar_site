export const WhyChooseUs: React.FC = () => {
  return (
    <div
      id='why-choose-us'
      className='space-y-12 scroll-mt-[3rem] pt-[3rem] -mt-[3rem] bg-gray-800 bg-opacity-80 text-white py-16 mb-24'
    >
      <div className='space-y-6'>
        <h2 className='text-4xl font-semibold'>Почему стоит выбрать нас?</h2>
        <p className='text-xl max-w-2xl mx-auto'>
          Наша команда обеспечивает безопасную разработку с использованием открытых технологий для
          создания надежных решений.
        </p>
      </div>

      <div className='max-w-6xl mx-auto space-y-8 text-white text-left pb-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='p-6 space-y-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow'>
            <div className='flex items-start space-x-4'>
              <img
                src='./secure_development_icon.svg'
                alt='иконка "Безопасная разработка"'
                className='size-8 mt-1'
              />
              <div className='space-y-2'>
                <p className='text-xl font-semibold'>Безопасная разработка</p>
                <p className='text-lg'>
                  Применяем строгие протоколы безопасности на всех этапах разработки для защиты
                  ваших данных.
                </p>
              </div>
            </div>
          </div>

          <div className='p-6 space-y-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow'>
            <div className='flex items-start space-x-4'>
              <img
                src='./experienced_team_icon.svg'
                alt="иконка 'Опытная команда'"
                className='size-8 mt-1'
              />
              <div className='space-y-2'>
                <p className='text-xl font-semibold'>Опытная команда</p>
                <p className='text-lg'>
                  Наши высококвалифицированные специалисты обладают многолетним опытом в создании
                  качественных IT-решений
                </p>
              </div>
            </div>
          </div>

          <div className='p-6 space-y-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow'>
            <div className='flex items-start space-x-4'>
              <img
                src='./open-source_tools_icon.svg'
                alt="иконка 'open-source инструменты'"
                className='size-8 mt-1'
              />
              <div className='space-y-2'>
                <p className='text-xl font-semibold'>Open-source инструменты</p>
                <p className='text-lg'>
                  Используем проверенные и надёжные open-source технологии для разработки ваших
                  проектов.
                </p>
              </div>
            </div>
          </div>

          <div className='p-6 space-y-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow'>
            <div className='flex items-start space-x-4'>
              <img
                src='./business_process_automation_icon.svg'
                alt="иконка 'Автоматизация бизнес-процессов'"
                className='size-8 mt-1'
              />
              <div className='space-y-2'>
                <p className='text-xl font-semibold'>Реализация проектов «под ключ»</p>
                <p className='text-lg'>
                  Уточнение требований, проектирование, разработка, тестирование, внедрение,
                  документирование по ГОСТ
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
