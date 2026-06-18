import { useState, useEffect } from "react";
import { ProjectCard } from "./components/ProjectCard";
import { CharacterChat } from "./components/CharacterChat";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import factoryInterface from "../../media/thumbnail/factoryInterface.png";
import compGameplay from "../../media/thumbnail/compGameplay.png";
import cryptoDashboard from "../../media/thumbnail/cryptoDashboard.png";
import cardGame from "../../media/thumbnail/cardGame.png";
import portfolio from "../../media/thumbnail/portfolio.png";
import beerInterface from "../../media/thumbnail/beerInterface.png";

export default function App() {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const onScroll = () => {
      const opacity = Math.max(0, 1 - window.scrollY / 200);
      setScrollOpacity(opacity);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const projects = [
    {
        title: "Factory Management System",
        description: "Component-based system written in JPMS(Back-end) and React(Front-end), where the user can CRUD components at runtime without recompilation. This solution is meant for factories that seek a modifiable program to automate processes.",
        technologies: ["JPMS", "React", "PostgreSQL", "SOAP", "REST" , "MQTT"],
        thumbnailUrl: factoryInterface,
        githubUrl: "https://github.com/Ltechsystem/Semesterproject_4_Java",
    },
    {
        title: "Component-based Asteroids Game",
        description: "Asteroids game built with a Component-based core. The game is built with low coupling/high cohesion; components can be changed and added at runtime without recompilation. ",
        technologies: ["JPMS", "JavaFX", "Microservice", "REST"],
        thumbnailUrl: compGameplay,
        githubUrl: "https://github.com/Ltechsystem/AstroidGame",
    },
    {
        title: "Crypto Dashboard",
        description: "Using Kraken's public REST API, the solution fetches data every 30s directly into a local database and displays the local data. The data is displayed with a graph that shows price over time and can compare datasets(percentile), compared with the '+' sign in the table below. ",
        technologies: ["C#", "Blazor/ASP.NET Core", "SQLite" , "REST"],
        thumbnailUrl: cryptoDashboard,
        githubUrl: "https://github.com/Ltechsystem/Semesterproject_4_Java",
    },
    {
        title: "Card Game",
        description: "A collection of classic card games with an in-game currency. The user can battle the computer with different difficulty levels and win different prices.",
        technologies: ["C#", "Avalonia", "SQLite"],
        thumbnailUrl: cardGame,
        githubUrl: "https://github.com/Ltechsystem/CardGame",
    },
    {
        title: "Portfolio Website",
        description: "Web application that showcases my projects, skills, and experience. Built with React and TailwindCSS.",
        technologies: ["Node.js", "React" , "TailwindCSS", "Figma"],
        thumbnailUrl: portfolio,
        githubUrl: "https://github.com/Ltechsystem/Projects-portfolio",
        liveUrl: "https://ltechsystem.github.io/Projects-portfolio/",
    },
    {
        title: "Beer Machine Interface",
        description: "Interface to interact with a PLC that controls a Beer Machine. The user can use the solution to queue batches on multiple machines, with an access-based architecture with different roles",
        technologies: ["C#", "Blazor/ASP.NET Core" , "PostgreSQL", "OPC-UA" , "MQTT"],
        thumbnailUrl: beerInterface,
        githubUrl: "https://github.com/Joakim-Aksel-Holm/SemesterProject_3",
    },
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Hero Section */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-12 md:py-20">
          {/* Name + social links */}
          <div className="text-center mb-10">
            <h1 className="mb-2">Hi welcome, I am Joachim Low </h1>
            <div className="flex justify-center gap-6 mt-4">
              <a
                href="https://github.com/Ltechsystem"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/joachim-low-4aba43216/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="mailto:joachimlow02@gmail.com"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>

          {/* Interactive character */}
          <CharacterChat />
        </div>
      </header>

      {/* Bottom fade — fades with scroll */}
      <div
        className="fixed bottom-0 left-0 right-0 h-40 pointer-events-none z-10"
        style={{ opacity: scrollOpacity, background: "linear-gradient(to bottom, transparent, var(--background))" }}
      />

      {/* Scroll hint — sits just below the header divider, fades with scroll */}
      <div
        className="absolute left-0 right-0 flex flex-col items-center gap-1 py-3 text-muted-foreground pointer-events-none z-20"
        style={{ opacity: scrollOpacity }}
      >
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-7 h-7" />
        </motion.div>
        <span className="text-sm">Scroll down to see projects</span>
      </div>

      {/* Projects Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <h2 className="mb-2">Featured Projects</h2>
          <p className="text-muted-foreground">
            Click on the GitHub icon to view the source code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="container mx-auto px-4 py-8">
          <p className="text-center text-muted-foreground">
            © 2026 Joachim Low | Software Engineer Portfolio. Built with React & TailwindCSS.
          </p>
        </div>
      </footer>
    </div>
  );
}