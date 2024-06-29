import dynamic from "next/dynamic";
import type { IconBaseProps } from "react-icons";
import { FaRegCircle } from "react-icons/fa";
import { FiCircle } from "react-icons/fi";
import { SiReact } from "react-icons/si";

interface IconProps {
  iconName: string;
  size?: number;
  color?: string;
}

type IconsMapping = Record<string, React.ComponentType<IconBaseProps>>;

export const Icon = ({ iconName, size, color }: IconProps) => {
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
    <div style={{ fontSize: size, color }}>
      {DynamicIcon ? <DynamicIcon /> : null}
    </div>
  );
};
