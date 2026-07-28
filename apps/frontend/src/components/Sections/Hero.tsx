import { FaArrowRight } from "react-icons/fa";
import { H2, Lead } from "@/components/Typography";

export const Hero = () => (
  <div className="flex flex-col items-center justify-around">
    <Lead className="py-3">Hi, I&apos;m Kenton 👋</Lead>
    <H2 className="py-3 text-center">
      Building elegant web solutions <br /> for clients and companies
    </H2>

    <button className="flex flex-row items-center justify-evenly" type="button">
      <a href="#contact">Connect with Me</a>
      <FaArrowRight className="pl-1" />
    </button>
  </div>
);
