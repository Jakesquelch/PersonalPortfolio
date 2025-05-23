import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { PROJECTS, SOCIAL_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const filterOptions = [
  { value: "all", label: "All Projects" },
  { value: "backend", label: "Backend" },
  { value: "fullstack", label: "Full Stack" },
  { value: "api", label: "API" },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.1 });

  const filteredProjects = PROJECTS.filter(
    project => activeFilter === "all" || project.category === activeFilter
  );

  return (
    <section id="projects" ref={ref} className="py-20 bg-gradient-to-b from-dark to-darker dark:from-dark dark:to-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-electric to-purple bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my best work and contributions to various software projects.
          </p>
        </motion.div>

        {/* Project Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filterOptions.map((option) => (
            <Button
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
              variant={activeFilter === option.value ? "default" : "outline"}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeFilter === option.value
                  ? "bg-electric text-white"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {option.label}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-electric/30 transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project workspace`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="p-2 rounded-lg bg-white/10 hover:bg-electric/20 transition-colors duration-300"
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="p-2 rounded-lg bg-white/10 hover:bg-electric/20 transition-colors duration-300"
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className={`px-3 py-1 text-sm rounded-full ${
                        techIndex % 3 === 0
                          ? "bg-electric/20 text-electric"
                          : techIndex % 3 === 1
                          ? "bg-purple/20 text-purple"
                          : "bg-pink/20 text-pink"
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            className="inline-flex items-center px-8 py-4 bg-white/10 border border-electric/30 rounded-xl font-semibold hover:bg-electric/10 hover:border-electric transition-all duration-300"
          >
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-3 w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
