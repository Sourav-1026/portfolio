import Link from 'next/link';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const contactLinks = [
        {
            icon: <MdEmail size={20} />,
            label: 'Email',
            url: 'mailto:omarsourov@gmail.com',
            external: false,
        },
        {
            icon: <FaGithub size={20} />,
            label: 'GitHub',
            url: 'https://github.com/Sourav-1026',
            external: true,
        },
        {
            icon: <FaLinkedin size={20} />,
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/md-omar-faruque-sourav',
            external: true,
        },
    ];

    return (
        <section className="bg-[#0f172a] text-white py-16 px-6">
            <div className="max-w-3xl mx-auto flex flex-col items-center gap-10">

                <div className="text-center space-y-3">
                    <p className="text-[#38bdf8] text-sm font-semibold uppercase tracking-widest">
                        Open to Opportunities
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold leading-snug">
                        {"That's all about me."} <br />
                        <span className="text-[#38bdf8]">Let me know</span> if you want to hire me.
                    </h2>
                </div>

                <div className="w-16 h-0.5 bg-[#38bdf8] rounded-full" />

                <div className="flex flex-wrap justify-center gap-4">
                    {contactLinks.map(({ icon, label, url, external }) => (
                        <Link
                            key={label}
                            href={url}
                            target={external ? '_blank' : undefined}
                            rel={external ? 'noopener noreferrer' : undefined}
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#1e3a5f] bg-[#172032] text-slate-300 hover:text-[#38bdf8] hover:border-[#38bdf8] hover:bg-[#0f2a45] transition-all duration-300 text-sm font-medium"
                        >
                            {icon}
                            {label}
                        </Link>
                    ))}
                </div>

                <p className="text-slate-500 text-sm text-center">
                    © {currentYear} MD. OMAR FARUQUE SOURAV. All rights reserved.
                </p>

            </div>
        </section>
    );
};

export default Footer;