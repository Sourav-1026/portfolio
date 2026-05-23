import React from 'react';

const skillCategories = [
    {
        category: 'Frontend',
        color: '#38bdf8',
        skills: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'HeroUI'],
    },
    {
        category: 'Backend',
        color: '#34d399',
        skills: ['Node.js', 'Express.js', 'REST API'],
    },
    {
        category: 'Auth',
        color: '#a78bfa',
        skills: ['Better Auth', 'Email Auth', 'Google OAuth'],
    },
    {
        category: 'Database',
        color: '#fb923c',
        skills: ['MongoDB', 'Mongoose'],
    },
];

const Skill = () => {
    return (
        <section id='skill' className="bg-[#0f172a] text-white py-20 px-6 min-w-7xl mx-auto my-10">
            <div className="max-w-4xl mx-auto">

                {/* Section Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        My <span className="text-[#38bdf8]">Skills</span>
                    </h2>
                    <p className="text-[#38bdf8] text-sm font-semibold uppercase tracking-widest mb-2">
                        What I Work With
                    </p>
                </div>

                {/* Skill Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map(({ category, color, skills }) => (
                        <div
                            key={category}
                            className="bg-[#172032] border border-[#1e3a5f] rounded-2xl p-6 hover:border-[#38bdf8] transition-all duration-300"
                        >
                            {/* Category Label */}
                            <div className="flex items-center gap-2 mb-4">
                                <div
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{ backgroundColor: color }}
                                />
                                <span
                                    className="text-xs font-bold uppercase tracking-widest"
                                    style={{ color: color }}
                                >
                                    {category}
                                </span>
                            </div>

                            {/* Skill Badges */}
                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-[#0f172a] text-slate-300 border border-[#1e3a5f] hover:text-white hover:border-slate-400 transition-all duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skill;