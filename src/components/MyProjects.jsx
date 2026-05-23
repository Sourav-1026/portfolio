import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projects from '../../public/data.json';

const MyProjects = () => {
    return (
        <section id='project' className="bg-[#0a1628] py-24 px-6 min-w-7xl mx-auto mb-10">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <div className="mb-16 flex flex-col items-start gap-3">
                    <span className="text-[#38bdf8] text-xs font-semibold uppercase tracking-[0.2em]">
                        What I've built
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white">
                        My <span className="text-[#38bdf8]">Projects</span>
                    </h2>
                    <div className="w-12 h-0.5 bg-[#38bdf8]/50 rounded-full" />
                </div>

                {/* Project grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, ind) => (
                        <div
                            key={ind}
                            className="group flex flex-col rounded-2xl overflow-hidden border border-[#1e3a5f] bg-[#0f2040] hover:border-[#38bdf8]/40 transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative w-full h-48 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-[#0a1628]/30" />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-4 p-5 flex-1">
                                <h3 className="text-white text-base font-semibold leading-snug">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="text-xs px-3 py-1 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/20 font-medium"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-[#1e3a5f]" />

                                {/* Links */}
                                <div className="flex gap-4">
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
                        </div>
                    ))}
                </div>

                {/* View More */}
                <div className="flex justify-center mt-14">
                    <Link
                        href="https://github.com/Sourav-1026?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-3 rounded-full border border-[#38bdf8]/40 text-[#38bdf8] text-sm font-semibold hover:bg-[#38bdf8]/10 hover:border-[#38bdf8] transition-all duration-300"
                    >
                        <FaGithub size={16} />
                        View More on GitHub
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default MyProjects;