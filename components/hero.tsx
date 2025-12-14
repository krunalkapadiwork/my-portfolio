'use client';

import { Github, Linkedin, Instagram, ArrowDown, FileText, Folder, FolderKanban, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/krunalkapadiwork', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/krunal-kapadi-762a51285/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/krunalk12/?hl=en', label: 'Instagram' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative mt-10 sm:mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Krunal Kapadi
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Full Stack Developer crafting beautiful, functional web experiences
            with modern technologies and clean code.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('resume')}
              className="px-8 py-3 text-lg font-medium"
            >
              <a href="https://drive.google.com/file/d/1svLTp6HuTgT-leCnyfCq-OcZKX2biRTm/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <FileText className="inline-block mr-2 h-5 w-5" />
                View Resume
              </a>
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 text-lg font-medium"
            >
              <FolderKanban className="inline-block mr-2 h-5 w-5" />
              View Projects
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 text-lg font-medium"
            >
              <Mail className="inline-block mr-2 h-5 w-5" />
              Contact Me
        
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-16">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors group"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </button>
      </div>
    </section>
  );
}