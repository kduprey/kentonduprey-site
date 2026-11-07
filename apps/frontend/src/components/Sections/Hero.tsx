import { Button, H2, Lead } from "@kduprey/ui";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { HeroSectionType } from "@/sanity/data/queries/pageQueries/home.queries";

export const Hero = ({
  buttonText,
  headerText,
  subHeaderText,
}: HeroSectionType) => (
  <div className="flex flex-col items-center justify-around gap-4">
    <Lead>{headerText}</Lead>
    <H2 className="text-center">{subHeaderText}</H2>

    <Link className="pr-1" href="/#contact">
      <Button
        className="flex flex-row items-center justify-evenly gap-1"
        type="button"
      >
        {buttonText}
        <FaArrowRight />
      </Button>
    </Link>
  </div>
);
