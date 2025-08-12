import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-16 md:pt-20">
        <HeroSection />
      </main>
      
    </div>
  );
};

export default Index;
