import { Timeline } from "@/components/Timeline";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex min-h-screen bg-background">
      {/* Timeline Sidebar - Now 1/5 width with better spacing */}
      <Timeline />
      
      {/* Main Content - 4/5 width */}
      <div className="flex-1 flex flex-col">
        <div className="max-w-6xl mx-auto px-8 w-full">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
