"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../../public/data.json";

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
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const MyProjects = () => {
  return (
    <section
      id="project"
      className="bg-[#0a1628] py-16 sm:py-24 px-4 sm:px-6 max-w-7xl w-full mx-auto mb-6 sm:mb-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          className="mb-10 sm:mb-16 flex flex-col items-start gap-2 sm:gap-3"
        >
          <span className="text-[#38bdf8] text-xs font-semibold uppercase tracking-[0.2em]">
            What I've built
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            My <span className="text-[#38bdf8]">Projects</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "3rem" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="h-0.5 bg-[#38bdf8]/50 rounded-full"
          />
        </motion.div>

        {/* Project grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerStagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
        >
          {projects.map((project, ind) => (
            <motion.div
              key={ind}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative flex flex-col rounded-2xl overflow-hidden border border-[#1e3a5f] bg-[#0f2040] hover:border-[#38bdf8]/40 hover:shadow-xl hover:shadow-[#38bdf8]/5 transition-[border-color,box-shadow] duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-44 sm:h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0f2040] via-[#0a1628]/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-5 flex-1">
                <h3 className="text-white text-sm sm:text-base font-semibold leading-snug">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2.5 sm:px-3 py-1 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20 font-medium backdrop-blur-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-[#1e3a5f]" />

                {/* Links */}
                <div className="flex gap-4 sm:gap-5">
                  <Link
                    href={project.grepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-[#38bdf8] text-sm font-medium transition-colors duration-200"
                  >
                    <FaGithub size={15} />
                    GitHub
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-400 hover:text-[#38bdf8] text-sm font-medium transition-colors duration-200"
                  >
                    <FaExternalLinkAlt size={13} />
                    Live Demo
                  </Link>
                </div>
              </div>

              {/* Corner glow on hover */}
              <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 bg-[#38bdf8]/0 group-hover:bg-[#38bdf8]/10 rounded-full blur-3xl transition-colors duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          className="flex justify-center mt-10 sm:mt-14"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Link
              href="https://github.com/Sourav-1026?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 sm:px-8 py-3 rounded-full border border-[#38bdf8]/40 text-[#38bdf8] text-sm font-semibold hover:bg-[#38bdf8]/10 hover:border-[#38bdf8] transition-colors duration-300"
            >
              <FaGithub size={16} />
              View More on GitHub
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MyProjects;
