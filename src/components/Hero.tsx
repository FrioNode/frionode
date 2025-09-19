import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="text-center py-10 mb-12">
    <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
    Full Stack JavaScript Developer
    </h1>
    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
    Building modern web applications with cutting-edge tech & frameworks
    </p>
    <Button
    asChild
    size="lg"
    className="shadow-glow hover:shadow-portfolio-lg transition-all duration-300 hover:-translate-y-1"
    >
    <a href="#projects">
    View My Work
    </a>
    </Button>
    </section>
  );
};