import { H2 } from "@kduprey/ui";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import type { AboutSectionType } from "@/sanity/data/queries/pageQueries/home.queries";

const bioComponents: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => (
      <Link
        className="underline hover:no-underline"
        href={value.href}
        rel="noopener"
        target="_blank"
      >
        {children}
      </Link>
    ),
  },
};

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
      <div className="max-w-md space-y-3 p-3">
        <PortableText components={bioComponents} value={content} />
      </div>
    </div>
  </div>
);
