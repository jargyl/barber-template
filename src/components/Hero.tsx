import React from "react";
import { Instagram } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const currentMonth = new Date()
    .toLocaleString("default", { month: "short" })
    .toUpperCase();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-zinc-900 text-white overflow-hidden"
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg"
          alt="Barber Shop"
          className="w-full h-full object-cover opacity-50"
        />
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
          variants={itemVariants}
        >
          𝙷𝚘𝚖𝚎 𝚋𝚊𝚜𝚎𝚍 𝚋𝚊𝚛𝚋𝚎𝚛
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl mb-8 text-zinc-200"
          variants={itemVariants}
        >
          Crafting confidence through precision cuts
        </motion.p>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl mb-8 font-mono"
          variants={itemVariants}
        >
          𝙳𝙼 𝚝𝚘 𝚋𝚘𝚘𝚔 𝚢𝚘𝚞𝚛 𝚊𝚙𝚙𝚘𝚒𝚗𝚝𝚖𝚎𝚗𝚝 𝚏𝚘𝚛 {currentMonth}
        </motion.p>
        <motion.a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-zinc-900 transition-colors"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <Instagram className="mr-2 h-5 w-5" />
          Book on Instagram
        </motion.a>
      </motion.div>

      {/* Animated scroll-down indicator */}
      <motion.button
        onClick={() => {
          const about = document.getElementById("about");
          if (about) about.scrollIntoView({ behavior: "smooth" });
        }}
        className="hidden md:flex flex-col items-center absolute bottom-8 left-1/2 -translate-x-1/2 z-20 group"
        initial={{ y: 0 }}
        animate={{ y: [0, 16, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        aria-label="Scroll to About"
      >
        <svg
          width="28"
          height="28"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="text-white opacity-80 group-hover:text-pink-400 transition-colors"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <span className="sr-only">Scroll down</span>
      </motion.button>
    </section>
  );
};

export default Hero;
