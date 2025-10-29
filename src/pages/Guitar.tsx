import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import InstrumentHero from "@/components/InstrumentHero";
import HowItWorks from "@/components/HowItWorks";
import InstrumentAdvantages from "@/components/InstrumentAdvantages";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-music-learning.png";

const Guitar = () => {
  return (
    <>
      <Helmet>
        <title>Online Guitar Classes - Live 1-to-1 Guitar Lessons | MusicMaster</title>
        <meta
          name="description"
          content="Looking for best online Guitar classes near you? Learn to play Guitar for all age groups from the comfort of your home with the best qualified Guitar teachers."
        />
        <meta name="keywords" content="guitar classes, online guitar lessons, learn guitar, guitar teacher, guitar courses" />
        <link rel="canonical" href="https://yourdomain.com/guitar" />
      </Helmet>

      <Navigation />
      <main>
        <InstrumentHero
          instrument="Guitar"
          description="Looking for best online Guitar classes near you? Learn to play Guitar for all age groups from the comfort of your home with the best qualified Guitar teachers."
          imageSrc={heroImage}
        />
        <HowItWorks instrument="Guitar" />
        <InstrumentAdvantages instrument="Guitar" />
      </main>
      <Footer />
    </>
  );
};

export default Guitar;
