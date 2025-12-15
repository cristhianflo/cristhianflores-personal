import { useEffect, useState } from "react";
import NavItem from "./NavItem";

type navItem = {
  href: string;
  section: string;
  label: string;
};

interface NavMenuProps {
  items: navItem[];
}

function NavMenu({ items }: NavMenuProps) {
  const [activeLink, setActiveLink] = useState(items[0].href);
  const [hoveredLink, setHoveredLink] = useState<string>("");

  useEffect(() => {
    const sections = items
      .map((item) => {
        const id = item.href.replace("#", "");
        return document.getElementById(id);
      })
      .filter((el): el is HTMLElement => Boolean(el));

    const handleScroll = () => {
      const activeSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (!activeSection) return;

      setActiveLink((prev) =>
        prev === "#" + activeSection.id ? prev : "#" + activeSection.id,
      );
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => document.removeEventListener("scroll", handleScroll);
  }, [items]);

  const handleMouseEnter = (href: string) => {
    setHoveredLink(href);
  };

  const handleMouseLeave = () => {
    setHoveredLink("");
  };

  return (
    <nav id="main-navigation">
      <ul className="flex flex-col items-end gap-2 text-zinc-400">
        {items.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            text={item.label}
            isActive={activeLink == item.href || hoveredLink == item.href}
            onMouseEnter={() => handleMouseEnter(item.href)}
            onMouseLeave={() => handleMouseLeave()}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
