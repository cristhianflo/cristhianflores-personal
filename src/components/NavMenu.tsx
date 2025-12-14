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
  const [activeLinks, setActiveLinks] = useState<Set<string>>(() => new Set());

  useEffect(() => {
    const sections = items.map((item) => {
      const id = item.href.replace("#", "");
      return document.getElementById(id);
    });

    const onScroll = () => {
      const scrollActive = new Set<string>();

      sections.forEach((section, i) => {
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          scrollActive.add(items[i].href);
        }
      });

      setActiveLinks((prev) => {
        const next = new Set(prev);

        items.forEach((item) => {
          if (!scrollActive.has(item.href)) {
            next.delete(item.href);
          }
        });

        scrollActive.forEach((href) => next.add(href));

        return next;
      });
    };

    document.addEventListener("scroll", onScroll);
    onScroll();

    return () => document.removeEventListener("scroll", onScroll);
  }, [items]);

  const handleMouseEnter = (href: string) => {
    setActiveLinks((prev) => new Set(prev).add(href));
  };

  const handleMouseLeave = (href: string) => {
    setActiveLinks((prev) => {
      const next = new Set(prev);
      next.delete(href);
      return next;
    });
  };

  return (
    <nav id="main-navigation">
      <ul className="flex flex-col items-end gap-2 text-zinc-400">
        {items.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            text={item.label}
            isActive={activeLinks.has(item.href)}
            onMouseEnter={() => handleMouseEnter(item.href)}
            onMouseLeave={() => handleMouseLeave(item.href)}
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavMenu;
