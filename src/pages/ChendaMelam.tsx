import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import InstrumentHero from "@/components/InstrumentHero";
import InstrumentAdvantages from "@/components/InstrumentAdvantages";
import heroImage from "@/assets/hero-music-learning.png";

const ChendaMelam = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <InstrumentHero
          instrument="Chenda Melam"
          description="Learn traditional Chenda Melam rhythms and techniques from expert percussion tutors online."
          imageSrc={heroImage}
        />
        <InstrumentAdvantages instrument="Chenda Melam" />
      </main>
      <Footer />
    </div>
  );
};

export default ChendaMelam;


