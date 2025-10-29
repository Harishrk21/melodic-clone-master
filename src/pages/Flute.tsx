import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import InstrumentHero from "@/components/InstrumentHero";
import HowItWorks from "@/components/HowItWorks";
import InstrumentAdvantages from "@/components/InstrumentAdvantages";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-music-learning.png";

const Flute = () => {
  return (
    <>
      <Helmet>
        <title>Online Flute Classes - Live 1-to-1 Flute Lessons | MusicMaster</title>
        <meta
          name="description"
          content="Looking for best online Flute classes near you? Learn to play Flute for all age groups from the comfort of your home with the best qualified Flute teachers."
        />
        <meta name="keywords" content="flute classes, online flute lessons, learn flute, flute teacher, flute courses" />
        <link rel="canonical" href="https://yourdomain.com/flute" />
      </Helmet>

      <Navigation />
      <main>
        <InstrumentHero
          instrument="Flute"
          description="Looking for best online Flute classes near you? Learn to play Flute for all age groups from the comfort of your home with the best qualified Flute teachers."
          imageSrc={heroImage}
        />
        <HowItWorks instrument="Flute" />
        <InstrumentAdvantages instrument="Flute" />
      </main>
      <Footer />
    </>
  );
};

export default Flute;
