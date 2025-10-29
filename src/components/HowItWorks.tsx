const HowItWorks = ({ instrument }: { instrument: string }) => {
  const steps = [
    {
      number: "1",
      title: "Register & Schedule",
      description: `Register on our website (or) WhatsApp us DEMO. We will reach out to you and schedule a FREE online ${instrument} class`,
    },
    {
      number: "2",
      title: "Meet Your Teacher",
      description: `Meet the ${instrument} teacher, discuss your aspirations and get a sneak peak of a typical ${instrument} class`,
    },
    {
      number: "3",
      title: "Start Learning",
      description: `Liked the demo session? Upgrade and start your ${instrument} lessons`,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-2">How it works?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Learn {instrument} Online
          </h2>
          <p className="text-muted-foreground mt-2">in 3 Simple Steps</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
