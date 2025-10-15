import pothosImg from "@/assets/plants/pothos.jpg";
import snakePlantImg from "@/assets/plants/snake-plant.jpg";
import monsteraImg from "@/assets/plants/monstera.jpg";
import zzPlantImg from "@/assets/plants/zz-plant.jpg";
import spiderPlantImg from "@/assets/plants/spider-plant.jpg";
import fiddleLeafFigImg from "@/assets/plants/fiddle-leaf-fig.jpg";

export type LightLevel = "low" | "medium" | "high";
export type WaterFrequency = "low" | "medium" | "high";
export type PlantSize = "small" | "medium" | "large";

export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  image: string;
  light: LightLevel[];
  water: WaterFrequency[];
  size: PlantSize[];
  careTips: {
    light: string;
    water: string;
    difficulty: string;
  };
}

export const plants: Plant[] = [
  {
    id: "pothos",
    name: "Pothos",
    scientificName: "Epipremnum aureum",
    description: "A versatile, easy-care plant with heart-shaped leaves that cascade beautifully. Perfect for beginners and tolerates various conditions.",
    image: pothosImg,
    light: ["low", "medium"],
    water: ["low", "medium"],
    size: ["small", "medium"],
    careTips: {
      light: "Thrives in low to medium indirect light",
      water: "Water when top 2 inches of soil are dry",
      difficulty: "Very Easy - Perfect for beginners",
    },
  },
  {
    id: "snake-plant",
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    description: "Striking upright leaves with yellow edges. Extremely low-maintenance and excellent air purifier.",
    image: snakePlantImg,
    light: ["low", "medium", "high"],
    water: ["low"],
    size: ["small", "medium"],
    careTips: {
      light: "Tolerates low light to full sun",
      water: "Water sparingly - every 2-3 weeks",
      difficulty: "Very Easy - Nearly indestructible",
    },
  },
  {
    id: "monstera",
    name: "Monstera",
    scientificName: "Monstera deliciosa",
    description: "Iconic tropical plant with large, split leaves. Makes a bold statement in any space.",
    image: monsteraImg,
    light: ["medium", "high"],
    water: ["medium"],
    size: ["medium", "large"],
    careTips: {
      light: "Bright, indirect light preferred",
      water: "Water when top inch of soil is dry",
      difficulty: "Easy - Just needs room to grow",
    },
  },
  {
    id: "zz-plant",
    name: "ZZ Plant",
    scientificName: "Zamioculcas zamiifolia",
    description: "Glossy, dark green leaves on upright stems. Thrives on neglect and tolerates low light.",
    image: zzPlantImg,
    light: ["low", "medium"],
    water: ["low"],
    size: ["small", "medium"],
    careTips: {
      light: "Low to medium indirect light",
      water: "Water every 2-3 weeks",
      difficulty: "Very Easy - Drought tolerant",
    },
  },
  {
    id: "spider-plant",
    name: "Spider Plant",
    scientificName: "Chlorophytum comosum",
    description: "Arching variegated leaves with baby plantlets. Great for hanging baskets and safe for pets.",
    image: spiderPlantImg,
    light: ["medium"],
    water: ["medium"],
    size: ["small", "medium"],
    careTips: {
      light: "Medium, indirect light",
      water: "Water regularly, keep soil moist",
      difficulty: "Easy - Safe for pets",
    },
  },
  {
    id: "fiddle-leaf-fig",
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    description: "Large, violin-shaped leaves create a dramatic focal point. Popular statement plant for bright spaces.",
    image: fiddleLeafFigImg,
    light: ["high"],
    water: ["medium", "high"],
    size: ["large"],
    careTips: {
      light: "Bright, indirect light required",
      water: "Water when top 2 inches dry",
      difficulty: "Moderate - Needs consistent care",
    },
  },
];
