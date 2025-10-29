import guitarImg from "@/assets/icons/guitar.png";
import pianoImg from "@/assets/icons/piano.svg";
import carnaticImg from "@/assets/icons/carnatic.svg";
import hindustaniImg from "@/assets/icons/hindustani.svg";
import westernImg from "@/assets/icons/western.svg";
import fluteImg from "@/assets/icons/flute.svg";
import violinImg from "@/assets/icons/violin.svg";
import drumsImg from "@/assets/icons/drums.svg";
import chendaImg from "@/assets/icons/chenda.svg";
import trinityImg from "@/assets/icons/trinity.png";
import abrsmImg from "@/assets/icons/abrsm.svg";
import rslImg from "@/assets/icons/rsl.svg";
import { Card, CardContent } from "@/components/ui/card";

const CourseGrid = () => {
  const courses = [
    { img: guitarImg, name: "Guitar", bg: "bg-red-100" },
    { img: carnaticImg, name: "Carnatic", bg: "bg-orange-100" },
    { img: hindustaniImg, name: "Hindustani", bg: "bg-blue-100" },
    { img: westernImg, name: "Western Vocals", bg: "bg-purple-100" },
    { img: pianoImg, name: "Piano", bg: "bg-green-100" },
    { img: fluteImg, name: "Flute", bg: "bg-cyan-100" },
    { img: violinImg, name: "Violin", bg: "bg-pink-100" },
    { img: chendaImg, name: "Chenda Melam", bg: "bg-yellow-100" },
    { img: drumsImg, name: "Drums", bg: "bg-indigo-100" },
    { img: trinityImg, name: "Trinity", bg: "bg-purple-100" },
    { img: abrsmImg, name: "ABRSM", bg: "bg-rose-100" },
    { img: rslImg, name: "RSL", bg: "bg-sky-100" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Classes & Grade Exams
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from a wide range of instruments and vocal styles taught by certified professionals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {courses.map((course, index) => {
            return (
              <Card
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border hover:border-primary/50 bg-card/60 backdrop-blur"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                  <div className={`h-16 w-16 md:h-20 md:w-20 rounded-full overflow-hidden flex items-center justify-center ${course.bg} transition-transform duration-300 group-hover:scale-110`}>
                    <img src={course.img} alt={course.name} className="h-full w-full object-contain" />
                  </div>
                  <p className="font-semibold text-center text-sm md:text-base text-foreground">
                    {course.name}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;
