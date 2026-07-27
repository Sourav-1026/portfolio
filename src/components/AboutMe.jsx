"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import profileImage from "../../public/portfolio-Image.jpeg";

const highlights = [
  {
    icon: <FaGraduationCap size={18} />,
    label: "Education",
    value: "Computer Science Engineering",
  },
  {
    icon: <FaLaptopCode size={18} />,
    label: "Specialty",
    value: "MERN Stack Development",
  },
  {
    icon: <MdRocketLaunch size={18} />,
    label: "Goal",
    value: "Professional Software Developer",
  },
  {
    icon: <FaCode size={18} />,
    label: "Passion",
    value: "Building things with code",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-[#0a1628] py-16 sm:py-24 px-4 sm:px-6 max-w-7xl w-full mx-auto my-6 sm:my-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mb-10 sm:mb-16 flex flex-col items-start gap-2 sm:gap-3"
        >
          <span className="text-[#38bdf8] text-xs font-semibold uppercase tracking-[0.2em]">
            Get to know me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            About <span className="text-[#38bdf8]">Me</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="h-0.5 bg-[#38bdf8]/50 rounded-full"
          />
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* LEFT — content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerStagger}
            className="flex flex-col gap-6 sm:gap-8"
          >
            {/* Bio */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-3 sm:gap-4"
            >
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Hi, I'm{" "}
                <span className="text-white font-semibold">
                  MD. Omar Faruque Sourav
                </span>{" "}
                — a Computer Science Engineering student with a deep passion for
                software development. I'm on a journey to grow from a curious
                learner into a skilled software developer.
              </p>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                I'm currently working with the MERN stack — MongoDB, Express,
                React, and Node.js — exploring how things work under the hood,
                one project at a time. Coding isn't just what I do; it's what I
                genuinely enjoy.
              </p>
            </motion.div>

            {/* Highlight cards */}
            <motion.div
              variants={containerStagger}
              className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4"
            >
              {highlights.map(({ icon, label, value }) => (
                <motion.div
                  key={label}
                  variants={cardVariants}
                  whileHover={{
                    y: -4,
                    borderColor: "rgba(56,189,248,0.5)",
                    backgroundColor: "rgba(15,32,64,0.9)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-[#0f2040]/70 backdrop-blur-sm border border-[#1e3a5f]"
                >
                  <span className="text-[#38bdf8] mt-0.5 shrink-0">{icon}</span>
                  <div>
                    <p className="text-slate-500 text-xs uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <p className="text-slate-200 text-sm font-medium leading-snug">
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Status badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 w-fit px-3 sm:px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-emerald-400 text-xs sm:text-sm font-medium leading-snug">
                Currently open to internships & opportunities
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 24 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-end mt-4 sm:mt-0"
          >
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 20 }}
              className="relative w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96"
            >
              {/* Ambient glow behind image */}
              <div className="absolute -inset-4 bg-[#38bdf8]/10 rounded-3xl blur-2xl" />

              {/* Decorative border offset */}
              <motion.div
                initial={{ opacity: 0, x: -8, y: -8 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-[#38bdf8]/20"
              />

              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#1e3a5f] bg-[#0f2040] shadow-2xl shadow-black/40">
                <Image
                  src={profileImage}
                  alt="MD. Omar Faruque Sourav"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-linear-to-t from-[#0a1628]/60 via-transparent to-transparent" />
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-4 -left-4 bg-[#0f2040]/90 backdrop-blur-md border border-[#1e3a5f] rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 shadow-lg shadow-black/30"
              >
                <FaCode className="text-[#38bdf8]" size={14} />
                <div>
                  <p className="text-white text-xs sm:text-sm font-semibold leading-none">
                    MERN Stack
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">Developer</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
