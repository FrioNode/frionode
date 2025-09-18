import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export const Header = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    if (newTheme) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="flex justify-between items-center py-6 mb-8">
      <div className="text-2xl font-bold text-primary">FrioNode</div>
      
      <nav className="hidden md:flex space-x-8">
        <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</a>
        <a href="#skills" className="text-foreground hover:text-primary transition-colors font-medium">Skills</a>
        <a href="#projects" className="text-foreground hover:text-primary transition-colors font-medium">Projects</a>
        <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</a>
      </nav>
      
      <Button 
        variant="outline" 
        size="sm" 
        onClick={toggleTheme}
        className="transition-transform hover:scale-110"
      >
        {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </Button>
    </header>
  );
};