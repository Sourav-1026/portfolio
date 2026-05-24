import Image from "next/image";
import { FaCode, FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { MdRocketLaunch } from "react-icons/md";
import profileImage from "../../public/portfolio-Image.jpeg";

const AboutMe = () => {
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

  return (
    <section
      id="about"
      className="bg-[#0a1628] py-16 sm:py-24 px-4 sm:px-6 max-w-7xl w-full mx-auto my-6 sm:my-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="mb-10 sm:mb-16 flex flex-col items-start gap-2 sm:gap-3">
          <span className="text-[#38bdf8] text-xs font-semibold uppercase tracking-[0.2em]">
            Get to know me
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            About <span className="text-[#38bdf8]">Me</span>
          </h2>
          <div className="w-10 sm:w-12 h-0.5 bg-[#38bdf8]/50 rounded-full" />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* LEFT — content */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Bio */}
            <div className="flex flex-col gap-3 sm:gap-4">
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
            </div>

            {/* Highlight cards */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
              {highlights.map(({ icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3 sm:p-4 rounded-xl bg-[#0f2040] border border-[#1e3a5f]"
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
                </div>
              ))}
            </div>

            {/* Status badge */}
            <div className="flex items-center gap-2 w-fit px-3 sm:px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-emerald-400 text-xs sm:text-sm font-medium leading-snug">
                Currently open to internships & opportunities
              </span>
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="flex justify-center lg:justify-end mt-4 sm:mt-0">
            <div className="relative w-60 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96">
              {/* Decorative border offset */}
              <div className="absolute -top-3 -right-3 w-full h-full rounded-2xl border-2 border-[#38bdf8]/20" />

              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-[#1e3a5f] bg-[#0f2040]">
                <Image
                  src={profileImage}
                  alt="MD. Omar Faruque Sourav"
                  fill
                  className="object-cover"
                  priority
                />

                {/* Fallback placeholder */}
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0f2040]">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#38bdf8]/10 border border-[#38bdf8]/30 flex items-center justify-center">
                    <span className="text-[#38bdf8] text-xl sm:text-2xl font-bold">
                      OF
                    </span>
                  </div>
                  <p className="text-slate-500 text-xs">Add your photo here</p>
                </div> */}
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#0f2040] border border-[#1e3a5f] rounded-xl px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                <FaCode className="text-[#38bdf8]" size={14} />
                <div>
                  <p className="text-white text-xs sm:text-sm font-semibold leading-none">
                    MERN Stack
                  </p>
                  <p className="text-slate-500 text-xs mt-0.5">Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
