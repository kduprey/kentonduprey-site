import dynamic from "next/dynamic";
import type { IconBaseProps } from "react-icons";
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
        // oxlint-disable-next-line react/todo -- React Compiler can't lower import(); it must stay inline so next/dynamic's SWC transform can register the chunk
        import("react-icons/fa")
          .then((mod) => mod[iconName])
          .then((e) => e ?? FaRegCircle) as Promise<
          React.ComponentType<IconBaseProps>
        >
    ),
    fi: dynamic(
      () =>
        // oxlint-disable-next-line react/todo -- React Compiler can't lower import(); it must stay inline so next/dynamic's SWC transform can register the chunk
        import("react-icons/fi")
          .then((mod) => mod[iconName])
          .then((e) => e ?? FiCircle) as Promise<
          React.ComponentType<IconBaseProps>
        >
    ),
    si: dynamic(
      () =>
        // oxlint-disable-next-line react/todo -- React Compiler can't lower import(); it must stay inline so next/dynamic's SWC transform can register the chunk
        import("react-icons/si")
          .then((mod) => mod[iconName])
          .then((e) => e ?? SiReact) as Promise<
          React.ComponentType<IconBaseProps>
        >
    ),
  };
  const DynamicIcon = iconName ? Icons.si : null;
  return (
    <div style={{ color, fontSize: size }}>
      {DynamicIcon ? <DynamicIcon /> : null}
    </div>
  );
};
