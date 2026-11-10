import { MapPin, Mail } from "lucide-react";

interface TimelineEvent {
  period: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    period: "2025 — now",
    description: "Building PAL, a payment platform (Go + PostgreSQL), and ARC CRM, a Telegram-integrated CRM.",
  },
  {
    period: "2024–2025",
    description: "In-person computer tutor and web maintainer at a community based organization.",
  },
  {
    period: "2022",
    description: "Data analysis at a health facilities programme — API integration and report generation (Python, JavaScript).",
  },
  {
    period: "2020–2024",
    description: "Part-time backend developer — Node.js, WhatsApp bots and automation systems.",
  },
  {
    period: "2019–2024",
    description: "Studied computer science at school.",
  },
  {
    period: "2015–2018",
    description: "Completed secondary school.",
  },
];

export const Timeline = () => {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:shrink-0 lg:w-72 bg-card border-r border-border lg:sticky lg:top-16 lg:z-10 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto">
      <div className="px-5 pt-6 pb-4 border-b border-border">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">My journey</p>
        <h2 className="text-lg font-bold text-foreground mt-1">Backend, payments & automation</h2>
        <p className="text-sm text-muted-foreground mt-1">7+ years shipping real systems.</p>
      </div>

      <div className="px-5 py-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border"></div>

          <div className="space-y-7">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative pl-10">
                {/* Timeline dot */}
                <div className="absolute left-2 top-1 w-4 h-4 bg-background border-2 border-primary rounded-full"></div>
                <div className="text-xs font-bold text-primary">{event.period}</div>
                <div className="text-sm leading-relaxed text-muted-foreground mt-0.5">{event.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-4 border-t border-border space-y-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <MapPin className="h-4 w-4 shrink-0 text-primary" /> Kenya — working remotely
        </p>
        <a href="mailto:frionode@frionode.online" className="flex items-center gap-2 hover:text-primary transition-colors break-all">
          <Mail className="h-4 w-4 shrink-0 text-primary" /> frionode@frionode.online
        </a>
      </div>
    </aside>
  );
};
