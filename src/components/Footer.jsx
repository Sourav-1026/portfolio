import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Button } from "@heroui/react";
import ModalContactMe from "./ModalContactMe";
import EmailModal from "./EmailModal";

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
    <section className="bg-[#0f172a] text-white py-14 sm:py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-8 sm:gap-10">
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            {"That's all about me."} <br />
            <span className="text-[#38bdf8]">Let me know</span> if you want to
            hire me.
          </h2>
        </div>

        <div className="w-16 h-0.5 bg-[#38bdf8] rounded-full" />

        {/* Email CTA */}
        <EmailModal />

        {/* Social links */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {socialLinks.map(({ icon, label, url }) => (
            <Link
              key={label}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1e3a5f] bg-[#172032] text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8] hover:bg-[#0f2a45] transition-all duration-300 text-sm font-medium"
            >
              {icon}
              {label}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-slate-500 text-xs sm:text-sm text-center">
          © {currentYear} MD. OMAR FARUQUE SOURAV. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
