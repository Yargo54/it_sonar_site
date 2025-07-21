export const Team: React.FC = () => {
  return (
    <div
      id='team'
      className='space-y-12 scroll-mt-[3rem] pt-[3rem] -mt-[3rem] bg-gray-800 bg-opacity-80 text-white py-16'
    >
      <div className='space-y-6'>
        <h2 className='text-4xl font-semibold'>Команда</h2>
        <p className='text-xl max-w-2xl mx-auto'>
          Наш слаженный коллектив обеспечивает высокое качество решений для вашего бизнеса.
        </p>
      </div>

      <div className='max-w-6xl mx-auto space-y-8 text-white pb-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='p-6 space-y-4 border border-white rounded-xl hover:shadow-md transition-shadow backdrop-blur-sm'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <div className='space-y-2'>
                <p className='text-xl font-semibold'>Архитекторы и BI-аналитики</p>
                <p className='text-lg opacity-90'>
                  Проектируют эффективные системы и аналитические решения
                </p>
              </div>
            </div>
          </div>

          <div className='p-6 space-y-4 border border-white rounded-xl hover:shadow-md transition-shadow backdrop-blur-sm'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <div className='space-y-2'>
                <p className='text-xl font-semibold'>Фронтенд- и бэк-разработчики</p>
                <p className='text-lg opacity-90'>
                  Создают удобные интерфейсы и надежную бизнес-логику
                </p>
              </div>
            </div>
          </div>

          <div className='p-6 space-y-4 border border-white rounded-xl hover:shadow-md transition-shadow backdrop-blur-sm'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <div className='space-y-2'>
                <p className='text-xl font-semibold'>DevOps-специалисты</p>
                <p className='text-lg opacity-90'>Обеспечивают бесперебойную работу IT-сервисов</p>
              </div>
            </div>
          </div>

          <div className='p-6 space-y-4 border border-white rounded-xl hover:shadow-md transition-shadow backdrop-blur-sm'>
            <div className='flex flex-col items-center text-center space-y-4'>
              <div className='space-y-2'>
                <p className='text-xl font-semibold'>Тестировщики</p>
                <p className='text-lg opacity-90'>Гарантируют безупречное качество продукта</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
