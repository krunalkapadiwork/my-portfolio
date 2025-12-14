'use client';

import { ExternalLink, FolderKanban, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Projects() {
  type Project = {
    title: string;
    description: string;
    image: string;
    technologies: string[];
    //githubUrl: string;
    //liveUrl?: string;
  };

  const projects: Project[] = [
    {
      title: 'EatNearBy',
      description: 'Eat Nearby is a platform that helps users discover restaurants and hotels around their location, allowing them to explore options based on ratings, pricing, and proximity. It makes finding the right place to eat simple, quick, and convenient.',
      image: '/images/EatNearBy.jpeg',
      technologies: ['React JS', 'Express JS', 'Tailwind CSS', 'MongoDB'],
      //githubUrl: 'https://github.com/krunalkapadi/EatNearBy-Project.git',
      // liveUrl: '', // Add a liveUrl if available
    },
  /*  {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates, file sharing, and team communication features.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },*/
    {
      title: 'Sorting Visualizer',
      description: 'Sorting Visualizer is an interactive tool that visually demonstrates how different sorting algorithms work. It helps users understand the step-by-step process of sorting by providing real-time animations and comparisons.',
      image: '/images/sorting.png',
      technologies: ['React JS', 'CSS'],
      //githubUrl: 'https://github.com/krunalkapadi/SortingVisualizer.git',
      
    },
   /* {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with automated reporting and engagement insights.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
      technologies: ['React', 'Python', 'FastAPI', 'Redis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },*/
    {
      title: 'Employee Leave Management System',
      description: 'A web-based Employee Leave Management System that streamlines leave requests, approvals, and tracking for employees and managers. Built with a frontend–backend architecture to ensure smooth workflows and accurate record management',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg',
      technologies: ['Next JS', 'Express JS', 'Tailwind CSS', 'MongoDB'],
      //githubUrl: 'https://github.com/krunalkapadi/employee-leave-mangement.git',
     
    },
   /* {
      title: 'Real Estate Platform',
      description: 'Property listing platform with advanced search, virtual tours, and mortgage calculator integration.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      technologies: ['React Native', 'Firebase', 'Google Maps', 'Expo'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },*/
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <FolderKanban className='inline-block mr-2 h-9 w-9 font-bold' />
            Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating expertise in modern web
            technologies and problem-solving capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-background rounded-xl shadow-sm border border-border overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  {/* <Button variant="outline" size="sm" asChild>
                    <a
                  {project.liveUrl && (
                    <Button size="sm" asChild>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live Demo
                    </a>
                  </Button> */}
                  <Button variant="outline" size="sm" asChild>
                 {/*   <a
                      href={project.githubUrl} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </a>*/}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}