import { Helmet } from "react-helmet";
import Navigation from "@/components/Navigation";
import InstrumentHero from "@/components/InstrumentHero";
import HowItWorks from "@/components/HowItWorks";
import InstrumentAdvantages from "@/components/InstrumentAdvantages";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-music-learning.png";

const Violin = () => {
  return (
    <>
      <Helmet>
        <title>Online Violin Classes - Live 1-to-1 Violin Lessons | MusicMaster</title>
        <meta
          name="description"
          content="Looking for best online Violin classes near you? Learn to play Violin for all age groups from the comfort of your home with the best qualified Violin teachers."
        />
        <meta name="keywords" content="violin classes, online violin lessons, learn violin, violin teacher, violin courses" />
        <link rel="canonical" href="https://yourdomain.com/violin" />
      </Helmet>

      <Navigation />
      <main>
        <InstrumentHero
          instrument="Violin"
          description="Looking for best online Violin classes near you? Learn to play Violin for all age groups from the comfort of your home with the best qualified Violin teachers."
          imageSrc={heroImage}
        />
        <HowItWorks instrument="Violin" />
        <InstrumentAdvantages instrument="Violin" />
      </main>
      <Footer />
    </>
  );
};

export default Violin;
