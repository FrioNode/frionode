import { Button } from "@/components/ui/button";
import {
  Github,
  Linkedin,
  Twitter,
  FileText,
  Facebook,
  Instagram,
  Send,
} from "lucide-react";

export const Footer = () => {
  const socials = [
    {
      name: "GitHub",
      icon: <Github className="h-4 w-4" />,
      url: "https://github.com/frionode",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      url: "https://linkedin.com/in/frionode",
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-4 w-4" />,
      url: "https://x.com/frionode",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-4 w-4" />,
      url: "https://facebook.com/frionode",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-4 w-4" />,
      url: "https://instagram.com/frionode",
    },
    {
      name: "Telegram",
      icon: <Send className="h-4 w-4" />,
      url: "https://t.me/frionode",
    }
  ];

  return (
    <footer className="bg-card border-t border-border py-12 mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="text-2xl font-bold text-primary mb-6">FrioNode</div>

        <div className="flex justify-center flex-wrap gap-4 mb-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <Button
                variant="outline"
                size="sm"
                className="hover:scale-110 transition-transform"
              >
                {social.icon}
              </Button>
            </a>
          ))}
        </div>

        <p className="text-muted-foreground">
          © 2025 FrioNode Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
