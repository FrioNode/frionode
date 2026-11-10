import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  MessageSquare,
  Boxes,
  HeartPulse,
  ShoppingBasket,
  GraduationCap,
  Lock,
  Mail,
  Github,
  Captions,
  Smartphone,
  FolderKanban,
} from "lucide-react";

type Project = {
  title: string;
  description: string;
  image?: string;
  icon: JSX.Element;
  technologies: string[];
  status: "Private" | "Public";
  github?: string;
  highlight?: string;
};

export const Projects = () => {
  const projects: Project[] = [
    {
      title: "PAL — Payment Platform",
      description:
        "A payment system I'm building from the ground up: double-entry ledger, wallets, and M-Pesa rails (STK + B2C), with reconciliation so no money ever disappears into a black hole. API-first — the API works fully on its own.",
      image: "/images/project-pal.png",
      icon: <CreditCard className="h-12 w-12" />,
      technologies: ["Go", "PostgreSQL", "M-Pesa", "REST APIs"],
      status: "Private",
      highlight: "Current focus",
    },
    {
      title: "ARC CRM",
      description:
        "Telegram-integrated web CRM: operators run customer chats across multiple Telegram accounts, with a shared lead pool, leads-to-clients pipeline, and a double-entry ledger for manual payments. Built for teams that live in Telegram.",
      image: "/images/project-crm.png",
      icon: <MessageSquare className="h-12 w-12" />,
      technologies: ["TypeScript", "Next.js", "Fastify", "PostgreSQL", "Telegram API"],
      status: "Private",
      highlight: "In production",
    },
    {
      title: "Inventory Management System",
      description:
        "Real-time inventory with team collaboration: stock tracking and reporting, low-stock alerts, transaction history, and a dashboard with visual analytics.",
      image: "/images/project-ims.png",
      icon: <Boxes className="h-12 w-12" />,
      technologies: ["Node.js", "Express", "SQL", "Socket.io", "Redis"],
      status: "Private",
    },
    {
      title: "PulseHQ — Hospital Operations",
      description:
        "A hospital administration dashboard: patient management, admissions and bed tracking, billing, pharmacy inventory, and KPIs with occupancy charts and alerts.",
      image: "/images/project-pulsehq.png",
      icon: <HeartPulse className="h-12 w-12" />,
      technologies: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS"],
      status: "Private",
    },
    {
      title: "Daily Basket",
      description:
        "An offline shop ledger for a small retail business — sales, debts, suppliers and per-product margins — as a native Android app. No permissions at all, not even internet; everything lives in one SQLite database on the phone.",
      icon: <ShoppingBasket className="h-12 w-12" />,
      technologies: ["Kotlin", "Jetpack Compose", "SQLite", "Android"],
      status: "Private",
    },
    {
      title: "School Portal",
      description:
        "A school operations portal: student and staff records, academics, and day-to-day administration in one place.",
      icon: <GraduationCap className="h-12 w-12" />,
      technologies: ["Node.js", "Express", "MongoDB", "EJS"],
      status: "Private",
    },
    {
      title: "vscribe",
      description:
        "A video transcription API that converts speech to text from virtually any video source.",
      icon: <Captions className="h-12 w-12" />,
      technologies: ["TypeScript", "REST API", "Speech-to-text"],
      status: "Public",
      github: "https://github.com/United-DG/vscribe",
    },
    {
      title: "cloudtext",
      description:
        "An SMS gateway — turn any Android phone into an SMS gateway. Send and receive SMS through your own SIM, with a web dashboard, REST API and MCP server for AI agents — no per-message fees.",
      icon: <Smartphone className="h-12 w-12" />,
      technologies: ["TypeScript", "Android", "SMS"],
      status: "Private",
    },
    {
      title: "dev-command-centre",
      description:
        "A self-hosted multi-project tracker for people who code on several things at once and refuse to manually log progress.",
      icon: <FolderKanban className="h-12 w-12" />,
      technologies: ["JavaScript", "Self-hosted"],
      status: "Public",
      github: "https://github.com/United-DG/dev-command-centre",
    },
  ];

  return (
    <section id="projects" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Projects</h2>
        <p className="text-muted-foreground text-lg">
          What I&apos;m building now, and what I&apos;ve shipped
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="overflow-hidden hover:shadow-portfolio-lg transition-all duration-300 hover:-translate-y-2 flex flex-col"
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-44 object-cover"
                loading="lazy"
              />
            ) : (
              <div className="flex items-center justify-center h-44 bg-primary/10 text-primary">
                {project.icon}
              </div>
            )}

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-start justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <span
                  className={
                    project.status === "Private"
                      ? "shrink-0 inline-flex items-center gap-1 px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
                      : "shrink-0 inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  }
                >
                  {project.status === "Private" && <Lock className="h-3 w-3" />}
                  {project.status}
                </span>
              </div>

              {project.highlight && (
                <p className="text-sm font-medium text-primary mb-2">
                  {project.highlight}
                </p>
              )}

              <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.status === "Public" && project.github ? (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full">
                    <Github className="h-4 w-4 mr-2" /> View on GitHub
                  </Button>
                </a>
              ) : (
                <a href={`mailto:frionode@frionode.online?subject=${encodeURIComponent(`Private project: ${project.title}`)}`}>
                  <Button variant="outline" className="w-full">
                    <Mail className="h-4 w-4 mr-2" /> Private — ask me about it
                  </Button>
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>

      <p className="text-center text-muted-foreground mt-10">
        Some projects are private — contact me if you&apos;d like a walkthrough
        or a demo.
      </p>
    </section>
  );
};
