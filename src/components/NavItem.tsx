interface NavItemProps {
  href: string;
  text: string;
  isActive?: boolean;
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function NavItem({
  href,
  text,
  isActive = false,
  onMouseEnter,
  onMouseLeave,
}: NavItemProps) {
  return (
    <li>
      <a
        className={`flex items-center gap-3 ${isActive ? "text-amber-400" : "text-zinc-400"}`}
        href={href}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onMouseEnter}
      >
        {text}
        <span
          className={`transition-all ${
            isActive ? "h-2 w-4 bg-amber-400" : "h-1 w-1 bg-zinc-400"
          }`}
        ></span>
      </a>
    </li>
  );
}
