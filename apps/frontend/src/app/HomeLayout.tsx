import type { HomeType } from "@/sanity";
import type { EncodeDataAttributeCallback } from "@sanity/react-loader";

import { About, Contact, Hero, Navbar, Projects, Skills } from "@/components";

interface HomeLayoutProps {
  encodeDataAttribute?: EncodeDataAttributeCallback;
  homeData: HomeType;
}

export const HomeLayout = ({ homeData }: HomeLayoutProps) => {
  return (
    <main className="flex size-full flex-col items-center gap-10 p-6 font-display dark:bg-black dark:text-white">
      <Navbar />
      <Hero />
      <Projects {...homeData.projectsSection} />

      <About {...homeData.aboutSection} />
      <Skills {...homeData.skillsSection} />
      <Contact />

      <p className="text-center dark:text-gray-400">
        &copy; Haus of Web, LLC {new Date().getFullYear()}
      </p>
    </main>
  );
};
