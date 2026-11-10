import { Card } from "@/components/ui/card";
import {
  Mail,
  Send,
  Globe,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";

export const Contact = () => {
  const channels = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "frionode@frionode.online",
      href: "mailto:frionode@frionode.online",
    },
    {
      icon: <Send className="h-6 w-6" />,
      label: "Telegram",
      value: "@frionode",
      href: "https://t.me/frionode",
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/FrioNode",
      href: "https://github.com/FrioNode",
    },
    {
      icon: <Twitter className="h-6 w-6" />,
      label: "X / Twitter",
      value: "@frionode",
      href: "https://x.com/frionode",
    },
    {
      icon: <Instagram className="h-6 w-6" />,
      label: "Instagram",
      value: "@frionode",
      href: "https://instagram.com/frionode",
    },
    {
      icon: (
        <span className="text-lg font-black tracking-tight leading-none">DEV</span>
      ),
      label: "dev.to",
      value: "frionode",
      href: "https://dev.to/frionode",
    },
    {
      icon: <Facebook className="h-6 w-6" />,
      label: "Facebook",
      value: "Frio Node",
      href: "https://facebook.com/frionode",
    },
    {
      icon: <Youtube className="h-6 w-6" />,
      label: "YouTube",
      value: "@firstontheleft",
      href: "https://www.youtube.com/@firstontheleft",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      label: "Based in",
      value: "Kenya — working remotely",
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
        <p className="text-muted-foreground text-lg">
          Have a project, a question about a private project, or just want to
          say hi? The fastest way to reach me is email or Telegram.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {channels.map((channel) => (
          <Card key={channel.label} className="p-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                {channel.icon}
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-foreground">{channel.label}</h4>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition break-all"
                  >
                    {channel.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{channel.value}</p>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
