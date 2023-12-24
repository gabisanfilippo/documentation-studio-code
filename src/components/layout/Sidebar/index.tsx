import {
  BranchIcon,
  ConfigurationsIcon,
  DebugIcon,
  ExtensionsIcon,
  FileIcon,
  ProfileIcon,
  SearchIcon,
} from "@/assets/icons";
import { IMenuInfo, NameIconType } from "@/types/layout";
import { LayoutContext } from "../context";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export const Sidebar = () => {
  const { push } = useRouter();
  const { iconSelected, setIconSelected } = useContext(LayoutContext);

  const getColor = (name: NameIconType) => {
    if (iconSelected === name) return "white";
    return "#808080";
  };

  const getBorder = (name: NameIconType) => {
    if (iconSelected === name) return "border-l-2 border-white border-solid";
    return "border-0";
  };

  const topIcons: IMenuInfo[] = [
    {
      icon: <FileIcon color={getColor("files")} />,
      path: "/",
      name: "files",
    },
    {
      icon: <SearchIcon color={getColor("search")} />,
      path: "/",
      name: "search",
    },
    {
      icon: <BranchIcon height="25" width="20" color={getColor("branch")} />,
      path: "/",
      name: "branch",
    },
    {
      icon: <DebugIcon color={getColor("debug")} />,
      path: "/",
      name: "debug",
    },
    {
      icon: <ExtensionsIcon color={getColor("extensions")} />,
      path: "/",
      name: "extensions",
    },
  ];

  const bottomIcons: IMenuInfo[] = [
    {
      icon: <ProfileIcon color={getColor("profile")} />,
      path: "/",
      name: "profile",
    },
    {
      icon: <ConfigurationsIcon color={getColor("configurations")} />,
      path: "/",
      name: "configurations",
    },
  ];

  return (
    <nav className="fixed w-sidebar flex top-0 left-0 h-sidebar bg-base-16">
      <section className="flex flex-col justify-between items-center">
        <ul className="w-12 flex flex-col items-center">
          {topIcons.map((icon) => {
            return (
              <li
                className={`w-full py-3 flex justify-center cursor-pointer ${getBorder(
                  icon.name
                )}`}
                key={`menu icon ${icon.name}`}
                onClick={() => {
                  setIconSelected(icon.name);
                  push(icon.path);
                }}
              >
                {icon.icon}
              </li>
            );
          })}
        </ul>
        <ul className="w-12 flex flex-col items-center">
          {bottomIcons.map((icon) => {
            return (
              <li
                className={`w-full py-3 flex justify-center cursor-pointer ${getBorder(
                  icon.name
                )}`}
                key={`menu icon ${icon.name}`}
                onClick={() => {
                  setIconSelected(icon.name);
                  push(icon.path);
                }}
              >
                {icon.icon}
              </li>
            );
          })}
        </ul>
      </section>
      <section className="w-300px bg-base-19"></section>
    </nav>
  );
};
