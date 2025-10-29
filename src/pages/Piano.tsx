import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import InstrumentHero from "@/components/InstrumentHero";
import HowItWorks from "@/components/HowItWorks";
import InstrumentAdvantages from "@/components/InstrumentAdvantages";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-music-learning.png";

const Piano = () => {
  return (
    <>
      <Helmet>
        <title>Online Piano Classes - Live 1-to-1 Piano Lessons | MusicMaster</title>
        <meta
          name="description"
          content="Looking for best online Piano classes near you? Learn to play Piano for all age groups from the comfort of your home with the best qualified Piano teachers."
        />
        <meta name="keywords" content="piano classes, online piano lessons, learn piano, piano teacher, piano courses" />
        <link rel="canonical" href="https://yourdomain.com/piano" />
      </Helmet>

      <Navigation />
      <main>
        <InstrumentHero
          instrument="Piano"
          description="Looking for best online Piano classes near you? Learn to play Piano for all age groups from the comfort of your home with the best qualified Piano teachers."
          imageSrc={heroImage}
        />
        <HowItWorks instrument="Piano" />
        <InstrumentAdvantages instrument="Piano" />
      </main>
      <Footer />
    </>
  );
};

export default Piano;
