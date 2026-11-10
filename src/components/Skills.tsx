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
  Network,
  FileText,
  CreditCard,
} from "lucide-react";

// Skill-to-icon mapping #Dev FrioNode
const skillIcons: Record<string, JSX.Element> = {
  "JavaScript (ES6+)": <FileCode className="h-4 w-4 text-primary" />,
  TypeScript: <FileCode className="h-4 w-4 text-primary" />,
  "React.js": <Globe className="h-4 w-4 text-primary" />,
  "Next.js": <Globe className="h-4 w-4 text-primary" />,
  HTML5: <FileText className="h-4 w-4 text-primary" />,
  CSS3: <FileText className="h-4 w-4 text-primary" />,
  "Tailwind CSS": <Settings className="h-4 w-4 text-primary" />,
  "shadcn/ui": <Code className="h-4 w-4 text-primary" />,
  "React Router": <Globe className="h-4 w-4 text-primary" />,

  "Node.js": <Server className="h-4 w-4 text-primary" />,
  Go: <Server className="h-4 w-4 text-primary" />,
  Python: <FileCode className="h-4 w-4 text-primary" />,
  "Express.js": <Server className="h-4 w-4 text-primary" />,
  Fastify: <Server className="h-4 w-4 text-primary" />,
  FastAPI: <Server className="h-4 w-4 text-primary" />,
  "RESTful APIs": <Network className="h-4 w-4 text-primary" />,
  GraphQL: <Cloud className="h-4 w-4 text-primary" />,

  PostgreSQL: <Database className="h-4 w-4 text-primary" />,
  MongoDB: <Database className="h-4 w-4 text-primary" />,
  MySQL: <Database className="h-4 w-4 text-primary" />,
  Redis: <Database className="h-4 w-4 text-primary" />,
  Git: <GitBranch className="h-4 w-4 text-primary" />,
  GitHub: <GitBranch className="h-4 w-4 text-primary" />,
  Linux: <TerminalSquare className="h-4 w-4 text-primary" />,

  "M-Pesa (STK + B2C)": <CreditCard className="h-4 w-4 text-primary" />,
  "Double-entry ledgers": <CreditCard className="h-4 w-4 text-primary" />,
  Docker: <Cloud className="h-4 w-4 text-primary" />,
  "Fly.io": <Cloud className="h-4 w-4 text-primary" />,
  Caddy: <Cloud className="h-4 w-4 text-primary" />,
  "Telegram APIs": <Network className="h-4 w-4 text-primary" />,
};

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "shadcn/ui",
        "React Router",
        "RESTful APIs",
      ],
    },
    {
      title: "Backend & Tools",
      icon: <Server className="h-6 w-6" />,
      skills: [
        "Node.js",
        "Go",
        "Python",
        "Express.js",
        "FastAPI",
        "Fastify",
        "GraphQL",
        "Git",
        "GitHub",
        "Linux",
      ],
    },
    {
      title: "Payments, Data & DevOps",
      icon: <CreditCard className="h-6 w-6" />,
      skills: [
        "M-Pesa (STK + B2C)",
        "Double-entry ledgers",
        "Telegram APIs",
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "Docker",
        "Fly.io",
        "Caddy",
      ],
    },
  ];

  return (
    <section id="skills" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Technical Skills</h2>
        <p className="text-muted-foreground text-lg">
          Technologies and tools I use to build and ship real systems
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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

            <ul className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skillIndex}
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-hover transition-colors"
                >
                  <span className="shrink-0">
                    {skillIcons[skill] ?? <Code className="h-4 w-4 text-primary" />}
                  </span>
                  <span className="text-muted-foreground text-sm leading-snug">{skill}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
};
