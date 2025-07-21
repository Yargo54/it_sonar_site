import { AboutUs } from '../widgets/content/aboutUs';
import { Services } from '../widgets/content/services';
import { Team } from '../widgets/content/team';
import { Tools } from '../widgets/content/tools';
import { WhyChooseUs } from '../widgets/content/whyChooseUs';
import { Footer } from '../widgets/footer/Footer';
import { Header } from '../widgets/header';
import { CookieConsent } from '../widgets/сookieConsent/CookieConsent';

export const MainPage: React.FC = () => {
  return (
    <div className='w-full'>
      <Header />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Tools />
      <Team />
      <Footer />
      <CookieConsent />
    </div>
  );
};
