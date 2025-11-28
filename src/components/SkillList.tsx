import {
  siLaravel,
  siPhp,
  siReact,
  siVuedotjs,
  type SimpleIcon as SimpleIconType,
} from "simple-icons";
import SimpleIcon from "./SimpleIcon";
import { useState, type Dispatch, type SetStateAction } from "react";

const SkillCard = ({ icon }: { icon: SimpleIconType }) => {
  return (
    <div className="border border-amber-400 p-2">
      <SimpleIcon size={36} icon={icon} />
    </div>
  );
};

type ListName = "front-end" | "back-end";

const SkillNavMenu = ({
  onSelect,
  active,
}: {
  onSelect: Dispatch<SetStateAction<ListName>>;
  active: ListName;
}) => {
  return (
    <div className="h-full w-48 border-r">
      <ul className="space-y-4 p-4 transition-colors">
        <li
          onClick={() => onSelect("front-end")}
          className={`cursor-pointer p-2 transition-colors hover:text-amber-400 ${active === "front-end" ? "text-amber-400" : ""}`}
        >
          Front-end
        </li>
        <li
          onClick={() => onSelect("back-end")}
          className={`cursor-pointer p-2 transition-colors hover:text-amber-400 ${active === "back-end" ? "text-amber-400" : ""}`}
        >
          Back-end
        </li>
      </ul>
    </div>
  );
};

export default function SkillList() {
  const [activeList, setActiveList] = useState<ListName>("front-end");
  const lists: {
    [key in ListName]: Array<SimpleIconType>;
  } = {
    "front-end": [siReact, siVuedotjs],
    "back-end": [siLaravel, siPhp],
  };

  return (
    <div className="flex gap-4">
      <SkillNavMenu onSelect={setActiveList} active={activeList} />
      {Object.entries(lists).map((list) => (
        <div
          key={list[0]}
          className={`grid-cols-6 gap-4 ${list[0] === activeList ? "grid" : "hidden"}`}
        >
          {list[1].map((icon, index) => (
            <SkillCard key={index} icon={icon} />
          ))}
        </div>
      ))}
    </div>
  );
}
