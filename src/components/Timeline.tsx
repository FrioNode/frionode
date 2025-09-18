import { Card } from "@/components/ui/card";

interface TimelineEvent {
  period: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    period: "2003-2006",
    description: "Completed Secondary School at XYZ High School."
  },
  {
    period: "2007-2011", 
    description: "Attended University, studied Computer Science."
  },
  {
    period: "2012-Present",
    description: "Worked at ABC Company as a JavaScript Developer."
  },
  {
    period: "2023-Present",
    description: "Freelance full-stack JavaScript development."
  }
];

export const Timeline = () => {
  return (
    <aside className="w-1/5 min-w-[320px] bg-timeline-bg border-r border-border overflow-y-auto sticky top-0 h-screen">
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