interface NavItemProps {
  href: string;
  text: string;
  isActive?: boolean;
}

export default function NavItem({
  href,
  text,
  isActive = false,
}: NavItemProps) {
  return (
    <li>
      <a
        className={`flex items-center gap-3 ${isActive ? "text-amber-400" : "text-zinc-400"}`}
        href={href}
      >
        {text}
        <span
          className={`transition-all ${
            isActive ? "bg-amber-400 h-2 w-4" : "h-1 w-1 bg-zinc-400"
          }`}
        ></span>
      </a>
    </li>
  );
}
