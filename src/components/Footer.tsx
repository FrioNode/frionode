import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, FileText } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 mt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="text-2xl font-bold text-primary mb-6">FrioNode</div>
        
        <div className="flex justify-center gap-4 mb-6">
          <Button variant="outline" size="sm" className="hover:scale-110 transition-transform">
            <Github className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="hover:scale-110 transition-transform">
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="hover:scale-110 transition-transform">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="hover:scale-110 transition-transform">
            <FileText className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-muted-foreground">© 2025 FrioNode Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};