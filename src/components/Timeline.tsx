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
    <aside className="hidden lg:block w-1/5 min-w-[320px] bg-timeline-bg border-r border-border overflow-y-auto sticky top-0 h-screen">
      <div className="p-6">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-4 bottom-0 w-1 bg-timeline-line rounded-full"></div>

          {/* Timeline events - More spaced out */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-3 w-4 h-4 bg-card border-3 border-timeline-line rounded-full z-10"></div>

                {/* Simple event content - no fancy cards */}
                <div className="ml-10 p-3 bg-card rounded-lg shadow-sm">
                  <div className="text-sm font-bold text-primary mb-1">{event.period}</div>
                  <div className="text-sm text-muted-foreground">{event.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
