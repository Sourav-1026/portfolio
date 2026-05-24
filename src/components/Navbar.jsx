"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import ModalContactMe from "./ModalContactMe";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skill", label: "Skill" },
    { href: "#project", label: "Project" },
  ];

  // Track active section via IntersectionObserver
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.replace("#", ""));
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const linkClass = (href) => {
    const id = href.replace("#", "");
    const isActive = activeSection === id;
    return [
      "relative py-1 text-sm font-medium tracking-wide transition-colors duration-200",
      "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:rounded-full",
      "after:transition-transform after:duration-300 after:origin-left",
      isActive
        ? "text-sky-300 after:bg-sky-400 after:scale-x-100"
        : "text-slate-300 hover:text-white after:bg-sky-400 after:scale-x-0 hover:after:scale-x-100",
    ].join(" ");
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0a1628]/80 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.4)]">
      <header className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-extrabold tracking-widest text-white font-mono">
            MO<span className="text-sky-400">FS</span>
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden sm:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className={linkClass(href)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden sm:block">
          <ModalContactMe />
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-[5px] p-2 group"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 rounded bg-slate-300 transition-all duration-300 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-slate-300 transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 rounded bg-slate-300 transition-all duration-300 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </header>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 pb-4 pt-2 bg-[#0d1f3c] border-t border-white/10">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`block py-2 ${linkClass(href)}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <ModalContactMe />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
