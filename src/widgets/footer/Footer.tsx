export const Footer: React.FC = () => {
  const handleScrollToTop = () => {
    const element = document.getElementById('about-us');
    if (element) {
      const yOffset = -72;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div id='contacts' className='bg-white shadow-md py-6'>
      <div className='w-full'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col md:flex-row py-4 gap-6'>
            <div className='md:w-1/4 text-left'>
              <p className='text-lg font-semibold mb-1'>IT Сонар</p>
              <p className='text-sm text-gray-600'>Ваш навигатор в мире цифровых решений</p>
              <a
                href='./politika-obrabotki-pdn.docx'
                target='_blank'
                rel='noopener noreferrer'
                className='text-xs text-blue-600 hover:underline mt-2 block'
              >
                Политика обработки персональных данных
              </a>
              <p className='text-xs text-gray-500 mt-2'>© 2024</p>
            </div>
            <div className='md:w-1/3 text-left'>
              <p className='text-lg font-semibold mb-1'>Реквизиты</p>
              <div className='text-sm text-gray-600 space-y-0.5'>
                <p>Общество с ограниченной ответственностью "СИСТРИМ"</p>
                <p>ОГРН: 1187746032462</p>
                <p>ИНН: 7724428080</p>
              </div>
            </div>
            <div className='md:w-1/4 text-left'>
              <p className='text-lg font-semibold mb-1'>Контакты</p>
              <div className='text-sm text-gray-600 space-y-0.5'>
                <p>Email: achuv@yandex.ru</p>
              </div>
            </div>
            <div className='md:w-1/4 flex items-center justify-center md:justify-end'>
              <button
                onClick={handleScrollToTop}
                className='p-2 bg-gray-100 rounded-full hover:bg-gray-200'
                aria-label='Наверх'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 10l7-7m0 0l7 7m-7-7v18'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
