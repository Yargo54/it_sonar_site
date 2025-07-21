export const Services: React.FC = () => {
  return (
    <div id='services' className='scroll-mt-16 py-16 mb-24'>
      <div className='space-y-6 pb-12'>
        <h2 className='text-4xl font-semibold'>Услуги</h2>
        <p className='text-xl max-w-2xl mx-auto'>
          Мы предлагаем услуги по разработке ПО, автоматизации процессов и внедрению поисковых
          систем для оптимизации работы.
        </p>
      </div>

      <div className='max-w-2xl mx-auto space-y-8'>
        <div className='p-8 pl-4 text-left bg-gray-800 shadow-md bg-opacity-80 rounded-xl text-white'>
          <p className='text-xl pb-3 font-semibold'>
            Разработка программного обеспечения под заказ
          </p>
          <p className='text-lg'>
            Создаём индивидуальные программные решения, которые отвечают вашим требованиям и
            помогают достичь бизнес-целей.
          </p>
        </div>
        <div className='p-8 pl-4 text-left bg-gray-800 shadow-md bg-opacity-80 rounded-xl text-white'>
          <p className='text-xl pb-3 font-semibold'>Автоматизация бизнес-процессов</p>
          <p className='text-lg'>
            Оптимизируем ваши бизнес-процессы с помощью современных технологий, чтобы повысить
            эффективность и снизить затраты.
          </p>
        </div>
        <div className='p-8 pl-4 text-left bg-gray-800 shadow-md bg-opacity-80 rounded-xl text-white'>
          <p className='text-xl pb-3 font-semibold'>Внедрение поисковых инструментов</p>
          <p className='text-lg'>
            Предоставляем инструменты для поиска информации, которые помогут вам быстрее находить
            нужные данные и принимать обоснованные решения.
          </p>
        </div>
      </div>
    </div>
  );
};
