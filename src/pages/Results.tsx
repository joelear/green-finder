import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { plants } from "@/data/plants";
import type { LightLevel, WaterFrequency, PlantSize } from "@/data/plants";
import { Sun, Droplets, Info } from "lucide-react";

const Results = () => {
  const location = useLocation();
  const preferences = location.state as {
    light: LightLevel;
    water: WaterFrequency;
    size: PlantSize;
  } | null;

  if (!preferences) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-foreground">No preferences found</h1>
          <Link to="/quiz">
            <Button variant="hero">Take the Quiz</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Filter plants based on preferences
  const matchedPlants = plants.filter(
    (plant) =>
      plant.light.includes(preferences.light) &&
      plant.water.includes(preferences.water) &&
      plant.size.includes(preferences.size)
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary text-primary-foreground py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Your Perfect Plant Matches
          </h1>
          <p className="text-xl opacity-90">
            We found {matchedPlants.length} plant{matchedPlants.length !== 1 ? "s" : ""} that match your preferences
          </p>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {matchedPlants.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold mb-4 text-foreground">
                No exact matches found
              </h2>
              <p className="text-muted-foreground mb-6">
                Try adjusting your preferences to see more options
              </p>
              <Link to="/quiz">
                <Button variant="hero">Retake Quiz</Button>
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {matchedPlants.map((plant) => (
                <Card key={plant.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <img
                      src={plant.image}
                      alt={plant.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">
                      {plant.name}
                    </h3>
                    <p className="text-sm text-muted-foreground italic mb-3">
                      {plant.scientificName}
                    </p>
                    <p className="text-foreground mb-4">
                      {plant.description}
                    </p>
                    
                    <div className="space-y-3 pt-4 border-t border-border">
                      <div className="flex items-start gap-2">
                        <Sun className="w-5 h-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-foreground">Light</p>
                          <p className="text-sm text-muted-foreground">{plant.careTips.light}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Droplets className="w-5 h-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-foreground">Water</p>
                          <p className="text-sm text-muted-foreground">{plant.careTips.water}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-2">
                        <Info className="w-5 h-5 text-accent-foreground mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-sm text-foreground">Difficulty</p>
                          <p className="text-sm text-muted-foreground">{plant.careTips.difficulty}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/quiz">
              <Button variant="hero" size="lg">
                Retake Quiz
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline" size="lg">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Results;
