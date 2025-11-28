import type { SimpleIcon } from "simple-icons";

interface SimpleIconProps {
  icon: SimpleIcon;
  size?: number;
  className?: string;
}

export default function SimpleIcon({
  icon,
  size = 24,
  className,
}: SimpleIconProps) {
  const path = icon.path;
  const color = `#f4f4f5`;
  const title = icon.title;
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        display: "inline-block",
        verticalAlign: "middle",
        fill: "currentColor",
      }}
    >
      <title>{title}</title>
      <path d={path}></path>
    </svg>
  );
}
