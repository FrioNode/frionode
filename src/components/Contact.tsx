import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Globe, Github, Twitter, Clock } from "lucide-react";

export const Contact = () => {
  const channels = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "frionode@gmail.com",
      href: "mailto:frionode@gmail.com",
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
      icon: <Globe className="h-6 w-6" />,
      label: "Based in",
      value: "Kenya — working remotely",
      href: undefined,
    },
    {
      icon: <Clock className="h-6 w-6" />,
      label: "Response time",
      value: "Usually within a day",
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <Card className="p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Info</h3>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I&apos;m open to freelance work, collaborations, and questions about
            my projects — including the private ones. Tell me what you&apos;re
            building and I&apos;ll get back to you.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <a
                  href="mailto:frionode@gmail.com"
                  className="text-muted-foreground hover:text-primary transition break-all"
                >
                  frionode@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Send className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Telegram</h4>
                <a
                  href="https://t.me/frionode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  @frionode
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-muted-foreground">Kenya — working remotely</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xwpnglpb"
          method="POST"
          className="space-y-6"
        >
          <input type="hidden" name="_subject" value="New message from frionode.online" />
          <input type="hidden" name="_next" value="https://frionode.online/#contact" />
          <Input name="name" placeholder="Your Name" className="h-12" required />
          <Input name="_replyto" type="email" placeholder="Your Email" className="h-12" required />
          <Input name="subject" placeholder="Subject" className="h-12" />
          <Textarea name="message" placeholder="Your Message" className="min-h-32 resize-none" required />

          <Button type="submit" className="w-full h-12 shadow-glow hover:shadow-portfolio-lg transition-all duration-300">
            Send Message
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            Replies go straight to frionode@gmail.com
          </p>
        </form>
      </div>
    </section>
  );
};
