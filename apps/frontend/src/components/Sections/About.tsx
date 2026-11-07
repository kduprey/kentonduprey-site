import { H2 } from "@kduprey/ui";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import type { PropsWithChildren, ReactNode } from "react";
import type { AboutSectionType } from "@/sanity/data/queries/pageQueries/home.queries";

const linkMark = ({
  children,
  value,
}: PropsWithChildren<{ value?: { href: string } }>): ReactNode => (
  <Link
    className="underline hover:no-underline"
    href={value?.href ?? ""}
    rel="noopener"
    target="_blank"
  >
    {children}
  </Link>
);

const bioComponents: PortableTextComponents = {
  marks: {
    link: linkMark,
  },
};

// aboutSection.content used to be a plain string before it became Portable
// Text (HOW-191); documents not yet migrated still have the old shape.
const isLegacyStringContent = (value: unknown): value is string =>
  typeof value === "string";

export const About = ({ bioImage, content, headerText }: AboutSectionType) => (
  <div className="flex w-full flex-col items-center justify-center" id="about">
    <H2 className="text-center">{headerText}</H2>
    <div className="flex flex-col items-center justify-center gap-4 md:text-left lg:flex-row">
      <div className="max-w-36 lg:min-w-48">
        <Image
          alt="Kenton Duprey"
          className="rounded-full border border-gray-200 dark:border-white"
          height={bioImage.dimensions.height}
          src={bioImage.src}
          style={{
            height: "auto",
            maxWidth: "100%",
          }}
          width={bioImage.dimensions.width}
        />
      </div>
      <div className="min-w-0 max-w-3xl space-y-3 p-3 **:text-pretty">
        {isLegacyStringContent(content) ? (
          <p>{content}</p>
        ) : (
          <PortableText components={bioComponents} value={content} />
        )}
      </div>
    </div>
  </div>
);
