import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import OurCommunity from './components/OurCommunity';
import ReasonAptifyr from './components/ReasonAptifyr';
import LatestSession from './components/LatestSession';
import Community from './components/Community';
import OurTeam from './components/OurTeam';
import Faq from './components/Faq';
import Numbers from './components/Numbers';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Carousel from './components/CommunityReviews';

export default function Home() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <OurCommunity />
      <ReasonAptifyr />
      <LatestSession />
      <Community />
      <Carousel/>
      <OurTeam />
      <Faq />
      <Numbers />
      <ContactUs />
      <Footer />
      </>
  );
}