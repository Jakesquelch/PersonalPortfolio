import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { EXPERIENCE } from "@/lib/constants";

export function AboutSection() {
  const { ref, hasIntersected } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-b from-darker to-dark dark:from-darker dark:to-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-electric to-purple bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer with a strong foundation in computer science and hands-on experience in backend development.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <div className="prose prose-invert max-w-none">
                <p className="text-lg text-gray-300 leading-relaxed">
                  I'm a dedicated Computer Science student at Aston University with 6 months of backend software engineering experience. 
                  My journey in technology is driven by curiosity and a passion for solving complex problems through elegant code.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in backend development and have worked on various projects that showcase my ability to build 
                  scalable and efficient software solutions. I'm always eager to learn new technologies and take on challenging projects.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="text-3xl font-bold text-electric mb-2">6</div>
                  <div className="text-gray-400">Months Experience</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={hasIntersected ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                >
                  <div className="text-3xl font-bold text-purple mb-2">12+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={hasIntersected ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Experience & Education</h3>

            {EXPERIENCE.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={hasIntersected ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="relative pl-8 border-l-2 border-electric/30"
              >
                <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${
                  experience.color === 'electric' ? 'bg-electric' : 
                  experience.color === 'purple' ? 'bg-purple' : 'bg-pink'
                }`} />
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-electric/30 transition-colors duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="text-lg font-semibold text-white">{experience.title}</h4>
                    <span className={`text-sm ${
                      experience.color === 'electric' ? 'text-electric' : 
                      experience.color === 'purple' ? 'text-purple' : 'text-pink'
                    }`}>
                      {experience.duration}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-2">{experience.company}</p>
                  <p className="text-gray-300">{experience.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
