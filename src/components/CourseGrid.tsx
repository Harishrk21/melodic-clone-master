import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Music } from 'lucide-react';

const CourseGrid = () => {
  const courses = [
    { name: "Guitar", bg: "from-amber-500/20 to-yellow-600/20", href: "/guitar" },
    { name: "Carnatic", bg: "from-amber-600/20 to-yellow-500/20", href: "#" },
    { name: "Hindustani", bg: "from-yellow-500/20 to-amber-600/20", href: "#" },
    { name: "Western Vocals", bg: "from-amber-500/20 to-yellow-600/20", href: "/vocals" },
    { name: "Piano", bg: "from-yellow-600/20 to-amber-500/20", href: "/piano" },
    { name: "Flute", bg: "from-amber-600/20 to-yellow-600/20", href: "/flute" },
    { name: "Violin", bg: "from-yellow-500/20 to-amber-500/20", href: "/violin" },
    { name: "Chenda Melam", bg: "from-amber-500/20 to-yellow-500/20", href: "/chenda-melam" },
    { name: "Drums", bg: "from-yellow-600/20 to-amber-600/20", href: "/drums" },
    { name: "Trinity", bg: "from-amber-600/20 to-yellow-500/20", href: "/trinity" },
    { name: "ABRSM", bg: "from-yellow-500/20 to-amber-600/20", href: "/abrsm" },
    { name: "RSL", bg: "from-amber-500/20 to-yellow-600/20", href: "/rockschool" },
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-black to-yellow-900/10"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4af3712_1px,transparent_1px),linear-gradient(to_bottom,#d4af3712_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-yellow-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Explore Classes, Grade Exams & Live Band
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Choose from a wide range of instruments and vocal styles taught by{' '}
            <span className="text-amber-300 font-medium">certified professionals</span>, or book our{' '}
            <span className="text-blue-400 font-medium">professional live band</span> for your events
          </p>
        </div>

        {/* Live Band Prominent Card */}
        <div className="mb-8 flex justify-center">
          <a href="/liveband" className="block w-full max-w-md">
            <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 border-2 border-blue-500/50 bg-gradient-to-br from-blue-950/80 to-blue-900/60 backdrop-blur-sm hover:border-blue-400/80 hover:shadow-2xl hover:shadow-blue-500/40">
              <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                <div className="h-24 w-24 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-600/40 to-blue-500/40 border-2 border-blue-400/60 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-blue-500/70 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 via-blue-400/40 to-blue-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Music className="h-12 w-12 text-blue-300 relative z-10" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-xl bg-gradient-to-r from-blue-300 to-blue-200 bg-clip-text text-transparent group-hover:from-blue-200 group-hover:to-blue-100 transition-all duration-300 mb-1">
                    Live Band
                  </p>
                  <p className="text-sm text-blue-300/80">Professional performances for all events</p>
                </div>
              </CardContent>
            </Card>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {courses.map((course, index) => {
            return (
              <a key={index} href={course.href || "#"} className="block">
                <Card className="group cursor-pointer transition-all duration-300 hover:scale-105 border border-amber-500/30 bg-gradient-to-br from-amber-950/60 to-yellow-950/40 backdrop-blur-sm hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/20">
                  <CardContent className="flex flex-col items-center justify-center p-6 space-y-3">
                    <div className={`h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center bg-gradient-to-br ${course.bg} border border-amber-500/40 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-amber-500/50 relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/30 via-yellow-500/30 to-amber-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="text-2xl md:text-3xl relative z-10 filter drop-shadow-lg">
                        {index === 0 && '🎸'}
                        {index === 1 && '🎵'}
                        {index === 2 && '🎶'}
                        {index === 3 && '🎤'}
                        {index === 4 && '🎹'}
                        {index === 5 && '🎺'}
                        {index === 6 && '🎻'}
                        {index === 7 && '🥁'}
                        {index === 8 && '🪘'}
                        {index === 9 && '🏆'}
                        {index === 10 && '📜'}
                        {index === 11 && '⭐'}
                      </span>
                    </div>
                    <p className="font-semibold text-center text-sm md:text-base bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-yellow-400 transition-all duration-300">
                      {course.name}
                    </p>
                  </CardContent>
                </Card>
              </a>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-500 text-black font-bold px-8 py-4 rounded-lg shadow-2xl shadow-amber-500/50 hover:from-amber-400 hover:via-yellow-400 hover:to-amber-400 hover:shadow-amber-400/70 transition-all duration-300 hover:scale-105">
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CourseGrid;