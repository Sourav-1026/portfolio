"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGoogle,
} from "react-icons/si";
import {
  TbApi,
  TbShieldLock,
  TbMail,
  TbLayoutGrid,
  TbDatabase,
} from "react-icons/tb";

const skillCategories = [
  {
    category: "Frontend",
    color: "#38bdf8",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Framer Motion", icon: SiFramer },
      { name: "HeroUI", icon: TbLayoutGrid },
    ],
  },
  {
    category: "Backend",
    color: "#34d399",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST API", icon: TbApi },
    ],
  },
  {
    category: "Auth",
    color: "#a78bfa",
    skills: [
      { name: "Better Auth", icon: TbShieldLock },
      { name: "Email Auth", icon: TbMail },
      { name: "Google OAuth", icon: SiGoogle },
    ],
  },
  {
    category: "Database",
    color: "#fb923c",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Mongoose", icon: TbDatabase },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const badgeContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

const Skill = () => {
  return (
    <section
      id="skill"
      className="bg-[#0f172a] text-white py-14 sm:py-20 px-4 sm:px-6 max-w-7xl w-full mx-auto my-6 sm:my-10"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-6">
            My <span className="text-[#38bdf8]">Skills</span>
          </h2>
          <p className="text-[#38bdf8] text-xs sm:text-sm font-semibold uppercase tracking-widest mb-2">
            What I Work With
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
        >
          {skillCategories.map(({ category, color, skills }) => (
            <motion.div
              key={category}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="bg-[#172032] border border-[#1e3a5f] rounded-2xl p-4 sm:p-6 hover:border-[#38bdf8] transition-colors duration-300"
            >
              {/* Category Label */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div
                  className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: color }}
                />
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color }}
                >
                  {category}
                </span>
              </div>

              {/* Skill Badges */}
              <motion.div
                variants={badgeContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap gap-1.5 sm:gap-2"
              >
                {skills.map(({ name, icon: Icon }) => (
                  <motion.span
                    key={name}
                    variants={badgeVariants}
                    whileHover={{ scale: 1.06, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium rounded-lg bg-[#0f172a] text-slate-300 border border-[#1e3a5f] hover:text-white hover:border-slate-400 transition-colors duration-200"
                  >
                    <Icon size={14} style={{ color }} className="shrink-0" />
                    {name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;
