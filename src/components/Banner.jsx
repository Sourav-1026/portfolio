"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import ModalContactMe from "./ModalContactMe";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const avatarVariants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Banner = () => {
  return (
    <section className="max-w-7xl w-full mx-auto my-10 bg-linear-to-r from-[#0d1f3c] via-black to-[#101d42] flex items-center justify-center px-4 sm:px-6 py-14 sm:py-20 relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow blobs */}
      <motion.div
        animate={{
          opacity: [0.06, 0.1, 0.06],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-[#38bdf8] rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.4, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-[#0d1f3c] rounded-full blur-3xl pointer-events-none"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center gap-6 sm:gap-8"
      >
        {/* Avatar */}
        <motion.div variants={avatarVariants} className="relative">
          <div className="w-22 h-22 sm:w-28 sm:h-28 rounded-full bg-linear-to-br from-[#38bdf8] to-[#0369a1] p-0.5">
            <div className="w-full h-full rounded-full bg-[#0d1f3c] flex items-center justify-center">
              <FaCode size={34} className="text-[#38bdf8] sm:text-[42px]" />
            </div>
          </div>
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-1 right-1 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-emerald-400 rounded-full border-2 border-[#0d1f3c]"
          />
        </motion.div>

        {/* Name & title */}
        <motion.div variants={itemVariants} className="space-y-2 sm:space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
            Md. Omar Faruque <span className="text-[#38bdf8]">Sourav</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 font-medium tracking-wide">
            MERN Stack Developer
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-10 sm:w-12 h-0.5 bg-[#38bdf8]/50 rounded-full"
        />

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="text-slate-400 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-xl leading-relaxed px-2 sm:px-0"
        >
          A newly minted MERN stack developer — still exploring, always
          learning, and building one project at a time.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 pt-2 w-full sm:w-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link
              href="#project"
              className="block w-full sm:w-auto text-center px-7 py-3 rounded-full bg-[#38bdf8] text-[#0d1f3c] font-semibold text-sm hover:bg-[#7dd3fc] transition-colors duration-300"
            >
              View My Work
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full sm:w-auto flex justify-center"
          >
            <Link
              href="https://drive.google.com/file/d/1IPsmjRtC_989VhAeYp08TUzczKDYMg9y/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`
  flex justify-center items-center w-full relative px-5 py-2 rounded-full
  text-sm font-semibold tracking-wide text-sky-300 border border-sky-400/40
  hover:bg-sky-400/10 hover:border-sky-400 hover:text-sky-200
  transition-colors duration-200 overflow-hidden
  before:absolute before:inset-0 before:rounded-full before:opacity-0
  before:bg-linear-to-r before:from-sky-400/0 before:via-sky-400/5 before:to-sky-400/0
  hover:before:opacity-100 before:transition-opacity before:duration-300
`
                .replace(/\s+/g, " ")
                .trim()}
            >
              Resume
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
