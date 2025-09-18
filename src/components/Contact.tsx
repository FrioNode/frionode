import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="mb-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-4">Get In Touch</h2>
        <p className="text-muted-foreground text-lg">Feel free to contact me for any work or suggestions</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <Card className="p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Contact Info</h3>
          
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Email</h4>
                <p className="text-muted-foreground">frionode@gmail.com</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Phone</h4>
                <p className="text-muted-foreground">+254 (718) 241-545</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Location</h4>
                <p className="text-muted-foreground">Naivasha, Nakuru 20117</p>
              </div>
            </div>
          </div>
        </Card>
        
        {/* Contact Form */}
        <Card className="p-8">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Send a Message</h3>
          
          <form className="space-y-6">
            <Input placeholder="Your Name" className="h-12" />
            <Input type="email" placeholder="Your Email" className="h-12" />
            <Input placeholder="Subject" className="h-12" />
            <Textarea placeholder="Your Message" className="min-h-32 resize-none" />
            <Button className="w-full h-12 shadow-glow hover:shadow-portfolio-lg transition-all duration-300">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};