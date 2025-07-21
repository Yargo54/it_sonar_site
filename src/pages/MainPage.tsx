import { useState } from 'react';
import { AboutUs } from '../widgets/content/aboutUs';
import { Services } from '../widgets/content/services';
import { Team } from '../widgets/content/team';
import { Tools } from '../widgets/content/tools';
import { WhyChooseUs } from '../widgets/content/whyChooseUs';
import { Footer } from '../widgets/footer/Footer';
import { Header } from '../widgets/header';
import { CookieConsent } from '../widgets/сookieConsent/CookieConsent';

export const MainPage: React.FC = () => {
  const [contentLoaded, setContentLoaded] = useState(false);

  return (
    <div className='w-full'>
      <div
        className={`transition-opacity duration-500 ${contentLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <Header />
        <AboutUs onLoad={() => setContentLoaded(true)} />
      </div>
      <Services />
      <WhyChooseUs />
      <Tools />
      <Team />
      <Footer />
      <CookieConsent contentLoaded={contentLoaded} />
    </div>
  );
};

// return (
//   <div className='w-full'>
//     <Header />
//     <AboutUs />
//     <Services />
//     <WhyChooseUs />
//     <Tools />
//     <Team />
//     <Footer />
//     <CookieConsent />
//   </div>
// );
// };
