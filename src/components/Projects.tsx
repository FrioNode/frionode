import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, BarChart3, Bot, Database, Truck, Users } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      icon: <ShoppingCart className="h-12 w-12" />,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/frionode/Ecomerce",
    },
    {
      title: "Inventory Management System",
      description:
        "Productivity app with real-time updates and team collaboration",
      icon: <Truck className="h-12 w-12" />,
      technologies: ["Ejs", "SQL", "Express", "Socket.io", "Redis"],
      github: "https://github.com/frionode/IMS",
    },
    {
      title: "API Analytics Dashboard",
      description:
        "Monitoring and visualization tool for API performance metrics",
      icon: <BarChart3 className="h-12 w-12" />,
      technologies: ["Next.js", "GraphQL", "PostgreSQL", "D3.js"],
      github: "https://github.com/frionode/Analytics",
    },
        {
      title: "WhatsApp Bot",
      description:
        "A group automation WhatsApp bot built with Node.js, Baileys and Express",
      icon: <Bot className="h-12 w-12" />,
      technologies: ["Baileys", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/frionode/Bloombot",
    },
    {
      title: "School Management System",
      description:
        "A comprehensive system to manage school operations, student data, staff and academic materials.",
      icon: <Users className="h-12 w-12" />,
      technologies: ["Ejs", "MongoDB", "Express", "Socket.io", "Redis"],
      github: "https://github.com/frionode/kb-758",
    },
    {
      title: "Discord Bot",
      description:
        "A Discord bot built with Node.js, Discord.js and MongoDB",
      icon: <Bot className="h-12 w-12" />,
      technologies: ["Discord.js", "Node.js", "MongoDB", "Discord API"],
      github: "https://github.com/frionode/YouTify",
    },
  ];

  return (
    <section id="projects" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Sample Projects</h2>
        <p className="text-muted-foreground text-lg">
          Check out some of my recent work
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-portfolio-lg transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center justify-center h-32 bg-primary/10 rounded-lg mb-6 text-primary">
              {project.icon}
            </div>

            <h3 className="text-xl font-semibold text-foreground mb-3">
              {project.title}
            </h3>
            <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Button className="w-full">View Project</Button>
            </a>
          </Card>
        ))}
      </div>
    </section>
  );
};
