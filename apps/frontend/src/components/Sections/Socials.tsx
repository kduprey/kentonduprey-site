import type { NextComponentType } from "next";

import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

export const Socials: NextComponentType = () => {
  return (
    <div className="flex items-center justify-center py-8">
      <a className="p-2" href="https://github.com/kduprey">
        <FaGithub className="text-4xl transition-colors ease-in hover:text-gray-700" />
      </a>
      <a className="p-2" href="https://www.instagram.com/kentond18/">
        <FaInstagram className="text-4xl transition-colors ease-in hover:text-gray-700" />
      </a>
      <a className="p-2" href="https://twitter.com/kentond18">
        <FaTwitter className="text-4xl transition-colors ease-in hover:text-gray-700" />
      </a>
    </div>
  );
};
