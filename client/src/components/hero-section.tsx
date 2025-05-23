import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "@/lib/constants";
import profileImage from "@assets/phonto.jpg";

export function HeroSection() {
  const handleNavClick = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-darker dark:bg-darker">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-purple/20 to-pink/20" />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="animate-fade-in"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <img
                src={profileImage}
                alt="Jake Squelch Professional Photo"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-electric/30 animate-glow"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-electric/20 to-purple/20" />
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="block text-white dark:text-white">Hi, I'm</span>
            <motion.span
              className="block bg-gradient-to-r from-electric via-purple to-pink bg-clip-text text-transparent animate-float"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Jake Squelch
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Computer Science Student & Aspiring Software Engineer at Aston University
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Passionate about creating innovative solutions with 6 months of backend development experience and a drive to build impactful software.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              onClick={() => handleNavClick("projects")}
              className="group px-8 py-4 bg-gradient-to-r from-electric to-purple rounded-xl font-semibold hover:shadow-2xl hover:shadow-electric/25 transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
            <Button
              variant="outline"
              onClick={() => handleNavClick("contact")}
              className="px-8 py-4 border-2 border-electric/30 rounded-xl font-semibold hover:bg-electric/10 hover:border-electric transition-all duration-300"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="flex justify-center space-x-6"
          >
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/10 hover:bg-electric/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin className="w-6 h-6 group-hover:text-electric transition-colors duration-300" />
            </motion.a>
            <motion.a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-full bg-white/10 hover:bg-electric/20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-6 h-6 group-hover:text-electric transition-colors duration-300" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center cursor-pointer"
          onClick={() => handleNavClick("about")}
        >
          <ChevronDown className="w-4 h-6 text-white/60 mt-2" />
        </motion.div>
      </motion.div>
    </section>
  );
}
