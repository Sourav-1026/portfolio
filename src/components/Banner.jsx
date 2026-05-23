import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';
import { Button } from '@heroui/react';

const Banner = () => {
    

    return (
        <section className="min-w-7xl mx-auto my-10 bg-linear-to-r from-[#0d1f3c] via-black to-[#101d42] flex items-center justify-center px-6 py-20 relative overflow-hidden">

            {/* Subtle grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(to right, #38bdf8 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            {/* Glow blobs */}
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#38bdf8] opacity-[0.06] rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0d1f3c] opacity-[0.3] rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-3xl w-full flex flex-col items-center text-center gap-8">

                {/* Avatar */}
                <div className="relative">
                    <div className="w-28 h-28 rounded-full bg-linear-to-br from-[#38bdf8] to-[#0369a1] p-0.5">
                        <div className="w-full h-full rounded-full bg-[#0d1f3c] flex items-center justify-center">
                            <FaCode size={42} className="text-[#38bdf8]" />
                        </div>
                    </div>
                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-400 rounded-full border-2 border-[#0d1f3c]" />
                </div>

                

                {/* Name & title */}
                <div className="space-y-3">
                    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                        MD. Omar Faruque{' '}
                        <span className="text-[#38bdf8]">Sourav</span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-400 font-medium tracking-wide">
                        MERN Stack Developer
                    </p>
                </div>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-[#38bdf8]/50 rounded-full" />

                {/* Bio */}
                <p className="text-slate-400 text-base md:text-lg max-w-xl leading-relaxed">
                    A newly minted MERN stack developer — still exploring, always learning,
                    and building one project at a time.
                </p>

                {/* CTA buttons */}
                <div className="flex flex-wrap justify-center gap-4 pt-2">
                    <Link
                        href="#project"
                        className="px-7 py-3 rounded-full bg-[#38bdf8] text-[#0d1f3c] font-semibold text-sm hover:bg-[#7dd3fc] transition-all duration-300"
                    >
                        View My Work
                    </Link>
                    <Button
                        className="px-7 py-5 rounded-full bg-transparent border border-[#38bdf8]/40 text-[#38bdf8] font-semibold text-sm hover:bg-[#38bdf8]/10 hover:border-[#38bdf8] transition-all duration-300"
                    >
                        Contact Me
                    </Button>
                </div>

                

            </div>
        </section>
    );
};

export default Banner;