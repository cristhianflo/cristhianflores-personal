import {
  siAlpinedotjs,
  siAstro,
  siC,
  siCloudflare,
  siCss,
  siDocker,
  siGin,
  siGit,
  siGithubactions,
  siGo,
  siHtml5,
  siJavascript,
  siJquery,
  siLaravel,
  siLivewire,
  siMongodb,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPocketbase,
  siPostgresql,
  siPostman,
  siReact,
  siTailwindcss,
  siTypescript,
  siVuedotjs,
  siWordpress,
  type SimpleIcon as SimpleIconType,
} from "simple-icons";
import SimpleIcon from "./SimpleIcon";
import { useState, type Dispatch, type SetStateAction } from "react";

const SkillCard = ({ icon }: { icon: SimpleIconType }) => {
  return (
    <div
      title={icon.title}
      className="group cursor-pointer rounded-md border border-amber-400 p-2 transition-colors hover:bg-amber-400/10"
    >
      <SimpleIcon
        size={48}
        className="group-hover:text-amber-400"
        icon={icon}
      />
    </div>
  );
};

type ListName =
  | "languages"
  | "front-end"
  | "back-end"
  | "database"
  | "dev-tools";

const SkillNavMenu = ({
  onSelect,
  active,
}: {
  onSelect: Dispatch<SetStateAction<ListName>>;
  active: ListName;
}) => {
  const listItems: Array<{
    list: ListName;
    label: string;
  }> = [
    {
      list: "languages",
      label: "Lenguajes",
    },
    {
      list: "front-end",
      label: "Front-end",
    },
    {
      list: "back-end",
      label: "Back-end",
    },
    {
      list: "database",
      label: "Bases de datos",
    },
    {
      list: "dev-tools",
      label: "DevOps",
    },
  ];
  return (
    <ul className="flex w-48 flex-col transition-colors">
      {listItems.map((item) => (
        <li
          onClick={() => onSelect(item.list)}
          className={`w-full cursor-pointer border-r-2 py-2 pr-8 pl-4 transition-colors hover:text-amber-400 ${active === item.list ? "text-amber-400" : ""}`}
        >
          {item.label}
        </li>
      ))}
    </ul>
  );
};

export default function SkillList() {
  const [activeList, setActiveList] = useState<ListName>("languages");
  const lists: {
    [key in ListName]: Array<SimpleIconType>;
  } = {
    languages: [siPhp, siGo, siJavascript, siTypescript, siHtml5, siCss, siC],
    "front-end": [
      siReact,
      siVuedotjs,
      siNextdotjs,
      siAstro,
      siLivewire,
      siAlpinedotjs,
      siJquery,
      siTailwindcss,
    ],
    "back-end": [siGin, siLaravel, siNodedotjs, siPocketbase, siWordpress],
    database: [siMysql, siPostgresql, siMongodb],
    "dev-tools": [siDocker, siGit, siGithubactions, siPostman, siCloudflare],
  };

  return (
    <div className="flex gap-4">
      <SkillNavMenu onSelect={setActiveList} active={activeList} />
      {Object.entries(lists).map((list) => (
        <div
          key={list[0]}
          className={`w-3/4 flex-wrap content-start items-start gap-4 ${list[0] === activeList ? "flex" : "hidden"}`}
        >
          {list[1].map((icon, index) => (
            <SkillCard key={index} icon={icon} />
          ))}
        </div>
      ))}
    </div>
  );
}
