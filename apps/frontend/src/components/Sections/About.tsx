import Image from "next/image";
import { H2, P } from "@/components/Typography";
import type { AboutSectionType } from "@/sanity/data/queries/pageQueries/home.queries";

export const About = ({ bioImage, content, headerText }: AboutSectionType) => (
  <div
    className="flex w-full flex-col items-center justify-center gap-5"
    id="about"
  >
    <H2 className="text-center">{headerText}</H2>
    <div className="flex flex-col items-center justify-evenly gap-8 text-justify md:flex-row md:text-left">
      <div className="max-w-72">
        <Image
          alt="Kenton Duprey"
          className="rounded-full dark:border dark:border-white"
          height={bioImage.dimensions.height}
          src={bioImage.src}
          style={{
            height: "auto",
            maxWidth: "100%",
          }}
          width={bioImage.dimensions.width}
        />
      </div>
      <P className="max-w-md p-3">{content}</P>
    </div>
  </div>
);
