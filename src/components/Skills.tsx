import { Card } from "@/components/ui/card";
import {
  Code,
  Globe,
  Server,
  Database,
  FileCode,
  Settings,
  Cloud,
  GitBranch,
  TerminalSquare,
  FileJson,
  Network,
  Cpu,
  FileText,
} from "lucide-react";

// Skill-to-icon mapping #Dev FrioNode
const skillIcons: Record<string, JSX.Element> = {
  "JavaScript (ES6+)": <FileCode className="h-4 w-4 text-primary" />,
  TypeScript: <FileCode className="h-4 w-4 text-primary" />,
  "React.js": <Globe className="h-4 w-4 text-primary" />,
  HTML5: <FileText className="h-4 w-4 text-primary" />,
  CSS3: <FileText className="h-4 w-4 text-primary" />,
  "Tailwind CSS": <Settings className="h-4 w-4 text-primary" />,

  "Node.js": <Server className="h-4 w-4 text-primary" />,
  "Express.js": <Server className="h-4 w-4 text-primary" />,
  "RESTful APIs": <Network className="h-4 w-4 text-primary" />,
  GraphQL: <Cloud className="h-4 w-4 text-primary" />,

  MongoDB: <Database className="h-4 w-4 text-primary" />,
  MySQL: <Database className="h-4 w-4 text-primary" />,
  Git: <GitBranch className="h-4 w-4 text-primary" />,
  GitHub: <GitBranch className="h-4 w-4 text-primary" />,
  Linux: <TerminalSquare className="h-4 w-4 text-primary" />,
};

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        "JavaScript (ES6+)",
        "React.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6" />,
      skills: [
        "Node.js",
        "TypeScript",
        "Express.js",
        "RESTful APIs",
        "GraphQL",
      ],
    },
    {
      title: "Database & Tools",
      icon: <Database className="h-6 w-6" />,
      skills: ["MongoDB", "MySQL", "Git", "GitHub", "Linux"],
    },
  ];

  return (
    <section id="skills" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Technical Skills</h2>
        <p className="text-muted-foreground text-lg">
          Technologies and tools I use to create amazing applications
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card
            key={index}
            className="p-6 hover:shadow-portfolio-lg transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="text-primary">{category.icon}</div>
              <h3 className="text-xl font-semibold text-foreground">
                {category.title}
              </h3>
            </div>

            <ul className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="flex items-center gap-3 p-2 rounded-md hover:bg-hover transition-colors"
                >
                  {skillIcons[skill] ?? <Code className="h-4 w-4 text-primary" />}
                  <span className="text-muted-foreground">{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};
