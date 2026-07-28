import { Muted } from "@kduprey/ui";
import { About } from "@/components/Sections/About";
import { Contact } from "@/components/Sections/Contact";
import { Hero } from "@/components/Sections/Hero";
import { Navbar } from "@/components/Sections/Navbar";
import { Projects } from "@/components/Sections/Projects";
import type { HomeType } from "@/sanity/data/queries/pageQueries/home.queries";

interface HomeLayoutProps {
  homeData: HomeType;
}

export const HomeLayout = ({ homeData }: HomeLayoutProps) => (
  <main className="flex size-full flex-col items-center gap-10 p-6 font-display dark:bg-black dark:text-white">
    <Navbar />
    <Hero />
    <Projects {...homeData.projectsSection} />

    <About {...homeData.aboutSection} />
    <Contact />

    <Muted className="text-center dark:text-gray-400">
      &copy; Haus of Web, LLC {new Date().getFullYear()}
    </Muted>
  </main>
);
