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
      {/* Sticky header spans the full width, always on top (z-50) */}
      <Header />

      {/* Sidebar + main content row — stretches so the sidebar meets the footer */}
      <div className="flex flex-1 items-stretch min-h-0">
        {/* Timeline Sidebar - desktop only, hidden on mobile */}
        <Timeline />

        {/* Main Content — full width from the sidebar to the right edge */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-10 pt-8 pb-28 sm:pb-20 flex-1">
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

      {/* Fixed footer — always visible at the bottom of the viewport */}
      <Footer />
    </div>
  );
};

export default Index;
