export const AboutUs: React.FC = () => {
  return (
    <div className='w-full relative' style={{ marginTop: '72px' }}>
      <div className='absolute inset-0 z-0 w-full h-full overflow-hidden'>
        <div
          className='absolute inset-0 w-full h-full bg-cover bg-center'
          style={{ backgroundImage: "url('/about_us_back.png')" }}
        ></div>
        <div className='absolute inset-0 bg-gray-800 bg-opacity-80 w-full h-full'></div>
      </div>

      <section
        id='about-us'
        className='relative grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-4rem)] mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 z-10'
      >
        <div className='flex flex-col justify-center p-6 md:p-12 w-full'>
          <div className='max-w-2xl mx-auto space-y-6'>
            <h1 className='font-bold text-3xl md:text-4xl tracking-tight text-white text-left'>
              О нас
            </h1>
            <p className='text-lg text-white text-left'>
              Наша команда профессионалов с многолетним опытом создаёт программное обеспечение под
              заказ, используя open-source инструменты. Мы обеспечиваем безопасную разработку и
              автоматизацию бизнес-процессов.
            </p>
          </div>
        </div>

        <div className='flex items-center justify-center p-6 md:p-8'>
          <img src='/about_us_photo.jpg' alt="Фото 'О нас'" />
        </div>
      </section>
    </div>
  );
};
