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
    <aside className="w-1/5 min-w-[300px] bg-timeline-bg border-r border-border overflow-y-auto sticky top-0 h-screen">
      <div className="p-8">
        <h3 className="text-lg font-semibold text-primary mb-8">Career Timeline</h3>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-4 bottom-0 w-1 bg-timeline-line rounded-full"></div>
          
          {/* Timeline events */}
          <div className="space-y-8">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-4 w-5 h-5 bg-card border-4 border-timeline-line rounded-full z-10"></div>
                
                {/* Event card */}
                <Card className="ml-12 p-4 hover:shadow-portfolio-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-sm font-bold text-primary mb-2">{event.period}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{event.description}</div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};