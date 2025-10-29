import { Target, Music, Users } from "lucide-react";

const InstrumentAdvantages = ({ instrument }: { instrument: string }) => {
  const advantages = [
    {
      icon: Target,
      title: `Goal Based ${instrument} Lessons`,
      description: `You will learn from a qualified ${instrument} teacher, who has already done it all. Grade exams, stage shows and performances. Set your goals, then the ${instrument} teacher will help you with right lesson plan, exercises and track progress to get faster results.`,
    },
    {
      icon: Music,
      title: "Play Your Favourite Songs",
      description: `The whole point is to play your favourite songs in ${instrument}. Discuss your favourite songs with your ${instrument} teacher & your tutor will help you learn quickly. All you have to do is to focus on practise.`,
    },
    {
      icon: Users,
      title: `Friendly Online ${instrument} Teacher`,
      description: `Your ${instrument} teacher will keep you motivated and you can reach them to get your doubts cleared. You can send recorded videos and ask for feedback. The teacher will help you to achieve your goal and will support in your ${instrument} journey.`,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Best Online {instrument} Lessons
          </h2>
          <p className="text-xl text-muted-foreground">The MUSIC MASTER Advantage</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-lg p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{advantage.title}</h3>
                <p className="text-muted-foreground">{advantage.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InstrumentAdvantages;
