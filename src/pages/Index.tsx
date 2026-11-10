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
    <div className="flex flex-col min-h-screen bg-background">
      {/* Sidebar + main content row */}
      <div className="flex flex-1 min-h-0">
        {/* Timeline Sidebar - desktop only, hidden on mobile */}
        <Timeline />

        {/* Main Content */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <div className="max-w-6xl mx-auto px-4 md:px-8 w-full pt-8 flex-1">
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
          </div>
        </div>
      </div>

      {/* Footer spans the full width, below sidebar and main content */}
      <Footer />
    </div>
  );
};

export default Index;
