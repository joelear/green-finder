import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Leaf, Droplets, Sun } from "lucide-react";
import heroImage from "@/assets/hero-plants.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            Find Your Perfect Plant Match
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90">
            Answer a few quick questions and discover houseplants that will thrive in your space
          </p>
          <Link to="/quiz">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
              Start Quiz
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sun className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Tell Us About Your Space</h3>
              <p className="text-muted-foreground">
                Share details about your light conditions, watering preferences, and desired plant size
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Get Matched</h3>
              <p className="text-muted-foreground">
                Our algorithm finds plants that perfectly match your environment and lifestyle
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Droplets className="w-8 h-8 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Easy Care Tips</h3>
              <p className="text-muted-foreground">
                Get simple care instructions to help your plants thrive in your home
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Ready to Bring Nature Home?
          </h2>
          <p className="text-xl mb-8 text-muted-foreground">
            Take our quick quiz and discover the perfect plants for your space
          </p>
          <Link to="/quiz">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6 h-auto">
              Find Your Plants
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
