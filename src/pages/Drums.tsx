import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import InstrumentHero from "@/components/InstrumentHero";
import HowItWorks from "@/components/HowItWorks";
import InstrumentAdvantages from "@/components/InstrumentAdvantages";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-music-learning.png";

const Drums = () => {
  return (
    <>
      <Helmet>
        <title>Online Drum Classes - Live 1-to-1 Drum Lessons | MusicMaster</title>
        <meta
          name="description"
          content="Looking for best online Drum classes near you? Learn to play Drums for all age groups from the comfort of your home with the best qualified Drum teachers."
        />
        <meta name="keywords" content="drum classes, online drum lessons, learn drums, drum teacher, drum courses" />
        <link rel="canonical" href="https://yourdomain.com/drums" />
      </Helmet>

      <Navigation />
      <main>
        <InstrumentHero
          instrument="Drums"
          description="Looking for best online Drum classes near you? Learn to play Drums for all age groups from the comfort of your home with the best qualified Drum teachers."
          imageSrc={heroImage}
        />
        <HowItWorks instrument="Drums" />
        <InstrumentAdvantages instrument="Drums" />
      </main>
      <Footer />
    </>
  );
};

export default Drums;
