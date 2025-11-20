import { useEffect, useState } from "react";
import NavItem from "./NavItem";

type navItem = {
  href: string;
  label: string;
};

interface NavMenuProps {
  items: navItem[];
}

function NavMenu({ items }: NavMenuProps) {
  const [active, setActive] = useState<string>(items[0].href);
  useEffect(() => {
    const sections = items.map((item) => {
      const id = item.href.replace("#", "");
      return document.getElementById(id);
    });

    const onScroll = () => {
      let current = items[0].href;

      sections.forEach((section, i) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();

        if (rect.top <= 100 && rect.bottom >= 100) {
          current = items[i].href;
        }
      });

      setActive(current);
    };

    document.addEventListener("scroll", onScroll);
    onScroll();

    return () => document.removeEventListener("scroll", onScroll);
  }, [items]);

  return (
    <nav id="main-navigation">
      <ul className="flex flex-col gap-2 text-zinc-400 items-end">
        {items.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            text={item.label}
            isActive={item.href === active}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
