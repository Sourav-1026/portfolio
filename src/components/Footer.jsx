"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@heroui/react";
import ModalContactMe from "./ModalContactMe";
import EmailModal from "./EmailModal";

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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const socialVariants = {
  hidden: { opacity: 0, y: 16, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub size={18} />,
      label: "GitHub",
      url: "https://github.com/Sourav-1026",
    },
    {
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/md-omar-faruque-sourav",
    },
  ];

  return (
    <section className="relative bg-[#0f172a] text-white py-14 sm:py-16 px-4 sm:px-6 overflow-hidden">
      {/* Ambient glow background */}
      <motion.div
        animate={{
          opacity: [0.05, 0.09, 0.05],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-[#38bdf8] rounded-full blur-3xl pointer-events-none"
      />

      {/* Subtle grid overlay, matches Banner */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerStagger}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-8 sm:gap-10"
      >
        {/* Heading */}
        <motion.div variants={fadeUp} className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            {"That's all about me."} <br />
            <span className="text-[#38bdf8]">Let's build something great.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "4rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="h-0.5 bg-[#38bdf8] rounded-full"
        />

        {/* Email CTA */}
        <motion.div variants={fadeUp}>
          <EmailModal />
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={containerStagger}
          className="flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {socialLinks.map(({ icon, label, url }) => (
            <motion.div key={label} variants={socialVariants}>
              <motion.div
                whileHover={{ y: -4, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Link
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1e3a5f] bg-[#172032]/80 backdrop-blur-sm text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8] hover:bg-[#0f2a45] hover:shadow-lg hover:shadow-[#38bdf8]/10 transition-colors duration-300 text-sm font-medium"
                >
                  {icon}
                  {label}
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Copyright */}
        <motion.p
          variants={fadeUp}
          className="text-slate-500 text-xs sm:text-sm text-center"
        >
          © {currentYear} MD. OMAR FARUQUE SOURAV. All rights reserved.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Footer;
