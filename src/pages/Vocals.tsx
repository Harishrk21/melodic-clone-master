import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import InstrumentHero from "@/components/InstrumentHero";
import HowItWorks from "@/components/HowItWorks";
import InstrumentAdvantages from "@/components/InstrumentAdvantages";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-music-learning.png";

const Vocals = () => {
  return (
    <>
      <Helmet>
        <title>Online Vocal Classes - Live 1-to-1 Singing Lessons | MusicMaster</title>
        <meta
          name="description"
          content="Looking for best online Vocal classes near you? Learn singing for all age groups from the comfort of your home with the best qualified Vocal teachers."
        />
        <meta name="keywords" content="vocal classes, online singing lessons, learn singing, vocal teacher, singing courses" />
        <link rel="canonical" href="https://yourdomain.com/vocals" />
      </Helmet>

      <Navigation />
      <main>
        <InstrumentHero
          instrument="Vocals"
          description="Looking for best online Vocal classes near you? Learn singing for all age groups from the comfort of your home with the best qualified Vocal teachers."
          imageSrc={heroImage}
        />
        <HowItWorks instrument="Vocals" />
        <InstrumentAdvantages instrument="Vocals" />
      </main>
      <Footer />
    </>
  );
};

export default Vocals;
