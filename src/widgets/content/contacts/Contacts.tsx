export const Contacts: React.FC = () => {
  return (
    <div id='contacts' className='space-y-12 scroll-mt-[3rem] pt-[3rem] -mt-[3rem] py-8 mb-12'>
      <div className='space-y-6 text-center'>
        <h2 className='text-4xl font-semibold'>Контакты</h2>
        <p className='text-xl max-w-2xl mx-auto'>
          Мы всегда на связи и готовы обсудить ваш проект. Свяжитесь с нами удобным способом.
        </p>
      </div>
      <div className='flex justify-center pt-6'>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-12 text-center'>
          <div>
            <p className='text-lg'>Общество с ограниченной ответственностью "СИСТРИМ"</p>
            <p className='text-lg'>ОГРН: 1187746032462</p>
            <p className='text-lg'>ИНН: 7724428080</p>
            <p className='text-lg'>Email: achuv@yandex.ru</p>
          </div>
        </div>
      </div>
    </div>
  );
};
