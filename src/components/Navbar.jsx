import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#skill">Skill</Link>
      </li>
      <li>
        <Link href="#project">Project</Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center gap-3">
          {/* <Logo /> */}
          <p className="font-bold">ACME</p>
        </div>
        <ul className="flex items-center gap-4">
            {links}
        </ul>
        <Button className="px-7 py-5 rounded-full bg-blue-950 border border-[#38bdf8]/40 text-[#38bdf8] font-semibold text-sm hover:bg-[#38bdf8]/10 hover:border-[#38bdf8] transition-all duration-300">Contact Me</Button>
      </header>
    </nav>
  );
};

export default Navbar;
