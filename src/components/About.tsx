import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, MessageCircle, Code } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
        <p className="text-muted-foreground text-lg">Get to know more about my background and experience</p>
      </div>

      <Card className="p-8 shadow-portfolio-lg">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-56 h-56 md:w-64 md:h-64 shrink-0 rounded-full overflow-hidden border-4 border-primary bg-gradient-to-br from-primary/20 to-primary-glow/20">
            <img
              src="/profile.jpg"
              alt="Frio Node"
              className="object-cover w-full h-full"
              draggable={false}
            />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-foreground mb-2">Frio Node</h3>
            <h4 className="text-xl text-primary mb-6">Backend Developer · Payments & Automation</h4>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                Hi, I'm Frio Node, a backend-focused developer with 7+ years of
                experience building reliable web applications and automation
                systems. I specialize in secure APIs, ledgers and payments,
                and server-side logic — and I don't just write code, I deploy
                it, monitor it, and make sure it keeps working.
              </p>
              <p>
                Right now I'm building PAL, a payment platform, and ARC CRM,
                a Telegram-integrated CRM. Before that I spent years on
                WhatsApp bots and automation systems, and I studied computer
                science at school. When I'm not coding, you can find me
                contributing to open source, writing, or exploring new
                backend technologies.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start gap-4 mb-6">
              <Button asChild variant="outline" size="sm" className="hover:scale-110 transition-transform">
                <a href="https://github.com/frionode" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="hover:scale-110 transition-transform">
                <a href="https://linkedin.com/in/frionode" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="hover:scale-110 transition-transform">
                <a href="https://x.com/frionode" target="_blank" rel="noopener noreferrer" aria-label="X">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="hover:scale-110 transition-transform">
                <a href="https://t.me/frionode" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="hover:scale-110 transition-transform">
                <a href="https://codepen.io/frionode" target="_blank" rel="noopener noreferrer" aria-label="CodePen">
                  <Code className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <Button
              asChild className="shadow-glow hover:shadow-portfolio-lg transition-all duration-300"
            >
              <a href="/FrioNode.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};
