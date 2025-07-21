export const Header: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-gray-800 shadow-md'>
      <div className='w-full'>
        <div className='container mx-auto px-6'>
          <div className='flex justify-between items-center py-4'>
            <div className='flex space-x-8'>
              <span
                className='text-lg font-semibold text-white cursor-pointer hover:text-gray-300 transition-colors'
                onClick={() => handleScrollTo('about-us')}
              >
                О нас
              </span>
              <span
                className='text-lg font-semibold text-white cursor-pointer hover:text-gray-300 transition-colors'
                onClick={() => handleScrollTo('services')}
              >
                Наши услуги
              </span>
              <span
                className='text-lg font-semibold text-white cursor-pointer hover:text-gray-300 transition-colors'
                onClick={() => handleScrollTo('why-choose-us')}
              >
                Почему мы
              </span>
            </div>

            <span className='text-4xl font-semibold text-white mx-8'>IT Сонар</span>

            <div className='flex space-x-8'>
              <span
                className='text-lg font-semibold text-white cursor-pointer hover:text-gray-300 transition-colors'
                onClick={() => handleScrollTo('tools')}
              >
                Инструменты
              </span>
              <span
                className='text-lg font-semibold text-white cursor-pointer hover:text-gray-300 transition-colors'
                onClick={() => handleScrollTo('team')}
              >
                Команда
              </span>
              <span
                className='text-lg font-semibold text-white cursor-pointer hover:text-gray-300 transition-colors'
                onClick={() => handleScrollTo('contacts')}
              >
                Контакты
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
