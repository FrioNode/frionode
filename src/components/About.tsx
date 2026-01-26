import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, MessageCircle, Code } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="mb-4">
      <div className="text-center mb-4">
        <h2 className="text-4xl font-bold text-primary mb-4">About Me</h2>
        <p className="text-muted-foreground text-lg">Get to know more about my background and experience</p>
      </div>
      
      <Card className="p-8 shadow-portfolio-lg">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div
              tabIndex={-1} // prevent keyboard focus
              className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary bg-gradient-to-br from-primary/20 to-primary-glow/20"
              style={{
                outline: "none",
                boxShadow: "none",
              }}
              onFocus={e => e.currentTarget.style.outline = "none"}
              onBlur={e => e.currentTarget.style.outline = "none"}
            >
              <img
                src="https://i.ibb.co/21tm3XdX/smallfooth.jpg"
                alt="Frio Node"
                className="object-cover w-full h-full scale-125"
                draggable={false}
                tabIndex={-1} // prevent image focus
                style={{
                  outline: "none",
                  boxShadow: "none",
                }}
                onFocus={e => e.currentTarget.style.outline = "none"}
                onBlur={e => e.currentTarget.style.outline = "none"}
              />
            </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold text-foreground mb-2">Frio Node</h3>
            <h4 className="text-xl text-primary mb-6">Backend Developer with DevOps experience</h4>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-6">
              <p>
                Hi, I’m Frio Node, a backend-focused TypeScript and JavaScript developer with 7+ 
                years of experience building reliable web applications and automation systems. 
                I specialize in secure APIs, CRUD systems, and server-side logic, and I don’t 
                just write code — I deploy it, monitor it, and make sure it keeps working
              </p>
              <p>
                When I'm not coding, you can find me contributing to open source projects, writing blogs, 
                or exploring new JavaScript and TypeScript technologies.
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