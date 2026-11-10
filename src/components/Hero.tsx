import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="text-center py-10 md:py-16 mb-4">
      <p className="text-primary font-semibold tracking-wide mb-4">
        Frio Node — Backend Developer
      </p>
      <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
        Payments, APIs &amp; Automation
      </h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
        I build backend systems that handle real money and real users — payment
        platforms, Telegram CRMs, and automation that keeps running.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button
          asChild
          size="lg"
          className="shadow-glow hover:shadow-portfolio-lg transition-all duration-300 hover:-translate-y-1"
        >
          <a href="#projects">View My Work</a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="#contact">Get In Touch</a>
        </Button>
      </div>
    </section>
  );
};
