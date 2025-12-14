'use client';

import { User } from 'lucide-react';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-left">
            <div className="relative w-80 h-80 mx-auto lg:w-96 lg:h-96">
              <Image
                src="/images/IMG20250830092059.jpg"
                alt="Profile picture"
                fill
                className="rounded-2xl object-cover shadow-2xl"
                priority
              />
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              <User className='inline-block mr-2 h-9 w-9 font-bold' />
              About Me</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
              🎓 I have recently completed my Bachelor's degree in computer engineering from Silver Oak University at Ahmedabad.
              </p>
              <p>
              💼 I have 3 months of remote internship experience as a Web Developer Intern, where I worked with modern technologies like JavaScript, HTML, CSS, React, Express JS, and gained practical knowledge of building scalable web applications.
              </p>
              <p>
              💻 I’m passionate about Software Development and Web Development, with a strong foundation in HTML, CSS, JavaScript, Node JS, React Js PostgreSQL, Mongo and MySQL. I enjoy designing and developing user-centric, robust full-stack solutions and have worked on real-world projects such as EatNeatBy-A Restaurant finder, project management tools, and a File Sharing System.
              </p>
              <p>
              🚀 I’m a self-driven learner constantly exploring new tools and frameworks to level up my development skills. I’m now looking forward to new opportunities where I can contribute, grow, and create impactful digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}