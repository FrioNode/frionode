import {
  Github,
  Linkedin,
  Twitter,
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
    },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 w-full bg-card border-t border-border py-2 sm:py-0 sm:h-14 sm:flex sm:items-center">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-6 px-4 w-full text-sm text-muted-foreground">
        <span className="font-bold text-primary text-base shrink-0">FrioNode</span>
        <span className="flex items-center gap-3 shrink-0">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="hover:text-primary transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </span>
        <a
          href="mailto:frionode@frionode.online"
          className="hover:text-primary transition-colors shrink-0"
        >
          frionode@frionode.online
        </a>
        <span className="shrink-0">© 2026 FrioNode Portfolio. All rights reserved.</span>
      </div>
    </footer>
  );
};
