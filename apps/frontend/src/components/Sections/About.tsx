import type { AboutSectionType } from "@/sanity";

import Image from "next/image";

export const About = ({ bioImage, content, headerText }: AboutSectionType) => {
  return (
    <div
      className="flex w-full flex-col items-center justify-center gap-5"
      id="about"
    >
      <h2 className="text-center font-bold">{headerText}</h2>
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
        <p className="max-w-md p-3">{content}</p>
      </div>
    </div>
  );
};
