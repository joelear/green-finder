import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Sun, Droplets, Maximize2 } from "lucide-react";
import type { LightLevel, WaterFrequency, PlantSize } from "@/data/plants";

const Quiz = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [preferences, setPreferences] = useState({
    light: null as LightLevel | null,
    water: null as WaterFrequency | null,
    size: null as PlantSize | null,
  });

  const handleSelect = (type: keyof typeof preferences, value: string) => {
    setPreferences({ ...preferences, [type]: value });
    if (step < 3) {
      setTimeout(() => setStep(step + 1), 300);
    } else {
      setTimeout(() => {
        navigate("/results", { 
          state: { 
            light: value === "light" ? value : preferences.light,
            water: value === "water" ? value : preferences.water,
            size: value === "size" ? value : preferences.size,
          } 
        });
      }, 300);
    }
  };

  const questions = [
    {
      step: 1,
      icon: Sun,
      title: "How much light does your space get?",
      options: [
        { value: "low", label: "Low Light", description: "North-facing or rooms away from windows" },
        { value: "medium", label: "Medium Light", description: "East or west-facing windows" },
        { value: "high", label: "Bright Light", description: "South-facing with plenty of natural light" },
      ],
      type: "light" as const,
    },
    {
      step: 2,
      icon: Droplets,
      title: "How often do you want to water?",
      options: [
        { value: "low", label: "Rarely", description: "Every 2-3 weeks is perfect" },
        { value: "medium", label: "Regularly", description: "Weekly watering works for me" },
        { value: "high", label: "Often", description: "I enjoy frequent plant care" },
      ],
      type: "water" as const,
    },
    {
      step: 3,
      icon: Maximize2,
      title: "What size plant are you looking for?",
      options: [
        { value: "small", label: "Small", description: "Desk or shelf-sized plants" },
        { value: "medium", label: "Medium", description: "Table or small floor plants" },
        { value: "large", label: "Large", description: "Statement floor plants" },
      ],
      type: "size" as const,
    },
  ];

  const currentQuestion = questions[step - 1];
  const Icon = currentQuestion.icon;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        {/* Progress Indicator */}
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`h-2 flex-1 mx-1 rounded-full transition-all duration-300 ${
                  s <= step ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground">
            Question {step} of 3
          </p>
        </div>

        {/* Question Card */}
        <Card className="p-8 shadow-lg">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <Icon className="w-8 h-8 text-accent-foreground" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">
            {currentQuestion.title}
          </h2>

          <div className="space-y-4">
            {currentQuestion.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleSelect(currentQuestion.type, option.value)}
                className="w-full p-6 border-2 border-border rounded-xl hover:border-primary hover:bg-accent/5 transition-all duration-200 text-left group"
              >
                <div className="font-semibold text-lg mb-1 text-foreground group-hover:text-primary transition-colors">
                  {option.label}
                </div>
                <div className="text-muted-foreground text-sm">
                  {option.description}
                </div>
              </button>
            ))}
          </div>

          {step > 1 && (
            <div className="mt-6 text-center">
              <Button
                variant="ghost"
                onClick={() => setStep(step - 1)}
              >
                Go Back
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
