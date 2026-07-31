"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import ProjectList from "./ProjectList";

import HarborCoreImage from "../assets/projects/harborcore.png";
import ZomatoEtaImage from "../assets/projects/zomato_eta.png";
import HeartDiseaseImage from "../assets/projects/heartdisease.png";
import NotationImage from "../assets/projects/notation.png";
import PathfinderImage from "../assets/projects/pathfinder.png";

const projects = [
  {
    title: "HarborCore",
    href: "https://github.com/deepanshiruhil/Harborcore",
    description:
      "a concurrent reconciliation and analytics system designed to maintain record accuracy under simultaneous updates using pessimistic database locking and database-driven analytics.",
    image: HarborCoreImage,
    imageAlt: "HarborCore",
    technologies: [
      "Python",
      "Streamlit",
      "PostgreSQL",
      "MySQL",
      "SQL",
    ],
    github: "https://github.com/deepanshiruhil/Harborcore",
  },
  {
    title: "Zomato ETA",
    href: "https://github.com/deepanshiruhil/Zomato_ETA",
    description:
      "an operational forecasting model that improved delivery-time prediction across 45k+ orders through feature engineering, ensemble modelling, and leakage-free machine learning pipelines.",
    image: ZomatoEtaImage,
    imageAlt: "Zomato ETA",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "XGBoost",
    ],
    github: "https://github.com/deepanshiruhil/Zomato_ETA",
  },
  {
    title: "Heart Disease Classifier",
    href: "https://github.com/deepanshiruhil/Heart_Disease_Classifier",
    description:
      "a binary classification pipeline for predicting heart disease risk from clinical data using KNN with cross-validated hyperparameter tuning and stratified preprocessing.",
    image: HeartDiseaseImage,
    imageAlt: "Heart Disease Classifier",
    technologies: ["R", "Jupyter Notebook"],
    github: "https://github.com/deepanshiruhil/Heart_Disease_Classifier",
  },
  {
    title: "Notation",
    href: "https://notation-eight.vercel.app",
    description:
      "an end-to-end GenAI document data extraction pipeline using Gemini 2.5 Flash to extract and classify structured information from PDFs and images into editable output.",
    image: NotationImage,
    imageAlt: "Notation",
    technologies: [
      "Gemini 2.5 Flash",
      "GenAI",
      "Document AI",
      "React",
    ],
    github: "https://github.com/deepanshiruhil/notation",
    demo: "https://notation-eight.vercel.app",
  },
  {
    title: "Pathfinder",
    href: "https://pathfinderbydeepanshi.vercel.app",
    description:
      "an interactive algorithm visualizer implementing BFS, DFS, Dijkstra's, and A* from scratch to demonstrate shortest-path and heuristic-driven search trade-offs.",
    image: PathfinderImage,
    imageAlt: "Pathfinder",
    technologies: [
      "TypeScript",
      "React",
      "Chakra UI",
      "Algorithms",
    ],
    github: "https://github.com/deepanshiruhil/Pathfinder",
    demo: "https://pathfinderbydeepanshi.vercel.app",
  },
];

export default function ProjectSearch() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((technology) =>
        technology.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <>
      <div className="relative">
        <Search className="absolute top-2.5 left-3 size-6 text-stone-400" />

        <input
          type="text"
          placeholder="search for a project, technology, etc."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-2 px-4 border border-stone-400 rounded-md bg-transparent focus:outline-none focus:border-stone-700 pl-10"
        />
      </div>

      <ProjectList projects={filtered} />
    </>
  );
}