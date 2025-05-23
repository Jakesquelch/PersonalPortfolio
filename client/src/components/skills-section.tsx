import { motion } from "framer-motion";
import { Server, Code, Settings } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { SKILLS } from "@/lib/constants";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

interface SkillGroupProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; level: number }>;
  color: string;
  delay: number;
  hasIntersected: boolean;
}

function SkillGroup({ title, icon, skills, color, delay, hasIntersected }: SkillGroupProps) {
  const [animatedSkills, setAnimatedSkills] = useState(skills.map(skill => ({ ...skill, animatedLevel: 0 })));

  useEffect(() => {
    if (hasIntersected) {
      const timer = setTimeout(() => {
        setAnimatedSkills(skills.map(skill => ({ ...skill, animatedLevel: skill.level })));
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [hasIntersected, skills, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-electric/30 transition-all duration-300 hover:scale-105"
    >
      <div className="flex items-center mb-6">
        <div className={`text-2xl ${color} mr-3`}>
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {animatedSkills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: delay + index * 0.1 }}
            className="skill-item"
          >
            <div className="flex justify-between mb-2">
              <span className="text-gray-300">{skill.name}</span>
              <span className={color}>{skill.level}%</span>
            </div>
            <Progress 
              value={animatedSkills[index].animatedLevel} 
              className="h-2"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-20 bg-dark dark:bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-electric to-purple bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillGroup
            title="Backend Development"
            icon={<Server />}
            skills={SKILLS.backend}
            color="text-electric"
            delay={0.2}
            hasIntersected={hasIntersected}
          />
          
          <SkillGroup
            title="Frontend Development"
            icon={<Code />}
            skills={SKILLS.frontend}
            color="text-purple"
            delay={0.4}
            hasIntersected={hasIntersected}
          />
          
          <SkillGroup
            title="Tools & Other"
            icon={<Settings />}
            skills={SKILLS.tools}
            color="text-pink"
            delay={0.6}
            hasIntersected={hasIntersected}
          />
        </div>
      </div>
    </section>
  );
}
