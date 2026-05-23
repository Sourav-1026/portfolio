import AboutMe from "@/components/AboutMe";
import Banner from "@/components/Banner";
import MyProjects from "@/components/MyProjects";
import Skill from "@/components/Skill";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <Skill />
      <MyProjects />
    </>
  );
}
