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
import {
  createRef,
  useState,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

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
    <ul className="flex w-48 min-w-48 flex-col transition-colors">
      {listItems.map((item) => (
        <li
          key={item.list}
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
  const lists: Array<{
    id: string;
    items: Array<SimpleIconType>;
    nodeRef: RefObject<HTMLDivElement> | undefined;
  }> = [
    {
      id: "languages",
      items: [siPhp, siGo, siJavascript, siTypescript, siHtml5, siCss, siC],
      nodeRef: createRef(),
    },
    {
      id: "front-end",
      items: [
        siReact,
        siVuedotjs,
        siNextdotjs,
        siAstro,
        siLivewire,
        siAlpinedotjs,
        siJquery,
        siTailwindcss,
      ],

      nodeRef: createRef(),
    },
    {
      id: "back-end",
      items: [siGin, siLaravel, siNodedotjs, siPocketbase, siWordpress],
      nodeRef: createRef(),
    },
    {
      id: "database",
      items: [siMysql, siPostgresql, siMongodb],
      nodeRef: createRef(),
    },
    {
      id: "dev-tools",
      items: [siDocker, siGit, siGithubactions, siPostman, siCloudflare],
      nodeRef: createRef(),
    },
  ];

  return (
    <div className="relative flex gap-4">
      <SkillNavMenu onSelect={setActiveList} active={activeList} />
      <TransitionGroup mode="out-in" className="relative w-full">
        {lists.map(
          (list) =>
            list.id === activeList && (
              <CSSTransition
                key={list.id}
                nodeRef={list.nodeRef}
                timeout={200}
                classNames="fade"
                unmountOnExit
              >
                <div
                  className="absolute inset-0 flex w-full flex-wrap content-start items-start gap-4"
                  ref={list.nodeRef}
                >
                  {list.items.map((icon, index) => (
                    <SkillCard key={index} icon={icon} />
                  ))}
                </div>
              </CSSTransition>
            ),
        )}
      </TransitionGroup>
    </div>
  );
}
