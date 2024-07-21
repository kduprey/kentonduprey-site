import type { IconBaseProps } from "react-icons";

import dynamic from "next/dynamic";
import { FaRegCircle } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import { SiReact } from "react-icons/si";

interface IconProps {
  color?: string;
  iconName: string;
  size?: number;
}

type IconsMapping = Record<string, React.ComponentType<IconBaseProps>>;

export const Icon = ({ color, iconName, size }: IconProps) => {
  const Icons: IconsMapping = {
    fa: dynamic(
      () =>
        import("react-icons/fa")
          .then((mod) => mod[iconName])
          .then((e) => e ?? FaRegCircle) as Promise<
          React.ComponentType<IconBaseProps>
        >,
    ),
    fi: dynamic(
      () =>
        import("react-icons/fi")
          .then((mod) => mod[iconName])
          .then((e) => e ?? FiCircle) as Promise<
          React.ComponentType<IconBaseProps>
        >,
    ),
    si: dynamic(
      () =>
        import("react-icons/si")
          .then((mod) => mod[iconName])
          .then((e) => e ?? SiReact) as Promise<
          React.ComponentType<IconBaseProps>
        >,
    ),
  };
  const DynamicIcon = iconName ? Icons.si : null;
  return (
    <div style={{ color, fontSize: size }}>
      {DynamicIcon ? <DynamicIcon /> : null}
    </div>
  );
};
