'use client';

import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Server, 
  GitBranch,
  Palette,
  Zap,
  Code,
  Code2Icon,
  Wrench
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Globe,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React JS', 'TypeScript', 'Tailwind CSS', 'Next.js '],
      color: 'text-blue-600',
    },
    {
      title: 'Backend',
      icon: Server,
      skills: ['Node.js', 'Express', 'REST APIs',  'Microservices'],
      color: 'text-green-600',
    },
    {
      title: 'Database & ORM',
      icon: Database,
      skills: ['MongoDB', 'PostgreSQL', 'MySQL','TypeORM'],
      color: 'text-purple-600',
    },
   
    {
      title: 'Tools & DePloyment',
      icon: GitBranch,
      skills: ['Git', 'Github', 'Postman', 'Vercel', 'CI/CD', 'Testing'],
      color: 'text-orange-600',
    },
    {
      title: 'Programming Languages',
      icon: Code2Icon,
      skills: ['JavaScript', 'Python', 'Java', 'C'],
      color: 'text-red-600',
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <Wrench className='inline-block mr-2 h-9 w-9 font-bold' />
            Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build
            exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group p-6 bg-background rounded-xl shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-muted group-hover:bg-muted/80 transition-colors`}>
                  <category.icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold ml-3">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-muted/50 rounded-md text-sm text-center hover:bg-muted transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-muted rounded-full">
            <Zap className="h-5 w-5 text-yellow-500 mr-2" />
            <span className="text-sm font-medium">Always learning and growing</span>
          </div>
        </div>
      </div>
    </section>
  );
}