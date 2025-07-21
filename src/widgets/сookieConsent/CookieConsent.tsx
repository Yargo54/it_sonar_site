import { useState, useEffect } from 'react';

export const CookieConsent: React.FC<{ contentLoaded: boolean }> = ({ contentLoaded }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [renderCookieConsent, setRenderCookieConsent] = useState(true);

  useEffect(() => {
    if (contentLoaded) {
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, [contentLoaded]);

  const handleAccept = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 1000);
  };

  useEffect(() => {
    if (isClosing) {
      setTimeout(() => setRenderCookieConsent(false), 500);
    }
  }, [isClosing]);

  if (!renderCookieConsent) return null;

  return (
    <div
      className={`
      fixed bottom-4 left-4 right-4 md:right-auto md:w-1/2 lg:w-1/3
      bg-white p-4 rounded-lg shadow-lg border border-gray-200 z-50
      transition-all duration-300 ease-out
      transform
      ${isVisible && !isClosing ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
    `}
    >
      <div className='flex flex-col space-y-3 text-left'>
        <p className='text-sm text-gray-700'>
          Сайт использует файлы cookies. Продолжая использование настоящего сайта, вы выражаете своё
          согласие на использование файлов cookies в соответствии с{' '}
          <a
            href='./politika-obrabotki-pdn.docx'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:underline'
          >
            Политикой обработки персональных данных
          </a>
          . В случае несогласия с обработкой ваших персональных данных вы можете отключить
          сохранение cookie в параметрах настройки вашего браузера.
        </p>
        <div className='flex justify-start'>
          <button
            onClick={handleAccept}
            className='px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors'
          >
            Хорошо
          </button>
        </div>
      </div>
    </div>
  );
};
