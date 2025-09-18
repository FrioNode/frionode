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
          <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-primary-glow/20 rounded-lg flex items-center justify-center text-primary font-semibold text-xl">
            Benson Mugwe
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-foreground mb-2">Benson Mugwe</h3>
            <h4 className="text-xl text-primary mb-6">Full Stack JavaScript Developer</h4>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                Hi, I'm Benson Mugwe, a passionate JavaScript developer with over 5 years of experience 
                building modern web applications and social media bots. I specialize in the MERN stack 
                and have extensive front and backend experience.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open source projects, writing blogs, 
                or exploring new JavaScript technologies.
              </p>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-4 mb-6">
            <Button asChild variant="outline" size="sm" className="hover:scale-110 transition-transform">
            <a href="https://github.com/frionode" target="_blank" rel="noopener noreferrer">
            <Github className="h-4 w-4" />
            </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="hover:scale-110 transition-transform">
            <a href="https://linkedin.com/in/frionode" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-4 w-4" />
            </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="hover:scale-110 transition-transform">
            <a href="https://x.com/frionode" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-4 w-4" />
            </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="hover:scale-110 transition-transform">
            <a href="https://t.me/frionode" target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            </a>
            </Button>
            <Button asChild variant="outline" size="sm" className="hover:scale-110 transition-transform">
            <a href="https://codepen.io/frionode" target="_blank" rel="noopener noreferrer">
            <Code className="h-4 w-4" />
            </a>
            </Button>
            </div>
            
            <Button
            asChild className="shadow-glow hover:shadow-portfolio-lg transition-all duration-300"
            >
            <a href="../cv.pdf" download>
            Download CV
            </a>
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
};