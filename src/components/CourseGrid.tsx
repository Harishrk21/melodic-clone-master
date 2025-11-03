import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const CourseGrid = () => {
  const courses = [
    { name: "Guitar", bg: "from-amber-500/20 to-yellow-600/20" },
    { name: "Carnatic", bg: "from-amber-600/20 to-yellow-500/20" },
    { name: "Hindustani", bg: "from-yellow-500/20 to-amber-600/20" },
    { name: "Western Vocals", bg: "from-amber-500/20 to-yellow-600/20" },
    { name: "Piano", bg: "from-yellow-600/20 to-amber-500/20" },
    { name: "Flute", bg: "from-amber-600/20 to-yellow-600/20" },
    { name: "Violin", bg: "from-yellow-500/20 to-amber-500/20" },
    { name: "Chenda Melam", bg: "from-amber-500/20 to-yellow-500/20" },
    { name: "Drums", bg: "from-yellow-600/20 to-amber-600/20" },
    { name: "Trinity", bg: "from-amber-600/20 to-yellow-500/20" },
    { name: "ABRSM", bg: "from-yellow-500/20 to-amber-600/20" },
    { name: "RSL", bg: "from-amber-500/20 to-yellow-600/20" },
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent">
              Explore Classes & Grade Exams
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Choose from a wide range of instruments and vocal styles taught by{' '}
            <span className="text-amber-300/80 font-medium">certified professionals</span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
          {courses.map((course, index) => {
            return (
              <Card
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 border border-amber-500/30 bg-gradient-to-br from-amber-950/60 to-yellow-950/40 backdrop-blur-sm hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/20"
              >
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